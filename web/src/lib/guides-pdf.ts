import { GuideArticle } from "./guides-registry";

export const PDF_GUIDES: GuideArticle[] = [
  // 1. pdf-merge
  {
    slug: "how-to-merge-pdf-without-uploading",
    toolId: "pdf-merge",
    category: "pdf",
    datePublished: "2026-10-07",
    readTime: "3 min",
    title: {
      en: "How to Merge PDF Files Free Without Uploading to Cloud Servers",
      it: "Come Unire Più File PDF Gratis Senza Programmi (100% Privato)"
    },
    excerpt: {
      en: "Combine contracts, statements, and invoices in your browser RAM using WebAssembly with zero privacy risk.",
      it: "Hai bisogno di unire due o più documenti PDF ma non vuoi installare programmi né caricare file riservati sul cloud? Ecco la soluzione definitiva."
    },
    metaTitle: {
      en: "How to Merge PDF Online Without Uploading | FileOmniTool",
      it: "Come Unire PDF Gratis Senza Programmi (Guida Facile) | FileOmniTool"
    },
    metaDescription: {
      en: "Step-by-step guide to merging multiple PDF documents on Windows, Mac, and mobile with zero cloud uploads.",
      it: "Scopri come unire file PDF gratis senza installare software pesanti. Guida in stile Salvatore Aranzulla con passaggi chiari e sicuri."
    },
    seoKeyword: {
      en: "merge pdf without uploading free",
      it: "come unire pdf gratis senza programmi"
    },
    steps: [
      {
        title: { en: "Select Your PDF Files", it: "Seleziona i tuoi file PDF" },
        description: {
          en: "Drag and drop two or more PDF files into the drop zone or click 'Browse Files'.",
          it: "Trascina i documenti PDF nella casella di rilascio oppure fai clic sul pulsante per sceglierli dal tuo PC o smartphone."
        }
      },
      {
        title: { en: "Arrange the Order", it: "Ordina i file nella sequenza corretta" },
        description: {
          en: "Verify the order of your documents; they will be concatenated sequentially.",
          it: "Verifica l'ordine dei documenti nell'elenco. Verranno assemblati esattamente nell'ordine mostrato a schermo."
        }
      },
      {
        title: { en: "Merge in Memory", it: "Avvia l'unione immediata in RAM" },
        description: {
          en: "Click 'Merge PDFs'. The WebAssembly engine compiles pages in local RAM.",
          it: "Fai clic sul pulsante 'Unisci PDF'. Il motore locale assemblerà le pagine nella memoria del browser in una frazione di secondo."
        }
      },
      {
        title: { en: "Download Instantly", it: "Scarica il PDF unificato" },
        description: {
          en: "Save the merged PDF directly to your device. No cloud copy ever existed.",
          it: "Fai clic su 'Scarica PDF Unito' e salva il nuovo documento sul tuo dispositivo. Nessun dato è mai stato inviato a server terzi."
        }
      }
    ],
    intro: {
      en: "Most traditional online PDF converters upload sensitive documents—such as contracts, bank statements, and tax returns—to remote cloud servers. This exposes you to severe data breach risks and privacy violations. FileOmniTool solves this problem by running entirely client-side inside your browser via WebAssembly.",
      it: "Ti capita spesso di dover inviare via email un unico file PDF contenente fatture, ricevute o contratti sparsi in documenti diversi? Molti siti web richiedono di caricare i tuoi file riservati su server cloud remoti, con evidenti rischi per la riservatezza dei tuoi dati personali. Con FileOmniTool non corri alcun pericolo: l'unione dei file avviene direttamente nella memoria RAM del tuo dispositivo, senza che nemmeno un singolo byte lasci il tuo browser!"
    },
    deepDive: {
      en: "Unlike traditional cloud portals that queue files on remote disks for hours, client-side WebAssembly manipulates raw PDF binary streams directly in JavaScript memory buffers. Because no upload or download network latency exists, a 100 MB PDF combines in less than two seconds.",
      it: "Come funziona la tecnologia in-browser? Semplice: sfruttando le potenzialità moderne di WebAssembly e JavaScript, il tuo browser elabora direttamente i flussi binari dei PDF. Non devi attendere i tempi lunghi del caricamento internet (upload) e puoi unire file anche pesanti in pochissimi istanti, sia su computer Windows e Mac, sia su smartphone Android e iPhone."
    },
    faq: [
      {
        question: { en: "Is there any document limit?", it: "C'è un limite al numero di PDF da unire?" },
        answer: {
          en: "No arbitrary limits exist. You can merge as many pages as your device RAM can hold.",
          it: "Non imponiamo alcun limite arbitrario. Puoi unire tutti i documenti che la memoria del tuo dispositivo consente di gestire."
        }
      },
      {
        question: { en: "Can I use it on mobile phones?", it: "Posso usarlo anche dal telefono?" },
        answer: {
          en: "Yes, fully compatible with Safari on iOS and Chrome on Android without installing apps.",
          it: "Certamente! Funziona alla perfezione sia su Safari per iPhone/iPad che su Chrome per Android, senza bisogno di scaricare app pesanti."
        }
      }
    ]
  },

  // 2. pdf-split
  {
    slug: "how-to-split-extract-pages-from-pdf",
    toolId: "pdf-split",
    category: "pdf",
    datePublished: "2026-10-07",
    readTime: "3 min",
    title: {
      en: "How to Split PDF and Extract Specific Pages (Free & Private)",
      it: "Come Dividere ed Estrarre Pagine da un PDF Gratis (Senza Programmi)"
    },
    excerpt: {
      en: "Extract individual pages or ranges like '1-3, 5' from any PDF document without installing heavy software.",
      it: "Hai un PDF di 50 pagine e te ne servono solo tre? Scopri come estrarre le pagine desiderate gratis e in un clic."
    },
    metaTitle: {
      en: "How to Split PDF and Extract Pages Online Free | FileOmniTool",
      it: "Come Dividere un PDF ed Estrarre Pagine Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Learn how to extract individual pages or custom ranges from PDF files on PC and smartphone with complete privacy.",
      it: "Guida completa per dividere file PDF ed estrarre pagine singole o intervalli. Veloce, gratuito e senza installare software."
    },
    seoKeyword: {
      en: "how to split pdf extract pages online free",
      it: "come dividere pdf estrarre pagine gratis"
    },
    steps: [
      {
        title: { en: "Upload the PDF", it: "Carica il file PDF da dividere" },
        description: {
          en: "Drag your PDF file into the drop zone.",
          it: "Trascina il documento PDF nella casella o selezionalo dalla memoria del tuo dispositivo."
        }
      },
      {
        title: { en: "Specify Page Range", it: "Indica le pagine da estrarre" },
        description: {
          en: "Type ranges like '1-3, 5, 8-10' to extract only desired sections.",
          it: "Digita i numeri delle pagine o gli intervalli desiderati, per esempio '1-3, 5' per ottenere solo le pagine 1, 2, 3 e 5."
        }
      },
      {
        title: { en: "Extract in Browser", it: "Estrai le pagine in un clic" },
        description: {
          en: "Click 'Extract Pages' to compile the new document in memory.",
          it: "Fai clic sul pulsante verde 'Estrai Pagine' per generare istantaneamente il nuovo file."
        }
      },
      {
        title: { en: "Download the Extracted PDF", it: "Scarica il nuovo file PDF" },
        description: {
          en: "Download the trimmed PDF file directly to your disk.",
          it: "Salva subito il nuovo documento sul tuo computer o smartphone."
        }
      }
    ],
    intro: {
      en: "Often you only need a couple of pages out of a 100-page manual, contract, or ebook. Instead of sending oversized files over email, extracting exact pages makes sharing effortless and secure.",
      it: "Quante volte ti è capitato di dover allegare a una pratica burocratica soltanto una o due pagine di un documento molto più voluminoso? Invece di inviare un file enorme pieno di informazioni superflue, la soluzione migliore è estrarre unicamente le pagine che ti interessano. Vediamo come farlo in pochi secondi senza spendere un centesimo."
    },
    deepDive: {
      en: "FileOmniTool parses the document index client-side and clones only the specified page objects into a fresh PDF container. File size is drastically reduced and original resolution is preserved.",
      it: "Grazie al motore integrato nel browser, il nostro strumento analizza la struttura del PDF e isola solo gli oggetti corrispondenti alle pagine selezionate. Il risultato è un file leggerissimo, perfetto da allegare via email o WhatsApp, senza alcuna perdita di nitidezza."
    },
    faq: [
      {
        question: { en: "Can I enter multiple non-consecutive pages?", it: "Posso estrarre pagine non consecutive?" },
        answer: {
          en: "Yes, use commas and hyphens: e.g. '1, 4, 7-10'.",
          it: "Certamente! Puoi combinare virgole e trattini, per esempio inserendo '1, 4, 7-10'."
        }
      }
    ]
  },

  // 3. pdf-rotate
  {
    slug: "how-to-rotate-pdf-pages-permanently",
    toolId: "pdf-rotate",
    category: "pdf",
    datePublished: "2026-10-07",
    readTime: "2 min",
    title: {
      en: "How to Rotate PDF Pages Permanently (90°, 180°, 270°)",
      it: "Come Ruotare Pagine PDF Definitivamente Gratis (90°, 180°)"
    },
    excerpt: {
      en: "Fix upside down scans and landscape pages permanently in your browser without Adobe Acrobat subscriptions.",
      it: "Hai scansionato un documento al contrario o di traverso? Ecco come raddrizzarlo e salvarlo per sempre in 3 semplici clic."
    },
    metaTitle: {
      en: "How to Rotate PDF Pages Permanently Online | FileOmniTool",
      it: "Come Ruotare un PDF Definitivamente Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Permanently rotate skewed or upside-down PDF pages 90 or 180 degrees client-side with zero uploads.",
      it: "Guida passo-passo per ruotare fogli PDF capovolti a 90 o 180 gradi. Salva la rotazione definitiva gratis e senza programmi."
    },
    seoKeyword: {
      en: "how to rotate pdf permanently free",
      it: "come ruotare pdf definitivamente gratis"
    },
    steps: [
      {
        title: { en: "Select Skewed PDF", it: "Carica il PDF da raddrizzare" },
        description: {
          en: "Drop your PDF file into the rotation area.",
          it: "Trascina il file PDF capovolto nell'area di lavoro."
        }
      },
      {
        title: { en: "Choose Rotation Angle", it: "Scegli l'angolo di rotazione" },
        description: {
          en: "Select 90° Clockwise, 180° Upside Down, or 270° Counter-Clockwise.",
          it: "Seleziona 90° orario, 180° o 270° antiorario in base a come è orientato il testo."
        }
      },
      {
        title: { en: "Save Permanently", it: "Salva la rotazione permanente" },
        description: {
          en: "Click 'Rotate PDF' to embed rotation metadata into the file.",
          it: "Fai clic su 'Ruota PDF' e scarica il file: il documento si aprirà sempre dritto su qualsiasi lettore."
        }
      }
    ],
    intro: {
      en: "When scanning multi-page receipts or contracts with a physical scanner or phone camera, pages often end up sideways or upside down. Simply rotating the view in a viewer does not save the angle permanently; you need a tool that writes the rotation matrix into the PDF header.",
      it: "Capita spessissimo: inserisci dei fogli nello scanner e, per errore, uno o più fogli risultano ruotati di traverso o completamente a testa in giù. Se provi a ruotarli con il visualizzatore predefinito del computer, la modifica spesso svanisce non appena chiudi il file! Con FileOmniTool la rotazione viene impressa permanentemente nel codice del file PDF."
    },
    deepDive: {
      en: "FileOmniTool updates the '/Rotate' dictionary key of every target page. When reopened in Adobe Reader, Chrome, macOS Preview, or mobile apps, the document renders upright automatically.",
      it: "Il nostro motore modifica la proprietà interna '/Rotate' del documento. In questo modo, chiunque riceva il tuo PDF (su Windows, Mac, iPhone o Android) lo visualizzerà sempre con l'orientamento corretto fin dal primo istante."
    },
    faq: [
      {
        question: { en: "Will this fix orientation on all devices?", it: "L'orientamento rimarrà dritto su tutti i PC?" },
        answer: {
          en: "Yes, the rotation is written permanently to the file specifications.",
          it: "Sì, la rotazione è permanente e viene riconosciuta da qualsiasi lettore PDF o browser."
        }
      }
    ]
  },

  // 4. image-to-pdf
  {
    slug: "how-to-convert-images-jpg-png-to-pdf",
    toolId: "image-to-pdf",
    category: "pdf",
    datePublished: "2026-10-07",
    readTime: "3 min",
    title: {
      en: "How to Convert JPG and PNG Photos into a Single PDF Document",
      it: "Come Convertire Foto JPG e PNG in un Unico File PDF Gratis"
    },
    excerpt: {
      en: "Combine photo scans, receipts, and identity documents into an official A4 PDF document without cloud uploads.",
      it: "Devi inviare foto di documenti d'identità o ricevute raggruppate in un unico PDF? Ecco come fare in 1 minuto."
    },
    metaTitle: {
      en: "How to Convert Images to PDF Online Free (JPG to PDF) | FileOmniTool",
      it: "Come Convertire Immagini in PDF Gratis (Guida Facile) | FileOmniTool"
    },
    metaDescription: {
      en: "Convert JPG, PNG, and WebP images into paginated A4 PDF documents client-side. Fast, free, and secure.",
      it: "Scopri come trasformare immagini JPG, PNG o screenshot in un unico file PDF ordinato. Gratuito e 100% in-browser."
    },
    seoKeyword: {
      en: "convert jpg png images to pdf online free",
      it: "convertire immagini in pdf gratis senza programmi"
    },
    steps: [
      {
        title: { en: "Select Your Pictures", it: "Carica le tue immagini o foto" },
        description: {
          en: "Upload one or multiple photos (JPG, PNG, WebP).",
          it: "Trascina le foto dei tuoi documenti o ricevute nell'area di lavoro."
        }
      },
      {
        title: { en: "Configure Page Layout", it: "Imposta il formato e i margini" },
        description: {
          en: "Choose A4 format or Fit to Image, and set margin width.",
          it: "Scegli il formato standard A4 (ideale per documenti ufficiali) e imposta i margini desiderati."
        }
      },
      {
        title: { en: "Generate PDF in Memory", it: "Genera il file PDF" },
        description: {
          en: "Click 'Convert to PDF' and download your combined document.",
          it: "Fai clic su 'Converti in PDF' e scarica il documento completo pronto per essere inviato."
        }
      }
    ],
    intro: {
      en: "Government agencies, universities, and corporate HR portals frequently reject raw image files like JPG or PNG, requiring applicants to submit an official PDF document instead.",
      it: "Molti bandi pubblici, università e uffici legali rifiutano categoricamente l'invio di immagini separate (come foto JPG scattate con lo smartphone), pretendendo la consegna di un unico documento PDF ben impaginato. Trasformare le tue foto in un PDF ordinato è semplicissimo con FileOmniTool."
    },
    deepDive: {
      en: "Images are embedded directly into vector PDF pages with automatic aspect ratio scaling and crisp resolution preservation, ensuring professional print readiness.",
      it: "Il motore grafico calcola le proporzioni ottimali per ciascuna foto e la posiziona al centro di una pagina A4 standard, preservando la nitidezza del testo e dei dettagli grafici senza sgranature."
    },
    faq: [
      {
        question: { en: "Can I combine multiple pictures into one PDF?", it: "Posso raggruppare più foto in un solo PDF?" },
        answer: {
          en: "Yes, select as many photos as you want; each photo becomes a separate page in the final PDF.",
          it: "Certamente: seleziona tutte le foto che desideri e ciascuna diventerà una pagina del PDF finale."
        }
      }
    ]
  },

  // 5. pdf-page-number
  {
    slug: "how-to-add-page-numbers-to-pdf-free",
    toolId: "pdf-page-number",
    category: "pdf",
    datePublished: "2026-10-08",
    readTime: "3 min",
    title: {
      en: "How to Add Page Numbers to PDF Documents Free (Without Adobe)",
      it: "Come Numerare le Pagine di un PDF Gratis (Senza Adobe Acrobat)"
    },
    excerpt: {
      en: "Stamp professional page numbers like 'Page X of Y' in top or bottom margins of any PDF in your browser.",
      it: "Vuoi inserire la numerazione delle pagine sulla tua tesi, contratto o report senza pagare licenze software? Ecco come fare."
    },
    metaTitle: {
      en: "How to Add Page Numbers to PDF Free Online | FileOmniTool",
      it: "Come Numerare Pagine PDF Gratis Senza Programmi | FileOmniTool"
    },
    metaDescription: {
      en: "Step-by-step guide to adding custom page numbers to PDF files client-side. Choose position, font, and starting page.",
      it: "Guida per inserire numeri di pagina su documenti PDF gratis nel browser. Posizione personalizzata e opzione per saltare la copertina."
    },
    seoKeyword: {
      en: "add page numbers to pdf free online",
      it: "come numerare pagine pdf gratis senza programmi"
    },
    steps: [
      {
        title: { en: "Upload the PDF Document", it: "Carica il file PDF da numerare" },
        description: {
          en: "Drop your PDF into the tool.",
          it: "Trascina il documento PDF nella casella di rilascio."
        }
      },
      {
        title: { en: "Choose Position & Format", it: "Configura posizione e formato" },
        description: {
          en: "Select bottom-center, bottom-right, or top-center, and pick 'Page X of Y'.",
          it: "Scegli la posizione (in basso al centro, a destra o in alto) e il formato (es. 'Pagina 1 di 20' o '1 / 20')."
        }
      },
      {
        title: { en: "Set Starting Page", it: "Escludi la copertina se necessario" },
        description: {
          en: "Set 'Start from page 2' if you don't want numbers on the title page.",
          it: "Imposta 'Inizia da pagina 2' per lasciare la copertina pulita senza numeri."
        }
      },
      {
        title: { en: "Download Numbered PDF", it: "Scarica il PDF numerato" },
        description: {
          en: "Click 'Insert Page Numbers' and download your document.",
          it: "Fai clic sul pulsante verde e scarica il file numerato pronto per la stampa o la consegna."
        }
      }
    ],
    intro: {
      en: "When submitting academic dissertations, business proposals, or official contracts, having consistent page numbering is a mandatory requirement. Paying hefty monthly subscriptions to Adobe Acrobat just to insert page numbers is completely unnecessary.",
      it: "Presentare una tesi di laurea, una relazione di lavoro o un contratto privo di numeri di pagina fa apparire il documento disordinato e poco professionale. Molti utenti pensano che per numerare un PDF serva acquistare costosi abbonamenti a programmi a pagamento, ma non è affatto così: puoi farlo gratuitamente e in pochi istanti direttamente online!"
    },
    deepDive: {
      en: "FileOmniTool embeds standard Helvetica typography vectors directly into the PDF coordinate system at precise typographical points. The original document formatting remains 100% intact.",
      it: "Il nostro strumento inserisce il testo della numerazione sfruttando font vettoriali standard incorporati direttamente nel codice PDF. La formattazione originaria del testo, le immagini e le tabelle rimangono intatte al 100%."
    },
    faq: [
      {
        question: { en: "Will this alter my existing text?", it: "I numeri copriranno il testo già presente?" },
        answer: {
          en: "Numbers are placed in standard margins (25 points from edge) where content usually does not reach.",
          it: "I numeri vengono posizionati nei margini esterni standard (a 25 punti dal bordo), evitando di sovrapporsi al testo esistente."
        }
      }
    ]
  },

  // 6. pdf-to-text
  {
    slug: "how-to-extract-text-from-pdf-online",
    toolId: "pdf-to-text",
    category: "pdf",
    datePublished: "2026-10-08",
    readTime: "2 min",
    title: {
      en: "How to Extract Pure Text from PDF Files (Copy & TXT Download)",
      it: "Come Estrarre Testo da un PDF Gratis (Copia o Salva in TXT)"
    },
    excerpt: {
      en: "Extract all selectable text and paragraphs from PDF documents into pure TXT without messy formatting.",
      it: "Hai un file PDF da cui devi estrarre tutto il testo per incollarlo in Word o inviarlo via email? Ecco la procedura più rapida."
    },
    metaTitle: {
      en: "How to Extract Text from PDF Online Free | FileOmniTool",
      it: "Come Estrarre Testo da un PDF Gratis Online | FileOmniTool"
    },
    metaDescription: {
      en: "Extract text from PDF documents into plain TXT format client-side. Fast, free, and zero server storage.",
      it: "Guida passo-passo per estrarre testo puro da documenti PDF direttamente nel browser senza installare programmi."
    },
    seoKeyword: {
      en: "extract text from pdf online free",
      it: "estrarre testo da pdf gratis online"
    },
    steps: [
      {
        title: { en: "Upload the PDF", it: "Carica il file PDF" },
        description: {
          en: "Drop your PDF into the tool zone.",
          it: "Trascina il documento PDF nella casella."
        }
      },
      {
        title: { en: "Instant Parsing", it: "Elaborazione istantanea in memoria" },
        description: {
          en: "The browser decodes text streams in memory in milliseconds.",
          it: "Il browser decodifica gli stream di testo e mostra l'anteprima testuale completa con conteggio parole."
        }
      },
      {
        title: { en: "Copy or Download", it: "Copia negli appunti o scarica il file TXT" },
        description: {
          en: "Click 'Copy Text' or 'Download .TXT' to save clean text.",
          it: "Fai clic su 'Copia Testo' per incollarlo ovunque desideri o su 'Scarica .TXT' per salvarlo sul tuo disco."
        }
      }
    ],
    intro: {
      en: "Copying text manually from PDF readers often brings unwanted line breaks, hyphenations, and broken formatting. Extracting pure text streams directly gives you clean, editable copy ready for Word, email, or AI prompts.",
      it: "Quante volte hai provato a copiare il testo da un PDF per incollarlo in Word, ritrovandoti con a capo spezzati, caratteri strani e formattazione illeggibile? Estrarre il flusso di testo puro direttamente dalla struttura interna del PDF è il modo migliore per ottenere un testo pulito e pronto per essere modificato."
    },
    deepDive: {
      en: "FileOmniTool identifies text blocks within PDF content streams and cleans escape sequences, giving you ready-to-use UTF-8 text.",
      it: "Il motore di FileOmniTool intercetta gli operatori testuali 'BT/ET' all'interno delle pagine PDF e ricompone le frasi pulite in formato UTF-8, azzerando le formattazioni corrotte tipiche del copia-incolla manuale."
    },
    faq: [
      {
        question: { en: "Can I use this for AI prompts?", it: "Posso usare il testo estratto per ChatGPT?" },
        answer: {
          en: "Yes, pure TXT is the ideal clean input format for LLMs and word processors.",
          it: "Certamente! Il testo puro è il formato ideale per fornire documenti ad assistenti AI o per rielaborarlo su Word."
        }
      }
    ]
  },

  // 7. pdf-grayscale
  {
    slug: "how-to-convert-pdf-to-black-and-white-grayscale",
    toolId: "pdf-grayscale",
    category: "pdf",
    datePublished: "2026-10-08",
    readTime: "2 min",
    title: {
      en: "How to Convert PDF to Black & White Grayscale (Save Printer Ink)",
      it: "Come Convertire un PDF in Bianco e Nero per Risparmiare Inchiostro"
    },
    excerpt: {
      en: "Convert full color PDF documents to grayscale to save up to 80% on expensive color printer cartridges.",
      it: "Devi stampare un documento con molte immagini colorate ma vuoi risparmiare inchiostro prezioso? Ecco il trucco."
    },
    metaTitle: {
      en: "How to Convert PDF to Grayscale B&W Online Free | FileOmniTool",
      it: "Come Convertire PDF in Bianco e Nero Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Transform color PDFs into monochrome grayscale in your browser. Save money on printer toner and ink.",
      it: "Guida per trasformare documenti PDF a colori in bianco e nero scala di grigi. Risparmia fino all'80% di toner."
    },
    seoKeyword: {
      en: "convert pdf to black and white grayscale online",
      it: "convertire pdf in bianco e nero scala di grigi gratis"
    },
    steps: [
      {
        title: { en: "Select Color PDF", it: "Carica il PDF a colori" },
        description: {
          en: "Drop your colorful document into the tool.",
          it: "Trascina il file PDF a colori nell'area di lavoro."
        }
      },
      {
        title: { en: "Choose Contrast Mode", it: "Scegli il profilo di contrasto" },
        description: {
          en: "Pick Standard Grayscale or High Contrast Eco-Print.",
          it: "Seleziona 'Scala di Grigi Standard' per testi bilanciati o 'Alto Contrasto' per massimizzare il risparmio."
        }
      },
      {
        title: { en: "Download and Print", it: "Scarica e stampa in totale economia" },
        description: {
          en: "Download your grayscale PDF ready for black-toner printing.",
          it: "Scarica il nuovo PDF in bianco e nero e invialo alla stampante senza sprecare cartucce a colori."
        }
      }
    ],
    intro: {
      en: "Modern laser and inkjet printers often automatically consume expensive cyan, magenta, and yellow ink even when printing seemingly simple documents. Converting the PDF to true monochrome grayscale forces the printer to utilize black toner only.",
      it: "Molte stampanti moderne tendono a consumare le costosissime cartucce a colori anche per stampare documenti che sembrano quasi del tutto testuali. Trasformando preventivamente il PDF in una versione monocromatica in scala di grigi, forzerai la stampante a impiegare esclusivamente l'inchiostro nero economico, risparmiando centinaia di euro all'anno!"
    },
    deepDive: {
      en: "Client-side processing desaturates color layers across all pages without requiring any server uploads, protecting financial statements and confidential reports.",
      it: "La conversione avviene interamente in locale: non solo risparmi denaro sulle cartucce di stampa, ma puoi convertire in sicurezza estratti conto, documenti fiscali e cartelle cliniche senza che escano mai dal tuo computer."
    },
    faq: [
      {
        question: { en: "Will text remain sharp?", it: "Il testo rimarrà nitido e leggibile?" },
        answer: {
          en: "Yes, text vector definitions remain crisp and razor-sharp.",
          it: "Sì! La definizione vettoriale del testo viene preservata integralmente, garantendo massima leggibilità."
        }
      }
    ]
  },

  // 8. pdf-metadata
  {
    slug: "how-to-edit-remove-pdf-metadata-properties",
    toolId: "pdf-metadata",
    category: "pdf",
    datePublished: "2026-10-08",
    readTime: "3 min",
    title: {
      en: "How to Edit or Remove PDF Metadata Properties (Privacy Clean)",
      it: "Come Modificare o Rimuovere Metadati da un PDF (Privacy Clean)"
    },
    excerpt: {
      en: "Inspect and sanitize Title, Author, Subject, and Producer fields from PDF files before sharing them publicly.",
      it: "I tuoi documenti PDF possono rivelare il tuo nome, la tua azienda o il software usato: ecco come cancellare i metadati prima dell'invio."
    },
    metaTitle: {
      en: "How to Edit or Remove PDF Metadata Online Free | FileOmniTool",
      it: "Come Modificare o Cancellare Metadati PDF Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Learn how to inspect, edit, and wipe hidden metadata properties from PDF documents client-side.",
      it: "Guida per visualizzare e rimuovere metadati nascosti (autore, titolo, software) da file PDF. 100% privato e gratuito."
    },
    seoKeyword: {
      en: "edit remove pdf metadata online private",
      it: "come modificare rimuovere metadati pdf gratis"
    },
    steps: [
      {
        title: { en: "Inspect Metadata", it: "Carica il PDF per vedere i dati nascosti" },
        description: {
          en: "Upload your document to see embedded author and software properties.",
          it: "Trascina il PDF per visualizzare i campi Autore, Titolo, Oggetto e Applicazione incorporati nel file."
        }
      },
      {
        title: { en: "Edit or Privacy Clean", it: "Modifica o clicca 'Privacy Clean'" },
        description: {
          en: "Customize fields or click 'Remove All Metadata' to wipe them clean.",
          it: "Modifica le informazioni desiderate oppure fai clic su 'Rimuovi Tutti i Metadati' per azzerarli in un colpo solo."
        }
      },
      {
        title: { en: "Save Sanitized PDF", it: "Scarica il PDF sanificato" },
        description: {
          en: "Download your clean PDF with zero trace of personal computer data.",
          it: "Scarica il nuovo file PDF completamente ripulito e sicuro da condividere online."
        }
      }
    ],
    intro: {
      en: "Whenever you export a document from Microsoft Word, Google Docs, or Pages, the software silently tags the PDF with your personal name, computer user account, and creation software. Before publishing documents or submitting bids, removing these tags is essential for confidentiality.",
      it: "Quando salvi un documento in PDF da Microsoft Word o Google Documenti, il programma registra silenziosamente all'interno del file il tuo nome utente, il software utilizzato, l'orario di creazione e persino il nome dell'azienda! Prima di inviare un preventivo o pubblicare un documento sul web, ripulire questi metadati nascosti è fondamentale per tutelare la tua privacy professionale."
    },
    deepDive: {
      en: "FileOmniTool modifies the PDF trailer catalog and document information dictionary directly, ensuring that search engines or forensic inspectors find zero residual identity marks.",
      it: "Il nostro motore azzera il dizionario '/Info' e il flusso XMP del file PDF. In questo modo nessun software di analisi forense o crawler web potrà risalire all'autore originario."
    },
    faq: [
      {
        question: { en: "Will this affect document contents?", it: "I contenuti del documento verranno alterati?" },
        answer: {
          en: "No, only document header metadata properties are modified.",
          it: "Assolutamente no: il testo, le immagini e le pagine restano identiche, vengono cancellate solo le proprietà d'autore invisibili."
        }
      }
    ]
  },

  // 9. pdf-organize
  {
    slug: "how-to-reorder-organize-delete-pdf-pages",
    toolId: "pdf-organize",
    category: "pdf",
    datePublished: "2026-10-08",
    readTime: "3 min",
    title: {
      en: "How to Reorder, Delete, and Duplicate PDF Pages Visually",
      it: "Come Riordinare, Eliminare e Duplicare Pagine di un PDF Gratis"
    },
    excerpt: {
      en: "Rearrange page order, trash blank pages, and duplicate sheets with an interactive visual dashboard in your browser.",
      it: "Hai un PDF con pagine disordinate o fogli bianchi da eliminare? Ecco come sistemarlo visivamente in pochi secondi."
    },
    metaTitle: {
      en: "How to Reorder and Delete PDF Pages Free | FileOmniTool",
      it: "Come Riordinare ed Eliminare Pagine PDF Gratis | FileOmniTool"
    },
    metaDescription: {
      en: "Visually reorder pages, trash unwanted sheets, and duplicate PDF pages in memory with zero cloud uploads.",
      it: "Guida per riordinare l'ordine delle pagine di un PDF, eliminare fogli inutili e salvare il file definitivo gratis."
    },
    seoKeyword: {
      en: "reorder delete duplicate pdf pages online",
      it: "come riordinare eliminare pagine pdf gratis"
    },
    steps: [
      {
        title: { en: "Upload Multi-Page PDF", it: "Carica il documento PDF" },
        description: {
          en: "Drop your PDF to render individual page cards.",
          it: "Trascina il PDF nell'area di lavoro: vedrai comparire le schede di tutte le pagine."
        }
      },
      {
        title: { en: "Reorder and Delete", it: "Sposta ed elimina le pagine" },
        description: {
          en: "Use arrows to move pages up/down and the trash icon to remove blank pages.",
          it: "Usa le frecce per spostare le pagine prima o dopo, e il cestino per rimuovere le pagine non volute."
        }
      },
      {
        title: { en: "Save Assembled PDF", it: "Salva il nuovo PDF ordinato" },
        description: {
          en: "Click 'Save New PDF' to download your reorganized file.",
          it: "Fai clic su 'Salva Nuovo PDF' e scarica subito il documento nella sequenza perfetta."
        }
      }
    ],
    intro: {
      en: "Scanning physical paper often produces out-of-order pages or blank filler sheets. Instead of re-scanning everything from scratch, reordering pages visually takes only seconds.",
      it: "Quando si scansiona un fascicolo cartaceo, capita spesso che una pagina finisca prima di un'altra o che vengano inclusi fogli bianchi inutili. Rifare la scansione da capo è una perdita di tempo colossale: con FileOmniTool puoi riordinare le pagine a tuo piacimento ed eliminare quelle superflue con un semplice clic!"
    },
    deepDive: {
      en: "The organizing engine creates a clean PDF container copying only chosen pages in your exact specified sequence in client RAM.",
      it: "Il motore assembla un nuovo file PDF prelevando le pagine originarie e concatenandole nell'ordine esatto che hai stabilito, garantendo massima velocità e zero sprechi di memoria."
    },
    faq: [
      {
        question: { en: "Can I duplicate a page?", it: "Posso duplicare una pagina specifica?" },
        answer: {
          en: "Yes, click the clone button on any page card to create an instant copy.",
          it: "Sì, fai clic sul pulsante di copia su qualsiasi scheda per duplicare quella specifica pagina nel documento."
        }
      }
    ]
  }
];
