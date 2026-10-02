"use client";

import React, { useState, useEffect, useCallback } from "react";
import { AdBanner } from "../ads/AdBanner";
import { Fingerprint, Copy, Check, Download, RefreshCw } from "lucide-react";

export const UuidGeneratorTool: React.FC = () => {
  const [quantity, setQuantity] = useState(5);
  const [uppercase, setUppercase] = useState(false);
  const [noHyphens, setNoHyphens] = useState(false);
  const [wrapQuotes, setWrapQuotes] = useState(false);
  const [uuids, setUuids] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const generateUuids = useCallback(() => {
    const list: string[] = [];
    for (let i = 0; i < quantity; i++) {
      let id = window.crypto.randomUUID ? window.crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });

      if (noHyphens) {
        id = id.replace(/-/g, "");
      }
      if (uppercase) {
        id = id.toUpperCase();
      }
      if (wrapQuotes) {
        id = `"${id}"`;
      }
      list.push(id);
    }
    setUuids(list);
  }, [quantity, uppercase, noHyphens, wrapQuotes]);

  useEffect(() => {
    generateUuids();
  }, [generateUuids]);

  const copyAll = () => {
    navigator.clipboard.writeText(uuids.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadText = () => {
    const blob = new Blob([uuids.join("\n")], { type: "text/plain;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `uuid_v4_batch_${quantity}.txt`;
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
              <Fingerprint className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              {quantity} UUID v4 generati (RFC 4122 Standard)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={generateUuids}
              className="flex items-center gap-1 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <RefreshCw className="h-3.5 w-3.5 text-zinc-400" />
              <span>Rigenera</span>
            </button>
            <button
              onClick={copyAll}
              className="flex items-center gap-1 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? "Copiati!" : "Copia Tutti"}</span>
            </button>
            <button
              onClick={downloadText}
              className="flex items-center gap-1 rounded-xl bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-blue-700 active:scale-95"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Scarica .TXT</span>
            </button>
          </div>
        </div>

        {/* Configuration Options */}
        <div className="mt-4 flex flex-wrap items-center gap-4 rounded-xl bg-zinc-50 p-3 text-xs dark:bg-zinc-800/60">
          <div className="flex items-center gap-2">
            <label className="font-semibold text-zinc-700 dark:text-zinc-300">Quantità:</label>
            <input
              type="number"
              min={1}
              max={1000}
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Math.min(1000, parseInt(e.target.value) || 1)))}
              className="w-20 rounded-lg border border-zinc-300 bg-white p-1 text-center font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            />
          </div>

          <label className="flex cursor-pointer items-center gap-1.5 text-zinc-600 dark:text-zinc-300">
            <input
              type="checkbox"
              checked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
              className="rounded text-blue-600"
            />
            <span>MAIUSCOLO</span>
          </label>

          <label className="flex cursor-pointer items-center gap-1.5 text-zinc-600 dark:text-zinc-300">
            <input
              type="checkbox"
              checked={noHyphens}
              onChange={(e) => setNoHyphens(e.target.checked)}
              className="rounded text-blue-600"
            />
            <span>Rimuovi trattini (-)</span>
          </label>

          <label className="flex cursor-pointer items-center gap-1.5 text-zinc-600 dark:text-zinc-300">
            <input
              type="checkbox"
              checked={wrapQuotes}
              onChange={(e) => setWrapQuotes(e.target.checked)}
              className="rounded text-blue-600"
            />
            <span>Avvolgi tra virgolette (&quot;...&quot;)</span>
          </label>
        </div>

        {/* UUID List Display */}
        <div className="mt-4">
          <textarea
            rows={Math.min(12, Math.max(5, quantity))}
            readOnly
            value={uuids.join("\n")}
            className="w-full font-mono text-xs rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-zinc-800 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
          />
        </div>
      </div>

      <AdBanner slot="action-card" />
    </div>
  );
};
