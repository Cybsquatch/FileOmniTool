"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { convertSvgToPng } from "@/lib/client-engines/vector-engine";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { Image as ImageIcon, Download, CheckCircle2, Loader2, RefreshCw } from "lucide-react";

export const SvgToPngTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [scale, setScale] = useState<number>(2);
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

      const pngBlob = await convertSvgToPng(file, scale);
      const url = URL.createObjectURL(pngBlob);

      setDownloadUrl(url);
      setResultSize(pngBlob.size);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante il rendering dell'SVG.";
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
              accept=".svg,image/svg+xml"
              multiple={false}
              maxSizeMB={20}
              onFilesSelected={handleFilesSelected}
              helperText="Trascina il file vettoriale SVG da convertire in PNG"
            />
          ) : (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-400">
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

              <div className="mt-6">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Risoluzione / Fattore di Scala PNG:
                </label>
                <div className="mt-2 grid grid-cols-4 gap-2">
                  {[
                    { val: 1, label: "1x (Standard)" },
                    { val: 2, label: "2x (HD Retinico)" },
                    { val: 4, label: "4x (Ultra HD)" },
                    { val: 8, label: "8x (Stampa/Poster)" }
                  ].map((s) => (
                    <button
                      key={s.val}
                      type="button"
                      onClick={() => setScale(s.val)}
                      className={`rounded-xl border py-2.5 text-xs font-bold transition ${
                        scale === s.val
                          ? "border-orange-500 bg-orange-50 text-orange-700 dark:border-orange-400 dark:bg-orange-950/60 dark:text-orange-300"
                          : "border-zinc-200 bg-zinc-50/50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      }`}
                    >
                      {s.label}
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
                  onClick={handleConvert}
                  disabled={processing}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-600/20 transition hover:bg-orange-700 disabled:opacity-50"
                >
                  {processing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Rendering vettoriale in Canvas...</span>
                    </>
                  ) : (
                    <>
                      <ImageIcon className="h-4 w-4" />
                      <span>Converti in PNG {scale}x</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-2xl border border-orange-200 bg-orange-50/40 p-6 text-center dark:border-orange-900/60 dark:bg-orange-950/20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">
            PNG ad Alta Risoluzione Pronto!
          </h3>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            Scala: {scale}x • Trasparenza preservata • Dimensione: {resultSize ? formatBytes(resultSize) : ""}
          </p>

          <div className="mt-4 mx-auto max-w-xs rounded-xl border border-dashed border-zinc-300 bg-white/70 p-3 dark:border-zinc-700 dark:bg-zinc-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={downloadUrl} alt="Anteprima PNG" className="mx-auto max-h-48 object-contain" />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={downloadUrl}
              download={`${file?.name.replace(/\.svg$/i, "") || "grafica"}_${scale}x.png`}
              className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-orange-600/30 transition hover:bg-orange-700 active:scale-95"
            >
              <Download className="h-4 w-4" />
              <span>Scarica File PNG Trasparente</span>
            </a>
            <button
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-xs font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Converti un altro SVG</span>
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
