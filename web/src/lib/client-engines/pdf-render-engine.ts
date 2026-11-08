// Renders PDF pages to JPG/PNG images in the browser with pdf.js (Apache-2.0).
// The worker, fonts and WASM decoders are served from /vendor on our own domain.

import type { PDFDocumentProxy } from "pdfjs-dist";

type PdfJs = typeof import("pdfjs-dist");

let pdfjsPromise: Promise<PdfJs> | null = null;

function loadPdfJs(): Promise<PdfJs> {
  if (!pdfjsPromise) {
    pdfjsPromise = import("pdfjs-dist").then((m) => {
      m.GlobalWorkerOptions.workerSrc = "/vendor/pdfjs/pdf.worker.min.mjs";
      return m;
    });
  }
  return pdfjsPromise;
}

export function preloadPdfRenderer(): void {
  void loadPdfJs().catch(() => {});
}

export class PdfPasswordError extends Error {}

export async function openPdf(file: File, password?: string): Promise<PDFDocumentProxy> {
  const pdfjs = await loadPdfJs();
  const data = new Uint8Array(await file.arrayBuffer());
  const task = pdfjs.getDocument({
    data,
    password,
    standardFontDataUrl: "/vendor/pdfjs/standard_fonts/",
    wasmUrl: "/vendor/pdfjs/wasm/",
    isEvalSupported: false,
    // Never fetch anything for the document itself: the bytes are already in memory
    disableAutoFetch: true,
    disableStream: true,
  });
  try {
    return await task.promise;
  } catch (err) {
    if (err && typeof err === "object" && "name" in err && (err as { name: string }).name === "PasswordException") {
      throw new PdfPasswordError("password");
    }
    throw err;
  }
}

export type PageImageFormat = "image/jpeg" | "image/png" | "image/webp";

export interface RenderedPage {
  page: number;
  blob: Blob;
  width: number;
  height: number;
}

// Browsers refuse canvases above roughly 16k px per side or ~268M px in total
const MAX_SIDE = 12000;
const MAX_PIXELS = 100_000_000;

export async function renderPage(
  doc: PDFDocumentProxy,
  pageNumber: number,
  opts: { dpi: number; format: PageImageFormat; quality: number },
): Promise<RenderedPage> {
  const page = await doc.getPage(pageNumber);
  let scale = opts.dpi / 72;
  const base = page.getViewport({ scale: 1 });
  const maxScaleSide = MAX_SIDE / Math.max(base.width, base.height);
  const maxScalePixels = Math.sqrt(MAX_PIXELS / (base.width * base.height));
  scale = Math.min(scale, maxScaleSide, maxScalePixels);
  const viewport = page.getViewport({ scale });

  const canvas = document.createElement("canvas");
  canvas.width = Math.floor(viewport.width);
  canvas.height = Math.floor(viewport.height);
  const ctx = canvas.getContext("2d")!;
  // JPG has no transparency: paint white paper first
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // "print" intent renders without requestAnimationFrame, so it keeps going in a background tab
  await page.render({ canvas, canvasContext: ctx, viewport, intent: "print" }).promise;
  page.cleanup();

  const blob = await new Promise<Blob>((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Encoding failed"))), opts.format, opts.quality),
  );
  const result = { page: pageNumber, blob, width: canvas.width, height: canvas.height };
  canvas.width = 0;
  canvas.height = 0;
  return result;
}

/** Parses "1-3, 5, 8-" into page numbers within 1..total. Empty = all pages. */
export function parsePageSelection(input: string, total: number): number[] {
  const trimmed = input.trim();
  if (!trimmed) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set<number>();
  for (const part of trimmed.split(/[,;\s]+/).filter(Boolean)) {
    const m = part.match(/^(\d*)\s*-\s*(\d*)$/);
    if (m) {
      const from = m[1] ? Number(m[1]) : 1;
      const to = m[2] ? Number(m[2]) : total;
      for (let p = Math.max(1, from); p <= Math.min(total, to); p++) pages.add(p);
    } else if (/^\d+$/.test(part)) {
      const p = Number(part);
      if (p >= 1 && p <= total) pages.add(p);
    }
  }
  return [...pages].sort((a, b) => a - b);
}
