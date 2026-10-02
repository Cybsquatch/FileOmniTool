"use client";

import React, { useState, useEffect, useCallback } from "react";
import { AdBanner } from "../ads/AdBanner";
import { KeyRound, Copy, Check, RefreshCw, ShieldCheck, ShieldAlert, Sparkles } from "lucide-react";

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";
const AMBIGUOUS = "0O1lI";

const PASSPHRASE_WORDS = [
  "albero", "pietra", "fiume", "stella", "castello", "drago", "vento", "luce",
  "ombra", "strada", "orizzonte", "tempo", "falco", "onda", "tempesta", "fuoco",
  "fiore", "notte", "giorno", "bosco", "pianeta", "isola", "viaggio", "silenzio",
  "nuvola", "tuono", "vetta", "abisso", "musica", "poesia", "cristallo", "cometa"
];

export const PasswordGeneratorTool: React.FC = () => {
  const [mode, setMode] = useState<"random" | "passphrase">("random");
  const [length, setLength] = useState(16);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [excludeAmbiguous, setExcludeAmbiguous] = useState(true);
  const [wordCount, setWordCount] = useState(4);
  const [separator, setSeparator] = useState("-");

  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    if (mode === "passphrase") {
      const words: string[] = [];
      const array = new Uint32Array(wordCount);
      window.crypto.getRandomValues(array);
      for (let i = 0; i < wordCount; i++) {
        words.push(PASSPHRASE_WORDS[array[i] % PASSPHRASE_WORDS.length]);
      }
      setPassword(words.join(separator));
      return;
    }

    let charset = "";
    if (includeUpper) charset += UPPERCASE;
    if (includeLower) charset += LOWERCASE;
    if (includeNumbers) charset += NUMBERS;
    if (includeSymbols) charset += SYMBOLS;

    if (excludeAmbiguous) {
      charset = charset.split("").filter((c) => !AMBIGUOUS.includes(c)).join("");
    }

    if (!charset) {
      charset = LOWERCASE;
    }

    const randomValues = new Uint32Array(length);
    window.crypto.getRandomValues(randomValues);

    let res = "";
    for (let i = 0; i < length; i++) {
      res += charset[randomValues[i] % charset.length];
    }

    setPassword(res);
  }, [mode, length, includeUpper, includeLower, includeNumbers, includeSymbols, excludeAmbiguous, wordCount, separator]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Calcolo entropia (Shannon / Bit entropy)
  const calculateEntropy = () => {
    if (mode === "passphrase") {
      // 32 parole nel dizionario = 5 bit per parola
      return wordCount * Math.log2(PASSPHRASE_WORDS.length);
    }
    let poolSize = 0;
    if (includeUpper) poolSize += 26;
    if (includeLower) poolSize += 26;
    if (includeNumbers) poolSize += 10;
    if (includeSymbols) poolSize += 26;
    if (excludeAmbiguous) poolSize -= 5;
    poolSize = Math.max(2, poolSize);

    return Math.round(length * Math.log2(poolSize));
  };

  const entropy = calculateEntropy();

  const getStrengthLabel = (bits: number) => {
    if (bits < 45) return { label: "Debole", color: "text-red-500", bg: "bg-red-500", pct: 25 };
    if (bits < 65) return { label: "Media", color: "text-amber-500", bg: "bg-amber-500", pct: 50 };
    if (bits < 85) return { label: "Forte", color: "text-emerald-500", bg: "bg-emerald-500", pct: 75 };
    return { label: "Inviolabile (Sicurezza Militare)", color: "text-emerald-600", bg: "bg-emerald-600", pct: 100 };
  };

  const strength = getStrengthLabel(entropy);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex border-b border-zinc-100 pb-4 dark:border-zinc-800">
          <div className="flex gap-2">
            <button
              onClick={() => setMode("random")}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
                mode === "random"
                  ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              Password Casuale (Caratteri)
            </button>
            <button
              onClick={() => setMode("passphrase")}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
                mode === "passphrase"
                  ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              Passphrase (Parole Memorizzabili)
            </button>
          </div>
        </div>

        {/* Display Password Banner */}
        <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="min-w-0 flex-1">
            <p className="font-mono text-base font-bold tracking-wider text-zinc-900 break-all select-all dark:text-white">
              {password}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={generatePassword}
              title="Rigenera"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
            <button
              onClick={copyPassword}
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-700 active:scale-95"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              <span>{copied ? "Copiata!" : "Copia Password"}</span>
            </button>
          </div>
        </div>

        {/* Entropy Meter */}
        <div className="mt-4 space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-zinc-500">
              Forza: <strong className={strength.color}>{strength.label}</strong> ({entropy} bit di entropia)
            </span>
            <span className="text-zinc-400">Generatore Crittografico Hardware WebCrypto</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
            <div
              className={`h-full transition-all duration-300 ${strength.bg}`}
              style={{ width: `${strength.pct}%` }}
            />
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 space-y-4">
          {mode === "random" ? (
            <>
              <div>
                <div className="flex justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  <span>Lunghezza Caratteri:</span>
                  <span className="font-bold text-emerald-600">{length}</span>
                </div>
                <input
                  type="range"
                  min={8}
                  max={64}
                  value={length}
                  onChange={(e) => setLength(parseInt(e.target.value))}
                  className="mt-2 w-full accent-emerald-600"
                />
              </div>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  <input
                    type="checkbox"
                    checked={includeUpper}
                    onChange={(e) => setIncludeUpper(e.target.checked)}
                    className="rounded text-emerald-600"
                  />
                  <span>Lettere Maiuscole (A-Z)</span>
                </label>

                <label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  <input
                    type="checkbox"
                    checked={includeLower}
                    onChange={(e) => setIncludeLower(e.target.checked)}
                    className="rounded text-emerald-600"
                  />
                  <span>Lettere Minuscole (a-z)</span>
                </label>

                <label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  <input
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                    className="rounded text-emerald-600"
                  />
                  <span>Numeri (0-9)</span>
                </label>

                <label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  <input
                    type="checkbox"
                    checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                    className="rounded text-emerald-600"
                  />
                  <span>Simboli Speciali (!@#$%...)</span>
                </label>

                <label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 sm:col-span-2">
                  <input
                    type="checkbox"
                    checked={excludeAmbiguous}
                    onChange={(e) => setExcludeAmbiguous(e.target.checked)}
                    className="rounded text-emerald-600"
                  />
                  <span>Escludi caratteri ambigui simili (es. 0, O, l, 1, I)</span>
                </label>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  <span>Numero di Parole:</span>
                  <span className="font-bold text-emerald-600">{wordCount}</span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={8}
                  value={wordCount}
                  onChange={(e) => setWordCount(parseInt(e.target.value))}
                  className="mt-2 w-full accent-emerald-600"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Separatore tra parole:
                </label>
                <div className="mt-1.5 flex gap-2">
                  {["-", "_", ".", " "].map((sep) => (
                    <button
                      key={sep}
                      onClick={() => setSeparator(sep)}
                      className={`rounded-lg px-3 py-1 font-mono text-xs font-bold transition ${
                        separator === sep
                          ? "bg-emerald-600 text-white"
                          : "border border-zinc-200 bg-zinc-50 text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      }`}
                    >
                      {sep === " " ? "Spazio" : sep}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <AdBanner slot="action-card" />
    </div>
  );
};
