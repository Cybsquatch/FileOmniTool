"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { decodeAudioFile, encodeAudioToWav, encodeAudioToMp3 } from "@/lib/client-engines/audio-engine";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { Radio, Download, CheckCircle2, Loader2, RefreshCw } from "lucide-react";

export const AudioStereoToMonoTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
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

      // 1. Decodifica
      const origBuffer = await decodeAudioFile(file);

      // 2. Crea buffer a 1 canale (mono)
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const monoBuffer = audioCtx.createBuffer(1, origBuffer.length, origBuffer.sampleRate);
      const monoChannel = monoBuffer.getChannelData(0);

      const left = origBuffer.getChannelData(0);
      const right = origBuffer.numberOfChannels > 1 ? origBuffer.getChannelData(1) : left;

      for (let i = 0; i < origBuffer.length; i++) {
        monoChannel[i] = (left[i] + right[i]) / 2;
      }
      audioCtx.close();

      // 3. Codifica
      let blob: Blob;
      if (format === "mp3") {
        blob = await encodeAudioToMp3(monoBuffer, 128);
      } else {
        blob = encodeAudioToWav(monoBuffer);
      }

      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      setResultSize(blob.size);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante la conversione in mono.";
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
              helperText="Trascina qui il file audio stereo per convertirlo in traccia mono"
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

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-zinc-500">Formato:</span>
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value as "mp3" | "wav")}
                    className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                  >
                    <option value="mp3">MP3 (Ottimizzato per voce/podcast)</option>
                    <option value="wav">WAV Lossless (Qualità non compressa)</option>
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
                      <span>Unione canali L+R...</span>
                    </>
                  ) : (
                    <>
                      <Radio className="h-4 w-4" />
                      <span>Converti in Traccia Mono</span>
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
            Audio Convertito in Mono con Successo!
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Canali fusi perfettamente al centro • Dimensione finale: {resultSize ? formatBytes(resultSize) : ""}
          </p>

          <div className="mt-6 flex justify-center">
            <audio src={downloadUrl} controls className="w-full max-w-md" />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={downloadUrl}
              download={sanitizeFileName(file?.name.replace(/\.[^.]+$/, "") + `-mono.${format}`)}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-emerald-500"
            >
              <Download className="h-4 w-4" />
              <span>Scarica File Mono ({format.toUpperCase()})</span>
            </a>
            <button
              onClick={resetAll}
              className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Converti un Altro File</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
