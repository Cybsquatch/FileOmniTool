"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { addPageNumbersToPdf, PageNumberConfig } from "@/lib/client-engines/pdf-engine";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { Hash, Download, CheckCircle2, Loader2, RefreshCw } from "lucide-react";

export const PdfPageNumberTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [position, setPosition] = useState<PageNumberConfig["position"]>("bottom-center");
  const [format, setFormat] = useState<PageNumberConfig["format"]>("page-of-total");
  const [startPage, setStartPage] = useState<number>(1);
  const [fontSize, setFontSize] = useState<number>(10);
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

  const handleApply = async () => {
    if (!file) return;

    try {
      setProcessing(true);
      setError(null);

      const modifiedBytes = await addPageNumbersToPdf(file, {
        position,
        format,
        startPage,
        fontSize,
      });

      const blob = new Blob([modifiedBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);
      setResultSize(blob.size);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante l'inserimento dei numeri di pagina.";
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
              onFilesSelected={handleFilesSelected}
              accept="application/pdf,.pdf"
              helperText="Trascina qui il tuo documento PDF da numerare"
            />
          ) : (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">{file.name}</h3>
                  <p className="text-xs text-zinc-500">{formatBytes(file.size)}</p>
                </div>
                <button
                  onClick={resetAll}
                  className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
                >
                  Cambia File
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Posizione Numero
                  </label>
                  <select
                    value={position}
                    onChange={(e) => setPosition(e.target.value as PageNumberConfig["position"])}
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                  >
                    <option value="bottom-center">In basso al centro (Standard)</option>
                    <option value="bottom-right">In basso a destra</option>
                    <option value="bottom-left">In basso a sinistra</option>
                    <option value="top-center">In alto al centro</option>
                    <option value="top-right">In alto a destra</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Formato Testo
                  </label>
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value as PageNumberConfig["format"])}
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                  >
                    <option value="page-of-total">Pagina X di Y (Es. Pagina 1 di 10)</option>
                    <option value="page-slash-total">X / Y (Es. 1 / 10)</option>
                    <option value="number-only">Solo numero (Es. 1)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Inizia a numerare da pagina
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={startPage}
                    onChange={(e) => setStartPage(Math.max(1, parseInt(e.target.value) || 1))}
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                  />
                  <p className="mt-1 text-xs text-zinc-400">Imposta 2 per escludere la copertina</p>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Dimensione Carattere (pt)
                  </label>
                  <input
                    type="number"
                    min={8}
                    max={20}
                    value={fontSize}
                    onChange={(e) => setFontSize(parseInt(e.target.value) || 10)}
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                  />
                </div>
              </div>

              {error && (
                <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-600 dark:bg-red-950/50 dark:text-red-400">
                  {error}
                </div>
              )}

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleApply}
                  disabled={processing}
                  className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-emerald-500 disabled:opacity-50"
                >
                  {processing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Numerazione in corso...</span>
                    </>
                  ) : (
                    <>
                      <Hash className="h-4 w-4" />
                      <span>Inserisci Numeri Pagina</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-8 text-center dark:border-emerald-900/50 dark:bg-emerald-950/20">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-xl font-bold text-zinc-900 dark:text-white">
            PDF Numerato con Successo!
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Dimensione finale: {resultSize ? formatBytes(resultSize) : ""} • 100% Elaborato in RAM
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={downloadUrl}
              download={sanitizeFileName(file?.name.replace(/\.pdf$/i, "-numerato.pdf") || "documento-numerato.pdf")}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-emerald-500"
            >
              <Download className="h-4 w-4" />
              <span>Scarica PDF Numerato</span>
            </a>
            <button
              onClick={resetAll}
              className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Numera un Altro PDF</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
