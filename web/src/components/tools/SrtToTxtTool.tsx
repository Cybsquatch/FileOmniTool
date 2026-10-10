"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { Copy, Download, FileText, CheckCircle2, Trash2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export const SrtToTxtTool: React.FC = () => {
  const { language } = useLanguage();
  const [extractedText, setExtractedText] = useState("");
  const [filename, setFilename] = useState("transcription");
  const [removeDuplicates, setRemoveDuplicates] = useState(true);
  const [copied, setCopied] = useState(false);

  const cleanSubtitleText = (raw: string, deduplicate: boolean): string => {
    // Normalize line endings
    const lines = raw.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
    const textLines: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();
      // Skip empty lines
      if (!line) continue;
      // Skip numeric cue identifiers
      if (/^\d+$/.test(line)) continue;
      // Skip WEBVTT headers or notes
      if (line.startsWith("WEBVTT") || line.startsWith("NOTE") || line.startsWith("STYLE")) continue;
      // Skip timestamp lines (00:00:01,000 --> 00:00:04,000 or 00:00:01.000 --> 00:00:04.000)
      if (line.includes("-->")) continue;

      // Remove HTML or WebVTT styling tags like <font>, <b>, <i>, <c>, <v Speaker>
      line = line.replace(/<[^>]+>/g, "").trim();
      if (!line) continue;

      // Deduplicate consecutive rolling subtitles if enabled
      if (deduplicate && textLines.length > 0 && textLines[textLines.length - 1] === line) {
        continue;
      }

      textLines.push(line);
    }

    return textLines.join(" ");
  };

  const handleFilesSelected = async (files: File[]) => {
    const file = files[0];
    if (!file) return;
    const baseName = file.name.substring(0, file.name.lastIndexOf(".")) || file.name;
    setFilename(baseName);

    const raw = await file.text();
    const clean = cleanSubtitleText(raw, removeDuplicates);
    setExtractedText(clean);
  };

  const handleCopy = async () => {
    if (!extractedText) return;
    await navigator.clipboard.writeText(extractedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!extractedText) return;
    const blob = new Blob([extractedText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}-clean.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const wordCount = extractedText ? extractedText.trim().split(/\s+/).filter(Boolean).length : 0;
  const charCount = extractedText ? extractedText.length : 0;

  return (
    <div className="space-y-6">
      <Dropzone
        onFilesSelected={handleFilesSelected}
        accept=".srt,.vtt,text/plain"
        helperText={language === "it" ? "Trascina qui il file SRT o VTT da cui estrarre la trascrizione testuale" : "Drag & drop SRT or VTT file to extract clean plain text"}
      />

      {extractedText && (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                {language === "it" ? "Statistiche Trascrizione:" : "Transcript Stats:"}
              </span>
              <span className="text-xs text-zinc-600 dark:text-zinc-400">
                {wordCount.toLocaleString()} {language === "it" ? "parole" : "words"} • {charCount.toLocaleString()} {language === "it" ? "caratteri" : "characters"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              >
                {copied ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? (language === "it" ? "Copiato!" : "Copied!") : (language === "it" ? "Copia Testo" : "Copy")}</span>
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700"
              >
                <Download className="h-3.5 w-3.5" />
                <span>{language === "it" ? "Scarica .TXT" : "Download .TXT"}</span>
              </button>
              <button
                onClick={() => setExtractedText("")}
                className="rounded-xl p-1.5 text-zinc-400 hover:text-red-500"
                title={language === "it" ? "Cancella" : "Clear"}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          <textarea
            value={extractedText}
            onChange={(e) => setExtractedText(e.target.value)}
            rows={10}
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 text-sm leading-relaxed text-zinc-800 shadow-inner outline-none transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
          />
        </div>
      )}
    </div>
  );
};
