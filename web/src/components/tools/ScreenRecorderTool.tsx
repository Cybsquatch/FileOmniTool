"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  Video, 
  Square, 
  Download, 
  Mic, 
  MicOff, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle,
  ShieldCheck,
  Monitor
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export const ScreenRecorderTool: React.FC = () => {
  const { language } = useLanguage();
  const [isRecording, setIsRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [includeMic, setIncludeMic] = useState(true);
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
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
    };
  }, [videoUrl]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const startRecording = async () => {
    setErrorMsg(null);
    setRecordedBlob(null);
    if (videoUrl) URL.revokeObjectURL(videoUrl);
    setVideoUrl(null);
    chunksRef.current = [];

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
        throw new Error(
          language === "it"
            ? "Il tuo browser non supporta la registrazione schermo tramite Web API."
            : "Your browser does not support screen recording Web APIs."
        );
      }

      // 1. Get Screen Stream
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: { frameRate: { ideal: 60 } },
        audio: true, // system audio
      });

      let combinedStream = screenStream;

      // 2. Optionally mix Microphone Audio
      if (includeMic && navigator.mediaDevices.getUserMedia) {
        try {
          const micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
          const audioTracks = [...screenStream.getAudioTracks(), ...micStream.getAudioTracks()];
          combinedStream = new MediaStream([
            ...screenStream.getVideoTracks(),
            ...audioTracks,
          ]);
        } catch (micErr) {
          console.warn("Microphone not granted, proceeding with system audio only", micErr);
        }
      }

      streamRef.current = combinedStream;

      // 3. Setup MediaRecorder
      const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9,opus")
        ? "video/webm;codecs=vp9,opus"
        : MediaRecorder.isTypeSupported("video/webm")
        ? "video/webm"
        : "video/mp4";

      const recorder = new MediaRecorder(combinedStream, { mimeType });
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
        setVideoUrl(url);
        setIsRecording(false);
        if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => track.stop());
        }
      };

      // Handle user stopping screen share via native browser floating bar
      screenStream.getVideoTracks()[0].onended = () => {
        stopRecording();
      };

      recorder.start(1000); // 1s slice
      setIsRecording(true);
      setRecordingTime(0);

      timerIntervalRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } catch (err: any) {
      console.error(err);
      if (err.name !== "NotAllowedError") {
        setErrorMsg(err.message || "Errore durante l'avvio della registrazione.");
      }
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
  };

  const downloadVideo = () => {
    if (!videoUrl || !recordedBlob) return;
    const a = document.createElement("a");
    a.href = videoUrl;
    a.download = `registrazione-schermo-${Date.now()}.webm`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border-2 border-emerald-500/30 bg-white p-6 shadow-xl sm:p-10 dark:border-emerald-600/30 dark:bg-zinc-900">
        <div className="text-center">
          <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm dark:bg-emerald-950 dark:text-emerald-400">
            <Monitor className="h-8 w-8" />
          </div>

          <h2 className="mt-4 text-2xl font-extrabold text-zinc-900 sm:text-3xl dark:text-white">
            {language === "it" ? "Registratore Schermo Online nel Browser" : "Free In-Browser Screen Recorder"}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            {language === "it"
              ? "Registra lo schermo intero, finestre o schede del browser con audio. Nessun software da installare, 100% in memoria locale senza upload."
              : "Capture your entire screen, single window, or browser tab with audio. Zero installation, 100% local RAM execution."}
          </p>
        </div>

        {errorMsg && (
          <div className="mt-6 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-xs font-semibold text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Video Preview or Recording Area */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 p-4 text-center dark:border-zinc-800">
          {videoUrl ? (
            <div className="space-y-4">
              <video
                src={videoUrl}
                controls
                autoPlay
                className="max-h-[420px] w-full rounded-xl object-contain shadow-lg"
              />
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={downloadVideo}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-500 hover:shadow-emerald-500/25"
                >
                  <Download className="h-4 w-4" />
                  <span>{language === "it" ? "Scarica Registrazione (WebM)" : "Download Video (WebM)"}</span>
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
            <div className="flex flex-col items-center justify-center py-16 text-zinc-400">
              {isRecording ? (
                <div className="space-y-4">
                  <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
                      <Video className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="text-3xl font-mono font-bold text-white tracking-widest">
                    {formatTime(recordingTime)}
                  </div>
                  <p className="text-xs text-red-400 font-semibold animate-pulse">
                    ● {language === "it" ? "Registrazione in corso..." : "Recording in progress..."}
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <Video className="mx-auto h-16 w-16 opacity-40 text-emerald-500" />
                  <p className="text-xs sm:text-sm text-zinc-400">
                    {language === "it"
                      ? "Fai clic su Avvia per selezionare lo schermo o la finestra da registrare."
                      : "Click Start to select your screen, application window, or browser tab."}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Recording Controls */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-100 pt-6 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              <input
                type="checkbox"
                checked={includeMic}
                disabled={isRecording}
                onChange={(e) => setIncludeMic(e.target.checked)}
                className="h-4 w-4 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="flex items-center gap-1.5">
                {includeMic ? <Mic className="h-4 w-4 text-emerald-600" /> : <MicOff className="h-4 w-4 text-zinc-400" />}
                {language === "it" ? "Includi voce dal microfono" : "Include microphone audio"}
              </span>
            </label>
          </div>

          <div>
            {isRecording ? (
              <button
                onClick={stopRecording}
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-red-500 hover:shadow-red-500/25"
              >
                <Square className="h-4 w-4 fill-white" />
                <span>{language === "it" ? "Interrompi Registrazione" : "Stop Recording"}</span>
              </button>
            ) : (
              <button
                onClick={startRecording}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-500 hover:shadow-emerald-500/25"
              >
                <Video className="h-4 w-4" />
                <span>{language === "it" ? "Avvia Registrazione Schermo" : "Start Screen Recording"}</span>
              </button>
            )}
          </div>
        </div>

        {/* Privacy Note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
          <ShieldCheck className="h-4 w-4" />
          <span>
            {language === "it"
              ? "Zero Upload: il flusso video è compresso e gestito unicamente nella RAM del tuo browser."
              : "Zero Upload: the video stream is buffered and compressed strictly inside local RAM."}
          </span>
        </div>
      </div>
    </div>
  );
};
