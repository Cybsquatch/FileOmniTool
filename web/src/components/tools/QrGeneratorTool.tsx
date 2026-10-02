"use client";

import React, { useState, useEffect } from "react";
import { generateQrDataUrl } from "@/lib/client-engines/qr-engine";
import { AdBanner } from "../ads/AdBanner";
import { QrCode, Download, Copy, Check, Sparkles } from "lucide-react";

export const QrGeneratorTool: React.FC = () => {
  const [text, setText] = useState("https://fileomnitool.com");
  const [darkColor, setDarkColor] = useState("#000000");
  const [errorLevel, setErrorLevel] = useState<"L" | "M" | "Q" | "H">("M");
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!text.trim()) {
      setQrDataUrl("");
      return;
    }
    generateQrDataUrl(text, {
      width: 500,
      margin: 2,
      errorCorrectionLevel: errorLevel,
      color: { dark: darkColor, light: "#ffffff" },
    }).then(setQrDataUrl).catch(() => setQrDataUrl(""));
  }, [text, darkColor, errorLevel]);

  const copyToClipboard = async () => {
    if (!qrDataUrl) return;
    try {
      const res = await fetch(qrDataUrl);
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob })
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Controls */}
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                URL o Testo del QR Code:
              </label>
              <textarea
                rows={4}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Incolla un link (https://...), testo, messaggio o coordinate Wi-Fi..."
                className="mt-1.5 w-full rounded-xl border border-zinc-300 bg-zinc-50 p-3 text-xs text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Colore del Codice:
              </label>
              <div className="mt-2 flex items-center gap-3">
                {[
                  { color: "#000000", label: "Nero" },
                  { color: "#059669", label: "Smeraldo" },
                  { color: "#2563eb", label: "Blu" },
                  { color: "#7c3aed", label: "Viola" },
                ].map((c) => (
                  <button
                    key={c.color}
                    type="button"
                    onClick={() => setDarkColor(c.color)}
                    style={{ backgroundColor: c.color }}
                    className={`h-7 w-7 rounded-full shadow-sm transition transform hover:scale-110 ${
                      darkColor === c.color ? "ring-2 ring-emerald-500 ring-offset-2" : ""
                    }`}
                    title={c.label}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Livello Correzione Errori:
              </label>
              <div className="mt-2 grid grid-cols-4 gap-2">
                {[
                  { lvl: "L", label: "L (7%)" },
                  { lvl: "M", label: "M (15%)" },
                  { lvl: "Q", label: "Q (25%)" },
                  { lvl: "H", label: "H (30%)" },
                ].map((item) => (
                  <button
                    key={item.lvl}
                    type="button"
                    onClick={() => setErrorLevel(item.lvl as "L" | "M" | "Q" | "H")}
                    className={`rounded-xl border py-1.5 text-xs font-semibold transition ${
                      errorLevel === item.lvl
                        ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:border-emerald-400 dark:bg-emerald-950/60 dark:text-emerald-300"
                        : "border-zinc-200 bg-zinc-50/50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* QR Preview & Actions */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-100 bg-zinc-50/70 p-6 text-center dark:border-zinc-800 dark:bg-zinc-950/40">
            {qrDataUrl ? (
              <>
                <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-md dark:border-zinc-700 dark:bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={qrDataUrl} alt="QR Code Generato" className="h-48 w-48 object-contain" />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href={qrDataUrl}
                    download="qrcode_fileomnitool.png"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 active:scale-95"
                  >
                    <Download className="h-4 w-4" />
                    <span>Scarica PNG (HD)</span>
                  </a>

                  <button
                    onClick={copyToClipboard}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-xs font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-bold">Copiato!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copia Immagine</span>
                      </>
                    )}
                  </button>
                </div>
              </>
            ) : (
              <div className="text-zinc-400">
                <QrCode className="mx-auto h-12 w-12 text-zinc-300" />
                <p className="mt-2 text-xs">Inserisci un testo o un URL per vedere il QR code</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <AdBanner slot="action-card" />
    </div>
  );
};
