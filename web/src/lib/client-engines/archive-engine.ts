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

/**
 * RAR, 7z, TAR, GZ and other formats via libarchive (WebAssembly, MIT license).
 * The worker and WASM are served from /vendor on our own domain; nothing is uploaded.
 */
export async function extractAnyArchive(file: File, maxTotalSizeMB: number = 250): Promise<ExtractedFile[]> {
  if (/\.zip$/i.test(file.name)) return extractZipArchive(file, maxTotalSizeMB);

  const { Archive } = await import("libarchive.js");
  Archive.init({ workerUrl: "/vendor/libarchive/worker-bundle.js" });
  const archive = await Archive.open(file);
  if (await archive.hasEncryptedData()) {
    throw new Error("Archivio protetto da password: non supportato.");
  }

  // Bomb guard before extracting: sum the declared uncompressed sizes
  const listing = (await archive.getFilesArray()) as { file: { size?: number } }[];
  const declared = listing.reduce((sum, e) => sum + (e.file.size ?? 0), 0);
  const maxBytes = maxTotalSizeMB * 1024 * 1024;
  if (declared > maxBytes) {
    throw new Error(`Archivio troppo grande da estrarre nel browser (oltre ${maxTotalSizeMB}MB decompressi).`);
  }

  const results: ExtractedFile[] = [];
  let total = 0;
  await archive.extractFiles((entry: { file: File; path: string }) => {
    total += entry.file.size;
    if (total > maxBytes) return;
    results.push({ name: sanitizeFileName(`${entry.path}${entry.file.name}`), size: entry.file.size, blob: entry.file });
  });
  if (total > maxBytes) {
    throw new Error(`Archivio troppo grande da estrarre nel browser (oltre ${maxTotalSizeMB}MB decompressi).`);
  }
  return results;
}
