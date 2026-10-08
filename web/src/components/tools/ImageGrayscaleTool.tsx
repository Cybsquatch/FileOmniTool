"use client";

import React, { useState, useRef, useEffect } from "react";
import { Dropzone } from "./Dropzone";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { Sliders, Download, RefreshCw, CheckCircle2 } from "lucide-react";

export const ImageGrayscaleTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imgElement, setImgElement] = useState<HTMLImageElement | null>(null);
  const [grayscale, setGrayscale] = useState<number>(100);
  const [contrast, setContrast] = useState<number>(115);
  const [brightness, setBrightness] = useState<number>(100);

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

    ctx.filter = `grayscale(${grayscale}%) contrast(${contrast}%) brightness(${brightness}%)`;
    ctx.drawImage(imgElement, 0, 0);
  }, [imgElement, grayscale, contrast, brightness]);

  const handleExport = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      setResultSize(blob.size);
    }, "image/jpeg", 0.92);
  };

  const resetAll = () => {
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setFile(null);
    setImgElement(null);
    setDownloadUrl(null);
    setResultSize(null);
    setGrayscale(100);
    setContrast(115);
    setBrightness(100);
  };

  return (
    <div className="space-y-6">
      {!downloadUrl ? (
        <>
          {!file ? (
            <Dropzone
              onFilesSelected={handleFilesSelected}
              accept="image/*"
              helperText="Trascina qui l'immagine da convertire in bianco e nero"
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

              {/* Sliders */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <div className="flex justify-between text-xs text-zinc-500">
                    <span>Scala di Grigi</span>
                    <span>{grayscale}%</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={grayscale}
                    onChange={(e) => setGrayscale(parseInt(e.target.value))}
                    className="mt-1 w-full"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-zinc-500">
                    <span>Contrasto</span>
                    <span>{contrast}%</span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={200}
                    value={contrast}
                    onChange={(e) => setContrast(parseInt(e.target.value))}
                    className="mt-1 w-full"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-zinc-500">
                    <span>Luminosità</span>
                    <span>{brightness}%</span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={150}
                    value={brightness}
                    onChange={(e) => setBrightness(parseInt(e.target.value))}
                    className="mt-1 w-full"
                  />
                </div>
              </div>

              {/* Live Preview */}
              <div className="mt-6">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Anteprima Bianco e Nero
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
                  <Sliders className="h-4 w-4" />
                  <span>Scarica Foto in Bianco e Nero</span>
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
            Foto Convertita in B&W con Successo!
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Dimensione finale: {resultSize ? formatBytes(resultSize) : ""} • Nitidezza professionale
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={downloadUrl}
              download={sanitizeFileName(file?.name.replace(/\.[^.]+$/, "") + "-bw.jpg")}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-emerald-500"
            >
              <Download className="h-4 w-4" />
              <span>Scarica Foto in Bianco e Nero</span>
            </a>
            <button
              onClick={resetAll}
              className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Converti un'Altra Foto</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
