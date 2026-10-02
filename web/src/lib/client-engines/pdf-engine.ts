import { PDFDocument, degrees } from "pdf-lib";

/**
 * Unisce più file PDF in un unico documento PDF (in-memory)
 */
export async function mergePdfFiles(files: File[]): Promise<Uint8Array> {
  if (files.length < 2) {
    throw new Error("È necessario selezionare almeno due file PDF da unire.");
  }

  const mergedPdf = await PDFDocument.create();

  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  return await mergedPdf.save();
}

/**
 * Estrae pagine specifiche o intervalli da un file PDF
 * Esempio pageRange: "1, 3, 5-7"
 */
export async function splitPdfFile(file: File, pageRangeStr: string): Promise<Uint8Array> {
  const arrayBuffer = await file.arrayBuffer();
  const srcDoc = await PDFDocument.load(arrayBuffer);
  const totalPages = srcDoc.getPageCount();

  const pagesToExtract = parsePageRange(pageRangeStr, totalPages);
  if (pagesToExtract.length === 0) {
    throw new Error(`Nessuna pagina valida selezionata nell'intervallo specificato (il PDF ha ${totalPages} pagine).`);
  }

  const newDoc = await PDFDocument.create();
  const zeroBasedIndices = pagesToExtract.map((p) => p - 1);
  const copiedPages = await newDoc.copyPages(srcDoc, zeroBasedIndices);
  copiedPages.forEach((page) => newDoc.addPage(page));

  return await newDoc.save();
}

/**
 * Ruota tutte le pagine di un file PDF dell'angolo specificato (90°, 180°, 270°)
 */
export async function rotatePdfFile(file: File, rotationDegrees: 90 | 180 | 270): Promise<Uint8Array> {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  const pages = pdfDoc.getPages();

  pages.forEach((page) => {
    const currentRotation = page.getRotation().angle;
    page.setRotation(degrees((currentRotation + rotationDegrees) % 360));
  });

  return await pdfDoc.save();
}

/**
 * Converte una stringa di intervalli (es: "1-3, 5, 8") in un array ordinato di numeri di pagina univoci
 */
function parsePageRange(input: string, maxPages: number): number[] {
  const cleanInput = input.replace(/\s+/g, "");
  const parts = cleanInput.split(",");
  const pageSet = new Set<number>();

  for (const part of parts) {
    if (part.includes("-")) {
      const [startStr, endStr] = part.split("-");
      const start = parseInt(startStr, 10);
      const end = parseInt(endStr, 10);
      if (!isNaN(start) && !isNaN(end)) {
        const from = Math.max(1, Math.min(start, end));
        const to = Math.min(maxPages, Math.max(start, end));
        for (let i = from; i <= to; i++) {
          pageSet.add(i);
        }
      }
    } else {
      const page = parseInt(part, 10);
      if (!isNaN(page) && page >= 1 && page <= maxPages) {
        pageSet.add(page);
      }
    }
  }

  return Array.from(pageSet).sort((a, b) => a - b);
}

export interface ImageToPdfConfig {
  orientation: "auto" | "portrait" | "landscape";
  pageSize: "a4" | "fit";
  margin: number; // 0, 15, 30 pt
}

/**
 * Converte una serie di immagini in un unico documento PDF (100% client-side in RAM)
 */
export async function convertImagesToPdf(
  files: File[],
  config: ImageToPdfConfig = { orientation: "auto", pageSize: "a4", margin: 15 }
): Promise<Uint8Array> {
  if (files.length === 0) {
    throw new Error("Seleziona almeno un'immagine da convertire in PDF.");
  }

  const pdfDoc = await PDFDocument.create();

  // A4 dimensioni standard in punti (72 pt per pollice): 595.28 x 841.89
  const A4_WIDTH = 595.28;
  const A4_HEIGHT = 841.89;

  for (const file of files) {
    // Leggi immagine via elemento Image o canvas per supportare PNG, JPG, WebP in modo trasparente
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new Image();
      el.onload = () => resolve(el);
      el.onerror = reject;
      el.src = dataUrl;
    });

    // Renderizza su canvas ed esporta come PNG o JPEG standard per pdf-lib
    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth || img.width;
    canvas.height = img.naturalHeight || img.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Impossibile inizializzare il contesto Canvas.");
    ctx.drawImage(img, 0, 0);

    const isPng = file.type === "image/png" || file.name.toLowerCase().endsWith(".png");
    const mime = isPng ? "image/png" : "image/jpeg";
    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Errore rendering immagine"))), mime, 0.92);
    });

    const imageBytes = new Uint8Array(await blob.arrayBuffer());
    const embeddedImage = isPng ? await pdfDoc.embedPng(imageBytes) : await pdfDoc.embedJpg(imageBytes);

    const origW = embeddedImage.width;
    const origH = embeddedImage.height;

    let pageWidth = A4_WIDTH;
    let pageHeight = A4_HEIGHT;

    if (config.pageSize === "fit") {
      pageWidth = origW + config.margin * 2;
      pageHeight = origH + config.margin * 2;
    } else {
      // Formato A4
      let isLandscape = false;
      if (config.orientation === "landscape") {
        isLandscape = true;
      } else if (config.orientation === "auto") {
        isLandscape = origW > origH;
      }

      if (isLandscape) {
        pageWidth = A4_HEIGHT;
        pageHeight = A4_WIDTH;
      } else {
        pageWidth = A4_WIDTH;
        pageHeight = A4_HEIGHT;
      }
    }

    const page = pdfDoc.addPage([pageWidth, pageHeight]);

    const availW = pageWidth - config.margin * 2;
    const availH = pageHeight - config.margin * 2;

    const scale = Math.min(availW / origW, availH / origH, config.pageSize === "fit" ? 1 : 100);
    const drawW = origW * scale;
    const drawH = origH * scale;

    const x = config.margin + (availW - drawW) / 2;
    const y = config.margin + (availH - drawH) / 2;

    page.drawImage(embeddedImage, {
      x,
      y,
      width: drawW,
      height: drawH,
    });
  }

  return await pdfDoc.save();
}
