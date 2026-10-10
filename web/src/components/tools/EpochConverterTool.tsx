"use client";

import React, { useState, useEffect } from "react";
import { Clock, Calendar, ArrowRightLeft, Copy, CheckCircle2, Play, Pause } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export const EpochConverterTool: React.FC = () => {
  const { language } = useLanguage();
  const [currentEpoch, setCurrentEpoch] = useState(Math.floor(Date.now() / 1000));
  const [isTicking, setIsTicking] = useState(true);

  // Epoch to Date
  const [epochInput, setEpochInput] = useState(Math.floor(Date.now() / 1000).toString());
  const [epochResult, setEpochResult] = useState<{ local: string; utc: string; relative: string; iso: string } | null>(null);

  // Date to Epoch
  const [dateInput, setDateInput] = useState(new Date().toISOString().slice(0, 16));
  const [dateResult, setDateResult] = useState<{ seconds: number; millis: number } | null>(null);

  const [copied, setCopied] = useState<string | null>(null);

  // Clock ticker
  useEffect(() => {
    if (!isTicking) return;
    const interval = setInterval(() => {
      setCurrentEpoch(Math.floor(Date.now() / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [isTicking]);

  // Convert Epoch -> Date
  const handleConvertEpoch = (val: string) => {
    setEpochInput(val);
    const num = Number(val.trim());
    if (isNaN(num) || num <= 0) {
      setEpochResult(null);
      return;
    }

    // Auto-detect seconds vs milliseconds (if > 100000000000 it's millis)
    const millis = num > 100000000000 ? num : num * 1000;
    const d = new Date(millis);

    if (isNaN(d.getTime())) {
      setEpochResult(null);
      return;
    }

    const diffSec = Math.round((d.getTime() - Date.now()) / 1000);
    let relative = "";
    if (Math.abs(diffSec) < 60) {
      relative = language === "it" ? "pochi istanti fa" : "a few moments ago";
    } else if (diffSec < 0) {
      const mins = Math.round(Math.abs(diffSec) / 60);
      relative = language === "it" ? `${mins} minuti fa` : `${mins} minutes ago`;
    } else {
      const mins = Math.round(diffSec / 60);
      relative = language === "it" ? `tra ${mins} minuti` : `in ${mins} minutes`;
    }

    setEpochResult({
      local: d.toLocaleString(language === "it" ? "it-IT" : "en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      }),
      utc: d.toUTCString(),
      iso: d.toISOString(),
      relative,
    });
  };

  // Convert Date -> Epoch
  const handleConvertDate = (val: string) => {
    setDateInput(val);
    const d = new Date(val);
    if (isNaN(d.getTime())) {
      setDateResult(null);
      return;
    }
    setDateResult({
      seconds: Math.floor(d.getTime() / 1000),
      millis: d.getTime(),
    });
  };

  useEffect(() => {
    handleConvertEpoch(epochInput);
    handleConvertDate(dateInput);
  }, []);

  const copyText = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Real-time Current Epoch Card */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-50/80 via-white to-zinc-50 p-6 shadow-sm dark:border-emerald-600/30 dark:from-emerald-950/30 dark:via-zinc-900 dark:to-zinc-900">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <Clock className="h-4 w-4" />
            <span>{language === "it" ? "Timestamp Unix Corrente (In tempo reale)" : "Current Unix Epoch Time"}</span>
          </div>
          <div className="mt-2 font-mono text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl">
            {currentEpoch}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => copyText(currentEpoch.toString(), "current")}
            className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-xs font-bold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          >
            {copied === "current" ? <CheckCircle2 className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
            <span>{copied === "current" ? (language === "it" ? "Copiato!" : "Copied!") : (language === "it" ? "Copia" : "Copy")}</span>
          </button>
          <button
            onClick={() => setIsTicking(!isTicking)}
            className="rounded-xl border border-zinc-200 bg-white p-2 text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            title={isTicking ? "Pausa" : "Riprendi"}
          >
            {isTicking ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Converter 1: Epoch -> Date */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 space-y-4">
          <h3 className="font-bold text-zinc-900 dark:text-white">
            {language === "it" ? "1. Converti Timestamp in Data Umana" : "1. Epoch to Human Date"}
          </h3>
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              {language === "it" ? "Timestamp Unix (Secondi o Millisecondi)" : "Unix Timestamp (Seconds or Milliseconds)"}
            </label>
            <div className="mt-2 flex gap-2">
              <input
                type="text"
                value={epochInput}
                onChange={(e) => handleConvertEpoch(e.target.value)}
                placeholder="es. 1799999999"
                className="flex-1 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 font-mono text-xs text-zinc-800 outline-none focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              />
              <button
                onClick={() => handleConvertEpoch(currentEpoch.toString())}
                className="rounded-xl bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300"
              >
                {language === "it" ? "Ora" : "Now"}
              </button>
            </div>
          </div>

          {epochResult && (
            <div className="space-y-3 rounded-xl border border-zinc-100 bg-zinc-50/60 p-4 text-xs dark:border-zinc-800 dark:bg-zinc-950/40">
              <div>
                <span className="font-semibold text-zinc-500">{language === "it" ? "Ora Locale:" : "Local Time:"}</span>
                <p className="mt-0.5 font-bold text-zinc-900 dark:text-white">{epochResult.local}</p>
              </div>
              <div>
                <span className="font-semibold text-zinc-500">UTC / GMT:</span>
                <p className="mt-0.5 font-mono text-zinc-800 dark:text-zinc-200">{epochResult.utc}</p>
              </div>
              <div>
                <span className="font-semibold text-zinc-500">ISO 8601:</span>
                <p className="mt-0.5 font-mono text-zinc-800 dark:text-zinc-200">{epochResult.iso}</p>
              </div>
            </div>
          )}
        </div>

        {/* Converter 2: Date -> Epoch */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 space-y-4">
          <h3 className="font-bold text-zinc-900 dark:text-white">
            {language === "it" ? "2. Converti Data in Timestamp Unix" : "2. Human Date to Epoch"}
          </h3>
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              {language === "it" ? "Seleziona Data e Ora:" : "Select Date & Time:"}
            </label>
            <input
              type="datetime-local"
              value={dateInput}
              onChange={(e) => handleConvertDate(e.target.value)}
              className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-semibold text-zinc-800 outline-none focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            />
          </div>

          {dateResult && (
            <div className="space-y-3 rounded-xl border border-zinc-100 bg-zinc-50/60 p-4 text-xs dark:border-zinc-800 dark:bg-zinc-950/40">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-zinc-500">{language === "it" ? "Secondi (Standard):" : "Seconds (Standard):"}</span>
                  <p className="mt-0.5 font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                    {dateResult.seconds}
                  </p>
                </div>
                <button
                  onClick={() => copyText(dateResult.seconds.toString(), "sec")}
                  className="rounded-lg border border-zinc-200 bg-white p-1 text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  <Copy className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-zinc-500">{language === "it" ? "Millisecondi (JavaScript):" : "Milliseconds (JavaScript):"}</span>
                  <p className="mt-0.5 font-mono text-zinc-800 dark:text-zinc-200">
                    {dateResult.millis}
                  </p>
                </div>
                <button
                  onClick={() => copyText(dateResult.millis.toString(), "ms")}
                  className="rounded-lg border border-zinc-200 bg-white p-1 text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  <Copy className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
