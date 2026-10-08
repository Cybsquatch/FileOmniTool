"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { extractTextFromPdf } from "@/lib/client-engines/pdf-engine";
import { formatBytes } from "@/lib/security-guard";
import { FileText, Copy, Check, Download, RefreshCw, Loader2 } from "lucide-react";

export const PdfToTextTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = async (files: File[]) => {
    if (files.length === 0) return;
    const selected = files[0];
    setFile(selected);
    setError(null);
    setProcessing(true);

    try {
      const text = await extractTextFromPdf(selected);
      setExtractedText(text);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante l'estrazione del testo.";
      setError(msg);
    } finally {
      setProcessing(false);
    }
  };

  const handleCopy = () => {
    if (!extractedText) return;
    navigator.clipboard.writeText(extractedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    if (!extractedText) return;
    const blob = new Blob([extractedText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = (file?.name.replace(/\.pdf$/i, "") || "estratto") + "-testo.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const resetAll = () => {
    setFile(null);
    setExtractedText(null);
    setError(null);
  };

  const wordCount = extractedText ? extractedText.trim().split(/\s+/).filter(Boolean).length : 0;
  const charCount = extractedText ? extractedText.length : 0;

  return (
    <div className="space-y-6">
      {!file ? (
        <Dropzone
          onFilesSelected={handleFilesSelected}
          accept="application/pdf,.pdf"
          helperText="Trascina qui il file PDF da cui estrarre il testo puro"
        />
      ) : processing ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-12 dark:border-zinc-800 dark:bg-zinc-900">
          <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
          <p className="mt-4 font-semibold text-zinc-900 dark:text-white">Estrazione del testo in memoria...</p>
          <p className="mt-1 text-xs text-zinc-500">Decodifica degli stream di testo in corso</p>
        </div>
      ) : (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800">
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">{file.name}</h3>
              <p className="text-xs text-zinc-500">
                {formatBytes(file.size)} • {wordCount} parole • {charCount} caratteri
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? "Copiato!" : "Copia Testo"}</span>
              </button>
              <button
                onClick={handleDownloadTxt}
                className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-500"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Scarica .TXT</span>
              </button>
              <button
                onClick={resetAll}
                className="flex items-center gap-1 rounded-lg border border-zinc-200 px-2.5 py-1.5 text-xs text-zinc-500 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
                title="Carica un altro PDF"
              >
                <RefreshCw className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {error ? (
            <div className="mt-4 rounded-xl bg-red-50 p-4 text-xs text-red-600 dark:bg-red-950/50 dark:text-red-400">
              {error}
            </div>
          ) : (
            <div className="mt-4">
              <textarea
                readOnly
                value={extractedText || ""}
                rows={16}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-800 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
