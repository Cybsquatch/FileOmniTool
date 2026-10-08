"use client";

import React, { useState } from "react";
import { ArrowLeftRight, Copy, Check } from "lucide-react";

export const HtmlEntitiesTool: React.FC = () => {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [format, setFormat] = useState<"named" | "numeric">("named");
  const [input, setInput] = useState<string>(
    '<div class="box">L\'offerta speciale costa 99€ & include il 100% di garanzia! "Qualità superiore"</div>'
  );
  const [copied, setCopied] = useState(false);

  const encodeHtml = (str: string, type: "named" | "numeric") => {
    if (type === "numeric") {
      return str
        .split("")
        .map((char) => {
          const code = char.charCodeAt(0);
          return code > 127 || ["<", ">", "&", '"', "'"].includes(char) ? `&#${code};` : char;
        })
        .join("");
    }

    // Named entities map
    const entityMap: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "à": "&agrave;",
      "è": "&egrave;",
      "é": "&eacute;",
      "ì": "&igrave;",
      "ò": "&ograve;",
      "ù": "&ugrave;",
      "À": "&Agrave;",
      "È": "&Egrave;",
      "É": "&Eacute;",
      "Ì": "&Igrave;",
      "Ò": "&Ograve;",
      "Ù": "&Ugrave;",
      "©": "&copy;",
      "®": "&reg;",
      "™": "&trade;",
      "€": "&euro;",
      "£": "&pound;",
      "¥": "&yen;",
      "°": "&deg;",
    };

    return str.replace(/[&<>"'àèéìòùÀÈÉÌÒÙ©®™€£¥°]/g, (match) => entityMap[match] || match);
  };

  const decodeHtml = (str: string) => {
    const doc = new DOMParser().parseFromString(str, "text/html");
    return doc.documentElement.textContent || "";
  };

  const output = mode === "encode" ? encodeHtml(input, format) : decodeHtml(input);

  const handleSwap = () => {
    setInput(output);
    setMode(mode === "encode" ? "decode" : "encode");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <h3 className="font-semibold text-zinc-900 dark:text-white">
              {mode === "encode" ? "Codifica in Entità HTML" : "Decodifica Entità in Testo"}
            </h3>
            <button
              onClick={handleSwap}
              className="flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              <ArrowLeftRight className="h-3 w-3" />
              <span>Inverti ({mode === "encode" ? "Decodifica" : "Codifica"})</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            {mode === "encode" && (
              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <span>Tipo:</span>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value as "named" | "numeric")}
                  className="rounded-lg border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                >
                  <option value="named">Entità con Nome (&amp;)</option>
                  <option value="numeric">Numeriche Decimali (&#38;)</option>
                </select>
              </div>
            )}

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-emerald-500"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? "Copiato!" : "Copia Risultato"}</span>
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {mode === "encode" ? "Testo Grezzo / HTML" : "Codice con Entità HTML"}
            </label>
            <textarea
              rows={14}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
            />
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {mode === "encode" ? "Risultato Entità HTML" : "Testo Decodificato"}
            </label>
            <textarea
              readOnly
              rows={14}
              value={output}
              className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
