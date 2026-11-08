// Background removal that runs entirely in the browser.
// Model: ormbg (ISNet architecture, Apache-2.0), executed with onnxruntime-web (MIT):
// on WebGPU when the GPU supports half precision, otherwise on WebAssembly with the
// 8-bit quantized model. The model file is downloaded once from Hugging Face and
// cached on the device; the user's image never leaves the browser.
//
// We tried BiRefNet first: its WebGPU kernels need more than the 16 storage buffers
// many Windows GPUs allow, and on WebAssembly it runs out of the 4 GB memory limit.

import type * as OrtNS from "onnxruntime-web";

type Ort = typeof OrtNS;

// Two models, pinned to a revision so they can't change under us:
// - "person": ormbg (ISNet, Apache-2.0), 1024 px, very clean on people and portraits
// - "object": U-2-Netp (Apache-2.0), 320 px, generic salient-object detection for products
export type BgMode = "person" | "object";
const MODEL_SETS = {
  person: {
    base: "https://huggingface.co/onnx-community/ormbg-ONNX/resolve/034e2d884afbab897e10e78fc5bb566b29533fd6/onnx/",
    size: 1024,
    normalize: false,
    files: { fp16: { file: "model_fp16.onnx", mb: 88 }, q8: { file: "model_quantized.onnx", mb: 44 } },
  },
  object: {
    base: "https://huggingface.co/BritishWerewolf/U-2-Netp/resolve/7112208dbac3a3642496c8d54e2f0f9bb3dc1dc8/onnx/",
    size: 320,
    normalize: true,
    files: { fp16: { file: "model.onnx", mb: 5 }, q8: { file: "model.onnx", mb: 5 } },
  },
} as const;
type Precision = "fp16" | "q8";
const MEAN = [0.485, 0.456, 0.406];
const STD = [0.229, 0.224, 0.225];

const MODEL_CACHE = "fileomnitool-models-v1";
// Cap on the output resolution, to keep memory reasonable on phones
const MAX_OUTPUT_SIDE = 4096;

export type BgBackend = "webgpu" | "wasm";

export interface BgProgress {
  stage: "runtime" | "download" | "init" | "process";
  loaded?: number;
  total?: number;
}

interface LoadedSession {
  session: OrtNS.InferenceSession;
  backend: BgBackend;
}

let ortPromise: Promise<Ort> | null = null;
const sessionPromises: Partial<Record<BgMode, Promise<LoadedSession>>> = {};
// Set when the GPU path fails at run time (driver limits, lost device): from then on we use the CPU
let gpuFailed = false;

function loadOrt(): Promise<Ort> {
  if (!ortPromise) {
    ortPromise = import("onnxruntime-web/webgpu").then((m) => {
      const ort = ((m as unknown as { default?: Ort }).default ?? m) as Ort;
      ort.env.logLevel = "error";
      return ort;
    });
  }
  return ortPromise;
}

async function pickBackend(): Promise<{ backend: BgBackend; precision: Precision }> {
  const gpu = (navigator as Navigator & { gpu?: { requestAdapter: () => Promise<{ features: Set<string> } | null> } }).gpu;
  if (gpu && !gpuFailed) {
    try {
      const adapter = await gpu.requestAdapter();
      if (adapter?.features.has("shader-f16")) return { backend: "webgpu", precision: "fp16" };
    } catch {
      /* fall through to wasm */
    }
  }
  return { backend: "wasm", precision: "q8" };
}

/** Download size and expected speed, shown to the user before the first run. */
export async function estimateModelDownloadMB(mode: BgMode): Promise<{ mb: number; cached: boolean; backend: BgBackend }> {
  const { backend, precision } = await pickBackend();
  const m = MODEL_SETS[mode];
  let cached = false;
  try {
    const cache = await caches.open(MODEL_CACHE);
    cached = !!(await cache.match(m.base + m.files[precision].file));
  } catch {
    /* Cache Storage unavailable (private mode): we just download again */
  }
  return { mb: m.files[precision].mb, cached, backend };
}

async function fetchModel(url: string, onProgress?: (p: BgProgress) => void): Promise<Uint8Array> {
  let cache: Cache | null = null;
  try {
    cache = await caches.open(MODEL_CACHE);
    const hit = await cache.match(url);
    if (hit) return new Uint8Array(await hit.arrayBuffer());
  } catch {
    cache = null;
  }

  // Only the model file is requested here: no image data is ever part of this request
  const res = await fetch(url, { credentials: "omit", referrerPolicy: "no-referrer" });
  if (!res.ok || !res.body) throw new Error(`Model download failed (${res.status})`);
  const total = Number(res.headers.get("content-length")) || 0;
  const reader = res.body.getReader();
  const chunks: Uint8Array[] = [];
  let loaded = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    loaded += value.length;
    onProgress?.({ stage: "download", loaded, total });
  }
  const data = new Uint8Array(loaded);
  let offset = 0;
  for (const c of chunks) {
    data.set(c, offset);
    offset += c.length;
  }
  if (cache) {
    try {
      await cache.put(url, new Response(data, { headers: { "content-type": "application/octet-stream" } }));
    } catch {
      /* Quota exceeded: it still works, it just downloads again next time */
    }
  }
  return data;
}

function getSession(mode: BgMode, onProgress?: (p: BgProgress) => void): Promise<LoadedSession> {
  if (!sessionPromises[mode]) {
    sessionPromises[mode] = (async () => {
      onProgress?.({ stage: "runtime" });
      const ort = await loadOrt();
      const { backend, precision } = await pickBackend();
      const m = MODEL_SETS[mode];
      const model = await fetchModel(m.base + m.files[precision].file, onProgress);
      onProgress?.({ stage: "init" });
      const session = await ort.InferenceSession.create(model, {
        executionProviders: backend === "webgpu" ? ["webgpu", "wasm"] : ["wasm"],
        graphOptimizationLevel: "all",
        logSeverityLevel: 3,
      });
      return { session, backend };
    })().catch((err) => {
      delete sessionPromises[mode];
      throw err;
    });
  }
  return sessionPromises[mode]!;
}

/** Starts fetching the runtime early, while the user is still choosing options. */
export function preloadBgRuntime(): void {
  void loadOrt().catch(() => {});
}

function makeCanvas(w: number, h: number): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  return c;
}

export interface BgResult {
  /** Image with transparent background, at the (possibly capped) original resolution */
  cutout: HTMLCanvasElement;
  width: number;
  height: number;
  backend: BgBackend;
  ms: number;
}

export async function removeBackground(file: File, mode: BgMode, onProgress?: (p: BgProgress) => void): Promise<BgResult> {
  const INPUT_SIZE = MODEL_SETS[mode].size;
  const normalize = MODEL_SETS[mode].normalize;
  const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" } as ImageBitmapOptions);
  const scale = Math.min(1, MAX_OUTPUT_SIDE / Math.max(bitmap.width, bitmap.height));
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);

  // Pre-processing: stretch to the model's square input, values 0..1 (ImageNet-normalised for U-2-Net), NCHW
  const inCanvas = makeCanvas(INPUT_SIZE, INPUT_SIZE);
  const inCtx = inCanvas.getContext("2d", { willReadFrequently: true })!;
  inCtx.imageSmoothingQuality = "high";
  inCtx.drawImage(bitmap, 0, 0, INPUT_SIZE, INPUT_SIZE);
  const px = inCtx.getImageData(0, 0, INPUT_SIZE, INPUT_SIZE).data;
  const plane = INPUT_SIZE * INPUT_SIZE;
  const f32 = new Float32Array(3 * plane);
  for (let i = 0; i < plane; i++) {
    for (let ch = 0; ch < 3; ch++) {
      const v = px[i * 4 + ch] / 255;
      f32[ch * plane + i] = normalize ? (v - MEAN[ch]) / STD[ch] : v;
    }
  }

  const ort = await loadOrt();
  const run = async () => {
    const { session, backend } = await getSession(mode, onProgress);
    onProgress?.({ stage: "process" });
    const started = performance.now();
    const input = new ort.Tensor("float32", f32, [1, 3, INPUT_SIZE, INPUT_SIZE]);
    try {
      const outputs = await session.run({ [session.inputNames[0]]: input });
      const out = outputs[session.outputNames[0]];
      return { out, backend, ms: performance.now() - started };
    } catch (err) {
      if (backend !== "webgpu") throw err;
      // GPU driver limits or a lost device: switch to the CPU path for good and retry once
      console.warn("WebGPU run failed, falling back to WebAssembly", err);
      gpuFailed = true;
      delete sessionPromises[mode];
      void session.release().catch(() => {});
      return null;
    }
  };
  const result = (await run()) ?? (await run());
  if (!result) throw new Error("Background removal failed");
  const { out, backend, ms } = result;
  const raw = out.data as Float32Array;

  // Post-processing: the first output is the alpha matte. Logits go through a sigmoid;
  // U-2-Net probabilities are min-max stretched, as the reference implementation does.
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < plane; i++) {
    const v = raw[i];
    if (v < min) min = v;
    if (v > max) max = v;
  }
  const logits = min < -0.01 || max > 1.01;
  const stretch = !logits && mode === "object" && max - min > 1e-6;
  const maskCanvas = makeCanvas(INPUT_SIZE, INPUT_SIZE);
  const maskCtx = maskCanvas.getContext("2d")!;
  const maskData = maskCtx.createImageData(INPUT_SIZE, INPUT_SIZE);
  for (let i = 0; i < plane; i++) {
    const a = logits ? 1 / (1 + Math.exp(-raw[i])) : stretch ? (raw[i] - min) / (max - min) : raw[i];
    maskData.data[i * 4 + 3] = Math.round(Math.min(1, Math.max(0, a)) * 255);
  }
  maskCtx.putImageData(maskData, 0, 0);
  out.dispose?.();

  // Composite at full resolution: the upscaled mask cuts the original pixels
  const cutout = makeCanvas(width, height);
  const ctx = cutout.getContext("2d")!;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(maskCanvas, 0, 0, width, height);
  ctx.globalCompositeOperation = "source-in";
  ctx.drawImage(bitmap, 0, 0, width, height);
  ctx.globalCompositeOperation = "source-over";
  bitmap.close();

  return { cutout, width, height, backend, ms: Math.round(ms) };
}

/** Flattens the cutout onto a background colour (or keeps transparency) and encodes it. */
export async function exportCutout(
  cutout: HTMLCanvasElement,
  opts: { background: string | null; format: "image/png" | "image/jpeg" | "image/webp"; quality?: number },
): Promise<Blob> {
  const c = makeCanvas(cutout.width, cutout.height);
  const ctx = c.getContext("2d")!;
  if (opts.background) {
    ctx.fillStyle = opts.background;
    ctx.fillRect(0, 0, c.width, c.height);
  }
  ctx.drawImage(cutout, 0, 0);
  return new Promise((resolve, reject) =>
    c.toBlob((b) => (b ? resolve(b) : reject(new Error("Encoding failed"))), opts.format, opts.quality ?? 0.92),
  );
}
