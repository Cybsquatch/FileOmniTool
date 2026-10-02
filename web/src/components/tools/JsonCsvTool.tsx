"use client";

import React, { useState } from "react";
import { jsonToCsv, csvToJson } from "@/lib/client-engines/text-engine";
import { AdBanner } from "../ads/AdBanner";
import { Table, Copy, Check, Download, ArrowRightLeft } from "lucide-react";

const SAMPLE_JSON = `[
  { "id": 1, "nome": "Mario Rossi", "ruolo": "Developer", "citta": "Roma" },
  { "id": 2, "nome": "Giulia Bianchi", "ruolo": "Designer", "citta": "Milano" },
  { "id": 3, "nome": "Luca Verdi", "ruolo": "SEO Specialist", "citta": "Torino" }
]`;

export const JsonCsvTool: React.FC = () => {
  const [direction, setDirection] = useState<"json-to-csv" | "csv-to-json">("json-to-csv");
  const [inputVal, setInputVal] = useState(SAMPLE_JSON);
  const [outputVal, setOutputVal] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleConvert = () => {
    try {
      setError(null);
      if (direction === "json-to-csv") {
        const csv = jsonToCsv(inputVal);
        setOutputVal(csv);
      } else {
        const json = csvToJson(inputVal);
        setOutputVal(json);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante la conversione.";
      setError(msg);
      setOutputVal("");
    }
  };

  const handleSwap = () => {
    const newDir = direction === "json-to-csv" ? "csv-to-json" : "json-to-csv";
    setDirection(newDir);
    if (outputVal) {
      setInputVal(outputVal);
      setOutputVal("");
    }
  };

  const copyToClipboard = () => {
    if (!outputVal) return;
    navigator.clipboard.writeText(outputVal);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadResult = () => {
    if (!outputVal) return;
    const isCsv = direction === "json-to-csv";
    const blob = new Blob([outputVal], { type: isCsv ? "text/csv;charset=utf-8;" : "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = isCsv ? "dati_convertiti.csv" : "dati_convertiti.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
              <Table className="h-4 w-4" />
            </span>
            <span className="text-sm font-bold text-zinc-900 dark:text-white">
              {direction === "json-to-csv" ? "Converti JSON in CSV" : "Converti CSV in JSON"}
            </span>
          </div>

          <button
            onClick={handleSwap}
            className="flex items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            <ArrowRightLeft className="h-3.5 w-3.5 text-blue-600" />
            <span>Inverti direzione</span>
          </button>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Input Box */}
          <div>
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Input ({direction === "json-to-csv" ? "Codice JSON" : "Testo CSV"}):
            </label>
            <textarea
              rows={12}
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={direction === "json-to-csv" ? "Incolla il tuo array JSON qui..." : "Incolla il testo CSV..."}
              className="mt-1.5 w-full font-mono rounded-xl border border-zinc-300 bg-zinc-50 p-3 text-xs text-zinc-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
            />
          </div>

          {/* Output Box */}
          <div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Risultato ({direction === "json-to-csv" ? "Tabella CSV" : "Array JSON"}):
              </label>
              {outputVal && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-1 text-xs text-blue-600 hover:underline dark:text-blue-400"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copied ? "Copiato!" : "Copia"}</span>
                  </button>
                  <button
                    onClick={downloadResult}
                    className="flex items-center gap-1 text-xs text-emerald-600 hover:underline dark:text-emerald-400"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Scarica</span>
                  </button>
                </div>
              )}
            </div>

            <textarea
              rows={12}
              readOnly
              value={outputVal}
              placeholder="Il risultato convertito comparirà qui..."
              className="mt-1.5 w-full font-mono rounded-xl border border-zinc-200 bg-zinc-100/70 p-3 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
            />
          </div>
        </div>

        {error && (
          <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700 dark:bg-red-950/40 dark:text-red-300">
            {error}
          </div>
        )}

        <div className="mt-5 flex justify-end">
          <button
            onClick={handleConvert}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 active:scale-95"
          >
            <Table className="h-4 w-4" />
            <span>Esegui Conversione</span>
          </button>
        </div>
      </div>

      <AdBanner slot="action-card" />
    </div>
  );
};
