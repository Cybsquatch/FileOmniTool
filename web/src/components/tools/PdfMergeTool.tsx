"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { mergePdfFiles } from "@/lib/client-engines/pdf-engine";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { FileText, Download, Trash2, CheckCircle2, Loader2, RefreshCw } from "lucide-react";

export const PdfMergeTool: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [resultSize, setResultSize] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = (newFiles: File[]) => {
    setFiles((prev) => [...prev, ...newFiles]);
    setDownloadUrl(null);
    setError(null);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setDownloadUrl(null);
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      setError("Aggiungi almeno due file PDF per avviare l'unione.");
      return;
    }

    try {
      setProcessing(true);
      setError(null);

      const mergedBytes = await mergePdfFiles(files);
      const blob = new Blob([mergedBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);
      setResultSize(blob.size);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante l'elaborazione del PDF.";
      setError(msg);
    } finally {
      setProcessing(false);
    }
  };

  const resetAll = () => {
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setFiles([]);
    setDownloadUrl(null);
    setResultSize(null);
    setError(null);
  };

  return (
    <div className="space-y-6">
      {!downloadUrl ? (
        <>
          <Dropzone
            accept=".pdf,application/pdf"
            multiple={true}
            maxSizeMB={150}
            onFilesSelected={handleFilesSelected}
            helperText="Trascina qui i file PDF da unire (supporta selezione multipla)"
          />

          {files.length > 0 && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800">
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  File Selezionati ({files.length})
                </h4>
                <button
                  onClick={resetAll}
                  className="text-xs text-red-600 hover:underline dark:text-red-400"
                >
                  Rimuovi tutti
                </button>
              </div>

              <ul className="mt-3 divide-y divide-zinc-100 dark:divide-zinc-800/60 max-h-60 overflow-y-auto">
                {files.map((file, idx) => (
                  <li key={idx} className="flex items-center justify-between py-2.5 text-xs">
                    <div className="flex items-center gap-2.5 truncate pr-2">
                      <FileText className="h-4 w-4 shrink-0 text-red-500" />
                      <span className="truncate font-medium text-zinc-800 dark:text-zinc-200">
                        {sanitizeFileName(file.name)}
                      </span>
                      <span className="text-zinc-400">({formatBytes(file.size)})</span>
                    </div>
                    <button
                      onClick={() => removeFile(idx)}
                      className="rounded p-1 text-zinc-400 hover:bg-zinc-100 hover:text-red-600 dark:hover:bg-zinc-800"
                      title="Rimuovi"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>

              {error && (
                <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700 dark:bg-red-950/40 dark:text-red-300">
                  {error}
                </div>
              )}

              <div className="mt-5 flex justify-end">
                <button
                  onClick={handleMerge}
                  disabled={processing || files.length < 2}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 disabled:opacity-50"
                >
                  {processing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Unione in corso nel browser...</span>
                    </>
                  ) : (
                    <>
                      <FileText className="h-4 w-4" />
                      <span>Unisci {files.length} File PDF</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        /* Risultato pronto & Download */
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6 text-center dark:border-emerald-900/60 dark:bg-emerald-950/20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-300">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">
            Documento PDF Unito con Successo!
          </h3>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            Dimensione finale: {resultSize ? formatBytes(resultSize) : ""} • Zero dati trasferiti online
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={downloadUrl}
              download="documento_unito_FileOmniTool.pdf"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-95"
            >
              <Download className="h-4 w-4" />
              <span>Scarica PDF Unito</span>
            </a>
            <button
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-xs font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Unisci altri file</span>
            </button>
          </div>

          {/* Slot Pubblicitario ad altissima conversione post-download */}
          <div className="mt-6">
            <AdBanner slot="action-card" />
          </div>
        </div>
      )}
    </div>
  );
};
