"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { parseSpreadsheet, ParsedSpreadsheet, createExcelFromCsv } from "@/lib/client-engines/spreadsheet-engine";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { Sheet, Download, CheckCircle2, Loader2, RefreshCw, FileSpreadsheet, Eye } from "lucide-react";

export const ExcelConvertTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [parsed, setParsed] = useState<ParsedSpreadsheet | null>(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = async (files: File[]) => {
    if (files.length === 0) return;
    const f = files[0];
    setFile(f);
    setError(null);
    setProcessing(true);

    try {
      const data = await parseSpreadsheet(f);
      setParsed(data);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante la lettura del foglio Excel.";
      setError(msg);
      setParsed(null);
    } finally {
      setProcessing(false);
    }
  };

  const downloadCsv = () => {
    if (!parsed) return;
    const blob = new Blob([parsed.csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    triggerDownload(url, `${file?.name.split(".")[0] || "dati"}.csv`);
  };

  const downloadJson = () => {
    if (!parsed) return;
    const blob = new Blob([JSON.stringify(parsed.jsonData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    triggerDownload(url, `${file?.name.split(".")[0] || "dati"}.json`);
  };

  const downloadXlsx = () => {
    if (!parsed) return;
    const blob = createExcelFromCsv(parsed.csv);
    const url = URL.createObjectURL(blob);
    triggerDownload(url, `${file?.name.split(".")[0] || "foglio"}_convertito.xlsx`);
  };

  const triggerDownload = (url: string, filename: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const resetAll = () => {
    setFile(null);
    setParsed(null);
    setError(null);
  };

  return (
    <div className="space-y-6">
      {!parsed ? (
        <>
          <Dropzone
            accept=".xlsx,.xls,.ods,.csv"
            multiple={false}
            maxSizeMB={50}
            onFilesSelected={handleFilesSelected}
            helperText="Trascina il foglio di calcolo Excel (.xlsx, .xls, .csv, .ods)"
          />

          {processing && (
            <div className="flex flex-col items-center justify-center py-10">
              <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                Parsing del foglio Excel in memoria locale...
              </p>
            </div>
          )}

          {error && (
            <div className="mt-4 rounded-xl bg-red-50 p-4 text-xs text-red-700 dark:bg-red-950/40 dark:text-red-300">
              {error}
            </div>
          )}
        </>
      ) : (
        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                  <FileSpreadsheet className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-white">
                    {sanitizeFileName(file?.name || "foglio.xlsx")}
                  </h4>
                  <p className="text-xs text-zinc-500">
                    {file ? formatBytes(file.size) : ""} • Fogli: {parsed.sheetNames.join(", ")}
                  </p>
                </div>
              </div>

              <button onClick={resetAll} className="text-xs text-red-600 hover:underline">
                Carica un altro foglio
              </button>
            </div>

            {/* Azioni di Esportazione Rapida */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <button
                onClick={downloadCsv}
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 active:scale-95"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Esporta in CSV</span>
              </button>

              <button
                onClick={downloadJson}
                className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              >
                <Download className="h-3.5 w-3.5 text-blue-600" />
                <span>Esporta in JSON</span>
              </button>

              <button
                onClick={downloadXlsx}
                className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              >
                <Download className="h-3.5 w-3.5 text-emerald-600" />
                <span>Rigenera Excel .XLSX</span>
              </button>
            </div>

            {/* Anteprima Tabellare in-browser */}
            <div className="mt-6">
              <div className="flex items-center gap-1.5 pb-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                <Eye className="h-4 w-4 text-emerald-600" />
                <span>Anteprima Dati Foglio ({parsed.rows.length} righe visibili)</span>
              </div>

              <div className="max-h-72 overflow-x-auto overflow-y-auto rounded-xl border border-zinc-200 text-xs dark:border-zinc-800">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-zinc-100/80 sticky top-0 dark:bg-zinc-800">
                    <tr>
                      {parsed.headers.map((h, idx) => (
                        <th key={idx} className="border-b border-zinc-200 p-2.5 font-bold text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
                          {h || `Colonna ${idx + 1}`}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {parsed.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        {parsed.headers.map((_, cIdx) => (
                          <td key={cIdx} className="p-2.5 text-zinc-600 dark:text-zinc-300 whitespace-nowrap">
                            {row[cIdx] !== undefined ? String(row[cIdx]) : ""}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <AdBanner slot="action-card" />
        </div>
      )}
    </div>
  );
};
