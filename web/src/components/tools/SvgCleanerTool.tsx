"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { Copy, Download, Sparkles, CheckCircle2, RefreshCw } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { formatBytes } from "@/lib/security-guard";

export const SvgCleanerTool: React.FC = () => {
  const { language } = useLanguage();
  const [originalSvg, setOriginalSvg] = useState("");
  const [cleanedSvg, setCleanedSvg] = useState("");
  const [fileName, setFileName] = useState("vector");
  const [copied, setCopied] = useState(false);

  const cleanSvgString = (raw: string): string => {
    let svg = raw;

    // 1. Remove XML declarations and DOCTYPE
    svg = svg.replace(/<\?xml[^>]*\?>/gi, "");
    svg = svg.replace(/<!DOCTYPE[^>]*>/gi, "");

    // 2. Remove comments
    svg = svg.replace(/<!--[\s\S]*?-->/g, "");

    // 3. Security Sanitization: Remove script tags and embedded JavaScript (XSS Prevention)
    svg = svg.replace(/<script[\s\S]*?<\/script>/gi, "");
    svg = svg.replace(/\s*on[a-z]+="[^"]*"/gi, "");
    svg = svg.replace(/\s*on[a-z]+='[^']*'/gi, "");
    svg = svg.replace(/(href|xlink:href)\s*=\s*["']\s*javascript:[^"']*["']/gi, "");

    // 4. Remove metadata, desc, and empty title tags
    svg = svg.replace(/<metadata[\s\S]*?<\/metadata>/gi, "");
    svg = svg.replace(/<desc[\s\S]*?<\/desc>/gi, "");

    // 5. Remove proprietary editor namespaces and attributes (Illustrator, Inkscape, Sketch)
    svg = svg.replace(/\s*(xmlns:inkscape|xmlns:sodipodi|xmlns:adobe|xmlns:i|xmlns:graph|xmlns:sketch|inkscape:[a-z0-9_-]+|sodipodi:[a-z0-9_-]+|adobe:[a-z0-9_-]+|sketch:[a-z0-9_-]+)="[^"]*"/gi, "");

    // 6. Remove unused data- attributes and generator comments
    svg = svg.replace(/\s*data-name="[^"]*"/gi, "");
    svg = svg.replace(/\s*id="Svgjs[a-z0-9_-]+"/gi, "");

    // 7. Normalize whitespace
    svg = svg.replace(/\s{2,}/g, " ").replace(/>\s+</g, "><").trim();

    return svg;
  };

  const handleFilesSelected = async (files: File[]) => {
    const file = files[0];
    if (!file) return;

    const baseName = file.name.substring(0, file.name.lastIndexOf(".")) || file.name;
    setFileName(baseName);

    const text = await file.text();
    setOriginalSvg(text);
    const cleaned = cleanSvgString(text);
    setCleanedSvg(cleaned);
  };

  const handleCopy = async () => {
    if (!cleanedSvg) return;
    await navigator.clipboard.writeText(cleanedSvg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!cleanedSvg) return;
    const blob = new Blob([cleanedSvg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}-clean.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const origSize = new Blob([originalSvg]).size;
  const cleanSize = new Blob([cleanedSvg]).size;
  const savings = origSize > 0 ? Math.round(((origSize - cleanSize) / origSize) * 100) : 0;

  return (
    <div className="space-y-6">
      <Dropzone
        onFilesSelected={handleFilesSelected}
        accept="image/svg+xml,.svg"
        helperText={language === "it" ? "Trascina qui il file vettoriale SVG da ottimizzare e ripulire" : "Drag & drop SVG file to optimize and sanitize"}
      />

      {cleanedSvg && (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800">
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                {fileName}-clean.svg
              </h3>
              <p className="text-xs text-zinc-500">
                {formatBytes(origSize)} → <strong className="text-emerald-600 dark:text-emerald-400">{formatBytes(cleanSize)}</strong>
                {savings > 0 && <span className="ml-2 font-bold text-emerald-600">(-{savings}%)</span>}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              >
                {copied ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? (language === "it" ? "Copiato!" : "Copied!") : (language === "it" ? "Copia Codice" : "Copy Code")}</span>
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700"
              >
                <Download className="h-3.5 w-3.5" />
                <span>{language === "it" ? "Scarica .SVG" : "Download .SVG"}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Visual Preview */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                {language === "it" ? "Anteprima Grafica" : "Visual Preview"}
              </label>
              <div
                className="flex h-64 items-center justify-center rounded-2xl border border-zinc-200 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] p-6 dark:border-zinc-800 dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]"
                dangerouslySetInnerHTML={{ __html: cleanedSvg }}
              />
            </div>

            {/* Code Preview */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                {language === "it" ? "Codice XML Minificato" : "Minified XML Code"}
              </label>
              <textarea
                readOnly
                value={cleanedSvg}
                className="h-64 w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-[11px] leading-relaxed text-zinc-800 shadow-inner outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
