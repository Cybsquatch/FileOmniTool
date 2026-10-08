"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { PDFDocument } from "pdf-lib";
import { organizePdfPages } from "@/lib/client-engines/pdf-engine";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { ArrowUp, ArrowDown, Trash2, Copy, Download, CheckCircle2, Loader2, RefreshCw, FileText } from "lucide-react";

interface PageItem {
  id: string;
  originalIndex: number; // 0-based
  label: number; // 1-based display
}

export const PdfOrganizeTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState<PageItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [resultSize, setResultSize] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = async (files: File[]) => {
    if (files.length === 0) return;
    const selected = files[0];
    setFile(selected);
    setError(null);
    setLoading(true);

    try {
      const arrayBuffer = await selected.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const count = pdfDoc.getPageCount();

      const items: PageItem[] = Array.from({ length: count }, (_, i) => ({
        id: `page-${i}-${Date.now()}`,
        originalIndex: i,
        label: i + 1,
      }));

      setPages(items);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante la lettura delle pagine PDF.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const movePage = (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= pages.length) return;

    const updated = [...pages];
    const temp = updated[index];
    updated[index] = updated[targetIndex];
    updated[targetIndex] = temp;
    setPages(updated);
  };

  const removePage = (index: number) => {
    if (pages.length <= 1) {
      setError("Il documento deve contenere almeno una pagina.");
      return;
    }
    const updated = pages.filter((_, i) => i !== index);
    setPages(updated);
  };

  const duplicatePage = (index: number) => {
    const item = pages[index];
    const newItem: PageItem = {
      id: `page-copy-${Date.now()}-${Math.random()}`,
      originalIndex: item.originalIndex,
      label: item.label,
    };
    const updated = [...pages];
    updated.splice(index + 1, 0, newItem);
    setPages(updated);
  };

  const handleSave = async () => {
    if (!file || pages.length === 0) return;

    try {
      setProcessing(true);
      setError(null);

      const indices = pages.map((p) => p.originalIndex);
      const modifiedBytes = await organizePdfPages(file, indices);
      const blob = new Blob([modifiedBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);
      setResultSize(blob.size);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante il riordino del PDF.";
      setError(msg);
    } finally {
      setProcessing(false);
    }
  };

  const resetAll = () => {
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setFile(null);
    setPages([]);
    setDownloadUrl(null);
    setResultSize(null);
    setError(null);
  };

  return (
    <div className="space-y-6">
      {!downloadUrl ? (
        <>
          {!file ? (
            <Dropzone
              onFilesSelected={handleFilesSelected}
              accept="application/pdf,.pdf"
              helperText="Trascina qui il file PDF per riordinare, eliminare o duplicare le pagine"
            />
          ) : loading ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-12 dark:border-zinc-800 dark:bg-zinc-900">
              <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
              <p className="mt-4 font-semibold text-zinc-900 dark:text-white">Analisi delle pagine in corso...</p>
            </div>
          ) : (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">{file.name}</h3>
                  <p className="text-xs text-zinc-500">
                    {formatBytes(file.size)} • {pages.length} pagine selezionate
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={resetAll}
                    className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
                  >
                    Cambia File
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={processing || pages.length === 0}
                    className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-500 disabled:opacity-50"
                  >
                    {processing ? (
                      <>
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        <span>Generazione...</span>
                      </>
                    ) : (
                      <>
                        <Download className="h-3.5 w-3.5" />
                        <span>Salva Nuovo PDF</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-600 dark:bg-red-950/50 dark:text-red-400">
                  {error}
                </div>
              )}

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {pages.map((page, index) => (
                  <div
                    key={page.id}
                    className="group relative flex flex-col items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 p-3 transition hover:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-950"
                  >
                    <div className="flex h-28 w-full flex-col items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900">
                      <FileText className="h-7 w-7 text-zinc-400" />
                      <span className="mt-1 text-xs font-bold text-zinc-700 dark:text-zinc-300">
                        Pagina {page.label}
                      </span>
                      <span className="text-[10px] text-zinc-400">Posizione #{index + 1}</span>
                    </div>

                    <div className="mt-3 flex w-full items-center justify-between gap-1 pt-1">
                      <button
                        onClick={() => movePage(index, "up")}
                        disabled={index === 0}
                        title="Sposta prima"
                        className="rounded p-1 text-zinc-500 hover:bg-zinc-200 disabled:opacity-30 dark:hover:bg-zinc-800"
                      >
                        <ArrowUp className="h-3.5 w-3.5" />
                      </button>

                      <button
                        onClick={() => movePage(index, "down")}
                        disabled={index === pages.length - 1}
                        title="Sposta dopo"
                        className="rounded p-1 text-zinc-500 hover:bg-zinc-200 disabled:opacity-30 dark:hover:bg-zinc-800"
                      >
                        <ArrowDown className="h-3.5 w-3.5" />
                      </button>

                      <button
                        onClick={() => duplicatePage(index)}
                        title="Duplica pagina"
                        className="rounded p-1 text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                      >
                        <Copy className="h-3.5 w-3.5" />
                      </button>

                      <button
                        onClick={() => removePage(index)}
                        title="Elimina pagina"
                        className="rounded p-1 text-red-500 hover:bg-red-100 dark:hover:bg-red-950/50"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-8 text-center dark:border-emerald-900/50 dark:bg-emerald-950/20">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-xl font-bold text-zinc-900 dark:text-white">
            Pagine Riorganizzate con Successo!
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Nuovo file pronto • {pages.length} pagine incluse • {resultSize ? formatBytes(resultSize) : ""}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={downloadUrl}
              download={sanitizeFileName(file?.name.replace(/\.pdf$/i, "-organizzato.pdf") || "documento.pdf")}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-emerald-500"
            >
              <Download className="h-4 w-4" />
              <span>Scarica Nuovo PDF</span>
            </a>
            <button
              onClick={resetAll}
              className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Riorganizza un Altro PDF</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
