"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { Copy, Download, ArrowRightLeft, CheckCircle2, FileText, Binary } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { formatBytes } from "@/lib/utils";

export const FileToBase64Tool: React.FC = () => {
  const { language } = useLanguage();
  const [mode, setMode] = useState<"file-to-b64" | "b64-to-file">("file-to-b64");
  const [file, setFile] = useState<File | null>(null);
  const [base64Text, setBase64Text] = useState("");
  const [dataUri, setDataUri] = useState("");
  const [inputB64, setInputB64] = useState("");
  const [targetFileName, setTargetFileName] = useState("restored-file.bin");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = async (files: File[]) => {
    const selected = files[0];
    if (!selected) return;

    setError(null);
    setFile(selected);

    const reader = new FileReader();
    reader.onload = () => {
      const resultStr = reader.result as string;
      setDataUri(resultStr);
      const raw = resultStr.split(",")[1] || "";
      setBase64Text(raw);
    };
    reader.onerror = () => setError("Errore nella lettura del file.");
    reader.readAsDataURL(selected);
  };

  const handleDecodeBase64 = () => {
    setError(null);
    try {
      let raw = inputB64.trim();
      let mime = "application/octet-stream";

      // If data URI: data:application/pdf;base64,....
      if (raw.startsWith("data:")) {
        const parts = raw.split(",");
        const mimeMatch = parts[0].match(/data:(.*?);base64/);
        if (mimeMatch) mime = mimeMatch[1];
        raw = parts[1] || "";
      }

      const byteCharacters = atob(raw);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: mime });

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = targetFileName || "decoded-file";
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      setError(language === "it" ? "Stringa Base64 non valida o corrotta." : "Invalid Base64 string.");
    }
  };

  const handleCopy = async () => {
    if (!base64Text) return;
    await navigator.clipboard.writeText(base64Text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    if (!base64Text || !file) return;
    const blob = new Blob([base64Text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${file.name}.base64.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Mode toggle */}
      <div className="flex rounded-2xl border border-zinc-200 bg-white p-1.5 dark:border-zinc-800 dark:bg-zinc-900">
        <button
          onClick={() => setMode("file-to-b64")}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold transition ${
            mode === "file-to-b64"
              ? "bg-emerald-600 text-white shadow-sm"
              : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          }`}
        >
          <FileText className="h-4 w-4" />
          <span>{language === "it" ? "File Binario → Testo Base64" : "File to Base64"}</span>
        </button>
        <button
          onClick={() => setMode("b64-to-file")}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold transition ${
            mode === "b64-to-file"
              ? "bg-emerald-600 text-white shadow-sm"
              : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          }`}
        >
          <Binary className="h-4 w-4" />
          <span>{language === "it" ? "Testo Base64 → File Binario" : "Base64 to File"}</span>
        </button>
      </div>

      {mode === "file-to-b64" ? (
        <div className="space-y-6">
          <Dropzone
            onFilesSelected={handleFilesSelected}
            accept="*/*"
            helperText={language === "it" ? "Trascina qui qualsiasi file (PDF, DOCX, ZIP, MP3, ecc.) da convertire in Base64" : "Drag & drop any file to convert to Base64"}
          />

          {file && base64Text && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">{file.name}</h3>
                  <p className="text-xs text-zinc-500">
                    {formatBytes(file.size)} • {base64Text.length.toLocaleString()} {language === "it" ? "caratteri Base64" : "characters"}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                  >
                    {copied ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copied ? (language === "it" ? "Copiato!" : "Copied!") : (language === "it" ? "Copia Base64" : "Copy")}</span>
                  </button>
                  <button
                    onClick={handleDownloadTxt}
                    className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>{language === "it" ? "Scarica .TXT" : "Download .TXT"}</span>
                  </button>
                </div>
              </div>

              <textarea
                readOnly
                value={base64Text.slice(0, 10000) + (base64Text.length > 10000 ? "\n\n... [testo troncato per prestazioni dell'anteprima, scarica il .TXT per il testo completo]" : "")}
                rows={8}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-[11px] leading-relaxed text-zinc-800 shadow-inner outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                {language === "it" ? "Nome del file da ricostruire:" : "Output File Name:"}
              </label>
              <input
                type="text"
                value={targetFileName}
                onChange={(e) => setTargetFileName(e.target.value)}
                placeholder="es. documento.pdf o archivio.zip"
                className="mt-1 block rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-800 outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              />
            </div>

            <button
              onClick={handleDecodeBase64}
              disabled={!inputB64.trim()}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700 disabled:opacity-50"
            >
              <Download className="h-4 w-4" />
              <span>{language === "it" ? "Decodifica e Scarica File" : "Decode & Download File"}</span>
            </button>
          </div>

          <textarea
            value={inputB64}
            onChange={(e) => setInputB64(e.target.value)}
            placeholder={language === "it" ? "Incolla qui la stringa Base64 grezza o il Data URI..." : "Paste raw Base64 string or Data URI here..."}
            rows={8}
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-800 shadow-inner outline-none focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
          />

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
              {error}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
