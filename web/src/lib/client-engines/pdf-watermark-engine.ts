// Adds a text watermark to every page of a PDF, locally with pdf-lib.

export type WatermarkLayout = "center" | "tiled";

export interface WatermarkOptions {
  text: string;
  fontSize: number;
  opacity: number; // 0..1
  rotation: number; // degrees
  color: string; // #rrggbb
  layout: WatermarkLayout;
  pages: number[] | null; // 1-based, null = all
}

function hexToRgb(hex: string) {
  const m = hex.replace("#", "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!m) return { r: 0.5, g: 0.5, b: 0.5 };
  return { r: parseInt(m[1], 16) / 255, g: parseInt(m[2], 16) / 255, b: parseInt(m[3], 16) / 255 };
}

export class UnsupportedCharsError extends Error {}

export async function addTextWatermark(file: File, opts: WatermarkOptions): Promise<Uint8Array> {
  const { PDFDocument, StandardFonts, rgb, degrees } = await import("pdf-lib");
  const doc = await PDFDocument.load(await file.arrayBuffer(), { ignoreEncryption: false });
  const font = await doc.embedFont(StandardFonts.HelveticaBold);

  // Standard PDF fonts only cover Latin characters (WinAnsi)
  try {
    font.encodeText(opts.text);
  } catch {
    throw new UnsupportedCharsError("chars");
  }

  const { r, g, b } = hexToRgb(opts.color);
  const color = rgb(r, g, b);
  const rad = (opts.rotation * Math.PI) / 180;
  const textWidth = font.widthOfTextAtSize(opts.text, opts.fontSize);
  const textHeight = font.heightAtSize(opts.fontSize);
  const wanted = opts.pages ? new Set(opts.pages) : null;

  doc.getPages().forEach((page, idx) => {
    if (wanted && !wanted.has(idx + 1)) return;
    const { width, height } = page.getSize();

    // Draws the text so that its visual centre lands on (cx, cy) despite the rotation
    const drawAt = (cx: number, cy: number) => {
      const dx = (textWidth / 2) * Math.cos(rad) - (textHeight / 3) * Math.sin(rad);
      const dy = (textWidth / 2) * Math.sin(rad) + (textHeight / 3) * Math.cos(rad);
      page.drawText(opts.text, {
        x: cx - dx,
        y: cy - dy,
        size: opts.fontSize,
        font,
        color,
        opacity: opts.opacity,
        rotate: degrees(opts.rotation),
      });
    };

    if (opts.layout === "center") {
      drawAt(width / 2, height / 2);
    } else {
      const stepX = Math.max(textWidth * 0.9, 120) + opts.fontSize * 2;
      const stepY = opts.fontSize * 5;
      let row = 0;
      for (let y = -stepY; y < height + stepY; y += stepY, row++) {
        const offset = row % 2 ? stepX / 2 : 0;
        for (let x = -stepX + offset; x < width + stepX; x += stepX) drawAt(x, y);
      }
    }
  });

  return doc.save({ useObjectStreams: true });
}
