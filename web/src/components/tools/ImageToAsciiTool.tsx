"use client";

import React, { useState, useRef } from "react";
import { Dropzone } from "./Dropzone";
import { Copy, Download, RefreshCw, CheckCircle2, Sliders } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

const RAMPS: Record<string, string> = {
  standard: "@%#*+=-:. ",
  detailed: "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'. ",
  blocks: "█▓▒░ ",
  simple: "#O+-. ",
};

export const ImageToAsciiTool: React.FC = () => {
  const { language } = useLanguage();
  const [asciiArt, setAsciiArt] = useState("");
  const [cols, setCols] = useState(80);
  const [rampKey, setRampKey] = useState("standard");
  const [inverted, setInverted] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [copied, setCopied] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const generateAscii = (img: HTMLImageElement, widthCols: number, currentRamp: string, isInverted: boolean) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return "";

    // Aspect ratio correction (terminal fonts are typically ~2x taller than wide)
    const fontAspect = 0.5;
    const targetWidth = widthCols;
    const targetHeight = Math.round((img.naturalHeight / img.naturalWidth) * targetWidth * fontAspect);

    canvas.width = targetWidth;
    canvas.height = targetHeight;

    ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
    const imgData = ctx.getImageData(0, 0, targetWidth, targetHeight).data;

    const ramp = RAMPS[currentRamp] || RAMPS.standard;
    const rampLen = ramp.length;
    let result = "";

    for (let y = 0; y < targetHeight; y++) {
      for (let x = 0; x < targetWidth; x++) {
        const offset = (y * targetWidth + x) * 4;
        const r = imgData[offset];
        const g = imgData[offset + 1];
        const b = imgData[offset + 2];
        const a = imgData[offset + 3];

        if (a < 50) {
          result += " ";
          continue;
        }

        // Standard luminance calculation
        let brightness = 0.299 * r + 0.587 * g + 0.114 * b;
        if (isInverted) {
          brightness = 255 - brightness;
        }

        const charIdx = Math.floor((brightness / 255) * (rampLen - 1));
        result += ramp[charIdx];
      }
      result += "\n";
    }

    return result;
  };

  const handleFilesSelected = (files: File[]) => {
    const file = files[0];
    if (!file) return;
    setImageFile(file);

    const img = new Image();
    const url = URL.createObjectURL(file);
    img.src = url;
    img.onload = () => {
      imgRef.current = img;
      const res = generateAscii(img, cols, rampKey, inverted);
      setAsciiArt(res);
      URL.revokeObjectURL(url);
    };
  };

  const recompute = (newCols = cols, newRamp = rampKey, newInverted = inverted) => {
    if (!imgRef.current) return;
    const res = generateAscii(imgRef.current, newCols, newRamp, newInverted);
    setAsciiArt(res);
  };

  const handleCopy = async () => {
    if (!asciiArt) return;
    await navigator.clipboard.writeText(asciiArt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    if (!asciiArt) return;
    const blob = new Blob([asciiArt], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ascii-art.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadHtml = () => {
    if (!asciiArt) return;
    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>ASCII Art - FileOmniTool</title>
  <style>
    body { background: #121212; color: #00ff66; font-family: monospace; font-size: 8px; line-height: 8px; white-space: pre; padding: 20px; }
  </style>
</head>
<body>${asciiArt.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</body>
</html>`;
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ascii-art.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {!imageFile ? (
        <Dropzone
          onFilesSelected={handleFilesSelected}
          accept="image/*"
          helperText={language === "it" ? "Trascina qui un'immagine o foto da convertire in ASCII Art" : "Drag & drop an image to convert to ASCII Art"}
        />
      ) : (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800">
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">{imageFile.name}</h3>
              <p className="text-xs text-zinc-500">
                {language === "it" ? "Generazione ASCII istantanea" : "Real-time client-side generation"}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              >
                {copied ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? (language === "it" ? "Copiato!" : "Copied!") : (language === "it" ? "Copia" : "Copy")}</span>
              </button>
              <button
                onClick={handleDownloadTxt}
                className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700"
              >
                <Download className="h-3.5 w-3.5" />
                <span>.TXT</span>
              </button>
              <button
                onClick={handleDownloadHtml}
                className="flex items-center gap-1.5 rounded-xl border border-emerald-600 px-3 py-1.5 text-xs font-bold text-emerald-700 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-950/40"
              >
                <Download className="h-3.5 w-3.5" />
                <span>.HTML</span>
              </button>
              <button
                onClick={() => {
                  setImageFile(null);
                  setAsciiArt("");
                }}
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              >
                {language === "it" ? "Nuova Foto" : "New Image"}
              </button>
            </div>
          </div>

          {/* Controls */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                {language === "it" ? `Larghezza caratteri: ${cols}` : `Character Width: ${cols}`}
              </label>
              <input
                type="range"
                min="30"
                max="160"
                value={cols}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setCols(val);
                  recompute(val, rampKey, inverted);
                }}
                className="mt-2 w-full accent-emerald-600"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                {language === "it" ? "Set di Caratteri" : "Character Set"}
              </label>
              <select
                value={rampKey}
                onChange={(e) => {
                  const val = e.target.value;
                  setRampKey(val);
                  recompute(cols, val, inverted);
                }}
                className="mt-1 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-2 text-xs font-medium text-zinc-800 outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              >
                <option value="standard">Standard (@%#*+=-:. )</option>
                <option value="detailed">{language === "it" ? "Dettagliato (70 simboli)" : "Detailed (70 symbols)"}</option>
                <option value="blocks">{language === "it" ? "Blocchi (█▓▒░ )" : "Blocks (█▓▒░ )"}</option>
                <option value="simple">{language === "it" ? "Semplice (#O+-.)" : "Simple (#O+-.)"}</option>
              </select>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <input
                type="checkbox"
                id="invert"
                checked={inverted}
                onChange={(e) => {
                  const val = e.target.checked;
                  setInverted(val);
                  recompute(cols, rampKey, val);
                }}
                className="h-4 w-4 rounded accent-emerald-600"
              />
              <label htmlFor="invert" className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                {language === "it" ? "Inverti Contrasto / Negativo" : "Invert Contrast / Negative"}
              </label>
            </div>
          </div>

          {/* ASCII View Box */}
          <div className="overflow-x-auto rounded-xl border border-zinc-900 bg-zinc-950 p-4 text-emerald-400 font-mono shadow-inner">
            <pre className="text-[7px] sm:text-[9px] leading-[7px] sm:leading-[9px] select-all">
              {asciiArt}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};
