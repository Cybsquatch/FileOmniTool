"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { convertDocx, DocxConversionResult } from "@/lib/client-engines/word-engine";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { FileText, Download, CheckCircle2, Loader2, RefreshCw, Eye, Copy, Check } from "lucide-react";

export const DocxConvertTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<DocxConversionResult | null>(null);
  const [processing, setProcessing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = async (files: File[]) => {
    if (files.length === 0) return;
    const f = files[0];
    setFile(f);
    setError(null);
    setProcessing(true);

    try {
      const data = await convertDocx(f);
      setResult(data);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante la conversione del file DOCX.";
      setError(msg);
      setResult(null);
    } finally {
      setProcessing(false);
    }
  };

  const copyText = () => {
    if (!result) return;
    navigator.clipboard.writeText(result.rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadHtml = () => {
    if (!result) return;
    const fullHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${file?.name || "documento"}</title><style>body{font-family:sans-serif;line-height:1.6;max-width:800px;margin:40px auto;padding:0 20px;}</style></head><body>${result.html}</body></html>`;
    const blob = new Blob([fullHtml], { type: "text/html;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    triggerDownload(url, `${file?.name.replace(/\.docx$/i, "") || "documento"}.html`);
  };

  const downloadTxt = () => {
    if (!result) return;
    const blob = new Blob([result.rawText], { type: "text/plain;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    triggerDownload(url, `${file?.name.replace(/\.docx$/i, "") || "documento"}.txt`);
  };

  const triggerDownload = (url: string, filename: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const resetAll = () => {
    setFile(null);
    setResult(null);
    setError(null);
  };

  return (
    <div className="space-y-6">
      {!result ? (
        <>
          <Dropzone
            accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            multiple={false}
            maxSizeMB={50}
            onFilesSelected={handleFilesSelected}
            helperText="Trascina qui il documento Word (.docx) da convertire o visualizzare"
          />

          {processing && (
            <div className="flex flex-col items-center justify-center py-10">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                Conversione documento Word in corso in memoria...
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
        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-white">
                    {sanitizeFileName(file?.name || "documento.docx")}
                  </h4>
                  <p className="text-xs text-zinc-500">
                    {result.wordCount.toLocaleString()} parole • {result.characterCount.toLocaleString()} caratteri
                  </p>
                </div>
              </div>

              <button onClick={resetAll} className="text-xs text-red-600 hover:underline">
                Converti un altro file
              </button>
            </div>

            {/* Pulsanti Download e Copia */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <button
                onClick={downloadHtml}
                className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-blue-700 active:scale-95"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Scarica Pagina HTML</span>
              </button>

              <button
                onClick={downloadTxt}
                className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              >
                <Download className="h-3.5 w-3.5 text-zinc-500" />
                <span>Scarica Testo (.TXT)</span>
              </button>

              <button
                onClick={copyText}
                className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? "Copiato!" : "Copia Tutto"}</span>
              </button>
            </div>

            {/* Anteprima Documento Word renderizzato */}
            <div className="mt-6">
              <div className="flex items-center gap-1.5 pb-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                <Eye className="h-4 w-4 text-blue-600" />
                <span>Visualizzatore Documento Word (In-Browser Sicuro)</span>
              </div>

              <iframe
                title="Word Document Preview"
                srcDoc={`<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:system-ui,-apple-system,sans-serif;font-size:13px;line-height:1.6;color:#27272a;margin:16px;padding:0;}h1,h2,h3{color:#09090b;margin-top:1em;margin-bottom:0.5em;}table{border-collapse:collapse;width:100%;}td,th{border:1px solid #e4e4e7;padding:6px;}</style></head><body>${result.html}</body></html>`}
                sandbox=""
                className="h-80 w-full rounded-xl border border-zinc-200 bg-white shadow-inner dark:border-zinc-800 dark:bg-zinc-950"
              />
            </div>
          </div>

          <AdBanner slot="action-card" />
        </div>
      )}
    </div>
  );
};
