"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { Download, Loader2, CheckCircle2, ShieldCheck, FileCheck } from "lucide-react";
import { flattenPdf } from "@/lib/client-engines/pdf-engine";
import { useLanguage } from "@/lib/i18n/context";
import { formatBytes } from "@/lib/utils";

export const PdfFlattenTool: React.FC = () => {
  const { language } = useLanguage();
  const [file, setFile] = useState<File | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [resultSize, setResultSize] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = async (files: File[]) => {
    const selected = files[0];
    if (!selected) return;

    setError(null);
    setLoading(true);
    setFile(selected);

    try {
      const flattenedBytes = await flattenPdf(selected);
      const blob = new Blob([flattenedBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      setResultSize(blob.size);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante l'appiattimento del PDF.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setFile(null);
    setDownloadUrl(null);
    setResultSize(null);
    setError(null);
  };

  return (
    <div className="space-y-6">
      {!downloadUrl ? (
        <>
          <Dropzone
            onFilesSelected={handleFilesSelected}
            accept="application/pdf,.pdf"
            helperText={language === "it" ? "Trascina qui il file PDF con moduli o campi interattivi da appiattire" : "Drag & drop PDF with interactive form fields to flatten"}
          />

          {loading && (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-12 dark:border-zinc-800 dark:bg-zinc-900">
              <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
              <p className="mt-4 font-semibold text-zinc-900 dark:text-white">
                {language === "it" ? "Appiattimento campi modulo in corso..." : "Flattening form fields in memory..."}
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                {language === "it" ? "Conversione dei campi dinamici in elementi grafici permanenti" : "Converting interactive fields to static elements"}
              </p>
            </div>
          )}

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-xs text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
              {error}
            </div>
          )}
        </>
      ) : (
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-100 pb-6 dark:border-zinc-800">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                <FileCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">{file?.name}</h3>
                <p className="text-xs text-zinc-500">
                  {resultSize ? formatBytes(resultSize) : ""} • {language === "it" ? "Moduli bloccati e resi statici" : "Forms flattened and sealed"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={downloadUrl}
                download={`${file?.name?.replace(/\.pdf$/i, "")}-flattened.pdf`}
                className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700"
              >
                <Download className="h-4 w-4" />
                <span>{language === "it" ? "Scarica PDF Appiattito" : "Download Flattened PDF"}</span>
              </a>
              <button
                onClick={handleReset}
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              >
                {language === "it" ? "Altro File" : "Process Another"}
              </button>
            </div>
          </div>

          <div className="rounded-xl bg-emerald-50/60 p-4 text-xs text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
            <p className="font-semibold">
              {language === "it" ? "Cosa è successo al documento?" : "What changed in this document?"}
            </p>
            <p className="mt-1 leading-relaxed opacity-90">
              {language === "it"
                ? "Tutti i campi modulo (caselle di testo, checkbox, firme elettroniche) sono stati fusi permanentemente nelle pagine del PDF. Il documento è ora di sola lettura, perfetto per la conservazione digitale, PEC e stampe conformi senza alterazioni."
                : "All form fields (text boxes, checkboxes, radio buttons) have been permanently embedded into the PDF content stream. The file is now read-only, ideal for archiving, legal submissions, and non-tamperable printing."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
