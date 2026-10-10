"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { Copy, Download, Sparkles, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { formatBytes } from "@/lib/utils";

export const CssMinifierTool: React.FC = () => {
  const { language } = useLanguage();
  const [cssInput, setCssInput] = useState(
    `/* Foglio di stile principale */\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 24px;\n}\n\n.btn-primary {\n  background-color: #10b981;\n  color: #ffffff;\n  border-radius: 8px;\n  border: none;\n  font-weight: 600;\n}`
  );
  const [cssOutput, setCssOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const minifyCss = (raw: string): string => {
    let css = raw;
    // 1. Remove comments
    css = css.replace(/\/\*[\s\S]*?\*\//g, "");
    // 2. Remove whitespace around symbols
    css = css.replace(/\s*([\{\};:,>+~])\s*/g, "$1");
    // 3. Remove trailing semicolons before closing brace
    css = css.replace(/;\}/g, "}");
    // 4. Remove consecutive whitespaces and newlines
    css = css.replace(/\s+/g, " ").trim();
    return css;
  };

  const handleMinify = (val: string) => {
    setCssInput(val);
    setCssOutput(minifyCss(val));
  };

  React.useEffect(() => {
    handleMinify(cssInput);
  }, []);

  const handleFilesSelected = async (files: File[]) => {
    const file = files[0];
    if (!file) return;
    const text = await file.text();
    handleMinify(text);
  };

  const handleCopy = async () => {
    if (!cssOutput) return;
    await navigator.clipboard.writeText(cssOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!cssOutput) return;
    const blob = new Blob([cssOutput], { type: "text/css;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `style.min.css`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const origSize = new Blob([cssInput]).size;
  const minSize = new Blob([cssOutput]).size;
  const savings = origSize > 0 ? Math.round(((origSize - minSize) / origSize) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            {language === "it" ? "Compressione Fogli di Stile CSS" : "CSS Stylesheet Minifier"}
          </span>
          <p className="text-xs text-zinc-500">
            {formatBytes(origSize)} → <strong className="text-emerald-600 dark:text-emerald-400">{formatBytes(minSize)}</strong>
            {savings > 0 && <span className="ml-2 font-bold text-emerald-600">(-{savings}%)</span>}
          </p>
        </div>

        {cssOutput && (
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              {copied ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? (language === "it" ? "Copiato!" : "Copied!") : (language === "it" ? "Copia CSS" : "Copy CSS")}</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{language === "it" ? "Scarica .min.css" : "Download .min.css"}</span>
            </button>
          </div>
        )}
      </div>

      <Dropzone
        onFilesSelected={handleFilesSelected}
        accept=".css,text/css"
        helperText={language === "it" ? "Trascina qui il file .css oppure incolla il codice da comprimere" : "Drag & drop .css file or paste CSS styles"}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            {language === "it" ? "CSS Originale" : "Original CSS"}
          </label>
          <textarea
            value={cssInput}
            onChange={(e) => handleMinify(e.target.value)}
            className="h-80 w-full rounded-2xl border border-zinc-200 bg-white p-4 font-mono text-xs leading-relaxed text-zinc-800 shadow-sm outline-none transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            {language === "it" ? "CSS Minificato (.min.css)" : "Minified CSS Output"}
          </label>
          <textarea
            readOnly
            value={cssOutput}
            className="h-80 w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-800 shadow-sm outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
          />
        </div>
      </div>
    </div>
  );
};
