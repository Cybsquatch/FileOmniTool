"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { calculateHash } from "@/lib/client-engines/text-engine";
import { calculateMd5 } from "@/lib/client-engines/text-engine";
import { formatBytes } from "@/lib/security-guard";
import { ShieldCheck, Copy, Check, CheckCircle2, XCircle, RefreshCw, Loader2 } from "lucide-react";

export const FileChecksumTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [sha256, setSha256] = useState<string>("");
  const [sha1, setSha1] = useState<string>("");
  const [sha512, setSha512] = useState<string>("");
  const [md5, setMd5] = useState<string>("");
  const [compareHash, setCompareHash] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleFilesSelected = async (files: File[]) => {
    if (files.length === 0) return;
    const selected = files[0];
    setFile(selected);
    setLoading(true);

    try {
      const buffer = await selected.arrayBuffer();

      const [h256, h1, h512] = await Promise.all([
        calculateHash(buffer, "SHA-256"),
        calculateHash(buffer, "SHA-1"),
        calculateHash(buffer, "SHA-512"),
      ]);

      const hMd5 = calculateMd5(buffer);

      setSha256(h256);
      setSha1(h1);
      setSha512(h512);
      setMd5(hMd5);
    } catch {
      // fallback
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const resetAll = () => {
    setFile(null);
    setSha256("");
    setSha1("");
    setSha512("");
    setMd5("");
    setCompareHash("");
  };

  const cleanCompare = compareHash.trim().toLowerCase();
  const matchResult = cleanCompare
    ? cleanCompare === sha256.toLowerCase()
      ? "SHA-256 Match!"
      : cleanCompare === md5.toLowerCase()
      ? "MD5 Match!"
      : cleanCompare === sha1.toLowerCase()
      ? "SHA-1 Match!"
      : cleanCompare === sha512.toLowerCase()
      ? "SHA-512 Match!"
      : "Mismatch"
    : null;

  return (
    <div className="space-y-6">
      {!file ? (
        <Dropzone
          onFilesSelected={handleFilesSelected}
          helperText="Trascina qui qualsiasi file per calcolarne il checksum crittografico (MD5, SHA-256)"
        />
      ) : loading ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-12 dark:border-zinc-800 dark:bg-zinc-900">
          <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
          <p className="mt-4 font-semibold text-zinc-900 dark:text-white">Calcolo Checksum in Memoria...</p>
          <p className="mt-1 text-xs text-zinc-500">Hashing crittografico 100% in locale</p>
        </div>
      ) : (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800">
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">{file.name}</h3>
              <p className="text-xs text-zinc-500">{formatBytes(file.size)}</p>
            </div>
            <button
              onClick={resetAll}
              className="flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Verifica un Altro File</span>
            </button>
          </div>

          {/* Verification Box */}
          <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Verifica Integrità (Incolla l'hash fornito dal produttore o sviluppatore):
            </label>
            <div className="mt-2 flex items-center gap-2">
              <input
                type="text"
                value={compareHash}
                onChange={(e) => setCompareHash(e.target.value)}
                placeholder="Incolla qui l'hash MD5, SHA-256 o SHA-1..."
                className="w-full rounded-lg border border-zinc-200 bg-white p-2.5 font-mono text-xs text-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
              />
            </div>

            {matchResult && (
              <div className="mt-3">
                {matchResult !== "Mismatch" ? (
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Integrità confermata al 100%! {matchResult} (File autentico e non manomesso)</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-600 dark:text-rose-400">
                    <XCircle className="h-4 w-4" />
                    <span>Nessuna corrispondenza: il file potrebbe essere corrotto o modificato!</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Hash List */}
          <div className="mt-6 space-y-4">
            {[
              { key: "sha256", label: "SHA-256 (Standard Sicurezza)", val: sha256 },
              { key: "md5", label: "MD5 (Checksum Download)", val: md5 },
              { key: "sha1", label: "SHA-1 (Git / Legacy)", val: sha1 },
              { key: "sha512", label: "SHA-512 (Alta Sicurezza)", val: sha512 },
            ].map((item) => (
              <div
                key={item.key}
                className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-3.5 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="flex items-center justify-between pb-1">
                  <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">{item.label}</span>
                  <button
                    onClick={() => copyToClipboard(item.val, item.key)}
                    className="flex items-center gap-1 rounded bg-white px-2 py-1 text-xs font-semibold text-zinc-600 shadow-xs hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {copiedKey === item.key ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                    <span>{copiedKey === item.key ? "Copiato!" : "Copia"}</span>
                  </button>
                </div>
                <div className="break-all font-mono text-xs text-zinc-600 dark:text-zinc-400">{item.val}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
