"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import JSZip from "jszip";
import { Download, Loader2, Image as ImageIcon, Archive, RefreshCw } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

interface GifFrame {
  index: number;
  dataUrl: string;
  width: number;
  height: number;
  durationMs?: number;
}

export const GifFrameExtractorTool: React.FC = () => {
  const { language } = useLanguage();
  const [frames, setFrames] = useState<GifFrame[]>([]);
  const [loading, setLoading] = useState(false);
  const [zipping, setZipping] = useState(false);
  const [fileName, setFileName] = useState("animation");
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = async (files: File[]) => {
    const file = files[0];
    if (!file) return;

    setError(null);
    setLoading(true);
    setFrames([]);

    const baseName = file.name.substring(0, file.name.lastIndexOf(".")) || file.name;
    setFileName(baseName);

    try {
      // Check if modern ImageDecoder is supported
      const win = window as unknown as Record<string, unknown>;
      if (typeof window !== "undefined" && typeof win.ImageDecoder === "function") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const decoder = new (win.ImageDecoder as any)({
          data: file.stream(),
          type: "image/gif",
        });

        await decoder.tracks.ready;
        const frameCount = decoder.tracks.selectedTrack?.frameCount || 1;
        const extracted: GifFrame[] = [];

        for (let i = 0; i < frameCount; i++) {
          const { image } = await decoder.decode({ frameIndex: i });
          const canvas = document.createElement("canvas");
          canvas.width = image.displayWidth;
          canvas.height = image.displayHeight;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(image, 0, 0);
            extracted.push({
              index: i + 1,
              dataUrl: canvas.toDataURL("image/png"),
              width: image.displayWidth,
              height: image.displayHeight,
              durationMs: Math.round(image.duration ? image.duration / 1000 : 100),
            });
          }
        }
        setFrames(extracted);
      } else {
        // Fallback for environments without WebCodecs ImageDecoder
        const img = new Image();
        const objectUrl = URL.createObjectURL(file);
        img.src = objectUrl;
        await new Promise((res) => (img.onload = res));

        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth || 400;
        canvas.height = img.naturalHeight || 400;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          setFrames([
            {
              index: 1,
              dataUrl: canvas.toDataURL("image/png"),
              width: canvas.width,
              height: canvas.height,
            },
          ]);
        }
        URL.revokeObjectURL(objectUrl);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante la decodifica dei fotogrammi GIF.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const downloadFrame = (frame: GifFrame) => {
    const a = document.createElement("a");
    a.href = frame.dataUrl;
    a.download = `${fileName}-frame-${String(frame.index).padStart(3, "0")}.png`;
    a.click();
  };

  const downloadAllAsZip = async () => {
    if (frames.length === 0) return;
    setZipping(true);
    try {
      const zip = new JSZip();
      for (const frame of frames) {
        const base64Data = frame.dataUrl.split(",")[1];
        zip.file(`${fileName}-frame-${String(frame.index).padStart(3, "0")}.png`, base64Data, { base64: true });
      }
      const zipBlob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${fileName}-all-frames.zip`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      setError(language === "it" ? "Errore durante la creazione dello ZIP." : "Failed to create ZIP archive.");
    } finally {
      setZipping(false);
    }
  };

  return (
    <div className="space-y-6">
      <Dropzone
        onFilesSelected={handleFilesSelected}
        accept="image/gif,.gif"
        helperText={language === "it" ? "Trascina qui il file GIF animato per estrarre tutti i fotogrammi" : "Drag & drop animated GIF to extract all frames"}
      />

      {loading && (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-12 dark:border-zinc-800 dark:bg-zinc-900">
          <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
          <p className="mt-4 font-semibold text-zinc-900 dark:text-white">
            {language === "it" ? "Estrazione fotogrammi in corso..." : "Decoding GIF frames in memory..."}
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            {language === "it" ? "Elaborazione 100% locale nella memoria del browser" : "100% local processing in browser RAM"}
          </p>
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-xs text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
          {error}
        </div>
      )}

      {frames.length > 0 && !loading && (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800">
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                {language === "it" ? `Fotogrammi Estratti (${frames.length})` : `Extracted Frames (${frames.length})`}
              </h3>
              <p className="text-xs text-zinc-500">
                {frames[0]?.width} × {frames[0]?.height} px
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={downloadAllAsZip}
                disabled={zipping}
                className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700 disabled:opacity-50"
              >
                {zipping ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Archive className="h-3.5 w-3.5" />}
                <span>
                  {zipping
                    ? (language === "it" ? "Creazione ZIP..." : "Creating ZIP...")
                    : (language === "it" ? `Scarica Tutti in ZIP (${frames.length})` : `Download All as ZIP (${frames.length})`)}
                </span>
              </button>
              <button
                onClick={() => setFrames([])}
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              >
                {language === "it" ? "Ricomincia" : "Reset"}
              </button>
            </div>
          </div>

          {/* Grid of Frames */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {frames.map((frame) => (
              <div
                key={frame.index}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 p-2 transition hover:border-emerald-500 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/60"
              >
                <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-zinc-200/50 dark:bg-zinc-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={frame.dataUrl}
                    alt={`Frame ${frame.index}`}
                    className="max-h-full max-w-full object-contain"
                  />
                  <span className="absolute bottom-1 left-1 rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-mono text-white">
                    #{frame.index}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500">
                    {frame.durationMs ? `${frame.durationMs}ms` : "PNG"}
                  </span>
                  <button
                    onClick={() => downloadFrame(frame)}
                    className="flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-emerald-700 shadow-sm hover:bg-emerald-50 dark:bg-zinc-800 dark:text-emerald-300"
                  >
                    <Download className="h-3 w-3" />
                    <span>PNG</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
