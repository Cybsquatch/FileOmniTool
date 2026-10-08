"use client";

import React, { useState, useRef, useEffect } from "react";
import { Dropzone } from "./Dropzone";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { Moon, Download, RefreshCw, CheckCircle2 } from "lucide-react";

export const ImageInvertTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imgElement, setImgElement] = useState<HTMLImageElement | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [resultSize, setResultSize] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleFilesSelected = (files: File[]) => {
    if (files.length === 0) return;
    const selected = files[0];
    setFile(selected);
    setDownloadUrl(null);

    const img = new Image();
    const url = URL.createObjectURL(selected);
    img.onload = () => {
      URL.revokeObjectURL(url);
      setImgElement(img);
    };
    img.src = url;
  };

  useEffect(() => {
    if (!imgElement || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = imgElement.naturalWidth;
    const h = imgElement.naturalHeight;
    canvas.width = w;
    canvas.height = h;

    ctx.drawImage(imgElement, 0, 0);

    const imgData = ctx.getImageData(0, 0, w, h);
    const data = imgData.data;

    for (let i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i];       // Red
      data[i + 1] = 255 - data[i + 1]; // Green
      data[i + 2] = 255 - data[i + 2]; // Blue
      // Alpha remains untouched
    }

    ctx.putImageData(imgData, 0, 0);
  }, [imgElement]);

  const handleExport = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      setResultSize(blob.size);
    }, "image/png");
  };

  const resetAll = () => {
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setFile(null);
    setImgElement(null);
    setDownloadUrl(null);
    setResultSize(null);
  };

  return (
    <div className="space-y-6">
      {!downloadUrl ? (
        <>
          {!file ? (
            <Dropzone
              onFilesSelected={handleFilesSelected}
              accept="image/*"
              helperText="Trascina qui l'immagine per invertire i colori (effetto negativo)"
            />
          ) : (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">{file.name}</h3>
                  <p className="text-xs text-zinc-500">
                    {imgElement ? `${imgElement.naturalWidth} × ${imgElement.naturalHeight} px` : ""} •{" "}
                    {formatBytes(file.size)}
                  </p>
                </div>
                <button
                  onClick={resetAll}
                  className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
                >
                  Cambia Foto
                </button>
              </div>

              {/* Preview Canvas */}
              <div className="mt-6">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Anteprima Negativo (Colori Invertiti)
                </label>
                <div className="mt-2 flex max-h-80 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 p-4 dark:border-zinc-800 dark:bg-zinc-950">
                  <canvas ref={canvasRef} className="max-h-72 max-w-full rounded shadow-sm" />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleExport}
                  className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 font-semibold text-white shadow-sm hover:bg-emerald-500"
                >
                  <Moon className="h-4 w-4" />
                  <span>Scarica con Colori Invertiti</span>
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
            Colori Invertiti con Successo!
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Dimensione finale: {resultSize ? formatBytes(resultSize) : ""} • Formato PNG Alta Fedeltà
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={downloadUrl}
              download={sanitizeFileName(file?.name.replace(/\.[^.]+$/, "") + "-negativo.png")}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-emerald-500"
            >
              <Download className="h-4 w-4" />
              <span>Scarica Immagine Invertita</span>
            </a>
            <button
              onClick={resetAll}
              className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Inverti un'Altra Foto</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
