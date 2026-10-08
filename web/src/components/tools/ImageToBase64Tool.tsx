"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { formatBytes } from "@/lib/security-guard";
import { Code, Copy, Check, RefreshCw } from "lucide-react";

export const ImageToBase64Tool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [dataUri, setDataUri] = useState<string | null>(null);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleFilesSelected = (files: File[]) => {
    if (files.length === 0) return;
    const selected = files[0];
    setFile(selected);

    const reader = new FileReader();
    reader.onload = () => {
      setDataUri(reader.result as string);
    };
    reader.readAsDataURL(selected);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const resetAll = () => {
    setFile(null);
    setDataUri(null);
    setCopiedType(null);
  };

  const rawBase64 = dataUri ? dataUri.split(",")[1] || "" : "";
  const htmlTag = dataUri ? `<img src="${dataUri}" alt="${file?.name || "image"}" />` : "";
  const cssBackground = dataUri ? `background-image: url("${dataUri}");` : "";

  return (
    <div className="space-y-6">
      {!dataUri ? (
        <Dropzone
          onFilesSelected={handleFilesSelected}
          accept="image/*"
          helperText="Trascina qui l'immagine da convertire in codice Base64 Data URI"
        />
      ) : (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800">
            <div className="flex items-center gap-4">
              {/* Thumbnail */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={dataUri}
                alt="Anteprima"
                className="h-14 w-14 rounded-lg border border-zinc-200 object-cover dark:border-zinc-700"
              />
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">{file?.name}</h3>
                <p className="text-xs text-zinc-500">
                  Originale: {file ? formatBytes(file.size) : ""} • Base64: {formatBytes(dataUri.length)} (
                  {dataUri.length.toLocaleString()} caratteri)
                </p>
              </div>
            </div>

            <button
              onClick={resetAll}
              className="flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Converti un'Altra Immagine</span>
            </button>
          </div>

          <div className="mt-6 space-y-5">
            {/* 1. Data URI */}
            <div>
              <div className="flex items-center justify-between pb-1.5">
                <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                  Data URI Completo (data:image/...;base64,...)
                </span>
                <button
                  onClick={() => copyToClipboard(dataUri, "dataUri")}
                  className="flex items-center gap-1 rounded bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                >
                  {copiedType === "dataUri" ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                  <span>{copiedType === "dataUri" ? "Copiato!" : "Copia Data URI"}</span>
                </button>
              </div>
              <textarea
                readOnly
                value={dataUri}
                rows={3}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3 font-mono text-xs text-zinc-700 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
              />
            </div>

            {/* 2. HTML Tag */}
            <div>
              <div className="flex items-center justify-between pb-1.5">
                <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">Tag HTML &lt;img&gt;</span>
                <button
                  onClick={() => copyToClipboard(htmlTag, "html")}
                  className="flex items-center gap-1 rounded bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                >
                  {copiedType === "html" ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                  <span>{copiedType === "html" ? "Copiato!" : "Copia HTML"}</span>
                </button>
              </div>
              <input
                readOnly
                type="text"
                value={htmlTag}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3 font-mono text-xs text-zinc-700 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
              />
            </div>

            {/* 3. CSS Background */}
            <div>
              <div className="flex items-center justify-between pb-1.5">
                <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">CSS background-image</span>
                <button
                  onClick={() => copyToClipboard(cssBackground, "css")}
                  className="flex items-center gap-1 rounded bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                >
                  {copiedType === "css" ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                  <span>{copiedType === "css" ? "Copiato!" : "Copia CSS"}</span>
                </button>
              </div>
              <input
                readOnly
                type="text"
                value={cssBackground}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3 font-mono text-xs text-zinc-700 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
              />
            </div>

            {/* 4. Raw Base64 String */}
            <div>
              <div className="flex items-center justify-between pb-1.5">
                <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">Stringa Base64 Pura (Senza prefisso)</span>
                <button
                  onClick={() => copyToClipboard(rawBase64, "raw")}
                  className="flex items-center gap-1 rounded bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                >
                  {copiedType === "raw" ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                  <span>{copiedType === "raw" ? "Copiato!" : "Copia Base64 Puro"}</span>
                </button>
              </div>
              <textarea
                readOnly
                value={rawBase64}
                rows={3}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3 font-mono text-xs text-zinc-700 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
