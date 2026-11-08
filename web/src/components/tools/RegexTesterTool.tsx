"use client";

import React, { useState, useMemo } from "react";
import { Sparkles, Check, AlertCircle } from "lucide-react";

interface RegexPreset {
  name: string;
  pattern: string;
  flags: string;
  sample: string;
}

const PRESETS: RegexPreset[] = [
  {
    name: "Email",
    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
    flags: "g",
    sample: "Contattaci a info@esempio.it oppure supporto@google.com per domande.",
  },
  {
    name: "Indirizzo URL",
    pattern: "https?:\\/\\/[\\w\\.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!$&'()*+,;=.]+",
    flags: "g",
    sample: "Visita https://www.fileomnitool.com o https://github.com/cybsquatch.",
  },
  {
    name: "Indirizzo IPv4",
    pattern: "\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\b",
    flags: "g",
    sample: "Router locale: 192.168.1.1, server DNS: 8.8.8.8 e 1.1.1.1.",
  },
  {
    name: "Data GG/MM/AAAA",
    pattern: "\\b(0[1-9]|[12][0-9]|3[01])\\/(0[1-9]|1[0-2])\\/([0-9]{4})\\b",
    flags: "g",
    sample: "L'evento si terrà il 15/10/2026 e terminerà il 20/10/2026.",
  },
  {
    name: "Colore HEX",
    pattern: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})\\b",
    flags: "g",
    sample: "Colore primario #10b981, sfondo #ffffff e testo scuro #18181b.",
  },
];

export const RegexTesterTool: React.FC = () => {
  const [pattern, setPattern] = useState<string>("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}");
  const [flagG, setFlagG] = useState(true);
  const [flagI, setFlagI] = useState(false);
  const [flagM, setFlagM] = useState(false);
  const [flagS, setFlagS] = useState(false);

  const [testString, setTestString] = useState<string>(
    "Scrivi a vendite@esempio.it per supporto commerciale oppure a privacy@azienda.it per questioni legali."
  );

  const flags = `${flagG ? "g" : ""}${flagI ? "i" : ""}${flagM ? "m" : ""}${flagS ? "s" : ""}`;

  const { matches, error, highlightedHtml } = useMemo(() => {
    if (!pattern) return { matches: [], error: null, highlightedHtml: testString };

    try {
      const regex = new RegExp(pattern, flags);
      const allMatches: { text: string; index: number; groups: string[] }[] = [];

      if (flagG) {
        let m: RegExpExecArray | null;
        let lastIdx = -1;
        while ((m = regex.exec(testString)) !== null) {
          if (m.index === lastIdx) break; // Avoid infinite loop on zero-width match
          lastIdx = m.index;
          allMatches.push({
            text: m[0],
            index: m.index,
            groups: m.slice(1),
          });
        }
      } else {
        const m = regex.exec(testString);
        if (m) {
          allMatches.push({
            text: m[0],
            index: m.index,
            groups: m.slice(1),
          });
        }
      }

      // Highlighted HTML
      let html = "";
      let lastIndex = 0;
      allMatches.forEach((match) => {
        const before = testString.slice(lastIndex, match.index);
        html += escapeHtml(before);
        html += `<mark class="bg-emerald-300 text-emerald-950 font-semibold px-1 rounded dark:bg-emerald-500 dark:text-zinc-950">${escapeHtml(
          match.text
        )}</mark>`;
        lastIndex = match.index + match.text.length;
      });
      html += escapeHtml(testString.slice(lastIndex));

      return { matches: allMatches, error: null, highlightedHtml: html };
    } catch (err: unknown) {
      return {
        matches: [],
        error: err instanceof Error ? err.message : "Sintassi espressione regolare non valida.",
        highlightedHtml: escapeHtml(testString),
      };
    }
  }, [pattern, flags, testString]);

  function escapeHtml(str: string): string {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/\n/g, "<br/>");
  }

  const applyPreset = (preset: RegexPreset) => {
    setPattern(preset.pattern);
    setTestString(preset.sample);
    setFlagG(preset.flags.includes("g"));
    setFlagI(preset.flags.includes("i"));
    setFlagM(preset.flags.includes("m"));
    setFlagS(preset.flags.includes("s"));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        {/* Presets */}
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Pattern Comuni Preconfigurati
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button
                key={p.name}
                type="button"
                onClick={() => applyPreset(p)}
                className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Regex Input Bar */}
        <div className="mt-6">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Espressione Regolare (RegEx)
          </label>
          <div className="mt-2 flex items-center rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 font-mono text-sm dark:border-zinc-800 dark:bg-zinc-950">
            <span className="text-zinc-400">/</span>
            <input
              type="text"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder="Inserisci il tuo pattern..."
              className="flex-1 bg-transparent px-2 text-zinc-900 focus:outline-none dark:text-white"
            />
            <span className="text-zinc-400">/{flags}</span>
          </div>
        </div>

        {/* Flag toggles */}
        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs">
          <span className="font-semibold text-zinc-500">Flag:</span>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={flagG}
              onChange={(e) => setFlagG(e.target.checked)}
              className="rounded text-emerald-600"
            />
            <span>Global (g)</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={flagI}
              onChange={(e) => setFlagI(e.target.checked)}
              className="rounded text-emerald-600"
            />
            <span>Case Insensitive (i)</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={flagM}
              onChange={(e) => setFlagM(e.target.checked)}
              className="rounded text-emerald-600"
            />
            <span>Multiline (m)</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={flagS}
              onChange={(e) => setFlagS(e.target.checked)}
              className="rounded text-emerald-600"
            />
            <span>DotAll (s)</span>
          </label>
        </div>

        {error && (
          <div className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 p-3 text-xs text-red-600 dark:bg-red-950/50 dark:text-red-400">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Test String & Highlight Output */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Testo di Test
            </label>
            <textarea
              rows={10}
              value={testString}
              onChange={(e) => setTestString(e.target.value)}
              className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Evidenziazione Corrispondenze
              </label>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                {matches.length} {matches.length === 1 ? "match trovato" : "match trovati"}
              </span>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: highlightedHtml }}
              className="mt-2 min-h-[160px] max-h-60 overflow-y-auto rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
            />
          </div>
        </div>

        {/* Matches table */}
        {matches.length > 0 && (
          <div className="mt-6 border-t border-zinc-100 pt-6 dark:border-zinc-800">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Dettaglio Gruppi e Corrispondenze
            </div>
            <div className="mt-3 max-h-48 overflow-y-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                  <tr>
                    <th className="p-2.5 font-semibold">#</th>
                    <th className="p-2.5 font-semibold">Testo Match</th>
                    <th className="p-2.5 font-semibold">Posizione</th>
                    <th className="p-2.5 font-semibold">Gruppi Catturati</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 font-mono">
                  {matches.map((m, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-950">
                      <td className="p-2.5 text-zinc-400">{idx + 1}</td>
                      <td className="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">{m.text}</td>
                      <td className="p-2.5 text-zinc-500">Carattere #{m.index}</td>
                      <td className="p-2.5 text-zinc-600 dark:text-zinc-400">
                        {m.groups.length > 0 ? m.groups.join(", ") : "Nessun gruppo"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
