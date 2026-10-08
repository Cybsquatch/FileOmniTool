import { ToolDefinition } from "./tools-registry";

export const EXPANDED_TOOLS: ToolDefinition[] = [
  // 1. PDF Page Number
  {
    id: "pdf-page-number",
    category: "pdf",
    iconName: "Hash",
    badge: { en: "New", it: "Nuovo" },
    popular: true,
    acceptedMime: ".pdf,application/pdf",
    maxSizeMB: 100,
    title: {
      en: "Add Page Numbers to PDF",
      it: "Aggiungi Numeri di Pagina a PDF"
    },
    description: {
      en: "Insert custom page numbers, roman numerals, or 'Page X of Y' into your PDF documents 100% in-browser.",
      it: "Inserisci numeri di pagina personalizzati, numerazione romana o 'Pagina X di Y' direttamente nel browser."
    },
    seoKeyword: {
      en: "add page numbers to pdf online free no upload",
      it: "aggiungere numeri di pagina pdf gratis senza caricamento"
    },
    metaTitle: {
      en: "Add Page Numbers to PDF Online Free (100% Private) | FileOmniTool",
      it: "Aggiungi Numeri di Pagina a PDF Gratis e Privato | FileOmniTool"
    },
    metaDescription: {
      en: "Number PDF pages client-side with custom positioning, font size, and format. Fast, free, and secure in-browser PDF numberer.",
      it: "Numera le pagine di qualsiasi file PDF senza caricarlo su server esterni. Scegli formato, posizione e carattere."
    },
    instructions: {
      en: [
        "Drag & drop your PDF document into the drop zone.",
        "Choose number position (bottom-center, bottom-right, top-center) and format.",
        "Select start page number (e.g. page 2 to skip cover page).",
        "Click 'Insert Page Numbers' and download your numbered PDF."
      ],
      it: [
        "Trascina il tuo documento PDF nell'area di rilascio.",
        "Scegli posizione (in basso al centro, a destra, ecc.) e formato ('Pagina X di Y').",
        "Imposta da quale pagina iniziare (es. pagina 2 per escludere la copertina).",
        "Clicca su 'Inserisci Numeri Pagina' e scarica il file finale."
      ]
    },
    faq: {
      en: [
        {
          question: "Can I skip numbering the title or cover page?",
          answer: "Yes, easily set 'Start numbering from page' to 2 or any other page to leave earlier pages unnumbered."
        },
        {
          question: "Are my documents safe?",
          answer: "Absolutely. All processing occurs inside your browser memory using WebAssembly. No files are uploaded to any server."
        }
      ],
      it: [
        {
          question: "Posso evitare di numerare la copertina?",
          answer: "Certamente. Imposta 'Inizia a numerare da pagina' su 2 per mantenere la prima pagina pulita senza numeri."
        },
        {
          question: "I miei file sono al sicuro?",
          answer: "Sì al 100%. Il file viene modificato nella memoria RAM del tuo dispositivo. Nessun dato lascia il tuo computer."
        }
      ]
    }
  },

  // 2. PDF to Text
  {
    id: "pdf-to-text",
    category: "pdf",
    iconName: "FileText",
    acceptedMime: ".pdf,application/pdf",
    maxSizeMB: 80,
    title: {
      en: "Extract Text from PDF",
      it: "Estrai Testo da PDF"
    },
    description: {
      en: "Extract raw readable text and paragraphs from PDF documents into pure TXT format without server uploads.",
      it: "Estrai testo puro e paragrafi da documenti PDF in formato TXT direttamente nel tuo dispositivo."
    },
    seoKeyword: {
      en: "extract text from pdf online free",
      it: "estrarre testo da pdf gratis online"
    },
    metaTitle: {
      en: "Extract Text from PDF Free & In-Browser | FileOmniTool",
      it: "Estrai Testo da PDF Gratis nel Browser | FileOmniTool"
    },
    metaDescription: {
      en: "Instant client-side PDF text extractor. Copy text or download TXT file with zero cloud storage.",
      it: "Estrai istantaneamente il testo contenuto nei documenti PDF. Copia negli appunti o scarica il file TXT."
    },
    instructions: {
      en: [
        "Select or drop your PDF document.",
        "The browser decodes text streams in memory instantly.",
        "Copy text to clipboard or download as clean .TXT file."
      ],
      it: [
        "Seleziona o trascina il tuo documento PDF.",
        "Il motore decodifica istantaneamente gli stream di testo in memoria.",
        "Copia il testo estratto negli appunti o scaricalo come file .TXT."
      ]
    },
    faq: {
      en: [
        {
          question: "Does this work on scanned image PDFs?",
          answer: "This tool extracts text directly embedded in native PDF documents. Pure scanned photo documents require OCR."
        }
      ],
      it: [
        {
          question: "Funziona su PDF scansionati come foto?",
          answer: "Il tool estrae testo nativo incorporato nel file PDF. Le scansioni fotografiche senza testo vettoriale richiedono OCR."
        }
      ]
    }
  },

  // 3. PDF Grayscale
  {
    id: "pdf-grayscale",
    category: "pdf",
    iconName: "Palette",
    acceptedMime: ".pdf,application/pdf",
    maxSizeMB: 100,
    title: {
      en: "Convert PDF to Grayscale (B&W)",
      it: "Converti PDF in Bianco e Nero"
    },
    description: {
      en: "Transform colored PDF documents to black and white grayscale to save printer toner and ink.",
      it: "Converti file PDF a colori in bianco e nero per risparmiare fino all'80% di inchiostro e toner di stampa."
    },
    seoKeyword: {
      en: "convert pdf to black and white grayscale",
      it: "convertire pdf in bianco e nero scala di grigi"
    },
    metaTitle: {
      en: "Convert PDF to Grayscale B&W Free | FileOmniTool",
      it: "Converti PDF in Bianco e Nero Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Convert color PDF to monochrome grayscale in-browser. Save ink and toner when printing.",
      it: "Trasforma PDF a colori in bianco e nero monocromatico. Risparmia inchiostro in fase di stampa."
    },
    instructions: {
      en: [
        "Upload your color PDF file.",
        "Select grayscale contrast mode.",
        "Click 'Convert to Black & White' and download."
      ],
      it: [
        "Carica il tuo file PDF a colori.",
        "Scegli la modalità di contrasto scala di grigi desiderata.",
        "Clicca su 'Converti in Bianco e Nero' e scarica il file per la stampa."
      ]
    },
    faq: {
      en: [
        {
          question: "Why convert a PDF to grayscale before printing?",
          answer: "Printing color PDFs on laser or inkjet printers often uses costly color cartridges. Converting to grayscale forces monochrome toner usage."
        }
      ],
      it: [
        {
          question: "Perché convertire un PDF in scala di grigi prima di stampare?",
          answer: "Stampare PDF a colori consuma inchiostro a colori prezioso. Convertendo in scala di grigi si forza l'uso del solo toner nero."
        }
      ]
    }
  },

  // 4. PDF Metadata
  {
    id: "pdf-metadata",
    category: "pdf",
    iconName: "FileEdit",
    acceptedMime: ".pdf,application/pdf",
    maxSizeMB: 100,
    title: {
      en: "Edit or Remove PDF Metadata",
      it: "Modifica o Rimuovi Metadati PDF"
    },
    description: {
      en: "Inspect, edit, or wipe Title, Author, Subject, Keywords, and Creator properties from PDF files.",
      it: "Visualizza, modifica o elimina Titolo, Autore, Oggetto, Keywords e Produttore dai tuoi file PDF."
    },
    seoKeyword: {
      en: "edit remove pdf metadata online private",
      it: "modificare rimuovere metadati pdf online gratis"
    },
    metaTitle: {
      en: "Edit or Remove PDF Metadata (Privacy Clean) | FileOmniTool",
      it: "Modifica o Elimina Metadati PDF (Privacy Clean) | FileOmniTool"
    },
    metaDescription: {
      en: "Inspect and sanitize PDF properties in your browser. Remove author and device trace with 1 click.",
      it: "Ispeziona e ripulisci le proprietà dei documenti PDF nel tuo browser. Elimina tracce d'autore in totale privacy."
    },
    instructions: {
      en: [
        "Upload your PDF to view current metadata fields.",
        "Edit fields or click 'Remove All Metadata' for privacy cleaning.",
        "Download your updated PDF."
      ],
      it: [
        "Carica il PDF per visualizzare i metadati correnti.",
        "Modifica i campi desiderati oppure clicca 'Rimuovi Tutti i Metadati' per sanificare il file.",
        "Scarica il PDF aggiornato."
      ]
    },
    faq: {
      en: [
        {
          question: "What metadata is stored inside PDFs?",
          answer: "PDFs can contain author name, creation software, operating system, and modification timestamps."
        }
      ],
      it: [
        {
          question: "Quali metadati sono salvati nei PDF?",
          answer: "I PDF possono contenere nome autore, software di creazione, sistema operativo e date di modifica."
        }
      ]
    }
  },

  // 5. PDF Organize
  {
    id: "pdf-organize",
    category: "pdf",
    iconName: "Layers",
    badge: { en: "Popular", it: "Popolare" },
    popular: true,
    acceptedMime: ".pdf,application/pdf",
    maxSizeMB: 120,
    title: {
      en: "Organize & Delete PDF Pages",
      it: "Riordina ed Elimina Pagine PDF"
    },
    description: {
      en: "Reorder page sequence, remove unwanted pages, or duplicate pages in PDF documents visually.",
      it: "Sposta, riordina, elimina pagine superflue o duplica fogli in documenti PDF con un'interfaccia visiva."
    },
    seoKeyword: {
      en: "organize reorder delete pdf pages online",
      it: "riordinare eliminare pagine pdf online gratis"
    },
    metaTitle: {
      en: "Organize & Delete PDF Pages Free In-Browser | FileOmniTool",
      it: "Riordina ed Elimina Pagine PDF Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Visually reorder, delete, and duplicate PDF pages client-side with zero cloud uploads. Fast and private.",
      it: "Riordina ed elimina pagine PDF direttamente nel browser in memoria locale senza caricamenti cloud."
    },
    instructions: {
      en: [
        "Upload your multi-page PDF document.",
        "Use arrow buttons to move pages up or down, or trash icon to delete.",
        "Click 'Save New PDF' to assemble and download."
      ],
      it: [
        "Carica il tuo documento PDF multipagina.",
        "Usa le frecce per spostare le pagine su o giù, o l'icona cestino per rimuovere pagine.",
        "Clicca su 'Salva Nuovo PDF' per generare e scaricare il documento riordinato."
      ]
    },
    faq: {
      en: [
        {
          question: "Can I duplicate specific pages?",
          answer: "Yes, click the duplicate icon on any page card to clone it in your document."
        }
      ],
      it: [
        {
          question: "Posso duplicare una pagina specifica?",
          answer: "Sì, clicca sull'icona di copia su qualsiasi miniatura per duplicare la pagina nel documento."
        }
      ]
    }
  },

  // 6. Image Crop
  {
    id: "image-crop",
    category: "image",
    iconName: "Crop",
    badge: { en: "Essential", it: "Essenziale" },
    popular: true,
    acceptedMime: "image/*",
    maxSizeMB: 50,
    title: {
      en: "Crop Image Online",
      it: "Ritaglia Immagini Online"
    },
    description: {
      en: "Crop photos with aspect ratio presets (1:1 Square, 16:9 YouTube, 9:16 Stories, 4:3) or freeform selection.",
      it: "Ritaglia foto con proporzioni fisse (1:1 Quadrato Instagram, 16:9 YouTube, 9:16 Stories) o ritaglio libero."
    },
    seoKeyword: {
      en: "crop image online free aspect ratio",
      it: "ritagliare immagini online gratis proporzioni"
    },
    metaTitle: {
      en: "Crop Image Online Free (1:1, 16:9, Freeform) | FileOmniTool",
      it: "Ritaglia Immagini Online Gratis (1:1, 16:9) | FileOmniTool"
    },
    metaDescription: {
      en: "Crop images client-side with preset aspect ratios or custom pixel dimensions. Instant download without uploading.",
      it: "Ritaglia foto con proporzioni fisse o libere nel tuo browser. Elaborazione istantanea senza upload."
    },
    instructions: {
      en: [
        "Upload your picture (JPG, PNG, WebP).",
        "Choose an aspect ratio preset or adjust crop boundaries.",
        "Click 'Crop & Save' and download your cropped image."
      ],
      it: [
        "Carica la tua foto (JPG, PNG, WebP).",
        "Seleziona il formato desiderato (1:1, 16:9, libero) e regola l'area.",
        "Clicca su 'Ritaglia e Salva' per scaricare l'immagine."
      ]
    },
    faq: {
      en: [
        {
          question: "What is the best crop ratio for Instagram?",
          answer: "1:1 for standard square posts and 4:5 for vertical feed posts. For Stories and Reels, use 9:16."
        }
      ],
      it: [
        {
          question: "Qual è il formato migliore per Instagram?",
          answer: "1:1 per i post quadrati e 9:16 per Stories e Reels verticali."
        }
      ]
    }
  },

  // 7. Image Blur
  {
    id: "image-blur",
    category: "image",
    iconName: "EyeOff",
    acceptedMime: "image/*",
    maxSizeMB: 50,
    title: {
      en: "Blur Image & Censor Data",
      it: "Sfoca Immagini & Censura Dati"
    },
    description: {
      en: "Censor sensitive information, faces, license plates, and credit card numbers or apply full artistic blur.",
      it: "Censura dati sensibili, volti, targhe automobilistiche e documenti oppure sfoca l'intera foto."
    },
    seoKeyword: {
      en: "blur image censor sensitive data online",
      it: "sfocare immagine censurare dati online gratis"
    },
    metaTitle: {
      en: "Blur Image & Censor Private Data Free | FileOmniTool",
      it: "Sfoca Immagine e Censura Dati Riservati | FileOmniTool"
    },
    metaDescription: {
      en: "Blur photos or specific confidential zones client-side. Protect privacy before sharing online.",
      it: "Sfoca foto o singole aree riservate direttamente nel browser per proteggere la tua privacy prima della condivisione."
    },
    instructions: {
      en: [
        "Upload the photo you want to censor.",
        "Select full blur or box censor mode over confidential zones.",
        "Adjust blur radius and click 'Save Blurred Image'."
      ],
      it: [
        "Carica l'immagine che desideri censurare.",
        "Scegli sfocatura intera o maschera mirata sui dati riservati.",
        "Regola l'intensità e clicca su 'Salva Immagine Sfocata'."
      ]
    },
    faq: {
      en: [
        {
          question: "Can someone unblur my image after download?",
          answer: "No. The blur filter permanently alters pixel values on the canvas before generating the new image file."
        }
      ],
      it: [
        {
          question: "Qualcuno può rimuovere la sfocatura dopo il salvataggio?",
          answer: "No. L'algoritmo di sfocatura modifica in modo irreversibile i pixel sul canvas prima del salvataggio."
        }
      ]
    }
  },

  // 8. Image Invert
  {
    id: "image-invert",
    category: "image",
    iconName: "Moon",
    acceptedMime: "image/*",
    maxSizeMB: 50,
    title: {
      en: "Invert Image Colors (Negative)",
      it: "Inverti Colori Immagine (Negativo)"
    },
    description: {
      en: "Create negative photos and invert color values for dark mode reading, diagrams, and sheet music.",
      it: "Crea foto in negativo e inverti i colori per spartiti musicali, schemi tecnici o modalità scura."
    },
    seoKeyword: {
      en: "invert image colors negative photo online",
      it: "invertire colori foto negativo online gratis"
    },
    metaTitle: {
      en: "Invert Image Colors Free (Negative Filter) | FileOmniTool",
      it: "Inverti Colori Foto Gratis (Filtro Negativo) | FileOmniTool"
    },
    metaDescription: {
      en: "Invert image colors client-side using HTML5 Canvas. Instant negative effect for pictures and diagrams.",
      it: "Inverti i colori di qualsiasi immagine nel tuo browser con un effetto negativo ad alta fedeltà."
    },
    instructions: {
      en: [
        "Upload your image (PNG, JPG, WebP).",
        "The negative inverted preview appears instantly.",
        "Click 'Download Inverted Image'."
      ],
      it: [
        "Carica la tua immagine (PNG, JPG, WebP).",
        "Visualizza l'anteprima negativa calcolata all'istante in memoria.",
        "Clicca su 'Scarica con Colori Invertiti'."
      ]
    },
    faq: {
      en: [
        {
          question: "What is color inversion useful for?",
          answer: "Converting white sheet music or blueprints to dark mode, or analyzing fine photographic details."
        }
      ],
      it: [
        {
          question: "A cosa serve l'inversione colore?",
          answer: "A trasformare spartiti o schemi a sfondo bianco in dark mode per non affaticare la vista, o per effetti artistici."
        }
      ]
    }
  },

  // 9. Image Flip
  {
    id: "image-flip",
    category: "image",
    iconName: "FlipHorizontal",
    acceptedMime: "image/*",
    maxSizeMB: 50,
    title: {
      en: "Flip & Mirror Image Online",
      it: "Specchia & Capovolgi Foto"
    },
    description: {
      en: "Flip photos horizontally (mirror selfie) or vertically (upside down) in one click.",
      it: "Specchia le tue foto in orizzontale (effetto specchio selfie) o capovolgile in verticale con 1 click."
    },
    seoKeyword: {
      en: "flip image horizontally vertically mirror online",
      it: "specchiare foto capovolgere immagine online gratis"
    },
    metaTitle: {
      en: "Flip Image Online (Mirror & Upside Down) | FileOmniTool",
      it: "Specchia e Capovolgi Foto Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Mirror photos horizontally or vertically client-side. Fast, free, and private image flipper.",
      it: "Specchia selfie e foto in orizzontale o verticale direttamente nel browser in totale sicurezza."
    },
    instructions: {
      en: [
        "Upload your photo.",
        "Click 'Mirror Horizontally' or 'Flip Vertically'.",
        "Download your flipped image."
      ],
      it: [
        "Carica la tua foto.",
        "Clicca su 'Specchia Orizzontalmente' o 'Capovolgi Verticalmente'.",
        "Scarica l'immagine riflessa."
      ]
    },
    faq: {
      en: [
        {
          question: "Why do front-camera selfies look reversed?",
          answer: "Smartphones mirror selfies on preview. Use this tool to restore the original natural orientation."
        }
      ],
      it: [
        {
          question: "Perché i selfie frontali risultano al contrario?",
          answer: "Le fotocamere frontali spesso invertono l'orientamento. Questo strumento ripristina la prospettiva reale."
        }
      ]
    }
  },

  // 10. Image Grayscale
  {
    id: "image-grayscale",
    category: "image",
    iconName: "Sliders",
    acceptedMime: "image/*",
    maxSizeMB: 50,
    title: {
      en: "Convert Image to Black and White",
      it: "Converti Foto in Bianco e Nero"
    },
    description: {
      en: "Turn color photos into professional monochrome black & white with contrast and brightness controls.",
      it: "Trasforma foto a colori in splendide immagini in bianco e nero con regolazione fine di contrasto e luce."
    },
    seoKeyword: {
      en: "convert image to black and white online free",
      it: "convertire foto in bianco e nero online gratis"
    },
    metaTitle: {
      en: "Convert Image to Black & White Online Free | FileOmniTool",
      it: "Converti Foto in Bianco e Nero Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Transform color images into high-contrast black and white photos in your browser without uploading.",
      it: "Trasforma foto a colori in bianco e nero ad alto contrasto senza caricare nulla sui server."
    },
    instructions: {
      en: [
        "Upload any color picture.",
        "Fine-tune grayscale percentage, contrast, and brightness.",
        "Download your monochromatic photo."
      ],
      it: [
        "Carica qualsiasi foto a colori.",
        "Regola la percentuale di bianco e nero, il contrasto e la luminosità.",
        "Scarica la foto monocromatica."
      ]
    },
    faq: {
      en: [
        {
          question: "Will image quality degrade?",
          answer: "No, the image maintains its full original pixel resolution while adjusting color grading."
        }
      ],
      it: [
        {
          question: "La qualità della foto diminuirà?",
          answer: "Assolutamente no: la foto mantiene la risoluzione nativa in pixel e la massima nitidezza."
        }
      ]
    }
  },

  // 11. Image to Base64
  {
    id: "image-to-base64",
    category: "image",
    iconName: "Code",
    acceptedMime: "image/*",
    maxSizeMB: 20,
    title: {
      en: "Image to Base64 Converter",
      it: "Converti Immagine in Base64"
    },
    description: {
      en: "Convert PNG, JPG, SVG, WebP, and GIF images into Base64 Data URI strings, HTML tags, and CSS snippets.",
      it: "Trasforma immagini PNG, JPG, SVG o WebP in stringhe Base64 Data URI, tag HTML e codice CSS."
    },
    seoKeyword: {
      en: "image to base64 converter online data uri",
      it: "convertire immagine in base64 online gratis data uri"
    },
    metaTitle: {
      en: "Image to Base64 Converter (Data URI & HTML) | FileOmniTool",
      it: "Converti Immagine in Base64 (Data URI & CSS) | FileOmniTool"
    },
    metaDescription: {
      en: "Convert pictures into Base64 Data URI code client-side. Copy raw Base64, HTML img tag, or CSS background.",
      it: "Converti foto e icone in codice Base64 Data URI nel browser. Copia con 1 click codice HTML o CSS."
    },
    instructions: {
      en: [
        "Drop your image file.",
        "The browser instantly encodes the file bytes into Base64.",
        "Copy Data URI, HTML tag, or CSS background-image snippet."
      ],
      it: [
        "Trascina il tuo file immagine.",
        "Il browser codifica istantaneamente i byte del file in Base64.",
        "Copia il Data URI, il tag HTML o la stringa CSS con un click."
      ]
    },
    faq: {
      en: [
        {
          question: "When should I embed images in Base64?",
          answer: "Ideal for small logos, icons, email templates, and self-contained HTML/CSS widgets to eliminate HTTP requests."
        }
      ],
      it: [
        {
          question: "Quando conviene usare immagini in Base64?",
          answer: "È ideale per piccole icone, loghi, template email o widget web autonomi per azzerare le richieste HTTP di rete."
        }
      ]
    }
  },

  // 12. Audio Speed
  {
    id: "audio-speed",
    category: "audio",
    iconName: "FastForward",
    badge: { en: "Popular", it: "Popolare" },
    popular: true,
    acceptedMime: "audio/*",
    maxSizeMB: 60,
    title: {
      en: "Change Audio Speed (Faster / Slower)",
      it: "Velocizza o Rallenta Audio"
    },
    description: {
      en: "Adjust playback speed from 0.5x to 2.5x for podcasts, lectures, audiobooks, and music.",
      it: "Modifica la velocità di riproduzione audio da 0.5x a 2.5x per lezioni, podcast, audiolibri e musica."
    },
    seoKeyword: {
      en: "speed up slow down audio online free",
      it: "velocizzare rallentare audio online gratis"
    },
    metaTitle: {
      en: "Change Audio Speed Online Free (0.5x - 2x) | FileOmniTool",
      it: "Velocizza o Rallenta Audio Gratis (0.5x - 2x) | FileOmniTool"
    },
    metaDescription: {
      en: "Speed up or slow down MP3, WAV, and audio tracks in your browser using Web Audio API.",
      it: "Accelera o rallenta brani musicali e registrazioni vocali direttamente nel tuo browser."
    },
    instructions: {
      en: [
        "Upload your audio recording.",
        "Select desired speed preset (e.g. 1.25x, 1.5x) or adjust the slider.",
        "Click 'Apply Speed' and download the re-encoded MP3 or WAV."
      ],
      it: [
        "Carica la registrazione audio.",
        "Scegli la velocità desiderata (es. 1.25x, 1.5x) o sposta il cursore.",
        "Clicca su 'Applica Nuova Velocità' e scarica il file MP3 o WAV."
      ]
    },
    faq: {
      en: [
        {
          question: "Does this affect audio quality?",
          answer: "The Web Audio API resamples the audio buffer in native 32-bit floating point precision."
        }
      ],
      it: [
        {
          question: "Viene mantenuta la qualità del suono?",
          answer: "Sì, la Web Audio API ricampiona il buffer audio con precisione a virgola mobile a 32 bit nativa."
        }
      ]
    }
  },

  // 13. Audio Reverse
  {
    id: "audio-reverse",
    category: "audio",
    iconName: "Undo2",
    acceptedMime: "audio/*",
    maxSizeMB: 60,
    title: {
      en: "Reverse Audio (Play Backwards)",
      it: "Audio al Contrario (Reverse)"
    },
    description: {
      en: "Reverse any song or voice recording to play backwards for sound design, effects, and fun.",
      it: "Inverti tracce musicali e registrazioni vocali per riprodurle al contrario nel tempo."
    },
    seoKeyword: {
      en: "reverse audio player backwards online",
      it: "ascoltare audio al contrario online gratis"
    },
    metaTitle: {
      en: "Reverse Audio Online Free (Play Backwards) | FileOmniTool",
      it: "Audio al Contrario Online Gratis (Reverse) | FileOmniTool"
    },
    metaDescription: {
      en: "Play and export songs and voice recordings backwards client-side using Web Audio API.",
      it: "Inverti audio e canzoni direttamente nel browser. Esporta la traccia invertita in MP3 o WAV."
    },
    instructions: {
      en: [
        "Upload audio file (MP3, WAV, AAC, M4A).",
        "Click 'Reverse Track' to invert audio samples in memory.",
        "Listen to the preview and download the backwards audio."
      ],
      it: [
        "Carica il file audio (MP3, WAV, AAC, M4A).",
        "Clicca su 'Inverti Traccia' per elaborare i campioni all'indietro.",
        "Ascolta l'anteprima e scarica la traccia audio rovesciata."
      ]
    },
    faq: {
      en: [
        {
          question: "Can I reverse voice notes from WhatsApp?",
          answer: "Yes, upload any audio or voice note to decode and reverse it instantly."
        }
      ],
      it: [
        {
          question: "Posso invertire i messaggi vocali di WhatsApp?",
          answer: "Sì, trascina il file audio per decodificarlo e ascoltarlo al contrario in un istante."
        }
      ]
    }
  },

  // 14. Audio Stereo to Mono
  {
    id: "audio-stereo-to-mono",
    category: "audio",
    iconName: "Radio",
    acceptedMime: "audio/*",
    maxSizeMB: 80,
    title: {
      en: "Convert Stereo Audio to Mono",
      it: "Converti Stereo in Mono"
    },
    description: {
      en: "Merge Left and Right stereo channels into a single centered mono track for podcasts and voice recordings.",
      it: "Unisci i canali sinistro e destro in una traccia mono bilanciata, ideale per podcast, interviste e voce."
    },
    seoKeyword: {
      en: "convert stereo audio to mono online",
      it: "convertire audio stereo in mono online gratis"
    },
    metaTitle: {
      en: "Convert Stereo to Mono Online Free | FileOmniTool",
      it: "Converti Audio da Stereo a Mono Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Merge L+R audio channels into mono client-side. Reduce file size and ensure broad compatibility.",
      it: "Fondi i canali stereo in mono direttamente nel browser. Riduci le dimensioni e ottimizza per la voce."
    },
    instructions: {
      en: [
        "Upload your stereo audio file.",
        "Select output format (MP3 or WAV).",
        "Click 'Convert to Mono' and download the centered audio."
      ],
      it: [
        "Carica il tuo file audio stereo.",
        "Scegli il formato desiderato (MP3 o WAV).",
        "Clicca su 'Converti in Traccia Mono' e scarica il file."
      ]
    },
    faq: {
      en: [
        {
          question: "Why convert podcasts from stereo to mono?",
          answer: "Spoken voice does not need stereo separation; mono cuts file size in half with zero loss in voice clarity."
        }
      ],
      it: [
        {
          question: "Perché convertire i podcast da stereo a mono?",
          answer: "La voce non necessita di separazione stereo: il formato mono dimezza le dimensioni senza alcuna perdita di chiarezza."
        }
      ]
    }
  },

  // 15. Audio Tone & Speaker Cleaner
  {
    id: "audio-tone",
    category: "audio",
    iconName: "Sparkles",
    badge: { en: "High Demand", it: "Molto Richiesto" },
    popular: true,
    acceptedMime: "none",
    title: {
      en: "Tone Generator & Speaker Water Eject",
      it: "Generatore Frequenze & Pulizia Altoparlanti"
    },
    description: {
      en: "Generate custom sound frequencies (20Hz - 20kHz), 165Hz water ejection tone for smartphones, and 440Hz tuning pitch.",
      it: "Genera frequenze sonore pure (20Hz - 20kHz), suono a 165Hz per espulsione acqua da smartphone e 440Hz per accordatore."
    },
    seoKeyword: {
      en: "speaker cleaner water eject sound frequency generator",
      it: "espulsione acqua altoparlante suono pulizia frequenze online"
    },
    metaTitle: {
      en: "Speaker Cleaner (Water Eject Sound) & Tone Generator | FileOmniTool",
      it: "Pulizia Altoparlanti (Espulsione Acqua 165Hz) & Toni Puri | FileOmniTool"
    },
    metaDescription: {
      en: "Fix muffled smartphone speakers with the 165Hz water eject frequency. Generate custom sine waves and download WAV files.",
      it: "Ripristina altoparlanti bagnati con la frequenza a 165Hz di espulsione acqua. Genera toni sinusoidali ed esporta in WAV."
    },
    instructions: {
      en: [
        "Select the 165Hz preset to eject water from wet phone speakers, or pick 432Hz/440Hz.",
        "Turn smartphone volume to maximum and place speaker facing downwards.",
        "Click 'Play Tone' or download the WAV audio file."
      ],
      it: [
        "Seleziona il preset a 165Hz per espellere l'acqua o scegli 432Hz/440Hz.",
        "Imposta il volume dello smartphone al massimo e posiziona gli speaker verso il basso.",
        "Clicca su 'Riproduci Frequenza' o scarica il file audio WAV."
      ]
    },
    faq: {
      en: [
        {
          question: "How does 165Hz sound eject water from speakers?",
          answer: "The 165Hz sine wave creates powerful acoustic pressure vibrations inside the speaker chamber, forcing out trapped moisture."
        }
      ],
      it: [
        {
          question: "Come fa il suono a 165Hz ad espellere l'acqua dagli altoparlanti?",
          answer: "L'onda sinusoidale a 165Hz crea una vibrazione a forte pressione acustica che spinge fisicamente all'esterno le gocce d'acqua intrappolate."
        }
      ]
    }
  },

  // 16. CSV to Markdown
  {
    id: "csv-to-markdown",
    category: "text",
    iconName: "Table",
    acceptedMime: ".csv,.tsv,.txt",
    maxSizeMB: 10,
    title: {
      en: "Convert CSV to Markdown Table",
      it: "Converti CSV in Tabella Markdown"
    },
    description: {
      en: "Transform CSV and Excel tables into clean Markdown format for GitHub README, Reddit, Notion, and Obsidian.",
      it: "Trasforma file CSV e fogli di calcolo in tabelle Markdown formattate per GitHub, Reddit, Notion e Obsidian."
    },
    seoKeyword: {
      en: "convert csv to markdown table online",
      it: "convertire csv in tabella markdown online gratis"
    },
    metaTitle: {
      en: "Convert CSV to Markdown Table Online Free | FileOmniTool",
      it: "Converti CSV in Tabella Markdown Online Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Convert spreadsheet CSV data to formatted Markdown tables client-side with custom alignment and column padding.",
      it: "Converti dati CSV in tabelle Markdown allineate. Ideale per documentazione tecnica e document sharing."
    },
    instructions: {
      en: [
        "Paste your CSV data or upload a .csv file.",
        "Select alignment (left, center, right).",
        "Copy formatted Markdown table or download as .md file."
      ],
      it: [
        "Incolla i dati CSV o carica un file .csv.",
        "Scegli l'allineamento delle colonne (sinistra, centro, destra).",
        "Copia il codice Markdown generato o scarica il file .md."
      ]
    },
    faq: {
      en: [
        {
          question: "Are delimiter commas inside quotes handled correctly?",
          answer: "Yes, our parser respects standard quoted CSV fields."
        }
      ],
      it: [
        {
          question: "Vengono gestite le virgole all'interno delle virgolette?",
          answer: "Sì, il parser gestisce i campi delimitati da doppi apici secondo lo standard RFC 4180."
        }
      ]
    }
  },

  // 17. Text to PDF
  {
    id: "text-to-pdf",
    category: "text",
    iconName: "FileText",
    acceptedMime: ".txt",
    maxSizeMB: 10,
    title: {
      en: "Convert Text to PDF Online",
      it: "Converti Testo in PDF"
    },
    description: {
      en: "Typeset notes, articles, contracts, and raw text into clean paginated A4 PDF documents.",
      it: "Impagina appunti, articoli, contratti e testi grezzi in documenti PDF A4 pronti per la stampa."
    },
    seoKeyword: {
      en: "convert text txt to pdf online free",
      it: "convertire testo txt in pdf online gratis"
    },
    metaTitle: {
      en: "Convert Text to PDF Online Free (A4 Paginated) | FileOmniTool",
      it: "Converti Testo in PDF Online Gratis (Formato A4) | FileOmniTool"
    },
    metaDescription: {
      en: "Transform plain text notes into clean paginated PDF documents client-side with customizable font sizes.",
      it: "Trasforma testo semplice e appunti in file PDF multipagina con margini perfetti per la stampa."
    },
    instructions: {
      en: [
        "Type or paste your text into the editor.",
        "Optionally set a header title and font size.",
        "Click 'Generate PDF Document' and download your A4 PDF."
      ],
      it: [
        "Scrivi o incolla il testo nell'editor.",
        "Inserisci facoltativamente un titolo e seleziona la dimensione carattere.",
        "Clicca su 'Genera Documento PDF' e scarica il file A4."
      ]
    },
    faq: {
      en: [
        {
          question: "Does it paginate long texts automatically?",
          answer: "Yes, our engine splits long texts across multiple A4 pages with typographic margins."
        }
      ],
      it: [
        {
          question: "Il testo viene impaginato automaticamente su più pagine?",
          answer: "Sì, il motore divide automaticamente il contenuto su più fogli A4 garantendo la massima leggibilità."
        }
      ]
    }
  },

  // 18. JSON Formatter
  {
    id: "json-formatter",
    category: "text",
    iconName: "Code",
    acceptedMime: ".json,.txt",
    maxSizeMB: 20,
    title: {
      en: "JSON Formatter & Beautifier",
      it: "JSON Formatter & Beautifier"
    },
    description: {
      en: "Format, indent, minify, and validate JSON code with real-time syntax error detection.",
      it: "Formatta, indenta, minifica e valida file JSON con rilevamento degli errori di sintassi in tempo reale."
    },
    seoKeyword: {
      en: "json formatter beautifier validator minify online",
      it: "formattare json online gratis validatore beautifier"
    },
    metaTitle: {
      en: "JSON Formatter, Beautifier & Validator Free | FileOmniTool",
      it: "JSON Formatter & Validatore Gratis nel Browser | FileOmniTool"
    },
    metaDescription: {
      en: "Format and validate JSON strings client-side. Indent with 2 spaces, 4 spaces, tabs, or minify in 1 click.",
      it: "Formatta e valida codice JSON nel browser. Indenta con 2 o 4 spazi, oppure minifica in un click."
    },
    instructions: {
      en: [
        "Paste your raw JSON code or upload a .json file.",
        "Select indentation (2 spaces, 4 spaces, tabs) or 'Minify'.",
        "Copy formatted code or download .json."
      ],
      it: [
        "Incolla il codice JSON o carica un file .json.",
        "Scegli l'indentazione (2 spazi, 4 spazi, tab) o 'Minifica'.",
        "Copia il codice formattato o scarica il file."
      ]
    },
    faq: {
      en: [
        {
          question: "Is my JSON private?",
          answer: "100% private. Parsing occurs inside your browser JavaScript runtime with zero server requests."
        }
      ],
      it: [
        {
          question: "I miei dati JSON rimangono privati?",
          answer: "Sì al 100%. Il parsing avviene nel runtime JavaScript del tuo browser senza invio di dati."
        }
      ]
    }
  },

  // 19. XML to JSON
  {
    id: "xml-json",
    category: "text",
    iconName: "ArrowLeftRight",
    acceptedMime: ".xml,.json,.txt",
    maxSizeMB: 20,
    title: {
      en: "Convert XML to JSON & JSON to XML",
      it: "Convertitore XML <-> JSON"
    },
    description: {
      en: "Bidirectional conversion between XML and JSON data formats using browser DOMParser.",
      it: "Conversione bidirezionale istantanea tra documenti XML e dati JSON tramite DOMParser nativo."
    },
    seoKeyword: {
      en: "xml to json converter json to xml online",
      it: "convertitore xml json online gratis"
    },
    metaTitle: {
      en: "Convert XML to JSON & JSON to XML Online Free | FileOmniTool",
      it: "Convertitore XML in JSON e JSON in XML Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Convert XML documents to JSON and vice-versa in your browser with zero cloud storage.",
      it: "Converti file XML in JSON e viceversa direttamente nel tuo browser in totale privacy."
    },
    instructions: {
      en: [
        "Select conversion direction (XML to JSON or JSON to XML).",
        "Paste your source code.",
        "Copy or download the converted output."
      ],
      it: [
        "Seleziona la direzione di conversione (XML a JSON o JSON a XML).",
        "Incolla il codice di origine.",
        "Copia o scarica il risultato convertito."
      ]
    },
    faq: {
      en: [
        {
          question: "How are XML attributes represented in JSON?",
          answer: "Attributes are mapped to a special '@attributes' object for full fidelity."
        }
      ],
      it: [
        {
          question: "Come vengono convertiti gli attributi XML in JSON?",
          answer: "Gli attributi vengono raggruppati in una chiave '@attributes' per preservare la struttura originale."
        }
      ]
    }
  },

  // 20. YAML to JSON
  {
    id: "yaml-json",
    category: "text",
    iconName: "ArrowLeftRight",
    acceptedMime: ".yaml,.yml,.json",
    maxSizeMB: 10,
    title: {
      en: "YAML to JSON & JSON to YAML",
      it: "Convertitore YAML <-> JSON"
    },
    description: {
      en: "Convert Docker Compose, Kubernetes manifests, and GitHub Actions configs between YAML and JSON.",
      it: "Converti file Docker Compose, manifest Kubernetes e workflow GitHub Actions tra YAML e JSON."
    },
    seoKeyword: {
      en: "yaml to json converter json to yaml online",
      it: "convertitore yaml json online gratis kubernetes docker"
    },
    metaTitle: {
      en: "YAML to JSON & JSON to YAML Converter | FileOmniTool",
      it: "Convertitore YAML <-> JSON Online Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Convert configuration files between YAML and JSON format client-side. Fast and private for developers.",
      it: "Converti configurazioni Docker e Kubernetes tra formato YAML e JSON senza uscire dal browser."
    },
    instructions: {
      en: [
        "Paste YAML or JSON into the input box.",
        "The converted output updates in real-time.",
        "Copy result or download as .yaml / .json file."
      ],
      it: [
        "Incolla il file YAML o JSON nella casella di input.",
        "Il risultato convertito si aggiorna in tempo reale.",
        "Copia il risultato o scarica il file."
      ]
    },
    faq: {
      en: [
        {
          question: "Is this tool suitable for Kubernetes YAML files?",
          answer: "Yes, it parses complex nested manifests, arrays, and string properties accurately."
        }
      ],
      it: [
        {
          question: "È adatto per configurazioni Kubernetes e Docker?",
          answer: "Sì, supporta strutture annidate, liste e proprietà tipiche dei manifest DevOps."
        }
      ]
    }
  },

  // 21. Keyword Density
  {
    id: "keyword-density",
    category: "text",
    iconName: "Search",
    acceptedMime: ".txt",
    maxSizeMB: 10,
    title: {
      en: "SEO Keyword Density Analyzer",
      it: "Analisi Densità Parole Chiave SEO"
    },
    description: {
      en: "Analyze copy keyword density, n-grams (single, 2-word, 3-word phrases), and prevent search engine keyword stuffing.",
      it: "Calcola frequenza e percentuale di densità delle parole chiave (1-gram, 2-gram, 3-gram) per ottimizzare la SEO."
    },
    seoKeyword: {
      en: "keyword density analyzer tool seo checker",
      it: "analisi densita parole chiave seo checker online gratis"
    },
    metaTitle: {
      en: "SEO Keyword Density Analyzer Tool Free | FileOmniTool",
      it: "Analisi Densità Parole Chiave SEO Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Calculate keyword density percentages for single words and multi-word phrases. Avoid keyword stuffing and rank higher.",
      it: "Analizza la densità delle parole chiave dei tuoi articoli web. Evita penalizzazioni Google per keyword stuffing."
    },
    instructions: {
      en: [
        "Paste your article or copy into the editor.",
        "View overall stats: word count, reading time, and lexical variety.",
        "Inspect 1-gram, 2-gram, and 3-gram density tables with SEO rating badges."
      ],
      it: [
        "Incolla il testo del tuo articolo nell'editor.",
        "Controlla le statistiche generali: conteggio parole, tempo di lettura e varietà.",
        "Esplora la tabella delle parole singole e frasi con le valutazioni SEO (1-3% ottimale)."
      ]
    },
    faq: {
      en: [
        {
          question: "What is the ideal SEO keyword density?",
          answer: "Between 1% and 2.5% is generally considered optimal for primary target phrases on Google."
        }
      ],
      it: [
        {
          question: "Qual è la densità ottimale per Google?",
          answer: "Tra l'1% e il 2.5% è la percentuale consigliata per posizionarsi senza incorrere in penalizzazioni."
        }
      ]
    }
  },

  // 22. Color Converter
  {
    id: "color-converter",
    category: "text",
    iconName: "Pipette",
    acceptedMime: "none",
    title: {
      en: "Color Code Converter (HEX, RGB, HSL, CMYK)",
      it: "Convertitore Codici Colore (HEX, RGB, HSL, CMYK)"
    },
    description: {
      en: "Convert colors seamlessly between HEX, RGB, HSL, and print CMYK with live picker and CSS variables.",
      it: "Converti codici colore tra HEX, RGB, HSL e CMYK da stampa con selettore visivo e variabili CSS."
    },
    seoKeyword: {
      en: "color converter hex rgb hsl cmyk online",
      it: "convertitore codici colore hex rgb cmyk online gratis"
    },
    metaTitle: {
      en: "Color Code Converter: HEX, RGB, HSL & CMYK | FileOmniTool",
      it: "Convertitore Codici Colore HEX, RGB, HSL, CMYK | FileOmniTool"
    },
    metaDescription: {
      en: "Convert color formats client-side with interactive visual palette and CSS code generation.",
      it: "Converti codici colore per grafica web e stampa tipografica direttamente nel browser."
    },
    instructions: {
      en: [
        "Pick a color visually or enter a HEX code.",
        "Adjust RGB channel sliders.",
        "Copy HEX, RGB, HSL, CMYK, or CSS variable format in one click."
      ],
      it: [
        "Scegli un colore dal selettore o digita un codice HEX.",
        "Regola i canali Rosso, Verde e Blu tramite i cursori.",
        "Copia il formato HEX, RGB, HSL, CMYK o CSS con un click."
      ]
    },
    faq: {
      en: [
        {
          question: "Why convert RGB to CMYK?",
          answer: "RGB is used for screens; CMYK is mandatory for professional offset printing presses."
        }
      ],
      it: [
        {
          question: "Perché convertire RGB in CMYK?",
          answer: "L'RGB è il modello per display; il CMYK è indispensabile per la stampa tipografica professionale."
        }
      ]
    }
  },

  // 23. HTML Entities
  {
    id: "html-entities",
    category: "text",
    iconName: "Code",
    acceptedMime: ".html,.txt",
    maxSizeMB: 10,
    title: {
      en: "HTML Entities Encoder & Decoder",
      it: "Codifica & Decodifica Entità HTML"
    },
    description: {
      en: "Encode accented characters and symbols (&, <, >, quotes, €) into HTML entities or decode back to readable text.",
      it: "Codifica caratteri accentati e simboli in entità HTML (&amp;, &lt;, &euro;) o decodifica in testo leggibile."
    },
    seoKeyword: {
      en: "html entities encoder decoder online",
      it: "codificare decodificare entita html online gratis"
    },
    metaTitle: {
      en: "HTML Entities Encoder & Decoder Free | FileOmniTool",
      it: "Codifica e Decodifica Entità HTML Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Encode special characters into safe HTML entities or decode back client-side. Prevents XSS and formatting issues.",
      it: "Trasforma caratteri speciali e accentati in entità web HTML sicure. Ideale per sviluppatori web e copywriter."
    },
    instructions: {
      en: [
        "Paste text or HTML snippet.",
        "Choose Encode or Decode mode, and Named vs Numeric entities.",
        "Copy converted result to clipboard."
      ],
      it: [
        "Incolla il testo o il codice HTML.",
        "Scegli la modalità Codifica o Decodifica.",
        "Copia il risultato convertito con un click."
      ]
    },
    faq: {
      en: [
        {
          question: "Why use HTML entities?",
          answer: "They prevent browsers from misinterpreting characters like '<' or '&' as HTML syntax and avoid encoding bugs."
        }
      ],
      it: [
        {
          question: "Perché usare le entità HTML?",
          answer: "Evitano che il browser interpreti simboli come '<' o '&' come codice HTML, prevenendo errori visivi e problemi di sicurezza."
        }
      ]
    }
  },

  // 24. Regex Tester
  {
    id: "regex-tester",
    category: "text",
    iconName: "Sparkles",
    acceptedMime: "none",
    title: {
      en: "Regular Expression (RegEx) Tester",
      it: "Tester Espressioni Regolari (RegEx)"
    },
    description: {
      en: "Test regular expressions with real-time match highlighting, captured groups inspector, and common regex presets.",
      it: "Testa pattern regex in tempo reale con evidenziazione visiva, analisi gruppi catturati e libreria di pattern pronti."
    },
    seoKeyword: {
      en: "regex tester online javascript regular expression",
      it: "regex tester online espressioni regolari javascript"
    },
    metaTitle: {
      en: "Online RegEx Tester with Realtime Highlighting | FileOmniTool",
      it: "Tester Espressioni Regolari RegEx con Evidenziazione | FileOmniTool"
    },
    metaDescription: {
      en: "Interactive regular expression tester with flags (g, i, m, s), group breakdown, and pre-built patterns for email, urls, and dates.",
      it: "Verifica pattern ed espressioni regolari in tempo reale nel browser. Include pattern pronti per email, URL e date."
    },
    instructions: {
      en: [
        "Enter your RegEx pattern and toggle flags (g, i, m, s).",
        "Type or paste your test text.",
        "Inspect matches highlighted in green and review captured groups."
      ],
      it: [
        "Inserisci il pattern RegEx e attiva i flag desiderati (g, i, m, s).",
        "Digita o incolla il testo di prova.",
        "Verifica le corrispondenze evidenziate in verde e la tabella dei gruppi catturati."
      ]
    },
    faq: {
      en: [
        {
          question: "Which RegEx flavor is used?",
          answer: "Native JavaScript ECMAScript RegEx engine directly running in your browser."
        }
      ],
      it: [
        {
          question: "Quale motore RegEx viene utilizzato?",
          answer: "Il motore ECMAScript nativo del tuo browser web, per una compatibilità al 100% con JavaScript e TypeScript."
        }
      ]
    }
  },

  // 25. Slug Generator
  {
    id: "slug-generator",
    category: "text",
    iconName: "Link2",
    acceptedMime: "none",
    title: {
      en: "SEO URL Slug Generator",
      it: "Generatore Slug URL SEO"
    },
    description: {
      en: "Convert article titles into clean, search-engine friendly URL slugs with accent transliteration.",
      it: "Trasforma titoli di articoli e pagine in indirizzi URL puliti e ottimizzati per Google e motori di ricerca."
    },
    seoKeyword: {
      en: "seo url slug generator kebab case online",
      it: "generatore slug url seo online gratis kebab case"
    },
    metaTitle: {
      en: "SEO URL Slug Generator Free | FileOmniTool",
      it: "Generatore Slug URL SEO Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Generate clean SEO-friendly URL slugs from titles client-side. Removes accents, special symbols, and stop words.",
      it: "Crea indirizzi URL web puliti e ottimizzati per la SEO a partire da qualsiasi titolo o frase."
    },
    instructions: {
      en: [
        "Type or paste your title into the box.",
        "Choose separator (dash '-' or underscore '_').",
        "Optionally strip Italian stop words and copy your SEO slug."
      ],
      it: [
        "Digita o incolla il titolo nell'apposita casella.",
        "Scegli il separatore (trattino '-' per kebab-case o underscore '_').",
        "Copia lo slug pronto per WordPress, Shopify o Next.js."
      ]
    },
    faq: {
      en: [
        {
          question: "Why should URLs use dashes instead of underscores?",
          answer: "Google officially recommends dashes (-) because its crawler treats dashes as word separators, whereas underscores combine words."
        }
      ],
      it: [
        {
          question: "Perché Google preferisce i trattini (-) agli underscore (_)?",
          answer: "Google considera il trattino come un separatore di parole, mentre interpreta l'underscore come parte della parola stessa."
        }
      ]
    }
  },

  // 26. File Checksum
  {
    id: "file-checksum",
    category: "archive",
    iconName: "ShieldCheck",
    badge: { en: "Security", it: "Sicurezza" },
    popular: true,
    acceptedMime: "*/*",
    maxSizeMB: 500,
    title: {
      en: "File Checksum & Hash Verifier",
      it: "Calcolatore Checksum & Integrità File"
    },
    description: {
      en: "Calculate MD5, SHA-256, SHA-1, and SHA-512 checksums to verify downloaded file integrity and authenticity.",
      it: "Calcola checksum MD5, SHA-256, SHA-1 e SHA-512 per verificare l'integrità e l'autenticità di qualsiasi file scaricato."
    },
    seoKeyword: {
      en: "file checksum md5 sha256 hash verifier online",
      it: "calcolare checksum file md5 sha256 online gratis integrita"
    },
    metaTitle: {
      en: "File Checksum & Integrity Verifier (MD5 & SHA-256) | FileOmniTool",
      it: "Calcola Checksum e Verifica Integrità File (MD5, SHA-256) | FileOmniTool"
    },
    metaDescription: {
      en: "Verify file integrity with MD5 and SHA-256 hashes client-side. Paste official checksum to confirm 100% genuine downloads.",
      it: "Verifica se un file scaricato è integro o manomesso confrontando i suoi hash crittografici in memoria."
    },
    instructions: {
      en: [
        "Drag and drop any file (installer, ISO, document, zip).",
        "Browser computes SHA-256, MD5, SHA-1 in memory.",
        "Paste the author's checksum in the compare box to confirm match."
      ],
      it: [
        "Trascina qualsiasi file (installer, ISO, archivio, documento).",
        "Il browser calcola SHA-256, MD5 e SHA-1 in memoria.",
        "Incolla l'hash del produttore nel campo di verifica per confermare l'integrità al 100%."
      ]
    },
    faq: {
      en: [
        {
          question: "What is a file checksum?",
          answer: "A digital fingerprint: if even a single byte of a file changes during download or tampering, the checksum changes completely."
        }
      ],
      it: [
        {
          question: "A cosa serve il checksum di un file?",
          answer: "È un'impronta digitale: se anche un solo byte del file viene corrotto o modificato, l'hash cambia radicalmente."
        }
      ]
    }
  },

  // 27. Hex Viewer
  {
    id: "hex-viewer",
    category: "archive",
    iconName: "Binary",
    acceptedMime: "*/*",
    maxSizeMB: 50,
    title: {
      en: "Hex Viewer & Binary File Dump",
      it: "Visualizzatore Esadecimale (Hex Dump)"
    },
    description: {
      en: "Inspect raw binary byte offsets, hexadecimal values, and ASCII representation of any file in-browser.",
      it: "Ispeziona byte grezzi, valori esadecimali e rappresentazione ASCII di qualsiasi file direttamente nel browser."
    },
    seoKeyword: {
      en: "hex viewer binary dump online free",
      it: "visualizzatore esadecimale hex dump file online gratis"
    },
    metaTitle: {
      en: "Online Hex Viewer & Binary File Dump | FileOmniTool",
      it: "Visualizzatore Esadecimale Hex Dump Online Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Inspect raw binary files in 16-byte hex dump rows with pagination client-side. Fast, free, and secure.",
      it: "Visualizza i byte esadecimali e i caratteri ASCII di qualsiasi file nel tuo browser senza upload."
    },
    instructions: {
      en: [
        "Upload any binary file (executable, image, document).",
        "Browse 16-byte rows showing Hex Offset, Bytes, and ASCII characters.",
        "Navigate pages or copy the dump."
      ],
      it: [
        "Carica qualsiasi file binario (eseguibile, foto, archivio).",
        "Esplora le righe a 16 byte con Offset, Byte esadecimali e caratteri ASCII.",
        "Sfoglia le pagine o copia il dump negli appunti."
      ]
    },
    faq: {
      en: [
        {
          question: "Can I inspect corrupted files?",
          answer: "Yes, the Hex Viewer reads raw byte streams regardless of file extension or corrupted headers."
        }
      ],
      it: [
        {
          question: "Posso analizzare file danneggiati?",
          answer: "Sì, l'Hex Viewer legge i byte grezzi indipendentemente dall'estensione o dallo stato del file."
        }
      ]
    }
  },

  // 28. Base64 to Image
  {
    id: "base64-to-image",
    category: "archive",
    iconName: "Image",
    acceptedMime: "none",
    title: {
      en: "Convert Base64 to Image File",
      it: "Converti Base64 in File Immagine"
    },
    description: {
      en: "Decode Base64 strings or Data URIs back into downloadable PNG, JPG, or WebP image files.",
      it: "Decodifica stringhe Base64 e Data URI in file immagine PNG, JPG o WebP scaricabili sul tuo computer."
    },
    seoKeyword: {
      en: "base64 to image converter download png jpg",
      it: "convertire base64 in immagine download png jpg online gratis"
    },
    metaTitle: {
      en: "Base64 to Image Converter (Download PNG / JPG) | FileOmniTool",
      it: "Converti Base64 in File Immagine (Download PNG / JPG) | FileOmniTool"
    },
    metaDescription: {
      en: "Decode Base64 Data URI strings into PNG or JPG pictures client-side. Live preview and instant download.",
      it: "Incolla qualsiasi stringa Base64 per visualizzare l'anteprima e scaricare direttamente il file immagine."
    },
    instructions: {
      en: [
        "Paste your Base64 string or Data URI.",
        "The preview image renders instantly.",
        "Click 'Download Image File' to save as PNG or JPG."
      ],
      it: [
        "Incolla la stringa Base64 o il Data URI.",
        "Visualizza l'anteprima istantanea dell'immagine decodificata.",
        "Clicca su 'Scarica File Immagine' per salvare la foto sul tuo dispositivo."
      ]
    },
    faq: {
      en: [
        {
          question: "Do I need the 'data:image/...' prefix?",
          answer: "Both work! You can paste raw Base64 characters or the full Data URI prefix."
        }
      ],
      it: [
        {
          question: "È necessario il prefisso 'data:image/...;base64,'?",
          answer: "Funziona con entrambi: puoi incollare sia la stringa Base64 grezza sia il prefisso Data URI completo."
        }
      ]
    }
  }
];
