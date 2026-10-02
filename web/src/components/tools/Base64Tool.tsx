"use client";

import React, { useState } from "react";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { Binary, Copy, Check, Download, ArrowRightLeft, FileUp, Type } from "lucide-react";

export const Base64Tool: React.FC = () => {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [base64Output, setBase64Output] = useState("");
  const [inputBase64, setInputBase64] = useState("");
  const [fileName, setFileName] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = () => {
      setBase64Output(reader.result as string);
    };
    reader.onerror = () => {
      setError("Errore durante la lettura del file.");
    };
    reader.readAsDataURL(file);
  };

  const copyToClipboard = () => {
    if (!base64Output) return;
    navigator.clipboard.writeText(base64Output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const decodeAndDownload = () => {
    if (!inputBase64.trim()) {
      setError("Incolla prima una stringa Base64 valida.");
      return;
    }

    try {
      setError(null);
      let base64Data = inputBase64.trim();
      let mimeType = "application/octet-stream";

      if (base64Data.startsWith("data:")) {
        const parts = base64Data.split(",");
        const mimeMatch = parts[0].match(/:(.*?);/);
        if (mimeMatch) mimeType = mimeMatch[1];
        base64Data = parts[1];
      }

      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: mimeType });
      const url = URL.createObjectURL(blob);

      const ext = mimeType.split("/")[1]?.replace("+xml", "") || "bin";
      const a = document.createElement("a");
      a.href = url;
      a.download = `file_decodificato.${ext}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch {
      setError("La stringa Base64 inserita non è valida o è corrotta.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex border-b border-zinc-100 pb-4 dark:border-zinc-800">
          <div className="flex gap-2">
            <button
              onClick={() => { setMode("encode"); setError(null); }}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold transition ${
                mode === "encode"
                  ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              <FileUp className="h-3.5 w-3.5" />
              <span>File &rarr; Base64 Data URI</span>
            </button>
            <button
              onClick={() => { setMode("decode"); setError(null); }}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold transition ${
                mode === "decode"
                  ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              <Binary className="h-3.5 w-3.5" />
              <span>Base64 &rarr; Scarica File</span>
            </button>
          </div>
        </div>

        {mode === "encode" ? (
          <div className="mt-5 space-y-4">
            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Seleziona qualsiasi file o immagine da convertire in Base64:
              </label>
              <input
                type="file"
                onChange={handleFileUpload}
                className="mt-2 block w-full text-xs text-zinc-500 file:mr-3 file:rounded-xl file:border-0 file:bg-indigo-600 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-indigo-700"
              />
            </div>

            {base64Output && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Stringa Base64 Generata ({base64Output.length.toLocaleString()} caratteri):
                  </span>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copied ? "Copiato!" : "Copia Stringa Base64"}</span>
                  </button>
                </div>

                <textarea
                  rows={8}
                  readOnly
                  value={base64Output}
                  className="w-full font-mono rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                />
              </div>
            )}
          </div>
        ) : (
          <div className="mt-5 space-y-4">
            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Incolla la stringa Base64 (con o senza prefisso &quot;data:...&quot;):
              </label>
              <textarea
                rows={8}
                value={inputBase64}
                onChange={(e) => setInputBase64(e.target.value)}
                placeholder="Incolla qui la stringa Base64..."
                className="mt-2 w-full font-mono rounded-xl border border-zinc-300 bg-zinc-50 p-3 text-xs text-zinc-900 focus:border-indigo-500 focus:bg-white focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={decodeAndDownload}
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 active:scale-95"
              >
                <Download className="h-4 w-4" />
                <span>Decodifica e Scarica File</span>
              </button>
            </div>
          </div>
        )}

        {error && (
          <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700 dark:bg-red-950/40 dark:text-red-300">
            {error}
          </div>
        )}
      </div>

      <AdBanner slot="action-card" />
    </div>
  );
};
