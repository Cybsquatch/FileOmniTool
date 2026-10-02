"use client";

import React, { useState } from "react";
import { AdBanner } from "../ads/AdBanner";
import { Type, Copy, Check, Download, Trash2 } from "lucide-react";

export const CaseConverterTool: React.FC = () => {
  const [text, setText] = useState("Il successo di un sito web nasce dalla velocità e dalla privacy.");
  const [copied, setCopied] = useState(false);

  // Conversion functions
  const toUpperCase = () => setText((prev) => prev.toUpperCase());
  const toLowerCase = () => setText((prev) => prev.toLowerCase());
  
  const toTitleCase = () => {
    setText((prev) =>
      prev
        .toLowerCase()
        .split(" ")
        .map((w) => (w.length > 0 ? w[0].toUpperCase() + w.slice(1) : ""))
        .join(" ")
    );
  };

  const toSentenceCase = () => {
    setText((prev) => {
      const lower = prev.toLowerCase();
      return lower.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
    });
  };

  const toCamelCase = () => {
    setText((prev) => {
      return prev
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
        .replace(/^([A-Z])/, (m) => m.toLowerCase());
    });
  };

  const toPascalCase = () => {
    setText((prev) => {
      return prev
        .toLowerCase()
        .replace(/(?:^|[^a-zA-Z0-9]+)(.)/g, (_, chr) => chr.toUpperCase());
    });
  };

  const toSnakeCase = () => {
    setText((prev) =>
      prev
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "")
    );
  };

  const toKebabCase = () => {
    setText((prev) =>
      prev
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
    );
  };

  const toAlternatingCase = () => {
    setText((prev) =>
      prev
        .split("")
        .map((char, index) => (index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
        .join("")
    );
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadText = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "testo_convertito.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  // Stats
  const characters = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const lines = text.length > 0 ? text.split(/\r\n|\r|\n/).length : 0;

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
              <Type className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              {characters} caratteri • {words} parole • {lines} righe
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setText("")}
              className="flex items-center gap-1 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <Trash2 className="h-3.5 w-3.5 text-zinc-400" />
              <span>Svuota</span>
            </button>
            <button
              onClick={copyText}
              className="flex items-center gap-1 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? "Copiato!" : "Copia Testo"}</span>
            </button>
            <button
              onClick={downloadText}
              className="flex items-center gap-1 rounded-xl bg-indigo-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-indigo-700 active:scale-95"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Scarica .TXT</span>
            </button>
          </div>
        </div>

        {/* Input Textarea */}
        <div className="mt-4">
          <textarea
            rows={7}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Scrivi o incolla qui il testo da convertire..."
            className="w-full rounded-xl border border-zinc-300 bg-zinc-50 p-3 text-xs text-zinc-900 focus:border-indigo-500 focus:bg-white focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
          />
        </div>

        {/* Conversion Action Buttons Grid */}
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          <button
            onClick={toUpperCase}
            className="rounded-xl border border-zinc-200 bg-zinc-50 p-2.5 text-xs font-semibold text-zinc-800 hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-750"
          >
            MAIUSCOLO
          </button>
          <button
            onClick={toLowerCase}
            className="rounded-xl border border-zinc-200 bg-zinc-50 p-2.5 text-xs font-semibold text-zinc-800 hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-750"
          >
            minuscolo
          </button>
          <button
            onClick={toTitleCase}
            className="rounded-xl border border-zinc-200 bg-zinc-50 p-2.5 text-xs font-semibold text-zinc-800 hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-750"
          >
            Iniziali Maiuscole (Titolo)
          </button>
          <button
            onClick={toSentenceCase}
            className="rounded-xl border border-zinc-200 bg-zinc-50 p-2.5 text-xs font-semibold text-zinc-800 hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-750"
          >
            Inizio Frase Maiuscola
          </button>
          <button
            onClick={toCamelCase}
            className="rounded-xl border border-zinc-200 bg-zinc-50 p-2.5 text-xs font-mono text-zinc-800 hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-750"
          >
            camelCase
          </button>
          <button
            onClick={toPascalCase}
            className="rounded-xl border border-zinc-200 bg-zinc-50 p-2.5 text-xs font-mono text-zinc-800 hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-750"
          >
            PascalCase
          </button>
          <button
            onClick={toSnakeCase}
            className="rounded-xl border border-zinc-200 bg-zinc-50 p-2.5 text-xs font-mono text-zinc-800 hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-750"
          >
            snake_case
          </button>
          <button
            onClick={toKebabCase}
            className="rounded-xl border border-zinc-200 bg-zinc-50 p-2.5 text-xs font-mono text-zinc-800 hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-750"
          >
            kebab-case
          </button>
          <button
            onClick={toAlternatingCase}
            className="rounded-xl border border-zinc-200 bg-zinc-50 p-2.5 text-xs font-semibold text-zinc-800 hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-750"
          >
            aLtErNaTiNg
          </button>
        </div>
      </div>

      <AdBanner slot="action-card" />
    </div>
  );
};
