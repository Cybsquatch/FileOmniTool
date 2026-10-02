"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { decodeAudioFile, boostAudioBuffer, encodeAudioToMp3 } from "@/lib/client-engines/audio-engine";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { Sliders, Download, CheckCircle2, Loader2, Volume2, RefreshCw } from "lucide-react";

export const AudioBoosterTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [boostPercent, setBoostPercent] = useState<number>(200); // 200% default
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = (files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
      setDownloadUrl(null);
      setError(null);
    }
  };

  const handleBoost = async () => {
    if (!file) return;

    try {
      setProcessing(true);
      setError(null);
      setProgress(10);

      // Decodifica traccia audio nel browser
      const audioBuffer = await decodeAudioFile(file);
      setProgress(40);

      // Calcola fattore moltiplicatore (es. 200% -> 2.0x)
      const factor = boostPercent / 100;
      const boostedBuffer = boostAudioBuffer(audioBuffer, factor);
      setProgress(60);

      // Ricodifica in MP3 con progress
      const mp3Blob = await encodeAudioToMp3(boostedBuffer, 192, (pct) => {
        setProgress(60 + Math.round(pct * 0.4));
      });

      const url = URL.createObjectURL(mp3Blob);
      setDownloadUrl(url);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante l'amplificazione audio.";
      setError(msg);
    } finally {
      setProcessing(false);
    }
  };

  const resetAll = () => {
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setFile(null);
    setDownloadUrl(null);
    setError(null);
    setProgress(0);
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <Dropzone
          accept="audio/*,.mp3,.ogg,.wav,.m4a,.flac,.aac"
          multiple={false}
          maxSizeMB={80}
          onFilesSelected={handleFilesSelected}
          helperText="Trascina la traccia audio da amplificare (MP3, OGG, WAV, M4A)"
        />
      ) : (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
                <Sliders className="h-5 w-5" />
              </span>
              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-white">
                  {sanitizeFileName(file.name)}
                </h4>
                <p className="text-xs text-zinc-500">
                  {formatBytes(file.size)} • Amplificazione in-memory (Soft-Clipping Limiter)
                </p>
              </div>
            </div>

            <button onClick={resetAll} className="text-xs text-red-600 hover:underline">
              Scegli un&apos;altra traccia
            </button>
          </div>

          {/* Boost Slider Controls */}
          <div className="mt-6 space-y-4">
            <div>
              <div className="flex justify-between text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                <span>Livello di Amplificazione Volume:</span>
                <span className="rounded-md bg-purple-100 px-2 py-0.5 font-bold text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                  {boostPercent}% ({((boostPercent / 100)).toFixed(1)}x)
                </span>
              </div>
              <input
                type="range"
                min={100}
                max={400}
                step={10}
                value={boostPercent}
                onChange={(e) => setBoostPercent(parseInt(e.target.value))}
                className="mt-3 w-full accent-purple-600"
              />
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-zinc-500">Preset rapidi:</span>
              {[125, 150, 200, 250, 300].map((pct) => (
                <button
                  key={pct}
                  onClick={() => setBoostPercent(pct)}
                  className={`rounded-lg px-2.5 py-1 font-semibold transition ${
                    boostPercent === pct
                      ? "bg-purple-600 text-white shadow-sm"
                      : "border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  }`}
                >
                  +{pct - 100}% ({pct}%)
                </button>
              ))}
            </div>

            {/* Execute Button */}
            <div className="pt-2">
              <button
                onClick={handleBoost}
                disabled={processing}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 py-3 text-xs font-bold text-white shadow-md hover:bg-purple-700 active:scale-95 disabled:opacity-50"
              >
                {processing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Volume2 className="h-4 w-4" />}
                <span>
                  {processing ? `Amplificazione in corso... ${progress}%` : `Amplifica Volume a ${boostPercent}%`}
                </span>
              </button>
            </div>
          </div>

          {/* Success Player Card */}
          {downloadUrl && (
            <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50/50 p-5 text-center dark:border-emerald-900/60 dark:bg-emerald-950/20">
              <div className="flex items-center justify-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-xs font-bold">Audio Amplificato con Successo!</span>
              </div>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                Ascolta l&apos;anteprima con il nuovo volume potenziato ed effettua il download.
              </p>

              <div className="mt-4 flex flex-col items-center gap-3">
                <audio controls src={downloadUrl} className="w-full max-w-md h-10" />
                
                <a
                  href={downloadUrl}
                  download={`amplificato_${file.name.replace(/\.[^/.]+$/, "")}.mp3`}
                  className="mt-2 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-700 active:scale-95"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Scarica MP3 Amplificato</span>
                </a>
              </div>
            </div>
          )}

          {error && (
            <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700 dark:bg-red-950/40 dark:text-red-300">
              {error}
            </div>
          )}
        </div>
      )}

      <AdBanner slot="action-card" />
    </div>
  );
};
