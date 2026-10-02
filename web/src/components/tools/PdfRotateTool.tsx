"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { rotatePdfFile } from "@/lib/client-engines/pdf-engine";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { RotateCw, Download, CheckCircle2, Loader2, RefreshCw, FileText } from "lucide-react";

export const PdfRotateTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [angle, setAngle] = useState<90 | 180 | 270>(90);
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

  const handleRotate = async () => {
    if (!file) return;

    try {
      setProcessing(true);
      setError(null);

      const rotatedBytes = await rotatePdfFile(file, angle);
      const blob = new Blob([rotatedBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);
      setResultSize(blob.size);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante la rotazione del PDF.";
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
              helperText="Trascina qui il documento PDF da ruotare"
            />
          ) : (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white">
                      {sanitizeFileName(file.name)}
                    </h4>
                    <p className="text-xs text-zinc-500">{formatBytes(file.size)}</p>
                  </div>
                </div>
                <button onClick={resetAll} className="text-xs text-red-600 hover:underline">
                  Cambia file
                </button>
              </div>

              <div className="mt-6">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Angolo di Rotazione in Senso Orario:
                </label>
                <div className="mt-2 grid grid-cols-3 gap-3">
                  {[
                    { val: 90, label: "90° (Destra)" },
                    { val: 180, label: "180° (Capovolgi)" },
                    { val: 270, label: "270° (Sinistra)" }
                  ].map((item) => (
                    <button
                      key={item.val}
                      type="button"
                      onClick={() => setAngle(item.val as 90 | 180 | 270)}
                      className={`flex items-center justify-center gap-2 rounded-xl border py-3 text-xs font-bold transition ${
                        angle === item.val
                          ? "border-red-500 bg-red-50 text-red-700 dark:border-red-400 dark:bg-red-950/60 dark:text-red-300"
                          : "border-zinc-200 bg-zinc-50/50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      }`}
                    >
                      <RotateCw className="h-3.5 w-3.5" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {error && (
                <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700 dark:bg-red-950/40 dark:text-red-300">
                  {error}
                </div>
              )}

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleRotate}
                  disabled={processing}
                  className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-600/20 transition hover:bg-red-700 disabled:opacity-50"
                >
                  {processing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Rotazione pagine in corso...</span>
                    </>
                  ) : (
                    <>
                      <RotateCw className="h-4 w-4" />
                      <span>Ruota PDF di {angle}°</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-2xl border border-red-200 bg-red-50/40 p-6 text-center dark:border-red-900/60 dark:bg-red-950/20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">
            Pagine Ruotate di {angle}° con Successo!
          </h3>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            Dimensione finale: {resultSize ? formatBytes(resultSize) : ""}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={downloadUrl}
              download={`ruotato_${file?.name || "documento.pdf"}`}
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-700 active:scale-95"
            >
              <Download className="h-4 w-4" />
              <span>Scarica PDF Ruotato</span>
            </a>
            <button
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-xs font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Ruota un altro PDF</span>
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
