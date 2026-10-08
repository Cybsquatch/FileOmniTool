"use client";

import React, { useState } from "react";
import { convertTextToPdf } from "@/lib/client-engines/pdf-engine";
import { formatBytes } from "@/lib/security-guard";
import { FileText, Download, CheckCircle2, Loader2, RefreshCw } from "lucide-react";

export const TextToPdfTool: React.FC = () => {
  const [title, setTitle] = useState("Documento di Testo");
  const [content, setContent] = useState(
    "Questo documento è stato convertito istantaneamente in formato PDF direttamente dal browser.\n\nNessun dato viene inviato a server cloud. Puoi incollare appunti, elenchi, contratti o testi di qualsiasi lunghezza: il nostro motore impagina automaticamente il contenuto su fogli standard A4 con margini tipografici ottimali."
  );
  const [fontSize, setFontSize] = useState<number>(11);
  const [processing, setProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [resultSize, setResultSize] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGeneratePdf = async () => {
    if (!content.trim()) {
      setError("Inserisci del testo da convertire.");
      return;
    }

    try {
      setProcessing(true);
      setError(null);

      const pdfBytes = await convertTextToPdf(content, {
        title: title.trim() || undefined,
        fontSize,
      });

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
    setDownloadUrl(null);
    setResultSize(null);
    setError(null);
  };

  return (
    <div className="space-y-6">
      {!downloadUrl ? (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-2 border-b border-zinc-100 pb-4 dark:border-zinc-800">
            <FileText className="h-5 w-5 text-emerald-600" />
            <h3 className="font-semibold text-zinc-900 dark:text-white">Converti Testo in PDF A4</h3>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Titolo Intestazione (Opzionale)
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Es. Note di Riunione"
                className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Dimensione Carattere (pt)
              </label>
              <select
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
              >
                <option value={9}>9 pt (Compatto)</option>
                <option value={10}>10 pt (Standard piccolo)</option>
                <option value={11}>11 pt (Standard consigliato)</option>
                <option value={12}>12 pt (Grande)</option>
                <option value={14}>14 pt (Molto leggibile)</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Contenuto Testuale
            </label>
            <textarea
              rows={14}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Scrivi o incolla qui il testo da convertire in PDF..."
              className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-sans text-sm leading-relaxed text-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
            />
          </div>

          {error && (
            <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-600 dark:bg-red-950/50 dark:text-red-400">
              {error}
            </div>
          )}

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleGeneratePdf}
              disabled={processing}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-emerald-500 disabled:opacity-50"
            >
              {processing ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Creazione PDF...</span>
                </>
              ) : (
                <>
                  <FileText className="h-4 w-4" />
                  <span>Genera Documento PDF</span>
                </>
              )}
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-8 text-center dark:border-emerald-900/50 dark:bg-emerald-950/20">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-xl font-bold text-zinc-900 dark:text-white">
            PDF Creato con Successo!
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Dimensione finale: {resultSize ? formatBytes(resultSize) : ""} • Formato standard A4 pronto per la stampa
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={downloadUrl}
              download={`${title.trim() ? title.toLowerCase().replace(/[^a-z0-9]+/g, "-") : "documento"}.pdf`}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-emerald-500"
            >
              <Download className="h-4 w-4" />
              <span>Scarica Documento PDF</span>
            </a>
            <button
              onClick={resetAll}
              className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Crea un Altro PDF</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
