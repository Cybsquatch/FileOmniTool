import { ToolDefinition } from "./tools-registry";

export const WAVE4_TOOLS: ToolDefinition[] = [
  // 78. pdf-sign
  {
    id: "pdf-sign",
    category: "pdf",
    iconName: "Stamp",
    badge: { en: "High Demand", it: "Molto Richiesto" },
    popular: true,
    acceptedMime: ".pdf,application/pdf",
    maxSizeMB: 150,
    title: {
      en: "Sign PDF Online Free",
      it: "Firma PDF Online Gratis",
      es: "Firmar PDF Online Gratis",
      fr: "Signer un PDF en Ligne Gratuitement",
      de: "PDF Online Kostenlos Unterschreiben",
      pt: "Assinar PDF Online Grátis",
    },
    description: {
      en: "Draw, type, or upload your signature to sign contracts and documents directly in your browser. 100% client-side with zero cloud uploads.",
      it: "Disegna, digita o carica la tua firma autografa per firmare contratti e documenti direttamente nel browser. 100% locale senza upload.",
      es: "Dibuja o sube tu firma para firmar contratos y documentos PDF en tu navegador sin enviar archivos a ningún servidor.",
      fr: "Dessinez ou téléversez votre signature pour signer des contrats PDF directement dans votre navigateur sans serveur.",
      de: "Unterschreiben Sie PDF-Dokumente und Verträge direkt im Browser durch Zeichnen oder Tippen. 100% datenschutzkonform.",
      pt: "Desenhe ou envie sua assinatura para assinar contratos e documentos PDF diretamente no seu navegador em total privacidade.",
    },
    seoKeyword: {
      en: "sign pdf online free in-browser no upload",
      it: "firmare pdf online gratis senza caricamento contratto",
      es: "firmar pdf online gratis sin subir archivos",
      fr: "signer pdf en ligne gratuit sans televersement",
      de: "pdf unterschreiben kostenlos im browser",
      pt: "assinar pdf online gratis sem upload",
    },
    metaTitle: {
      en: "Sign PDF Online Free - 100% Private in Browser | FileOmniTool",
      it: "Firma PDF Online Gratis - 100% Privato nel Browser | FileOmniTool",
      es: "Firmar PDF Online Gratis - 100% Privado | FileOmniTool",
      fr: "Signer un PDF en Ligne Gratuitement - 100% Privé | FileOmniTool",
      de: "PDF Online Kostenlos Unterschreiben - 100% Privat | FileOmniTool",
      pt: "Assinar PDF Online Grátis - 100% Privado | FileOmniTool",
    },
    metaDescription: {
      en: "Add your handwritten or typed signature to any PDF document in seconds. Zero server uploads, completely free, and secure in-browser PDF signer.",
      it: "Firma documenti e contratti PDF in pochi secondi: disegna la tua firma o digitala, posizionala sulla pagina e scarica il file. 100% sicuro nel browser.",
      es: "Firma documentos PDF en segundos: dibuja o escribe tu firma con total privacidad sin subir datos a la nube.",
      fr: "Signez vos documents PDF en quelques secondes : dessinez votre signature en local en toute confidentialité.",
      de: "Fügen Sie Ihre Unterschrift in Sekundenschnelle in jedes PDF ein. Vollständig lokal und ohne Datentransfer.",
      pt: "Assine contratos PDF em segundos com total privacidade: desenhe sua assinatura sem enviar dados para a nuvem.",
    },
    instructions: {
      en: [
        "Drag & drop or select the PDF file you wish to sign.",
        "Draw your signature with mouse/finger, type your initials, or upload an image.",
        "Select the page, placement position, and scale for your signature.",
        "Click 'Firma e Scarica PDF' to assemble and download your signed document."
      ],
      it: [
        "Trascina o seleziona il documento PDF che desideri firmare.",
        "Disegna la tua firma a mano libera, digitala con font corsivo o carica un'immagine.",
        "Scegli la pagina su cui applicare la firma, la posizione desiderata e la dimensione.",
        "Clicca su 'Firma e Scarica PDF' per generare e scaricare il documento firmato."
      ]
    },
    faq: {
      en: [
        {
          question: "Is my signature or document sent to any external server?",
          answer: "No, never. FileOmniTool embeds your signature directly in local browser memory using pdf-lib. No files or signatures ever leave your computer."
        },
        {
          question: "Can I choose which page to sign?",
          answer: "Yes, you can select any page of the PDF or place the signature on the last page where signature blocks typically reside."
        }
      ],
      it: [
        {
          question: "La mia firma o il mio contratto vengono inviati a server esterni?",
          answer: "No, assolutamente. L'incorporamento della firma avviene in locale nella memoria RAM del tuo browser grazie a pdf-lib. Nessun dato lascia il tuo dispositivo."
        },
        {
          question: "Posso scegliere su quale pagina posizionare la firma?",
          answer: "Sì, puoi selezionare qualsiasi pagina del documento o applicarla automaticamente sull'ultima pagina del contratto."
        }
      ]
    }
  },

  // 79. qr-scanner
  {
    id: "qr-scanner",
    category: "image",
    iconName: "ScanLine",
    badge: { en: "Webcam & Image", it: "Foto & Webcam" },
    popular: true,
    acceptedMime: "image/*",
    maxSizeMB: 50,
    title: {
      en: "QR Code Scanner from Image & Camera",
      it: "Scanner QR Code da Immagine e Fotocamera",
      es: "Escanear QR desde Imagen y Cámara",
      fr: "Scanner QR Code depuis Image et Caméra",
      de: "QR-Code Scanner aus Bild & Webcam",
      pt: "Leitor de QR Code de Imagem e Câmera",
    },
    description: {
      en: "Scan QR codes from screenshots, image files, or your live webcam stream instantly in browser with zero server uploads.",
      it: "Scansiona codici QR da immagini, screenshot o direttamente dalla tua fotocamera in tempo reale nel browser. 100% locale.",
      es: "Escanea códigos QR desde capturas de pantalla, archivos de imagen o tu cámara web sin subir nada a internet.",
      fr: "Scannez des codes QR à partir de captures d'écran, d'images ou de votre webcam directement dans le navigateur.",
      de: "QR-Codes aus Screenshots, Bildern oder direkt über die Webcam im Browser scannen. 100% privat ohne Server-Upload.",
      pt: "Leia QR codes a partir de capturas de tela, fotos ou webcam em tempo real no navegador sem enviar arquivos.",
    },
    seoKeyword: {
      en: "qr code scanner from image online webcam free",
      it: "scanner qr code online da immagine pc fotocamera",
      es: "escanear codigo qr desde imagen online gratis",
      fr: "scanner qr code image en ligne gratuit",
      de: "qr code aus bild scannen online kostenlos",
      pt: "leitor de qr code por imagem online gratis",
    },
    metaTitle: {
      en: "QR Code Scanner from Image & Camera - 100% Private | FileOmniTool",
      it: "Scanner QR Code da Immagine e Webcam - 100% Privato | FileOmniTool",
      es: "Escanear QR desde Imagen y Cámara - Gratis | FileOmniTool",
      fr: "Scanner QR Code depuis Image et Caméra - Privé | FileOmniTool",
      de: "QR-Code Scanner aus Bild & Kamera - 100% Privat | FileOmniTool",
      pt: "Leitor de QR Code de Imagem e Câmera - Grátis | FileOmniTool",
    },
    metaDescription: {
      en: "Decode any QR code from an image file, screenshot, or webcam live stream in seconds. Pure client-side JavaScript, zero cloud uploads.",
      it: "Leggi qualsiasi QR code da screenshot, foto o videocamera in pochi istanti. Decodifica 100% client-side senza inviare foto a server esterni.",
      es: "Decodifica códigos QR desde imágenes o cámara web al instante con total privacidad en tu navegador.",
      fr: "Décodez vos codes QR instantanément depuis un fichier image ou votre webcam en toute confidentialité.",
      de: "Lesen Sie QR-Codes sofort aus Screenshots oder über Ihre Webcam aus. Ohne Registrierung und ohne Serverübertragung.",
      pt: "Decodifique QR codes de fotos ou da câmera do computador de forma rápida e segura sem upload.",
    },
    instructions: {
      en: [
        "Select 'Carica Immagine' to drop a screenshot, or 'Inquadra con Fotocamera' for live scanning.",
        "The browser immediately detects the QR matrix and extracts the embedded text or URL.",
        "Copy the decoded content with one click or open links directly."
      ],
      it: [
        "Scegli 'Carica Immagine' per trascinare uno screenshot, oppure 'Inquadra con Fotocamera' per la scansione live.",
        "Il motore jsQR decodifica istantaneamente la matrice e mostra il testo o link incorporato.",
        "Copia il contenuto con un clic o apri direttamente il collegamento."
      ]
    },
    faq: {
      en: [
        {
          question: "Can I scan a QR code from a WhatsApp screenshot on PC?",
          answer: "Yes! Simply drag & drop the screenshot image into the tool. It will decode the QR code without needing a smartphone."
        }
      ],
      it: [
        {
          question: "Posso leggere un QR code da uno screenshot di WhatsApp o email su PC?",
          answer: "Certamente! Trascina lo screenshot nel riquadro di caricamento e il nostro motore in-browser lo decodificherà all'istante senza bisogno del telefono."
        }
      ]
    }
  },

  // 80. barcode-generator
  {
    id: "barcode-generator",
    category: "image",
    iconName: "Barcode",
    badge: { en: "EAN & Code128", it: "EAN & Code128" },
    popular: true,
    acceptedMime: "text/plain",
    maxSizeMB: 10,
    title: {
      en: "Free Barcode Generator (EAN-13, Code 128)",
      it: "Generatore Codici a Barre (EAN-13, Code 128)",
      es: "Generador de Códigos de Barras Gratis",
      fr: "Générateur de Code-Barres Gratuit (EAN-13)",
      de: "Kostenloser Barcode Generator (EAN-13, Code 128)",
      pt: "Gerador de Código de Barras Grátis",
    },
    description: {
      en: "Create high-resolution barcodes in Code 128, EAN-13, UPC, and Code 39 formats. Download as high-res PNG or scalable SVG vector.",
      it: "Crea codici a barre professionali in formato Code 128, EAN-13, UPC e Code 39. Scarica in PNG ad alta risoluzione o SVG vettoriale.",
      es: "Genera códigos de barras estándar en Code 128, EAN-13 y UPC. Descarga en PNG de alta calidad o vectorial SVG gratis.",
      fr: "Créez des codes-barres conformes aux normes Code 128, EAN-13 et UPC. Téléchargez en PNG haute résolution ou SVG vectoriel.",
      de: "Erstellen Sie professionelle Barcodes in Code 128, EAN-13 und UPC. Kostenloser Download als PNG oder SVG-Vektorgrafik.",
      pt: "Crie códigos de barras em Code 128, EAN-13 e UPC. Baixe em PNG de alta resolução ou SVG vetorial sem custos.",
    },
    seoKeyword: {
      en: "free barcode generator online ean 13 code 128 svg png",
      it: "generatore codici a barre gratis ean 13 code 128 vettoriale",
      es: "generador codigos de barras gratis ean 13",
      fr: "generateur code barre gratuit ean 13",
      de: "barcode generator kostenlos ean 13 code 128",
      pt: "gerador codigo de barras gratis ean 13",
    },
    metaTitle: {
      en: "Free Barcode Generator (EAN-13, Code 128) - 100% Private | FileOmniTool",
      it: "Generatore Codici a Barre (EAN-13, Code 128) - 100% Gratis | FileOmniTool",
      es: "Generador de Códigos de Barras Gratis - Vectorial | FileOmniTool",
      fr: "Générateur de Code-Barres Gratuit (EAN-13) - Privé | FileOmniTool",
      de: "Kostenloser Barcode Generator (EAN-13, Code 128) | FileOmniTool",
      pt: "Gerador de Código de Barras Grátis - 100% Privado | FileOmniTool",
    },
    metaDescription: {
      en: "Generate custom barcodes in Code 128, EAN-13, UPC-A, and Code 39. Export crisp vector SVG or high-res PNG for labels and packaging.",
      it: "Genera codici a barre per prodotti, magazzino e commercio. Personalizza dimensioni e colori e scarica in SVG o PNG ad alta nitidezza.",
      es: "Crea códigos de barras estándar para productos y almacenes. Exporta en SVG vectorial o imagen PNG para imprimir.",
      fr: "Générez des codes-barres prêts à imprimer pour vos étiquettes de produits en SVG ou PNG haute résolution.",
      de: "Erstellen Sie druckfertige Barcodes für Produkte und Verpackungen. Kostenlos, werbefrei und lokal generiert.",
      pt: "Gere códigos de barras para etiquetas e embalagens de produtos. Exporte em formato vetorial SVG ou PNG.",
    },
    instructions: {
      en: [
        "Type your product number, SKU, or text string into the input box.",
        "Select your desired symbology standard (Code 128, EAN-13, UPC, Code 39).",
        "Adjust bar thickness, height, and display text options to fit your label.",
        "Download your barcode as a crisp SVG vector or high-resolution PNG image."
      ],
      it: [
        "Digita il numero di prodotto, SKU o testo da codificare.",
        "Scegli lo standard desiderato (Code 128 per lettere e numeri, EAN-13 per prodotti commerciali).",
        "Regola spessore delle barre, altezza e testo per la tua etichetta.",
        "Scarica il codice a barre in formato SVG vettoriale per la stampa o PNG HD."
      ]
    },
    faq: {
      en: [
        {
          question: "Which barcode format should I use for retail products?",
          answer: "In Europe and internationally, EAN-13 is the standard for retail products. In the US and Canada, UPC-A is standard. For internal warehouse inventory, Code 128 is ideal."
        }
      ],
      it: [
        {
          question: "Quale formato di codice a barre devo scegliere per i prodotti in vendita?",
          answer: "In Europa e a livello internazionale, lo standard per la vendita al dettaglio è l'EAN-13 (a 13 cifre). Negli Stati Uniti è l'UPC-A. Per magazzini interni e logistica, Code 128 è la scelta più flessibile."
        }
      ]
    }
  },

  // 81. mic-test
  {
    id: "mic-test",
    category: "audio",
    iconName: "Mic",
    badge: { en: "Hardware Test", it: "Test Audio" },
    popular: true,
    acceptedMime: "audio/*",
    maxSizeMB: 10,
    title: {
      en: "Microphone Test & Audio Level Meter",
      it: "Test Microfono Online e Livello Audio",
      es: "Probar Micrófono Online y Medidor de Audio",
      fr: "Tester son Micro en Ligne & Niveau Audio",
      de: "Mikrofon Test Online & Lautstärke-Pegel",
      pt: "Testar Microfone Online e Nível de Áudio",
    },
    description: {
      en: "Check if your microphone works with a real-time decibel gauge, waveform visualizer, and instant 5-second voice playback test.",
      it: "Verifica se il tuo microfono funziona prima di call ed esami: misuratore decibel in tempo reale, spettro vocale e test di riascolto.",
      es: "Comprueba si tu micrófono funciona con un medidor de decibelios en tiempo real y prueba de escucha antes de llamadas.",
      fr: "Vérifiez le bon fonctionnement de votre micro : vumètre en temps réel, retour casque et test d'enregistrement rapide.",
      de: "Prüfen Sie Ihr Mikrofon vor Zoom-Meetings: Echtzeit-Pegelmesser, Frequenzanzeige und Sofort-Wiedergabetest.",
      pt: "Verifique se seu microfone está funcionando antes de reuniões com medidor de volume em tempo real e teste de voz.",
    },
    seoKeyword: {
      en: "mic test online audio level meter decibel check",
      it: "test microfono online gratis decibel verifica volume",
      es: "probar microfono online gratis medidor audio",
      fr: "tester son micro en ligne gratuit retour casque",
      de: "mikrofon test online kostenlos lautstaerke pegel",
      pt: "testar microfone online gratis medidor volume",
    },
    metaTitle: {
      en: "Microphone Test & Audio Level Meter - 100% Private | FileOmniTool",
      it: "Test Microfono Online e Livello Audio - 100% Gratis | FileOmniTool",
      es: "Probar Micrófono Online y Medidor de Audio | FileOmniTool",
      fr: "Tester son Micro en Ligne & Niveau Audio - Gratuit | FileOmniTool",
      de: "Mikrofon Test Online & Pegelmesser - 100% Privat | FileOmniTool",
      pt: "Testar Microfone Online e Nível de Áudio - Grátis | FileOmniTool",
    },
    metaDescription: {
      en: "Test your microphone online in seconds. View real-time audio input levels, frequency spectrum, and test how your voice sounds with zero recordings uploaded.",
      it: "Verifica il microfono del tuo computer o smartphone: controlla volume, sensibilità e riascoltati in cuffia. 100% privato senza registrazione su server.",
      es: "Prueba tu micrófono online antes de videollamadas. Comprueba niveles de audio y escucha tu voz en tiempo real.",
      fr: "Testez votre micro avant vos réunions Teams ou Zoom. Visualisez vos niveaux sonores et écoutez votre enregistrement de test.",
      de: "Testen Sie die Funktion Ihres Mikrofons vor wichtigen Videokonferenzen. Direkte Rückmeldung im Browser ohne Server-Upload.",
      pt: "Teste seu microfone antes de chamadas de vídeo. Visualize o volume de entrada e escute o teste da sua voz.",
    },
    instructions: {
      en: [
        "Click 'Avvia Test Microfono' and grant browser microphone permission.",
        "Speak normally and watch the volume meter and frequency visualizer respond.",
        "Optionally enable 'Ascolto Diretto (Cuffie)' or record a 5-second sample to evaluate voice clarity."
      ],
      it: [
        "Clicca su 'Avvia Test Microfono' e concedi i permessi nel browser.",
        "Parla normalmente e osserva la barra del volume e lo spettro delle frequenze muoversi in tempo reale.",
        "Attiva 'Ascolto Diretto' in cuffia o registra un test di 5 secondi per sentire la tua voce come la sentono gli altri."
      ]
    },
    faq: {
      en: [
        {
          question: "Is my voice or audio recorded on any server?",
          answer: "Never. The audio signal is processed strictly in your local device's hardware via Web Audio API. When you close the tab, the stream terminates completely."
        }
      ],
      it: [
        {
          question: "La mia voce viene registrata o inviata a server esterni?",
          answer: "Assolutamente no. L'analisi audio avviene in tempo reale tramite la Web Audio API direttamente sul tuo computer. Nessun dato audio viene memorizzato o trasmesso in rete."
        }
      ]
    }
  },

  // 82. webcam-test
  {
    id: "webcam-test",
    category: "image",
    iconName: "Camera",
    badge: { en: "Hardware Test", it: "Test Video" },
    popular: true,
    acceptedMime: "video/*",
    maxSizeMB: 10,
    title: {
      en: "Webcam Test & Camera Resolution Checker",
      it: "Test Webcam e Risoluzione Fotocamera",
      es: "Probar Webcam y Resolución de Cámara",
      fr: "Tester sa Webcam & Résolution Caméra",
      de: "Webcam Test Online & Kamera-Auflösung",
      pt: "Testar Webcam e Resolução da Câmera",
    },
    description: {
      en: "Test your webcam online before meetings: check real resolution (1080p, 720p), measured FPS rate, mirror view, and snapshot quality.",
      it: "Verifica se la tua webcam funziona: controlla la risoluzione effettiva (Full HD, 720p), il frame rate FPS e scatta foto istantanee.",
      es: "Comprueba tu webcam antes de reuniones: detecta resolución real, FPS y captura fotos de prueba en tu navegador.",
      fr: "Testez votre webcam en ligne : vérifiez la résolution réelle, le taux de rafraîchissement FPS et capturez des photos de test.",
      de: "Prüfen Sie Ihre Webcam vor Videokonferenzen: Erkennen Sie die tatsächliche Auflösung, Bildrate (FPS) und Bildqualität.",
      pt: "Teste sua webcam online: verifique a resolução real da câmera, taxa de quadros (FPS) e tire fotos de teste.",
    },
    seoKeyword: {
      en: "webcam test online camera resolution fps checker",
      it: "test webcam online fotocamera pc risoluzione fps",
      es: "probar webcam online resolucion fps camara",
      fr: "tester sa webcam en ligne resolution fps camera",
      de: "webcam test online aufloesung fps pruefen",
      pt: "testar webcam online resolucao fps camera",
    },
    metaTitle: {
      en: "Webcam Test & Resolution Checker - 100% Private | FileOmniTool",
      it: "Test Webcam e Risoluzione Fotocamera - 100% Gratis | FileOmniTool",
      es: "Probar Webcam y Resolución de Cámara | FileOmniTool",
      fr: "Tester sa Webcam & Résolution Caméra - Privé | FileOmniTool",
      de: "Webcam Test Online & Kamera-Auflösung | FileOmniTool",
      pt: "Testar Webcam e Resolução da Câmera - Grátis | FileOmniTool",
    },
    metaDescription: {
      en: "Test your camera online before Zoom, Teams, or Google Meet. Detect webcam resolution, frame rate, aspect ratio, and snap high-res test photos.",
      it: "Verifica il funzionamento della tua videocamera: scopri se trasmette in Full HD o 720p, misura gli FPS effettivi e scatta una foto di prova.",
      es: "Comprueba tu cámara web antes de videollamadas. Analiza resolución nativa y fotogramas por segundo sin instalar nada.",
      fr: "Testez votre webcam avant un appel vidéo important. Mesurez la résolution et la fluidité FPS avec aperçu miroir.",
      de: "Testen Sie Ihre Webkamera schnell und sicher im Browser. Überprüfen Sie Auflösung, Bildrate und Kamerabild.",
      pt: "Teste sua câmera antes de reuniões. Descubra a resolução real, taxa de quadros e capture fotos de teste.",
    },
    instructions: {
      en: [
        "Click 'Attiva e Testa Webcam' and allow camera access in your browser prompt.",
        "Inspect the live video mirror preview, detected resolution (1080p / 720p), and real-time FPS counter.",
        "Click 'Scatta Foto Istantanea' to capture and download a high-resolution snapshot."
      ],
      it: [
        "Clicca su 'Attiva e Testa Webcam' e consenti l'accesso alla fotocamera nel browser.",
        "Verifica l'anteprima video a specchio, la risoluzione rilevata (Full HD / 720p) e il contatore FPS in tempo reale.",
        "Clicca su 'Scatta Foto Istantanea' per acquisire e scaricare una foto ad alta definizione."
      ]
    },
    faq: {
      en: [
        {
          question: "Can anyone else see my webcam stream?",
          answer: "No. The video stream is rendered purely into an HTML5 <video> element in your local browser window. Zero video bytes are transmitted over the internet."
        }
      ],
      it: [
        {
          question: "Qualcun altro può vedere la mia webcam?",
          answer: "No, assolutamente. Il flusso video viene proiettato unicamente nell'elemento video HTML5 della tua finestra del browser. Nessun frame video viene trasmesso sulla rete."
        }
      ]
    }
  }
];
