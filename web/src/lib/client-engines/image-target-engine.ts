// Compresses an image to fit under a target file size (e.g. 100 KB for an online form).
// Strategy: binary-search the encoder quality; if even a low quality is too big,
// scale the image down and search again. Everything runs on a local canvas.

export type TargetFormat = "image/jpeg" | "image/webp";

export interface TargetResult {
  blob: Blob;
  width: number;
  height: number;
  quality: number;
  reachedTarget: boolean;
}

const MIN_QUALITY = 0.35;
const MAX_QUALITY = 0.95;

function encode(canvas: HTMLCanvasElement, format: TargetFormat, quality: number): Promise<Blob> {
  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Encoding failed"))), format, quality),
  );
}

function draw(bitmap: ImageBitmap, width: number, height: number): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = width;
  c.height = height;
  const ctx = c.getContext("2d")!;
  // White matte: JPG has no transparency, and a black fill would ruin PNG logos
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(bitmap, 0, 0, width, height);
  return c;
}

/** Best quality at this size that stays under the target, or null if none does. */
async function searchQuality(canvas: HTMLCanvasElement, format: TargetFormat, target: number) {
  let lo = MIN_QUALITY;
  let hi = MAX_QUALITY;
  let best: { blob: Blob; quality: number } | null = null;
  const top = await encode(canvas, format, hi);
  if (top.size <= target) return { blob: top, quality: hi };
  for (let i = 0; i < 7; i++) {
    const q = (lo + hi) / 2;
    const blob = await encode(canvas, format, q);
    if (blob.size <= target) {
      best = { blob, quality: q };
      lo = q;
    } else {
      hi = q;
    }
  }
  if (!best) {
    const low = await encode(canvas, format, MIN_QUALITY);
    if (low.size <= target) best = { blob: low, quality: MIN_QUALITY };
  }
  return best;
}

export async function compressToTarget(
  file: File,
  opts: { targetBytes: number; format: TargetFormat; maxSide?: number },
): Promise<TargetResult> {
  const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" } as ImageBitmapOptions);
  try {
    let width = bitmap.width;
    let height = bitmap.height;
    if (opts.maxSide && Math.max(width, height) > opts.maxSide) {
      const k = opts.maxSide / Math.max(width, height);
      width = Math.round(width * k);
      height = Math.round(height * k);
    }

    let lastBlob: Blob | null = null;
    for (let attempt = 0; attempt < 8; attempt++) {
      const canvas = draw(bitmap, width, height);
      const found = await searchQuality(canvas, opts.format, opts.targetBytes);
      if (found) return { blob: found.blob, width, height, quality: found.quality, reachedTarget: true };

      // Too big even at low quality: shrink proportionally to the overshoot and retry
      lastBlob = await encode(canvas, opts.format, MIN_QUALITY);
      const ratio = Math.sqrt(opts.targetBytes / lastBlob.size) * 0.92;
      const k = Math.min(0.9, Math.max(0.3, ratio));
      width = Math.max(16, Math.round(width * k));
      height = Math.max(16, Math.round(height * k));
      canvas.width = 0;
    }
    const canvas = draw(bitmap, width, height);
    const blob = await encode(canvas, opts.format, MIN_QUALITY);
    return { blob, width, height, quality: MIN_QUALITY, reachedTarget: blob.size <= opts.targetBytes };
  } finally {
    bitmap.close();
  }
}
