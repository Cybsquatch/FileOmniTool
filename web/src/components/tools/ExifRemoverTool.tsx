"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { ShieldCheck, Download, CheckCircle2, Loader2, RefreshCw, EyeOff, Lock } from "lucide-react";

export const ExifRemoverTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [cleanBlob, setCleanBlob] = useState<Blob | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = async (files: File[]) => {
    if (files.length === 0) return;
    const f = files[0];
    setFile(f);
    setError(null);
    setProcessing(true);

    try {
      // Per rimuovere tutti i metadati EXIF e GPS in modo garantito al 100% nel browser,
      // disegniamo l'immagine grezza su un elemento Canvas e la riesportiamo come nuovo Blob pulito.
      const img = new Image();
      const tempUrl = URL.createObjectURL(f);

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = tempUrl;
      });

      URL.revokeObjectURL(tempUrl);

      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Contesto Canvas non disponibile.");

      ctx.drawImage(img, 0, 0);

      const format = f.type === "image/png" ? "image/png" : "image/jpeg";

      const cleanedBlob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob(
          (b) => (b ? resolve(b) : reject(new Error("Errore durante la creazione dell'immagine pulita."))),
          format,
          0.95
        );
      });

      const url = URL.createObjectURL(cleanedBlob);
      setCleanBlob(cleanedBlob);
      setDownloadUrl(url);
    } catch {
      setError("Impossibile elaborare l'immagine.");
      setFile(null);
    } finally {
      setProcessing(false);
    }
  };

  const resetAll = () => {
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setFile(null);
    setCleanBlob(null);
    setDownloadUrl(null);
    setError(null);
  };

  return (
    <div className="space-y-6">
      {!downloadUrl ? (
        <>
          <Dropzone
            accept="image/jpeg,image/png,image/webp"
            multiple={false}
            maxSizeMB={50}
            onFilesSelected={handleFilesSelected}
            helperText="Trascina qui la foto da cui rimuovere coordinate GPS e metadati EXIF"
          />

          {processing && (
            <div className="flex flex-col items-center justify-center py-10">
              <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                Eliminazione di coordinate GPS e dati fotocamera in corso...
              </p>
            </div>
          )}

          {error && (
            <div className="mt-4 rounded-xl bg-red-50 p-4 text-xs text-red-700 dark:bg-red-950/40 dark:text-red-300">
              {error}
            </div>
          )}
        </>
      ) : (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6 text-center dark:border-emerald-900/60 dark:bg-emerald-950/20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-300">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">
            Metadati EXIF e GPS Eliminati con Successo!
          </h3>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            La foto ora è completamente anonima e sicura da pubblicare sui social o inviare online.
          </p>

          <div className="mt-5 mx-auto max-w-md rounded-xl border border-emerald-200 bg-white/80 p-4 text-left text-xs dark:border-emerald-900/60 dark:bg-zinc-900/80">
            <div className="font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5 pb-2 border-b border-zinc-100 dark:border-zinc-800">
              <Lock className="h-4 w-4 text-emerald-600" />
              <span>Dati Sensibili Rimossi:</span>
            </div>
            <ul className="mt-2 space-y-1 text-zinc-600 dark:text-zinc-400 list-disc pl-4">
              <li>Coordinate GPS esatte (Latitudine, Longitudine, Altitudine della tua casa/luogo)</li>
              <li>Marca e modello della fotocamera / smartphone (es. iPhone 15, Galaxy S24)</li>
              <li>Data e ora precisa dello scatto</li>
              <li>Numero di serie del dispositivo e impostazioni di scatto</li>
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={downloadUrl}
              download={`sicura_${file?.name || "foto_anonima.jpg"}`}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-95"
            >
              <Download className="h-4 w-4" />
              <span>Scarica Foto Anonima</span>
            </a>
            <button
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-xs font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Pulisci un&apos;altra foto</span>
            </button>
          </div>

          <div className="mt-6">
            <AdBanner slot="action-card" />
          </div>
        </div>
      )}
    </div>
  );
};
