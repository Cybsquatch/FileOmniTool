"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { decodeAudioFile, encodeAudioToWav, encodeAudioToMp3 } from "@/lib/client-engines/audio-engine";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { Undo2, Download, CheckCircle2, Loader2, RefreshCw } from "lucide-react";

export const AudioReverseTool: React.FC = () => {
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
      const originalBuffer = await decodeAudioFile(file);

      // 2. Crea nuovo buffer con i campioni invertiti
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const reversedBuffer = audioCtx.createBuffer(
        originalBuffer.numberOfChannels,
        originalBuffer.length,
        originalBuffer.sampleRate
      );

      for (let c = 0; c < originalBuffer.numberOfChannels; c++) {
        const origChannel = originalBuffer.getChannelData(c);
        const revChannel = reversedBuffer.getChannelData(c);
        const len = origChannel.length;
        for (let i = 0; i < len; i++) {
          revChannel[i] = origChannel[len - 1 - i];
        }
      }
      audioCtx.close();

      // 3. Codifica
      let blob: Blob;
      if (format === "mp3") {
        blob = await encodeAudioToMp3(reversedBuffer, 192);
      } else {
        blob = encodeAudioToWav(reversedBuffer);
      }

      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      setResultSize(blob.size);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante l'inversione della traccia audio.";
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
              helperText="Trascina qui il file audio per riprodurlo ed esportarlo al contrario"
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
                  <span className="text-xs font-semibold text-zinc-500">Formato di output:</span>
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value as "mp3" | "wav")}
                    className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                  >
                    <option value="mp3">MP3 (Consigliato)</option>
                    <option value="wav">WAV Lossless</option>
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
                      <span>Inversione audio in corso...</span>
                    </>
                  ) : (
                    <>
                      <Undo2 className="h-4 w-4" />
                      <span>Inverti Traccia (Reverse)</span>
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
            Audio Invertito con Successo!
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Dimensione finale: {resultSize ? formatBytes(resultSize) : ""} • Ascolta la traccia al contrario
          </p>

          <div className="mt-6 flex justify-center">
            <audio src={downloadUrl} controls className="w-full max-w-md" />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={downloadUrl}
              download={sanitizeFileName(file?.name.replace(/\.[^.]+$/, "") + `-reverse.${format}`)}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-emerald-500"
            >
              <Download className="h-4 w-4" />
              <span>Scarica Audio Invertito ({format.toUpperCase()})</span>
            </a>
            <button
              onClick={resetAll}
              className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Inverti un Altro Audio</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
