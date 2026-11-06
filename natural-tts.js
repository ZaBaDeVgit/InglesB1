const MODEL_ID = "onnx-community/Kokoro-82M-v1.0-ONNX";
const PACKAGE_URL = "https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/+esm";
let modelPromise;

async function loadModel(onProgress) {
  if (!modelPromise) {
    modelPromise = import(PACKAGE_URL)
      .then(({ KokoroTTS }) => KokoroTTS.from_pretrained(MODEL_ID, {
        dtype: "q8",
        device: "wasm",
        progress_callback: onProgress
      }))
      .catch(error => {
        modelPromise = null;
        throw error;
      });
  }
  return modelPromise;
}

function toWav(audio) {
  const samples = audio.audio;
  const sampleRate = audio.sampling_rate;
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);
  const writeText = (offset, text) => [...text].forEach((character, index) => view.setUint8(offset + index, character.charCodeAt(0)));

  writeText(0, "RIFF");
  view.setUint32(4, 36 + samples.length * 2, true);
  writeText(8, "WAVE");
  writeText(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeText(36, "data");
  view.setUint32(40, samples.length * 2, true);
  for (let index = 0; index < samples.length; index++) {
    const sample = Math.max(-1, Math.min(1, samples[index]));
    view.setInt16(44 + index * 2, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
  }
  return new Blob([buffer], { type: "audio/wav" });
}

export async function generateNaturalSpeech(text, { voice = "bf_emma", speed = 0.9, onProgress = () => {} } = {}) {
  const model = await loadModel(onProgress);
  const audio = await model.generate(text, { voice, speed });
  return toWav(audio);
}