"use client";

import React, { useState } from "react";
import { Table, Copy, Check, Download, RefreshCw, UploadCloud } from "lucide-react";

export const CsvToMarkdownTool: React.FC = () => {
  const [csvInput, setCsvInput] = useState<string>(
    "Nome,Ruolo,Città,Stipendio\nMarco Rossi,Frontend Dev,Milano,€42.000\nGiulia Bianchi,UX Designer,Roma,€38.000\nLuca Verdi,DevOps Engineer,Torino,€48.000"
  );
  const [delimiter, setDelimiter] = useState<string>("auto");
  const [alignment, setAlignment] = useState<"left" | "center" | "right">("left");
  const [copied, setCopied] = useState(false);

  const detectDelimiter = (text: string): string => {
    const firstLine = text.split("\n")[0] || "";
    if (firstLine.includes("\t")) return "\t";
    if (firstLine.includes(";")) return ";";
    return ",";
  };

  const convertToMarkdown = (): string => {
    if (!csvInput.trim()) return "";

    const sep = delimiter === "auto" ? detectDelimiter(csvInput) : delimiter;
    const lines = csvInput
      .trim()
      .split(/\r?\n/)
      .filter((l) => l.trim().length > 0);

    if (lines.length === 0) return "";

    const parseLine = (line: string): string[] => {
      // Split with quotes handling
      const tokens: string[] = [];
      let current = "";
      let inQuotes = false;

      for (let i = 0; i < line.length; i++) {
        const c = line[i];
        if (c === '"') {
          inQuotes = !inQuotes;
        } else if (c === sep && !inQuotes) {
          tokens.push(current.trim());
          current = "";
        } else {
          current += c;
        }
      }
      tokens.push(current.trim());
      return tokens.map((t) => t.replace(/^["']|["']$/g, ""));
    };

    const matrix = lines.map(parseLine);
    const colCount = Math.max(...matrix.map((r) => r.length));

    // Pad each row
    const normalized = matrix.map((row) => {
      while (row.length < colCount) row.push("");
      return row;
    });

    // Calculate max width per column
    const colWidths = Array.from({ length: colCount }, (_, colIdx) => {
      return Math.max(3, ...normalized.map((row) => (row[colIdx] || "").length));
    });

    const headers = normalized[0];
    const dataRows = normalized.slice(1);

    const formatRow = (row: string[]) => {
      return (
        "| " +
        row
          .map((cell, idx) => {
            const width = colWidths[idx];
            return cell.padEnd(width, " ");
          })
          .join(" | ") +
        " |"
      );
    };

    const separatorRow =
      "| " +
      colWidths
        .map((w) => {
          if (alignment === "center") return ":" + "-".repeat(Math.max(1, w - 2)) + ":";
          if (alignment === "right") return "-".repeat(Math.max(2, w - 1)) + ":";
          return ":" + "-".repeat(Math.max(2, w - 1));
        })
        .join(" | ") +
      " |";

    const headerStr = formatRow(headers);
    const bodyStr = dataRows.map(formatRow).join("\n");

    return [headerStr, separatorRow, bodyStr].filter(Boolean).join("\n");
  };

  const markdownOutput = convertToMarkdown();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setCsvInput(reader.result as string);
    };
    reader.readAsText(file);
  };

  const handleCopy = () => {
    if (!markdownOutput) return;
    navigator.clipboard.writeText(markdownOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!markdownOutput) return;
    const blob = new Blob([markdownOutput], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tabella-markdown.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <Table className="h-5 w-5 text-emerald-600" />
            <h3 className="font-semibold text-zinc-900 dark:text-white">Converti CSV in Tabella Markdown</h3>
          </div>

          <label className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">
            <UploadCloud className="h-3.5 w-3.5" />
            <span>Carica file .CSV / .TSV</span>
            <input type="file" accept=".csv,.tsv,.txt" onChange={handleFileUpload} className="hidden" />
          </label>
        </div>

        {/* Options */}
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-zinc-500">Separatore:</span>
            <select
              value={delimiter}
              onChange={(e) => setDelimiter(e.target.value)}
              className="rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
            >
              <option value="auto">Auto-rileva (, ; \t)</option>
              <option value=",">Virgola (,)</option>
              <option value=";">Punto e Virgola (;)</option>
              <option value="&#9;">Tabulazione (\t)</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-zinc-500">Allineamento:</span>
            <select
              value={alignment}
              onChange={(e) => setAlignment(e.target.value as typeof alignment)}
              className="rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
            >
              <option value="left">A Sinistra (Standard)</option>
              <option value="center">Centrato (:---:)</option>
              <option value="right">A Destra (---:)</option>
            </select>
          </div>
        </div>

        {/* Textareas */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Dati CSV di Origine
            </label>
            <textarea
              rows={12}
              value={csvInput}
              onChange={(e) => setCsvInput(e.target.value)}
              placeholder="Incolla qui i tuoi dati CSV o foglio di calcolo..."
              className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Tabella Formattata Markdown
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 rounded bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                >
                  {copied ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                  <span>{copied ? "Copiato!" : "Copia Markdown"}</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1 rounded bg-emerald-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-emerald-500"
                >
                  <Download className="h-3 w-3" />
                  <span>Scarica .md</span>
                </button>
              </div>
            </div>
            <textarea
              readOnly
              rows={12}
              value={markdownOutput}
              className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
