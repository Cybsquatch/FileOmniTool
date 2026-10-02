import * as XLSX from "xlsx";

export interface ParsedSpreadsheet {
  sheetNames: string[];
  activeSheet: string;
  csv: string;
  jsonData: Record<string, unknown>[];
  headers: string[];
  rows: (string | number)[][];
}

/**
 * Legge ed analizza un foglio Excel (.xlsx, .xls, .ods, .csv) in memoria
 */
export async function parseSpreadsheet(file: File): Promise<ParsedSpreadsheet> {
  const arrayBuffer = await file.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: "array" });

  if (!workbook.SheetNames || workbook.SheetNames.length === 0) {
    throw new Error("Il file del foglio di calcolo non contiene fogli di lavoro validi.");
  }

  const sheetNames = workbook.SheetNames;
  const activeSheet = sheetNames[0];
  const worksheet = workbook.Sheets[activeSheet];

  const csv = XLSX.utils.sheet_to_csv(worksheet);
  const jsonData = XLSX.utils.sheet_to_json<Record<string, unknown>>(worksheet);
  const aoaData = XLSX.utils.sheet_to_json<(string | number)[]>(worksheet, { header: 1 });

  const headers = aoaData.length > 0 ? (aoaData[0] as string[]).map(String) : [];
  const rows = aoaData.slice(1, 20); // prime 20 righe per preview

  return {
    sheetNames,
    activeSheet,
    csv,
    jsonData,
    headers,
    rows
  };
}

/**
 * Converte testo CSV o JSON in un file Excel .xlsx scaricabile
 */
export function createExcelFromCsv(csvText: string, sheetName = "Foglio1"): Blob {
  const workbook = XLSX.read(csvText, { type: "string" });
  const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  return new Blob([wbout], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  });
}

/**
 * Converte array JSON in file Excel .xlsx
 */
export function createExcelFromJson(jsonData: Record<string, unknown>[], sheetName = "Dati"): Blob {
  const ws = XLSX.utils.json_to_sheet(jsonData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, sheetName);
  const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  return new Blob([wbout], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  });
}
