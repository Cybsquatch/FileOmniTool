"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { convertImageFormat } from "@/lib/client-engines/image-engine";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { RefreshCw, Download, CheckCircle2, Loader2, Image as ImageIcon } from "lucide-react";

export const ImageConvertTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [targetFormat, setTargetFormat] = useState<"image/webp" | "image/png" | "image/jpeg">("image/webp");
  const [quality, setQuality] = useState<number>(0.9);
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

  const handleConvert = async () => {
    if (!file) return;

    try {
      setProcessing(true);
      setError(null);

      const blob = await convertImageFormat(file, targetFormat, quality);
      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);
      setResultSize(blob.size);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante la conversione dell'immagine.";
      setError(msg);
    } finally {
      setProcessing(false);
    }
  };

  const getTargetExt = () => {
    switch (targetFormat) {
      case "image/webp": return "webp";
      case "image/png": return "png";
      case "image/jpeg": return "jpg";
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
              accept="image/*"
              multiple={false}
              maxSizeMB={50}
              onFilesSelected={handleFilesSelected}
              helperText="Trascina un'immagine (PNG, JPG, WebP, BMP, GIF)"
            />
          ) : (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-950 dark:text-teal-400">
                    <ImageIcon className="h-5 w-5" />
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

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Formato di Destinazione:
                  </label>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {(["image/webp", "image/png", "image/jpeg"] as const).map((fmt) => (
                      <button
                        key={fmt}
                        type="button"
                        onClick={() => setTargetFormat(fmt)}
                        className={`rounded-xl border py-2.5 text-xs font-bold uppercase transition ${
                          targetFormat === fmt
                            ? "border-teal-500 bg-teal-50 text-teal-700 dark:border-teal-400 dark:bg-teal-950/60 dark:text-teal-300"
                            : "border-zinc-200 bg-zinc-50/50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                        }`}
                      >
                        {fmt === "image/webp" && "WebP"}
                        {fmt === "image/png" && "PNG"}
                        {fmt === "image/jpeg" && "JPG"}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    <span>Qualità: {Math.round(quality * 100)}%</span>
                    <span className="text-[11px] text-zinc-400">
                      {targetFormat === "image/png" ? "Lossless" : "Ottimizzato"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.3"
                    max="1.0"
                    step="0.05"
                    value={quality}
                    disabled={targetFormat === "image/png"}
                    onChange={(e) => setQuality(parseFloat(e.target.value))}
                    className="mt-4 w-full accent-teal-600"
                  />
                </div>
              </div>

              {error && (
                <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700 dark:bg-red-950/40 dark:text-red-300">
                  {error}
                </div>
              )}

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleConvert}
                  disabled={processing}
                  className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-teal-600/20 transition hover:bg-teal-700 disabled:opacity-50"
                >
                  {processing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Conversione in Canvas...</span>
                    </>
                  ) : (
                    <>
                      <RefreshCw className="h-4 w-4" />
                      <span>Converti in {getTargetExt().toUpperCase()}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-2xl border border-teal-200 bg-teal-50/40 p-6 text-center dark:border-teal-900/60 dark:bg-teal-950/20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-300">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">
            Immagine Convertita con Successo!
          </h3>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            Nuova dimensione: {resultSize ? formatBytes(resultSize) : ""} • Formato: {getTargetExt().toUpperCase()}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={downloadUrl}
              download={`${file?.name.split(".")[0] || "immagine"}.${getTargetExt()}`}
              className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-teal-600/30 transition hover:bg-teal-700 active:scale-95"
            >
              <Download className="h-4 w-4" />
              <span>Scarica Immagine {getTargetExt().toUpperCase()}</span>
            </a>
            <button
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-xs font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Converti un&apos;altra</span>
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
