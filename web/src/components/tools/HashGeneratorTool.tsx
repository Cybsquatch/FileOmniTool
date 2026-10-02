"use client";

import React, { useState } from "react";
import { calculateHash } from "@/lib/client-engines/text-engine";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { ShieldCheck, Copy, Check, FileUp, Type, Loader2 } from "lucide-react";

export const HashGeneratorTool: React.FC = () => {
  const [tab, setTab] = useState<"text" | "file">("text");
  const [textInput, setTextInput] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [algorithm, setAlgorithm] = useState<"SHA-256" | "SHA-512" | "SHA-1">("SHA-256");
  const [hashResult, setHashResult] = useState("");
  const [copied, setCopied] = useState(false);
  const [calculating, setCalculating] = useState(false);

  const handleComputeForText = async (text: string, algo = algorithm) => {
    setTextInput(text);
    if (!text) {
      setHashResult("");
      return;
    }
    setCalculating(true);
    const hash = await calculateHash(text, algo);
    setHashResult(hash);
    setCalculating(false);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    setFile(selected);
    setCalculating(true);

    try {
      const buffer = await selected.arrayBuffer();
      const hash = await calculateHash(buffer, algorithm);
      setHashResult(hash);
    } catch {
      setHashResult("Errore di calcolo hash.");
    } finally {
      setCalculating(false);
    }
  };

  const copyHash = () => {
    if (!hashResult) return;
    navigator.clipboard.writeText(hashResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex border-b border-zinc-100 pb-4 dark:border-zinc-800">
          <div className="flex gap-2">
            <button
              onClick={() => { setTab("text"); setHashResult(""); }}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold transition ${
                tab === "text"
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              <Type className="h-3.5 w-3.5" />
              <span>Testo Diretto</span>
            </button>
            <button
              onClick={() => { setTab("file"); setHashResult(""); }}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold transition ${
                tab === "file"
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              <FileUp className="h-3.5 w-3.5" />
              <span>File Locale</span>
            </button>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          <div>
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Algoritmo Crittografico:
            </label>
            <div className="mt-2 flex gap-2">
              {(["SHA-256", "SHA-512", "SHA-1"] as const).map((algo) => (
                <button
                  key={algo}
                  type="button"
                  onClick={() => {
                    setAlgorithm(algo);
                    if (tab === "text") handleComputeForText(textInput, algo);
                  }}
                  className={`rounded-xl border px-3.5 py-1.5 text-xs font-bold transition ${
                    algorithm === algo
                      ? "border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-950/60 dark:text-blue-300"
                      : "border-zinc-200 bg-zinc-50/50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  }`}
                >
                  {algo}
                </button>
              ))}
            </div>
          </div>

          {tab === "text" ? (
            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Inserisci o Incolla il Testo:
              </label>
              <textarea
                rows={4}
                value={textInput}
                onChange={(e) => handleComputeForText(e.target.value)}
                placeholder="Scrivi qualsiasi frase o stringa per generare il digest crittografico istantaneamente..."
                className="mt-1.5 w-full rounded-xl border border-zinc-300 bg-zinc-50 p-3 text-xs text-zinc-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              />
            </div>
          ) : (
            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Carica un file dal computer:
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="mt-1.5 block w-full text-xs text-zinc-500 file:mr-3 file:rounded-xl file:border-0 file:bg-zinc-900 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-zinc-800 dark:file:bg-white dark:file:text-zinc-900"
              />
              {file && (
                <p className="mt-2 text-xs text-zinc-500">
                  File: {sanitizeFileName(file.name)} ({formatBytes(file.size)})
                </p>
              )}
            </div>
          )}

          {/* Hash Result Box */}
          <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50/80 p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-blue-600" />
                Impronta Hash ({algorithm})
              </span>
              {hashResult && (
                <button
                  onClick={copyHash}
                  className="flex items-center gap-1 text-xs text-blue-600 hover:underline dark:text-blue-400"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Copiato!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copia Hash</span>
                    </>
                  )}
                </button>
              )}
            </div>

            <div className="mt-2 font-mono text-xs break-all text-zinc-900 dark:text-zinc-100">
              {calculating ? (
                <span className="flex items-center gap-2 text-zinc-400">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  Calcolo hash hardware in corso...
                </span>
              ) : hashResult ? (
                hashResult
              ) : (
                <span className="text-zinc-400 italic">In attesa di testo o file...</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <AdBanner slot="action-card" />
    </div>
  );
};
