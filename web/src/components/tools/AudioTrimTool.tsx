"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { decodeAudioFile, sliceAudioBuffer, encodeAudioToMp3 } from "@/lib/client-engines/audio-engine";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { Scissors, Download, CheckCircle2, Loader2, RefreshCw } from "lucide-react";

export const AudioTrimTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const [duration, setDuration] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [resultSize, setResultSize] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = async (files: File[]) => {
    if (files.length === 0) return;
    const f = files[0];
    setFile(f);
    setDownloadUrl(null);
    setError(null);
    setProcessing(true);

    try {
      const buf = await decodeAudioFile(f);
      setAudioBuffer(buf);
      const totalSec = Math.floor(buf.duration);
      setDuration(totalSec);
      setStartTime(0);
      setEndTime(totalSec);
    } catch {
      setError("Impossibile decodificare il file audio selezionato.");
      setFile(null);
    } finally {
      setProcessing(false);
    }
  };

  const handleTrim = async () => {
    if (!audioBuffer) return;
    if (startTime >= endTime) {
      setError("Il tempo iniziale deve essere inferiore al tempo finale.");
      return;
    }

    try {
      setProcessing(true);
      setError(null);

      const sliced = sliceAudioBuffer(audioBuffer, startTime, endTime);
      const mp3Blob = await encodeAudioToMp3(sliced, 192);
      const url = URL.createObjectURL(mp3Blob);

      setDownloadUrl(url);
      setResultSize(mp3Blob.size);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante il taglio audio.";
      setError(msg);
    } finally {
      setProcessing(false);
    }
  };

  const resetAll = () => {
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setFile(null);
    setAudioBuffer(null);
    setDownloadUrl(null);
    setResultSize(null);
    setError(null);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-6">
      {!downloadUrl ? (
        <>
          {!file ? (
            <Dropzone
              accept="audio/*,.mp3,.ogg,.wav,.m4a,.aac"
              multiple={false}
              maxSizeMB={80}
              onFilesSelected={handleFilesSelected}
              helperText="Trascina la canzone o traccia audio da tagliare (MP3, WAV, OGG, M4A)"
            />
          ) : (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-50 text-pink-600 dark:bg-pink-950 dark:text-pink-400">
                    <Scissors className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white">
                      {sanitizeFileName(file.name)}
                    </h4>
                    <p className="text-xs text-zinc-500">
                      {formatBytes(file.size)} • Durata totale: {formatTime(duration)}
                    </p>
                  </div>
                </div>
                <button onClick={resetAll} className="text-xs text-red-600 hover:underline">
                  Cambia file
                </button>
              </div>

              {/* Slider Inizio e Fine */}
              <div className="mt-6 space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    <span>Punto di Inizio:</span>
                    <span className="font-mono text-pink-600 dark:text-pink-400">{formatTime(startTime)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={duration}
                    step="1"
                    value={startTime}
                    onChange={(e) => setStartTime(Math.min(parseFloat(e.target.value), endTime - 1))}
                    className="mt-2 w-full accent-pink-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    <span>Punto di Fine:</span>
                    <span className="font-mono text-pink-600 dark:text-pink-400">{formatTime(endTime)}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max={duration}
                    step="1"
                    value={endTime}
                    onChange={(e) => setEndTime(Math.max(parseFloat(e.target.value), startTime + 1))}
                    className="mt-2 w-full accent-pink-600"
                  />
                </div>

                <div className="rounded-xl bg-zinc-50 p-3 text-center text-xs text-zinc-600 dark:bg-zinc-800/60 dark:text-zinc-300">
                  Spezzone selezionato: <strong className="text-pink-600 dark:text-pink-400">{formatTime(endTime - startTime)}</strong> di durata
                </div>
              </div>

              {error && (
                <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700 dark:bg-red-950/40 dark:text-red-300">
                  {error}
                </div>
              )}

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleTrim}
                  disabled={processing}
                  className="inline-flex items-center gap-2 rounded-xl bg-pink-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-pink-600/20 transition hover:bg-pink-700 disabled:opacity-50"
                >
                  {processing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Taglio e codifica in corso...</span>
                    </>
                  ) : (
                    <>
                      <Scissors className="h-4 w-4" />
                      <span>Taglia e Salva MP3</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-2xl border border-pink-200 bg-pink-50/40 p-6 text-center dark:border-pink-900/60 dark:bg-pink-950/20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">
            Audio Tagliato con Successo!
          </h3>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            Dimensione file: {resultSize ? formatBytes(resultSize) : ""}
          </p>

          <div className="mx-auto mt-4 max-w-sm">
            <audio controls src={downloadUrl} className="w-full rounded-xl shadow-sm" />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={downloadUrl}
              download={`taglio_${file?.name || "suoneria.mp3"}`}
              className="inline-flex items-center gap-2 rounded-xl bg-pink-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-pink-600/30 transition hover:bg-pink-700 active:scale-95"
            >
              <Download className="h-4 w-4" />
              <span>Scarica Spezzone MP3</span>
            </a>
            <button
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-xs font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Taglia un altro audio</span>
            </button>
          </div>

          <div className="mt-6">
            <AdBanner slot="action-card" />
          </div>
        </div>
      )}
    </div>
  );
};
