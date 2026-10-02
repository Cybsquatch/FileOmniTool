# ToolArchitectAgent - Report Ufficiale
**Ruolo:** Ingegnere dei Tool Client-Side & Discovery WebAssembly
**Data Generazione:** 2026-10-02 12:03:35
**Progetto:** FileOmniTool

---


## 1. Mappatura & Architettura dei Tool Client-Side (100% Legali & Browser-Based)

Tutti i tool elencati operano esclusivamente sul dispositivo dell'utente utilizzando le Web APIs native e runtime WebAssembly. Nessun file o dato binario viene trasferito su server esterni.

### A. Categoria Documenti & PDF (Libreria Core: `pdf-lib` + `pdfjs-dist`)
1. **Unisci PDF (PDF Merge)**: Combina molteplici documenti PDF riordinabili via drag-and-drop.
2. **Dividi PDF (PDF Split)**: Estrai pagine singole o intervalli di pagine (`1-3, 5, 8`).
3. **Ruota PDF (PDF Rotate)**: Ruota pagine di 90°, 180° o 270° e risalva il documento.
4. **Proteggi / Rimuovi Password PDF**: Crittografia client-side per proteggere documenti confidenziali.
5. **Estrai Immagini da PDF**: Estrae le bitmap interne contenute nel file PDF.

### B. Categoria Immagini (Tecnologia Core: HTML5 Canvas + Web Codecs)
1. **Convertitore Formati Immagini**: PNG, JPG, WebP, AVIF, BMP, ICO (inclusa generazione favicon .ico).
2. **Compressore Intelligente Immagini**: Compressione quantizzata con slider di qualità (0-100%) e preview dinamica prima del download.
3. **Ridimensionatore & Ritaglio**: Ridimensionamento in pixel o percentuale con mantenimento delle proporzioni (Aspect Ratio lock).
4. **Filtri Rapidi**: Scala di grigi, Inversione colori, Contrasto, Sfocatura e rimozione metadati EXIF (per tutelare la geolocalizzazione).

### C. Categoria Archivi (Libreria Core: `jszip`)
1. **Crea Archivio ZIP**: Trascina cartelle o file multipli e genera un archivio `.zip` compresso in memoria.
2. **Estrai Archivio ZIP**: Ispeziona il contenuto di un file ZIP, visualizza l'anteprima dei file ed estrai selettivamente o in blocco senza software esterni come WinRAR o 7-Zip.

### D. Categoria Dati, Codici & Testo
1. **Convertitore JSON $\leftrightarrow$ CSV**: Parsing bidirezionale per analisti dati e sviluppatori.
2. **Generatore di Hash Crittografici (Web Crypto API)**: MD5, SHA-1, SHA-256, SHA-512 (fondamentale per verificare l'integrità dei download).
3. **Codificatore/Decodificatore Base64**: Per testo e file binari (data URI).
4. **Generatore e Lettore di QR Code**: Creazione istantanea con personalizzazione colori.

### E. Roadmap Prossima release (WASM Avanzato)
* **OCR Locale (`tesseract.js`)**: Riconoscimento testo da foto e scansioni senza inviare l'immagine all'esterno.
* **Audio Trimmer & Converter (`ffmpeg.wasm` / Web Audio API)**: Tagliare MP3 o estrarre audio da video MP4 direttamente nel browser.

---

## 2. Specifiche Tecniche per lo Sviluppo di Nuovi Tool
- **Memory Buffer Limit**: Limite soft consigliato a 200MB per evitare il crash del tab su dispositivi mobile.
- **Web Workers**: Utilizzo di Web Workers dedicati per le operazioni computazionali pesanti (es. compressione immagini e hashing SHA-256) per mantenere l'interfaccia a 60fps.
- **Blob URLs**: Rilascio tempestivo dei puntatori Blob (`URL.revokeObjectURL`) per evitare memory leak nel browser.
