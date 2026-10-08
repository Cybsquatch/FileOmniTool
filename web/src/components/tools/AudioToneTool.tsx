"use client";

import React, { useState, useRef, useEffect } from "react";
import { encodeAudioToWav } from "@/lib/client-engines/audio-engine";
import { Play, Square, Download, Volume2, Sparkles } from "lucide-react";

export const AudioToneTool: React.FC = () => {
  const [frequency, setFrequency] = useState<number>(165);
  const [waveType, setWaveType] = useState<OscillatorType>("sine");
  const [volume, setVolume] = useState<number>(0.8);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const startTone = () => {
    if (isPlaying) return;

    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = waveType;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);

    gain.gain.setValueAtTime(volume, ctx.currentTime);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();

    audioCtxRef.current = ctx;
    oscRef.current = osc;
    gainRef.current = gain;
    setIsPlaying(true);
  };

  const stopTone = () => {
    if (!isPlaying) return;

    if (oscRef.current) {
      try {
        oscRef.current.stop();
        oscRef.current.disconnect();
      } catch {
        // ignore
      }
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
    }

    audioCtxRef.current = null;
    oscRef.current = null;
    gainRef.current = null;
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying && oscRef.current && audioCtxRef.current) {
      oscRef.current.frequency.setValueAtTime(frequency, audioCtxRef.current.currentTime);
      oscRef.current.type = waveType;
    }
    if (isPlaying && gainRef.current && audioCtxRef.current) {
      gainRef.current.gain.setValueAtTime(volume, audioCtxRef.current.currentTime);
    }
  }, [frequency, waveType, volume, isPlaying]);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  const downloadWavTone = () => {
    const sampleRate = 44100;
    const duration = 5; // 5 secondi di tono
    const numSamples = sampleRate * duration;

    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioContextClass();
    const buffer = ctx.createBuffer(1, numSamples, sampleRate);
    const channel = buffer.getChannelData(0);

    for (let i = 0; i < numSamples; i++) {
      const t = i / sampleRate;
      channel[i] = Math.sin(2 * Math.PI * frequency * t) * volume;
    }
    ctx.close();

    const blob = encodeAudioToWav(buffer);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `tono-${frequency}Hz.wav`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        {/* Presets */}
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Frequenze Rapide e Pulizia Smartphone
          </label>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <button
              type="button"
              onClick={() => setFrequency(165)}
              className={`rounded-xl border p-3 text-left transition ${
                frequency === 165
                  ? "border-emerald-600 bg-emerald-50 text-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-300"
                  : "border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950"
              }`}
            >
              <div className="flex items-center gap-1.5 font-bold text-sm">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                <span>165 Hz</span>
              </div>
              <div className="mt-1 text-[11px] text-zinc-500">Espulsione Acqua Altoparlante</div>
            </button>

            <button
              type="button"
              onClick={() => setFrequency(432)}
              className={`rounded-xl border p-3 text-left transition ${
                frequency === 432
                  ? "border-emerald-600 bg-emerald-50 text-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-300"
                  : "border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950"
              }`}
            >
              <div className="font-bold text-sm">432 Hz</div>
              <div className="mt-1 text-[11px] text-zinc-500">Frequenza Armonica & Relax</div>
            </button>

            <button
              type="button"
              onClick={() => setFrequency(440)}
              className={`rounded-xl border p-3 text-left transition ${
                frequency === 440
                  ? "border-emerald-600 bg-emerald-50 text-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-300"
                  : "border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950"
              }`}
            >
              <div className="font-bold text-sm">440 Hz (La)</div>
              <div className="mt-1 text-[11px] text-zinc-500">Diapason & Accordatore</div>
            </button>

            <button
              type="button"
              onClick={() => setFrequency(1000)}
              className={`rounded-xl border p-3 text-left transition ${
                frequency === 1000
                  ? "border-emerald-600 bg-emerald-50 text-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-300"
                  : "border-zinc-200 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950"
              }`}
            >
              <div className="font-bold text-sm">1.000 Hz</div>
              <div className="mt-1 text-[11px] text-zinc-500">Test Audio Standard & Bip</div>
            </button>
          </div>
        </div>

        {/* Frequency Slider & Input */}
        <div className="mt-6 border-t border-zinc-100 pt-6 dark:border-zinc-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Frequenza Sonora:
            </span>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={20}
                max={20000}
                value={frequency}
                onChange={(e) => setFrequency(Math.max(20, Math.min(20000, parseInt(e.target.value) || 20)))}
                className="w-24 rounded-lg border border-zinc-200 bg-zinc-50 px-2 py-1 text-right font-mono font-bold text-sm dark:border-zinc-800 dark:bg-zinc-950"
              />
              <span className="font-bold text-sm text-zinc-500">Hz</span>
            </div>
          </div>

          <input
            type="range"
            min={20}
            max={5000}
            step={1}
            value={frequency}
            onChange={(e) => setFrequency(parseInt(e.target.value))}
            className="mt-3 w-full"
          />
        </div>

        {/* Waveform & Volume */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Forma d'Onda
            </label>
            <div className="mt-2 flex gap-2">
              {(["sine", "triangle", "square", "sawtooth"] as OscillatorType[]).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setWaveType(type)}
                  className={`capitalize rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                    waveType === type
                      ? "bg-emerald-600 text-white"
                      : "border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              <span className="uppercase tracking-wider">Volume Output</span>
              <span>{Math.round(volume * 100)}%</span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <Volume2 className="h-4 w-4 text-zinc-400" />
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Playback Controls & Download */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-100 pt-6 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            {!isPlaying ? (
              <button
                onClick={startTone}
                className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-emerald-500"
              >
                <Play className="h-5 w-5 fill-current" />
                <span>Riproduci Frequenza</span>
              </button>
            ) : (
              <button
                onClick={stopTone}
                className="flex items-center gap-2 rounded-xl bg-rose-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-rose-500"
              >
                <Square className="h-5 w-5 fill-current" />
                <span>Interrompi Riproduzione</span>
              </button>
            )}
          </div>

          <button
            onClick={downloadWavTone}
            className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            <Download className="h-4 w-4" />
            <span>Scarica Audio WAV (5 sec)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
