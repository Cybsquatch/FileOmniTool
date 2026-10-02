"use client";

import React, { useState } from "react";
import { AdBanner } from "../ads/AdBanner";
import { ListFilter, Copy, Check, Download, Trash2, ArrowDownAZ, ArrowUpAZ, Sparkles } from "lucide-react";

const SAMPLE_LIST = `mario.rossi@email.com
luigi.verdi@email.com
anna.bianchi@email.com
mario.rossi@email.com
giulia.neri@email.com
luigi.verdi@email.com
francesca.ferri@email.com`;

export const ListCleanerTool: React.FC = () => {
  const [inputList, setInputList] = useState(SAMPLE_LIST);
  const [copied, setCopied] = useState(false);
  const [removedCount, setRemovedCount] = useState<number | null>(null);

  const getLines = () => inputList.split(/\r?\n/);

  // Rimuovi duplicati preservando l'ordine
  const removeDuplicates = () => {
    const lines = getLines().map((l) => l.trim()).filter(Boolean);
    const seen = new Set<string>();
    const unique: string[] = [];

    for (const line of lines) {
      if (!seen.has(line.toLowerCase())) {
        seen.add(line.toLowerCase());
        unique.push(line);
      }
    }

    const removed = lines.length - unique.length;
    setRemovedCount(removed);
    setInputList(unique.join("\n"));
  };

  // Ordina A-Z
  const sortAscending = () => {
    const lines = getLines().filter(Boolean);
    lines.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
    setInputList(lines.join("\n"));
  };

  // Ordina Z-A
  const sortDescending = () => {
    const lines = getLines().filter(Boolean);
    lines.sort((a, b) => b.localeCompare(a, undefined, { numeric: true, sensitivity: "base" }));
    setInputList(lines.join("\n"));
  };

  // Rimuovi spazi e righe vuote
  const cleanEmptyLines = () => {
    const lines = getLines()
      .map((l) => l.trim())
      .filter((l) => l.length > 0);
    setInputList(lines.join("\n"));
  };

  // Inverti ordine
  const reverseList = () => {
    const lines = getLines();
    lines.reverse();
    setInputList(lines.join("\n"));
  };

  // Formatta come lista SQL / virgole ('item1', 'item2')
  const wrapSqlQuotes = () => {
    const lines = getLines().map((l) => l.trim()).filter(Boolean);
    const wrapped = lines.map((l) => `'${l.replace(/'/g, "''")}'`).join(",\n");
    setInputList(wrapped);
  };

  const copyList = () => {
    navigator.clipboard.writeText(inputList);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadList = () => {
    const blob = new Blob([inputList], { type: "text/plain;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "lista_pulita.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const currentLines = getLines().filter(Boolean).length;

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
              <ListFilter className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              {currentLines} elementi nell&apos;elenco
            </span>
            {removedCount !== null && (
              <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                {removedCount} duplicati rimossi!
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => { setInputList(""); setRemovedCount(null); }}
              className="flex items-center gap-1 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <Trash2 className="h-3.5 w-3.5 text-zinc-400" />
              <span>Svuota</span>
            </button>
            <button
              onClick={copyList}
              className="flex items-center gap-1 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? "Copiato!" : "Copia"}</span>
            </button>
            <button
              onClick={downloadList}
              className="flex items-center gap-1 rounded-xl bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 active:scale-95"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Scarica .TXT</span>
            </button>
          </div>
        </div>

        {/* Input Textarea */}
        <div className="mt-4">
          <textarea
            rows={8}
            value={inputList}
            onChange={(e) => { setInputList(e.target.value); setRemovedCount(null); }}
            placeholder="Incolla qui la lista di email, numeri, URL o parole (una per riga)..."
            className="w-full font-mono text-xs rounded-xl border border-zinc-300 bg-zinc-50 p-3 text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
          />
        </div>

        {/* Action Controls */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={removeDuplicates}
            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 active:scale-95"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Rimuovi Duplicati</span>
          </button>
          <button
            onClick={sortAscending}
            className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          >
            <ArrowDownAZ className="h-3.5 w-3.5 text-emerald-600" />
            <span>Ordina A &rarr; Z</span>
          </button>
          <button
            onClick={sortDescending}
            className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          >
            <ArrowUpAZ className="h-3.5 w-3.5 text-emerald-600" />
            <span>Ordina Z &rarr; A</span>
          </button>
          <button
            onClick={cleanEmptyLines}
            className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          >
            <span>Pulisci Righe Vuote</span>
          </button>
          <button
            onClick={reverseList}
            className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          >
            <span>Inverti Ordine</span>
          </button>
          <button
            onClick={wrapSqlQuotes}
            className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          >
            <span>Formato SQL (&apos;valore&apos;,)</span>
          </button>
        </div>
      </div>

      <AdBanner slot="action-card" />
    </div>
  );
};
