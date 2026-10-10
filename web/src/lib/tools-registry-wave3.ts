import { ToolDefinition } from "./tools-registry";

export const WAVE3_TOOLS: ToolDefinition[] = [
  // 61. srt-to-vtt
  {
    id: "srt-to-vtt",
    category: "audio",
    iconName: "FileText",
    badge: { en: "Subtitles", it: "Sottotitoli" },
    popular: true,
    acceptedMime: ".srt,.vtt,text/plain",
    maxSizeMB: 50,
    title: {
      en: "SRT to WebVTT Subtitle Converter",
      it: "Convertitore Sottotitoli SRT in WebVTT",
    },
    description: {
      en: "Convert SubRip (.srt) subtitles to WebVTT (.vtt) format for HTML5 video and web players in browser.",
      it: "Converti file sottotitoli SRT in WebVTT (.vtt) per player HTML5 e piattaforme streaming gratis.",
    },
    seoKeyword: {
      en: "convert srt to vtt online free",
      it: "convertire srt in vtt gratis online",
    },
    metaTitle: {
      en: "Convert SRT to VTT Online Free | In-Browser Subtitle Converter",
      it: "Convertitore SRT in VTT Gratis Senza Programmi | FileOmniTool",
    },
    metaDescription: {
      en: "Convert SubRip SRT subtitles to WebVTT (.vtt) instantly in your browser. Clean, fast, zero server uploads.",
      it: "Converti i tuoi file di sottotitoli da SRT a VTT e viceversa gratis nel browser. 100% privato senza caricare file.",
    },
    instructions: {
      en: [
        "Drag & drop an .srt or .vtt file or paste the raw subtitle text.",
        "Switch between SRT → WebVTT or WebVTT → SRT with one click.",
        "Save the converted subtitle file directly to your device."
      ],
      it: [
        "Trascina il file .srt o .vtt oppure incolla il testo dei sottotitoli.",
        "Passa istantaneamente tra SRT → WebVTT o WebVTT → SRT con un clic.",
        "Scarica il nuovo file di sottotitoli pronto per il tuo player video."
      ]
    },
    faq: {
      en: [
        {
          question: "What is the difference between SRT and VTT?",
          answer: "WebVTT is the official W3C web standard for HTML5 <track> video subtitles, using dots for milliseconds instead of commas."
        }
      ],
      it: [
        {
          question: "Che differenza c'è tra SRT e WebVTT?",
          answer: "WebVTT è lo standard web ufficiale del W3C per video HTML5, che utilizza punti invece di virgole per i millisecondi."
        }
      ]
    }
  },

  // 62. srt-to-txt
  {
    id: "srt-to-txt",
    category: "text",
    iconName: "FileText",
    badge: { en: "Transcript", it: "Testo" },
    popular: false,
    acceptedMime: ".srt,.vtt,text/plain",
    maxSizeMB: 50,
    title: {
      en: "Subtitle to Text Transcript Extractor",
      it: "Estrai Testo Pulito da Sottotitoli SRT",
    },
    description: {
      en: "Strip timestamps, cue numbers, and tags from SRT/VTT files to extract clean plain text transcripts.",
      it: "Rimuovi timestamp e numeri di riga da file SRT o VTT per estrarre una trascrizione di testo continuo pulita.",
    },
    seoKeyword: {
      en: "extract text from srt subtitles free",
      it: "estrarre testo da sottotitoli srt gratis",
    },
    metaTitle: {
      en: "Extract Plain Text from SRT Subtitles | Subtitle to TXT",
      it: "Estrarre Testo da Sottotitoli SRT Gratis | FileOmniTool",
    },
    metaDescription: {
      en: "Convert subtitle files to readable plain text transcripts. Removes timestamps and cue numbers in browser memory.",
      it: "Trasforma file di sottotitoli SRT e VTT in testo normale privo di codici temporali. Veloce e 100% privato.",
    },
    instructions: {
      en: [
        "Drop your subtitle file into the box.",
        "Timestamps and tags are removed in memory automatically.",
        "Copy the transcript or save as a clean .txt file."
      ],
      it: [
        "Trascina il file di sottotitoli nella casella.",
        "Timestamp e tag di stile vengono rimossi all'istante in memoria.",
        "Copia la trascrizione negli appunti o scaricala come file .txt."
      ]
    },
    faq: {
      en: [
        {
          question: "Does it remove duplicate rolling lines?",
          answer: "Yes, consecutive duplicated sentences are automatically merged into fluent paragraphs."
        }
      ],
      it: [
        {
          question: "Rimuove le righe duplicate dei sottotitoli a scorrimento?",
          answer: "Sì, le frasi consecutive duplicate vengono automaticamente accorpate in testo fluido."
        }
      ]
    }
  },

  // 63. gif-frame-extractor
  {
    id: "gif-frame-extractor",
    category: "image",
    iconName: "Archive",
    badge: { en: "Splitter", it: "Estrattore" },
    popular: true,
    acceptedMime: "image/gif,.gif",
    maxSizeMB: 100,
    title: {
      en: "Animated GIF Frame Extractor",
      it: "Estrai Fotogrammi da GIF Animata",
    },
    description: {
      en: "Split animated GIFs into individual high-definition PNG frames and download them individually or as a ZIP.",
      it: "Scomponi qualsiasi GIF animata in singoli fotogrammi PNG ad alta definizione e scaricali tutti in archivio ZIP.",
    },
    seoKeyword: {
      en: "extract gif frames online free",
      it: "estrarre fotogrammi gif animata gratis",
    },
    metaTitle: {
      en: "Extract GIF Frames Online Free | GIF to PNG Frame Splitter",
      it: "Estrarre Fotogrammi da GIF Gratis Senza Programmi | FileOmniTool",
    },
    metaDescription: {
      en: "Extract all frames from animated GIF files in your browser. Download single PNG frames or full ZIP archive.",
      it: "Dividi una GIF animata in fotogrammi PNG singoli o scarica tutto l'archivio ZIP. Nessun caricamento su server.",
    },
    instructions: {
      en: [
        "Upload your animated GIF file.",
        "Preview all decoded frames in browser memory.",
        "Download individual PNGs or get all frames in a ZIP package."
      ],
      it: [
        "Trascina il tuo file GIF animato nella casella di rilascio.",
        "Visualizza l'anteprima di tutti i frame estratti in memoria.",
        "Scarica i singoli PNG o scarica l'archivio ZIP completo in un clic."
      ]
    },
    faq: {
      en: [
        {
          question: "Are frames compressed?",
          answer: "No, each frame is extracted into lossless 32-bit PNG preserving full transparency."
        }
      ],
      it: [
        {
          question: "I fotogrammi estratti perdono qualità?",
          answer: "No, ogni fotogramma viene estratto in formato PNG a 32 bit senza perdita di qualità e con trasparenza."
        }
      ]
    }
  },

  // 64. image-to-ascii
  {
    id: "image-to-ascii",
    category: "image",
    iconName: "FileCode",
    badge: { en: "Retro Art", it: "Arte Testo" },
    popular: false,
    acceptedMime: "image/*",
    maxSizeMB: 50,
    title: {
      en: "Image to ASCII Art Generator",
      it: "Convertitore Immagine in ASCII Art",
    },
    description: {
      en: "Convert any photo, logo, or graphic into ASCII character art text with customizable density and export.",
      it: "Trasforma qualsiasi foto o logo in arte testuale ASCII con regolazione della risoluzione ed export TXT/HTML.",
    },
    seoKeyword: {
      en: "image to ascii art generator free",
      it: "convertire immagine in ascii art gratis",
    },
    metaTitle: {
      en: "Image to ASCII Art Generator Online Free | FileOmniTool",
      it: "Convertire Immagine in ASCII Art Gratis | FileOmniTool",
    },
    metaDescription: {
      en: "Turn images into retro ASCII art text in real time. Customize width, character ramp, and export .txt or .html.",
      it: "Converti foto in disegni di testo ASCII in tempo reale nel browser. Scarica file .txt o .html gratis.",
    },
    instructions: {
      en: [
        "Drop any JPG, PNG, or WebP photo.",
        "Adjust character width and choose character sets.",
        "Copy the ASCII art or download as .txt or .html."
      ],
      it: [
        "Trascina qualsiasi foto JPG, PNG o WebP.",
        "Regola la larghezza in colonne e seleziona il set di caratteri desiderato.",
        "Copia il testo negli appunti o scarica il file TXT o HTML."
      ]
    },
    faq: {
      en: [
        {
          question: "Can I use ASCII art on GitHub or Reddit?",
          answer: "Yes! Use a code block with monospace font for perfect character alignment."
        }
      ],
      it: [
        {
          question: "Posso incollare l'ASCII art su GitHub o Reddit?",
          answer: "Certamente! Basta incollarla all'interno di un blocco di codice a spaziatura fissa."
        }
      ]
    }
  },

  // 65. png-to-ico
  {
    id: "png-to-ico",
    category: "image",
    iconName: "Sparkles",
    badge: { en: "Windows Icon", it: "Icona Windows" },
    popular: true,
    acceptedMime: "image/png,image/jpeg,.png,.jpg",
    maxSizeMB: 50,
    title: {
      en: "PNG to ICO Windows Icon Converter",
      it: "Convertitore PNG in File Icona ICO",
    },
    description: {
      en: "Convert PNG or JPG images into multi-resolution Windows .ico icon files (16px, 32px, 48px, 64px) in browser RAM.",
      it: "Converti foto PNG o JPG in veri file icona Windows .ico multi-risoluzione (16, 32, 48, 64px) senza software.",
    },
    seoKeyword: {
      en: "convert png to ico online free",
      it: "convertire png in ico gratis online",
    },
    metaTitle: {
      en: "Convert PNG to ICO Online Free | Windows Icon Maker",
      it: "Convertire PNG in ICO Gratis Senza Programmi | FileOmniTool",
    },
    metaDescription: {
      en: "Create true multi-resolution Windows .ico icon files from PNG or JPG images in browser memory. 100% private.",
      it: "Genera file .ico compatibili con Windows ed eseguibili partendo da immagini PNG o JPG. Gratis e sicuro.",
    },
    instructions: {
      en: [
        "Upload a square PNG or JPG image.",
        "Include 16px, 32px, 48px, or larger sizes.",
        "Save the native Windows icon file."
      ],
      it: [
        "Carica un'immagine quadrata PNG o JPG.",
        "Includi le dimensioni desiderate per Windows (16, 32, 48px).",
        "Salva il file .ico pronto per Windows o per la favicon del tuo sito."
      ]
    },
    faq: {
      en: [
        {
          question: "Is transparency preserved?",
          answer: "Yes, 32-bit alpha transparency is fully preserved in the compiled ICO container."
        }
      ],
      it: [
        {
          question: "La trasparenza del PNG viene preservata?",
          answer: "Sì, il canale alfa di trasparenza a 32 bit viene preservato integralmente."
        }
      ]
    }
  },

  // 66. svg-cleaner
  {
    id: "svg-cleaner",
    category: "image",
    iconName: "Sparkles",
    badge: { en: "Vector Clean", it: "Pulizia Vettoriale" },
    popular: false,
    acceptedMime: "image/svg+xml,.svg",
    maxSizeMB: 30,
    title: {
      en: "SVG Optimizer & Cleaner",
      it: "Ottimizzatore e Pulitore File SVG",
    },
    description: {
      en: "Sanitize and minify SVG vector graphics by stripping editor metadata, comments, and unused namespaces.",
      it: "Ripulisci e comprimi file vettoriali SVG eliminando metadati Illustrator/Inkscape, commenti e tag inutili.",
    },
    seoKeyword: {
      en: "svg cleaner optimizer online free",
      it: "ottimizzare e pulire file svg gratis",
    },
    metaTitle: {
      en: "SVG Cleaner & Optimizer Online Free | Minify Vector SVG",
      it: "Ottimizzare e Pulire File SVG Gratis | FileOmniTool",
    },
    metaDescription: {
      en: "Clean and minify SVG files client-side. Remove editor bloat and shrink SVG filesize up to 60%.",
      it: "Riduci le dimensioni e rimuovi il codice spazzatura dai file SVG esportati da Illustrator o Figma. 100% locale.",
    },
    instructions: {
      en: [
        "Drop any SVG vector file.",
        "Proprietary metadata and comments are stripped in RAM.",
        "Copy optimized XML markup or download .svg."
      ],
      it: [
        "Trascina il file vettoriale SVG da ottimizzare.",
        "Metadati proprietari e commenti vengono eliminati all'istante in RAM.",
        "Copia il codice ottimizzato o scarica il nuovo file .svg alleggerito."
      ]
    },
    faq: {
      en: [
        {
          question: "Does it break SVG vector paths?",
          answer: "No, visual paths and vector geometry remain 100% identical while stripping invisible metadata."
        }
      ],
      it: [
        {
          question: "Modifica i percorsi grafici del disegno?",
          answer: "No, la geometria visiva rimane identica, vengono rimossi solo metadati e commenti invisibili."
        }
      ]
    }
  },

  // 67. pdf-encrypt
  {
    id: "pdf-encrypt",
    category: "pdf",
    iconName: "ShieldCheck",
    badge: { en: "AES-256", it: "Sicurezza" },
    popular: true,
    acceptedMime: "application/pdf,.pdf,*/*",
    maxSizeMB: 100,
    title: {
      en: "PDF Password Protection & Encryption",
      it: "Proteggi PDF con Password (AES-256)",
    },
    description: {
      en: "Protect sensitive PDF documents with military-grade AES-256 encryption and a custom password in local RAM.",
      it: "Proteggi documenti PDF riservati con crittografia militare AES-256 e password prima dell'invio via email.",
    },
    seoKeyword: {
      en: "protect pdf with password online free",
      it: "proteggere pdf con password gratis aes 256",
    },
    metaTitle: {
      en: "Protect PDF with Password Online Free | Client-Side Encryption",
      it: "Proteggere PDF con Password Gratis (AES-256) | FileOmniTool",
    },
    metaDescription: {
      en: "Encrypt and lock your PDF files with AES-256 password security directly in your browser. Zero cloud uploads.",
      it: "Metti la password ai tuoi file PDF prima di inviarli. Crittografia locale in memoria senza caricamento su server.",
    },
    instructions: {
      en: [
        "Drop the PDF file to encrypt.",
        "Choose a strong password for decryption.",
        "Download the encrypted document container."
      ],
      it: [
        "Trascina il documento PDF da proteggere.",
        "Scegli una password robusta per la cifratura.",
        "Scarica il file protetto con cifratura a 256 bit."
      ]
    },
    faq: {
      en: [
        {
          question: "Can FileOmniTool read my password or file?",
          answer: "Never. All cryptography executes in local browser RAM via WebCrypto PBKDF2 and AES-GCM."
        }
      ],
      it: [
        {
          question: "FileOmniTool può conoscere la mia password o leggere il file?",
          answer: "Mai. Tutta la crittografia opera nella memoria locale del tuo browser senza alcun invio di dati."
        }
      ]
    }
  },

  // 68. pdf-flatten
  {
    id: "pdf-flatten",
    category: "pdf",
    iconName: "FileCheck",
    badge: { en: "Flatten", it: "Appiattisci" },
    popular: false,
    acceptedMime: "application/pdf,.pdf",
    maxSizeMB: 100,
    title: {
      en: "Flatten PDF Form Fields",
      it: "Appiattisci Moduli e Firme PDF",
    },
    description: {
      en: "Lock interactive PDF form fields, textboxes, and checkboxes into static uneditable print-ready pages.",
      it: "Blocca campi modulo interattivi, firme e caselle di testo rendendoli di sola lettura e pronti per la stampa.",
    },
    seoKeyword: {
      en: "flatten pdf form fields online free",
      it: "appiattire moduli pdf compilabili gratis",
    },
    metaTitle: {
      en: "Flatten PDF Form Fields Online Free | Make PDF Read-Only",
      it: "Appiattire Moduli PDF Gratis (Sola Lettura) | FileOmniTool",
    },
    metaDescription: {
      en: "Flatten interactive AcroForms in PDF files into static page content in browser memory. Non-editable & secure.",
      it: "Rendi non modificabili i moduli PDF compilabili per contratti, fatture e archiviazione a norma. 100% in-browser.",
    },
    instructions: {
      en: [
        "Drop your PDF containing form fields.",
        "The WebAssembly engine merges fields permanently.",
        "Save the sealed static document."
      ],
      it: [
        "Trascina il PDF con i moduli o le firme da bloccare.",
        "Il motore locale fonde i campi modulo direttamente nella pagina.",
        "Salva il nuovo documento PDF non alterabile."
      ]
    },
    faq: {
      en: [
        {
          question: "Why should I flatten a PDF before sending?",
          answer: "Flattening prevents recipients or third parties from altering filled text, signatures, or calculations."
        }
      ],
      it: [
        {
          question: "Perché è utile appiattire un PDF prima dell'invio?",
          answer: "L'appiattimento impedisce a chiunque di modificare i dati inseriti o manomettere firme elettroniche."
        }
      ]
    }
  },

  // 69. json-to-sql
  {
    id: "json-to-sql",
    category: "text",
    iconName: "Database",
    badge: { en: "Developer", it: "Sviluppo" },
    popular: true,
    acceptedMime: ".json,application/json,text/plain",
    maxSizeMB: 50,
    title: {
      en: "JSON to SQL INSERT Query Converter",
      it: "Convertitore JSON in Query SQL INSERT",
    },
    description: {
      en: "Transform JSON data arrays or objects into ready-to-run SQL INSERT statements for MySQL, PostgreSQL, or SQLite.",
      it: "Trasforma array di dati JSON in query SQL INSERT INTO pronte all'uso per MySQL, PostgreSQL o SQLite.",
    },
    seoKeyword: {
      en: "convert json to sql insert queries online free",
      it: "convertire json in query sql insert gratis",
    },
    metaTitle: {
      en: "Convert JSON to SQL INSERT Online Free | JSON to SQL",
      it: "Convertire JSON in Query SQL INSERT Gratis | FileOmniTool",
    },
    metaDescription: {
      en: "Convert JSON arrays to SQL INSERT queries instantly in your browser. Supports MySQL, PostgreSQL, and SQLite.",
      it: "Genera query SQL INSERT da dati JSON in un clic. Supporto dialetti MySQL, Postgres e SQLite. 100% privato.",
    },
    instructions: {
      en: [
        "Paste your JSON data array or object.",
        "Specify the SQL table name and database dialect.",
        "Copy queries or download as a .sql script."
      ],
      it: [
        "Incolla l'array di oggetti JSON da convertire.",
        "Imposta il nome della tabella e il database (MySQL/Postgres/SQLite).",
        "Copia le query generate o scarica lo script .sql."
      ]
    },
    faq: {
      en: [
        {
          question: "Does it escape quotes and NULL values?",
          answer: "Yes, strings with quotes are escaped and null/undefined values are mapped to SQL NULL."
        }
      ],
      it: [
        {
          question: "Gestisce correttamente virgolette e valori NULL?",
          answer: "Sì, le stringhe vengono opportunamente isolate e i valori null/booleani mappati a standard SQL."
        }
      ]
    }
  },

  // 70. html-to-markdown
  {
    id: "html-to-markdown",
    category: "text",
    iconName: "Code",
    badge: { en: "Docs", it: "Documenti" },
    popular: false,
    acceptedMime: ".html,.htm,text/html,text/plain",
    maxSizeMB: 30,
    title: {
      en: "HTML to Markdown Converter",
      it: "Convertitore HTML in Markdown",
    },
    description: {
      en: "Convert HTML markup or web files into clean GitHub Flavored Markdown for Notion, Obsidian, and documentation.",
      it: "Converti frammenti o file HTML in Markdown pulito pronto per Notion, Obsidian e documentazione GitHub.",
    },
    seoKeyword: {
      en: "convert html to markdown online free",
      it: "convertire html in markdown gratis online",
    },
    metaTitle: {
      en: "Convert HTML to Markdown Online Free | HTML to MD",
      it: "Convertire HTML in Markdown Gratis Online | FileOmniTool",
    },
    metaDescription: {
      en: "Transform HTML code into clean Markdown in browser memory. Preserves headings, lists, links, and code blocks.",
      it: "Trasforma codice HTML in sintassi Markdown in tempo reale. Mantiene titoli, elenchi, link e blocchi codice.",
    },
    instructions: {
      en: [
        "Paste HTML code or upload an .html file.",
        "DOM parser transforms tags into Markdown formatting.",
        "Copy markdown or download a .md file."
      ],
      it: [
        "Incolla il codice HTML o trascina un file .html.",
        "Il motore locale traduce i tag HTML nella sintassi Markdown.",
        "Copia il risultato o scarica il file .md generato."
      ]
    },
    faq: {
      en: [
        {
          question: "Are images and links preserved?",
          answer: "Yes, <a> and <img> tags are converted to standard Markdown syntax."
        }
      ],
      it: [
        {
          question: "Le immagini e i collegamenti vengono mantenuti?",
          answer: "Sì, i tag link e immagini vengono tradotti fedelmente nella sintassi standard Markdown [testo](link)."
        }
      ]
    }
  },

  // 71. jwt-decoder
  {
    id: "jwt-decoder",
    category: "text",
    iconName: "ShieldCheck",
    badge: { en: "Offline", it: "Privato" },
    popular: true,
    acceptedMime: "text/plain",
    maxSizeMB: 10,
    title: {
      en: "Offline JWT Token Inspector & Decoder",
      it: "Decodificatore Token JWT Offline",
    },
    description: {
      en: "Inspect and decode JSON Web Tokens (Header & Payload) with real-time expiration check 100% offline in browser.",
      it: "Ispeziona e decodifica token JWT (Header e Payload) verificando date di scadenza al 100% offline nel browser.",
    },
    seoKeyword: {
      en: "offline jwt decoder token inspector free",
      it: "decodificare token jwt offline gratis privato",
    },
    metaTitle: {
      en: "Offline JWT Decoder & Token Inspector | FileOmniTool",
      it: "Decodificare Token JWT Offline (100% Privato) | FileOmniTool",
    },
    metaDescription: {
      en: "Decode JWT bearer tokens securely without sending secret credentials over the internet. Zero server tracking.",
      it: "Decodifica token JWT in totale sicurezza senza trasmettere chiavi riservate a server terzi. Veloce e privato.",
    },
    instructions: {
      en: [
        "Paste your encoded JWT string.",
        "Header and Payload JSON are formatted with syntax highlighting.",
        "Check expiration date and token claims securely."
      ],
      it: [
        "Incolla la stringa del token JWT da esaminare.",
        "Header e Payload vengono decodificati e formattati in JSON.",
        "Controlla la data di scadenza (exp) e copia i dati estratti."
      ]
    },
    faq: {
      en: [
        {
          question: "Does FileOmniTool store or transmit my token?",
          answer: "Never. The decoding process runs strictly client-side via JavaScript Base64Url parsing."
        }
      ],
      it: [
        {
          question: "FileOmniTool conserva o trasmette il mio token?",
          answer: "Mai. La decodifica avviene esclusivamente nella memoria del tuo browser senza alcuna chiamata di rete."
        }
      ]
    }
  },

  // 72. css-minifier
  {
    id: "css-minifier",
    category: "text",
    iconName: "Sparkles",
    badge: { en: "Web Perf", it: "Velocità" },
    popular: false,
    acceptedMime: ".css,text/css,text/plain",
    maxSizeMB: 30,
    title: {
      en: "CSS Stylesheet Minifier & Cleaner",
      it: "Minificatore Fogli di Stile CSS",
    },
    description: {
      en: "Compress CSS stylesheets by removing whitespace, comments, and redundant rules for faster web page loads.",
      it: "Comprimi fogli di stile CSS eliminando spazi, commenti e punteggiatura superflua per velocizzare il caricamento web.",
    },
    seoKeyword: {
      en: "minify css online free compressor",
      it: "minificare css gratis online compressore",
    },
    metaTitle: {
      en: "Minify CSS Online Free | CSS Compressor & Cleaner",
      it: "Minificare File CSS Gratis Senza Programmi | FileOmniTool",
    },
    metaDescription: {
      en: "Minify CSS files in your browser with zero latency. Reduces bandwidth and accelerates site performance.",
      it: "Comprimi fogli di stile CSS in locale senza installare Node.js o software esterni. Download file .min.css immediato.",
    },
    instructions: {
      en: [
        "Drop a .css file or paste your stylesheet code.",
        "Comments and redundant spaces are eliminated in RAM.",
        "Save your production-ready minified stylesheet."
      ],
      it: [
        "Trascina il file .css o incolla il codice da comprimere.",
        "Spazi e commenti superflui vengono eliminati all'istante in RAM.",
        "Scarica il foglio di stile compresso pronto per la produzione."
      ]
    },
    faq: {
      en: [
        {
          question: "Does minification break media queries?",
          answer: "No, CSS syntax and cascade rules remain completely intact."
        }
      ],
      it: [
        {
          question: "La minificazione altera le media query o i selettori?",
          answer: "No, la semantica dei selettori e le media query rimangono perfettamente valide e funzionanti."
        }
      ]
    }
  },

  // 73. epoch-converter
  {
    id: "epoch-converter",
    category: "text",
    iconName: "Clock",
    badge: { en: "Real-Time", it: "Tempo Reale" },
    popular: false,
    acceptedMime: "text/plain",
    maxSizeMB: 10,
    title: {
      en: "Unix Timestamp & Epoch Converter",
      it: "Convertitore Timestamp Unix Epoch",
    },
    description: {
      en: "Convert Unix epoch timestamps to human-readable dates (Local & UTC) and dates back to timestamps in real time.",
      it: "Converti timestamp Unix in date leggibili (locali e UTC) e date in secondi/millisecondi Unix in tempo reale.",
    },
    seoKeyword: {
      en: "unix timestamp epoch converter online free",
      it: "convertire timestamp unix epoch in data umana",
    },
    metaTitle: {
      en: "Unix Timestamp Epoch Converter Online Free | FileOmniTool",
      it: "Convertire Timestamp Unix Epoch in Data Umana | FileOmniTool",
    },
    metaDescription: {
      en: "Real-time Unix epoch clock and timestamp converter. Supports seconds, milliseconds, and ISO-8601 formatting.",
      it: "Orologio Unix in tempo reale e convertitore timestamp bidirezionale in locale. Calcolo fuso orario istantaneo.",
    },
    instructions: {
      en: [
        "Type a Unix timestamp or pick a calendar date.",
        "View Local, UTC, and relative time expressions.",
        "Copy formatted timestamps or date strings with one click."
      ],
      it: [
        "Scrivi un timestamp numerico o scegli una data dal calendario.",
        "Visualizza orario locale, fuso orario UTC e tempo relativo.",
        "Copia i secondi, i millisecondi o la data formattata in un clic."
      ]
    },
    faq: {
      en: [
        {
          question: "Does it detect seconds vs milliseconds?",
          answer: "Yes, 10-digit (seconds) and 13-digit (milliseconds) timestamps are automatically parsed."
        }
      ],
      it: [
        {
          question: "Riconosce automaticamente secondi e millisecondi?",
          answer: "Sì, i timestamp a 10 cifre (secondi) e 13 cifre (millisecondi) vengono rilevati in automatico."
        }
      ]
    }
  },

  // 74. file-to-base64
  {
    id: "file-to-base64",
    category: "text",
    iconName: "Binary",
    badge: { en: "Universal", it: "Universale" },
    popular: true,
    acceptedMime: "*/*",
    maxSizeMB: 100,
    title: {
      en: "Universal File to Base64 Converter",
      it: "Convertitore Qualsiasi File in Base64",
    },
    description: {
      en: "Encode any binary file (PDF, DOCX, ZIP, MP3) into Base64 text and decode Base64 strings back to original files.",
      it: "Converti qualsiasi file binario (PDF, DOCX, ZIP, MP3) in testo Base64 e ricostruisci file originali da Base64.",
    },
    seoKeyword: {
      en: "convert any file to base64 online free",
      it: "convertire file in base64 e viceversa gratis",
    },
    metaTitle: {
      en: "Convert Any File to Base64 Online Free | File to Base64",
      it: "Convertire File in Base64 e Viceversa Gratis | FileOmniTool",
    },
    metaDescription: {
      en: "Bidirectional binary file to Base64 string encoder and decoder. Safe, fast, 100% client-side memory execution.",
      it: "Converti documenti, archivi o audio in stringhe Base64 scaricabili in .txt e ricostruisci file binari in un clic.",
    },
    instructions: {
      en: [
        "Upload a binary file or paste a Base64 string.",
        "The browser encodes or decodes binary buffers in local memory.",
        "Download Base64 text file or restored binary file."
      ],
      it: [
        "Carica qualsiasi file oppure incolla una stringa Base64 da decodificare.",
        "Il browser converte i byte binari nella memoria locale in tempo reale.",
        "Scarica il file .txt con il Base64 o salva il file originale ricostruito."
      ]
    },
    faq: {
      en: [
        {
          question: "Is there a file type limitation?",
          answer: "No! Works with any binary file format: PDF, images, audio, video, ZIP, documents."
        }
      ],
      it: [
        {
          question: "Ci sono limiti sul tipo di file supportato?",
          answer: "Nessun limite! Funziona con qualsiasi estensione: PDF, immagini, tracce audio, archivi compressi ed eseguibili."
        }
      ]
    }
  },

  // 75. file-magic-detector
  {
    id: "file-magic-detector",
    category: "text",
    iconName: "FileSearch",
    badge: { en: "Inspector", it: "Analisi" },
    popular: true,
    acceptedMime: "*/*",
    maxSizeMB: 100,
    title: {
      en: "File Signature & Magic Bytes Identifier",
      it: "Riconoscimento Tipo File da Magic Bytes",
    },
    description: {
      en: "Inspect header magic bytes of unknown, extensionless, or renamed files to identify their true format and MIME type.",
      it: "Analizza i byte iniziali di file sconosciuti o senza estensione per scoprirne il formato reale e il MIME type.",
    },
    seoKeyword: {
      en: "file signature magic bytes identifier online free",
      it: "riconoscere tipo file sconosciuto magic bytes gratis",
    },
    metaTitle: {
      en: "File Magic Bytes Identifier Online Free | Detect File Extension",
      it: "Riconoscere Tipo di File Sconosciuto dai Magic Bytes | FileOmniTool",
    },
    metaDescription: {
      en: "Detect real file types and extensions for corrupted or extensionless files using header magic numbers in browser.",
      it: "Scopri la vera estensione di file senza estensione o rinominati per errore esaminando i primi byte. 100% gratis.",
    },
    instructions: {
      en: [
        "Upload any corrupted, renamed, or extensionless file.",
        "Magic numbers are matched against format signatures in memory.",
        "Download the file with its true extension restored."
      ],
      it: [
        "Trascina qualsiasi file privo di estensione o sospetto.",
        "I numeri magici dell'intestazione vengono confrontati con i formati noti.",
        "Scarica il file ripristinato con la sua estensione corretta (es. .pdf, .zip, .png)."
      ]
    },
    faq: {
      en: [
        {
          question: "What are magic bytes?",
          answer: "Magic bytes are unique sequences at the start of files (like %PDF for PDF, PK for ZIP, or PNG header) used by operating systems to identify formats."
        }
      ],
      it: [
        {
          question: "Cosa sono i Magic Bytes?",
          answer: "I Magic Bytes sono sequenze numeriche fisse nei primi byte del file che identificano inequivocabilmente il formato originale indipendentemente dal nome del file."
        }
      ]
    }
  },
];
