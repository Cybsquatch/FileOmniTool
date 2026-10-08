"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { getPdfMetadata, setPdfMetadata, PdfMetadataInfo } from "@/lib/client-engines/pdf-engine";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { FileEdit, Trash2, Download, CheckCircle2, Loader2, RefreshCw } from "lucide-react";

export const PdfMetadataTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [metadata, setMetadata] = useState<PdfMetadataInfo | null>(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [subject, setSubject] = useState("");
  const [keywords, setKeywords] = useState("");
  const [creator, setCreator] = useState("");
  const [producer, setProducer] = useState("");

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
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
      const meta = await getPdfMetadata(selected);
      setMetadata(meta);
      setTitle(meta.title || "");
      setAuthor(meta.author || "");
      setSubject(meta.subject || "");
      setKeywords(meta.keywords ? meta.keywords.join(", ") : "");
      setCreator(meta.creator || "");
      setProducer(meta.producer || "");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante la lettura dei metadati PDF.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (wipe: boolean = false) => {
    if (!file) return;

    try {
      setSaving(true);
      setError(null);

      const payload = wipe
        ? { title: "", author: "", subject: "", keywords: "", creator: "", producer: "" }
        : { title, author, subject, keywords, creator, producer };

      const modifiedBytes = await setPdfMetadata(file, payload);
      const blob = new Blob([modifiedBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);
      setResultSize(blob.size);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante il salvataggio dei metadati.";
      setError(msg);
    } finally {
      setSaving(false);
    }
  };

  const resetAll = () => {
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setFile(null);
    setMetadata(null);
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
              helperText="Trascina qui il file PDF per visualizzare o modificare i metadati"
            />
          ) : loading ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-12 dark:border-zinc-800 dark:bg-zinc-900">
              <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
              <p className="mt-4 font-semibold text-zinc-900 dark:text-white">Lettura metadati in corso...</p>
            </div>
          ) : (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">{file.name}</h3>
                  <p className="text-xs text-zinc-500">
                    {formatBytes(file.size)} • {metadata?.pageCount} Pagine
                  </p>
                </div>
                <button
                  onClick={resetAll}
                  className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
                >
                  Cambia File
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Titolo Documento
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Es. Bilancio d'Esercizio 2026"
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Autore
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Es. Mario Rossi"
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Oggetto / Argomento
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Es. Report finanziario trimestrale"
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Parole Chiave (Keywords)
                  </label>
                  <input
                    type="text"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    placeholder="Es. finanza, bilancio, 2026"
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Creatore / Applicazione (Creator)
                  </label>
                  <input
                    type="text"
                    value={creator}
                    onChange={(e) => setCreator(e.target.value)}
                    placeholder="Es. FileOmniTool"
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Produttore PDF (Producer)
                  </label>
                  <input
                    type="text"
                    value={producer}
                    onChange={(e) => setProducer(e.target.value)}
                    placeholder="Es. pdf-lib client engine"
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                  />
                </div>
              </div>

              {error && (
                <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-600 dark:bg-red-950/50 dark:text-red-400">
                  {error}
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => handleSave(true)}
                  disabled={saving}
                  className="flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-4 py-2.5 text-xs font-semibold text-rose-700 hover:bg-rose-100 dark:border-rose-900/50 dark:bg-rose-950/30 dark:text-rose-400"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  <span>Rimuovi Tutti i Metadati (Privacy Clean)</span>
                </button>

                <button
                  onClick={() => handleSave(false)}
                  disabled={saving}
                  className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 font-semibold text-white shadow-sm hover:bg-emerald-500 disabled:opacity-50 text-sm"
                >
                  {saving ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Salvataggio...</span>
                    </>
                  ) : (
                    <>
                      <FileEdit className="h-4 w-4" />
                      <span>Aggiorna Metadati PDF</span>
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
            Metadati Aggiornati con Successo!
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Dimensione finale: {resultSize ? formatBytes(resultSize) : ""} • File pulito in memoria
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={downloadUrl}
              download={sanitizeFileName(file?.name.replace(/\.pdf$/i, "-meta.pdf") || "documento.pdf")}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-emerald-500"
            >
              <Download className="h-4 w-4" />
              <span>Scarica PDF Modificato</span>
            </a>
            <button
              onClick={resetAll}
              className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Modifica un Altro PDF</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
