"use client";

import React, { useState } from "react";
import { AdBanner } from "../ads/AdBanner";
import { AlignLeft, Copy, Check, RefreshCw } from "lucide-react";

const LOREM_WORDS = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo",
  "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate",
  "velit", "esse", "cillum", "fugiat", "nulla", "pariatur", "excepteur", "sint",
  "occaecat", "cupidatat", "non", "proident", "sunt", "culpa", "qui", "officia",
  "deserunt", "mollit", "anim", "id", "est", "laborum"
];

export const LoremGeneratorTool: React.FC = () => {
  const [count, setCount] = useState(3);
  const [type, setType] = useState<"paragraphs" | "sentences" | "words">("paragraphs");
  const [startWithLorem, setStartWithLorem] = useState(true);
  const [htmlTags, setHtmlTags] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateSentence = (): string => {
    const len = Math.floor(Math.random() * 10) + 8;
    const words: string[] = [];
    for (let i = 0; i < len; i++) {
      const idx = Math.floor(Math.random() * LOREM_WORDS.length);
      words.push(LOREM_WORDS[idx]);
    }
    const sentence = words.join(" ");
    return sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";
  };

  const generateParagraph = (): string => {
    const sentenceCount = Math.floor(Math.random() * 4) + 4;
    const sentences: string[] = [];
    for (let i = 0; i < sentenceCount; i++) {
      sentences.push(generateSentence());
    }
    return sentences.join(" ");
  };

  const generateText = (): string => {
    let result = "";

    if (type === "words") {
      const words: string[] = [];
      if (startWithLorem && count >= 5) {
        words.push("Lorem", "ipsum", "dolor", "sit", "amet");
      }
      while (words.length < count) {
        const idx = Math.floor(Math.random() * LOREM_WORDS.length);
        words.push(LOREM_WORDS[idx]);
      }
      result = words.slice(0, count).join(" ");
    } else if (type === "sentences") {
      const sentences: string[] = [];
      if (startWithLorem) {
        sentences.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
      }
      while (sentences.length < count) {
        sentences.push(generateSentence());
      }
      result = sentences.slice(0, count).join(" ");
    } else {
      // paragraphs
      const paragraphs: string[] = [];
      if (startWithLorem) {
        paragraphs.push(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        );
      }
      while (paragraphs.length < count) {
        paragraphs.push(generateParagraph());
      }
      const paras = paragraphs.slice(0, count);
      if (htmlTags) {
        result = paras.map((p) => `<p>${p}</p>`).join("\n\n");
      } else {
        result = paras.join("\n\n");
      }
    }

    return result;
  };

  const [output, setOutput] = useState(generateText);

  const handleRegenerate = () => {
    setOutput(generateText());
  };

  const copyText = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const wordsCount = output.trim() ? output.trim().split(/\s+/).length : 0;
  const charsCount = output.length;

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-100 text-teal-600 dark:bg-teal-950 dark:text-teal-400">
              <AlignLeft className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              {wordsCount} parole • {charsCount} caratteri
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRegenerate}
              className="flex items-center gap-1 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <RefreshCw className="h-3.5 w-3.5 text-zinc-400" />
              <span>Rigenera</span>
            </button>
            <button
              onClick={copyText}
              className="flex items-center gap-1 rounded-xl bg-teal-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-teal-700 active:scale-95"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? "Copiato!" : "Copia Testo"}</span>
            </button>
          </div>
        </div>

        {/* Options Bar */}
        <div className="mt-4 flex flex-wrap items-center gap-4 rounded-xl bg-zinc-50 p-3 text-xs dark:bg-zinc-800/60">
          <div className="flex items-center gap-2">
            <label className="font-semibold text-zinc-700 dark:text-zinc-300">Quantità:</label>
            <input
              type="number"
              min={1}
              max={50}
              value={count}
              onChange={(e) => setCount(Math.max(1, Math.min(50, parseInt(e.target.value) || 1)))}
              className="w-16 rounded-lg border border-zinc-300 bg-white p-1 text-center font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            />
          </div>

          <div className="flex items-center gap-1.5">
            {(["paragraphs", "sentences", "words"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`rounded-lg px-2.5 py-1 font-semibold transition ${
                  type === t
                    ? "bg-teal-600 text-white shadow-sm"
                    : "bg-white text-zinc-600 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-300"
                }`}
              >
                {t === "paragraphs" ? "Paragrafi" : t === "sentences" ? "Frasi" : "Parole"}
              </button>
            ))}
          </div>

          <label className="flex cursor-pointer items-center gap-1.5 text-zinc-600 dark:text-zinc-300">
            <input
              type="checkbox"
              checked={startWithLorem}
              onChange={(e) => setStartWithLorem(e.target.checked)}
              className="rounded text-teal-600"
            />
            <span>Inizia con &quot;Lorem ipsum...&quot;</span>
          </label>

          {type === "paragraphs" && (
            <label className="flex cursor-pointer items-center gap-1.5 text-zinc-600 dark:text-zinc-300">
              <input
                type="checkbox"
                checked={htmlTags}
                onChange={(e) => setHtmlTags(e.target.checked)}
                className="rounded text-teal-600"
              />
              <span>Includi tag &lt;p&gt;</span>
            </label>
          )}

          <button
            onClick={handleRegenerate}
            className="ml-auto rounded-lg bg-zinc-200 px-3 py-1 font-semibold text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200"
          >
            Aggiorna
          </button>
        </div>

        {/* Output Textarea */}
        <div className="mt-4">
          <textarea
            rows={10}
            readOnly
            value={output}
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-xs leading-relaxed text-zinc-800 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
          />
        </div>
      </div>

      <AdBanner slot="action-card" />
    </div>
  );
};
