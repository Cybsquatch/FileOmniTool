"use client";

import React, { useState } from "react";
import { Link2, Copy, Check } from "lucide-react";

export const SlugGeneratorTool: React.FC = () => {
  const [inputTitle, setInputTitle] = useState<string>(
    "Come Unire Più File PDF Gratis nel 2026 Senza Installare Programmi!"
  );
  const [separator, setSeparator] = useState<"-" | "_">("-");
  const [lowercase, setLowercase] = useState<boolean>(true);
  const [removeStopwords, setRemoveStopwords] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);

  const generateSlug = (): string => {
    if (!inputTitle.trim()) return "";

    // Normalize accents / diacritics
    let str = inputTitle
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // Remove accents: è -> e

    if (lowercase) {
      str = str.toLowerCase();
    }

    // Split words
    let words = str.split(/[^a-zA-Z0-9]+/g).filter(Boolean);

    if (removeStopwords) {
      const stopwords = new Set(["il", "lo", "la", "i", "gli", "le", "un", "uno", "una", "di", "a", "da", "in", "con", "su", "per", "e", "ed", "o"]);
      words = words.filter((w) => !stopwords.has(w.toLowerCase()));
    }

    return words.join(separator);
  };

  const slug = generateSlug();

  const handleCopy = () => {
    if (!slug) return;
    navigator.clipboard.writeText(slug);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center gap-2 border-b border-zinc-100 pb-4 dark:border-zinc-800">
          <Link2 className="h-5 w-5 text-emerald-600" />
          <h3 className="font-semibold text-zinc-900 dark:text-white">Generatore Slug URL SEO</h3>
        </div>

        {/* Input */}
        <div className="mt-6">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Titolo dell'Articolo o Pagina Web
          </label>
          <input
            type="text"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            placeholder="Es. I 10 Migliori Strumenti per Modificare File Online..."
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3.5 text-sm font-medium text-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
          />
        </div>

        {/* Options */}
        <div className="mt-6 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-zinc-500">Separatore:</span>
            <select
              value={separator}
              onChange={(e) => setSeparator(e.target.value as "-" | "_")}
              className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
            >
              <option value="-">Trattino (-) [SEO Standard]</option>
              <option value="_">Underscore (_) [snake_case]</option>
            </select>
          </div>

          <label className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 cursor-pointer">
            <input
              type="checkbox"
              checked={lowercase}
              onChange={(e) => setLowercase(e.target.checked)}
              className="rounded text-emerald-600"
            />
            <span>Forza Minuscolo (lowercase)</span>
          </label>

          <label className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 cursor-pointer">
            <input
              type="checkbox"
              checked={removeStopwords}
              onChange={(e) => setRemoveStopwords(e.target.checked)}
              className="rounded text-emerald-600"
            />
            <span>Rimuovi Articoli e Preposizioni (Slug Compatto)</span>
          </label>
        </div>

        {/* Output */}
        <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/20">
          <div className="flex items-center justify-between pb-2">
            <span className="text-xs font-bold text-emerald-950 dark:text-emerald-300">
              Slug Ottimizzato per Google:
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-emerald-500"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? "Copiato!" : "Copia Slug"}</span>
            </button>
          </div>

          <div className="rounded-lg border border-emerald-300/40 bg-white p-3 font-mono text-sm font-bold text-emerald-800 dark:border-emerald-900 dark:bg-zinc-900 dark:text-emerald-400 select-all">
            {slug || "lo-slug-apparira-qui"}
          </div>

          <p className="mt-2 text-[11px] text-zinc-500">
            Esempio URL finale: <span className="font-mono">https://www.tuosito.com/articoli/{slug || "..."}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
