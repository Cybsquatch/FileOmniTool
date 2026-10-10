"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { Lock, Unlock, Download, Loader2, KeyRound, ShieldAlert, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { formatBytes } from "@/lib/utils";

export const PdfEncryptTool: React.FC = () => {
  const { language } = useLanguage();
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
  const [processing, setProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [downloadName, setDownloadName] = useState("");
  const [error, setError] = useState<string | null>(null);

  // PBKDF2 Key Derivation
  const deriveKey = async (pwd: string, salt: Uint8Array): Promise<CryptoKey> => {
    const enc = new TextEncoder();
    const baseKey = await window.crypto.subtle.importKey(
      "raw",
      enc.encode(pwd),
      "PBKDF2",
      false,
      ["deriveKey"]
    );
    return await window.crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: salt as BufferSource,
        iterations: 100000,
        hash: "SHA-256",
      },
      baseKey,
      { name: "AES-GCM", length: 256 },
      false,
      ["encrypt", "decrypt"]
    );
  };

  const handleProcess = async () => {
    if (!file || !password) {
      setError(language === "it" ? "Inserisci una password per procedere." : "Please enter a password.");
      return;
    }

    setError(null);
    setProcessing(true);

    try {
      const buffer = await file.arrayBuffer();

      if (mode === "encrypt") {
        // Generate random 16-byte salt and 12-byte IV
        const salt = window.crypto.getRandomValues(new Uint8Array(16));
        const iv = window.crypto.getRandomValues(new Uint8Array(12));
        const key = await deriveKey(password, salt);

        const ciphertext = await window.crypto.subtle.encrypt(
          { name: "AES-GCM", iv },
          key,
          buffer
        );

        // Prepend [Magic 'FILEOMNI' (8 bytes)] + [Salt (16 bytes)] + [IV (12 bytes)] + [Ciphertext]
        const magic = new TextEncoder().encode("FILEOMNI");
        const totalLen = magic.length + salt.length + iv.length + ciphertext.byteLength;
        const result = new Uint8Array(totalLen);

        result.set(magic, 0);
        result.set(salt, 8);
        result.set(iv, 24);
        result.set(new Uint8Array(ciphertext), 36);

        const blob = new Blob([result], { type: "application/octet-stream" });
        const url = URL.createObjectURL(blob);
        setDownloadUrl(url);
        setDownloadName(`${file.name}.protected`);
      } else {
        // Decrypt
        const data = new Uint8Array(buffer);
        const magicStr = new TextDecoder().decode(data.slice(0, 8));
        if (magicStr !== "FILEOMNI") {
          throw new Error(
            language === "it"
              ? "Il file selezionato non è un pacchetto cifrato valido creato da FileOmniTool."
              : "Invalid encrypted package format."
          );
        }

        const salt = data.slice(8, 24);
        const iv = data.slice(24, 36);
        const ciphertext = data.slice(36);

        const key = await deriveKey(password, salt);
        const decryptedBuffer = await window.crypto.subtle.decrypt(
          { name: "AES-GCM", iv },
          key,
          ciphertext
        );

        const blob = new Blob([decryptedBuffer], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        setDownloadUrl(url);
        setDownloadName(file.name.replace(/\.protected$/i, "").replace(/\.enc$/i, "") || "decrypted.pdf");
      }
    } catch {
      setError(
        mode === "decrypt"
          ? (language === "it" ? "Password errata o file danneggiato." : "Incorrect password or corrupt file.")
          : (language === "it" ? "Errore durante la cifratura." : "Encryption failed.")
      );
    } finally {
      setProcessing(false);
    }
  };

  const handleFilesSelected = (files: File[]) => {
    const selected = files[0];
    if (!selected) return;
    setFile(selected);
    setDownloadUrl(null);
    setError(null);

    // Auto-detect if file is an encrypted container
    if (selected.name.endsWith(".protected") || selected.name.endsWith(".enc")) {
      setMode("decrypt");
    } else {
      setMode("encrypt");
    }
  };

  const resetAll = () => {
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setFile(null);
    setPassword("");
    setDownloadUrl(null);
    setError(null);
  };

  return (
    <div className="space-y-6">
      {/* Mode Selector */}
      <div className="flex rounded-2xl border border-zinc-200 bg-white p-1.5 dark:border-zinc-800 dark:bg-zinc-900">
        <button
          onClick={() => {
            setMode("encrypt");
            setDownloadUrl(null);
          }}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold transition ${
            mode === "encrypt"
              ? "bg-emerald-600 text-white shadow-sm"
              : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          }`}
        >
          <Lock className="h-4 w-4" />
          <span>{language === "it" ? "Proteggi PDF (Cifra con Password)" : "Encrypt PDF (Lock)"}</span>
        </button>
        <button
          onClick={() => {
            setMode("decrypt");
            setDownloadUrl(null);
          }}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold transition ${
            mode === "decrypt"
              ? "bg-emerald-600 text-white shadow-sm"
              : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          }`}
        >
          <Unlock className="h-4 w-4" />
          <span>{language === "it" ? "Sblocca PDF (Decifra)" : "Decrypt PDF (Unlock)"}</span>
        </button>
      </div>

      {!downloadUrl ? (
        <>
          <Dropzone
            onFilesSelected={handleFilesSelected}
            accept={mode === "encrypt" ? "application/pdf,.pdf" : "*/*"}
            helperText={
              mode === "encrypt"
                ? (language === "it" ? "Trascina qui il documento PDF da proteggere con password" : "Drag & drop PDF document to encrypt")
                : (language === "it" ? "Trascina qui il file cifrato (.protected o .pdf) da sbloccare" : "Drag & drop encrypted file to unlock")
            }
          />

          {file && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">{file.name}</h3>
                  <p className="text-xs text-zinc-500">{formatBytes(file.size)}</p>
                </div>
                <button
                  onClick={resetAll}
                  className="text-xs text-red-600 hover:underline dark:text-red-400"
                >
                  {language === "it" ? "Rimuovi" : "Remove"}
                </button>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  {language === "it" ? "Password di sicurezza (AES-256)" : "Security Password (AES-256)"}
                </label>
                <div className="mt-2 flex items-center gap-2">
                  <div className="relative flex-1">
                    <KeyRound className="absolute left-3.5 top-3 h-4 w-4 text-zinc-400" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={
                        mode === "encrypt"
                          ? (language === "it" ? "Crea una password sicura..." : "Create a strong password...")
                          : (language === "it" ? "Inserisci la password di sblocco..." : "Enter decryption password...")
                      }
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-2.5 pl-10 pr-4 text-xs font-medium text-zinc-800 outline-none transition focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                    />
                  </div>

                  <button
                    onClick={handleProcess}
                    disabled={processing || !password}
                    className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700 disabled:opacity-50"
                  >
                    {processing ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : mode === "encrypt" ? (
                      <Lock className="h-4 w-4" />
                    ) : (
                      <Unlock className="h-4 w-4" />
                    )}
                    <span>
                      {processing
                        ? (language === "it" ? "Elaborazione..." : "Processing...")
                        : mode === "encrypt"
                        ? (language === "it" ? "Cifra Documento" : "Encrypt Document")
                        : (language === "it" ? "Sblocca Documento" : "Unlock Document")}
                    </span>
                  </button>
                </div>
              </div>

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
                  {error}
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-100 pb-6 dark:border-zinc-800">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">{downloadName}</h3>
                <p className="text-xs text-zinc-500">
                  {mode === "encrypt"
                    ? (language === "it" ? "Documento protetto con cifratura militare AES-256-GCM" : "Protected with AES-256-GCM encryption")
                    : (language === "it" ? "Documento decifrato con successo" : "Decrypted successfully")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={downloadUrl}
                download={downloadName}
                className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700"
              >
                <Download className="h-4 w-4" />
                <span>{language === "it" ? "Scarica Risultato" : "Download Result"}</span>
              </a>
              <button
                onClick={resetAll}
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              >
                {language === "it" ? "Altro File" : "Process Another"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
