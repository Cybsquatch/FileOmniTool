"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { decodeAudioFile, encodeAudioToMp3 } from "@/lib/client-engines/audio-engine";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { Video, Download, CheckCircle2, Loader2, RefreshCw, FileAudio } from "lucide-react";

export const VideoToAudioTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
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

  const handleExtract = async () => {
    if (!file) return;

    try {
      setProcessing(true);
      setError(null);
      setProgress(10);

      // Decodifica la traccia audio contenuta nel file video MP4/WebM
      const audioBuffer = await decodeAudioFile(file);
      setProgress(40);

      const mp3Blob = await encodeAudioToMp3(audioBuffer, 192, (pct) => {
        setProgress(40 + Math.round(pct * 0.6));
      });

      const url = URL.createObjectURL(mp3Blob);
      setDownloadUrl(url);
      setResultSize(mp3Blob.size);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Impossibile estrarre l'audio dal video. Assicurati che il video contenga una traccia audio supportata.";
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
    setProgress(0);
    setError(null);
  };

  return (
    <div className="space-y-6">
      {!downloadUrl ? (
        <>
          {!file ? (
            <Dropzone
              accept="video/*,.mp4,.webm,.mov,.mkv"
              multiple={false}
              maxSizeMB={150}
              onFilesSelected={handleFilesSelected}
              helperText="Trascina qui il file video da cui estrarre l'audio (MP4, WebM, MOV)"
            />
          ) : (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                    <Video className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white">
                      {sanitizeFileName(file.name)}
                    </h4>
                    <p className="text-xs text-zinc-500">{formatBytes(file.size)}</p>
                  </div>
                </div>
                <button onClick={resetAll} className="text-xs text-red-600 hover:underline">
                  Cambia file
                </button>
              </div>

              {processing && (
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-xs text-zinc-600 dark:text-zinc-400">
                    <span>Estrazione ed esportazione MP3 locale...</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                    <div
                      className="h-full bg-indigo-600 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {error && (
                <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700 dark:bg-red-950/40 dark:text-red-300">
                  {error}
                </div>
              )}

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleExtract}
                  disabled={processing}
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-600/20 transition hover:bg-indigo-700 disabled:opacity-50"
                >
                  {processing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Elaborazione in memoria...</span>
                    </>
                  ) : (
                    <>
                      <FileAudio className="h-4 w-4" />
                      <span>Estrai Audio MP3</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-2xl border border-indigo-200 bg-indigo-50/40 p-6 text-center dark:border-indigo-900/60 dark:bg-indigo-950/20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">
            Traccia Audio Estratta con Successo!
          </h3>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            Formato: MP3 (192 kbps) • Dimensione: {resultSize ? formatBytes(resultSize) : ""}
          </p>

          <div className="mx-auto mt-4 max-w-sm">
            <audio controls src={downloadUrl} className="w-full rounded-xl shadow-sm" />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={downloadUrl}
              download={`${file?.name.split(".")[0] || "audio"}.mp3`}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-700 active:scale-95"
            >
              <Download className="h-4 w-4" />
              <span>Scarica Traccia MP3</span>
            </a>
            <button
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-xs font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Estrai da un altro video</span>
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
