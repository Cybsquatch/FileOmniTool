"use client";

import React, { useState, useMemo } from "react";
import { Copy, Check, Download, Trash2, BookOpen, Clock, FileText, Sparkles, Hash } from "lucide-react";
import { AdBanner } from "../ads/AdBanner";

export const WordCounterTool: React.FC = () => {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const stats = useMemo(() => {
    const trimmed = text.trim();

    // Parole
    const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;

    // Caratteri con spazi
    const characters = text.length;

    // Caratteri senza spazi
    const charactersNoSpaces = text.replace(/\s+/g, "").length;

    // Frasi (delimitate da . ! ?)
    const sentences = trimmed
      ? trimmed.split(/[.!?]+/).filter((s) => s.trim().length > 0).length
      : 0;

    // Paragrafi
    const paragraphs = trimmed
      ? trimmed.split(/\n+/).filter((p) => p.trim().length > 0).length
      : 0;

    // Tempo di lettura stimato (~200 parole al minuto)
    const readingTimeMinutes = Math.ceil(words / 200);

    // Tempo di pronuncia stimato (~130 parole al minuto)
    const speakingTimeMinutes = Math.ceil(words / 130);

    // Keyword density top 5
    const wordList = trimmed
      ? trimmed
          .toLowerCase()
          .replace(/[.,/#!$%^&*;:{}=\-_`~()?"'’]/g, "")
          .split(/\s+/)
          .filter((w) => w.length > 2)
      : [];

    const freqMap: Record<string, number> = {};
    for (const w of wordList) {
      freqMap[w] = (freqMap[w] || 0) + 1;
    }

    const topKeywords = Object.entries(freqMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([word, count]) => ({
        word,
        count,
        percent: words > 0 ? ((count / words) * 100).toFixed(1) : "0",
      }));

    return {
      words,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs,
      readingTimeMinutes: words > 0 ? readingTimeMinutes : 0,
      speakingTimeMinutes: words > 0 ? speakingTimeMinutes : 0,
      topKeywords,
    };
  }, [text]);

  const copyToClipboard = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadTxt = () => {
    if (!text) return;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "conteggio_testo.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const transformCase = (type: "upper" | "lower" | "title") => {
    if (!text) return;
    if (type === "upper") {
      setText(text.toUpperCase());
    } else if (type === "lower") {
      setText(text.toLowerCase());
    } else if (type === "title") {
      setText(
        text.replace(
          /\w\S*/g,
          (w) => w.charAt(0).toUpperCase() + w.substring(1).toLowerCase()
        )
      );
    }
  };

  const loadSample = () => {
    setText(
      "FileOmniTool è una suite avanzata di strumenti per file che elabora ogni documento al 100% all'interno del browser. Grazie alle tecnologie WebAssembly e WebCrypto, i tuoi dati non vengono mai caricati su alcun server esterno. Privacy totale, velocità istantanea e gratuità garantita."
    );
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Stat Card Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Parole</span>
          <p className="mt-1 text-2xl font-black text-emerald-600 dark:text-emerald-400">
            {stats.words.toLocaleString()}
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Caratteri (con spazi)</span>
          <p className="mt-1 text-2xl font-black text-zinc-800 dark:text-zinc-100">
            {stats.characters.toLocaleString()}
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Senza Spazi</span>
          <p className="mt-1 text-2xl font-black text-zinc-800 dark:text-zinc-100">
            {stats.charactersNoSpaces.toLocaleString()}
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Frasi / Paragrafi</span>
          <p className="mt-1 text-2xl font-black text-zinc-800 dark:text-zinc-100">
            {stats.sentences} / {stats.paragraphs}
          </p>
        </div>
      </div>

      {/* Text Area Card */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Digita o incolla il tuo testo
            </span>
            <button
              onClick={loadSample}
              className="text-[11px] font-medium text-emerald-600 hover:underline dark:text-emerald-400"
            >
              (Carica esempio)
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => transformCase("upper")}
              disabled={!text}
              className="rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-medium text-zinc-600 hover:bg-zinc-50 disabled:opacity-40 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              title="Converti in TUTTO MAIUSCOLO"
            >
              UPPER
            </button>
            <button
              onClick={() => transformCase("lower")}
              disabled={!text}
              className="rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-medium text-zinc-600 hover:bg-zinc-50 disabled:opacity-40 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              title="Converti in tutto minuscolo"
            >
              lower
            </button>
            <button
              onClick={() => transformCase("title")}
              disabled={!text}
              className="rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-medium text-zinc-600 hover:bg-zinc-50 disabled:opacity-40 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              title="Iniziali Maiuscole"
            >
              Title Case
            </button>
            <button
              onClick={() => setText("")}
              disabled={!text}
              className="flex items-center gap-1 rounded-lg border border-rose-200 px-2 py-1 text-[11px] font-medium text-rose-600 hover:bg-rose-50 disabled:opacity-40 dark:border-rose-900/50 dark:text-rose-400 dark:hover:bg-rose-950/30"
              title="Cancella tutto"
            >
              <Trash2 className="h-3 w-3" />
              <span>Pulisci</span>
            </button>
          </div>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Inizia a scrivere o incolla qui qualsiasi testo per calcolare istantaneamente parole, battute, tempi di lettura e densità keyword..."
          rows={10}
          className="w-full resize-y rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 font-mono text-sm leading-relaxed text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-100"
        />

        {/* Footer actions & reading estimates */}
        <div className="mt-4 flex flex-col gap-4 border-t border-zinc-100 pt-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800">
          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="flex items-center gap-1">
              <BookOpen className="h-3.5 w-3.5 text-emerald-500" />
              Tempo di lettura: <strong className="text-zinc-700 dark:text-zinc-200">~{stats.readingTimeMinutes} min</strong>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-blue-500" />
              Tempo di pronuncia: <strong className="text-zinc-700 dark:text-zinc-200">~{stats.speakingTimeMinutes} min</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyToClipboard}
              disabled={!text}
              className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Copiato!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copia Testo</span>
                </>
              )}
            </button>
            <button
              onClick={downloadTxt}
              disabled={!text}
              className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-emerald-500 disabled:opacity-40"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Scarica .TXT</span>
            </button>
          </div>
        </div>
      </div>

      {/* Keyword Density Table */}
      {stats.topKeywords.length > 0 && (
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
            <Hash className="h-3.5 w-3.5 text-emerald-500" />
            <span>Densità Parole Chiave Principali (SEO)</span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
            {stats.topKeywords.map((k) => (
              <div
                key={k.word}
                className="flex flex-col rounded-xl border border-zinc-100 bg-zinc-50 p-2.5 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <span className="truncate text-xs font-bold text-zinc-800 dark:text-zinc-200">
                  {k.word}
                </span>
                <span className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                  {k.count} volte ({k.percent}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <AdBanner slot="action-card" />
    </div>
  );
};
