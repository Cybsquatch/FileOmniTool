/**
 * Motore di elaborazione crittografica e parsing dati in memoria
 */

/**
 * Calcola l'hash crittografico (SHA-256, SHA-512, SHA-1) usando la Web Crypto API del browser
 */
export async function calculateHash(
  data: string | ArrayBuffer,
  algorithm: "SHA-256" | "SHA-512" | "SHA-1" = "SHA-256"
): Promise<string> {
  const buffer = typeof data === "string" ? new TextEncoder().encode(data) : data;
  const hashBuffer = await window.crypto.subtle.digest(algorithm, buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

/**
 * Converte una stringa JSON in formato CSV con gestione escape virgolette
 */
export function jsonToCsv(jsonString: string): string {
  let parsed: unknown;
  try {
    parsed = JSON.parse(jsonString);
  } catch {
    throw new Error("Sintassi JSON non valida. Controlla parentesi o virgolette.");
  }

  const items = Array.isArray(parsed) ? parsed : [parsed];
  if (items.length === 0) return "";

  // Estrai tutte le chiavi uniche
  const headers = Array.from(
    new Set(
      items.flatMap((item) =>
        item && typeof item === "object" ? Object.keys(item) : []
      )
    )
  );

  if (headers.length === 0) {
    throw new Error("Il JSON fornito non contiene oggetti o proprietà da tabulare.");
  }

  const escapeCsv = (val: unknown): string => {
    if (val === null || val === undefined) return "";
    let str = typeof val === "object" ? JSON.stringify(val) : String(val);
    if (str.includes(",") || str.includes('"') || str.includes("\n")) {
      str = `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  };

  const headerLine = headers.map((h) => escapeCsv(h)).join(",");
  const dataRows = items.map((item) =>
    headers
      .map((header) => {
        const val = item && typeof item === "object" ? (item as Record<string, unknown>)[header] : "";
        return escapeCsv(val);
      })
      .join(",")
  );

  return [headerLine, ...dataRows].join("\n");
}

/**
 * Converte una stringa CSV in array di oggetti JSON
 */
export function csvToJson(csvString: string): string {
  const lines = csvString.trim().split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length < 2) {
    throw new Error("Il CSV deve contenere almeno una riga di intestazione e una riga di dati.");
  }

  const headers = lines[0].split(",").map((h) => h.replace(/^["']|["']$/g, "").trim());
  const rows = lines.slice(1);

  const result = rows.map((row) => {
    const values = row.split(",").map((v) => v.replace(/^["']|["']$/g, "").trim());
    const obj: Record<string, string> = {};
    headers.forEach((header, index) => {
      obj[header] = values[index] ?? "";
    });
    return obj;
  });

  return JSON.stringify(result, null, 2);
}
