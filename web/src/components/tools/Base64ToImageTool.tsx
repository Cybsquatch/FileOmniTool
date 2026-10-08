"use client";

import React, { useState } from "react";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { Image as ImageIcon, Download, CheckCircle2, RefreshCw } from "lucide-react";

export const Base64ToImageTool: React.FC = () => {
  const [base64Input, setBase64Input] = useState<string>("");
  const [fileName, setFileName] = useState<string>("immagine-decodificata");
  const [error, setError] = useState<string | null>(null);

  const cleanInput = base64Input.trim();

  // Determine mime & full data URI
  const isDataUri = cleanInput.startsWith("data:image/");
  let mimeType = "image/png";
  let extension = "png";

  if (isDataUri) {
    const match = cleanInput.match(/^data:(image\/[a-zA-Z0-9+.-]+);base64,/);
    if (match) {
      mimeType = match[1];
      if (mimeType.includes("jpeg")) extension = "jpg";
      else if (mimeType.includes("webp")) extension = "webp";
      else if (mimeType.includes("gif")) extension = "gif";
      else if (mimeType.includes("svg")) extension = "svg";
      else extension = "png";
    }
  }

  const effectiveDataUri = isDataUri ? cleanInput : cleanInput ? `data:${mimeType};base64,${cleanInput}` : "";

  const handleDownload = () => {
    if (!effectiveDataUri) return;
    try {
      const a = document.createElement("a");
      a.href = effectiveDataUri;
      a.download = sanitizeFileName(`${fileName}.${extension}`);
      a.click();
    } catch {
      setError("Stringa Base64 non valida o danneggiata.");
    }
  };

  const resetAll = () => {
    setBase64Input("");
    setError(null);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center gap-2 border-b border-zinc-100 pb-4 dark:border-zinc-800">
          <ImageIcon className="h-5 w-5 text-emerald-600" />
          <h3 className="font-semibold text-zinc-900 dark:text-white">Converti Base64 in File Immagine</h3>
        </div>

        {/* Input */}
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Incolla Stringa Base64 o Data URI
            </label>
            {cleanInput && (
              <span className="text-xs text-zinc-400">
                {formatBytes(cleanInput.length)} ({cleanInput.length.toLocaleString()} caratteri)
              </span>
            )}
          </div>
          <textarea
            rows={8}
            value={base64Input}
            onChange={(e) => {
              setBase64Input(e.target.value);
              setError(null);
            }}
            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
          />
        </div>

        {error && (
          <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-600 dark:bg-red-950/50 dark:text-red-400">
            {error}
          </div>
        )}

        {/* Live Preview if valid input */}
        {cleanInput && (
          <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Anteprima Immagine Decodificata ({extension.toUpperCase()})
            </label>
            <div className="mt-3 flex max-h-80 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={effectiveDataUri}
                alt="Anteprima Decodificata"
                onError={() => setError("Stringa Base64 non valida o formato non riconosciuto.")}
                className="max-h-72 max-w-full rounded shadow-sm object-contain"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-zinc-500">Nome file scaricato:</span>
                <input
                  type="text"
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                  className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                />
                <span className="text-xs font-bold text-zinc-400">.{extension}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={resetAll}
                  className="flex items-center gap-1 rounded-lg border border-zinc-200 px-3 py-2 text-xs text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-400"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  <span>Svuota</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 font-semibold text-white shadow-sm hover:bg-emerald-500 text-xs"
                >
                  <Download className="h-4 w-4" />
                  <span>Scarica File Immagine ({extension.toUpperCase()})</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
