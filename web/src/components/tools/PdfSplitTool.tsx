"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { splitPdfFile } from "@/lib/client-engines/pdf-engine";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { Split, Download, CheckCircle2, Loader2, RefreshCw } from "lucide-react";

export const PdfSplitTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [pageRange, setPageRange] = useState("1");
  const [processing, setProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [resultSize, setResultSize] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = (files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
      setDownloadUrl(null);
      setError(null);
    }
  };

  const handleSplit = async () => {
    if (!file) return;

    try {
      setProcessing(true);
      setError(null);

      const splitBytes = await splitPdfFile(file, pageRange);
      const blob = new Blob([splitBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);
      setResultSize(blob.size);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante la divisione del PDF.";
      setError(msg);
    } finally {
      setProcessing(false);
    }
  };

  const resetAll = () => {
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setFile(null);
    setDownloadUrl(null);
    setResultSize(null);
    setError(null);
  };

  return (
    <div className="space-y-6">
      {!downloadUrl ? (
        <>
          {!file ? (
            <Dropzone
              accept=".pdf,application/pdf"
              multiple={false}
              maxSizeMB={150}
              onFilesSelected={handleFilesSelected}
              helperText="Trascina qui il file PDF da dividere"
            />
          ) : (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-white">
                    {sanitizeFileName(file.name)}
                  </h4>
                  <p className="text-xs text-zinc-500">{formatBytes(file.size)}</p>
                </div>
                <button onClick={resetAll} className="text-xs text-red-600 hover:underline">
                  Cambia file
                </button>
              </div>

              <div className="mt-6 space-y-2">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Intervallo Pagine da Estrarre:
                </label>
                <input
                  type="text"
                  value={pageRange}
                  onChange={(e) => setPageRange(e.target.value)}
                  placeholder="Es: 1-3, 5, 8"
                  className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                />
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  Usa trattini per intervalli (es. 1-4) e virgole per pagine singole (es. 1, 3, 5).
                </p>
              </div>

              {error && (
                <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700 dark:bg-red-950/40 dark:text-red-300">
                  {error}
                </div>
              )}

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleSplit}
                  disabled={processing || !pageRange.trim()}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 disabled:opacity-50"
                >
                  {processing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Estrazione in corso...</span>
                    </>
                  ) : (
                    <>
                      <Split className="h-4 w-4" />
                      <span>Estrai Pagine Selezionate</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6 text-center dark:border-emerald-900/60 dark:bg-emerald-950/20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-300">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">
            Pagine Estratte con Successo!
          </h3>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            Dimensione file risultante: {resultSize ? formatBytes(resultSize) : ""}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={downloadUrl}
              download={`estratto_${file?.name || "documento.pdf"}`}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-95"
            >
              <Download className="h-4 w-4" />
              <span>Scarica Pagine Estratte</span>
            </a>
            <button
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-xs font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Dividi un altro PDF</span>
            </button>
          </div>

          <div className="mt-6">
            <AdBanner slot="action-card" />
          </div>
        </div>
      )}
    </div>
  );
};
