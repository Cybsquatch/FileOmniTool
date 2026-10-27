"use client";

import React, { useState, useEffect, useRef } from "react";
import { Camera, CameraOff, Download, ShieldCheck, RefreshCw, FlipHorizontal, Sparkles } from "lucide-react";

export const WebcamTestTool: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>("");
  const [resolution, setResolution] = useState<{ width: number; height: number } | null>(null);
  const [fps, setFps] = useState<number>(0);
  const [isMirrored, setIsMirrored] = useState(true);
  const [snapshotUrl, setSnapshotUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const frameCountRef = useRef(0);
  const lastFpsTimeRef = useRef(performance.now());
  const fpsAnimationId = useRef<number | null>(null);

  const loadDevices = async () => {
    try {
      const all = await navigator.mediaDevices.enumerateDevices();
      const videoInputs = all.filter((d) => d.kind === "videoinput");
      setDevices(videoInputs);
      if (videoInputs.length > 0 && !selectedDeviceId) {
        setSelectedDeviceId(videoInputs[0].deviceId);
      }
    } catch (err) {
      console.warn("Impossibile elencare dispositivi video:", err);
    }
  };

  const startCamera = async (deviceId?: string) => {
    stopCamera();
    setError(null);
    setSnapshotUrl(null);

    try {
      const constraints: MediaStreamConstraints = {
        video: {
          deviceId: deviceId ? { exact: deviceId } : undefined,
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.setAttribute("playsinline", "true");
        await videoRef.current.play();

        const track = stream.getVideoTracks()[0];
        const settings = track.getSettings();
        if (settings.width && settings.height) {
          setResolution({ width: settings.width, height: settings.height });
        }

        setIsActive(true);
        await loadDevices();
        measureFps();
      }
    } catch (err: any) {
      console.error("Errore accesso webcam:", err);
      setError("Impossibile accedere alla webcam. Verifica che nessun altro programma la stia usando e concedi i permessi nel browser.");
    }
  };

  const stopCamera = () => {
    if (fpsAnimationId.current) {
      cancelAnimationFrame(fpsAnimationId.current);
      fpsAnimationId.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    setIsActive(false);
    setResolution(null);
    setFps(0);
  };

  const measureFps = () => {
    const checkFrame = () => {
      frameCountRef.current++;
      const now = performance.now();
      if (now - lastFpsTimeRef.current >= 1000) {
        setFps(frameCountRef.current);
        frameCountRef.current = 0;
        lastFpsTimeRef.current = now;
      }
      fpsAnimationId.current = requestAnimationFrame(checkFrame);
    };
    fpsAnimationId.current = requestAnimationFrame(checkFrame);
  };

  // Scatta foto istantanea
  const takeSnapshot = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 720;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (isMirrored) {
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
    }

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/png");
    setSnapshotUrl(dataUrl);
  };

  const downloadSnapshot = () => {
    if (!snapshotUrl) return;
    const a = document.createElement("a");
    a.href = snapshotUrl;
    a.download = `webcam_snapshot_${Date.now()}.png`;
    a.click();
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Banner Privacy */}
      <div className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-emerald-800 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300">
        <ShieldCheck className="h-6 w-6 shrink-0 text-emerald-600 dark:text-emerald-400" />
        <div className="text-sm">
          <strong>Privacy al 100% Garantita:</strong> Il flusso video della tua webcam viene renderizzato esclusivamente sul tuo monitor. Nessun fotogramma viene trasmesso o salvato su alcun server.
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        {/* Schermo Video Principale */}
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-black text-center dark:border-zinc-800">
          <video
            ref={videoRef}
            className={`h-80 w-full object-cover transition-transform ${isMirrored ? "-scale-x-100" : ""}`}
          />

          {!isActive && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/80 p-6 text-zinc-300">
              <CameraOff className="h-16 w-16 text-zinc-500 mb-3" />
              <div className="text-base font-bold text-white">La fotocamera non è attiva</div>
              <p className="text-xs text-zinc-400 max-w-sm mt-1">
                Premi il pulsante sottostante per verificare funzionamento, risoluzione e fluidità della tua webcam.
              </p>
              <button
                onClick={() => startCamera(selectedDeviceId)}
                className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-700"
              >
                <Camera className="h-5 w-5" /> Attiva e Testa Webcam
              </button>
            </div>
          )}

          {isActive && (
            <div className="absolute top-3 right-3 flex items-center gap-2 rounded-lg bg-black/60 px-3 py-1.5 text-xs font-mono text-white backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE • {fps} FPS</span>
            </div>
          )}
        </div>

        {error && (
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/20 dark:text-red-400">
            {error}
          </div>
        )}

        {/* Barra di Controllo Live */}
        {isActive && (
          <div className="mt-6 space-y-4">
            {/* Selettore Camera & Switch Specchio */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              {devices.length > 1 && (
                <div className="flex-1 min-w-[200px]">
                  <select
                    value={selectedDeviceId}
                    onChange={(e) => {
                      setSelectedDeviceId(e.target.value);
                      startCamera(e.target.value);
                    }}
                    className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-xs font-medium text-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                  >
                    {devices.map((d) => (
                      <option key={d.deviceId} value={d.deviceId}>
                        {d.label || `Fotocamera (${d.deviceId.slice(0, 8)}...)`}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <button
                onClick={() => setIsMirrored(!isMirrored)}
                className="flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                title="Inverti orizzontalmente come uno specchio"
              >
                <FlipHorizontal className="h-4 w-4" />
                <span>Effetto Specchio: {isMirrored ? "ON" : "OFF"}</span>
              </button>

              <button
                onClick={stopCamera}
                className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-100 dark:bg-red-950/40 dark:text-red-400"
              >
                Disattiva Webcam
              </button>
            </div>

            {/* Metriche Risoluzione */}
            {resolution && (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 pt-2">
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-center dark:border-zinc-800 dark:bg-zinc-950">
                  <div className="text-[11px] text-zinc-500">Risoluzione</div>
                  <div className="font-mono text-sm font-bold text-zinc-900 dark:text-white">
                    {resolution.width} × {resolution.height}
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-center dark:border-zinc-800 dark:bg-zinc-950">
                  <div className="text-[11px] text-zinc-500">Qualità Rilevata</div>
                  <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    {resolution.height >= 1080 ? "Full HD (1080p)" : resolution.height >= 720 ? "HD (720p)" : "SD"}
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-center dark:border-zinc-800 dark:bg-zinc-950">
                  <div className="text-[11px] text-zinc-500">Frame Rate (FPS)</div>
                  <div className="font-mono text-sm font-bold text-zinc-900 dark:text-white">
                    {fps} fps
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-center dark:border-zinc-800 dark:bg-zinc-950">
                  <div className="text-[11px] text-zinc-500">Proporzioni</div>
                  <div className="font-mono text-sm font-bold text-zinc-900 dark:text-white">
                    {(resolution.width / resolution.height).toFixed(2)}:1
                  </div>
                </div>
              </div>
            )}

            {/* Pulsante Scatta Foto Snapshot */}
            <div className="pt-2">
              <button
                onClick={takeSnapshot}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 py-3 text-sm font-bold text-white shadow transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900"
              >
                <Camera className="h-4 w-4" /> Scatta Foto Istantanea
              </button>
            </div>
          </div>
        )}

        {/* Anteprima Snapshot scattato */}
        {snapshotUrl && (
          <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center justify-between pb-3">
              <span className="text-xs font-bold text-zinc-900 dark:text-white">Foto Istantanea Scattata:</span>
              <button
                onClick={downloadSnapshot}
                className="flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-700"
              >
                <Download className="h-3.5 w-3.5" /> Scarica Foto PNG
              </button>
            </div>
            <img src={snapshotUrl} alt="Webcam Snapshot" className="rounded-lg border border-zinc-200 max-h-60 mx-auto dark:border-zinc-800" />
          </div>
        )}
      </div>
    </div>
  );
};
