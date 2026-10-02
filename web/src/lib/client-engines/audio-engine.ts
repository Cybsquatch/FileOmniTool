import { Mp3Encoder } from "@breezystack/lamejs";

/**
 * Converte campioni Float32Array (-1.0 to 1.0) in Int16Array (-32768 to 32767) per LAME
 */
function floatTo16BitPCM(input: Float32Array): Int16Array {
  const output = new Int16Array(input.length);
  for (let i = 0; i < input.length; i++) {
    const s = Math.max(-1, Math.min(1, input[i]));
    output[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
  }
  return output;
}

/**
 * Decodifica qualsiasi file audio o traccia video usando la Web Audio API nativa
 */
export async function decodeAudioFile(file: File | Blob): Promise<AudioBuffer> {
  const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  const audioCtx = new AudioContextClass();

  try {
    const arrayBuffer = await file.arrayBuffer();
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
    return audioBuffer;
  } finally {
    audioCtx.close();
  }
}

/**
 * Codifica un AudioBuffer in formato MP3 con bitrate configurabile (128, 192, 320 kbps)
 */
export async function encodeAudioToMp3(
  audioBuffer: AudioBuffer,
  kbps: 128 | 192 | 320 = 192,
  onProgress?: (percent: number) => void
): Promise<Blob> {
  const channels = Math.min(2, audioBuffer.numberOfChannels);
  const sampleRate = audioBuffer.sampleRate;

  const leftChannelRaw = audioBuffer.getChannelData(0);
  const rightChannelRaw = channels === 2 ? audioBuffer.getChannelData(1) : leftChannelRaw;

  const leftPcm = floatTo16BitPCM(leftChannelRaw);
  const rightPcm = channels === 2 ? floatTo16BitPCM(rightChannelRaw) : leftPcm;

  const mp3Encoder = new Mp3Encoder(channels, sampleRate, kbps);
  const mp3Data: Uint8Array[] = [];
  const blockSize = 1152;
  const totalSamples = leftPcm.length;

  for (let i = 0; i < totalSamples; i += blockSize) {
    const leftChunk = leftPcm.subarray(i, i + blockSize);
    const rightChunk = channels === 2 ? rightPcm.subarray(i, i + blockSize) : leftChunk;

    const mp3buf = mp3Encoder.encodeBuffer(leftChunk, rightChunk);
    if (mp3buf.length > 0) {
      mp3Data.push(new Uint8Array(mp3buf));
    }

    if (onProgress && i % (blockSize * 20) === 0) {
      onProgress(Math.round((i / totalSamples) * 100));
    }
  }

  const endBuf = mp3Encoder.flush();
  if (endBuf.length > 0) {
    mp3Data.push(new Uint8Array(endBuf));
  }

  if (onProgress) onProgress(100);

  return new Blob(mp3Data as BlobPart[], { type: "audio/mp3" });
}

/**
 * Codifica un AudioBuffer in WAV a 16-bit Lossless (istantaneo in memoria)
 */
export function encodeAudioToWav(audioBuffer: AudioBuffer): Blob {
  const numChannels = audioBuffer.numberOfChannels;
  const sampleRate = audioBuffer.sampleRate;
  const format = 1; // PCM
  const bitDepth = 16;

  const left = audioBuffer.getChannelData(0);
  const right = numChannels === 2 ? audioBuffer.getChannelData(1) : null;
  const length = left.length * numChannels * 2;
  const buffer = new ArrayBuffer(44 + length);
  const view = new DataView(buffer);

  /* RIFF header */
  writeString(view, 0, "RIFF");
  view.setUint32(4, 36 + length, true);
  writeString(view, 8, "WAVE");

  /* FMT sub-chunk */
  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, format, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * numChannels * (bitDepth / 8), true);
  view.setUint16(32, numChannels * (bitDepth / 8), true);
  view.setUint16(34, bitDepth, true);

  /* data sub-chunk */
  writeString(view, 36, "data");
  view.setUint32(40, length, true);

  // Interleave and write 16-bit samples
  let offset = 44;
  for (let i = 0; i < left.length; i++) {
    const s1 = Math.max(-1, Math.min(1, left[i]));
    view.setInt16(offset, s1 < 0 ? s1 * 0x8000 : s1 * 0x7fff, true);
    offset += 2;

    if (right) {
      const s2 = Math.max(-1, Math.min(1, right[i]));
      view.setInt16(offset, s2 < 0 ? s2 * 0x8000 : s2 * 0x7fff, true);
      offset += 2;
    }
  }

  return new Blob([view], { type: "audio/wav" });
}

function writeString(view: DataView, offset: number, string: string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

/**
 * Taglia un AudioBuffer estraendo solo l'intervallo specificato in secondi [startTime, endTime]
 */
export function sliceAudioBuffer(
  audioBuffer: AudioBuffer,
  startTime: number,
  endTime: number
): AudioBuffer {
  const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  const audioCtx = new AudioContextClass();

  const sampleRate = audioBuffer.sampleRate;
  const numChannels = audioBuffer.numberOfChannels;

  const startOffset = Math.floor(Math.max(0, startTime) * sampleRate);
  const endOffset = Math.floor(Math.min(audioBuffer.duration, endTime) * sampleRate);
  const frameCount = Math.max(1, endOffset - startOffset);

  const slicedBuffer = audioCtx.createBuffer(numChannels, frameCount, sampleRate);

  for (let ch = 0; ch < numChannels; ch++) {
    const sourceData = audioBuffer.getChannelData(ch);
    const destData = slicedBuffer.getChannelData(ch);
    for (let i = 0; i < frameCount; i++) {
      destData[i] = sourceData[startOffset + i];
    }
  }

  audioCtx.close();
  return slicedBuffer;
}

/**
 * Amplifica il volume di un AudioBuffer applicando un moltiplicatore di guadagno (Gain)
 */
export function boostAudioBuffer(
  audioBuffer: AudioBuffer,
  gainFactor: number
): AudioBuffer {
  const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  const audioCtx = new AudioContextClass();

  const sampleRate = audioBuffer.sampleRate;
  const numChannels = audioBuffer.numberOfChannels;
  const length = audioBuffer.length;

  const boostedBuffer = audioCtx.createBuffer(numChannels, length, sampleRate);

  for (let ch = 0; ch < numChannels; ch++) {
    const src = audioBuffer.getChannelData(ch);
    const dst = boostedBuffer.getChannelData(ch);
    for (let i = 0; i < length; i++) {
      // Moltiplicazione del segnale con limitatore soft clipping per evitare distorsioni estreme
      const amplified = src[i] * gainFactor;
      // Funzione di soft clipping iperbolica per suono caldo senza distorsione metallica a gradino
      dst[i] = Math.tanh(amplified);
    }
  }

  audioCtx.close();
  return boostedBuffer;
}
