/**
 * FileOmniTool - Security Guardrail Module
 * Progettato per sanificare input utente, prevenire DOM XSS e proteggere la memoria del browser
 */

export interface FileValidationResult {
  valid: boolean;
  error?: string;
  sanitizedName: string;
}

/**
 * Sanifica i nomi dei file per prevenire:
 * - Directory traversal (../, ..\)
 * - Script injection e tag HTML (<script>, onerror=, javascript:)
 * - Caratteri nulli (\0)
 * - Nomi eccessivamente lunghi che possono bloccare il rendering del DOM
 */
export function sanitizeFileName(rawName: string): string {
  if (!rawName) return "file_unnamed";

  // Rimuove caratteri di controllo ASCII e byte nulli
  let clean = rawName.replace(/[\x00-\x1F\x7F]/g, "");

  // Rimuove tentativi di traversal
  clean = clean.replace(/\.\.+[/\\]/g, "");

  // Rimuove tag HTML e simboli potenzialmente pericolosi per il DOM
  clean = clean.replace(/[<>:"/\\|?*]/g, "_");

  // Limita lunghezza massima a 80 caratteri preservando l'estensione
  if (clean.length > 80) {
    const parts = clean.split(".");
    if (parts.length > 1) {
      const ext = parts.pop();
      clean = parts.join(".").substring(0, 70) + "." + ext;
    } else {
      clean = clean.substring(0, 80);
    }
  }

  return clean.trim() || "file_sanitized";
}

/**
 * Valida la dimensione del file per prevenire Memory Exhaustion (Out Of Memory del tab browser)
 */
export function validateFileSize(file: File, maxSizeMB: number = 100): FileValidationResult {
  const sanitizedName = sanitizeFileName(file.name);
  const maxBytes = maxSizeMB * 1024 * 1024;

  if (file.size <= 0) {
    return {
      valid: false,
      error: `Il file "${sanitizedName}" è vuoto (0 byte).`,
      sanitizedName
    };
  }

  if (file.size > maxBytes) {
    return {
      valid: false,
      error: `Il file "${sanitizedName}" supera la dimensione massima supportata di ${maxSizeMB}MB (${(file.size / 1024 / 1024).toFixed(1)}MB).`,
      sanitizedName
    };
  }

  return { valid: true, sanitizedName };
}

/**
 * Formatta i byte in un formato leggibile (KB, MB, GB)
 */
export function formatBytes(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}
