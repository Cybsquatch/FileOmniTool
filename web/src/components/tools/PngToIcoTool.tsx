"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { Download, Loader2, CheckCircle2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { formatBytes } from "@/lib/utils";

export const PngToIcoTool: React.FC = () => {
  const { language } = useLanguage();
  const [file, setFile] = useState<File | null>(null);
  const [icoBlob, setIcoBlob] = useState<Blob | null>(null);
  const [loading, setLoading] = useState(false);
  const [sizes, setSizes] = useState<number[]>([16, 32, 48]);
  const [error, setError] = useState<string | null>(null);

  // Helper to render image to PNG Blob at specific square size
  const renderResizedPng = async (img: HTMLImageElement, size: number): Promise<Uint8Array> => {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas context unavailable");

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, size, size);

    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
    if (!blob) throw new Error("Failed to generate PNG blob");
    const buffer = await blob.arrayBuffer();
    return new Uint8Array(buffer);
  };

  // Build binary ICO container with PNG payloads
  const createIcoBinary = async (img: HTMLImageElement, targetSizes: number[]): Promise<Blob> => {
    const pngBuffers: { size: number; data: Uint8Array }[] = [];

    for (const s of targetSizes) {
      const data = await renderResizedPng(img, s);
      pngBuffers.push({ size: s, data });
    }

    const count = pngBuffers.length;
    // ICONDIR: 6 bytes
    // ICONDIRENTRY: 16 bytes per image
    const headerSize = 6 + 16 * count;
    let totalSize = headerSize;
    for (const item of pngBuffers) {
      totalSize += item.data.length;
    }

    const icoBytes = new Uint8Array(totalSize);
    const view = new DataView(icoBytes.buffer);

    // 1. ICONDIR
    view.setUint16(0, 0, true); // Reserved
    view.setUint16(2, 1, true); // 1 = ICO (2 = CUR)
    view.setUint16(4, count, true); // Number of images

    // 2. Entries & Image Payloads
    let currentOffset = headerSize;

    pngBuffers.forEach((item, idx) => {
      const entryOffset = 6 + idx * 16;
      const bWidth = item.size >= 256 ? 0 : item.size;
      const bHeight = item.size >= 256 ? 0 : item.size;

      view.setUint8(entryOffset, bWidth);
      view.setUint8(entryOffset + 1, bHeight);
      view.setUint8(entryOffset + 2, 0); // Palette colors (0 = no palette)
      view.setUint8(entryOffset + 3, 0); // Reserved
      view.setUint16(entryOffset + 4, 1, true); // Color planes
      view.setUint16(entryOffset + 6, 32, true); // Bits per pixel
      view.setUint32(entryOffset + 8, item.data.length, true); // Image byte size
      view.setUint32(entryOffset + 12, currentOffset, true); // Offset in file

      // Copy PNG data to payload offset
      icoBytes.set(item.data, currentOffset);
      currentOffset += item.data.length;
    });

    return new Blob([icoBytes], { type: "image/x-icon" });
  };

  const handleFilesSelected = async (files: File[]) => {
    const selected = files[0];
    if (!selected) return;

    setError(null);
    setLoading(true);
    setFile(selected);

    try {
      const img = new Image();
      const url = URL.createObjectURL(selected);
      img.src = url;
      await new Promise((res, rej) => {
        img.onload = res;
        img.onerror = () => rej(new Error("Errore nel caricamento dell'immagine."));
      });

      const blob = await createIcoBinary(img, sizes);
      setIcoBlob(blob);
      URL.revokeObjectURL(url);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante la creazione del file ICO.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!icoBlob || !file) return;
    const baseName = file.name.substring(0, file.name.lastIndexOf(".")) || "favicon";
    const url = URL.createObjectURL(icoBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${baseName}.ico`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleSize = (s: number) => {
    let nextSizes = sizes.includes(s) ? sizes.filter((x) => x !== s) : [...sizes, s];
    if (nextSizes.length === 0) nextSizes = [32];
    setSizes(nextSizes);
  };

  return (
    <div className="space-y-6">
      <Dropzone
        onFilesSelected={handleFilesSelected}
        accept="image/png,image/jpeg,image/webp,.png,.jpg,.jpeg,.webp"
        helperText={language === "it" ? "Trascina qui un'immagine PNG o JPG da convertire in file icona Windows (.ico)" : "Drag & drop PNG or JPG to convert into Windows icon (.ico)"}
      />

      {loading && (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-12 dark:border-zinc-800 dark:bg-zinc-900">
          <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
          <p className="mt-4 font-semibold text-zinc-900 dark:text-white">
            {language === "it" ? "Compilazione formato ICO in memoria..." : "Generating multi-resolution ICO file..."}
          </p>
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-xs text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
          {error}
        </div>
      )}

      {icoBlob && file && !loading && (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800">
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                {file.name.substring(0, file.name.lastIndexOf("."))}.ico
              </h3>
              <p className="text-xs text-zinc-500">
                {formatBytes(icoBlob.size)} • {language === "it" ? "File ICO Windows nativo" : "Native Windows ICO"}
              </p>
            </div>

            <button
              onClick={handleDownload}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700"
            >
              <Download className="h-4 w-4" />
              <span>{language === "it" ? "Scarica File .ICO" : "Download .ICO File"}</span>
            </button>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              {language === "it" ? "Risoluzioni incorporate nel file .ICO:" : "Resolutions embedded in .ICO:"}
            </label>
            <div className="mt-3 flex flex-wrap gap-3">
              {[16, 32, 48, 64, 128, 256].map((s) => (
                <button
                  key={s}
                  onClick={() => toggleSize(s)}
                  className={`rounded-xl border px-3 py-1.5 text-xs font-semibold transition ${
                    sizes.includes(s)
                      ? "border-emerald-600 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
                      : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
                  }`}
                >
                  {s} × {s} px
                </button>
              ))}
            </div>
            <p className="mt-2 text-[11px] text-zinc-500">
              {language === "it"
                ? "Le risoluzioni 16px, 32px e 48px sono quelle richieste da Windows per taskbar, desktop ed Esplora Risorse."
                : "16px, 32px, and 48px are standard resolutions required by Windows for taskbars, desktop, and file explorer."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
