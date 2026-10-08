"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { decodeAudioFile, encodeAudioToWav, encodeAudioToMp3 } from "@/lib/client-engines/audio-engine";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { FastForward, Download, CheckCircle2, Loader2, RefreshCw } from "lucide-react";

export const AudioSpeedTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [speed, setSpeed] = useState<number>(1.25);
  const [format, setFormat] = useState<"mp3" | "wav">("mp3");
  const [processing, setProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [resultSize, setResultSize] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = (files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
      setDownloadUrl(null);
      setError(null);
    }
  };

  const handleProcess = async () => {
    if (!file) return;

    try {
      setProcessing(true);
      setError(null);

      // 1. Decodifica audio nativo
      const originalBuffer = await decodeAudioFile(file);

      // 2. Crea OfflineAudioContext con durata scalata
      const newDuration = originalBuffer.duration / speed;
      const numChannels = originalBuffer.numberOfChannels;
      const sampleRate = originalBuffer.sampleRate;

      const OfflineCtxClass =
        window.OfflineAudioContext ||
        (window as unknown as { webkitOfflineAudioContext: typeof OfflineAudioContext }).webkitOfflineAudioContext;

      const offlineCtx = new OfflineCtxClass(numChannels, Math.ceil(newDuration * sampleRate), sampleRate);

      const source = offlineCtx.createBufferSource();
      source.buffer = originalBuffer;
      source.playbackRate.value = speed;
      source.connect(offlineCtx.destination);
      source.start(0);

      const renderedBuffer = await offlineCtx.startRendering();

      // 3. Codifica
      let blob: Blob;
      if (format === "mp3") {
        blob = await encodeAudioToMp3(renderedBuffer, 192);
      } else {
        blob = encodeAudioToWav(renderedBuffer);
      }

      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      setResultSize(blob.size);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante il cambio di velocità audio.";
      setError(msg);
    } finally {
      setProcessing(false);
    }
  };

  const resetAll = () => {
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setFile(null);
    setDownloadUrl(null);
    setResultSize(null);
    setError(null);
  };

  return (
    <div className="space-y-6">
      {!downloadUrl ? (
        <>
          {!file ? (
            <Dropzone
              onFilesSelected={handleFilesSelected}
              accept="audio/*"
              helperText="Trascina qui il file audio per velocizzare o rallentare la traccia"
            />
          ) : (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">{file.name}</h3>
                  <p className="text-xs text-zinc-500">{formatBytes(file.size)}</p>
                </div>
                <button
                  onClick={resetAll}
                  className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
                >
                  Cambia File
                </button>
              </div>

              {/* Speed Presets */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs font-semibold text-zinc-500">
                  <span className="uppercase tracking-wider">Velocità di Riproduzione</span>
                  <span className="font-bold text-emerald-600">{speed}x</span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {[0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSpeed(s)}
                      className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
                        speed === s
                          ? "bg-emerald-600 text-white"
                          : "border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                      }`}
                    >
                      {s}x
                    </button>
                  ))}
                </div>

                <input
                  type="range"
                  min={0.5}
                  max={2.5}
                  step={0.05}
                  value={speed}
                  onChange={(e) => setSpeed(parseFloat(e.target.value))}
                  className="mt-4 w-full"
                />
              </div>

              {/* Output format */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-zinc-500">Formato di esportazione:</span>
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value as "mp3" | "wav")}
                    className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                  >
                    <option value="mp3">MP3 (Compresso)</option>
                    <option value="wav">WAV (Qualità Studio Lossless)</option>
                  </select>
                </div>

                <button
                  onClick={handleProcess}
                  disabled={processing}
                  className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 font-semibold text-white shadow-sm hover:bg-emerald-500 disabled:opacity-50"
                >
                  {processing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Elaborazione Web Audio...</span>
                    </>
                  ) : (
                    <>
                      <FastForward className="h-4 w-4" />
                      <span>Applica Nuova Velocità</span>
                    </>
                  )}
                </button>
              </div>

              {error && (
                <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-600 dark:bg-red-950/50 dark:text-red-400">
                  {error}
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-8 text-center dark:border-emerald-900/50 dark:bg-emerald-950/20">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-xl font-bold text-zinc-900 dark:text-white">
            Audio Rielaborato con Successo ({speed}x)!
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Dimensione finale: {resultSize ? formatBytes(resultSize) : ""} • Pronto per l'ascolto
          </p>

          <div className="mt-6 flex justify-center">
            <audio src={downloadUrl} controls className="w-full max-w-md" />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={downloadUrl}
              download={sanitizeFileName(file?.name.replace(/\.[^.]+$/, "") + `-${speed}x.${format}`)}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-emerald-500"
            >
              <Download className="h-4 w-4" />
              <span>Scarica File Audio ({format.toUpperCase()})</span>
            </a>
            <button
              onClick={resetAll}
              className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Modifica un Altro Audio</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
