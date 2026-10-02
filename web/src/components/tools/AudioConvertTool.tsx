"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { decodeAudioFile, encodeAudioToMp3, encodeAudioToWav } from "@/lib/client-engines/audio-engine";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { AdBanner } from "../ads/AdBanner";
import { Music, Download, CheckCircle2, Loader2, RefreshCw, Volume2 } from "lucide-react";

export const AudioConvertTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [targetFormat, setTargetFormat] = useState<"mp3" | "wav">("mp3");
  const [bitrate, setBitrate] = useState<128 | 192 | 320>(192);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [resultSize, setResultSize] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = (files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
      setDownloadUrl(null);
      setError(null);
    }
  };

  const handleConvert = async () => {
    if (!file) return;

    try {
      setProcessing(true);
      setError(null);
      setProgress(5);

      // Decodifica traccia tramite Web Audio API
      const audioBuffer = await decodeAudioFile(file);
      setDuration(Math.round(audioBuffer.duration));
      setProgress(25);

      let resultBlob: Blob;

      if (targetFormat === "mp3") {
        resultBlob = await encodeAudioToMp3(audioBuffer, bitrate, (pct) => {
          setProgress(25 + Math.round(pct * 0.75));
        });
      } else {
        resultBlob = encodeAudioToWav(audioBuffer);
        setProgress(100);
      }

      const url = URL.createObjectURL(resultBlob);
      setDownloadUrl(url);
      setResultSize(resultBlob.size);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore durante la conversione audio.";
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
              accept="audio/*,.ogg,.wav,.mp3,.aac,.flac,.m4a,.webm"
              multiple={false}
              maxSizeMB={80}
              onFilesSelected={handleFilesSelected}
              helperText="Trascina qui il file audio da convertire (OGG, WAV, AAC, M4A, FLAC, WebM)"
            />
          ) : (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
                    <Music className="h-5 w-5" />
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

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Formato di Uscita:
                  </label>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {(["mp3", "wav"] as const).map((fmt) => (
                      <button
                        key={fmt}
                        type="button"
                        onClick={() => setTargetFormat(fmt)}
                        className={`rounded-xl border py-2.5 text-xs font-bold uppercase transition ${
                          targetFormat === fmt
                            ? "border-purple-500 bg-purple-50 text-purple-700 dark:border-purple-400 dark:bg-purple-950/60 dark:text-purple-300"
                            : "border-zinc-200 bg-zinc-50/50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                        }`}
                      >
                        {fmt === "mp3" ? "MP3 (Compresso)" : "WAV (Lossless)"}
                      </button>
                    ))}
                  </div>
                </div>

                {targetFormat === "mp3" && (
                  <div>
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Qualità Bitrate MP3:
                    </label>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {([128, 192, 320] as const).map((rate) => (
                        <button
                          key={rate}
                          type="button"
                          onClick={() => setBitrate(rate)}
                          className={`rounded-xl border py-2 text-xs font-semibold transition ${
                            bitrate === rate
                              ? "border-purple-500 bg-purple-50 text-purple-700 dark:border-purple-400 dark:bg-purple-950/60 dark:text-purple-300"
                              : "border-zinc-200 bg-zinc-50/50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                          }`}
                        >
                          {rate} kbps
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {processing && (
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-xs text-zinc-600 dark:text-zinc-400">
                    <span>Codifica Web Audio in corso...</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                    <div
                      className="h-full bg-purple-600 transition-all duration-300"
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
                  onClick={handleConvert}
                  disabled={processing}
                  className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-purple-600/20 transition hover:bg-purple-700 disabled:opacity-50"
                >
                  {processing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Conversione in corso...</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="h-4 w-4" />
                      <span>Converti in {targetFormat.toUpperCase()}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-2xl border border-purple-200 bg-purple-50/40 p-6 text-center dark:border-purple-900/60 dark:bg-purple-950/20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">
            Audio Convertito con Successo!
          </h3>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            Formato: {targetFormat.toUpperCase()} • Dimensione: {resultSize ? formatBytes(resultSize) : ""} 
            {duration ? ` • Durata: ${duration}s` : ""}
          </p>

          {/* Anteprima Player Audio locale */}
          <div className="mx-auto mt-4 max-w-sm">
            <audio controls src={downloadUrl} className="w-full rounded-xl shadow-sm" />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={downloadUrl}
              download={`${file?.name.split(".")[0] || "audio"}.${targetFormat}`}
              className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-purple-600/30 transition hover:bg-purple-700 active:scale-95"
            >
              <Download className="h-4 w-4" />
              <span>Scarica File {targetFormat.toUpperCase()}</span>
            </a>
            <button
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-xs font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Converti un altro audio</span>
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
