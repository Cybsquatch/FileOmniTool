"use client";

import React, { useState, useRef } from "react";
import { Dropzone } from "./Dropzone";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { Scaling, Download, RefreshCw, Lock, Unlock, CheckCircle2, Loader2 } from "lucide-react";

export const ImageResizeTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [originalWidth, setOriginalWidth] = useState<number>(0);
  const [originalHeight, setOriginalHeight] = useState<number>(0);
  const [targetWidth, setTargetWidth] = useState<number>(0);
  const [targetHeight, setTargetHeight] = useState<number>(0);
  const [lockAspect, setLockAspect] = useState<boolean>(true);
  const [format, setFormat] = useState<"image/jpeg" | "image/png" | "image/webp">("image/jpeg");
  const [resizedBlob, setResizedBlob] = useState<Blob | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleFilesSelected = (files: File[]) => {
    if (files.length === 0) return;
    const f = files[0];
    setFile(f);
    setError(null);

    const img = new Image();
    const url = URL.createObjectURL(f);
    img.onload = () => {
      setOriginalWidth(img.naturalWidth);
      setOriginalHeight(img.naturalHeight);
      setTargetWidth(img.naturalWidth);
      setTargetHeight(img.naturalHeight);
      imgRef.current = img;
    };
    img.src = url;
  };

  const handleWidthChange = (w: number) => {
    setTargetWidth(w);
    if (lockAspect && originalWidth > 0) {
      const ratio = originalHeight / originalWidth;
      setTargetHeight(Math.round(w * ratio));
    }
  };

  const handleHeightChange = (h: number) => {
    setTargetHeight(h);
    if (lockAspect && originalHeight > 0) {
      const ratio = originalWidth / originalHeight;
      setTargetWidth(Math.round(h * ratio));
    }
  };

  const applyPreset = (percent: number) => {
    if (originalWidth <= 0) return;
    const factor = percent / 100;
    const newW = Math.round(originalWidth * factor);
    const newH = Math.round(originalHeight * factor);
    setTargetWidth(newW);
    setTargetHeight(newH);
  };

  const handleResize = async () => {
    if (!imgRef.current || targetWidth <= 0 || targetHeight <= 0) return;
    setProcessing(true);
    setError(null);

    try {
      const canvas = document.createElement("canvas");
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Contesto Canvas non disponibile");

      // Disegna l'immagine scalata con interpolazione ad alta qualità
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(imgRef.current, 0, 0, targetWidth, targetHeight);

      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob(
          (b) => (b ? resolve(b) : reject(new Error("Errore durante la generazione dell'immagine"))),
          format,
          0.92
        );
      });

      const url = URL.createObjectURL(blob);
      setResizedBlob(blob);
      setDownloadUrl(url);
    } catch {
      setError("Si è verificato un errore durante il ridimensionamento.");
    } finally {
      setProcessing(false);
    }
  };

  const resetAll = () => {
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setFile(null);
    setResizedBlob(null);
    setDownloadUrl(null);
    setError(null);
    setOriginalWidth(0);
    setOriginalHeight(0);
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <Dropzone
          accept="image/png,image/jpeg,image/webp"
          multiple={false}
          maxSizeMB={50}
          onFilesSelected={handleFilesSelected}
          helperText="Trascina la foto da ridimensionare in pixel o percentuale (PNG, JPG, WebP)"
        />
      ) : (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-950 dark:text-teal-400">
                <Scaling className="h-5 w-5" />
              </span>
              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-white">
                  {sanitizeFileName(file.name)}
                </h4>
                <p className="text-xs text-zinc-500">
                  Originale: {originalWidth} &times; {originalHeight} px • {formatBytes(file.size)}
                </p>
              </div>
            </div>

            <button onClick={resetAll} className="text-xs text-red-600 hover:underline">
              Scegli un&apos;altra foto
            </button>
          </div>

          {/* Dimension Controls */}
          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Larghezza (Pixel):
                </label>
                <input
                  type="number"
                  min={10}
                  max={10000}
                  value={targetWidth || ""}
                  onChange={(e) => handleWidthChange(parseInt(e.target.value) || 0)}
                  className="mt-1 w-full rounded-xl border border-zinc-300 bg-zinc-50 p-2.5 text-xs font-bold text-zinc-900 focus:border-teal-500 focus:bg-white focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Altezza (Pixel):
                </label>
                <input
                  type="number"
                  min={10}
                  max={10000}
                  value={targetHeight || ""}
                  onChange={(e) => handleHeightChange(parseInt(e.target.value) || 0)}
                  className="mt-1 w-full rounded-xl border border-zinc-300 bg-zinc-50 p-2.5 text-xs font-bold text-zinc-900 focus:border-teal-500 focus:bg-white focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={() => setLockAspect(!lockAspect)}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition ${
                  lockAspect
                    ? "border-teal-300 bg-teal-50 text-teal-700 dark:border-teal-800 dark:bg-teal-950 dark:text-teal-300"
                    : "border-zinc-200 bg-white text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                }`}
              >
                {lockAspect ? <Lock className="h-3.5 w-3.5" /> : <Unlock className="h-3.5 w-3.5" />}
                <span>Mantieni Proporzioni (Aspect Ratio)</span>
              </button>

              {/* Presets */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-zinc-500">Preset:</span>
                {[25, 50, 75, 200].map((p) => (
                  <button
                    key={p}
                    onClick={() => applyPreset(p)}
                    className="rounded-lg border border-zinc-200 bg-zinc-50 px-2 py-1 font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {p}%
                  </button>
                ))}
              </div>
            </div>

            {/* Output Format */}
            <div className="pt-2">
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Formato Immagine di Output:
              </label>
              <div className="mt-1.5 flex gap-2">
                {[
                  { id: "image/jpeg", label: "JPG (Standard)" },
                  { id: "image/png", label: "PNG (Trasparenza)" },
                  { id: "image/webp", label: "WebP (Ottimizzato)" }
                ].map((fmt) => (
                  <button
                    key={fmt.id}
                    onClick={() => setFormat(fmt.id as typeof format)}
                    className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
                      format === fmt.id
                        ? "bg-teal-600 text-white shadow-sm"
                        : "border border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    }`}
                  >
                    {fmt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Execute Button */}
            <div className="pt-3">
              <button
                onClick={handleResize}
                disabled={processing}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 py-3 text-xs font-bold text-white shadow-md hover:bg-teal-700 active:scale-95 disabled:opacity-50"
              >
                {processing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Scaling className="h-4 w-4" />}
                <span>Ridimensiona Immagine ({targetWidth} &times; {targetHeight} px)</span>
              </button>
            </div>
          </div>

          {/* Download Success Card */}
          {downloadUrl && resizedBlob && (
            <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 text-center dark:border-emerald-900/60 dark:bg-emerald-950/20">
              <div className="flex items-center justify-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-xs font-bold">Immagine Ridimensionata con Successo!</span>
              </div>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                Nuove dimensioni: {targetWidth} &times; {targetHeight} px • Peso stimato: {formatBytes(resizedBlob.size)}
              </p>

              <div className="mt-4 flex justify-center gap-3">
                <a
                  href={downloadUrl}
                  download={`ridimensionata_${targetWidth}x${targetHeight}.${format.split("/")[1]}`}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-700 active:scale-95"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Scarica Nuova Immagine</span>
                </a>
              </div>
            </div>
          )}

          {error && (
            <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700 dark:bg-red-950/40 dark:text-red-300">
              {error}
            </div>
          )}
        </div>
      )}

      <AdBanner slot="action-card" />
    </div>
  );
};
