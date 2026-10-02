"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { compressImage, CompressionResult } from "@/lib/client-engines/image-engine";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { Minimize2, Download, CheckCircle2, Loader2, RefreshCw, Zap } from "lucide-react";

export const ImageCompressTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState<number>(0.75);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<CompressionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = (files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
      setResult(null);
      setError(null);
    }
  };

  const handleCompress = async () => {
    if (!file) return;

    try {
      setProcessing(true);
      setError(null);

      const res = await compressImage(file, quality);
      setResult(res);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante la compressione dell'immagine.";
      setError(msg);
    } finally {
      setProcessing(false);
    }
  };

  const resetAll = () => {
    setFile(null);
    setResult(null);
    setError(null);
  };

  return (
    <div className="space-y-6">
      {!result ? (
        <>
          {!file ? (
            <Dropzone
              accept="image/*"
              multiple={false}
              maxSizeMB={50}
              onFilesSelected={handleFilesSelected}
              helperText="Trascina la foto da comprimere (PNG, JPG, WebP)"
            />
          ) : (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-white">
                    {sanitizeFileName(file.name)}
                  </h4>
                  <p className="text-xs text-zinc-500">Dimensione originale: {formatBytes(file.size)}</p>
                </div>
                <button onClick={resetAll} className="text-xs text-red-600 hover:underline">
                  Cambia file
                </button>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  <span>Qualità Compressione: {Math.round(quality * 100)}%</span>
                  <span className="text-emerald-600 dark:text-emerald-400">
                    {quality >= 0.8 ? "Alta Fedeltà" : quality >= 0.5 ? "Bilanciata (Consigliata)" : "Massimo Risparmio"}
                  </span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="0.95"
                  step="0.05"
                  value={quality}
                  onChange={(e) => setQuality(parseFloat(e.target.value))}
                  className="w-full accent-emerald-600"
                />
              </div>

              {error && (
                <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700 dark:bg-red-950/40 dark:text-red-300">
                  {error}
                </div>
              )}

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleCompress}
                  disabled={processing}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 disabled:opacity-50"
                >
                  {processing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Ottimizzazione in corso...</span>
                    </>
                  ) : (
                    <>
                      <Minimize2 className="h-4 w-4" />
                      <span>Comprimi Immagine</span>
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
            Compressione Ultimata con Successo!
          </h3>

          <div className="mt-3 flex items-center justify-center gap-4 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
            <span className="line-through text-zinc-400">{formatBytes(result.originalSize)}</span>
            <span>&rarr;</span>
            <span className="text-emerald-600 font-bold dark:text-emerald-400">{formatBytes(result.newSize)}</span>
            <span className="flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
              <Zap className="h-3 w-3" /> -{result.savingsPercent}% risparmiati
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={result.dataUrl}
              download={`compresso_${file?.name || "immagine.webp"}`}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-95"
            >
              <Download className="h-4 w-4" />
              <span>Scarica Immagine Ottimizzata</span>
            </a>
            <button
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-xs font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Comprimi un&apos;altra</span>
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
