"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  Mic, 
  Square, 
  Download, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  ShieldCheck, 
  AlertCircle 
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export const VoiceRecorderTool: React.FC = () => {
  const { language } = useLanguage();
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const startRecording = async () => {
    setErrorMsg(null);
    setRecordedBlob(null);
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl(null);
    chunksRef.current = [];

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error(
          language === "it"
            ? "Il tuo browser non supporta l'accesso al microfono."
            : "Your browser does not support microphone access."
        );
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mimeType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
        ? "audio/webm;codecs=opus"
        : MediaRecorder.isTypeSupported("audio/webm")
        ? "audio/webm"
        : "audio/ogg";

      const recorder = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: mimeType });
        setRecordedBlob(blob);
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        setIsRecording(false);
        setIsPaused(false);
        if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => track.stop());
        }
      };

      recorder.start(500);
      setIsRecording(true);
      setIsPaused(false);
      setRecordingTime(0);

      timerIntervalRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } catch (err: any) {
      console.error(err);
      if (err.name !== "NotAllowedError") {
        setErrorMsg(err.message || "Errore durante l'accesso al microfono.");
      }
      setIsRecording(false);
    }
  };

  const pauseResumeRecording = () => {
    if (!mediaRecorderRef.current) return;
    if (isPaused) {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
      timerIntervalRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } else {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
  };

  const downloadAudio = () => {
    if (!audioUrl || !recordedBlob) return;
    const a = document.createElement("a");
    a.href = audioUrl;
    a.download = `registrazione-vocale-${Date.now()}.webm`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border-2 border-emerald-500/30 bg-white p-6 shadow-xl sm:p-10 dark:border-emerald-600/30 dark:bg-zinc-900">
        <div className="text-center">
          <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm dark:bg-emerald-950 dark:text-emerald-400">
            <Mic className="h-8 w-8" />
          </div>

          <h2 className="mt-4 text-2xl font-extrabold text-zinc-900 sm:text-3xl dark:text-white">
            {language === "it" ? "Registratore Vocale Online nel Browser" : "Free In-Browser Voice & Mic Recorder"}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            {language === "it"
              ? "Registra audio e note vocali in alta fedeltà con il tuo microfono. Zero upload, 100% privato e gratuito."
              : "Capture high-fidelity voice notes and microphone audio directly in your browser. 100% private, zero server transfers."}
          </p>
        </div>

        {errorMsg && (
          <div className="mt-6 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-xs font-semibold text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Recording Monitor Area */}
        <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-950 p-8 text-center dark:border-zinc-800">
          {audioUrl ? (
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3 text-emerald-400 font-semibold text-sm">
                <Volume2 className="h-5 w-5" />
                <span>{language === "it" ? "Registrazione completata con successo" : "Recording completed successfully"}</span>
              </div>
              <audio src={audioUrl} controls className="mx-auto w-full max-w-md" />
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={downloadAudio}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-500 hover:shadow-emerald-500/25"
                >
                  <Download className="h-4 w-4" />
                  <span>{language === "it" ? "Scarica File Audio (WebM)" : "Download Audio (WebM)"}</span>
                </button>

                <button
                  onClick={startRecording}
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-zinc-700"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>{language === "it" ? "Registra di Nuovo" : "Record Again"}</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 py-6">
              {isRecording ? (
                <div className="space-y-4">
                  <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
                      <Mic className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="text-4xl font-mono font-bold text-white tracking-widest">
                    {formatTime(recordingTime)}
                  </div>
                  <p className="text-xs text-red-400 font-semibold animate-pulse">
                    ● {isPaused ? (language === "it" ? "In Pausa" : "Paused") : (language === "it" ? "Ascolto microfono in corso..." : "Listening to microphone...")}
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <Mic className="mx-auto h-16 w-16 opacity-30 text-emerald-500" />
                  <p className="text-xs sm:text-sm text-zinc-400">
                    {language === "it"
                      ? "Fai clic su Inizia per consentire l'accesso al microfono e avviare la registrazione."
                      : "Click Start to enable your microphone and begin recording."}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          {isRecording ? (
            <>
              <button
                onClick={pauseResumeRecording}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              >
                {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                <span>{isPaused ? (language === "it" ? "Riprendi" : "Resume") : (language === "it" ? "Pausa" : "Pause")}</span>
              </button>

              <button
                onClick={stopRecording}
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-red-500"
              >
                <Square className="h-4 w-4 fill-white" />
                <span>{language === "it" ? "Interrompi & Salva" : "Stop & Save"}</span>
              </button>
            </>
          ) : (
            <button
              onClick={startRecording}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-500 hover:shadow-emerald-500/25"
            >
              <Mic className="h-4 w-4" />
              <span>{language === "it" ? "Inizia Registrazione Vocale" : "Start Voice Recording"}</span>
            </button>
          )}
        </div>

        {/* Privacy Note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
          <ShieldCheck className="h-4 w-4" />
          <span>
            {language === "it"
              ? "Zero Upload: l'audio non lascia mai il tuo computer e viene salvato direttamente in locale."
              : "Zero Upload: audio never leaves your device and is saved strictly in local RAM."}
          </span>
        </div>
      </div>
    </div>
  );
};
