import JSZip from "jszip";
import { sanitizeFileName } from "../security-guard";

export interface ExtractedFile {
  name: string;
  size: number;
  blob: Blob;
}

/**
 * Crea un archivio ZIP compresso da una lista di file
 */
export async function createZipArchive(files: File[], zipName: string = "archivio.zip"): Promise<Blob> {
  if (files.length === 0) {
    throw new Error("Seleziona almeno un file da inserire nell'archivio ZIP.");
  }

  const zip = new JSZip();

  for (const file of files) {
    const cleanName = sanitizeFileName(file.name);
    const buffer = await file.arrayBuffer();
    zip.file(cleanName, buffer);
  }

  return await zip.generateAsync({
    type: "blob",
    compression: "DEFLATE",
    compressionOptions: { level: 6 }
  });
}

/**
 * Estrae i file da un archivio ZIP con protezione anti-Zip-Bomb (Security Guard)
 */
export async function extractZipArchive(
  zipFile: File,
  maxTotalSizeMB: number = 250
): Promise<ExtractedFile[]> {
  const zip = new JSZip();
  const buffer = await zipFile.arrayBuffer();
  const loadedZip = await zip.loadAsync(buffer);

  const results: ExtractedFile[] = [];
  let totalUncompressedBytes = 0;
  const maxBytes = maxTotalSizeMB * 1024 * 1024;

  const entries = Object.keys(loadedZip.files);

  for (const relativePath of entries) {
    const zipEntry = loadedZip.files[relativePath];

    // Ignora directory pure
    if (zipEntry.dir) continue;

    // Estrazione blob
    const fileBlob = await zipEntry.async("blob");
    totalUncompressedBytes += fileBlob.size;

    // Controllo Zip-Bomb: dimensione decompressa totale sproporzionata
    if (totalUncompressedBytes > maxBytes) {
      throw new Error(
        `Rilevato possibile archivio dannoso (Zip Bomb): la dimensione decompressa supera la soglia di sicurezza di ${maxTotalSizeMB}MB.`
      );
    }

    const cleanName = sanitizeFileName(relativePath);
    results.push({
      name: cleanName,
      size: fileBlob.size,
      blob: fileBlob
    });
  }

  return results;
}
