import {
  PDFDocument,
  PDFName,
  PDFRawStream,
  PDFNumber,
  PDFArray,
  PDFDict,
  PDFRef,
  PDFObject,
} from "pdf-lib";

/**
 * Compressione PDF 100% client-side.
 * Strategia: ricodifica le immagini incorporate (JPEG/DCT e bitmap Flate RGB/Gray a 8 bit)
 * a risoluzione e qualità inferiori tramite canvas, lasciando intatti testo e grafica vettoriale.
 * Nessun byte del documento lascia il browser.
 */

export interface CompressLevel {
  /** Lato massimo in pixel di ogni immagine ricodificata */
  maxDim: number;
  /** Qualità JPEG 0..1 */
  quality: number;
}

export const COMPRESS_LEVELS: Record<"light" | "medium" | "strong", CompressLevel> = {
  light: { maxDim: 2400, quality: 0.8 },
  medium: { maxDim: 1600, quality: 0.65 },
  strong: { maxDim: 1100, quality: 0.45 },
};

/** Scala progressiva usata dalla modalità "sotto X MB" */
const TARGET_LADDER: CompressLevel[] = [
  { maxDim: 2200, quality: 0.75 },
  { maxDim: 1700, quality: 0.62 },
  { maxDim: 1300, quality: 0.5 },
  { maxDim: 1000, quality: 0.4 },
  { maxDim: 800, quality: 0.32 },
  { maxDim: 600, quality: 0.25 },
];

export interface CompressResult {
  bytes: Uint8Array;
  imagesFound: number;
  imagesRecompressed: number;
  level: CompressLevel;
  reachedTarget?: boolean;
}

type ProgressFn = (done: number, total: number) => void;

const N = (s: string) => PDFName.of(s);

function filterNames(dict: PDFDict): string[] {
  const f = dict.lookup(N("Filter"));
  if (!f) return [];
  if (f instanceof PDFName) return [f.decodeText()];
  if (f instanceof PDFArray) {
    return f.asArray().map((x) => (x instanceof PDFName ? x.decodeText() : ""));
  }
  return [];
}

/** Restituisce il numero di componenti colore supportate (1 o 3), oppure null se non gestibile */
function colorComponents(dict: PDFDict): number | null {
  const cs = dict.lookup(N("ColorSpace"));
  const fromName = (name: string): number | null => {
    if (name === "DeviceRGB" || name === "CalRGB") return 3;
    if (name === "DeviceGray" || name === "CalGray") return 1;
    return null;
  };
  if (cs instanceof PDFName) return fromName(cs.decodeText());
  if (cs instanceof PDFArray && cs.size() >= 1) {
    const kind = cs.lookup(0);
    if (!(kind instanceof PDFName)) return null;
    const k = kind.decodeText();
    if (k === "CalRGB" || k === "CalGray") return fromName(k);
    if (k === "ICCBased") {
      const profile = cs.lookup(1);
      const dictOf = profile instanceof PDFRawStream ? profile.dict : null;
      const n = dictOf?.lookup(N("N"));
      if (n instanceof PDFNumber) {
        const v = n.asNumber();
        return v === 3 || v === 1 ? v : null;
      }
    }
  }
  return null;
}

async function inflate(data: Uint8Array): Promise<Uint8Array> {
  const ds = new DecompressionStream("deflate");
  const stream = new Blob([data as BlobPart]).stream().pipeThrough(ds);
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

/** Rimuove il predittore PNG (Predictor >= 10) da dati Flate già decompressi */
function undoPngPredictor(data: Uint8Array, width: number, colors: number): Uint8Array | null {
  const rowLen = width * colors;
  const stride = rowLen + 1;
  const rows = Math.floor(data.length / stride);
  const out = new Uint8Array(rows * rowLen);
  const bpp = colors;
  for (let y = 0; y < rows; y++) {
    const type = data[y * stride];
    const src = y * stride + 1;
    const dst = y * rowLen;
    const prev = dst - rowLen;
    for (let x = 0; x < rowLen; x++) {
      const raw = data[src + x];
      const a = x >= bpp ? out[dst + x - bpp] : 0;
      const b = y > 0 ? out[prev + x] : 0;
      const c = x >= bpp && y > 0 ? out[prev + x - bpp] : 0;
      let v: number;
      switch (type) {
        case 0: v = raw; break;
        case 1: v = raw + a; break;
        case 2: v = raw + b; break;
        case 3: v = raw + ((a + b) >> 1); break;
        case 4: {
          const p = a + b - c;
          const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
          v = raw + (pa <= pb && pa <= pc ? a : pb <= pc ? b : c);
          break;
        }
        default: return null;
      }
      out[dst + x] = v & 0xff;
    }
  }
  return out;
}

function makeCanvas(w: number, h: number): OffscreenCanvas | HTMLCanvasElement {
  if (typeof OffscreenCanvas !== "undefined") return new OffscreenCanvas(w, h);
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  return c;
}

async function canvasToJpeg(canvas: OffscreenCanvas | HTMLCanvasElement, quality: number): Promise<Uint8Array> {
  let blob: Blob | null;
  if ("convertToBlob" in canvas) {
    blob = await canvas.convertToBlob({ type: "image/jpeg", quality });
  } else {
    blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, "image/jpeg", quality));
  }
  if (!blob) throw new Error("Canvas JPEG encoding failed");
  return new Uint8Array(await blob.arrayBuffer());
}

/** Decodifica la sorgente dell'immagine in un oggetto disegnabile su canvas */
async function decodeImage(stream: PDFRawStream, width: number, height: number): Promise<CanvasImageSource | null> {
  const dict = stream.dict;
  const filters = filterNames(dict);
  const comps = colorComponents(dict);
  if (comps === null) return null;

  if (filters.length === 1 && filters[0] === "DCTDecode") {
    try {
      return await createImageBitmap(new Blob([stream.contents as BlobPart], { type: "image/jpeg" }));
    } catch {
      return null;
    }
  }

  if (filters.length === 1 && filters[0] === "FlateDecode") {
    const bpc = dict.lookup(N("BitsPerComponent"));
    if (!(bpc instanceof PDFNumber) || bpc.asNumber() !== 8) return null;
    let raw = await inflate(stream.contents);
    const parms = dict.lookup(N("DecodeParms"));
    if (parms instanceof PDFDict) {
      const pred = parms.lookup(N("Predictor"));
      const p = pred instanceof PDFNumber ? pred.asNumber() : 1;
      if (p >= 10) {
        const un = undoPngPredictor(raw, width, comps);
        if (!un) return null;
        raw = un;
      } else if (p !== 1) {
        return null;
      }
    } else if (parms) {
      return null;
    }
    if (raw.length < width * height * comps) return null;
    const rgba = new Uint8ClampedArray(width * height * 4);
    for (let i = 0, j = 0; i < width * height; i++, j += comps) {
      const o = i * 4;
      if (comps === 3) {
        rgba[o] = raw[j];
        rgba[o + 1] = raw[j + 1];
        rgba[o + 2] = raw[j + 2];
      } else {
        rgba[o] = rgba[o + 1] = rgba[o + 2] = raw[j];
      }
      rgba[o + 3] = 255;
    }
    return await createImageBitmap(new ImageData(rgba, width, height));
  }

  return null;
}

/** Raccoglie i ref degli oggetti usati come maschere (SMask/Mask) per non degradarne l'alfa */
function collectMaskRefs(doc: PDFDocument): Set<PDFRef> {
  const masks = new Set<PDFRef>();
  for (const [, obj] of doc.context.enumerateIndirectObjects()) {
    if (!(obj instanceof PDFRawStream)) continue;
    for (const key of ["SMask", "Mask"]) {
      const v = obj.dict.get(N(key));
      if (v instanceof PDFRef) masks.add(v);
    }
  }
  return masks;
}

async function compressOnce(
  source: ArrayBuffer,
  level: CompressLevel,
  onProgress?: ProgressFn
): Promise<CompressResult> {
  const doc = await PDFDocument.load(source, { ignoreEncryption: false, updateMetadata: false });
  const masks = collectMaskRefs(doc);

  const candidates: Array<[PDFRef, PDFRawStream]> = [];
  for (const [ref, obj] of doc.context.enumerateIndirectObjects()) {
    if (!(obj instanceof PDFRawStream)) continue;
    if (obj.dict.get(N("Subtype")) !== N("Image")) continue;
    if (masks.has(ref)) continue;
    candidates.push([ref, obj]);
  }

  let recompressed = 0;
  for (let i = 0; i < candidates.length; i++) {
    const [ref, stream] = candidates[i];
    onProgress?.(i, candidates.length);
    const dict = stream.dict;

    // Salta immagini con caratteristiche non gestibili in sicurezza
    if (dict.get(N("ImageMask")) || dict.get(N("Decode"))) continue;
    // Mask a chiave colore (array): una ricodifica lossy la renderebbe imprecisa
    if (dict.lookup(N("Mask")) instanceof PDFArray) continue;
    const wObj = dict.lookup(N("Width"));
    const hObj = dict.lookup(N("Height"));
    if (!(wObj instanceof PDFNumber) || !(hObj instanceof PDFNumber)) continue;
    const width = wObj.asNumber();
    const height = hObj.asNumber();
    if (width < 16 || height < 16) continue;
    // Immagini molto piccole in byte: il guadagno non vale la perdita di qualità
    if (stream.contents.length < 8 * 1024) continue;

    let bitmap: CanvasImageSource | null = null;
    try {
      bitmap = await decodeImage(stream, width, height);
    } catch {
      bitmap = null;
    }
    if (!bitmap) continue;

    const scale = Math.min(1, level.maxDim / Math.max(width, height));
    const nw = Math.max(1, Math.round(width * scale));
    const nh = Math.max(1, Math.round(height * scale));
    const canvas = makeCanvas(nw, nh);
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null;
    if (!ctx) continue;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, nw, nh);
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(bitmap, 0, 0, nw, nh);
    if ("close" in bitmap && typeof bitmap.close === "function") bitmap.close();

    const jpeg = await canvasToJpeg(canvas, level.quality);
    if (jpeg.length >= stream.contents.length * 0.95) continue;

    const entries: Record<string, PDFObject | string | number> = {
      Type: "XObject",
      Subtype: "Image",
      Width: nw,
      Height: nh,
      ColorSpace: "DeviceRGB",
      BitsPerComponent: 8,
      Filter: "DCTDecode",
    };
    const newStream = doc.context.stream(jpeg, entries);
    for (const key of ["SMask", "Mask", "Interpolate", "Intent"]) {
      const v = dict.get(N(key));
      if (v) newStream.dict.set(N(key), v);
    }
    doc.context.assign(ref, newStream);
    recompressed++;
  }
  onProgress?.(candidates.length, candidates.length);

  const bytes = await doc.save({ useObjectStreams: true });
  return { bytes, imagesFound: candidates.length, imagesRecompressed: recompressed, level };
}

export async function compressPdf(
  file: File,
  level: CompressLevel,
  onProgress?: ProgressFn
): Promise<CompressResult> {
  const source = await file.arrayBuffer();
  return compressOnce(source, level, onProgress);
}

/**
 * Prova livelli via via più aggressivi finché il PDF scende sotto targetBytes.
 * Se nessun livello basta, restituisce il risultato più piccolo ottenuto.
 */
export async function compressPdfToTarget(
  file: File,
  targetBytes: number,
  onStep?: (step: number, totalSteps: number) => void
): Promise<CompressResult> {
  const source = await file.arrayBuffer();
  let best: CompressResult | null = null;
  for (let i = 0; i < TARGET_LADDER.length; i++) {
    onStep?.(i + 1, TARGET_LADDER.length);
    const res = await compressOnce(source.slice(0), TARGET_LADDER[i]);
    if (!best || res.bytes.length < best.bytes.length) best = res;
    if (res.bytes.length <= targetBytes) return { ...res, reachedTarget: true };
    // Nessuna immagine nel documento: livelli successivi non cambierebbero nulla
    if (res.imagesFound === 0) break;
  }
  return { ...(best as CompressResult), reachedTarget: false };
}
