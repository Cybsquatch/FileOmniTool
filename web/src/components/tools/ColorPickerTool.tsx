"use client";

import React, { useState, useRef } from "react";
import { Dropzone } from "./Dropzone";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { Pipette, Copy, Check, Palette, Sparkles } from "lucide-react";

interface SampledColor {
  hex: string;
  rgb: string;
  hsl: string;
}

export const ColorPickerTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [currentColor, setCurrentColor] = useState<SampledColor>({
    hex: "#10B981",
    rgb: "rgb(16, 185, 129)",
    hsl: "hsl(160, 84%, 39%)"
  });
  const [palette, setPalette] = useState<string[]>([]);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
  };

  const handleFilesSelected = (files: File[]) => {
    if (files.length === 0) return;
    const f = files[0];
    setFile(f);

    const img = new Image();
    const url = URL.createObjectURL(f);
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);

      // Campiona colore centrale
      const midX = Math.floor(canvas.width / 2);
      const midY = Math.floor(canvas.height / 2);
      samplePixel(midX, midY, ctx);

      // Estrai palette automatica (6 campioni distribuiti)
      extractPalette(ctx, canvas.width, canvas.height);
    };
    img.src = url;
  };

  const samplePixel = (x: number, y: number, ctx: CanvasRenderingContext2D) => {
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const r = pixel[0];
    const g = pixel[1];
    const b = pixel[2];

    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
    const rgb = `rgb(${r}, ${g}, ${b})`;
    const hsl = rgbToHsl(r, g, b);

    setCurrentColor({ hex, rgb, hsl });
  };

  const extractPalette = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    const points = [
      [w * 0.2, h * 0.2],
      [w * 0.5, h * 0.2],
      [w * 0.8, h * 0.2],
      [w * 0.2, h * 0.8],
      [w * 0.5, h * 0.8],
      [w * 0.8, h * 0.8]
    ];

    const extracted: string[] = [];
    for (const [px, py] of points) {
      const p = ctx.getImageData(Math.floor(px), Math.floor(py), 1, 1).data;
      const hex = `#${((1 << 24) + (p[0] << 16) + (p[1] << 8) + p[2]).toString(16).slice(1).toUpperCase()}`;
      if (!extracted.includes(hex)) {
        extracted.push(hex);
      }
    }
    setPalette(extracted);
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);

    samplePixel(x, y, ctx);
  };

  const copyValue = (val: string, key: string) => {
    navigator.clipboard.writeText(val);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <Dropzone
          accept="image/png,image/jpeg,image/webp"
          multiple={false}
          maxSizeMB={50}
          onFilesSelected={handleFilesSelected}
          helperText="Trascina una foto o grafica per prelevare codici colore HEX, RGB e generare la palette"
        />
      ) : (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
                <Pipette className="h-5 w-5" />
              </span>
              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-white">
                  {sanitizeFileName(file.name)}
                </h4>
                <p className="text-xs text-zinc-500">
                  {formatBytes(file.size)} • Clicca sull&apos;immagine per prelevare il colore del pixel
                </p>
              </div>
            </div>

            <button
              onClick={() => { setFile(null); setPalette([]); }}
              className="text-xs text-red-600 hover:underline"
            >
              Cambia immagine
            </button>
          </div>

          {/* Color Details Card */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-950">
              <div
                className="h-12 w-12 rounded-lg border border-black/10 shadow-inner"
                style={{ backgroundColor: currentColor.hex }}
              />
              <div>
                <span className="text-[11px] font-semibold text-zinc-400">Colore Selezionato</span>
                <p className="text-sm font-bold text-zinc-900 dark:text-white">{currentColor.hex}</p>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-950">
              <div>
                <span className="text-[11px] font-semibold text-zinc-400">HEX</span>
                <p className="font-mono text-xs font-bold text-zinc-800 dark:text-zinc-200">{currentColor.hex}</p>
              </div>
              <button
                onClick={() => copyValue(currentColor.hex, "hex")}
                className="text-purple-600 hover:opacity-80"
              >
                {copiedKey === "hex" ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-950">
              <div>
                <span className="text-[11px] font-semibold text-zinc-400">RGB</span>
                <p className="font-mono text-xs font-bold text-zinc-800 dark:text-zinc-200">{currentColor.rgb}</p>
              </div>
              <button
                onClick={() => copyValue(currentColor.rgb, "rgb")}
                className="text-purple-600 hover:opacity-80"
              >
                {copiedKey === "rgb" ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-950">
              <div>
                <span className="text-[11px] font-semibold text-zinc-400">HSL</span>
                <p className="font-mono text-xs font-bold text-zinc-800 dark:text-zinc-200">{currentColor.hsl}</p>
              </div>
              <button
                onClick={() => copyValue(currentColor.hsl, "hsl")}
                className="text-purple-600 hover:opacity-80"
              >
                {copiedKey === "hsl" ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Palette Extracted */}
          {palette.length > 0 && (
            <div className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-950/40">
              <div className="flex items-center gap-1.5 pb-3 text-xs font-bold text-zinc-800 dark:text-zinc-200">
                <Palette className="h-4 w-4 text-purple-600" />
                <span>Palette Colori Estratta dalla Foto:</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {palette.map((colorHex, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentColor({
                        hex: colorHex,
                        rgb: colorHex,
                        hsl: colorHex
                      });
                      copyValue(colorHex, `palette-${idx}`);
                    }}
                    className="group flex items-center gap-2 rounded-xl border border-zinc-200 bg-white p-2 shadow-sm transition hover:border-purple-300 dark:border-zinc-800 dark:bg-zinc-900"
                  >
                    <div
                      className="h-6 w-6 rounded-lg border border-black/10 shadow-inner"
                      style={{ backgroundColor: colorHex }}
                    />
                    <span className="font-mono text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      {colorHex}
                    </span>
                    {copiedKey === `palette-${idx}` ? (
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="h-3.5 w-3.5 text-zinc-400 group-hover:text-purple-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Image Canvas */}
          <div className="mt-5">
            <div className="max-h-96 overflow-auto rounded-xl border border-zinc-200 bg-zinc-100 p-2 text-center dark:border-zinc-800 dark:bg-zinc-950">
              <canvas
                ref={canvasRef}
                onClick={handleCanvasClick}
                className="mx-auto max-h-80 w-auto cursor-crosshair rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      )}

      <AdBanner slot="action-card" />
    </div>
  );
};
