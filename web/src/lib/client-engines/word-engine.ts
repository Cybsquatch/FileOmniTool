import mammoth from "mammoth";

export interface DocxConversionResult {
  html: string;
  rawText: string;
  wordCount: number;
  characterCount: number;
}

/**
 * Converte un file Microsoft Word .docx in HTML formattato e testo pulito
 */
export async function convertDocx(file: File): Promise<DocxConversionResult> {
  const arrayBuffer = await file.arrayBuffer();

  const [htmlResult, textResult] = await Promise.all([
    mammoth.convertToHtml({ arrayBuffer }),
    mammoth.extractRawText({ arrayBuffer })
  ]);

  const rawText = textResult.value || "";
  const words = rawText.trim().split(/\s+/).filter(Boolean).length;
  const chars = rawText.length;

  return {
    html: htmlResult.value,
    rawText,
    wordCount: words,
    characterCount: chars
  };
}
