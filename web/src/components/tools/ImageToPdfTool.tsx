"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { convertImagesToPdf, ImageToPdfConfig } from "@/lib/client-engines/pdf-engine";
import { formatBytes } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { FileImage, Download, Trash2, ArrowUp, ArrowDown, CheckCircle2, Loader2, RefreshCw, Settings2 } from "lucide-react";

export const ImageToPdfTool: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [resultSize, setResultSize] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [orientation, setOrientation] = useState<"auto" | "portrait" | "landscape">("auto");
  const [pageSize, setPageSize] = useState<"a4" | "fit">("a4");
  const [margin, setMargin] = useState<number>(15);

  const handleFilesSelected = (newFiles: File[]) => {
    setFiles((prev) => [...prev, ...newFiles]);
    setDownloadUrl(null);
    setError(null);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setDownloadUrl(null);
  };

  const moveFile = (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= files.length) return;

    setFiles((prev) => {
      const next = [...prev];
      const temp = next[index];
      next[index] = next[targetIndex];
      next[targetIndex] = temp;
      return next;
    });
    setDownloadUrl(null);
  };

  const handleConvert = async () => {
    if (files.length === 0) {
      setError("Aggiungi almeno un'immagine per generare il PDF.");
      return;
    }

    try {
      setProcessing(true);
      setError(null);

      const config: ImageToPdfConfig = {
        orientation,
        pageSize,
        margin,
      };

      const pdfBytes = await convertImagesToPdf(files, config);
      const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);
      setResultSize(blob.size);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante la creazione del PDF.";
      setError(msg);
    } finally {
      setProcessing(false);
    }
  };

  const resetAll = () => {
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setFiles([]);
    setDownloadUrl(null);
    setResultSize(null);
    setError(null);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <Dropzone
          onFilesSelected={handleFilesSelected}
          accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
          maxSizeMB={50}
          multiple={true}
          helperText="Trascina qui le tue foto (JPG, PNG, WebP) o clicca per selezionarle"
        />

        {files.length > 0 && (
          <div className="mt-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 pb-3 dark:border-zinc-800">
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Immagini selezionate ({files.length})
              </span>
              <button
                onClick={resetAll}
                className="flex items-center gap-1 text-xs text-rose-500 hover:text-rose-600 dark:text-rose-400"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span>Rimuovi tutte</span>
              </button>
            </div>

            {/* Configurazione impaginazione */}
            <div className="grid grid-cols-1 gap-4 rounded-xl border border-zinc-100 bg-zinc-50/50 p-4 sm:grid-cols-3 dark:border-zinc-800 dark:bg-zinc-950/50">
              <div>
                <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  Formato Pagina
                </label>
                <select
                  value={pageSize}
                  onChange={(e) => setPageSize(e.target.value as "a4" | "fit")}
                  className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-2.5 py-1.5 text-xs text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                >
                  <option value="a4">Standard A4</option>
                  <option value="fit">Adatta a Immagine (Originale)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  Orientamento
                </label>
                <select
                  value={orientation}
                  onChange={(e) => setOrientation(e.target.value as "auto" | "portrait" | "landscape")}
                  disabled={pageSize === "fit"}
                  className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-2.5 py-1.5 text-xs text-zinc-900 disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                >
                  <option value="auto">Automatico (in base alla foto)</option>
                  <option value="portrait">Verticale (Portrait)</option>
                  <option value="landscape">Orizzontale (Landscape)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  Margini Pagina
                </label>
                <select
                  value={margin}
                  onChange={(e) => setMargin(Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-2.5 py-1.5 text-xs text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                >
                  <option value={0}>Nessun Margine (A pieno schermo)</option>
                  <option value={15}>Piccolo (15 pt)</option>
                  <option value={30}>Standard (30 pt)</option>
                </select>
              </div>
            </div>

            {/* Lista miniature e riordino */}
            <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {files.map((file, idx) => (
                <li key={`${file.name}-${idx}`} className="flex items-center justify-between py-2.5">
                  <div className="flex items-center gap-3 truncate">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-100 text-xs font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                      {idx + 1}
                    </span>
                    <FileImage className="h-5 w-5 shrink-0 text-emerald-500" />
                    <div className="truncate">
                      <p className="truncate text-xs font-medium text-zinc-800 dark:text-zinc-200">
                        {file.name}
                      </p>
                      <p className="text-[10px] text-zinc-500">
                        {formatBytes(file.size)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => moveFile(idx, "up")}
                      disabled={idx === 0}
                      className="rounded p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 disabled:opacity-30 dark:hover:bg-zinc-800"
                      title="Sposta su"
                    >
                      <ArrowUp className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => moveFile(idx, "down")}
                      disabled={idx === files.length - 1}
                      className="rounded p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 disabled:opacity-30 dark:hover:bg-zinc-800"
                      title="Sposta giù"
                    >
                      <ArrowDown className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => removeFile(idx)}
                      className="rounded p-1 text-zinc-400 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/30"
                      title="Rimuovi"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {error && (
              <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700 dark:border-rose-900/50 dark:bg-rose-950/30 dark:text-rose-300">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-end">
              {!downloadUrl ? (
                <button
                  onClick={handleConvert}
                  disabled={processing}
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-500 disabled:opacity-50"
                >
                  {processing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Creazione PDF in memoria...</span>
                    </>
                  ) : (
                    <>
                      <FileImage className="h-4 w-4" />
                      <span>Converti in PDF</span>
                    </>
                  )}
                </button>
              ) : (
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={downloadUrl}
                    download="immagini_convertite.pdf"
                    className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-500"
                  >
                    <Download className="h-4 w-4" />
                    <span>Scarica PDF ({resultSize ? formatBytes(resultSize) : ""})</span>
                  </a>
                  <button
                    onClick={resetAll}
                    className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    <span>Nuovo file</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <AdBanner slot="action-card" />
    </div>
  );
};
