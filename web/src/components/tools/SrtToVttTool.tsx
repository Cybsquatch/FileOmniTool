"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { Copy, Download, FileText, CheckCircle2, ArrowRightLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export const SrtToVttTool: React.FC = () => {
  const { language } = useLanguage();
  const [inputContent, setInputContent] = useState("");
  const [outputContent, setOutputContent] = useState("");
  const [mode, setMode] = useState<"srt-to-vtt" | "vtt-to-srt">("srt-to-vtt");
  const [filename, setFilename] = useState("subtitles");
  const [copied, setCopied] = useState(false);

  const convertSrtToVtt = (srt: string): string => {
    let vtt = "WEBVTT\n\n";
    const converted = srt
      .replace(/\r\n/g, "\n")
      .replace(/\r/g, "\n")
      .replace(/(\d{2}:\d{2}:\d{2}),(\d{3})/g, "$1.$2");
    return vtt + converted.trim();
  };

  const convertVttToSrt = (vtt: string): string => {
    let lines = vtt.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
    let inHeader = true;
    let srtLines: string[] = [];
    let counter = 1;

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();
      if (inHeader) {
        if (line.startsWith("WEBVTT") || line.startsWith("NOTE") || line.startsWith("STYLE")) {
          continue;
        }
        if (line === "") {
          inHeader = false;
          continue;
        }
        inHeader = false;
      }

      if (line.includes("-->")) {
        srtLines.push(counter.toString());
        counter++;
        const timeLine = line.replace(/(\d{2}:\d{2}:\d{2})\.(\d{3})/g, "$1,$2")
                             .replace(/(\d{2}:\d{2})\.(\d{3})/g, "00:$1,$2");
        srtLines.push(timeLine);
      } else {
        srtLines.push(line);
      }
    }

    return srtLines.join("\n").trim();
  };

  const handleConvert = (text: string, currentMode = mode) => {
    setInputContent(text);
    if (!text.trim()) {
      setOutputContent("");
      return;
    }
    if (currentMode === "srt-to-vtt") {
      setOutputContent(convertSrtToVtt(text));
    } else {
      setOutputContent(convertVttToSrt(text));
    }
  };

  const handleFilesSelected = async (files: File[]) => {
    const file = files[0];
    if (!file) return;
    const baseName = file.name.substring(0, file.name.lastIndexOf(".")) || file.name;
    setFilename(baseName);

    const isVtt = file.name.toLowerCase().endsWith(".vtt");
    const targetMode = isVtt ? "vtt-to-srt" : "srt-to-vtt";
    setMode(targetMode);

    const text = await file.text();
    handleConvert(text, targetMode);
  };

  const handleCopy = async () => {
    if (!outputContent) return;
    await navigator.clipboard.writeText(outputContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!outputContent) return;
    const ext = mode === "srt-to-vtt" ? "vtt" : "srt";
    const mime = mode === "srt-to-vtt" ? "text/vtt" : "application/x-subrip";
    const blob = new Blob([outputContent], { type: `${mime};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleMode = () => {
    const nextMode = mode === "srt-to-vtt" ? "vtt-to-srt" : "srt-to-vtt";
    setMode(nextMode);
    if (inputContent) {
      handleConvert(inputContent, nextMode);
    }
  };

  return (
    <div className="space-y-6">
      {/* Control bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            {language === "it" ? "Modalità di conversione:" : "Conversion Mode:"}
          </span>
          <button
            onClick={toggleMode}
            className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300"
          >
            <ArrowRightLeft className="h-3.5 w-3.5" />
            <span>{mode === "srt-to-vtt" ? "SRT → WebVTT (.vtt)" : "WebVTT (.vtt) → SRT"}</span>
          </button>
        </div>

        {outputContent && (
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
              <span>{language === "it" ? `Scarica .${mode === "srt-to-vtt" ? "vtt" : "srt"}` : `Download .${mode === "srt-to-vtt" ? "vtt" : "srt"}`}</span>
            </button>
          </div>
        )}
      </div>

      {/* File Upload Dropzone */}
      <Dropzone
        onFilesSelected={handleFilesSelected}
        accept=".srt,.vtt,text/plain"
        helperText={language === "it" ? "Trascina qui il file di sottotitoli (.srt o .vtt)" : "Drag & drop subtitle file (.srt or .vtt)"}
      />

      {/* Textareas */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            {mode === "srt-to-vtt" ? "Input SubRip (.srt)" : "Input WebVTT (.vtt)"}
          </label>
          <textarea
            value={inputContent}
            onChange={(e) => handleConvert(e.target.value)}
            placeholder={
              mode === "srt-to-vtt"
                ? "1\n00:00:01,000 --> 00:00:04,000\nBenvenuti su FileOmniTool!\n\n2\n00:00:04,500 --> 00:00:08,000\nStrumenti 100% in-browser gratuiti."
                : "WEBVTT\n\n00:00:01.000 --> 00:00:04.000\nBenvenuti su FileOmniTool!"
            }
            className="h-80 w-full rounded-2xl border border-zinc-200 bg-white p-4 font-mono text-xs leading-relaxed text-zinc-800 shadow-sm outline-none transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            {mode === "srt-to-vtt" ? "Output WebVTT (.vtt)" : "Output SubRip (.srt)"}
          </label>
          <textarea
            readOnly
            value={outputContent}
            placeholder={language === "it" ? "Il file convertito apparirà qui in tempo reale..." : "Converted subtitle will appear here in real time..."}
            className="h-80 w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-800 shadow-sm outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
          />
        </div>
      </div>
    </div>
  );
};
