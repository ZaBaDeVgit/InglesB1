# Curso B1 Oxford · ZaBaDeV

Academia web de preparación independiente para el Oxford Test of English. Incluye Reading, Listening, Writing, Speaking, simulacros, estadísticas y una biblioteca que enlaza los PDFs de `PDF Temario`.

## Iniciar

Sirve la carpeta desde un servidor HTTP estático y abre la dirección local en Chrome o Edge. La escena Three.js, las fuentes y el motor de voz se cargan desde sus CDN; no abras `index.html` con `file://`.

## Kokoro Natural

Listening usa Kokoro-JS 1.2.1 y el modelo `onnx-community/Kokoro-82M-v1.0-ONNX`, ambos Apache-2.0. La voz predeterminada es Emma (`bf_emma`); también están disponibles Isabella, George y Fable.

El modelo ONNX cuantizado (~92 MB) se descarga solo al generar el primer audio, y Transformers.js lo conserva en la caché del navegador. La síntesis se ejecuta localmente; no se envía el texto del ejercicio a un servicio TTS. La primera descarga requiere conexión a Internet. El modelo no se guarda dentro del repositorio para evitar añadir un binario grande; el código y la integración sí forman parte de esta academia.

Las voces del sistema siguen disponibles como alternativa. La calidad y el acceso sin conexión dependen de las voces instaladas en el dispositivo y de la caché del navegador.

## Fuentes

- [Kokoro-JS](https://github.com/hexgrad/kokoro/tree/main/kokoro.js) · Apache-2.0
- [Modelo Kokoro-82M ONNX](https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX) · Apache-2.0
- [Voces y muestras de Kokoro](https://huggingface.co/hexgrad/Kokoro-82M/blob/main/VOICES.md)