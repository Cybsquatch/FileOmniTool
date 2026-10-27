import { EXPANDED_TOOLS } from "./tools-registry-expanded";
import { WAVE3_TOOLS } from "./tools-registry-wave3";
import { WAVE4_TOOLS } from "./tools-registry-wave4";
import { TOOLS_TRANSLATIONS } from "./i18n/tools-translations";

export interface ToolFaq {
  question: string;
  answer: string;
}

export interface LocalizedContent<T> {
  en: T;
  it: T;
  es?: T;
  fr?: T;
  de?: T;
  pt?: T;
  [key: string]: T | undefined;
}

export interface ToolDefinition {
  id: string;
  category: "pdf" | "image" | "audio" | "archive" | "text";
  iconName: string;
  badge?: LocalizedContent<string>;
  popular?: boolean;
  acceptedMime?: string;
  maxSizeMB?: number;
  
  // Localized texts
  title: LocalizedContent<string>;
  description: LocalizedContent<string>;
  seoKeyword: LocalizedContent<string>;
  metaTitle: LocalizedContent<string>;
  metaDescription: LocalizedContent<string>;
  instructions: LocalizedContent<string[]>;
  faq: LocalizedContent<ToolFaq[]>;
}

const BASE_TOOLS: ToolDefinition[] = [
  {
    id: "pdf-merge",
    category: "pdf",
    iconName: "FilePlus2",
    badge: { en: "Most Popular", it: "Più Usato" },
    popular: true,
    acceptedMime: ".pdf,application/pdf",
    maxSizeMB: 150,
    title: {
      en: "Merge PDF Online",
      it: "Unisci PDF Online"
    },
    description: {
      en: "Combine two or more PDF files into a single document directly in your browser. 100% private with zero cloud uploads.",
      it: "Combina due o più documenti PDF in un unico file direttamente nel browser, in totale privacy senza upload."
    },
    seoKeyword: {
      en: "merge pdf online free no upload",
      it: "unire pdf online gratis senza caricamento"
    },
    metaTitle: {
      en: "Merge PDF Free in Browser - 100% Private & No Upload | FileOmniTool",
      it: "Unisci PDF Gratis nel Browser - 100% Privato | FileOmniTool"
    },
    metaDescription: {
      en: "Merge multiple PDF documents client-side without uploading to any server. Fast, free, and secure in-browser PDF merger.",
      it: "Unisci file PDF senza caricarli su alcun server. Veloce, illimitato e completamente sicuro ed eseguito nel tuo browser."
    },
    instructions: {
      en: [
        "Drag & drop or select 2 or more PDF files to combine.",
        "Verify your uploaded files in the desired order.",
        "Click 'Merge PDFs' to assemble the final document in memory.",
        "Instantly download your combined PDF file."
      ],
      it: [
        "Trascina o seleziona 2 o più file PDF da unire.",
        "Visualizza i file caricati nell'ordine desiderato.",
        "Clicca su 'Unisci PDF' per generare il documento finale.",
        "Scarica istantaneamente il PDF combinato."
      ]
    },
    faq: {
      en: [
        {
          question: "Are my PDF files uploaded to your servers?",
          answer: "No, never. FileOmniTool uses WebAssembly and pdf-lib: the entire merging process takes place in your device's local RAM. No data ever leaves your computer."
        },
        {
          question: "Is there a limit on how many PDFs I can merge?",
          answer: "There are no arbitrary limits set by us. You can merge as many documents as your device memory allows."
        }
      ],
      it: [
        {
          question: "I miei file PDF vengono caricati su un server?",
          answer: "Assolutamente no. FileOmniTool utilizza WebAssembly e pdf-lib: l'intero processo di fusione avviene nella memoria RAM del tuo dispositivo. Nessun dato lascia mai il tuo browser."
        },
        {
          question: "C'è un limite al numero di PDF che posso unire?",
          answer: "Nessun limite imposto dal nostro sito. Puoi unire tutti i file che la memoria del tuo dispositivo consente di elaborare."
        }
      ]
    }
  },
  {
    id: "pdf-split",
    category: "pdf",
    iconName: "Split",
    badge: { en: "Popular", it: "Popolare" },
    popular: true,
    acceptedMime: ".pdf,application/pdf",
    maxSizeMB: 150,
    title: {
      en: "Split PDF",
      it: "Dividi PDF"
    },
    description: {
      en: "Extract specific pages or page ranges from your PDF document without uploading.",
      it: "Estrai pagine specifiche o separa intervalli dal tuo documento PDF."
    },
    seoKeyword: {
      en: "split pdf extract pages free online",
      it: "dividere pdf estrarre pagine gratis"
    },
    metaTitle: {
      en: "Split PDF & Extract Pages Online Free | FileOmniTool",
      it: "Dividi PDF ed Estrai Pagine Gratis Online | FileOmniTool"
    },
    metaDescription: {
      en: "Separate pages from a PDF file or extract only the ones you need with zero server uploads.",
      it: "Separa le pagine di un documento PDF o estrai solo quelle che ti servono con zero upload."
    },
    instructions: {
      en: [
        "Upload the PDF file you want to split.",
        "Specify the page range (e.g. '1-3' or '1, 4, 6').",
        "Click 'Split PDF' to process.",
        "Download your new PDF with only the selected pages."
      ],
      it: [
        "Carica il file PDF da dividere.",
        "Indica l'intervallo di pagine desiderato (es. '1-3' o '1, 4, 6').",
        "Clicca su 'Dividi PDF'.",
        "Scarica il nuovo file PDF con le pagine selezionate."
      ]
    },
    faq: {
      en: [
        {
          question: "How do I specify pages to extract?",
          answer: "You can enter individual numbers separated by commas (e.g. 1, 3, 5) or page ranges with hyphens (e.g. 2-5)."
        }
      ],
      it: [
        {
          question: "Come specifico le pagine da estrarre?",
          answer: "Puoi inserire numeri singoli separati da virgole (es. 1, 3, 5) oppure intervalli con trattino (es. 2-5)."
        }
      ]
    }
  },
  {
    id: "image-convert",
    category: "image",
    iconName: "RefreshCw",
    badge: { en: "Essential", it: "Essenziale" },
    popular: true,
    acceptedMime: "image/png,image/jpeg,image/webp,image/bmp",
    maxSizeMB: 50,
    title: {
      en: "Image Converter",
      it: "Convertitore Immagini"
    },
    description: {
      en: "Convert images instantly between PNG, JPEG, and WebP formats at lightning speed.",
      it: "Converti istantaneamente immagini tra formati PNG, JPEG e WebP ad altissima velocità."
    },
    seoKeyword: {
      en: "convert images png jpg webp free online",
      it: "convertire immagini png jpg webp gratis"
    },
    metaTitle: {
      en: "Free Online Image Converter (PNG, JPG, WebP) | FileOmniTool",
      it: "Convertitore Immagini Gratuito Online (PNG, JPG, WebP) | FileOmniTool"
    },
    metaDescription: {
      en: "Convert photos and illustrations to modern web formats (WebP, PNG, JPG) in real-time in your browser.",
      it: "Converti le tue foto e illustrazioni nei moderni formati web WebP, PNG o JPG in tempo reale."
    },
    instructions: {
      en: [
        "Upload the image you want to convert.",
        "Select your target format (WebP, PNG, or JPEG).",
        "Click 'Convert Image' to render via HTML5 Canvas.",
        "Download your newly formatted image."
      ],
      it: [
        "Carica la tua immagine da convertire.",
        "Seleziona il formato di destinazione (WebP, PNG o JPEG).",
        "Clicca su 'Converti Immagine' per avviare il rendering in Canvas.",
        "Scarica la nuova immagine ottimizzata."
      ]
    },
    faq: {
      en: [
        {
          question: "Why should I convert images to WebP?",
          answer: "WebP provides superior lossless and lossy compression, reducing file size by up to 30% compared to JPG/PNG while preserving crisp quality."
        }
      ],
      it: [
        {
          question: "Perché dovrei convertire le immagini in WebP?",
          answer: "WebP riduce le dimensioni del file fino al 30% rispetto a JPG o PNG preservando la trasparenza e un'ottima fedeltà visiva."
        }
      ]
    }
  },
  {
    id: "image-compress",
    category: "image",
    iconName: "Minimize2",
    badge: { en: "Save Space", it: "Risparmia Spazio" },
    popular: true,
    acceptedMime: "image/png,image/jpeg,image/webp",
    maxSizeMB: 50,
    title: {
      en: "Compress Images",
      it: "Comprimi Immagini"
    },
    description: {
      en: "Reduce image file size with an adjustable quality slider with no visible loss of detail.",
      it: "Riduci il peso delle tue foto regolando la qualità senza perdite evidenti."
    },
    seoKeyword: {
      en: "compress photos images online free client side",
      it: "comprimere foto e immagini online gratis"
    },
    metaTitle: {
      en: "Compress Images Online Without Quality Loss | FileOmniTool",
      it: "Comprimi Immagini Online Senza Perdita di Qualità | FileOmniTool"
    },
    metaDescription: {
      en: "Reduce JPEG, PNG, and WebP file sizes with an interactive quality slider. 100% in-browser processing.",
      it: "Riduci le dimensioni dei file JPEG e WebP con slider di qualità dinamico. Elaborazione 100% in-browser."
    },
    instructions: {
      en: [
        "Upload the photo or graphic you want to compress.",
        "Adjust the quality slider to find your preferred balance.",
        "Check the live preview and byte savings estimation.",
        "Download your compressed image."
      ],
      it: [
        "Carica l'immagine da comprimere.",
        "Imposta lo slider di compressione / qualità desiderata.",
        "Osserva l'anteprima e la stima del risparmio in byte.",
        "Scarica l'immagine compressa."
      ]
    },
    faq: {
      en: [
        {
          question: "Do compressed images preserve original dimensions?",
          answer: "Yes, compression optimizes the pixel encoding without altering width or height unless requested."
        }
      ],
      it: [
        {
          question: "Le immagini compresse mantengono la risoluzione originale?",
          answer: "Sì! La compressione ottimizza la codifica dei pixel preservando le proporzioni originali."
        }
      ]
    }
  },
  {
    id: "zip-create",
    category: "archive",
    iconName: "FolderArchive",
    badge: { en: "Utility", it: "Utility" },
    popular: true,
    maxSizeMB: 100,
    title: {
      en: "Create ZIP Archive",
      it: "Crea Archivio ZIP"
    },
    description: {
      en: "Compress multiple files into a single lightweight .zip archive directly in your browser.",
      it: "Comprimi molteplici file in un unico archivio .zip leggero e protetto."
    },
    seoKeyword: {
      en: "create zip file online free no software",
      it: "creare file zip online gratis senza programmi"
    },
    metaTitle: {
      en: "Create ZIP File Online Free in Browser | FileOmniTool",
      it: "Crea File ZIP Online Gratis nel Browser | FileOmniTool"
    },
    metaDescription: {
      en: "Pack and compress multiple files into a ZIP archive without installing WinRAR or 7-Zip.",
      it: "Crea e scarica archivi ZIP da qualsiasi file o documento senza installare software come WinRAR o 7-Zip."
    },
    instructions: {
      en: [
        "Drag and drop all files you want to include in the archive.",
        "Customize your output ZIP filename.",
        "Click 'Create ZIP Archive'.",
        "Instantly download your generated archive."
      ],
      it: [
        "Trascina tutti i file che desideri includere nell'archivio.",
        "Assegna un nome al file ZIP di output.",
        "Clicca su 'Crea ZIP'.",
        "Scarica l'archivio generato istantaneamente in locale."
      ]
    },
    faq: {
      en: [
        {
          question: "Can I add any file type to the ZIP?",
          answer: "Yes, our client-side JSZip engine supports any file format (PDF, images, text, code, audio, etc.)."
        }
      ],
      it: [
        {
          question: "Posso aggiungere qualsiasi tipo di file nello ZIP?",
          answer: "Sì, il motore JSZip supporta qualsiasi estensione (PDF, immagini, documenti, codice, ecc.)."
        }
      ]
    }
  },
  {
    id: "zip-extract",
    category: "archive",
    iconName: "ArchiveRestore",
    badge: { en: "Secure", it: "Sicuro" },
    popular: false,
    acceptedMime: ".zip,application/zip,application/x-zip-compressed",
    maxSizeMB: 100,
    title: {
      en: "Extract ZIP Files",
      it: "Estrai File ZIP"
    },
    description: {
      en: "Explore and unpack files inside a ZIP archive without any third-party software.",
      it: "Esplora ed estrai i file contenuti in un archivio ZIP senza software esterni."
    },
    seoKeyword: {
      en: "extract zip online free without software",
      it: "estrarre file zip online senza installare software"
    },
    metaTitle: {
      en: "Extract & Unzip Files Online Free | FileOmniTool",
      it: "Estrai e Visualizza ZIP Online Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Inspect and decompress ZIP archives right inside your browser with built-in zip bomb protection.",
      it: "Ispeziona e decomprimi archivi ZIP direttamente nel browser con protezione anti-zip bomb integrata."
    },
    instructions: {
      en: [
        "Upload the ZIP archive you want to inspect.",
        "View the contents list with individual file sizes.",
        "Download any extracted file individually."
      ],
      it: [
        "Carica l'archivio ZIP da esplorare.",
        "Visualizza la lista dei file interni con relative dimensioni.",
        "Scarica i file singoli o tutti insieme."
      ]
    },
    faq: {
      en: [
        {
          question: "Is it safe to inspect unknown ZIP files here?",
          answer: "Yes. FileOmniTool features automated zip-bomb protection that validates decompression ratios before allocating system memory."
        }
      ],
      it: [
        {
          question: "È sicuro aprire archivi ZIP sconosciuti?",
          answer: "FileOmniTool include guardrail di sicurezza contro le 'Zip-Bomb' controllando le dimensioni decompresse."
        }
      ]
    }
  },
  {
    id: "hash-generator",
    category: "text",
    iconName: "ShieldCheck",
    badge: { en: "Crypto", it: "Crittografia" },
    popular: false,
    maxSizeMB: 200,
    title: {
      en: "Cryptographic Hash Generator",
      it: "Generatore Hash Crittografici"
    },
    description: {
      en: "Calculate SHA-256, SHA-512, and SHA-1 checksums for texts or files using hardware Web Crypto APIs.",
      it: "Calcola le impronte crittografiche SHA-256, SHA-512, SHA-1 di testi o file tramite Web Crypto API."
    },
    seoKeyword: {
      en: "calculate hash sha256 sha512 file online",
      it: "calcolare hash sha256 sha512 file online"
    },
    metaTitle: {
      en: "SHA-256 Hash Generator & Checksum Online | FileOmniTool",
      it: "Generatore Hash SHA-256 e Checksum Online | FileOmniTool"
    },
    metaDescription: {
      en: "Calculate cryptographic SHA-256 or SHA-512 checksums for text and local files with native browser hardware security.",
      it: "Calcola e verifica l'impronta hash SHA-256 o SHA-512 di testi e file locali con crittografia hardware nativa del browser."
    },
    instructions: {
      en: [
        "Paste text or drop a local file from your computer.",
        "Select your cryptographic algorithm (SHA-256, SHA-512, or SHA-1).",
        "Copy the generated hexadecimal hash with one click."
      ],
      it: [
        "Incolla un testo oppure trascina un file dal tuo computer.",
        "Seleziona l'algoritmo (SHA-256, SHA-512 o SHA-1).",
        "Copia l'hash esadecimale generato con un click."
      ]
    },
    faq: {
      en: [
        {
          question: "How is the hash calculated?",
          answer: "We use the browser's native 'crypto.subtle.digest' API, leveraging your processor's hardware crypto instructions for ultra-fast performance."
        }
      ],
      it: [
        {
          question: "Come viene calcolato l'hash?",
          answer: "Viene utilizzata l'interfaccia nativa 'crypto.subtle.digest' del browser per una velocità ultra-rapida."
        }
      ]
    }
  },
  {
    id: "json-csv",
    category: "text",
    iconName: "Table",
    badge: { en: "Developer", it: "Per Sviluppatori" },
    popular: false,
    title: {
      en: "JSON to CSV Converter",
      it: "Convertitore JSON in CSV"
    },
    description: {
      en: "Transform JSON arrays into formatted CSV spreadsheets and vice versa instantly.",
      it: "Trasforma elenchi di dati JSON in fogli di calcolo CSV e viceversa in un istante."
    },
    seoKeyword: {
      en: "convert json to csv online free spreadsheet",
      it: "convertire json in csv online gratis"
    },
    metaTitle: {
      en: "Convert JSON to CSV and CSV to JSON Free | FileOmniTool",
      it: "Convertitore JSON in CSV e CSV in JSON Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Convert JSON data into tabular CSV spreadsheets ready for Excel or Google Sheets, with bidirectional conversion.",
      it: "Converti array di oggetti JSON in formato tabellare CSV pronto per Excel o Google Sheets."
    },
    instructions: {
      en: [
        "Paste your JSON code or load a .json file.",
        "Inspect the instant tabular/CSV output.",
        "Copy to clipboard or download as .csv."
      ],
      it: [
        "Incolla il tuo JSON o carica un file .json.",
        "Visualizza la conversione istantanea in tabella/CSV.",
        "Copia il testo negli appunti o scarica il file .csv."
      ]
    },
    faq: {
      en: [
        {
          question: "What happens with nested JSON objects?",
          answer: "Nested keys are automatically flattened to ensure clean, standard Excel/Sheets column headers."
        }
      ],
      it: [
        {
          question: "Cosa succede se il JSON contiene oggetti annidati?",
          answer: "Il convertitore appiattisce automaticamente le proprietà per creare colonne pulite e compatibili con Excel."
        }
      ]
    }
  },
  {
    id: "audio-convert",
    category: "audio",
    iconName: "Volume2",
    badge: { en: "High Demand", it: "Molto Richiesto" },
    popular: true,
    acceptedMime: "audio/*,.ogg,.wav,.mp3,.aac,.flac,.m4a,.webm",
    maxSizeMB: 80,
    title: {
      en: "Audio Converter (OGG, WAV to MP3)",
      it: "Convertitore Audio (OGG, WAV in MP3)"
    },
    description: {
      en: "Convert OGG, WAV, AAC, M4A, FLAC, and WebM audio files to high-quality MP3 (128/192/320 kbps) or lossless WAV in your browser.",
      it: "Converte file audio OGG, WAV, AAC, M4A, FLAC e WebM in MP3 di alta qualità (128/192/320 kbps) o WAV lossless direttamente nel browser."
    },
    seoKeyword: {
      en: "convert ogg to mp3 online free no upload",
      it: "convertire ogg in mp3 gratis senza caricamento"
    },
    metaTitle: {
      en: "Convert OGG to MP3 Online Free - 100% In-Browser | FileOmniTool",
      it: "Convertitore OGG in MP3 Gratis Online | FileOmniTool"
    },
    metaDescription: {
      en: "Convert OGG, WAV, and audio tracks to MP3 client-side. Zero cloud uploads, zero wait times, hardware-accelerated Web Audio processing.",
      it: "Converti file OGG, WAV e tracce audio in MP3 senza caricarli su alcun server. Veloce, gratuito e 100% privato."
    },
    instructions: {
      en: [
        "Upload any audio file (OGG, WAV, AAC, FLAC, M4A, or WebM).",
        "Select your output format (MP3 or WAV) and preferred MP3 bitrate.",
        "Click 'Convert' to process directly with the browser's Web Audio engine.",
        "Preview and download your converted audio file."
      ],
      it: [
        "Carica un file audio (OGG, WAV, AAC, FLAC, M4A o WebM).",
        "Scegli il formato di uscita (MP3 o WAV) e la qualità bitrate desiderata.",
        "Clicca su 'Converti' per elaborare in locale tramite la Web Audio API.",
        "Ascolta l'anteprima e scarica la traccia convertita."
      ]
    },
    faq: {
      en: [
        {
          question: "Can I convert OGG files from WhatsApp voice notes or games?",
          answer: "Yes! Modern browser Web Audio decodes OGG Vorbis and Opus streams natively and encodes them to universal MP3 files."
        },
        {
          question: "How long does audio conversion take?",
          answer: "Since your device's native CPU performs the encoding without network uploads or cloud queues, most 4-minute songs convert in less than 2 seconds."
        }
      ],
      it: [
        {
          question: "Posso convertire file OGG o note vocali?",
          answer: "Sì! Il motore Web Audio decodifica nativamente OGG Vorbis e Opus esportandoli in MP3 universale compatibile con ogni dispositivo."
        },
        {
          question: "Quanto tempo impiega la conversione?",
          answer: "Poiché l'elaborazione usa il processore del tuo PC senza attendere code cloud, un brano di 4 minuti viene convertito in 1-2 secondi."
        }
      ]
    }
  },
  {
    id: "audio-trim",
    category: "audio",
    iconName: "Scissors",
    badge: { en: "Cutter", it: "Taglia Audio" },
    popular: true,
    acceptedMime: "audio/*,.mp3,.ogg,.wav,.m4a,.aac",
    maxSizeMB: 80,
    title: {
      en: "Audio Trimmer & Ringtone Cutter",
      it: "Taglia Audio & Suonerie"
    },
    description: {
      en: "Cut, trim, and slice audio tracks to create custom ringtones and clips with live playback preview.",
      it: "Taglia e rifinisci tracce audio per creare suonerie personalizzate e spezzoni con anteprima in tempo reale."
    },
    seoKeyword: {
      en: "mp3 cutter trim audio online free no upload",
      it: "tagliare audio mp3 suoneria gratis online"
    },
    metaTitle: {
      en: "Free Online MP3 Cutter & Audio Trimmer | FileOmniTool",
      it: "Taglia Audio e Crea Suonerie MP3 Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Trim MP3, WAV, and audio tracks in your browser. Choose start and end points, preview, and save your trimmed clip with zero server upload.",
      it: "Taglia file MP3 e audio nel browser. Imposta inizio e fine, ascolta l'anteprima e salva la tua suoneria senza caricare file online."
    },
    instructions: {
      en: [
        "Upload the song or audio clip you want to trim.",
        "Adjust the Start and End sliders to select your favorite section.",
        "Click 'Trim and Save MP3' to slice the audio in memory.",
        "Listen to the preview and download your trimmed clip."
      ],
      it: [
        "Carica il brano o la registrazione che vuoi tagliare.",
        "Regola i selettori di Inizio e Fine per isolare la parte desiderata.",
        "Clicca su 'Taglia e Salva MP3' per eseguire il taglio in memoria.",
        "Ascolta l'anteprima e scarica lo spezzone pronto."
      ]
    },
    faq: {
      en: [
        {
          question: "Can I make phone ringtones with this tool?",
          answer: "Yes, you can easily cut a 30-second chorus from any MP3 or audio track and use it as a custom ringtone."
        }
      ],
      it: [
        {
          question: "Posso creare suonerie per il cellulare?",
          answer: "Certamente, puoi isolare il ritornello di 30 secondi di qualsiasi canzone e salvarlo come suoneria MP3 per iPhone o Android."
        }
      ]
    }
  },
  {
    id: "video-to-audio",
    category: "audio",
    iconName: "Video",
    badge: { en: "Extractor", it: "Estrai MP3" },
    popular: true,
    acceptedMime: "video/*,.mp4,.webm,.mov,.mkv",
    maxSizeMB: 150,
    title: {
      en: "Extract Audio from Video (MP4 to MP3)",
      it: "Estrai Audio da Video (MP4 in MP3)"
    },
    description: {
      en: "Extract the soundtrack from MP4, WebM, and MOV videos directly into an MP3 file with zero uploads.",
      it: "Estrai la colonna sonora da video MP4, WebM e MOV direttamente in formato MP3 senza caricare il video online."
    },
    seoKeyword: {
      en: "extract audio from mp4 online free no upload",
      it: "estrarre audio da video mp4 gratis"
    },
    metaTitle: {
      en: "Extract Audio from Video Online (MP4 to MP3) Free | FileOmniTool",
      it: "Estrai Audio da Video MP4 in MP3 Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Turn any video into an MP3 audio file inside your browser. Fast, private, and unlimited client-side extraction.",
      it: "Trasforma qualsiasi video in una traccia audio MP3 nel tuo browser. Veloce, privato e senza limiti."
    },
    instructions: {
      en: [
        "Upload your video file (MP4, WebM, or MOV).",
        "Click 'Extract MP3 Audio' to process the audio stream.",
        "Play the extracted track in the preview player.",
        "Download your high-quality MP3 soundtrack."
      ],
      it: [
        "Carica il file video (MP4, WebM o MOV).",
        "Clicca su 'Estrai Audio MP3' per separare la traccia sonora.",
        "Ascolta la traccia estratta nel player integrato.",
        "Scarica il file MP3 sul tuo computer o telefono."
      ]
    },
    faq: {
      en: [
        {
          question: "Do I need to upload huge video files to a server?",
          answer: "No! The browser reads the video container locally on your device and pulls out only the audio samples without wasting your internet bandwidth."
        }
      ],
      it: [
        {
          question: "Devo caricare video pesanti su internet?",
          answer: "No! Il browser estrae l'audio localmente dal contenitore video senza consumare giga di traffico dati né attendere upload lenti."
        }
      ]
    }
  },
  {
    id: "svg-to-png",
    category: "image",
    iconName: "ImageIcon",
    badge: { en: "High Res", it: "Alta Risoluzione" },
    popular: true,
    acceptedMime: ".svg,image/svg+xml",
    maxSizeMB: 20,
    title: {
      en: "SVG to PNG Converter (High Resolution)",
      it: "Convertitore SVG in PNG (Alta Risoluzione)"
    },
    description: {
      en: "Render vector SVG graphics into transparent PNG images at 1x, 2x, 4x, or 8x resolution scale for design and print.",
      it: "Trasforma grafiche vettoriali SVG in immagini PNG trasparenti a risoluzione 1x, 2x, 4x o 8x per stampa e grafica."
    },
    seoKeyword: {
      en: "convert svg to png high resolution free online",
      it: "convertire svg in png alta risoluzione trasparente gratis"
    },
    metaTitle: {
      en: "Convert SVG to PNG High Resolution Online Free | FileOmniTool",
      it: "Converti SVG in PNG ad Alta Risoluzione Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Convert vector SVG files to sharp transparent PNGs at up to 8x resolution in your browser with zero data leakage.",
      it: "Converti file vettoriali SVG in PNG nitidi e trasparenti fino a 8x di risoluzione direttamente nel tuo browser."
    },
    instructions: {
      en: [
        "Upload your vector .svg file.",
        "Choose your target resolution scale (1x, 2x HD, 4x Ultra HD, or 8x Print).",
        "Click 'Convert to PNG' to render in Canvas.",
        "Download your transparent PNG image."
      ],
      it: [
        "Carica il file vettoriale .svg.",
        "Scegli il moltiplicatore di risoluzione (1x, 2x HD, 4x Ultra HD, 8x Stampa).",
        "Clicca su 'Converti in PNG' per avviare il rendering Canvas.",
        "Scarica la tua immagine PNG con sfondo trasparente."
      ]
    },
    faq: {
      en: [
        {
          question: "Does the converted PNG maintain transparent backgrounds?",
          answer: "Yes, transparent vector backgrounds are fully preserved in the resulting PNG."
        }
      ],
      it: [
        {
          question: "La trasparenza dell'SVG viene mantenuta?",
          answer: "Sì, tutti i livelli trasparenti del file vettoriale rimangono intatti nel file PNG generato."
        }
      ]
    }
  },
  {
    id: "qr-generator",
    category: "text",
    iconName: "QrCode",
    badge: { en: "Custom", it: "Personalizzato" },
    popular: true,
    title: {
      en: "Custom QR Code Generator",
      it: "Generatore QR Code Personalizzato"
    },
    description: {
      en: "Generate custom QR codes for websites, texts, contacts, and Wi-Fi networks with instant high-resolution PNG download.",
      it: "Crea codici QR personalizzati per siti web, testi e Wi-Fi con download istantaneo in PNG ad alta definizione."
    },
    seoKeyword: {
      en: "free qr code generator online no signup hd",
      it: "creare qr code gratis online senza registrazione"
    },
    metaTitle: {
      en: "Free Custom QR Code Generator Online (HD PNG) | FileOmniTool",
      it: "Generatore QR Code Gratis Online ad Alta Risoluzione | FileOmniTool"
    },
    metaDescription: {
      en: "Create beautiful, customized QR codes instantly with customizable colors and error correction. 100% free with no sign-up.",
      it: "Crea subito codici QR con colori personalizzati e correzione degli errori. 100% gratuito e senza registrazione."
    },
    instructions: {
      en: [
        "Enter your website URL, text, or message.",
        "Customize the QR color and error correction level.",
        "Preview the generated QR code in real-time.",
        "Download as a sharp PNG or copy the image directly."
      ],
      it: [
        "Inserisci l'indirizzo del tuo sito web o testo.",
        "Scegli il colore del codice e il livello di correzione errore.",
        "Visualizza l'anteprima del codice generato in tempo reale.",
        "Scarica il file PNG ad alta risoluzione o copia l'immagine."
      ]
    },
    faq: {
      en: [
        {
          question: "Do these QR codes ever expire?",
          answer: "No, they are static standard QR codes and will work forever without relying on external redirects."
        }
      ],
      it: [
        {
          question: "I codici QR generati hanno una scadenza?",
          answer: "No, sono codici QR statici standard e funzioneranno per sempre senza dipendere da reindirizzamenti esterni."
        }
      ]
    }
  },
  {
    id: "pdf-rotate",
    category: "pdf",
    iconName: "RotateCw",
    badge: { en: "Useful", it: "Utile" },
    popular: false,
    acceptedMime: ".pdf,application/pdf",
    maxSizeMB: 150,
    title: {
      en: "Rotate PDF Pages",
      it: "Ruota Pagine PDF"
    },
    description: {
      en: "Rotate all pages in your PDF document by 90°, 180°, or 270° clockwise permanently in your browser.",
      it: "Ruota tutte le pagine del tuo documento PDF di 90°, 180° o 270° in senso orario in modo permanente nel browser."
    },
    seoKeyword: {
      en: "rotate pdf online free permanent no upload",
      it: "ruotare pagine pdf gratis online"
    },
    metaTitle: {
      en: "Rotate PDF Online Free (Permanent Rotation) | FileOmniTool",
      it: "Ruota Pagine PDF Online Gratis Permanente | FileOmniTool"
    },
    metaDescription: {
      en: "Fix upside-down and sideways scanned PDF pages. Rotate 90, 180, or 270 degrees in your browser without uploading.",
      it: "Raddrizza PDF capovolti o ruotati di lato. Ruota di 90, 180 o 270 gradi direttamente nel tuo browser senza upload."
    },
    instructions: {
      en: [
        "Upload the PDF document you need to reorient.",
        "Select your rotation angle (90° Right, 180° Flip, or 270° Left).",
        "Click 'Rotate PDF' to apply the transformation in memory.",
        "Download your reoriented PDF file."
      ],
      it: [
        "Carica il documento PDF che desideri riorientare.",
        "Seleziona l'angolo di rotazione (90° Destra, 180° Capovolgi o 270° Sinistra).",
        "Clicca su 'Ruota PDF' per applicare la trasformazione in memoria.",
        "Scarica il nuovo file PDF con le pagine corrette."
      ]
    },
    faq: {
      en: [
        {
          question: "Is the rotation permanent when printed or opened on mobile?",
          answer: "Yes, the rotation angle metadata is permanently embedded into the PDF structure."
        }
      ],
      it: [
        {
          question: "La rotazione è permanente anche per la stampa?",
          answer: "Sì, l'orientamento viene salvato permanentemente nella struttura del documento PDF."
        }
      ]
    }
  },
  {
    id: "excel-convert",
    category: "text",
    iconName: "FileSpreadsheet",
    badge: { en: "Office & Data", it: "Ufficio & Dati" },
    popular: true,
    acceptedMime: ".xlsx,.xls,.ods,.csv",
    maxSizeMB: 50,
    title: {
      en: "Excel Converter & Viewer (XLSX to CSV, JSON)",
      it: "Convertitore & Visualizzatore Excel (XLSX in CSV, JSON)"
    },
    description: {
      en: "Open, view, and convert Microsoft Excel spreadsheets (.xlsx, .xls, .ods) to CSV, JSON, and XLSX directly in your browser. 100% private, no file uploads.",
      it: "Apri, visualizza e converti fogli di calcolo Excel (.xlsx, .xls, .ods) in CSV, JSON e XLSX nel tuo browser. 100% privato senza upload."
    },
    seoKeyword: {
      en: "convert excel to csv online free xlsx viewer no upload",
      it: "convertire excel in csv online gratis visualizzatore xlsx"
    },
    metaTitle: {
      en: "Free Online Excel Converter & Viewer (XLSX to CSV / JSON) | FileOmniTool",
      it: "Convertitore Excel in CSV e JSON Gratis Online | FileOmniTool"
    },
    metaDescription: {
      en: "Open and convert Excel spreadsheets without Microsoft Office or Google Sheets. Client-side XLSX preview and CSV/JSON export with zero server upload.",
      it: "Apri e converti fogli Excel senza installare Office. Anteprima XLSX ed esportazione rapida in CSV e JSON con zero caricamenti sul server."
    },
    instructions: {
      en: [
        "Upload your Excel spreadsheet (.xlsx, .xls, .ods, or .csv).",
        "View your table data and sheet names directly in the interactive browser preview.",
        "Choose your export format: CSV, structured JSON, or regenerated XLSX.",
        "Instantly download your converted data file."
      ],
      it: [
        "Trascina o carica il tuo foglio di calcolo Excel (.xlsx, .xls, .ods o .csv).",
        "Visualizza l'anteprima interattiva delle righe e delle colonne nel browser.",
        "Seleziona il formato desiderato: CSV, JSON strutturato o XLSX rigenerato.",
        "Scarica istantaneamente il file convertito sul tuo dispositivo."
      ]
    },
    faq: {
      en: [
        {
          question: "Are my confidential spreadsheets uploaded to any cloud server?",
          answer: "Never. FileOmniTool executes the spreadsheet engine (SheetJS) entirely within your web browser's local memory. Your sensitive financial and personal numbers never touch our servers."
        },
        {
          question: "What spreadsheet formats are supported?",
          answer: "You can load modern Excel workbooks (.xlsx), legacy Excel files (.xls), OpenDocument Spreadsheets (.ods), and comma-separated values (.csv)."
        }
      ],
      it: [
        {
          question: "I miei dati contabili o aziendali vengono inviati a server esterni?",
          answer: "Assolutamente no. Il motore SheetJS gira al 100% nella memoria RAM del tuo dispositivo. Nessun numero o formula lascia mai il tuo computer."
        },
        {
          question: "Quali formati di foglio di calcolo sono supportati?",
          answer: "Supporta file Excel moderni (.xlsx), versioni legacy (.xls), fogli OpenDocument (.ods) e file CSV standard."
        }
      ]
    }
  },
  {
    id: "docx-convert",
    category: "text",
    iconName: "FileText",
    badge: { en: "Word Suite", it: "Suite Word" },
    popular: true,
    acceptedMime: ".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    maxSizeMB: 50,
    title: {
      en: "Word DOCX Viewer & Converter (to HTML / Text)",
      it: "Visualizzatore & Convertitore Word DOCX (in HTML / Testo)"
    },
    description: {
      en: "Read, preview, and convert Microsoft Word .docx documents into clean HTML or plain text with word count. Zero software installation required.",
      it: "Leggi, visualizza e converti documenti Microsoft Word .docx in HTML o testo puro con conteggio parole. Nessuna installazione richiesta."
    },
    seoKeyword: {
      en: "docx viewer online free convert docx to html text",
      it: "visualizzatore docx online gratis convertire docx in testo"
    },
    metaTitle: {
      en: "Free Word DOCX Viewer & Converter (DOCX to HTML / TXT) | FileOmniTool",
      it: "Visualizzatore Word DOCX e Convertitore in HTML / Testo | FileOmniTool"
    },
    metaDescription: {
      en: "Open and view Word DOCX files online without Microsoft Office. Export to clean HTML or plain text with complete data privacy.",
      it: "Apri e visualizza documenti Word DOCX online senza installare Office. Esporta in codice HTML o testo semplice in totale riservatezza."
    },
    instructions: {
      en: [
        "Upload your Microsoft Word document (.docx).",
        "Read the formatted text, headings, and lists in the browser preview.",
        "Check automatic word and character statistics.",
        "Download as an HTML webpage, raw TXT file, or copy all text to clipboard."
      ],
      it: [
        "Carica il tuo file Word (.docx).",
        "Leggi il documento formattato con titoli, grassetti ed elenchi nell'anteprima.",
        "Controlla le statistiche istantanee sul numero di parole e caratteri.",
        "Scarica come pagina HTML, file di testo TXT o copia tutto negli appunti."
      ]
    },
    faq: {
      en: [
        {
          question: "Can I open DOCX files without Microsoft Word installed?",
          answer: "Yes! Our in-browser parser renders Word XML formatting directly into native HTML5 elements without requiring Word, Office 365, or Google Docs."
        },
        {
          question: "Are my contracts and personal documents private?",
          answer: "Completely private. The extraction runs on your local CPU. Nothing is ever sent over the network."
        }
      ],
      it: [
        {
          question: "Posso aprire file DOCX senza avere Microsoft Word installato?",
          answer: "Sì! Il parser integrato legge la struttura XML del file DOCX e la renderizza in HTML nativo senza bisogno di licenze Office."
        },
        {
          question: "I miei contratti o testi riservati rimangono privati?",
          answer: "Al 100%. L'elaborazione avviene interamente sul processore del tuo dispositivo locale, senza alcun invio di pacchetti in rete."
        }
      ]
    }
  },
  {
    id: "exif-remover",
    category: "image",
    iconName: "EyeOff",
    badge: { en: "Privacy Guard", it: "Protezione Privacy" },
    popular: true,
    acceptedMime: "image/jpeg,image/png,image/webp",
    maxSizeMB: 50,
    title: {
      en: "EXIF & GPS Metadata Remover",
      it: "Rimuovi Metadati EXIF & Coordinate GPS"
    },
    description: {
      en: "Strip sensitive GPS location coordinates, camera models, and timestamps from your photos before sharing online. 100% private.",
      it: "Rimuovi coordinate GPS geografiche, modello fotocamera e date dalle tue foto prima di condividerle online. 100% privato."
    },
    seoKeyword: {
      en: "remove exif data online free strip gps photo metadata",
      it: "rimuovere dati exif foto online gratis eliminare coordinate gps"
    },
    metaTitle: {
      en: "Remove EXIF & GPS Metadata from Photos Online Free | FileOmniTool",
      it: "Rimuovi Dati EXIF e Coordinate GPS da Foto Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Clean GPS coordinates, camera serial numbers, and personal metadata from JPEG and PNG photos. Protect your physical location client-side.",
      it: "Elimina latitudine, longitudine GPS e dati fotocamera dalle tue foto. Proteggi la tua posizione reale prima di postare online."
    },
    instructions: {
      en: [
        "Upload the photo you plan to share on social networks or send via email.",
        "Our client-side canvas engine wipes all EXIF, GPS, and device tags instantly.",
        "Inspect the list of erased sensitive fields.",
        "Download your completely anonymous, cleaned photo."
      ],
      it: [
        "Carica la fotografia che intendi pubblicare sui social o inviare tramite email.",
        "Il motore Canvas locale cancella istantaneamente ogni tag EXIF, GPS o seriale dispositivo.",
        "Verifica l'elenco dei parametri sensibili rimossi con successo.",
        "Scarica la foto completamente anonima e sicura."
      ]
    },
    faq: {
      en: [
        {
          question: "Why should I remove EXIF data before uploading photos?",
          answer: "Modern smartphones embed your exact GPS coordinates (latitude/longitude pointing directly to your home or office), camera model, and exact capture timestamp inside every JPEG."
        },
        {
          question: "Does stripping EXIF reduce image quality?",
          answer: "No visible quality degradation occurs. We re-encode at 95% high fidelity while discarding only the hidden metadata headers."
        }
      ],
      it: [
        {
          question: "Perché è importante rimuovere i dati EXIF?",
          answer: "Gli smartphone moderni registrano le coordinate GPS precise (latitudine e longitudine di casa tua), marca del telefono e orario esatto all'interno di ogni scatto."
        },
        {
          question: "La rimozione dell'EXIF peggiora la qualità dell'immagine?",
          answer: "No, la foto viene rigenerata ad altissima fedeltà (95% qualità) eliminando esclusivamente l'header nascosto dei metadati."
        }
      ]
    }
  },
  {
    id: "base64-tool",
    category: "text",
    iconName: "Binary",
    badge: { en: "Developer", it: "Sviluppatori" },
    popular: false,
    maxSizeMB: 25,
    title: {
      en: "Base64 Encoder & Decoder (File / Data URI)",
      it: "Encoder & Decoder Base64 (File / Data URI)"
    },
    description: {
      en: "Convert any file, image, or document into a Base64 Data URI string, or decode Base64 back into downloadable binary files.",
      it: "Converti qualsiasi file o immagine in una stringa Base64 Data URI, oppure decodifica stringhe Base64 in file scaricabili."
    },
    seoKeyword: {
      en: "base64 file encoder decoder data uri online free",
      it: "convertire file in base64 online gratis data uri"
    },
    metaTitle: {
      en: "Base64 File Encoder & Decoder Online (Data URI) | FileOmniTool",
      it: "Convertitore Base64 per File e Immagini Gratis Online | FileOmniTool"
    },
    metaDescription: {
      en: "Encode images and files into Base64 Data URIs for HTML/CSS embedding, or decode Base64 strings to downloadable files client-side.",
      it: "Codifica immagini e file in stringhe Base64 per HTML/CSS, o decodifica stringhe Base64 in file originali senza caricamenti."
    },
    instructions: {
      en: [
        "Choose 'File to Base64' to encode or 'Base64 to File' to decode.",
        "Upload any local file or paste your Base64 string.",
        "Click copy to get the Data URI string or click decode to generate the file.",
        "Download your file or embed the code in your website."
      ],
      it: [
        "Seleziona 'File in Base64' per codificare o 'Base64 in File' per decodificare.",
        "Carica un file dal computer o incolla la tua stringa Base64.",
        "Copia la stringa generata oppure clicca su decodifica.",
        "Scarica il file decodificato o incolla la Data URI nel tuo codice web."
      ]
    },
    faq: {
      en: [
        {
          question: "What is a Base64 Data URI used for?",
          answer: "Base64 allows developers to embed images, icons, and fonts directly into HTML or CSS without requiring separate HTTP network requests."
        },
        {
          question: "Is there a file size limit for Base64 conversion?",
          answer: "We recommend files up to 25MB because Base64 strings are ~33% larger than the original raw binary data."
        }
      ],
      it: [
        {
          question: "A cosa serve una Data URI Base64?",
          answer: "Permette a sviluppatori e designer di incorporare immagini o icone direttamente nel codice HTML o CSS senza richieste HTTP aggiuntive."
        },
        {
          question: "C'è un limite di dimensione consigliato?",
          answer: "Consigliamo file fino a 25MB poiché la codifica Base64 aumenta il volume testuale di circa il 33% rispetto al binario."
        }
      ]
    }
  },
  {
    id: "markdown-preview",
    category: "text",
    iconName: "FileCode",
    badge: { en: "Live Editor", it: "Editor Live" },
    popular: true,
    maxSizeMB: 10,
    title: {
      en: "Markdown Live Editor & HTML Converter",
      it: "Editor Markdown Live & Convertitore HTML"
    },
    description: {
      en: "Write and preview GitHub-flavored Markdown in real time with live side-by-side rendering and instant HTML export.",
      it: "Scrivi e visualizza Markdown con anteprima affiancata in tempo reale ed esportazione istantanea in HTML pulito."
    },
    seoKeyword: {
      en: "markdown editor online live preview convert md to html free",
      it: "editor markdown online anteprima istantanea convertire md in html"
    },
    metaTitle: {
      en: "Free Online Markdown Editor & Live HTML Preview | FileOmniTool",
      it: "Editor Markdown Online con Anteprima Live ed Export HTML | FileOmniTool"
    },
    metaDescription: {
      en: "Edit Markdown with live preview, word count, and one-click HTML download. 100% in-browser, no account or installation needed.",
      it: "Modifica file Markdown con anteprima in tempo reale, conteggio parole ed esportazione HTML immediata. Gratuito e in-browser."
    },
    instructions: {
      en: [
        "Type or paste your Markdown text in the left editor panel.",
        "Watch the live HTML rendering update instantly on the right.",
        "Monitor live word and character counters.",
        "Copy the rendered HTML or download a standalone .html document."
      ],
      it: [
        "Digita o incolla il tuo testo Markdown nell'editor a sinistra.",
        "Osserva l'anteprima formattata aggiornarsi all'istante sulla destra.",
        "Tieni d'occhio il conteggio in tempo reale di parole e caratteri.",
        "Copia il codice HTML generato o scarica il file completo .html."
      ]
    },
    faq: {
      en: [
        {
          question: "What Markdown syntax features are supported?",
          answer: "Headers (#, ##, ###), bold (**text**), italics (*text*), blockquotes (> quote), inline code (`code`), code blocks (```js), and bullet/numbered lists."
        },
        {
          question: "Can I save the styled page as a standalone file?",
          answer: "Yes! Clicking 'Download HTML' creates a self-contained HTML5 file with clean responsive typography."
        }
      ],
      it: [
        {
          question: "Quali elementi di sintassi Markdown sono supportati?",
          answer: "Titoli (#, ##, ###), grassetto (**testo**), corsivo (*testo*), citazioni (> testo), codice inline (`codice`), blocchi di codice e liste puntate o numerate."
        },
        {
          question: "Posso salvare la pagina formattata come file completo?",
          answer: "Sì! Il pulsante 'Scarica HTML' produce un documento HTML5 autonomo completo di stili tipografici moderni."
        }
      ]
    }
  },
  {
    id: "text-diff",
    category: "text",
    iconName: "GitCompare",
    badge: { en: "Diff Checker", it: "Confronto Testi" },
    popular: true,
    maxSizeMB: 10,
    title: {
      en: "Text Diff & Code Compare Tool",
      it: "Confronta Testi e Codice (Diff Checker)"
    },
    description: {
      en: "Compare two text snippets or code files side-by-side with instant additions and deletions highlighting. 100% private in-browser diff.",
      it: "Confronta due testi o file di codice riga per riga evidenziando modifiche, aggiunte e cancellazioni in totale riservatezza."
    },
    seoKeyword: {
      en: "diff checker online free compare two text files",
      it: "confrontare due testi online gratis diff checker"
    },
    metaTitle: {
      en: "Free Online Text Diff Checker & Code Compare | FileOmniTool",
      it: "Confronta Testi e Codice Online Gratis (Diff Checker) | FileOmniTool"
    },
    metaDescription: {
      en: "Compare text, contracts, and source code side-by-side. Calculate line-by-line diffs with zero server upload. Completely private and secure.",
      it: "Confronta testi, contratti e codice sorgente nel browser. Evidenzia differenze riga per riga senza inviare dati ad alcun server."
    },
    instructions: {
      en: [
        "Paste the original version in the left box.",
        "Paste the updated or modified version in the right box.",
        "Click 'Compare Differences' to calculate the line-by-line LCS diff.",
        "View highlighted additions (+) and deletions (-) or copy the patch."
      ],
      it: [
        "Incolla la versione originale nel riquadro di sinistra.",
        "Incolla la versione modificata nel riquadro di destra.",
        "Clicca su 'Confronta Differenze' per elaborare il diff riga per riga.",
        "Visualizza le aggiunte in verde (+) e le rimozioni in rosso (-) o copia la patch."
      ]
    },
    faq: {
      en: [
        {
          question: "Can I safely compare confidential legal contracts or proprietary source code?",
          answer: "Yes! The diff calculation runs entirely in JavaScript on your device. No text or code is ever sent to our servers."
        }
      ],
      it: [
        {
          question: "È sicuro confrontare contratti riservati o codice proprietario?",
          answer: "Certamente. L'algoritmo gira interamente nel tuo browser: nessun dato viene mai salvato o trasmesso in rete."
        }
      ]
    }
  },
  {
    id: "case-converter",
    category: "text",
    iconName: "Type",
    badge: { en: "Utility", it: "Utility" },
    popular: true,
    maxSizeMB: 10,
    title: {
      en: "Text Case Converter (UPPER, camelCase, snake_case)",
      it: "Convertitore Maiuscolo, Minuscolo & Case (camelCase, snake_case)"
    },
    description: {
      en: "Transform text between UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, and kebab-case with one click.",
      it: "Converti istantaneamente testi in MAIUSCOLO, minuscolo, Titolo, Frase, camelCase, PascalCase, snake_case e kebab-case con un click."
    },
    seoKeyword: {
      en: "text case converter uppercase lowercase camelcase online",
      it: "convertire maiuscolo in minuscolo online camelcase"
    },
    metaTitle: {
      en: "Free Text Case Converter Online (UPPERCASE, camelCase, snake_case) | FileOmniTool",
      it: "Convertitore Maiuscolo Minuscolo e camelCase Online Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Change letter casing of any text, article, or programming variable in real time. Instant character, word, and line count.",
      it: "Modifica le lettere maiuscole e minuscole di testi o variabili di codice. Include conteggio parole e caratteri in tempo reale."
    },
    instructions: {
      en: [
        "Type or paste your text into the input box.",
        "Click any conversion button (UPPERCASE, Title Case, camelCase, etc.).",
        "Copy the converted result or download as a .txt file."
      ],
      it: [
        "Scrivi o incolla il tuo testo nel riquadro.",
        "Clicca sul formato desiderato (MAIUSCOLO, Titolo, camelCase, ecc.).",
        "Copia il risultato o scaricalo come file di testo .txt."
      ]
    },
    faq: {
      en: [
        {
          question: "Which programming cases are supported?",
          answer: "We support camelCase, PascalCase, snake_case, kebab-case, and alternating cAsE."
        }
      ],
      it: [
        {
          question: "Quali convenzioni di codice sono supportate?",
          answer: "Supporta camelCase, PascalCase, snake_case per Python/SQL e kebab-case per URL e CSS."
        }
      ]
    }
  },
  {
    id: "list-cleaner",
    category: "text",
    iconName: "ListFilter",
    badge: { en: "Deduplicator", it: "Deduplicatore" },
    popular: true,
    maxSizeMB: 20,
    title: {
      en: "List Cleaner & Duplicate Line Remover",
      it: "Pulisci Liste & Rimuovi Righe Duplicate"
    },
    description: {
      en: "Clean up email lists, URLs, keywords, and text lines. Remove duplicates, sort alphabetically (A-Z), trim whitespace, and format for SQL.",
      it: "Pulisci elenchi di email, URL e parole chiave. Elimina i duplicati, ordina da A a Z, rimuovi righe vuote e formatta per query SQL."
    },
    seoKeyword: {
      en: "remove duplicate lines online free sort list alphabetically",
      it: "rimuovere righe duplicate online gratis ordinare lista alfabetico"
    },
    metaTitle: {
      en: "Remove Duplicate Lines & Sort Lists Online Free | FileOmniTool",
      it: "Rimuovi Righe Duplicate e Ordina Liste Online Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Deduplicate and clean email, URL, and keyword lists in your browser. Fast alphabetical sorting and SQL quote wrapping with complete privacy.",
      it: "Elimina duplicati e ripulisci elenchi di indirizzi email, link o parole chiave. Ordina alfabeticamente e scarica la lista pulita."
    },
    instructions: {
      en: [
        "Paste your list of items (one per line).",
        "Click 'Remove Duplicates' to clean out redundant entries.",
        "Optionally sort A-Z, reverse order, or wrap in SQL quotes.",
        "Copy or download your cleaned list as a .txt file."
      ],
      it: [
        "Incolla il tuo elenco di voci (una per riga).",
        "Clicca su 'Rimuovi Duplicati' per eliminare le ripetizioni.",
        "Ordina da A a Z, inverti la sequenza o aggiungi apici SQL.",
        "Copia o scarica la lista pulita come file .txt."
      ]
    },
    faq: {
      en: [
        {
          question: "Is the deduplication case-sensitive?",
          answer: "By default, duplicates are matched case-insensitively so that 'test@mail.com' and 'Test@mail.com' are recognized as identical."
        }
      ],
      it: [
        {
          question: "Il controllo distingue maiuscole e minuscole?",
          answer: "Il controllo è case-insensitive per evitare che 'Mario' e 'mario' vengano considerati duplicati differenti."
        }
      ]
    }
  },
  {
    id: "lorem-generator",
    category: "text",
    iconName: "AlignLeft",
    badge: { en: "Mock Data", it: "Testo Finto" },
    popular: true,
    maxSizeMB: 5,
    title: {
      en: "Lorem Ipsum & Dummy Text Generator",
      it: "Generatore Lorem Ipsum & Testo Segnaposto"
    },
    description: {
      en: "Generate custom paragraphs, sentences, or words of classic Cicero Latin placeholder text with optional HTML tags and one-click copy.",
      it: "Genera paragrafi, frasi o parole di testo segnaposto classico Lorem Ipsum con opzione tag HTML e copia rapida negli appunti."
    },
    seoKeyword: {
      en: "lorem ipsum generator online free placeholder text",
      it: "generatore lorem ipsum online gratis testo segnaposto"
    },
    metaTitle: {
      en: "Free Lorem Ipsum & Dummy Text Generator Online | FileOmniTool",
      it: "Generatore Lorem Ipsum Online Gratis (Testo Segnaposto) | FileOmniTool"
    },
    metaDescription: {
      en: "Generate classic Latin Lorem Ipsum text for web design, mockups, and typography previews. Instant paragraph, sentence, and word count.",
      it: "Crea blocchi di testo finto latino per bozze grafiche, impaginazione web e mockup. Scegli numero di paragrafi o parole."
    },
    instructions: {
      en: [
        "Select the desired quantity and type (paragraphs, sentences, or words).",
        "Choose whether to start with the standard 'Lorem ipsum dolor sit amet...'.",
        "Click 'Copy' to paste into your mockups or designs."
      ],
      it: [
        "Scegli quantità e tipologia desiderata (paragrafi, frasi o parole).",
        "Scegli se iniziare con il classico incipit latino o generare testo vario.",
        "Copia direttamente negli appunti o includi i tag HTML <p>."
      ]
    },
    faq: {
      en: [
        {
          question: "Where does the Lorem Ipsum text come from?",
          answer: "It originates from sections of Cicero's work 'De Finibus Bonorum et Malorum' written in 45 BC, standardized in typography since the 1500s."
        }
      ],
      it: [
        {
          question: "Da dove proviene il testo Lorem Ipsum?",
          answer: "Deriva dal trattato di Cicerone 'De Finibus Bonorum et Malorum' del 45 a.C., adottato dai tipografi fin dal sedicesimo secolo."
        }
      ]
    }
  },
  {
    id: "image-resize",
    category: "image",
    iconName: "Scaling",
    badge: { en: "Popular", it: "Popolare" },
    popular: true,
    acceptedMime: "image/png,image/jpeg,image/webp",
    maxSizeMB: 50,
    title: {
      en: "Resize Image in Pixels & Percentage",
      it: "Ridimensiona Immagini in Pixel & Percentuale"
    },
    description: {
      en: "Scale and resize photos to exact pixel width/height or preset percentages (25%, 50%, 75%, 200%) while preserving aspect ratio. 100% in-browser.",
      it: "Ridimensiona immagini a dimensioni esatte in pixel o con percentuali rapide mantenendo le proporzioni senza perdere qualità visiva."
    },
    seoKeyword: {
      en: "resize image online free in pixels change dimensions",
      it: "ridimensionare immagini online gratis in pixel"
    },
    metaTitle: {
      en: "Resize Images Online in Pixels Free (Lock Aspect Ratio) | FileOmniTool",
      it: "Ridimensiona Immagini in Pixel Gratis Online | FileOmniTool"
    },
    metaDescription: {
      en: "Change image dimensions in pixels or percentage without uploading to cloud servers. High-quality in-browser Canvas resizing for JPG, PNG, WebP.",
      it: "Modifica larghezza e altezza delle tue immagini in pixel o percentuale. Elaborazione istantanea nel browser senza caricare file."
    },
    instructions: {
      en: [
        "Upload your image (PNG, JPG, or WebP).",
        "Enter target width or height in pixels, or click a quick preset (50%, 75%, 200%).",
        "Click 'Resize Image' to render via Canvas.",
        "Download your newly sized image file."
      ],
      it: [
        "Carica la foto da ridimensionare.",
        "Inserisci la larghezza o l'altezza in pixel, oppure seleziona una percentuale.",
        "Clicca su 'Ridimensiona Immagine' per elaborare su Canvas.",
        "Scarica l'immagine con le nuove proporzioni."
      ]
    },
    faq: {
      en: [
        {
          question: "Does resizing images compromise quality?",
          answer: "Our Canvas engine uses high-quality bicubic smoothing algorithms to preserve edge sharpness and natural colors."
        }
      ],
      it: [
        {
          question: "Il ridimensionamento rovina la nitidezza?",
          answer: "No, il motore Canvas impiega interpolazione bicubica ad alta qualità per preservare nitidezza e colori naturali."
        }
      ]
    }
  },
  {
    id: "image-watermark",
    category: "image",
    iconName: "Stamp",
    badge: { en: "Protect", it: "Proteggi Foto" },
    popular: true,
    acceptedMime: "image/png,image/jpeg,image/webp",
    maxSizeMB: 50,
    title: {
      en: "Add Watermark to Photos Online",
      it: "Aggiungi Filigrana e Watermark alle Foto"
    },
    description: {
      en: "Protect your intellectual property by applying text watermarks, copyright stamps, or repeating security patterns directly in your browser.",
      it: "Proteggi le tue foto applicando filigrane di testo personalizzate, copyright o pattern ripetuti a tutta pagina direttamente nel browser."
    },
    seoKeyword: {
      en: "add watermark to photo online free watermark creator",
      it: "aggiungere filigrana foto online gratis watermark"
    },
    metaTitle: {
      en: "Add Watermark to Images Online Free (100% Client-Side) | FileOmniTool",
      it: "Aggiungi Watermark e Filigrana a Foto Gratis Online | FileOmniTool"
    },
    metaDescription: {
      en: "Protect photos, contracts, and artwork with customizable text watermarks, opacity sliders, and repeating security tiles with zero uploads.",
      it: "Applica filigrane di testo e timbri di copyright sulle tue immagini. Regola opacità, colore e rotazione in totale riservatezza."
    },
    instructions: {
      en: [
        "Upload your photo or artwork.",
        "Type your watermark text (e.g. copyright, company name, or DRAFT).",
        "Adjust font size, opacity, color, angle, and positioning.",
        "Download your watermarked, protected photo."
      ],
      it: [
        "Carica la tua foto o immagine.",
        "Digita il testo della filigrana (es. © Nome, RISERVATO, BOZZA).",
        "Regola dimensione font, trasparenza, colore e rotazione.",
        "Scarica la foto protetta e pronta per la pubblicazione."
      ]
    },
    faq: {
      en: [
        {
          question: "Can watermarks be placed across the whole image?",
          answer: "Yes, select 'Tiled Pattern' in the position menu to repeat diagonal watermarks across the entire canvas."
        }
      ],
      it: [
        {
          question: "Posso applicare la filigrana su tutta l'immagine?",
          answer: "Sì, scegli 'Pattern Ripetuto' per proteggere ogni millimetro della foto con scritte diagonali continue."
        }
      ]
    }
  },
  {
    id: "color-picker",
    category: "image",
    iconName: "Pipette",
    badge: { en: "Designer", it: "Per Designer" },
    popular: true,
    acceptedMime: "image/png,image/jpeg,image/webp",
    maxSizeMB: 50,
    title: {
      en: "Image Color Picker & Palette Extractor",
      it: "Preleva Colori da Immagine & Estrai Palette"
    },
    description: {
      en: "Click any pixel in an uploaded photo to sample exact HEX, RGB, and HSL color codes, or automatically extract a 6-color dominant palette.",
      it: "Clicca su qualsiasi pixel di una foto per estrarre i codici colore esatti HEX, RGB e HSL oppure genera la palette dei colori dominanti."
    },
    seoKeyword: {
      en: "color picker from image extract palette online free",
      it: "prelevare colore da immagine online estrarre palette hex rgb"
    },
    metaTitle: {
      en: "Image Color Picker & Palette Generator Online Free | FileOmniTool",
      it: "Selettore Colori da Immagine & Generatore Palette Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Pick colors from images with crosshair pixel accuracy. Auto-extract dominant color palettes and copy HEX, RGB, or HSL values with one click.",
      it: "Estrai codici colore esatti da qualsiasi fotografia o logo. Genera la palette cromatica e copia i valori HEX o RGB con un click."
    },
    instructions: {
      en: [
        "Upload any image or graphic.",
        "Click anywhere on the photo to sample the exact pixel color.",
        "Inspect the auto-extracted dominant color palette.",
        "Copy HEX, RGB, or HSL color values to your clipboard."
      ],
      it: [
        "Carica una foto, un logo o una grafica.",
        "Clicca in qualsiasi punto dell'immagine per campionare il colore del pixel.",
        "Esplora la palette dei 6 colori dominanti estratti automaticamente.",
        "Copia i codici HEX, RGB o HSL con un click."
      ]
    },
    faq: {
      en: [
        {
          question: "Does this tool work on mobile touchscreens?",
          answer: "Yes, tap anywhere on the canvas to inspect that specific pixel's color."
        }
      ],
      it: [
        {
          question: "Funziona anche su smartphone touch?",
          answer: "Sì, basta toccare con il dito qualsiasi punto della foto per prelevare le tonalità cromatiche esatte."
        }
      ]
    }
  },
  {
    id: "audio-booster",
    category: "audio",
    iconName: "Sliders",
    badge: { en: "Make Louder", it: "Volume +" },
    popular: true,
    acceptedMime: "audio/*,.mp3,.ogg,.wav,.m4a,.flac",
    maxSizeMB: 80,
    title: {
      en: "Audio Volume Booster (Up to 300%)",
      it: "Amplificatore Volume Audio (Fino al 300%)"
    },
    description: {
      en: "Make quiet songs, podcasts, voice recordings, and MP3 tracks louder with intelligent soft-clipping volume amplification in your browser.",
      it: "Amplifica e aumenta il volume di canzoni, registrazioni vocali e podcast fino al 300% con limitatore anti-distorsione nel browser."
    },
    seoKeyword: {
      en: "boost audio volume online free increase mp3 volume louder",
      it: "aumentare volume audio online gratis amplificatore mp3"
    },
    metaTitle: {
      en: "Boost Audio Volume Online Free (Make MP3 Louder) | FileOmniTool",
      it: "Aumenta il Volume di File Audio MP3 Gratis Online | FileOmniTool"
    },
    metaDescription: {
      en: "Amplify quiet audio and MP3 files up to 300% without installing software. Hardware Web Audio processing with soft-clipping protection.",
      it: "Rendi più forti i file audio troppo bassi direttamente nel browser. Amplifica fino al 300% con protezione contro il suono gracchiante."
    },
    instructions: {
      en: [
        "Upload your quiet audio file (MP3, WAV, OGG, or M4A).",
        "Adjust the volume boost slider (from 100% to 400%).",
        "Click 'Boost Audio Volume' to process through Web Audio API.",
        "Listen to the amplified preview and download your new MP3."
      ],
      it: [
        "Carica il file audio dal volume troppo basso.",
        "Imposta il livello di amplificazione desiderato (da 100% a 400%).",
        "Clicca su 'Amplifica Volume' per elaborare in locale.",
        "Ascolta l'anteprima potenziata e scarica la traccia MP3."
      ]
    },
    faq: {
      en: [
        {
          question: "Will boosting volume make the audio crackle or distort?",
          answer: "No! We apply mathematical hyperbolic tangent (Math.tanh) soft-clipping to keep loud peaks smooth without harsh digital distortion."
        }
      ],
      it: [
        {
          question: "L'amplificazione provocherà distorsione metallica o audio gracchiante?",
          answer: "No! Viene applicato un limitatore soft-clipping (Math.tanh) che arrotonda i picchi sonori mantenendo un timbro caldo e pulito."
        }
      ]
    }
  },
  {
    id: "password-generator",
    category: "text",
    iconName: "KeyRound",
    badge: { en: "Hardware Crypto", it: "Crittografia" },
    popular: true,
    maxSizeMB: 5,
    title: {
      en: "Secure Password Generator & Entropy Meter",
      it: "Generatore Password Sicure & Misuratore Entropia"
    },
    description: {
      en: "Create cryptographically uncrackable passwords and memorable passphrases with custom length, symbols, and real-time entropy security scoring.",
      it: "Crea password crittograficamente inviolabili e passphrase memorizzabili con lunghezza regolabile, simboli e calcolo entropia in tempo reale."
    },
    seoKeyword: {
      en: "strong password generator online free check entropy",
      it: "generatore password sicure online gratis calcolo entropia"
    },
    metaTitle: {
      en: "Free Strong Password Generator & Entropy Checker | FileOmniTool",
      it: "Generatore Password Sicure Online Gratis & Entropia | FileOmniTool"
    },
    metaDescription: {
      en: "Generate uncrackable passwords using WebCrypto hardware security. Customizable length, symbol filters, and real-time bits of entropy score.",
      it: "Genera password casuali ad alta sicurezza con la crittografia hardware del browser. Misura l'entropia e stima il tempo di crack."
    },
    instructions: {
      en: [
        "Choose between Random Characters or Memorable Passphrase.",
        "Select desired length (8 to 64 chars) and character rules.",
        "Observe the real-time entropy score and strength meter.",
        "Copy your new secure password with one click."
      ],
      it: [
        "Scegli tra Password Casuale o Passphrase a parole.",
        "Imposta la lunghezza desiderata (8-64 caratteri) e i simboli ammessi.",
        "Controlla l'indicatore di forza e i bit di entropia.",
        "Copia la nuova password sicura con un click."
      ]
    },
    faq: {
      en: [
        {
          question: "Are generated passwords saved anywhere?",
          answer: "Never. Passwords are generated exclusively on your device using 'crypto.getRandomValues()' and are cleared from memory when you close the tab."
        }
      ],
      it: [
        {
          question: "Le password generate vengono salvate o inviate al server?",
          answer: "Mai. Le password vengono calcolate esclusivamente nel chip crittografico del tuo PC e svaniscono non appena chiudi la pagina."
        }
      ]
    }
  },
  {
    id: "uuid-generator",
    category: "text",
    iconName: "Fingerprint",
    badge: { en: "RFC 4122", it: "Standard v4" },
    popular: false,
    maxSizeMB: 5,
    title: {
      en: "UUID / GUID v4 Batch Generator",
      it: "Generatore UUID / GUID v4 in Batch"
    },
    description: {
      en: "Generate cryptographically unique UUID v4 identifiers individually or in bulk (up to 1,000) with uppercase, quotes, and hyphen formatting.",
      it: "Genera codici identificativi UUID v4 univoci singoli o in batch (fino a 1.000) con opzioni maiuscolo, virgolette e download .txt."
    },
    seoKeyword: {
      en: "uuid generator online free bulk guid v4",
      it: "generatore uuid online gratis guid v4 batch"
    },
    metaTitle: {
      en: "Free UUID / GUID v4 Batch Generator Online | FileOmniTool",
      it: "Generatore UUID e GUID v4 Gratis Online in Batch | FileOmniTool"
    },
    metaDescription: {
      en: "Generate RFC 4122 compliant UUID v4 codes in bulk. Customizable hyphens, quotes, and uppercase format with one-click copy and text export.",
      it: "Genera codici univoci UUID v4 conformi allo standard RFC 4122. Supporta generazione multipla istantanea ed esportazione in testo."
    },
    instructions: {
      en: [
        "Enter the number of UUIDs you want to generate (1 to 1,000).",
        "Choose formatting options (uppercase, no hyphens, or wrapped in quotes).",
        "Copy all identifiers to clipboard or download as a .txt file."
      ],
      it: [
        "Inserisci la quantità di UUID desiderata (da 1 a 1.000).",
        "Scegli le opzioni di formattazione (MAIUSCOLO, senza trattini, tra virgolette).",
        "Copia tutti i codici generati o scarica il file .txt."
      ]
    },
    faq: {
      en: [
        {
          question: "What is the probability of a UUID collision?",
          answer: "Statistically zero. To have a 50% chance of a single collision, you would need to generate 2.71 quintillion UUIDs."
        }
      ],
      it: [
        {
          question: "Qual è la probabilità di generare due UUID identici?",
          answer: "Statisticamente nulla. Servirebbe generare oltre 2,7 quintilioni di UUID v4 per avere una probabilità del 50% di una singola collisione."
        }
      ]
    }
  },
  {
    id: "image-to-pdf",
    category: "pdf",
    iconName: "FileImage",
    badge: { en: "High Demand", it: "Molto Richiesto" },
    popular: true,
    acceptedMime: ".jpg,.jpeg,.png,.webp,image/*",
    maxSizeMB: 100,
    title: {
      en: "JPG to PDF / Image to PDF",
      it: "Convertitore Immagini in PDF (JPG in PDF)"
    },
    description: {
      en: "Convert JPG, PNG, and WebP images into a single professional PDF document. Reorder pages, adjust margins, and download instantly without server uploads.",
      it: "Converti foto e immagini JPG, PNG e WebP in un unico documento PDF professionale. Riordina le pagine, imposta i margini e scarica subito senza caricare file sui server."
    },
    seoKeyword: {
      en: "jpg to pdf online free no upload",
      it: "convertire jpg in pdf online gratis senza caricamento"
    },
    metaTitle: {
      en: "JPG to PDF Free in Browser - Convert Images to PDF | FileOmniTool",
      it: "Convertitore JPG in PDF Gratis Online - 100% Privato | FileOmniTool"
    },
    metaDescription: {
      en: "Combine multiple JPG and PNG images into a PDF document directly in your browser. 100% private, free, fast, and secure with zero cloud uploads.",
      it: "Unisci foto JPG e immagini in un documento PDF direttamente nel browser. Veloce, gratuito, sicuro e 100% privato senza upload."
    },
    instructions: {
      en: [
        "Drag and drop or select one or more images (JPG, PNG, WebP).",
        "Reorder the images using the arrow buttons or remove unwanted ones.",
        "Choose your desired page format (A4 or Fit to Image), orientation, and margins.",
        "Click 'Convert to PDF' and download your document in seconds."
      ],
      it: [
        "Trascina o seleziona una o più immagini (JPG, PNG, WebP).",
        "Riordina le immagini con le frecce su/giù o rimuovi quelle non necessarie.",
        "Scegli il formato pagina (A4 o Adatta a Immagine), l'orientamento e i margini.",
        "Clicca su 'Converti in PDF' e scarica istantaneamente il documento."
      ]
    },
    faq: {
      en: [
        {
          question: "Can I convert multiple images into a single PDF?",
          answer: "Yes, you can upload dozens of images at once, reorder them as you like, and merge them into one organized PDF file."
        },
        {
          question: "Are my private photos uploaded to any server?",
          answer: "Never. The PDF is assembled entirely in your device's memory using client-side JavaScript. No data ever leaves your browser."
        }
      ],
      it: [
        {
          question: "Posso convertire più foto in un unico PDF?",
          answer: "Sì, puoi caricare decine di foto contemporaneamente, ordinarle a tuo piacimento e unirle in un unico file PDF ordinato."
        },
        {
          question: "Le mie foto private vengono caricate su server esterni?",
          answer: "Assolutamente no. Il PDF viene generato interamente nella memoria RAM del tuo dispositivo: nessuna foto lascia mai il tuo computer."
        }
      ]
    }
  },
  {
    id: "word-counter",
    category: "text",
    iconName: "Type",
    badge: { en: "SEO Essential", it: "Essenziale SEO" },
    popular: true,
    title: {
      en: "Word Counter & Character Counter",
      it: "Contatore Parole, Caratteri e Densità Keyword"
    },
    description: {
      en: "Real-time word count, character count with and without spaces, reading time estimate, and top keyword density analysis. 100% private in-browser text tool.",
      it: "Conteggio in tempo reale di parole, caratteri (con e senza spazi), tempo di lettura e analisi della densità delle keyword. Gratuito e 100% privato nel browser."
    },
    seoKeyword: {
      en: "word counter character count online",
      it: "contatore parole caratteri online battute"
    },
    metaTitle: {
      en: "Free Word Counter & Character Counter Online | FileOmniTool",
      it: "Contatore Parole e Caratteri Online Gratis - Calcolo Battute | FileOmniTool"
    },
    metaDescription: {
      en: "Count words, characters, sentences, paragraphs, and reading time in real time. Fast, accurate, and 100% private text analysis.",
      it: "Conta parole, caratteri con e senza spazi, frasi, paragrafi e stima tempi di lettura e pronuncia in tempo reale. Veloce, accurato e sicuro."
    },
    instructions: {
      en: [
        "Type or paste your text into the editor.",
        "Instantly view words, characters, reading time, and speaking duration.",
        "Check keyword density to optimize your articles and content for SEO.",
        "Copy transformed text or export directly as a .txt file."
      ],
      it: [
        "Digita o incolla il tuo testo nell'editor.",
        "Visualizza subito il numero di parole, battute, tempi di lettura e pronuncia.",
        "Consulta la densità delle parole chiave per ottimizzare i tuoi testi in ottica SEO.",
        "Copia il testo trasformato o esportalo direttamente in formato .txt."
      ]
    },
    faq: {
      en: [
        {
          question: "How is reading time calculated?",
          answer: "Reading time is calculated based on the standard average adult reading speed of 200 words per minute (WPM)."
        },
        {
          question: "Is my text saved or sent to any server?",
          answer: "No. All text counting and analysis is executed locally inside your web browser. Your text is never stored or transmitted."
        }
      ],
      it: [
        {
          question: "Come viene calcolato il tempo di lettura?",
          answer: "Il tempo di lettura si basa sulla velocità media standard di lettura di un adulto, pari a circa 200 parole al minuto."
        },
        {
          question: "Il mio testo viene salvato o inviato a server esterni?",
          answer: "No. L'analisi del testo avviene in tempo reale nel tuo browser. Nessun dato viene registrato o trasmesso."
        }
      ]
    }
  },
  {
    id: "favicon-generator",
    category: "image",
    iconName: "Sparkles",
    badge: { en: "Webmaster Pick", it: "Per Webmaster" },
    popular: true,
    acceptedMime: ".png,.jpg,.jpeg,.svg,.webp,image/*",
    maxSizeMB: 25,
    title: {
      en: "Favicon & App Icon Generator",
      it: "Generatore Favicon & Icone App Web/Mobile"
    },
    description: {
      en: "Generate all standard favicon sizes (16x16, 32x32, 180x180, 512x512) and favicon.ico in one click. Includes browser mockup and ready-to-use HTML code in a ZIP.",
      it: "Genera tutte le dimensioni favicon (16x16, 32x32, 180x180 Apple Touch, 512x512) e favicon.ico in un clic. Con anteprima browser e codice HTML incluso in file ZIP."
    },
    seoKeyword: {
      en: "favicon generator app icon creator online free",
      it: "generatore favicon online icone app pacchetto zip"
    },
    metaTitle: {
      en: "Favicon Generator - Free App & Browser Icon Creator | FileOmniTool",
      it: "Generatore Favicon Online Gratis - Crea Icone Web e Mobile | FileOmniTool"
    },
    metaDescription: {
      en: "Create multi-size favicons and touch icons from any image. Download complete favicon package ZIP with HTML head tags. 100% in-browser.",
      it: "Crea favicon multi-formato e icone app da qualsiasi immagine. Scarica il pacchetto completo in formato ZIP con tag HTML pronti."
    },
    instructions: {
      en: [
        "Upload your square logo, icon, or image (PNG, SVG, JPG, WebP).",
        "Preview how your favicon looks in a real browser tab.",
        "Check all generated sizes (16x16, 32x32, 180x180, 512x512).",
        "Download the complete ZIP package or individual PNG files, and copy the HTML tags."
      ],
      it: [
        "Carica il tuo logo, icona o immagine (PNG, SVG, JPG, WebP).",
        "Verifica l'anteprima realistica della favicon nella scheda del browser.",
        "Controlla tutte le risoluzioni generate automaticamente.",
        "Scarica il pacchetto completo ZIP o i singoli PNG e copia i tag HTML per il tuo sito."
      ]
    },
    faq: {
      en: [
        {
          question: "Which sizes are included in the ZIP package?",
          answer: "The package includes 16x16, 32x32, 48x48, 180x180 (Apple Touch Icon), 192x192, 512x512, favicon.ico, and ready-to-paste HTML snippet."
        },
        {
          question: "What is the recommended image ratio?",
          answer: "A square image (1:1 aspect ratio) of at least 512x512 pixels with a transparent background produces the crispest result."
        }
      ],
      it: [
        {
          question: "Quali dimensioni sono incluse nel pacchetto ZIP?",
          answer: "Il pacchetto include 16x16, 32x32, 48x48, 180x180 (Apple Touch Icon), 192x192, 512x512, favicon.ico e il file HTML con i tag pronti."
        },
        {
          question: "Qual è il formato immagine consigliato?",
          answer: "Un'immagine quadrata (rapporto 1:1) di almeno 512x512 pixel, preferibilmente con sfondo trasparente in formato PNG o SVG."
        }
      ]
    }
  }
];

const NEW_VIRAL_TOOLS: ToolDefinition[] = [
  {
    id: "screen-recorder",
    category: "image",
    iconName: "Video",
    badge: { en: "Viral Tool", it: "Nuovo" },
    popular: true,
    title: {
      it: "Registratore Schermo Online nel Browser",
      en: "Free In-Browser Screen Recorder",
      es: "Grabador de Pantalla Online en el Navegador",
      fr: "Enregistreur d'Écran en Ligne Gratuit",
      de: "Kostenloser Browser-Bildschirmrekorder",
      pt: "Gravador de Tela Online no Navegador",
    },
    description: {
      it: "Registra lo schermo intero, finestre o singole schede con audio microfono. Zero upload, 100% in memoria locale senza installare software.",
      en: "Record your entire screen, application window, or browser tab with audio. Zero upload, 100% local RAM execution.",
      es: "Graba tu pantalla completa, ventanas o pestañas con audio. 100% local sin subir archivos.",
      fr: "Enregistrez votre écran, fenêtres ou onglets avec audio sans logiciel ni téléversement.",
      de: "Nehmen Sie Ihren Bildschirm, Fenster oder Tabs mit Audio direkt im Browser auf.",
      pt: "Grave sua tela, janelas ou abas com áudio sem instalar programas e sem upload.",
    },
    seoKeyword: {
      it: "registratore schermo online gratis browser senza installare",
      en: "screen recorder online free in browser no install",
      es: "grabador de pantalla online gratis navegador",
      fr: "enregistreur ecran en ligne gratuit navigateur",
      de: "bildschirmrekorder online kostenlos browser",
      pt: "gravador de tela online gratis navegador",
    },
    metaTitle: {
      it: "Registratore Schermo Online Gratis nel Browser - 100% Privato | FileOmniTool",
      en: "Free In-Browser Screen Recorder - 100% Private | FileOmniTool",
      es: "Grabador de Pantalla Online Gratis en el Navegador | FileOmniTool",
      fr: "Enregistreur d'Écran en Ligne Gratuit dans le Navigateur | FileOmniTool",
      de: "Kostenloser Browser-Bildschirmrekorder - 100% Privat | FileOmniTool",
      pt: "Gravador de Tela Online Grátis no Navegador | FileOmniTool",
    },
    metaDescription: {
      it: "Registra lo schermo del computer senza scaricare software. Supporta audio di sistema e microfono, esportazione WebM immediata in locale.",
      en: "Capture your computer screen with system and microphone audio without downloading apps. Instant local WebM export.",
      es: "Captura tu pantalla con audio de micrófono y sistema sin instalar programas. Exportación local inmediata.",
      fr: "Capturez votre écran avec audio système et microphone sans logiciel. Exportation locale immédiate.",
      de: "Zeichnen Sie Ihren Bildschirm mit Audio auf, ohne Programme zu installieren. Lokaler Sofort-Download.",
      pt: "Grave sua tela com áudio sem baixar aplicativos. Exportação WebM local instantânea.",
    },
    instructions: {
      it: [
        "Fai clic su 'Avvia Registrazione Schermo'.",
        "Seleziona se condividere l'intero schermo, una specifica finestra o una singola scheda del browser.",
        "Se desideri registrare la tua voce, mantieni attiva l'opzione 'Includi voce dal microfono'.",
        "Al termine, fai clic su 'Interrompi Registrazione' e scarica subito il file video WebM generato."
      ],
      en: [
        "Click 'Start Screen Recording'.",
        "Select whether to share your entire display, an application window, or a browser tab.",
        "Toggle 'Include microphone audio' if you want voice narration.",
        "When finished, click 'Stop Recording' and download your video instantly."
      ],
    },
    faq: {
      it: [
        {
          question: "I video registrati vengono caricati su qualche server?",
          answer: "Assolutamente no. Il flusso video e audio viene codificato in tempo reale dalla scheda video del tuo computer e memorizzato come Blob temporaneo nella RAM locale."
        },
        {
          question: "C'è un limite di tempo per la registrazione?",
          answer: "Nessun limite artificiale imposto da FileOmniTool. Puoi registrare tutto il tempo consentito dalla memoria RAM disponibile sul tuo computer."
        }
      ],
      en: [
        {
          question: "Are recorded videos uploaded to external servers?",
          answer: "Never. The media stream is encoded in real time by your hardware and buffered strictly in local browser memory."
        },
        {
          question: "Is there a duration limit?",
          answer: "No artificial limits. You can record as long as your available local RAM permits."
        }
      ],
    }
  },
  {
    id: "voice-recorder",
    category: "audio",
    iconName: "Mic",
    badge: { en: "New", it: "Nuovo" },
    popular: true,
    title: {
      it: "Registratore Vocale Online nel Browser",
      en: "Free In-Browser Voice & Mic Recorder",
      es: "Grabadora de Voz Online en el Navegador",
      fr: "Enregistreur Vocal en Ligne dans le Navigateur",
      de: "Kostenloser Browser-Sprachrekorder",
      pt: "Gravador de Voz Online no Navegador",
    },
    description: {
      it: "Registra memo vocali, interviste o note audio in alta fedeltà con il tuo microfono. Zero caricamenti su server, 100% privato e gratuito.",
      en: "Capture high-fidelity voice notes and microphone audio directly in your browser. 100% private, zero server transfers.",
      es: "Graba notas de voz y audio de micrófono en alta fidelidad sin subidas a servidores.",
      fr: "Enregistrez des notes vocales et des mémos audio avec votre microphone, sans téléversement.",
      de: "Nehmen Sie Sprachmemos und Mikrofon-Audio in hoher Qualität ohne Server-Uploads auf.",
      pt: "Grave áudio e notas de voz com seu microfone diretamente no navegador, 100% privado.",
    },
    seoKeyword: {
      it: "registratore vocale online gratis microfono browser",
      en: "voice recorder online free mic in browser",
      es: "grabadora de voz online gratis microfono",
      fr: "enregistreur vocal en ligne gratuit micro",
      de: "sprachrekorder online kostenlos mikrofon",
      pt: "gravador de voz online gratis microfone",
    },
    metaTitle: {
      it: "Registratore Vocale Online Gratis nel Browser - 100% Privato | FileOmniTool",
      en: "Free In-Browser Voice Recorder - 100% Private | FileOmniTool",
      es: "Grabadora de Voz Online Gratis en el Navegador | FileOmniTool",
      fr: "Enregistreur Vocal en Ligne Gratuit dans le Navigateur | FileOmniTool",
      de: "Kostenloser Browser-Sprachrekorder - 100% Privat | FileOmniTool",
      pt: "Gravador de Voz Online Grátis no Navegador | FileOmniTool",
    },
    metaDescription: {
      it: "Registra la tua voce dal microfono con anteprima audio immediata e download senza limiti. Funziona 100% in memoria locale.",
      en: "Record microphone audio with instant audio playback and unlimited exports. Operates 100% in local browser memory.",
      es: "Graba tu voz con el micrófono, escucha la vista previa y descarga el archivo sin límites de tiempo.",
      fr: "Enregistrez votre voix au micro avec lecture instantanée et téléchargement illimité en local.",
      de: "Nehmen Sie Ihre Stimme per Mikrofon auf mit Sofort-Wiedergabe und unbegrenztem Download.",
      pt: "Grave sua voz com microfone, ouça o áudio e baixe sem limites de tempo.",
    },
    instructions: {
      it: [
        "Fai clic su 'Inizia Registrazione Vocale' e consenti al browser l'accesso al microfono.",
        "Parla chiaramente vicino al microfono; puoi mettere in pausa in qualsiasi istante.",
        "Fai clic su 'Interrompi & Salva' al termine della registrazione.",
        "Ascolta l'anteprima audio nel player e fai clic su 'Scarica File Audio'."
      ],
      en: [
        "Click 'Start Voice Recording' and allow microphone permissions.",
        "Speak clearly into your microphone; pause anytime.",
        "Click 'Stop & Save' when done.",
        "Preview your recording and click 'Download Audio'."
      ],
    },
    faq: {
      it: [
        {
          question: "I file audio vengono ascoltati o inviati a terzi?",
          answer: "No, nessun audio viene mai inviato a server esterni. Tutto il campionamento e la compressione avvengono nella RAM del browser."
        },
        {
          question: "Che formato audio viene scaricato?",
          answer: "Il file viene esportato nel formato standard ad alta fedeltà WebM (con codec Opus), compatibile con tutti i player moderni."
        }
      ],
      en: [
        {
          question: "Is my voice transmitted or stored anywhere?",
          answer: "Never. The audio is captured and compressed exclusively in your local device RAM."
        },
        {
          question: "What audio format is downloaded?",
          answer: "The recording is exported in high-fidelity WebM (Opus codec), playable on all modern devices."
        }
      ],
    }
  }
];

export const TOOLS_REGISTRY: ToolDefinition[] = [
  ...BASE_TOOLS,
  ...EXPANDED_TOOLS,
  ...WAVE3_TOOLS,
  ...NEW_VIRAL_TOOLS,
  ...WAVE4_TOOLS,
].map((tool) => {
  const trans = TOOLS_TRANSLATIONS[tool.id];
  if (!trans) return tool;
  return {
    ...tool,
    title: { ...tool.title, ...trans.title },
    description: { ...tool.description, ...trans.description },
    instructions: { ...tool.instructions, ...(trans.instructions || {}) },
    faq: { ...tool.faq, ...(trans.faq || {}) },
  };
});

export function getToolById(id: string): ToolDefinition | undefined {
  return TOOLS_REGISTRY.find(t => t.id === id);
}

export function getToolsByCategory(category: string): ToolDefinition[] {
  return TOOLS_REGISTRY.filter(t => t.category === category);
}
