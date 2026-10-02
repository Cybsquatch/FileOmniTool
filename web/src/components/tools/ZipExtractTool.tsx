"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { extractZipArchive, ExtractedFile } from "@/lib/client-engines/archive-engine";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { ArchiveRestore, Download, File, Loader2, RefreshCw } from "lucide-react";

export const ZipExtractTool: React.FC = () => {
  const [zipFile, setZipFile] = useState<File | null>(null);
  const [extractedFiles, setExtractedFiles] = useState<ExtractedFile[]>([]);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = async (files: File[]) => {
    if (files.length === 0) return;
    const file = files[0];
    setZipFile(file);
    setError(null);
    setProcessing(true);

    try {
      const results = await extractZipArchive(file);
      setExtractedFiles(results);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante l'estrazione dello ZIP.";
      setError(msg);
      setExtractedFiles([]);
    } finally {
      setProcessing(false);
    }
  };

  const downloadSingleFile = (fileItem: ExtractedFile) => {
    const url = URL.createObjectURL(fileItem.blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileItem.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const resetAll = () => {
    setZipFile(null);
    setExtractedFiles([]);
    setError(null);
  };

  return (
    <div className="space-y-6">
      {!zipFile ? (
        <Dropzone
          accept=".zip,application/zip,application/x-zip-compressed"
          multiple={false}
          maxSizeMB={100}
          onFilesSelected={handleFilesSelected}
          helperText="Trascina l'archivio ZIP da esplorare ed estrarre"
        />
      ) : (
        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400">
                  <ArchiveRestore className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-white">
                    {sanitizeFileName(zipFile.name)}
                  </h4>
                  <p className="text-xs text-zinc-500">{formatBytes(zipFile.size)}</p>
                </div>
              </div>
              <button
                onClick={resetAll}
                className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              >
                <RefreshCw className="h-3 w-3" />
                <span>Altro archivio</span>
              </button>
            </div>

            {processing && (
              <div className="flex flex-col items-center justify-center py-10">
                <Loader2 className="h-8 w-8 animate-spin text-amber-600" />
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                  Decompressione sicura in corso nella memoria del browser...
                </p>
              </div>
            )}

            {error && (
              <div className="mt-4 rounded-xl bg-red-50 p-4 text-xs text-red-700 dark:bg-red-950/40 dark:text-red-300">
                {error}
              </div>
            )}

            {!processing && extractedFiles.length > 0 && (
              <div className="mt-5">
                <div className="flex items-center justify-between pb-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  <span>File Trovati ({extractedFiles.length})</span>
                  <span>Scarica singolarmente</span>
                </div>

                <ul className="divide-y divide-zinc-100 overflow-hidden rounded-xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
                  {extractedFiles.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between bg-zinc-50/50 px-4 py-3 text-xs transition hover:bg-zinc-100/50 dark:bg-zinc-900/50 dark:hover:bg-zinc-800/50"
                    >
                      <div className="flex items-center gap-2.5 truncate pr-3">
                        <File className="h-4 w-4 shrink-0 text-amber-600" />
                        <span className="truncate font-medium text-zinc-800 dark:text-zinc-200">
                          {item.name}
                        </span>
                        <span className="text-zinc-400">({formatBytes(item.size)})</span>
                      </div>
                      <button
                        onClick={() => downloadSingleFile(item)}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 shadow-sm border border-zinc-200 hover:bg-zinc-50 active:scale-95 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                      >
                        <Download className="h-3 w-3" />
                        <span>Scarica</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <AdBanner slot="action-card" />
        </div>
      )}
    </div>
  );
};
