/**
 * Motore di conversione da grafica vettoriale SVG a bitmap PNG/JPG ad alta risoluzione
 */
export async function convertSvgToPng(
  svgFile: File | string,
  scaleFactor: number = 2
): Promise<Blob> {
  let svgText = "";
  if (typeof svgFile === "string") {
    svgText = svgFile;
  } else {
    svgText = await svgFile.text();
  }

  // Sanificazione di base per rimuovere eventuali script malevoli all'interno dell'SVG
  svgText = svgText.replace(/<script[\s\S]*?<\/script>/gi, "");

  // Parsing dimensioni viewBox o width/height dell'SVG
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgText, "image/svg+xml");
  const svgEl = doc.querySelector("svg");

  if (!svgEl) {
    throw new Error("File SVG non valido o corrotto.");
  }

  let width = parseFloat(svgEl.getAttribute("width") || "0");
  let height = parseFloat(svgEl.getAttribute("height") || "0");

  if (!width || !height) {
    const viewBox = svgEl.getAttribute("viewBox");
    if (viewBox) {
      const parts = viewBox.split(/[\s,]+/).map(parseFloat);
      if (parts.length === 4) {
        width = parts[2];
        height = parts[3];
      }
    }
  }

  // Default fallback se non specificato
  width = width || 800;
  height = height || 600;

  const targetWidth = Math.round(width * scaleFactor);
  const targetHeight = Math.round(height * scaleFactor);

  const canvas = document.createElement("canvas");
  canvas.width = targetWidth;
  canvas.height = targetHeight;

  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Contesto Canvas 2D non disponibile.");

  const blob = new Blob([svgText], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
      URL.revokeObjectURL(url);
      canvas.toBlob(
        (pngBlob) => {
          if (pngBlob) resolve(pngBlob);
          else reject(new Error("Errore durante la generazione del PNG."));
        },
        "image/png",
        1.0
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Impossibile eseguire il rendering del file SVG."));
    };

    img.src = url;
  });
}
