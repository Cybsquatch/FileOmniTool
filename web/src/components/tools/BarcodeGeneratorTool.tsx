"use client";

import React, { useState, useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";
import { Download, Copy, Check, ShieldCheck, Sparkles, Barcode as BarcodeIcon } from "lucide-react";

export const BarcodeGeneratorTool: React.FC = () => {
  const [value, setValue] = useState("FILEOMNITOOL-2026");
  const [format, setFormat] = useState<"CODE128" | "EAN13" | "EAN8" | "UPC" | "CODE39" | "ITF14">("CODE128");
  const [lineColor, setLineColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [barWidth, setBarWidth] = useState(2);
  const [barHeight, setBarHeight] = useState(100);
  const [displayValue, setDisplayValue] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    setError(null);

    if (!value.trim()) {
      return;
    }

    try {
      JsBarcode(svgRef.current, value, {
        format,
        lineColor,
        background: bgColor,
        width: barWidth,
        height: barHeight,
        displayValue,
        fontSize: 16,
        margin: 10,
        valid: (valid) => {
          if (!valid) {
            setError(`Il valore inserito non è valido per il formato ${format}.`);
          }
        },
      });
    } catch (err: any) {
      setError(err?.message || `Valore non valido per il formato ${format}`);
    }
  }, [value, format, lineColor, bgColor, barWidth, barHeight, displayValue]);

  // Download come SVG
  const downloadSvg = () => {
    if (!svgRef.current) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svgRef.current);
    const blob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `barcode_${format}_${value}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Download come PNG ad alta risoluzione
  const downloadPng = () => {
    if (!svgRef.current) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svgRef.current);
    const svgBlob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width * 2; // High-res 2x
      canvas.height = img.height * 2;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const pngUrl = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = pngUrl;
        a.download = `barcode_${format}_${value}.png`;
        a.click();
      }
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  const copyImage = async () => {
    if (!svgRef.current) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svgRef.current);
    const svgBlob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = async () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(async (blob) => {
          if (blob && navigator.clipboard && window.ClipboardItem) {
            await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }
        });
      }
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Banner Privacy */}
      <div className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-emerald-800 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300">
        <ShieldCheck className="h-6 w-6 shrink-0 text-emerald-600 dark:text-emerald-400" />
        <div className="text-sm">
          <strong>Generatore 100% Client-Side:</strong> I codici a barre vengono disegnati in vettoriale direttamente nel tuo browser. Nessun codice viene registrato o tracciato.
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Controlli a Sinistra */}
        <div className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <BarcodeIcon className="h-5 w-5 text-emerald-600" /> Parametri Codice a Barre
          </h2>

          {/* Testo / Valore */}
          <div>
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Contenuto / Codice:
            </label>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Inserisci testo o numeri"
              className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm font-mono text-zinc-900 outline-none focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
            />
          </div>

          {/* Formato */}
          <div>
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Standard / Simbologia:
            </label>
            <select
              value={format}
              onChange={(e) => {
                const f = e.target.value as any;
                setFormat(f);
                if (f === "EAN13" && !/^\d{12,13}$/.test(value)) {
                  setValue("1234567890128");
                } else if (f === "EAN8" && !/^\d{7,8}$/.test(value)) {
                  setValue("12345670");
                } else if (f === "UPC" && !/^\d{11,12}$/.test(value)) {
                  setValue("123456789012");
                }
              }}
              className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
            >
              <option value="CODE128">Code 128 (Universale, Lettere + Numeri)</option>
              <option value="EAN13">EAN-13 (Prodotti Europa / Libri - 13 cifre)</option>
              <option value="EAN8">EAN-8 (Piccoli imballaggi - 8 cifre)</option>
              <option value="UPC">UPC-A (Prodotti USA / Canada - 12 cifre)</option>
              <option value="CODE39">Code 39 (Logistica e Magazzino)</option>
              <option value="ITF14">ITF-14 (Scatole Master / Spedizioni)</option>
            </select>
          </div>

          {/* Dimensioni Barre */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                <span>Larghezza Barre:</span>
                <span>{barWidth}px</span>
              </div>
              <input
                type="range"
                min="1"
                max="4"
                value={barWidth}
                onChange={(e) => setBarWidth(Number(e.target.value))}
                className="mt-2 w-full accent-emerald-600"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                <span>Altezza Barre:</span>
                <span>{barHeight}px</span>
              </div>
              <input
                type="range"
                min="40"
                max="160"
                value={barHeight}
                onChange={(e) => setBarHeight(Number(e.target.value))}
                className="mt-2 w-full accent-emerald-600"
              />
            </div>
          </div>

          {/* Opzioni Visive */}
          <div className="flex items-center justify-between border-t border-zinc-200 pt-3 dark:border-zinc-800">
            <label className="flex items-center gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 cursor-pointer">
              <input
                type="checkbox"
                checked={displayValue}
                onChange={(e) => setDisplayValue(e.target.checked)}
                className="h-4 w-4 rounded accent-emerald-600"
              />
              Mostra testo sotto le barre
            </label>

            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-500">Colore:</span>
              {["#000000", "#1E40AF", "#991B1B", "#065F46"].map((c) => (
                <button
                  key={c}
                  onClick={() => setLineColor(c)}
                  style={{ backgroundColor: c }}
                  className={`h-5 w-5 rounded-full border ${lineColor === c ? "ring-2 ring-emerald-500" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Anteprima & Download a Destra */}
        <div className="flex flex-col items-center justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="w-full">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              Anteprima Codice a Barre ({format})
            </h3>

            <div className="mt-4 flex min-h-[180px] w-full items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 p-4 overflow-x-auto dark:border-zinc-800 dark:bg-zinc-950">
              {error ? (
                <div className="text-center text-xs font-medium text-red-500">{error}</div>
              ) : (
                <svg ref={svgRef} className="max-w-full" />
              )}
            </div>
          </div>

          {/* Pulsanti Download */}
          <div className="mt-6 flex w-full flex-col gap-2.5">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={downloadPng}
                disabled={!!error || !value.trim()}
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-xs font-bold text-white shadow transition hover:bg-emerald-700 disabled:opacity-50"
              >
                <Download className="h-4 w-4" /> Scarica PNG HD
              </button>
              <button
                onClick={downloadSvg}
                disabled={!!error || !value.trim()}
                className="flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white py-3 text-xs font-bold text-zinc-700 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 disabled:opacity-50"
              >
                <Download className="h-4 w-4" /> Vettoriale SVG
              </button>
            </div>

            <button
              onClick={copyImage}
              disabled={!!error || !value.trim()}
              className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-zinc-200 py-2 text-xs font-medium text-zinc-600 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800 disabled:opacity-50"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
              <span>{copied ? "Copiato negli appunti!" : "Copia Immagine negli Appunti"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
