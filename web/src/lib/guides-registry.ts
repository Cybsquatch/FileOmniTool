export interface GuideStep {
  title: { en: string; it: string };
  description: { en: string; it: string };
}

export interface GuideFaq {
  question: { en: string; it: string };
  answer: { en: string; it: string };
}

export interface GuideArticle {
  slug: string;
  toolId: string;
  category: "pdf" | "image" | "audio" | "document" | "text" | "privacy";
  datePublished: string;
  readTime: string;
  title: { en: string; it: string };
  excerpt: { en: string; it: string };
  metaTitle: { en: string; it: string };
  metaDescription: { en: string; it: string };
  seoKeyword: { en: string; it: string };
  steps: GuideStep[];
  intro: { en: string; it: string };
  deepDive: { en: string; it: string };
  faq: GuideFaq[];
}

export const GUIDES_REGISTRY: GuideArticle[] = [
  {
    slug: "how-to-merge-pdf-without-uploading",
    toolId: "pdf-merge",
    category: "pdf",
    datePublished: "2026-10-07",
    readTime: "3 min",
    title: {
      en: "How to Merge PDF Files Free Without Uploading to Cloud Servers",
      it: "Come Unire Più File PDF Gratis Senza Caricarli su Server (100% Privato)"
    },
    excerpt: {
      en: "Learn how to combine bank statements, contracts, and confidential documents entirely in your local browser memory using WebAssembly.",
      it: "Scopri come combinare estratti conto, contratti e documenti riservati direttamente nella RAM del tuo browser senza alcun rischio privacy."
    },
    metaTitle: {
      en: "How to Merge PDF Online Without Uploading (Zero Server Risk) | FileOmniTool",
      it: "Come Unire PDF Senza Caricarli Online (100% Privacy nel Browser) | FileOmniTool"
    },
    metaDescription: {
      en: "Step-by-step guide to merging multiple PDF documents on Windows, Mac, and mobile with zero cloud uploads. Free, instant, and private.",
      it: "Guida passo-passo per unire documenti PDF su PC e smartphone senza caricare nulla su server esterni. Gratuito, istantaneo e sicuro."
    },
    seoKeyword: {
      en: "merge pdf without uploading free",
      it: "unire pdf senza caricare online"
    },
    steps: [
      {
        title: { en: "Select Your PDF Files", it: "Seleziona i tuoi file PDF" },
        description: {
          en: "Drag and drop two or more PDF files into the drop zone or click 'Browse Files' from your computer or phone.",
          it: "Trascina due o più documenti PDF nell'area di rilascio oppure clicca su 'Sfoglia file' dal tuo dispositivo."
        }
      },
      {
        title: { en: "Arrange the Order", it: "Ordina le pagine e i documenti" },
        description: {
          en: "Check the sequence of your files. They will be merged in the exact order displayed in the list.",
          it: "Controlla l'ordine dei file nell'elenco. Verranno uniti esattamente nella sequenza in cui sono disposti."
        }
      },
      {
        title: { en: "Merge in Memory", it: "Elabora nella memoria locale" },
        description: {
          en: "Click 'Merge PDFs'. The WebAssembly engine compiles the pages directly in your computer's RAM in milliseconds.",
          it: "Clicca su 'Unisci PDF'. Il motore WebAssembly unisce i documenti istantaneamente nella memoria RAM del tuo dispositivo."
        }
      },
      {
        title: { en: "Download Instantly", it: "Scarica il PDF finale" },
        description: {
          en: "Save the merged PDF document to your device immediately. Zero copies exist anywhere online.",
          it: "Salva subito il documento finale sul tuo computer. Nessuna copia è mai stata inviata a server esterni."
        }
      }
    ],
    intro: {
      en: "Most popular online PDF mergers upload your sensitive documents—including contracts, medical records, invoices, and bank statements—to remote third-party cloud servers. This introduces serious privacy risks, data breach exposure, and GDPR compliance questions. FileOmniTool solves this by executing 100% client-side: your files never leave your device.",
      it: "La maggior parte dei convertitori PDF online carica i tuoi documenti riservati (contratti aziendali, fatture, cartelle cliniche ed estratti conto) su server cloud remoti. Questo crea gravi rischi di data breach e violazioni della privacy. FileOmniTool risolve il problema alla radice elaborando i file al 100% in locale nel tuo browser tramite WebAssembly: nessun byte lascia mai il tuo computer."
    },
    deepDive: {
      en: "When you upload files to traditional tools, they typically retain temporary copies for 1 to 24 hours on cloud disks. In contrast, client-side WebAssembly manipulates raw PDF binary streams directly in JavaScript memory buffers. Because no network transmission occurs, processing is not throttled by slow internet upload speeds—a 100 MB PDF merges in under two seconds.",
      it: "I servizi convenzionali memorizzano copie temporanee dei tuoi file per ore o giorni sui loro server prima di eliminarli. Al contrario, la tecnologia client-side manipola i flussi binari PDF direttamente nella memoria RAM del browser. Senza attese di caricamento o download via rete, anche documenti di oltre 100 MB vengono uniti in una frazione di secondo."
    },
    faq: [
      {
        question: { en: "Is there any file size limit?", it: "C'è un limite alla dimensione dei file?" },
        answer: {
          en: "No arbitrary limits exist. Since processing occurs in local RAM, you can merge files as large as your device's available memory permits.",
          it: "Nessun limite imposto dal sito. L'unico limite è la memoria RAM disponibile sul tuo computer o smartphone."
        }
      },
      {
        question: { en: "Does it work without an internet connection?", it: "Funziona anche offline senza connessione?" },
        answer: {
          en: "Yes! Once the page is loaded in your browser, the script runs entirely offline with zero network connectivity required.",
          it: "Sì! Una volta caricata la pagina, il tool funziona interamente offline anche senza connessione internet attiva."
        }
      }
    ]
  },
  {
    slug: "how-to-compress-images-without-losing-quality",
    toolId: "image-compress",
    category: "image",
    datePublished: "2026-10-07",
    readTime: "4 min",
    title: {
      en: "How to Compress Images for Web and Email Without Losing Quality",
      it: "Come Comprimere Immagini per Email e Web Senza Perdere Qualità"
    },
    excerpt: {
      en: "Shrink heavy JPG, PNG, and WebP photos by up to 80% directly in your browser while keeping crystal-clear sharpness for attachments and websites.",
      it: "Riduci il peso di foto JPG, PNG e WebP fino all'80% direttamente nel browser, mantenendo una nitidezza perfetta per allegati email e siti web."
    },
    metaTitle: {
      en: "How to Compress Images Without Losing Quality (Fast & Free) | FileOmniTool",
      it: "Come Comprimere Immagini Senza Perdere Qualità (Guida Gratis) | FileOmniTool"
    },
    metaDescription: {
      en: "Learn how to compress JPG and PNG images under 200KB for Gmail, Outlook, or web publishing with zero quality degradation and 100% privacy.",
      it: "Guida pratica per ridurre il peso di foto e immagini sotto i 200KB per email e siti web, preservando i dettagli visivi senza caricare file online."
    },
    seoKeyword: {
      en: "compress image without losing quality online free",
      it: "comprimere immagini senza perdere qualita gratis"
    },
    steps: [
      {
        title: { en: "Drop Your Photos", it: "Carica le tue foto" },
        description: {
          en: "Upload any JPG, PNG, or WebP image. You can select multiple photos at once.",
          it: "Trascina le immagini JPG, PNG o WebP nell'area di lavoro o selezionale dalla tua galleria."
        }
      },
      {
        title: { en: "Adjust Quality Slider", it: "Regola il cursore di compressione" },
        description: {
          en: "Use the interactive quality slider (e.g. 80%) to balance maximum byte savings with razor-sharp visual fidelity.",
          it: "Scegli il livello desiderato (consigliato 75-85%) per ottenere il miglior compromesso tra risparmio in KB e nitidezza visiva."
        }
      },
      {
        title: { en: "Instant Canvas Rendering", it: "Elaborazione Canvas in tempo reale" },
        description: {
          en: "The HTML5 Canvas engine re-encodes the pixel matrix instantly in your local browser memory.",
          it: "Il motore HTML5 Canvas ri-quantizza i pixel direttamente nella RAM del tuo dispositivo senza server esterni."
        }
      },
      {
        title: { en: "Download Compressed File", it: "Scarica l'immagine alleggerita" },
        description: {
          en: "View exact size reduction (e.g., -75%) and click download to get your lightweight file ready for sending.",
          it: "Verifica il risparmio percentuale di peso (es. -75%) e scarica istantaneamente il file pronto per l'invio."
        }
      }
    ],
    intro: {
      en: "Large high-resolution images are the number one cause of failed email attachments and sluggish web loading speeds. Modern smartphones capture photos that weigh 5MB to 15MB each, yet Gmail and Outlook restrict attachments to 20-25MB total. Compressing your images locally solves attachment limits in seconds.",
      it: "Le foto scattate dai moderni smartphone pesano facilmente tra i 5MB e i 15MB ciascuna. Quando tenti di inviarle via email, superi rapidamente il limite di 25MB di Gmail o Outlook. Comprimere le immagini in locale elimina questo problema riducendo le dimensioni dei file fino all'80% senza differenze visibili a occhio nudo."
    },
    deepDive: {
      en: "Lossy compression algorithms analyze human perception tolerances. By eliminating invisible color variations in gradients and fine textures, you can shed 70% of file weight before the human eye detects compression artifacts. Because FileOmniTool uses the browser's native Canvas and WebGL APIs, your private family photos are never exposed to external analytics or image crawlers.",
      it: "Gli algoritmi di compressione sfruttano i limiti percettivi dell'occhio umano. Rimuovendo le micro-variazioni di colore invisibili e le frequenze ad alta densità, è possibile abbattere il 70-80% del peso senza alterare la resa visiva. Grazie all'elaborazione 100% in-browser, i tuoi scatti personali o documenti fotografati non vengono mai trasmessi sul web."
    },
    faq: [
      {
        question: { en: "What is the best format for small file size?", it: "Qual è il formato migliore per ridurre le dimensioni?" },
        answer: {
          en: "WebP provides 25% to 35% superior compression compared to standard JPEG at equivalent visual quality.",
          it: "Il formato WebP garantisce una compressione superiore del 25-35% rispetto al tradizionale JPG a parità di qualità visiva."
        }
      },
      {
        question: { en: "Will metadata (GPS, camera info) be preserved?", it: "I metadati GPS e fotocamera vengono rimossi?" },
        answer: {
          en: "During canvas re-encoding, hidden metadata and GPS coordinates are automatically stripped, boosting your privacy.",
          it: "Durante la ricodifica su canvas, i metadati nascosti e la posizione GPS vengono ripuliti per proteggere la tua privacy."
        }
      }
    ]
  },
  {
    slug: "how-to-extract-audio-from-video-in-browser",
    toolId: "video-to-audio",
    category: "audio",
    datePublished: "2026-10-07",
    readTime: "3 min",
    title: {
      en: "How to Extract MP3 Audio from Video Files in Your Browser",
      it: "Come Estrarre Audio MP3 da Video Direttamente nel Browser"
    },
    excerpt: {
      en: "Convert MP4, MOV, or WebM clips into clean MP3 sound files without installing heavy software or uploading gigabytes of video to remote servers.",
      it: "Converti file video MP4, MOV o WebM in tracce audio MP3 pulite senza installare software pesanti o caricare gigabyte di video su server terzi."
    },
    metaTitle: {
      en: "Extract MP3 Audio from Video Online Free (No Upload) | FileOmniTool",
      it: "Come Estrarre Audio MP3 da Video Gratis nel Browser | FileOmniTool"
    },
    metaDescription: {
      en: "Learn how to convert MP4 and MOV videos into high-quality MP3 audio files in seconds. 100% in-browser Web Audio processing, free and private.",
      it: "Guida semplice per convertire video MP4 o MOV in audio MP3 ad alta fedeltà. Elaborazione Web Audio 100% locale, gratuita e illimitata."
    },
    seoKeyword: {
      en: "extract mp3 from video online free",
      it: "estrarre audio mp3 da video gratis"
    },
    steps: [
      {
        title: { en: "Upload Video Clip", it: "Seleziona il video" },
        description: {
          en: "Drop your MP4, WebM, or MOV recording directly into the tool drop zone.",
          it: "Trascina il video MP4, MOV o WebM nell'area del convertitore."
        }
      },
      {
        title: { en: "Select Audio Quality", it: "Scegli il bitrate audio" },
        description: {
          en: "Choose 192 kbps or 320 kbps for studio quality, or 128 kbps for lightweight voice notes.",
          it: "Scegli tra 128 kbps (ottimo per il parlato) fino a 192 o 320 kbps per la massima fedeltà musicale."
        }
      },
      {
        title: { en: "Native Web Audio Demuxing", it: "Demuxing con Web Audio API" },
        description: {
          en: "The browser decodes the audio track directly from the video stream using hardware-accelerated Web Audio.",
          it: "Il browser estrae la traccia audio direttamente dal flusso video sfruttando l'hardware locale."
        }
      },
      {
        title: { en: "Save Your MP3", it: "Salva il file MP3" },
        description: {
          en: "Click download to save your crisp MP3 file ready for your music player or podcast editor.",
          it: "Clicca su 'Scarica MP3' e ottieni all'istante la traccia audio isolata e pronta all'uso."
        }
      }
    ],
    intro: {
      en: "Extracting the audio from a lecture, podcast interview, webinar, or music video usually requires uploading huge multi-gigabyte video files to cloud converters. On standard home connections, this can take 20 minutes just to upload. FileOmniTool extracts the sound track directly on your machine in seconds.",
      it: "Estrarre l'audio da una lezione universitaria, una conferenza, una riunione o un video musicale richiede solitamente l'upload di file da diversi gigabyte su convertitori cloud. Con una normale connessione, l'upload può richiedere anche 20 minuti. FileOmniTool estrae la traccia audio direttamente sul tuo dispositivo in pochi secondi."
    },
    deepDive: {
      en: "Web Audio and LameJS compile MP3 audio packets directly from raw audio sample buffers in memory. The video frames are simply discarded, saving battery and CPU cycles. Furthermore, because no video data travels over the wire, your bandwidth remains 100% untouched.",
      it: "Grazie alle API Web Audio native del browser e all'encoder LameJS, il video viene letto in locale e i campioni sonori vengono isolati e codificati in MP3 istantaneamente. I fotogrammi visivi vengono scartati in memoria, risparmiando dati internet ed evitando qualsiasi caricamento di contenuti protetti da copyright su server sconosciuti."
    },
    faq: [
      {
        question: { en: "Can I extract audio from 4K videos?", it: "Posso estrarre l'audio anche da video 4K pesanti?" },
        answer: {
          en: "Yes! Because the video never uploads, large 4K files process quickly as long as your browser can decode the media container.",
          it: "Certamente! Non essendoci upload, anche file da diversi gigabyte vengono elaborati senza problemi sul tuo computer."
        }
      },
      {
        question: { en: "What audio formats are supported?", it: "Quali formati audio posso esportare?" },
        answer: {
          en: "We export universal MP3 files compatible with every phone, tablet, car stereo, and media player in the world.",
          it: "Esportiamo file MP3 standard universali compatibili con qualsiasi smartphone, tablet, autoradio o lettore multimediale."
        }
      }
    ]
  },
  {
    slug: "how-to-remove-exif-metadata-from-photos",
    toolId: "exif-remover",
    category: "privacy",
    datePublished: "2026-10-07",
    readTime: "3 min",
    title: {
      en: "How to Remove GPS and EXIF Metadata from Photos for Total Privacy",
      it: "Come Rimuovere Metadati EXIF e Posizione GPS dalle Foto per Privacy"
    },
    excerpt: {
      en: "Strip home addresses, GPS coordinates, camera serial numbers, and timestamps from your photos before publishing them on social media or forums.",
      it: "Rimuovi coordinate GPS esatte, indirizzo di casa, modello di smartphone e data di scatto prima di pubblicare immagini online."
    },
    metaTitle: {
      en: "Remove EXIF GPS Metadata from Photos Online Free | FileOmniTool",
      it: "Come Rimuovere Metadati EXIF e GPS dalle Foto Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Protect your privacy by sanitizing photos. Delete GPS locations, timestamps, and device details completely client-side with zero uploads.",
      it: "Proteggi la tua privacy eliminando metadati nascosti e geolocalizzazione GPS da foto JPG e PNG prima di condividerle online."
    },
    seoKeyword: {
      en: "remove exif metadata from photo online free",
      it: "rimuovere metadati exif foto gratis"
    },
    steps: [
      {
        title: { en: "Choose Your Photo", it: "Carica la tua foto" },
        description: {
          en: "Select any JPG, JPEG, or HEIC image taken with your smartphone or digital camera.",
          it: "Trascina la foto scattata con smartphone o fotocamera nell'area del tool."
        }
      },
      {
        title: { en: "Inspect Hidden Tags", it: "Ispeziona i tag nascosti" },
        description: {
          en: "Review the embedded metadata: GPS coordinates, altitude, phone model, and exposure settings.",
          it: "Visualizza i dati nascosti presenti nell'immagine (coordinate GPS, altitudine, data e ora esatta, modello fotocamera)."
        }
      },
      {
        title: { en: "Sanitize Binary Stream", it: "Ripulisci i dati EXIF" },
        description: {
          en: "Click 'Clean Metadata'. The engine scrubs all EXIF, IPTC, and XMP markers from the file header.",
          it: "Clicca su 'Rimuovi Metadati'. Il tool elimina tutti i marcatori EXIF, IPTC e XMP dall'intestazione binaria."
        }
      },
      {
        title: { en: "Download Safe Image", it: "Scarica la foto anonimizzata" },
        description: {
          en: "Save your sanitized photo with 100% preserved visual quality and zero privacy risks.",
          it: "Scarica la tua foto pulita: la qualità visiva resta identica al 100%, ma nessuno potrà più scoprire dove è stata scattata."
        }
      }
    ],
    intro: {
      en: "Every photo captured with an iPhone, Android, or DSLR camera embeds invisible Exchangeable Image File Format (EXIF) metadata. This includes your exact GPS latitude and longitude (pinpointing your home or workplace), full timestamps, and unique camera serial numbers. Sharing these photos online can inadvertently expose your location to strangers.",
      it: "Ogni volta che scatti una foto con uno smartphone Android o iPhone, il dispositivo incorpora metadati invisibili chiamati EXIF. Questi dati contengono la latitudine e longitudine GPS esatta (in grado di rivelare l'indirizzo di casa o dell'ufficio), la data e l'ora precisa e il modello del dispositivo. Pubblicare queste foto su forum o annunci senza ripulirle espone la tua sicurezza."
    },
    deepDive: {
      en: "Many social networks strip EXIF on upload, but direct messaging apps, cloud shares, classified ads, and forums often preserve raw metadata intact. FileOmniTool reconstructs the image canvas to produce a pristine binary output completely devoid of APP1 EXIF markers, giving you peace of mind before you send or post.",
      it: "Sebbene alcuni social network ripuliscano automaticamente le foto, molte piattaforme di annunci, email, chat dirette e forum conservano i metadati intatti. FileOmniTool ricostruisce l'immagine preservando ogni singolo pixel ed eliminando tutti i blocchi binari APP1 di tracciamento."
    },
    faq: [
      {
        question: { en: "Does removing EXIF reduce photo quality?", it: "Rimuovere i metadati riduce la qualità della foto?" },
        answer: {
          en: "No! The image pixels remain identical; only invisible text header blocks and coordinates are purged.",
          it: "Assolutamente no! I pixel visibili rimangono inalterati; vengono rimossi solo i blocchi di testo informativo e le coordinate GPS."
        }
      },
      {
        question: { en: "Are my photos sent anywhere during cleaning?", it: "Le foto vengono caricate su qualche server?" },
        answer: {
          en: "Never. The entire sanitization process happens in your device's memory with zero internet requests.",
          it: "Mai. Il processo di bonifica avviene interamente nella memoria del tuo browser senza inviare alcun dato all'esterno."
        }
      }
    ]
  },
  {
    slug: "how-to-create-qr-code-wifi-link",
    toolId: "qr-generator",
    category: "text",
    datePublished: "2026-10-07",
    readTime: "3 min",
    title: {
      en: "How to Generate Custom QR Codes for Wi-Fi, Links, and Contacts Free",
      it: "Come Creare Codici QR per Wi-Fi, Link e Contatti Gratis Senza Limiti"
    },
    excerpt: {
      en: "Generate high-resolution PNG & SVG QR codes for websites, restaurant menus, and instant Wi-Fi network logins with zero expiration dates or tracking.",
      it: "Crea codici QR ad alta risoluzione in PNG e SVG per siti, menu di ristoranti e connessione Wi-Fi immediata, senza scadenze o costi nascosti."
    },
    metaTitle: {
      en: "How to Create Free QR Codes for Wi-Fi and URLs (No Expiry) | FileOmniTool",
      it: "Come Creare Codici QR Gratis per Wi-Fi e Link (Senza Scadenza) | FileOmniTool"
    },
    metaDescription: {
      en: "Create permanent QR codes for URLs, Wi-Fi passwords, and business cards in seconds. 100% free, no account, no expiration, high-res download.",
      it: "Guida passo-passo per generare codici QR statici e permanenti per link e Wi-Fi. Nessuna registrazione, nessuna scadenza, download immediato."
    },
    seoKeyword: {
      en: "create qr code for wifi free no expiration",
      it: "creare codice qr wifi gratis senza scadenza"
    },
    steps: [
      {
        title: { en: "Choose Your Content Type", it: "Scegli il contenuto" },
        description: {
          en: "Select website URL, plain text, or formatted Wi-Fi credentials (SSID & Password).",
          it: "Inserisci l'URL del tuo sito web, un testo libero o le credenziali della tua rete Wi-Fi (nome rete e password)."
        }
      },
      {
        title: { en: "Customize Error Correction", it: "Scegli il livello di correzione" },
        description: {
          en: "Pick high error correction (Level H) if you plan to print your code on flyers or business cards.",
          it: "Imposta un livello di tolleranza errori elevato se prevedi di stampare il codice su volantini, menu o cartelli."
        }
      },
      {
        title: { en: "Real-time Vector Preview", it: "Anteprima vettoriale immediata" },
        description: {
          en: "Your QR code renders instantly with crisp lines and standard ISO compliance.",
          it: "Il codice QR viene calcolato e renderizzato in tempo reale nel browser secondo lo standard ISO."
        }
      },
      {
        title: { en: "Download Crisp PNG", it: "Scarica l'immagine ad alta risoluzione" },
        description: {
          en: "Download your permanent static QR code. It will never expire or require subscription renewals.",
          it: "Scarica il file PNG ad alta definizione pronto per la stampa o la condivisione digitale. Non scadrà mai!"
        }
      }
    ],
    intro: {
      en: "Many commercial QR code generators use a predatory business model: they create 'dynamic' redirect links that deactivate after 14 days unless you pay a steep monthly subscription. When printed on business cards or restaurant tables, this can be disastrous. FileOmniTool generates pure static QR codes that last forever for free.",
      it: "Molti generatori di codici QR online utilizzano un modello ingannevole: creano codici 'dinamici' che reindirizzano ai loro server e smettono di funzionare dopo 14 giorni a meno che non si sottoscriva un abbonamento mensile. Se hai stampato il codice su menu o volantini, questo crea enormi problemi. FileOmniTool genera codici QR statici puri che durano per sempre a costo zero."
    },
    deepDive: {
      en: "Static QR codes encode raw text and protocol strings (like 'WIFI:S:MyNetwork;T:WPA;P:SecretPassword;;') directly into the geometric 2D matrix. No intermediary redirect server exists, meaning the code will scan flawlessly for decades even if our website were to go offline.",
      it: "I codici QR statici codificano la stringa o le credenziali Wi-Fi (formato 'WIFI:S:NomeRete;T:WPA;P:Password;;') direttamente nella geometria della matrice a pixel. Non esistendo alcun server ponte, il codice sarà leggibile da qualsiasi fotocamera per sempre, anche a distanza di anni."
    },
    faq: [
      {
        question: { en: "Will these QR codes ever expire?", it: "Questi codici QR possono scadere?" },
        answer: {
          en: "Never. Static QR codes encode information permanently into the black and white pixel pattern.",
          it: "Mai! Essendo codici statici diretti, non dipendono da nessun abbonamento e non hanno alcuna scadenza."
        }
      },
      {
        question: { en: "Can all smartphones scan them without extra apps?", it: "Tutti gli smartphone possono scansionarli senza app?" },
        answer: {
          en: "Yes, modern iOS and Android camera apps automatically recognize standard Wi-Fi and URL QR codes natively.",
          it: "Sì, l'applicazione fotocamera nativa di iPhone e Android riconosce all'istante sia i link che le reti Wi-Fi."
        }
      }
    ]
  }
];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return GUIDES_REGISTRY.find((guide) => guide.slug === slug);
}

export function getGuideByToolId(toolId: string): GuideArticle | undefined {
  return GUIDES_REGISTRY.find((guide) => guide.toolId === toolId);
}
