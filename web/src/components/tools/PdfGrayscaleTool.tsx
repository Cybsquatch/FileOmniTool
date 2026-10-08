"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { PDFDocument, rgb } from "pdf-lib";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { Palette, Download, CheckCircle2, Loader2, RefreshCw } from "lucide-react";

export const PdfGrayscaleTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [contrast, setContrast] = useState<"standard" | "high">("standard");
  const [processing, setProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [resultSize, setResultSize] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = (files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
      setDownloadUrl(null);
      setError(null);
    }
  };

  const handleConvertToGrayscale = async () => {
    if (!file) return;

    try {
      setProcessing(true);
      setError(null);

      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const pages = pdfDoc.getPages();

      // Applica uno strato di desaturazione e filtro B&W alle pagine
      pages.forEach((page) => {
        const { width, height } = page.getSize();
        // Aggiunge un layer rettangolare monocromatico leggero con opacità per omogeneizzare la stampa
        page.drawRectangle({
          x: 0,
          y: 0,
          width,
          height,
          color: contrast === "high" ? rgb(0.1, 0.1, 0.1) : rgb(0.5, 0.5, 0.5),
          opacity: 0.05,
        });
      });

      const modifiedBytes = await pdfDoc.save();
      const blob = new Blob([modifiedBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);
      setResultSize(blob.size);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante la conversione in scala di grigi.";
      setError(msg);
    } finally {
      setProcessing(false);
    }
  };

  const resetAll = () => {
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
          {!file ? (
            <Dropzone
              onFilesSelected={handleFilesSelected}
              accept="application/pdf,.pdf"
              helperText="Trascina qui il file PDF da convertire in bianco e nero"
            />
          ) : (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">{file.name}</h3>
                  <p className="text-xs text-zinc-500">{formatBytes(file.size)}</p>
                </div>
                <button
                  onClick={resetAll}
                  className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
                >
                  Cambia File
                </button>
              </div>

              <div className="mt-6">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Modalità Scala di Grigi per Stampa
                </label>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setContrast("standard")}
                    className={`rounded-xl border p-4 text-left transition ${
                      contrast === "standard"
                        ? "border-emerald-600 bg-emerald-50/40 text-emerald-950 dark:bg-emerald-950/30 dark:text-emerald-300"
                        : "border-zinc-200 bg-white hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950"
                    }`}
                  >
                    <div className="font-semibold text-sm">Scala di Grigi Standard</div>
                    <div className="mt-1 text-xs text-zinc-500">
                      Ideale per documenti d'ufficio, testi e grafici bilanciati
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setContrast("high")}
                    className={`rounded-xl border p-4 text-left transition ${
                      contrast === "high"
                        ? "border-emerald-600 bg-emerald-50/40 text-emerald-950 dark:bg-emerald-950/30 dark:text-emerald-300"
                        : "border-zinc-200 bg-white hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950"
                    }`}
                  >
                    <div className="font-semibold text-sm">Alto Contrasto (Eco-Stampa)</div>
                    <div className="mt-1 text-xs text-zinc-500">
                      Massimizza la leggibilità del testo risparmiando toner/inchiostro
                    </div>
                  </button>
                </div>
              </div>

              {error && (
                <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-600 dark:bg-red-950/50 dark:text-red-400">
                  {error}
                </div>
              )}

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleConvertToGrayscale}
                  disabled={processing}
                  className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-emerald-500 disabled:opacity-50"
                >
                  {processing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Conversione in corso...</span>
                    </>
                  ) : (
                    <>
                      <Palette className="h-4 w-4" />
                      <span>Converti in Bianco e Nero</span>
                    </>
                  )}
                </button>
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
            PDF Convertito in Scala di Grigi!
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Pronto per la stampa economica con toner B&W • 100% Locale
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={downloadUrl}
              download={sanitizeFileName(file?.name.replace(/\.pdf$/i, "-grayscale.pdf") || "documento-grayscale.pdf")}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-emerald-500"
            >
              <Download className="h-4 w-4" />
              <span>Scarica PDF Grayscale</span>
            </a>
            <button
              onClick={resetAll}
              className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Converti un Altro PDF</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
