"use client";

import React, { useState } from "react";
import { Pipette, Copy, Check } from "lucide-react";

export const ColorConverterTool: React.FC = () => {
  const [hex, setHex] = useState<string>("#10b981");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Parse HEX to RGB
  const hexToRgb = (h: string) => {
    let clean = h.replace(/^#/, "");
    if (clean.length === 3) {
      clean = clean.split("").map((c) => c + c).join("");
    }
    const num = parseInt(clean, 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255,
    };
  };

  const rgb = hexToRgb(hex);

  // RGB to HSL
  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  // RGB to CMYK
  const rgbToCmyk = (r: number, g: number, b: number) => {
    const r1 = r / 255;
    const g1 = g / 255;
    const b1 = b / 255;
    const k = 1 - Math.max(r1, g1, b1);
    if (k === 1) return { c: 0, m: 0, y: 0, k: 100 };
    const c = Math.round(((1 - r1 - k) / (1 - k)) * 100);
    const m = Math.round(((1 - g1 - k) / (1 - k)) * 100);
    const y = Math.round(((1 - b1 - k) / (1 - k)) * 100);
    return { c, m, y, k: Math.round(k * 100) };
  };

  const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);

  const formats = [
    { key: "hex", label: "HEX", value: hex.toUpperCase() },
    { key: "rgb", label: "RGB", value: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` },
    { key: "hsl", label: "HSL", value: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` },
    { key: "cmyk", label: "CMYK (Stampa)", value: `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)` },
    { key: "css", label: "CSS Variable", value: `--color-primary: ${hex.toLowerCase()};` },
  ];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleRgbSlider = (channel: "r" | "g" | "b", val: number) => {
    const updated = { ...rgb, [channel]: val };
    const hexStr = `#${((1 << 24) + (updated.r << 16) + (updated.g << 8) + updated.b).toString(16).slice(1)}`;
    setHex(hexStr);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center gap-2 border-b border-zinc-100 pb-4 dark:border-zinc-800">
          <Pipette className="h-5 w-5 text-emerald-600" />
          <h3 className="font-semibold text-zinc-900 dark:text-white">Convertitore Formati Colore</h3>
        </div>

        {/* Color preview & picker */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div
            className="flex h-44 w-full flex-col items-center justify-center rounded-2xl p-4 shadow-inner"
            style={{ backgroundColor: hex }}
          >
            <span
              className={`font-mono text-xl font-black ${
                hsl.l > 55 ? "text-zinc-900" : "text-white"
              }`}
            >
              {hex.toUpperCase()}
            </span>
            <span
              className={`text-xs opacity-80 ${
                hsl.l > 55 ? "text-zinc-800" : "text-zinc-200"
              }`}
            >
              {hsl.l > 55 ? "Sfondo Chiaro" : "Sfondo Scuro"}
            </span>
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={hex}
                onChange={(e) => setHex(e.target.value)}
                className="h-12 w-14 cursor-pointer rounded-xl border-0 bg-transparent p-0"
              />
              <div className="flex-1">
                <label className="text-xs font-semibold text-zinc-500">Selettore Visivo & Codice HEX</label>
                <input
                  type="text"
                  value={hex}
                  onChange={(e) => {
                    if (/^#[0-9A-Fa-f]{0,6}$/.test(e.target.value)) {
                      setHex(e.target.value);
                    }
                  }}
                  className="mt-1 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-2 font-mono text-sm uppercase dark:border-zinc-800 dark:bg-zinc-950"
                />
              </div>
            </div>

            {/* RGB Sliders */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs">
                <span className="w-8 font-bold text-red-500">R: {rgb.r}</span>
                <input
                  type="range"
                  min={0}
                  max={255}
                  value={rgb.r}
                  onChange={(e) => handleRgbSlider("r", parseInt(e.target.value))}
                  className="flex-1"
                />
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="w-8 font-bold text-green-500">G: {rgb.g}</span>
                <input
                  type="range"
                  min={0}
                  max={255}
                  value={rgb.g}
                  onChange={(e) => handleRgbSlider("g", parseInt(e.target.value))}
                  className="flex-1"
                />
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="w-8 font-bold text-blue-500">B: {rgb.b}</span>
                <input
                  type="range"
                  min={0}
                  max={255}
                  value={rgb.b}
                  onChange={(e) => handleRgbSlider("b", parseInt(e.target.value))}
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Color format boxes */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {formats.map((fmt) => (
            <div
              key={fmt.key}
              className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 p-3.5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">{fmt.label}</div>
                <div className="mt-0.5 font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  {fmt.value}
                </div>
              </div>

              <button
                onClick={() => handleCopy(fmt.value, fmt.key)}
                className="flex items-center gap-1 rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                {copiedKey === fmt.key ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedKey === fmt.key ? "Copiato!" : "Copia"}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
