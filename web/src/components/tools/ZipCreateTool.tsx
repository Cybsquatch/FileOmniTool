"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { createZipArchive } from "@/lib/client-engines/archive-engine";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { FolderArchive, Download, Trash2, CheckCircle2, Loader2, RefreshCw } from "lucide-react";

export const ZipCreateTool: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [archiveName, setArchiveName] = useState("archivio.zip");
  const [processing, setProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [resultSize, setResultSize] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = (newFiles: File[]) => {
    setFiles((prev) => [...prev, ...newFiles]);
    setDownloadUrl(null);
    setError(null);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setDownloadUrl(null);
  };

  const handleCreateZip = async () => {
    if (files.length === 0) {
      setError("Aggiungi almeno un file da includere nell'archivio.");
      return;
    }

    try {
      setProcessing(true);
      setError(null);

      const zipBlob = await createZipArchive(files, archiveName);
      const url = URL.createObjectURL(zipBlob);

      setDownloadUrl(url);
      setResultSize(zipBlob.size);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante la creazione dello ZIP.";
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
    <div className="space-y-6">
      {!downloadUrl ? (
        <>
          <Dropzone
            multiple={true}
            maxSizeMB={100}
            onFilesSelected={handleFilesSelected}
            helperText="Trascina qui tutti i file che vuoi comprimere in uno ZIP"
          />

          {files.length > 0 && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  File nell&apos;Archivio ({files.length})
                </h4>
                <button onClick={resetAll} className="text-xs text-red-600 hover:underline">
                  Rimuovi tutti
                </button>
              </div>

              <ul className="mt-3 max-h-56 divide-y divide-zinc-100 overflow-y-auto dark:divide-zinc-800">
                {files.map((file, idx) => (
                  <li key={idx} className="flex items-center justify-between py-2 text-xs">
                    <span className="truncate font-medium text-zinc-800 dark:text-zinc-200">
                      {sanitizeFileName(file.name)}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-zinc-400">({formatBytes(file.size)})</span>
                      <button
                        onClick={() => removeFile(idx)}
                        className="text-zinc-400 hover:text-red-600"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-5 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Nome File ZIP:
                </label>
                <input
                  type="text"
                  value={archiveName}
                  onChange={(e) => setArchiveName(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                />
              </div>

              {error && (
                <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700 dark:bg-red-950/40 dark:text-red-300">
                  {error}
                </div>
              )}

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleCreateZip}
                  disabled={processing || files.length === 0}
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-amber-600/20 transition hover:bg-amber-700 disabled:opacity-50"
                >
                  {processing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Compressione ZIP...</span>
                    </>
                  ) : (
                    <>
                      <FolderArchive className="h-4 w-4" />
                      <span>Crea Archivio ZIP ({files.length} file)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-6 text-center dark:border-amber-900/60 dark:bg-amber-950/20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-300">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">
            Archivio ZIP Pronto!
          </h3>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            Dimensione compressa: {resultSize ? formatBytes(resultSize) : ""}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={downloadUrl}
              download={archiveName.endsWith(".zip") ? archiveName : `${archiveName}.zip`}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-amber-600/30 transition hover:bg-amber-700 active:scale-95"
            >
              <Download className="h-4 w-4" />
              <span>Scarica Archivio ZIP</span>
            </a>
            <button
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-xs font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Crea un altro ZIP</span>
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
