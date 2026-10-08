"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { formatBytes } from "@/lib/security-guard";
import { Binary, Copy, Check, ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";

const BYTES_PER_PAGE = 512;
const BYTES_PER_ROW = 16;

export const HexViewerTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [buffer, setBuffer] = useState<Uint8Array | null>(null);
  const [page, setPage] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  const handleFilesSelected = async (files: File[]) => {
    if (files.length === 0) return;
    const selected = files[0];
    setFile(selected);
    setPage(0);

    const arrayBuf = await selected.arrayBuffer();
    setBuffer(new Uint8Array(arrayBuf));
  };

  const totalPages = buffer ? Math.ceil(buffer.length / BYTES_PER_PAGE) : 0;
  const startByte = page * BYTES_PER_PAGE;
  const endByte = buffer ? Math.min(buffer.length, startByte + BYTES_PER_PAGE) : 0;
  const currentChunk = buffer ? buffer.subarray(startByte, endByte) : new Uint8Array();

  // Format hex rows
  const rows: { offset: string; hex: string[]; ascii: string }[] = [];
  for (let i = 0; i < currentChunk.length; i += BYTES_PER_ROW) {
    const rowBytes = currentChunk.subarray(i, i + BYTES_PER_ROW);
    const offsetNum = startByte + i;
    const offset = offsetNum.toString(16).padStart(8, "0");

    const hexArr: string[] = [];
    let asciiStr = "";

    for (let j = 0; j < BYTES_PER_ROW; j++) {
      if (j < rowBytes.length) {
        const b = rowBytes[j];
        hexArr.push(b.toString(16).padStart(2, "0"));
        // Printable ASCII between 32 and 126
        asciiStr += b >= 32 && b <= 126 ? String.fromCharCode(b) : ".";
      } else {
        hexArr.push("  ");
      }
    }

    rows.push({ offset, hex: hexArr, ascii: asciiStr });
  }

  const handleCopyDump = () => {
    const textDump = rows
      .map((r) => `${r.offset}  ${r.hex.slice(0, 8).join(" ")}  ${r.hex.slice(8).join(" ")}  |${r.ascii}|`)
      .join("\n");
    navigator.clipboard.writeText(textDump);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetAll = () => {
    setFile(null);
    setBuffer(null);
    setPage(0);
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <Dropzone
          onFilesSelected={handleFilesSelected}
          helperText="Trascina qui qualsiasi file per visualizzarne la struttura esadecimale (Hex Dump)"
        />
      ) : (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800">
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">{file.name}</h3>
              <p className="text-xs text-zinc-500">
                {formatBytes(file.size)} • {buffer?.length.toLocaleString()} byte totali
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyDump}
                className="flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? "Copiato!" : "Copia Hex"}</span>
              </button>
              <button
                onClick={resetAll}
                className="flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                <span>Altro File</span>
              </button>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 pb-3 text-xs text-zinc-500 dark:border-zinc-800">
            <span>
              Offset byte: {startByte.toLocaleString()} - {endByte.toLocaleString()} di {buffer?.length.toLocaleString()}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="rounded border border-zinc-200 p-1 hover:bg-zinc-50 disabled:opacity-40 dark:border-zinc-700"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="font-mono">
                Pagina {page + 1} / {totalPages || 1}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page >= totalPages - 1}
                className="rounded border border-zinc-200 p-1 hover:bg-zinc-50 disabled:opacity-40 dark:border-zinc-700"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Hex Table Viewer */}
          <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-950 p-4 font-mono text-[11px] leading-tight text-zinc-300 dark:border-zinc-800">
            <div className="min-w-[640px]">
              <div className="flex pb-2 font-bold text-zinc-500 border-b border-zinc-800">
                <span className="w-24">Offset</span>
                <span className="w-96">00 01 02 03 04 05 06 07  08 09 0A 0B 0C 0D 0E 0F</span>
                <span className="pl-4">ASCII Testo</span>
              </div>
              <div className="mt-2 space-y-1">
                {rows.map((row, idx) => (
                  <div key={idx} className="flex hover:bg-zinc-900/80">
                    <span className="w-24 text-zinc-500">{row.offset}</span>
                    <span className="w-96 text-emerald-400">
                      {row.hex.slice(0, 8).join(" ")} &nbsp;{row.hex.slice(8).join(" ")}
                    </span>
                    <span className="pl-4 text-zinc-400 border-l border-zinc-800 pl-4">{row.ascii}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
