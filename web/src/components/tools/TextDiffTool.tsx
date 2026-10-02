"use client";

import React, { useState } from "react";
import { computeLineDiff, DiffResult } from "@/lib/client-engines/diff-engine";
import { AdBanner } from "../ads/AdBanner";
import { GitCompare, Copy, Check, RefreshCw, FileText, ArrowRight } from "lucide-react";

const SAMPLE_ORIGINAL = `function calculateTotal(price, tax) {
  var discount = 0;
  if (price > 100) {
    discount = 10;
  }
  return (price - discount) + tax;
}`;

const SAMPLE_MODIFIED = `function calculateTotal(price, tax, coupon = 0) {
  let discount = coupon;
  if (price > 100) {
    discount = Math.max(discount, 15);
  }
  const subtotal = price - discount;
  return subtotal + (subtotal * tax);
}`;

export const TextDiffTool: React.FC = () => {
  const [original, setOriginal] = useState(SAMPLE_ORIGINAL);
  const [modified, setModified] = useState(SAMPLE_MODIFIED);
  const [diffResult, setDiffResult] = useState<DiffResult | null>(() => computeLineDiff(SAMPLE_ORIGINAL, SAMPLE_MODIFIED));
  const [copied, setCopied] = useState(false);

  const handleCompare = () => {
    const res = computeLineDiff(original, modified);
    setDiffResult(res);
  };

  const handleClear = () => {
    setOriginal("");
    setModified("");
    setDiffResult(null);
  };

  const copyDiffSummary = () => {
    if (!diffResult) return;
    const summary = diffResult.lines
      .map((l) => (l.type === "added" ? `+ ${l.text}` : l.type === "removed" ? `- ${l.text}` : `  ${l.text}`))
      .join("\n");
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
              <GitCompare className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Confronta Testo & Codice (Client-Side)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleClear}
              className="rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Cancella
            </button>
            <button
              onClick={handleCompare}
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 active:scale-95"
            >
              <span>Confronta Differenze</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Input Textareas */}
        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Testo Originale:
            </label>
            <textarea
              rows={8}
              value={original}
              onChange={(e) => setOriginal(e.target.value)}
              placeholder="Incolla qui il testo o codice originale..."
              className="mt-1.5 w-full font-mono text-xs rounded-xl border border-zinc-300 bg-zinc-50 p-3 text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Testo Modificato:
            </label>
            <textarea
              rows={8}
              value={modified}
              onChange={(e) => setModified(e.target.value)}
              placeholder="Incolla qui il testo o codice modificato..."
              className="mt-1.5 w-full font-mono text-xs rounded-xl border border-zinc-300 bg-zinc-50 p-3 text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
            />
          </div>
        </div>

        {/* Diff Visualizer */}
        {diffResult && (
          <div className="mt-6 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-zinc-100/70 p-3 text-xs dark:bg-zinc-800/60">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-zinc-700 dark:text-zinc-300">Differenze rilevate:</span>
                <span className="inline-flex items-center rounded-md bg-emerald-100 px-2 py-0.5 font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                  +{diffResult.additionsCount} aggiunte
                </span>
                <span className="inline-flex items-center rounded-md bg-red-100 px-2 py-0.5 font-bold text-red-700 dark:bg-red-950 dark:text-red-300">
                  -{diffResult.deletionsCount} rimozioni
                </span>
              </div>

              <button
                onClick={copyDiffSummary}
                className="flex items-center gap-1 font-semibold text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? "Copiato!" : "Copia Diff (Patch)"}</span>
              </button>
            </div>

            <div className="max-h-96 overflow-x-auto overflow-y-auto rounded-xl border border-zinc-200 bg-white font-mono text-xs shadow-inner dark:border-zinc-800 dark:bg-zinc-950">
              <table className="w-full border-collapse">
                <tbody>
                  {diffResult.lines.map((line, idx) => {
                    const isAdded = line.type === "added";
                    const isRemoved = line.type === "removed";
                    const rowBg = isAdded
                      ? "bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200"
                      : isRemoved
                      ? "bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-200"
                      : "text-zinc-700 hover:bg-zinc-50/70 dark:text-zinc-300 dark:hover:bg-zinc-900/40";

                    const badge = isAdded ? "+" : isRemoved ? "-" : " ";

                    return (
                      <tr key={idx} className={`${rowBg} border-b border-zinc-100/40 dark:border-zinc-800/40`}>
                        <td className="w-10 select-none py-1 pl-3 text-right text-[11px] text-zinc-400">
                          {line.originalLineNumber ?? ""}
                        </td>
                        <td className="w-10 select-none py-1 pl-2 text-right text-[11px] text-zinc-400">
                          {line.modifiedLineNumber ?? ""}
                        </td>
                        <td className="w-6 select-none py-1 text-center font-bold">
                          {badge}
                        </td>
                        <td className="py-1 pr-4 whitespace-pre-wrap font-mono">
                          {line.text || " "}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <AdBanner slot="action-card" />
    </div>
  );
};
