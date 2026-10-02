/**
 * Motore di elaborazione immagini 100% in-browser basato su HTML5 Canvas e Web APIs
 */

export interface CompressionResult {
  blob: Blob;
  originalSize: number;
  newSize: number;
  savingsPercent: number;
  dataUrl: string;
}

/**
 * Carica un oggetto File o Blob in un elemento HTMLImageElement
 */
function loadImage(file: File | Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Impossibile decodificare l'immagine. File danneggiato o formato non supportato."));
    };

    img.src = url;
  });
}

/**
 * Converte il formato di un'immagine (PNG, JPEG, WebP)
 */
export async function convertImageFormat(
  file: File,
  targetFormat: "image/png" | "image/jpeg" | "image/webp",
  quality: number = 0.92
): Promise<Blob> {
  const img = await loadImage(file);
  const canvas = document.createElement("canvas");
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Impossibile inizializzare il contesto Canvas 2D.");

  // Se convertiamo in JPEG, riempiamo lo sfondo con bianco (per gestire le trasparenze PNG)
  if (targetFormat === "image/jpeg") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  ctx.drawImage(img, 0, 0);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error("Errore durante la conversione dell'immagine in Blob."));
      },
      targetFormat,
      quality
    );
  });
}

/**
 * Comprime un'immagine riducendo la qualità di campionamento e opzionalmente ridimensionandola
 */
export async function compressImage(
  file: File,
  quality: number = 0.8,
  maxWidth?: number
): Promise<CompressionResult> {
  const img = await loadImage(file);

  let targetWidth = img.naturalWidth;
  let targetHeight = img.naturalHeight;

  if (maxWidth && targetWidth > maxWidth) {
    targetHeight = Math.round((targetHeight * maxWidth) / targetWidth);
    targetWidth = maxWidth;
  }

  const canvas = document.createElement("canvas");
  canvas.width = targetWidth;
  canvas.height = targetHeight;

  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Contesto canvas non disponibile.");

  ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

  // Formato di destinazione: se era PNG e non abbiamo trasparenza o vogliamo comprimere, usiamo WebP o JPEG
  const targetFormat = file.type === "image/png" ? "image/webp" : file.type;

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Compressione fallita."));
          return;
        }

        const savings = Math.max(0, Math.round(((file.size - blob.size) / file.size) * 100));
        const dataUrl = canvas.toDataURL(targetFormat, quality);

        resolve({
          blob,
          originalSize: file.size,
          newSize: blob.size,
          savingsPercent: savings,
          dataUrl
        });
      },
      targetFormat,
      quality
    );
  });
}
