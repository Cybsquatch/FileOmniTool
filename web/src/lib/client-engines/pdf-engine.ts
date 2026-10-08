import { PDFDocument, degrees, StandardFonts, rgb } from "pdf-lib";

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

export interface PageNumberConfig {
  position: "bottom-center" | "bottom-right" | "bottom-left" | "top-center" | "top-right";
  format: "page-of-total" | "page-slash-total" | "number-only";
  startPage: number;
  fontSize: number;
}

/**
 * Aggiunge numerazione delle pagine a un documento PDF
 */
export async function addPageNumbersToPdf(
  file: File,
  config: PageNumberConfig = {
    position: "bottom-center",
    format: "page-of-total",
    startPage: 1,
    fontSize: 10,
  }
): Promise<Uint8Array> {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const pages = pdfDoc.getPages();
  const totalPages = pages.length;

  pages.forEach((page, index) => {
    const pageNum = index + 1;
    if (pageNum < config.startPage) return;

    let text = `${pageNum}`;
    if (config.format === "page-of-total") {
      text = `Pagina ${pageNum} di ${totalPages}`;
    } else if (config.format === "page-slash-total") {
      text = `${pageNum} / ${totalPages}`;
    }

    const textWidth = font.widthOfTextAtSize(text, config.fontSize);
    const { width, height } = page.getSize();
    const margin = 25;

    let x = (width - textWidth) / 2;
    let y = margin;

    if (config.position === "bottom-right") {
      x = width - textWidth - margin;
      y = margin;
    } else if (config.position === "bottom-left") {
      x = margin;
      y = margin;
    } else if (config.position === "top-center") {
      x = (width - textWidth) / 2;
      y = height - margin - config.fontSize;
    } else if (config.position === "top-right") {
      x = width - textWidth - margin;
      y = height - margin - config.fontSize;
    }

    page.drawText(text, {
      x,
      y,
      size: config.fontSize,
      font,
      color: rgb(0.2, 0.2, 0.2),
    });
  });

  return await pdfDoc.save();
}

export interface PdfMetadataInfo {
  title?: string;
  author?: string;
  subject?: string;
  keywords?: string[];
  creator?: string;
  producer?: string;
  pageCount: number;
}

/**
 * Estrae i metadati di un PDF
 */
export async function getPdfMetadata(file: File): Promise<PdfMetadataInfo> {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  return {
    title: pdfDoc.getTitle() || "",
    author: pdfDoc.getAuthor() || "",
    subject: pdfDoc.getSubject() || "",
    keywords: pdfDoc.getKeywords() ? pdfDoc.getKeywords()!.split(",").map((k) => k.trim()) : [],
    creator: pdfDoc.getCreator() || "",
    producer: pdfDoc.getProducer() || "",
    pageCount: pdfDoc.getPageCount(),
  };
}

/**
 * Aggiorna o rimuove metadati da un PDF
 */
export async function setPdfMetadata(
  file: File,
  meta: {
    title?: string;
    author?: string;
    subject?: string;
    keywords?: string;
    creator?: string;
    producer?: string;
  }
): Promise<Uint8Array> {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);

  if (meta.title !== undefined) pdfDoc.setTitle(meta.title);
  if (meta.author !== undefined) pdfDoc.setAuthor(meta.author);
  if (meta.subject !== undefined) pdfDoc.setSubject(meta.subject);
  if (meta.keywords !== undefined) {
    pdfDoc.setKeywords(meta.keywords ? meta.keywords.split(",").map((s) => s.trim()) : []);
  }
  if (meta.creator !== undefined) pdfDoc.setCreator(meta.creator);
  if (meta.producer !== undefined) pdfDoc.setProducer(meta.producer);

  return await pdfDoc.save();
}

/**
 * Riordina o elimina pagine da un PDF
 * pageOrder è un array 0-based di indici
 */
export async function organizePdfPages(file: File, pageOrder: number[]): Promise<Uint8Array> {
  const arrayBuffer = await file.arrayBuffer();
  const srcDoc = await PDFDocument.load(arrayBuffer);
  const newDoc = await PDFDocument.create();

  const copiedPages = await newDoc.copyPages(srcDoc, pageOrder);
  copiedPages.forEach((page) => newDoc.addPage(page));

  return await newDoc.save();
}

/**
 * Converte testo grezzo in documento PDF multipagina
 */
export async function convertTextToPdf(
  text: string,
  options: { fontSize?: number; title?: string } = {}
): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const titleFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const fontSize = options.fontSize || 11;
  const lineHeight = fontSize * 1.45;
  const margin = 45;
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const maxLineWidth = pageWidth - margin * 2;

  const lines: string[] = [];
  const rawParagraphs = text.split("\n");

  for (const paragraph of rawParagraphs) {
    if (paragraph.trim() === "") {
      lines.push("");
      continue;
    }

    const words = paragraph.split(" ");
    let currentLine = "";

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, fontSize);
      if (testWidth > maxLineWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      lines.push(currentLine);
    }
  }

  let currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
  let currentY = pageHeight - margin;

  if (options.title) {
    currentPage.drawText(options.title, {
      x: margin,
      y: currentY - 18,
      size: 18,
      font: titleFont,
      color: rgb(0.1, 0.1, 0.1),
    });
    currentY -= 40;
  }

  for (const line of lines) {
    if (currentY - lineHeight < margin) {
      currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
      currentY = pageHeight - margin;
    }

    if (line.trim() !== "") {
      currentPage.drawText(line, {
        x: margin,
        y: currentY - fontSize,
        size: fontSize,
        font,
        color: rgb(0.15, 0.15, 0.15),
      });
    }

    currentY -= lineHeight;
  }

  return await pdfDoc.save();
}

/**
 * Estrae testo da PDF leggendo gli oggetti stream/testo direttamente in memoria
 */
export async function extractTextFromPdf(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();
  const textDecoder = new TextDecoder("latin1");
  const rawString = textDecoder.decode(buffer);

  // Cerca blocchi tra BT ed ET
  const matches = rawString.match(/BT[\s\S]*?ET/g);
  if (!matches || matches.length === 0) {
    return "Nessun blocco di testo testuale individuato nel documento PDF. Il documento potrebbe contenere immagini scansionate o font incorporati non standard.";
  }

  const extractedPieces: string[] = [];
  for (const block of matches) {
    // Estrai stringhe tra parentesi: (Testo)
    const parenMatches = block.match(/\(([^)]*)\)/g);
    if (parenMatches) {
      const line = parenMatches
        .map((p) => p.slice(1, -1).replace(/\\([()\\])/g, "$1"))
        .filter((t) => t.trim().length > 0)
        .join(" ");
      if (line.trim()) {
        extractedPieces.push(line);
      }
    }
  }

  if (extractedPieces.length === 0) {
    return "Impossibile estrarre testo puro. Il documento potrebbe contenere testo convertito in curve vettoriali o immagini raster.";
  }

  return extractedPieces.join("\n");
}

