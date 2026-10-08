"use client";

import React, { useState, useRef, useEffect } from "react";
import { Dropzone } from "./Dropzone";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { Crop, Download, RefreshCw, CheckCircle2 } from "lucide-react";

type AspectRatioMode = "free" | "1:1" | "16:9" | "9:16" | "4:3";

export const ImageCropTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imgElement, setImgElement] = useState<HTMLImageElement | null>(null);
  const [aspectRatio, setAspectRatio] = useState<AspectRatioMode>("1:1");
  const [targetFormat, setTargetFormat] = useState<"image/png" | "image/jpeg" | "image/webp">("image/jpeg");

  // Crop box percentages (0 to 100)
  const [cropX, setCropX] = useState<number>(10);
  const [cropY, setCropY] = useState<number>(10);
  const [cropWidth, setCropWidth] = useState<number>(80);
  const [cropHeight, setCropHeight] = useState<number>(80);

  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [resultSize, setResultSize] = useState<number | null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);

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
      applyAspectRatio("1:1", img.naturalWidth, img.naturalHeight);
    };
    img.src = url;
  };

  const applyAspectRatio = (ratio: AspectRatioMode, w?: number, h?: number) => {
    setAspectRatio(ratio);
    const naturalW = w || imgElement?.naturalWidth || 1000;
    const naturalH = h || imgElement?.naturalHeight || 1000;

    let targetW = 80;
    let targetH = 80;

    if (ratio === "1:1") {
      const minDim = Math.min(naturalW, naturalH);
      targetW = Math.round((minDim / naturalW) * 80);
      targetH = Math.round((minDim / naturalH) * 80);
    } else if (ratio === "16:9") {
      targetW = 80;
      targetH = Math.round((targetW * naturalW * 9) / (naturalH * 16));
    } else if (ratio === "9:16") {
      targetH = 80;
      targetW = Math.round((targetH * naturalH * 9) / (naturalW * 16));
    } else if (ratio === "4:3") {
      targetW = 80;
      targetH = Math.round((targetW * naturalW * 3) / (naturalH * 4));
    }

    targetW = Math.min(90, Math.max(10, targetW));
    targetH = Math.min(90, Math.max(10, targetH));
    setCropWidth(targetW);
    setCropHeight(targetH);
    setCropX(Math.round((100 - targetW) / 2));
    setCropY(Math.round((100 - targetH) / 2));
  };

  useEffect(() => {
    if (!imgElement || !previewCanvasRef.current) return;
    const canvas = previewCanvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const naturalW = imgElement.naturalWidth;
    const naturalH = imgElement.naturalHeight;

    const pxX = Math.round((cropX / 100) * naturalW);
    const pxY = Math.round((cropY / 100) * naturalH);
    const pxW = Math.max(1, Math.round((cropWidth / 100) * naturalW));
    const pxH = Math.max(1, Math.round((cropHeight / 100) * naturalH));

    canvas.width = pxW;
    canvas.height = pxH;

    ctx.drawImage(imgElement, pxX, pxY, pxW, pxH, 0, 0, pxW, pxH);
  }, [imgElement, cropX, cropY, cropWidth, cropHeight]);

  const handleExport = () => {
    if (!previewCanvasRef.current) return;
    const canvas = previewCanvasRef.current;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      setResultSize(blob.size);
    }, targetFormat, 0.92);
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
              helperText="Trascina qui l'immagine che desideri ritagliare"
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

              {/* Aspect Ratio Selector */}
              <div className="mt-6">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Proporzioni Ritaglio (Aspect Ratio)
                </label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    { id: "1:1", label: "1:1 Quadrato (Avatar/Post)" },
                    { id: "16:9", label: "16:9 Panoramico (YouTube)" },
                    { id: "9:16", label: "9:16 Verticale (Stories/Reels)" },
                    { id: "4:3", label: "4:3 Classico" },
                    { id: "free", label: "Libero" },
                  ].map((ratio) => (
                    <button
                      key={ratio.id}
                      type="button"
                      onClick={() => applyAspectRatio(ratio.id as AspectRatioMode)}
                      className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
                        aspectRatio === ratio.id
                          ? "bg-emerald-600 text-white"
                          : "border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                      }`}
                    >
                      {ratio.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders for crop boundary */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <div className="flex justify-between text-xs text-zinc-500">
                    <span>Posizione Orizzontale (X)</span>
                    <span>{cropX}%</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100 - cropWidth}
                    value={cropX}
                    onChange={(e) => setCropX(parseInt(e.target.value))}
                    className="mt-1 w-full"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-zinc-500">
                    <span>Posizione Verticale (Y)</span>
                    <span>{cropY}%</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100 - cropHeight}
                    value={cropY}
                    onChange={(e) => setCropY(parseInt(e.target.value))}
                    className="mt-1 w-full"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-zinc-500">
                    <span>Larghezza Taglio</span>
                    <span>{cropWidth}%</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={100 - cropX}
                    value={cropWidth}
                    onChange={(e) => setCropWidth(parseInt(e.target.value))}
                    className="mt-1 w-full"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-zinc-500">
                    <span>Altezza Taglio</span>
                    <span>{cropHeight}%</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={100 - cropY}
                    value={cropHeight}
                    onChange={(e) => setCropHeight(parseInt(e.target.value))}
                    className="mt-1 w-full"
                  />
                </div>
              </div>

              {/* Live Preview Canvas */}
              <div className="mt-6">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Anteprima Ritaglio
                </label>
                <div className="mt-2 flex max-h-80 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 p-4 dark:border-zinc-800 dark:bg-zinc-950">
                  <canvas ref={previewCanvasRef} className="max-h-72 max-w-full rounded shadow-sm" />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-zinc-500">Formato:</span>
                  <select
                    value={targetFormat}
                    onChange={(e) => setTargetFormat(e.target.value as typeof targetFormat)}
                    className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                  >
                    <option value="image/jpeg">JPEG (.jpg)</option>
                    <option value="image/png">PNG (.png)</option>
                    <option value="image/webp">WebP (.webp)</option>
                  </select>
                </div>

                <button
                  onClick={handleExport}
                  className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 font-semibold text-white shadow-sm hover:bg-emerald-500"
                >
                  <Crop className="h-4 w-4" />
                  <span>Ritaglia e Salva</span>
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
            Immagine Ritagliata con Successo!
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Dimensione finale: {resultSize ? formatBytes(resultSize) : ""} • 100% In-Browser
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={downloadUrl}
              download={sanitizeFileName(file?.name.replace(/\.[^.]+$/, "") + "-ritagliata." + (targetFormat === "image/png" ? "png" : targetFormat === "image/webp" ? "webp" : "jpg"))}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-emerald-500"
            >
              <Download className="h-4 w-4" />
              <span>Scarica Immagine Ritagliata</span>
            </a>
            <button
              onClick={resetAll}
              className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Ritaglia un'Altra Foto</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
