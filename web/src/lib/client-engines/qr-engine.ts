import QRCode from "qrcode";

export interface QrOptions {
  width?: number;
  margin?: number;
  errorCorrectionLevel?: "L" | "M" | "Q" | "H";
  color?: {
    dark?: string;
    light?: string;
  };
}

/**
 * Genera un QR code client-side come Data URL PNG
 */
export async function generateQrDataUrl(
  text: string,
  options: QrOptions = {}
): Promise<string> {
  if (!text || text.trim() === "") {
    throw new Error("Inserisci del testo o un URL per generare il codice QR.");
  }

  return await QRCode.toDataURL(text, {
    width: options.width || 400,
    margin: options.margin || 2,
    errorCorrectionLevel: options.errorCorrectionLevel || "M",
    color: {
      dark: options.color?.dark || "#000000",
      light: options.color?.light || "#ffffff",
    },
  });
}
