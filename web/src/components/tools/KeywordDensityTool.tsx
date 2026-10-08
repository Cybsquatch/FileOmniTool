"use client";

import React, { useState, useMemo } from "react";
import { Search, BarChart3, Filter } from "lucide-react";

const ITALIAN_STOPWORDS = new Set([
  "il", "lo", "la", "i", "gli", "le", "un", "uno", "una", "di", "a", "da", "in", "con", "su",
  "per", "tra", "fra", "e", "ed", "o", "ma", "se", "perché", "che", "chi", "cui", "quale",
  "non", "si", "ci", "vi", "ne", "del", "dello", "della", "dei", "degli", "delle", "al", "allo",
  "alla", "ai", "agli", "alle", "dal", "dallo", "dalla", "dai", "dagli", "dalle", "nel", "nello",
  "nella", "nei", "negli", "nelle", "sul", "sullo", "sulla", "sui", "sugli", "sulle", "è", "ha",
  "sono", "hanno", "come", "anche", "più", "questo", "questa", "questi", "queste", "quello", "quella"
]);

const ENGLISH_STOPWORDS = new Set([
  "the", "be", "to", "of", "and", "a", "in", "that", "have", "i", "it", "for", "not", "on",
  "with", "he", "as", "you", "do", "at", "this", "but", "his", "by", "from", "they", "we",
  "say", "her", "she", "or", "an", "will", "my", "one", "all", "would", "there", "their", "what"
]);

interface KeywordItem {
  phrase: string;
  count: number;
  density: number;
}

export const KeywordDensityTool: React.FC = () => {
  const [text, setText] = useState<string>(
    "La SEO on-page è fondamentale per posizionarsi primi su Google. Conoscere la densità delle parole chiave ti permette di evitare il keyword stuffing e ottimizzare i tuoi articoli per i motori di ricerca. FileOmniTool offre i migliori strumenti gratuiti per analizzare testo, contenuti e parole chiave direttamente nel tuo browser senza installare alcun programma."
  );
  const [filterStopwords, setFilterStopwords] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<1 | 2 | 3>(1);

  const analysis = useMemo(() => {
    if (!text.trim()) {
      return { totalWords: 0, uniqueWords: 0, oneGrams: [], twoGrams: [], threeGrams: [] };
    }

    const cleanTokens = text
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'«»]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 1 && !/^\d+$/.test(w));

    const totalWords = cleanTokens.length;
    if (totalWords === 0) {
      return { totalWords: 0, uniqueWords: 0, oneGrams: [], twoGrams: [], threeGrams: [] };
    }

    const countMap = (ngrams: string[]): KeywordItem[] => {
      const map = new Map<string, number>();
      ngrams.forEach((item) => {
        map.set(item, (map.get(item) || 0) + 1);
      });

      return Array.from(map.entries())
        .map(([phrase, count]) => ({
          phrase,
          count,
          density: parseFloat(((count / totalWords) * 100).toFixed(2)),
        }))
        .sort((a, b) => b.count - a.count || a.phrase.localeCompare(b.phrase))
        .slice(0, 20);
    };

    // 1-grams
    const tokensFor1 = filterStopwords
      ? cleanTokens.filter((w) => !ITALIAN_STOPWORDS.has(w) && !ENGLISH_STOPWORDS.has(w))
      : cleanTokens;
    const oneGrams = countMap(tokensFor1);

    // 2-grams
    const pairs: string[] = [];
    for (let i = 0; i < cleanTokens.length - 1; i++) {
      const w1 = cleanTokens[i];
      const w2 = cleanTokens[i + 1];
      if (filterStopwords && (ITALIAN_STOPWORDS.has(w1) && ITALIAN_STOPWORDS.has(w2))) continue;
      pairs.push(`${w1} ${w2}`);
    }
    const twoGrams = countMap(pairs);

    // 3-grams
    const triplets: string[] = [];
    for (let i = 0; i < cleanTokens.length - 2; i++) {
      const w1 = cleanTokens[i];
      const w2 = cleanTokens[i + 1];
      const w3 = cleanTokens[i + 2];
      triplets.push(`${w1} ${w2} ${w3}`);
    }
    const threeGrams = countMap(triplets);

    return {
      totalWords,
      uniqueWords: new Set(cleanTokens).size,
      oneGrams,
      twoGrams,
      threeGrams,
    };
  }, [text, filterStopwords]);

  const activeList =
    activeTab === 1 ? analysis.oneGrams : activeTab === 2 ? analysis.twoGrams : analysis.threeGrams;

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5 text-emerald-600" />
            <h3 className="font-semibold text-zinc-900 dark:text-white">Analisi Densità Parole Chiave SEO</h3>
          </div>

          <label className="flex cursor-pointer items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
            <input
              type="checkbox"
              checked={filterStopwords}
              onChange={(e) => setFilterStopwords(e.target.checked)}
              className="rounded text-emerald-600 focus:ring-emerald-500"
            />
            <span>Filtra Stopwords (articoli, preposizioni, congiunzioni)</span>
          </label>
        </div>

        {/* Text Input */}
        <div className="mt-4">
          <textarea
            rows={8}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Incolla qui il tuo testo o articolo per calcolare le metriche SEO..."
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-sans text-xs leading-relaxed text-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
          />
        </div>

        {/* Overview Stats */}
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-3 text-center dark:border-zinc-800 dark:bg-zinc-950">
            <div className="text-xl font-black text-zinc-900 dark:text-white">{analysis.totalWords}</div>
            <div className="text-[11px] text-zinc-500">Parole Totali</div>
          </div>
          <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-3 text-center dark:border-zinc-800 dark:bg-zinc-950">
            <div className="text-xl font-black text-zinc-900 dark:text-white">{analysis.uniqueWords}</div>
            <div className="text-[11px] text-zinc-500">Parole Univoche</div>
          </div>
          <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-3 text-center dark:border-zinc-800 dark:bg-zinc-950">
            <div className="text-xl font-black text-emerald-600">
              {Math.max(1, Math.round(analysis.totalWords / 200))} min
            </div>
            <div className="text-[11px] text-zinc-500">Tempo di Lettura</div>
          </div>
          <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-3 text-center dark:border-zinc-800 dark:bg-zinc-950">
            <div className="text-xl font-black text-purple-600">
              {analysis.totalWords > 0 ? ((analysis.uniqueWords / analysis.totalWords) * 100).toFixed(0) + "%" : "0%"}
            </div>
            <div className="text-[11px] text-zinc-500">Varietà Lessicale</div>
          </div>
        </div>

        {/* N-Gram Tabs */}
        <div className="mt-6">
          <div className="flex border-b border-zinc-200 dark:border-zinc-800">
            {[
              { id: 1, label: "Parole Singole (1-Gram)" },
              { id: 2, label: "Coppie di Parole (2-Gram)" },
              { id: 3, label: "Frasi di 3 Parole (3-Gram)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 1 | 2 | 3)}
                className={`border-b-2 px-4 py-2.5 text-xs font-semibold transition ${
                  activeTab === tab.id
                    ? "border-emerald-600 text-emerald-600 dark:text-emerald-400"
                    : "border-transparent text-zinc-500 hover:text-zinc-700 dark:text-zinc-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-zinc-200 text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                  <th className="pb-2 font-semibold">Parola Chiave / Frase</th>
                  <th className="pb-2 text-right font-semibold">Occorrenze</th>
                  <th className="pb-2 text-right font-semibold">Densità %</th>
                  <th className="pb-2 text-right font-semibold">Valutazione SEO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/60">
                {activeList.map((item, idx) => {
                  let badge = (
                    <span className="rounded bg-emerald-100 px-2 py-0.5 font-semibold text-[10px] text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      Ottimale (1-3%)
                    </span>
                  );
                  if (item.density > 3.5) {
                    badge = (
                      <span className="rounded bg-rose-100 px-2 py-0.5 font-semibold text-[10px] text-rose-800 dark:bg-rose-950 dark:text-rose-300">
                        Eccessiva (&gt;3.5%)
                      </span>
                    );
                  } else if (item.density < 1) {
                    badge = (
                      <span className="rounded bg-zinc-100 px-2 py-0.5 font-semibold text-[10px] text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                        Bassa (&lt;1%)
                      </span>
                    );
                  }

                  return (
                    <tr key={idx} className="hover:bg-zinc-50/60 dark:hover:bg-zinc-950/40">
                      <td className="py-2.5 font-medium text-zinc-900 dark:text-zinc-100">{item.phrase}</td>
                      <td className="py-2.5 text-right font-mono font-semibold text-zinc-700 dark:text-zinc-300">
                        {item.count}
                      </td>
                      <td className="py-2.5 text-right font-mono font-bold text-zinc-900 dark:text-white">
                        {item.density}%
                      </td>
                      <td className="py-2.5 text-right">{badge}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
