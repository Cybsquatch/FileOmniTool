"use client";

import React, { useState, useEffect, useRef } from "react";
import { Mic, MicOff, Volume2, ShieldCheck, Play, Square, Headphones, Activity } from "lucide-react";

export const MicTestTool: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>("");
  const [volumeLevel, setVolumeLevel] = useState<number>(0);
  const [peakLevel, setPeakLevel] = useState<number>(0);
  const [loopbackEnabled, setLoopbackEnabled] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const loopbackGainRef = useRef<GainNode | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);

  // Carica lista dispositivi audio
  const loadDevices = async () => {
    try {
      const allDevices = await navigator.mediaDevices.enumerateDevices();
      const audioInputs = allDevices.filter((d) => d.kind === "audioinput");
      setDevices(audioInputs);
      if (audioInputs.length > 0 && !selectedDeviceId) {
        setSelectedDeviceId(audioInputs[0].deviceId);
      }
    } catch (err) {
      console.warn("Impossibile enumerare i dispositivi audio:", err);
    }
  };

  const startMic = async (deviceId?: string) => {
    stopMic();
    setError(null);

    try {
      const constraints: MediaStreamConstraints = {
        audio: deviceId ? { deviceId: { exact: deviceId } } : true,
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;

      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const audioCtx = new AudioCtx();
      audioContextRef.current = audioCtx;

      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      analyserRef.current = analyser;

      const source = audioCtx.createMediaStreamSource(stream);
      sourceRef.current = source;
      source.connect(analyser);

      // Gain node per loopback in cuffia
      const loopbackGain = audioCtx.createGain();
      loopbackGain.gain.value = loopbackEnabled ? 1 : 0;
      loopbackGainRef.current = loopbackGain;
      source.connect(loopbackGain);
      loopbackGain.connect(audioCtx.destination);

      setIsActive(true);
      await loadDevices();
      drawVisualizer();
    } catch (err: any) {
      console.error("Errore avvio microfono:", err);
      setError("Impossibile accedere al microfono. Assicurati di aver concesso i permessi nel browser.");
    }
  };

  const stopMic = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state !== "closed") {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    setIsActive(false);
    setVolumeLevel(0);
  };

  // Visualizzatore canvas e calcolo volume
  const drawVisualizer = () => {
    if (!analyserRef.current || !canvasRef.current) return;

    const analyser = analyserRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const render = () => {
      animationFrameRef.current = requestAnimationFrame(render);
      analyser.getByteFrequencyData(dataArray);

      // Calcola livello volume medio (0-100)
      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        sum += dataArray[i];
      }
      const avg = sum / bufferLength;
      const normalizedLevel = Math.min(100, Math.round((avg / 128) * 100));
      setVolumeLevel(normalizedLevel);
      setPeakLevel((prev) => Math.max(prev, normalizedLevel));

      // Disegna barre di frequenza
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const barWidth = (canvas.width / bufferLength) * 2;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * canvas.height;

        // Gradiente da verde a smeraldo
        const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
        gradient.addColorStop(0, "#10b981");
        gradient.addColorStop(0.7, "#059669");
        gradient.addColorStop(1, "#ef4444");

        ctx.fillStyle = gradient;
        ctx.fillRect(x, canvas.height - barHeight, barWidth - 1, barHeight);
        x += barWidth;
      }
    };

    render();
  };

  // Toggle ascolto in cuffia
  const toggleLoopback = () => {
    const nextState = !loopbackEnabled;
    setLoopbackEnabled(nextState);
    if (loopbackGainRef.current) {
      loopbackGainRef.current.gain.value = nextState ? 1 : 0;
    }
  };

  // Registra un test vocale di 5 secondi
  const recordTest = () => {
    if (!streamRef.current) return;
    recordedChunksRef.current = [];
    setRecordedAudioUrl(null);

    try {
      const mediaRecorder = new MediaRecorder(streamRef.current);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          recordedChunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setRecordedAudioUrl(url);
        setIsRecording(false);
      };

      mediaRecorder.start();
      setIsRecording(true);

      // Ferma automaticamente dopo 5 secondi
      setTimeout(() => {
        if (mediaRecorder.state === "recording") {
          mediaRecorder.stop();
        }
      }, 5000);
    } catch (err) {
      console.error("Errore registrazione test:", err);
    }
  };

  useEffect(() => {
    return () => {
      stopMic();
    };
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Banner Privacy */}
      <div className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-emerald-800 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300">
        <ShieldCheck className="h-6 w-6 shrink-0 text-emerald-600 dark:text-emerald-400" />
        <div className="text-sm">
          <strong>Test 100% Locale e Privato:</strong> L&apos;audio del tuo microfono viene elaborato esclusivamente dalla Web Audio API del tuo browser. Nessun suono o registrazione viene inviato a server esterni.
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        {/* Controlli Principali */}
        <div className="flex flex-col items-center text-center">
          <div
            className={`flex h-20 w-20 items-center justify-center rounded-full transition-all ${
              isActive
                ? "bg-emerald-100 text-emerald-600 shadow-[0_0_30px_rgba(16,185,129,0.3)] dark:bg-emerald-950/60 dark:text-emerald-400"
                : "bg-zinc-100 text-zinc-400 dark:bg-zinc-800"
            }`}
          >
            {isActive ? <Mic className="h-10 w-10 animate-pulse" /> : <MicOff className="h-10 w-10" />}
          </div>

          <h2 className="mt-4 text-xl font-bold text-zinc-900 dark:text-white">
            {isActive ? "Microfono Attivo e in Ascolto" : "Verifica il Tuo Microfono Online"}
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            {isActive
              ? "Parla per testare volume, sensibilità e chiarezza in tempo reale."
              : "Premi il pulsante per concedere i permessi e testare i livelli audio."}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {!isActive ? (
              <button
                onClick={() => startMic(selectedDeviceId)}
                className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700"
              >
                <Mic className="h-5 w-5" /> Avvia Test Microfono
              </button>
            ) : (
              <button
                onClick={stopMic}
                className="flex items-center gap-2 rounded-xl bg-zinc-700 px-6 py-3 text-sm font-bold text-white shadow transition hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700"
              >
                <MicOff className="h-5 w-5" /> Ferma Test
              </button>
            )}
          </div>
        </div>

        {error && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/20 dark:text-red-400">
            {error}
          </div>
        )}

        {/* Dashboard Live quando attivo */}
        {isActive && (
          <div className="mt-8 space-y-6 border-t border-zinc-200 pt-6 dark:border-zinc-800">
            {/* Selettore Dispositivo */}
            {devices.length > 1 && (
              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Microfono Selezionato:
                </label>
                <select
                  value={selectedDeviceId}
                  onChange={(e) => {
                    setSelectedDeviceId(e.target.value);
                    startMic(e.target.value);
                  }}
                  className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                >
                  {devices.map((d) => (
                    <option key={d.deviceId} value={d.deviceId}>
                      {d.label || `Microfono (${d.deviceId.slice(0, 8)}...)`}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Barra Livello Volume (dB / Gauge) */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                <span className="flex items-center gap-1.5">
                  <Activity className="h-4 w-4 text-emerald-600" /> Livello Ingresso Vocale:
                </span>
                <span>{volumeLevel}%</span>
              </div>
              <div className="mt-2 h-4 w-full overflow-hidden rounded-full bg-zinc-100 p-0.5 dark:bg-zinc-800">
                <div
                  className="h-full rounded-full transition-all duration-75"
                  style={{
                    width: `${volumeLevel}%`,
                    backgroundColor: volumeLevel > 85 ? "#ef4444" : volumeLevel > 60 ? "#f59e0b" : "#10b981",
                  }}
                />
              </div>
            </div>

            {/* Visualizzatore Spettro Audio */}
            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Spettro Frequenze Vocali (Waveform):
              </label>
              <div className="mt-2 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 p-2 dark:border-zinc-800">
                <canvas ref={canvasRef} width={600} height={100} className="w-full h-24" />
              </div>
            </div>

            {/* Funzioni Aggiuntive: Loopback & Test Registrazione */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
              {/* Loopback in cuffia */}
              <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs font-bold text-zinc-900 dark:text-white">
                    <Headphones className="h-4 w-4 text-emerald-600" /> Ascolto Diretto (Cuffie)
                  </span>
                  <input
                    type="checkbox"
                    checked={loopbackEnabled}
                    onChange={toggleLoopback}
                    className="h-4 w-4 rounded accent-emerald-600 cursor-pointer"
                  />
                </div>
                <p className="mt-1 text-[11px] text-zinc-500">
                  Riproduce la tua voce nelle cuffie in tempo reale. Usa le cuffie per evitare effetto eco.
                </p>
              </div>

              {/* Registra 5s Test */}
              <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
                <span className="flex items-center gap-2 text-xs font-bold text-zinc-900 dark:text-white">
                  <Play className="h-4 w-4 text-emerald-600" /> Test di Ascolto Vocale (5s)
                </span>
                <p className="mt-1 text-[11px] text-zinc-500">
                  Registra un breve campione per sentire esattamente come ti sentono gli altri.
                </p>
                <button
                  onClick={recordTest}
                  disabled={isRecording}
                  className="mt-3 flex items-center gap-1.5 rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 disabled:opacity-50"
                >
                  {isRecording ? (
                    <>
                      <Square className="h-3 w-3 text-red-500 animate-pulse" />
                      <span>Registrazione in corso (5s)...</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-3 w-3" />
                      <span>Avvia Registrazione Test</span>
                    </>
                  )}
                </button>

                {recordedAudioUrl && (
                  <audio src={recordedAudioUrl} controls className="mt-3 w-full h-8" />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
