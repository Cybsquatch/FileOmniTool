"use client";

import React, { useState, useRef, useEffect } from "react";
import { Dropzone } from "./Dropzone";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { EyeOff, Download, RefreshCw, CheckCircle2 } from "lucide-react";

export const ImageBlurTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imgElement, setImgElement] = useState<HTMLImageElement | null>(null);
  const [blurRadius, setBlurRadius] = useState<number>(12);
  const [mode, setMode] = useState<"full" | "box">("full");

  // Box coordinates (percent)
  const [boxX, setBoxX] = useState<number>(25);
  const [boxY, setBoxY] = useState<number>(25);
  const [boxW, setBoxW] = useState<number>(50);
  const [boxH, setBoxH] = useState<number>(30);

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

    // Draw base image
    ctx.filter = "none";
    ctx.drawImage(imgElement, 0, 0);

    if (mode === "full") {
      ctx.filter = `blur(${blurRadius}px)`;
      ctx.drawImage(imgElement, 0, 0);
    } else {
      // Box blur / censor
      const pxX = Math.round((boxX / 100) * w);
      const pxY = Math.round((boxY / 100) * h);
      const pxW = Math.round((boxW / 100) * w);
      const pxH = Math.round((boxH / 100) * h);

      ctx.save();
      ctx.beginPath();
      ctx.rect(pxX, pxY, pxW, pxH);
      ctx.clip();
      ctx.filter = `blur(${blurRadius}px)`;
      ctx.drawImage(imgElement, 0, 0);
      ctx.restore();

      // Draw subtle dashed boundary on live preview
      ctx.strokeStyle = "#10b981";
      ctx.lineWidth = 3;
      ctx.setLineDash([6, 6]);
      ctx.strokeRect(pxX, pxY, pxW, pxH);
    }
  }, [imgElement, blurRadius, mode, boxX, boxY, boxW, boxH]);

  const handleExport = () => {
    if (!imgElement) return;
    // Create clean canvas without preview bounding dashed line
    const exportCanvas = document.createElement("canvas");
    exportCanvas.width = imgElement.naturalWidth;
    exportCanvas.height = imgElement.naturalHeight;
    const ctx = exportCanvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(imgElement, 0, 0);

    if (mode === "full") {
      ctx.filter = `blur(${blurRadius}px)`;
      ctx.drawImage(imgElement, 0, 0);
    } else {
      const w = imgElement.naturalWidth;
      const h = imgElement.naturalHeight;
      const pxX = Math.round((boxX / 100) * w);
      const pxY = Math.round((boxY / 100) * h);
      const pxW = Math.round((boxW / 100) * w);
      const pxH = Math.round((boxH / 100) * h);

      ctx.save();
      ctx.beginPath();
      ctx.rect(pxX, pxY, pxW, pxH);
      ctx.clip();
      ctx.filter = `blur(${blurRadius}px)`;
      ctx.drawImage(imgElement, 0, 0);
      ctx.restore();
    }

    exportCanvas.toBlob((blob) => {
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
  };

  return (
    <div className="space-y-6">
      {!downloadUrl ? (
        <>
          {!file ? (
            <Dropzone
              onFilesSelected={handleFilesSelected}
              accept="image/*"
              helperText="Trascina qui l'immagine per sfocare o censurare dati riservati"
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

              {/* Mode Selection */}
              <div className="mt-6 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setMode("full")}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
                    mode === "full"
                      ? "bg-emerald-600 text-white"
                      : "border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                  }`}
                >
                  Sfoca Tutta l'Immagine
                </button>
                <button
                  type="button"
                  onClick={() => setMode("box")}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
                    mode === "box"
                      ? "bg-emerald-600 text-white"
                      : "border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                  }`}
                >
                  Censura Area Specifica (Volti / Dati)
                </button>
              </div>

              {/* Controls */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <div className="flex justify-between text-xs text-zinc-500">
                    <span>Intensità Sfocatura</span>
                    <span>{blurRadius} px</span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={50}
                    value={blurRadius}
                    onChange={(e) => setBlurRadius(parseInt(e.target.value))}
                    className="mt-1 w-full"
                  />
                </div>

                {mode === "box" && (
                  <>
                    <div>
                      <div className="flex justify-between text-xs text-zinc-500">
                        <span>Posizione Orizzontale (X)</span>
                        <span>{boxX}%</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={100 - boxW}
                        value={boxX}
                        onChange={(e) => setBoxX(parseInt(e.target.value))}
                        className="mt-1 w-full"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-zinc-500">
                        <span>Posizione Verticale (Y)</span>
                        <span>{boxY}%</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={100 - boxH}
                        value={boxY}
                        onChange={(e) => setBoxY(parseInt(e.target.value))}
                        className="mt-1 w-full"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-zinc-500">
                        <span>Dimensione Area Censura</span>
                        <span>{boxW}%</span>
                      </div>
                      <input
                        type="range"
                        min={10}
                        max={80}
                        value={boxW}
                        onChange={(e) => setBoxW(parseInt(e.target.value))}
                        className="mt-1 w-full"
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Preview */}
              <div className="mt-6">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Anteprima Live
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
                  <EyeOff className="h-4 w-4" />
                  <span>Salva Immagine Sfocata</span>
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
            Immagine Censurata & Sfocata!
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Dimensione finale: {resultSize ? formatBytes(resultSize) : ""} • Privacy protetta al 100%
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={downloadUrl}
              download={sanitizeFileName(file?.name.replace(/\.[^.]+$/, "") + "-sfocata.jpg")}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-emerald-500"
            >
              <Download className="h-4 w-4" />
              <span>Scarica Foto con Sfocatura</span>
            </a>
            <button
              onClick={resetAll}
              className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Sfoca un'Altra Foto</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
