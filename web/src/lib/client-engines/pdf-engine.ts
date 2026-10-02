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
