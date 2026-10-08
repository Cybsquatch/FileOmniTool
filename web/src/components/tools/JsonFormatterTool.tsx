"use client";

import React, { useState } from "react";
import { Code, Copy, Check, Download, AlertCircle, UploadCloud, RefreshCw } from "lucide-react";

export const JsonFormatterTool: React.FC = () => {
  const [inputJson, setInputJson] = useState<string>(
    '{"name":"FileOmniTool","features":["100% In-Browser","Zero Cloud Upload","Fast WebAssembly"],"stats":{"tools":60,"privacyScore":100}}'
  );
  const [indent, setIndent] = useState<number | string>(2);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const formatJson = (space: number | string) => {
    if (!inputJson.trim()) {
      setError(null);
      return;
    }
    try {
      const parsed = JSON.parse(inputJson);
      const indentation = space === "tab" ? "\t" : space === 0 ? undefined : Number(space);
      const formatted = JSON.stringify(parsed, null, indentation);
      setInputJson(formatted);
      setError(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Sintassi JSON non valida.");
    }
  };

  const handleBeautify = (spaces: number | string) => {
    setIndent(spaces);
    formatJson(spaces);
  };

  const handleMinify = () => {
    setIndent(0);
    formatJson(0);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(inputJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([inputJson], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dati-formattati.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      setInputJson(text);
      try {
        JSON.parse(text);
        setError(null);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "File JSON con sintassi errata.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-emerald-600" />
            <h3 className="font-semibold text-zinc-900 dark:text-white">JSON Formatter & Beautifier</h3>
          </div>

          <div className="flex items-center gap-2">
            <label className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">
              <UploadCloud className="h-3.5 w-3.5" />
              <span>Carica .JSON</span>
              <input type="file" accept=".json,.txt" onChange={handleFileUpload} className="hidden" />
            </label>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? "Copiato!" : "Copia"}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-500"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Scarica</span>
            </button>
          </div>
        </div>

        {/* Action Bar */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-zinc-500 mr-2">Formattazione:</span>
          <button
            onClick={() => handleBeautify(2)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              indent === 2
                ? "bg-emerald-600 text-white"
                : "border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
            }`}
          >
            2 Spazi
          </button>
          <button
            onClick={() => handleBeautify(4)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              indent === 4
                ? "bg-emerald-600 text-white"
                : "border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
            }`}
          >
            4 Spazi
          </button>
          <button
            onClick={() => handleBeautify("tab")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              indent === "tab"
                ? "bg-emerald-600 text-white"
                : "border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
            }`}
          >
            Tabulazione
          </button>
          <button
            onClick={handleMinify}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              indent === 0
                ? "bg-emerald-600 text-white"
                : "border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
            }`}
          >
            Minifica (1 Riga)
          </button>
        </div>

        {error && (
          <div className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 p-3 text-xs text-red-600 dark:bg-red-950/50 dark:text-red-400">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Editor Textarea */}
        <div className="mt-4">
          <textarea
            rows={18}
            value={inputJson}
            onChange={(e) => {
              setInputJson(e.target.value);
              try {
                if (e.target.value.trim()) JSON.parse(e.target.value);
                setError(null);
              } catch (err: unknown) {
                setError(err instanceof Error ? err.message : "Errore di sintassi.");
              }
            }}
            placeholder="Incolla o digita qui il tuo JSON..."
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
          />
        </div>
      </div>
    </div>
  );
};
