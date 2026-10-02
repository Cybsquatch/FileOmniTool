"use client";

import React, { useState } from "react";
import JSZip from "jszip";
import { Dropzone } from "./Dropzone";
import { formatBytes } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { Sparkles, Download, Copy, Check, RefreshCw, Loader2, Globe, Monitor } from "lucide-react";

interface IconSizeDef {
  name: string;
  size: number;
  label: string;
}

const ICON_SIZES: IconSizeDef[] = [
  { name: "favicon-16x16.png", size: 16, label: "Favicon Standard (16×16)" },
  { name: "favicon-32x32.png", size: 32, label: "Favicon Retina (32×32)" },
  { name: "favicon-48x48.png", size: 48, label: "Desktop Shortcut (48×48)" },
  { name: "apple-touch-icon.png", size: 180, label: "Apple iOS Touch (180×180)" },
  { name: "android-chrome-192x192.png", size: 192, label: "Android PWA (192×192)" },
  { name: "android-chrome-512x512.png", size: 512, label: "High-Res App Icon (512×512)" },
];

export const FaviconGeneratorTool: React.FC = () => {
  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [sourceUrl, setSourceUrl] = useState<string | null>(null);
  const [generatedIcons, setGeneratedIcons] = useState<{ name: string; size: number; url: string; blob: Blob }[]>([]);
  const [zipUrl, setZipUrl] = useState<string | null>(null);
  const [zipSize, setZipSize] = useState<number | null>(null);
  const [processing, setProcessing] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const htmlSnippet = `<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" type="image/x-icon" href="/favicon.ico">`;

  const handleFilesSelected = async (files: File[]) => {
    if (files.length === 0) return;
    const file = files[0];
    setSourceFile(file);

    const previewUrl = URL.createObjectURL(file);
    setSourceUrl(previewUrl);

    try {
      setProcessing(true);
      setGeneratedIcons([]);
      setZipUrl(null);

      const img = await new Promise<HTMLImageElement>((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = reject;
        image.src = previewUrl;
      });

      const icons: { name: string; size: number; url: string; blob: Blob }[] = [];
      const zip = new JSZip();

      for (const item of ICON_SIZES) {
        const canvas = document.createElement("canvas");
        canvas.width = item.size;
        canvas.height = item.size;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = "high";
          ctx.drawImage(img, 0, 0, item.size, item.size);

          const blob = await new Promise<Blob>((res) => {
            canvas.toBlob((b) => res(b!), "image/png");
          });

          const url = URL.createObjectURL(blob);
          icons.push({ name: item.name, size: item.size, url, blob });
          zip.file(item.name, blob);

          if (item.size === 32) {
            // Genera anche favicon.ico (copia binaria PNG standard accettata dai moderni browser)
            zip.file("favicon.ico", blob);
          }
        }
      }

      zip.file("head-tags.html", htmlSnippet);

      const zipBlob = await zip.generateAsync({ type: "blob" });
      const zipDownloadUrl = URL.createObjectURL(zipBlob);

      setGeneratedIcons(icons);
      setZipUrl(zipDownloadUrl);
      setZipSize(zipBlob.size);
    } catch (err) {
      console.error("Errore generazione favicon", err);
    } finally {
      setProcessing(false);
    }
  };

  const copySnippet = () => {
    navigator.clipboard.writeText(htmlSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const resetAll = () => {
    if (sourceUrl) URL.revokeObjectURL(sourceUrl);
    if (zipUrl) URL.revokeObjectURL(zipUrl);
    generatedIcons.forEach((i) => URL.revokeObjectURL(i.url));

    setSourceFile(null);
    setSourceUrl(null);
    setGeneratedIcons([]);
    setZipUrl(null);
    setZipSize(null);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        {!sourceFile ? (
          <Dropzone
            onFilesSelected={handleFilesSelected}
            accept="image/png,image/jpeg,image/svg+xml,image/webp,.png,.jpg,.jpeg,.svg,.webp"
            maxSizeMB={25}
            multiple={false}
            helperText="Carica il tuo logo o icona (PNG, JPG, SVG, WebP) per generare tutte le dimensioni favicon"
          />
        ) : (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-3 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-emerald-500" />
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Favicon Pacchetto Generato per: {sourceFile.name}
                </span>
              </div>
              <button
                onClick={resetAll}
                className="flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                <span>Carica altra immagine</span>
              </button>
            </div>

            {/* Simulazione Browser Tab Mockup */}
            {generatedIcons.length > 0 && (
              <div className="rounded-xl border border-zinc-200 bg-zinc-100/70 p-4 dark:border-zinc-800 dark:bg-zinc-950/70">
                <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                  <Monitor className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Anteprima Browser Tab in tempo reale</span>
                </div>
                <div className="inline-flex items-center gap-2.5 rounded-t-lg border-t border-x border-zinc-300 bg-white px-3.5 py-2 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
                  <img
                    src={generatedIcons[1]?.url || generatedIcons[0]?.url}
                    alt="Favicon preview"
                    className="h-4 w-4 rounded-xs"
                  />
                  <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">
                    Il Mio Sito Web | Home
                  </span>
                  <span className="text-xs text-zinc-400">×</span>
                </div>
              </div>
            )}

            {/* Pulsante Download ZIP Principale */}
            {zipUrl && (
              <div className="flex flex-col gap-3 rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 sm:flex-row sm:items-center sm:justify-between dark:border-emerald-950 dark:bg-emerald-950/20">
                <div>
                  <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-300">
                    Pacchetto Completo Favicon Pronto!
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400">
                    Include favicon.ico, 16x16, 32x32, 180x180, 192x192, 512x512 e codice HTML.
                  </p>
                </div>
                <a
                  href={zipUrl}
                  download="favicon_package.zip"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-500"
                >
                  <Download className="h-4 w-4" />
                  <span>Scarica Tutto (.ZIP - {zipSize ? formatBytes(zipSize) : ""})</span>
                </a>
              </div>
            )}

            {/* Grid delle icone generate */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {generatedIcons.map((icon) => (
                <div
                  key={icon.name}
                  className="flex flex-col items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50/50 p-3 text-center dark:border-zinc-800 dark:bg-zinc-900/50"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-white p-2 dark:border-zinc-700 dark:bg-zinc-950">
                    <img
                      src={icon.url}
                      alt={icon.name}
                      style={{ width: Math.min(icon.size, 48), height: Math.min(icon.size, 48) }}
                    />
                  </div>
                  <span className="mt-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                    {icon.size}×{icon.size}
                  </span>
                  <span className="truncate text-[10px] text-zinc-500">
                    {icon.name}
                  </span>
                  <a
                    href={icon.url}
                    download={icon.name}
                    className="mt-2.5 flex items-center gap-1 rounded-lg border border-zinc-200 bg-white px-2 py-1 text-[11px] font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                  >
                    <Download className="h-3 w-3" />
                    <span>PNG</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Snippet HTML da incollare */}
            <div className="rounded-xl border border-zinc-200 bg-zinc-900 p-4 text-white">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-zinc-400">
                  Tag HTML per il tuo sito (incolla tra &lt;head&gt; e &lt;/head&gt;)
                </span>
                <button
                  onClick={copySnippet}
                  className="flex items-center gap-1 rounded-md bg-zinc-800 px-2 py-1 text-[11px] font-medium text-zinc-200 hover:bg-zinc-700"
                >
                  {copiedCode ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-400" />
                      <span>Copiato!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copia HTML</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="overflow-x-auto text-[11px] font-mono text-emerald-400">
                {htmlSnippet}
              </pre>
            </div>
          </div>
        )}
      </div>

      <AdBanner slot="action-card" />
    </div>
  );
};
