"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Dropzone } from "./Dropzone";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { Stamp, Download, CheckCircle2, RefreshCw } from "lucide-react";

export const ImageWatermarkTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [watermarkText, setWatermarkText] = useState("© FILEOMNITOOL");
  const [fontSize, setFontSize] = useState(48);
  const [opacity, setOpacity] = useState(60);
  const [color, setColor] = useState("#ffffff");
  const [position, setPosition] = useState<"center" | "bottom-right" | "top-left" | "tiled">("center");
  const [angle, setAngle] = useState(-25);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const loadedImgRef = useRef<HTMLImageElement | null>(null);

  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const img = loadedImgRef.current;
    if (!canvas || !img) return;

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Disegna l'immagine di sfondo
    ctx.drawImage(img, 0, 0);

    // Applica watermark
    ctx.save();
    ctx.globalAlpha = opacity / 100;
    ctx.fillStyle = color;
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.textBaseline = "middle";

    if (position === "tiled") {
      ctx.textAlign = "center";
      const rad = (angle * Math.PI) / 180;
      const stepX = fontSize * 7;
      const stepY = fontSize * 4;

      for (let x = -canvas.width; x < canvas.width * 2; x += stepX) {
        for (let y = -canvas.height; y < canvas.height * 2; y += stepY) {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(rad);
          ctx.fillText(watermarkText, 0, 0);
          ctx.restore();
        }
      }
    } else {
      const rad = (angle * Math.PI) / 180;
      let posX = canvas.width / 2;
      let posY = canvas.height / 2;

      if (position === "bottom-right") {
        ctx.textAlign = "right";
        posX = canvas.width - 40;
        posY = canvas.height - 40;
      } else if (position === "top-left") {
        ctx.textAlign = "left";
        posX = 40;
        posY = 60;
      } else {
        ctx.textAlign = "center";
      }

      ctx.save();
      ctx.translate(posX, posY);
      ctx.rotate(rad);
      ctx.fillText(watermarkText, 0, 0);
      ctx.restore();
    }

    ctx.restore();

    // Aggiorna URL di download
    canvas.toBlob((blob) => {
      if (blob) {
        if (downloadUrl) URL.revokeObjectURL(downloadUrl);
        const url = URL.createObjectURL(blob);
        setDownloadUrl(url);
      }
    }, "image/jpeg", 0.92);
  }, [watermarkText, fontSize, opacity, color, position, angle, downloadUrl]);

  const handleFilesSelected = (files: File[]) => {
    if (files.length === 0) return;
    const f = files[0];
    setFile(f);

    const img = new Image();
    const url = URL.createObjectURL(f);
    img.onload = () => {
      loadedImgRef.current = img;
      renderCanvas();
    };
    img.src = url;
  };

  useEffect(() => {
    if (loadedImgRef.current) {
      renderCanvas();
    }
  }, [watermarkText, fontSize, opacity, color, position, angle, renderCanvas]);

  const resetAll = () => {
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setFile(null);
    setDownloadUrl(null);
    loadedImgRef.current = null;
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <Dropzone
          accept="image/png,image/jpeg,image/webp"
          multiple={false}
          maxSizeMB={50}
          onFilesSelected={handleFilesSelected}
          helperText="Trascina la foto da proteggere con watermark o filigrana personalizzata"
        />
      ) : (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400">
                <Stamp className="h-5 w-5" />
              </span>
              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-white">
                  {sanitizeFileName(file.name)}
                </h4>
                <p className="text-xs text-zinc-500">
                  {formatBytes(file.size)} • Filigrana Applicata in Memoria
                </p>
              </div>
            </div>

            <button onClick={resetAll} className="text-xs text-red-600 hover:underline">
              Scegli un&apos;altra foto
            </button>
          </div>

          {/* Watermark Controls */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Testo Filigrana:
              </label>
              <input
                type="text"
                value={watermarkText}
                onChange={(e) => setWatermarkText(e.target.value)}
                placeholder="Es. © 2026 MyBrand, RISERVATO..."
                className="mt-1 w-full rounded-xl border border-zinc-300 bg-zinc-50 p-2 text-xs font-semibold text-zinc-900 focus:border-amber-500 focus:bg-white focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                <span>Dimensione Font:</span>
                <span>{fontSize} px</span>
              </div>
              <input
                type="range"
                min={16}
                max={150}
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                className="mt-2 w-full accent-amber-600"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                <span>Opacità:</span>
                <span>{opacity}%</span>
              </div>
              <input
                type="range"
                min={10}
                max={100}
                value={opacity}
                onChange={(e) => setOpacity(parseInt(e.target.value))}
                className="mt-2 w-full accent-amber-600"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Colore Testo:
              </label>
              <div className="mt-1 flex items-center gap-2">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="h-8 w-10 cursor-pointer rounded-lg border border-zinc-300"
                />
                <span className="font-mono text-xs text-zinc-600 dark:text-zinc-400">{color}</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Posizionamento:
              </label>
              <select
                value={position}
                onChange={(e) => setPosition(e.target.value as typeof position)}
                className="mt-1 w-full rounded-xl border border-zinc-300 bg-zinc-50 p-2 text-xs font-semibold text-zinc-900 focus:border-amber-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              >
                <option value="center">Centro</option>
                <option value="bottom-right">In basso a destra</option>
                <option value="top-left">In alto a sinistra</option>
                <option value="tiled">Pattern Ripetuto (Tutto il foglio)</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                <span>Angolo Rotazione:</span>
                <span>{angle}°</span>
              </div>
              <input
                type="range"
                min={-90}
                max={90}
                value={angle}
                onChange={(e) => setAngle(parseInt(e.target.value))}
                className="mt-2 w-full accent-amber-600"
              />
            </div>
          </div>

          {/* Canvas Live Preview */}
          <div className="mt-6">
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Anteprima Live con Watermark:
            </label>
            <div className="mt-2 max-h-80 overflow-auto rounded-xl border border-zinc-200 bg-zinc-100 p-2 text-center dark:border-zinc-800 dark:bg-zinc-950">
              <canvas ref={canvasRef} className="mx-auto max-h-72 w-auto rounded-lg shadow-sm" />
            </div>
          </div>

          {/* Download Action */}
          {downloadUrl && (
            <div className="mt-6 flex justify-end">
              <a
                href={downloadUrl}
                download={`watermark_${file.name}`}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-amber-700 active:scale-95"
              >
                <Download className="h-4 w-4" />
                <span>Scarica Foto con Filigrana</span>
              </a>
            </div>
          )}
        </div>
      )}

      <AdBanner slot="action-card" />
    </div>
  );
};
