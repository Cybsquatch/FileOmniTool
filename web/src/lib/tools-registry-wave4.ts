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
  },

  // 83. pdf-compress
  {
    id: "pdf-compress",
    category: "pdf",
    iconName: "Minimize2",
    badge: { en: "High Demand", it: "Molto Richiesto", es: "Muy Solicitado", fr: "Très Demandé", de: "Sehr Gefragt", pt: "Muito Procurado" },
    popular: true,
    acceptedMime: ".pdf,application/pdf",
    maxSizeMB: 200,
    title: {
      en: "Compress PDF Online Free",
      it: "Comprimi PDF Online Gratis",
      es: "Comprimir PDF Online Gratis",
      fr: "Compresser un PDF en Ligne Gratuitement",
      de: "PDF Online Kostenlos Komprimieren",
      pt: "Comprimir PDF Online Grátis",
    },
    description: {
      en: "Reduce PDF file size by re-compressing embedded images, with a one-click 'under 2 MB' mode for email and online portals. 100% in-browser, zero uploads.",
      it: "Riduci il peso dei PDF ricomprimendo le immagini interne, con modalità 'sotto 2 MB' per PEC, portali PA e concorsi. 100% nel browser, nessun upload.",
      es: "Reduce el tamaño de tus PDF recomprimiendo las imágenes internas, con modo 'menos de 2 MB' para correo y portales. 100% en el navegador, sin subir archivos.",
      fr: "Réduisez le poids de vos PDF en recompressant les images intégrées, avec un mode « moins de 2 Mo » pour e-mails et portails. 100 % dans le navigateur, sans envoi.",
      de: "Verkleinern Sie PDFs durch Neukomprimierung eingebetteter Bilder, inklusive Modus „unter 2 MB“ für E-Mail und Portale. 100 % im Browser, ohne Upload.",
      pt: "Reduza o tamanho de PDFs recomprimindo as imagens internas, com modo 'menos de 2 MB' para e-mail e portais. 100% no navegador, sem upload.",
    },
    seoKeyword: {
      en: "compress pdf online free no upload under 2mb",
      it: "comprimi pdf online gratis sotto 2mb senza caricamento",
      es: "comprimir pdf online gratis sin subir archivos",
      fr: "compresser pdf en ligne gratuit sans televersement",
      de: "pdf komprimieren kostenlos ohne upload",
      pt: "comprimir pdf online gratis sem upload",
    },
    metaTitle: {
      en: "Compress PDF Free - Under 2 MB, No Upload | FileOmniTool",
      it: "Comprimi PDF Gratis - Sotto 2 MB per PEC, Senza Upload | FileOmniTool",
      es: "Comprimir PDF Gratis - Menos de 2 MB, Sin Subir | FileOmniTool",
      fr: "Compresser un PDF Gratuitement - Moins de 2 Mo | FileOmniTool",
      de: "PDF Kostenlos Komprimieren - Unter 2 MB, Ohne Upload | FileOmniTool",
      pt: "Comprimir PDF Grátis - Menos de 2 MB, Sem Upload | FileOmniTool",
    },
    metaDescription: {
      en: "Shrink PDF files directly in your browser: choose light, medium or strong compression, or let the tool fit the file under 2 MB. Documents never leave your device.",
      it: "Riduci il peso dei PDF direttamente nel browser: compressione leggera, media o forte, oppure automatica sotto 2 MB per PEC e portali. Il file non lascia mai il tuo dispositivo.",
      es: "Reduce tus PDF directamente en el navegador: compresión ligera, media o fuerte, o automática por debajo de 2 MB. El documento nunca sale de tu dispositivo.",
      fr: "Réduisez vos PDF directement dans le navigateur : compression légère, moyenne ou forte, ou automatique sous 2 Mo. Le document ne quitte jamais votre appareil.",
      de: "Verkleinern Sie PDFs direkt im Browser: leichte, mittlere oder starke Komprimierung oder automatisch unter 2 MB. Das Dokument verlässt nie Ihr Gerät.",
      pt: "Reduza PDFs diretamente no navegador: compressão leve, média ou forte, ou automática abaixo de 2 MB. O documento nunca sai do seu dispositivo.",
    },
    instructions: {
      en: [
        "Drag & drop or select the PDF you want to make smaller.",
        "Pick a level: 'Under a size limit' (default 2 MB), Light, Medium or Strong.",
        "Click 'Compress PDF': images inside the document are re-encoded locally in your browser.",
        "Compare the before/after size and download the compressed PDF."
      ],
      it: [
        "Trascina o seleziona il PDF da alleggerire.",
        "Scegli il livello: 'Sotto un limite di peso' (predefinito 2 MB), Leggera, Media o Forte.",
        "Clicca su 'Comprimi PDF': le immagini del documento vengono ricompresse in locale nel browser.",
        "Confronta il peso prima/dopo e scarica il PDF compresso."
      ],
      es: [
        "Arrastra o selecciona el PDF que quieres reducir.",
        "Elige el nivel: 'Por debajo de un límite' (2 MB por defecto), Ligera, Media o Fuerte.",
        "Pulsa 'Comprimir PDF': las imágenes del documento se recomprimen localmente en tu navegador.",
        "Compara el tamaño antes/después y descarga el PDF comprimido."
      ],
      fr: [
        "Glissez-déposez ou sélectionnez le PDF à alléger.",
        "Choisissez le niveau : « Sous une taille limite » (2 Mo par défaut), Légère, Moyenne ou Forte.",
        "Cliquez sur « Compresser le PDF » : les images du document sont recompressées localement.",
        "Comparez la taille avant/après et téléchargez le PDF compressé."
      ],
      de: [
        "PDF per Drag & Drop ablegen oder auswählen.",
        "Stufe wählen: „Unter einer Größengrenze“ (Standard 2 MB), Leicht, Mittel oder Stark.",
        "Auf „PDF komprimieren“ klicken: Die Bilder im Dokument werden lokal im Browser neu komprimiert.",
        "Größe vorher/nachher vergleichen und die komprimierte PDF herunterladen."
      ],
      pt: [
        "Arraste ou selecione o PDF que deseja reduzir.",
        "Escolha o nível: 'Abaixo de um limite' (2 MB por padrão), Leve, Média ou Forte.",
        "Clique em 'Comprimir PDF': as imagens do documento são recomprimidas localmente no navegador.",
        "Compare o tamanho antes/depois e baixe o PDF comprimido."
      ]
    },
    faq: {
      en: [
        {
          question: "Is my PDF uploaded to a server to be compressed?",
          answer: "No. Compression runs entirely in your browser's memory using pdf-lib and the native Canvas API. The document is never sent over the network."
        },
        {
          question: "Why did my PDF barely shrink?",
          answer: "The tool reduces size by re-encoding embedded photos and scans. PDFs made only of text and vector graphics are already compact and have little to gain; in that case the original file is returned."
        },
        {
          question: "Will the text remain selectable and sharp?",
          answer: "Yes. Text, fonts and vector drawings are left untouched; only raster images are resampled, so the PDF stays searchable and crisp."
        }
      ],
      it: [
        {
          question: "Il mio PDF viene caricato su un server per essere compresso?",
          answer: "No. La compressione avviene interamente nella memoria del tuo browser tramite pdf-lib e le API Canvas native. Il documento non viene mai inviato in rete."
        },
        {
          question: "Perché il mio PDF si è ridotto poco?",
          answer: "Lo strumento riduce il peso ricomprimendo foto e scansioni incorporate. I PDF composti solo da testo e grafica vettoriale sono già leggeri: in quel caso viene restituito il file originale."
        },
        {
          question: "Il testo resta selezionabile e nitido?",
          answer: "Sì. Testo, font e disegni vettoriali restano intatti; vengono ricampionate solo le immagini, quindi il PDF resta ricercabile e nitido. Ideale per PEC e caricamenti su portali PA."
        }
      ],
      es: [
        {
          question: "¿Se sube mi PDF a un servidor para comprimirlo?",
          answer: "No. La compresión se ejecuta por completo en la memoria de tu navegador con pdf-lib y la API Canvas nativa. El documento nunca se envía por la red."
        },
        {
          question: "¿Por qué mi PDF apenas se redujo?",
          answer: "La herramienta reduce el tamaño recomprimiendo fotos y escaneos incrustados. Los PDF de solo texto y vectores ya son ligeros; en ese caso se devuelve el archivo original."
        },
        {
          question: "¿El texto sigue siendo seleccionable y nítido?",
          answer: "Sí. El texto, las fuentes y los gráficos vectoriales no se tocan; solo se remuestrean las imágenes."
        }
      ],
      fr: [
        {
          question: "Mon PDF est-il envoyé sur un serveur pour être compressé ?",
          answer: "Non. La compression s'exécute entièrement dans la mémoire de votre navigateur grâce à pdf-lib et à l'API Canvas native. Le document n'est jamais transmis sur le réseau."
        },
        {
          question: "Pourquoi mon PDF a-t-il peu diminué ?",
          answer: "L'outil réduit le poids en recompressant les photos et scans intégrés. Les PDF composés uniquement de texte et de vectoriel sont déjà légers : le fichier original est alors renvoyé."
        },
        {
          question: "Le texte reste-t-il sélectionnable et net ?",
          answer: "Oui. Le texte, les polices et les dessins vectoriels sont conservés tels quels ; seules les images sont rééchantillonnées."
        }
      ],
      de: [
        {
          question: "Wird meine PDF zum Komprimieren auf einen Server hochgeladen?",
          answer: "Nein. Die Komprimierung läuft vollständig im Arbeitsspeicher Ihres Browsers mit pdf-lib und der nativen Canvas-API. Das Dokument wird nie über das Netzwerk gesendet."
        },
        {
          question: "Warum ist meine PDF kaum kleiner geworden?",
          answer: "Das Tool verkleinert Dateien durch Neukomprimierung eingebetteter Fotos und Scans. Reine Text- und Vektor-PDFs sind bereits kompakt; in diesem Fall wird die Originaldatei zurückgegeben."
        },
        {
          question: "Bleibt der Text auswählbar und scharf?",
          answer: "Ja. Text, Schriften und Vektorgrafiken bleiben unverändert; nur Rasterbilder werden neu abgetastet."
        }
      ],
      pt: [
        {
          question: "Meu PDF é enviado para um servidor para ser comprimido?",
          answer: "Não. A compressão é feita inteiramente na memória do seu navegador com pdf-lib e a API Canvas nativa. O documento nunca é enviado pela rede."
        },
        {
          question: "Por que meu PDF diminuiu pouco?",
          answer: "A ferramenta reduz o tamanho recomprimindo fotos e digitalizações incorporadas. PDFs só de texto e vetores já são leves; nesse caso o arquivo original é devolvido."
        },
        {
          question: "O texto continua selecionável e nítido?",
          answer: "Sim. Texto, fontes e desenhos vetoriais permanecem intactos; apenas as imagens são reamostradas."
        }
      ]
    }
  },

  // 84. heic-to-jpg
  {
    id: "heic-to-jpg",
    category: "image",
    iconName: "FileImage",
    badge: { en: "iPhone Photos", it: "Foto iPhone", es: "Fotos iPhone", fr: "Photos iPhone", de: "iPhone-Fotos", pt: "Fotos iPhone" },
    popular: true,
    acceptedMime: ".heic,.heif,.hif,image/heic,image/heif",
    maxSizeMB: 100,
    title: {
      en: "HEIC to JPG Converter",
      it: "Convertitore HEIC in JPG",
      es: "Convertir HEIC a JPG",
      fr: "Convertir HEIC en JPG",
      de: "HEIC in JPG Umwandeln",
      pt: "Converter HEIC para JPG",
    },
    description: {
      en: "Convert iPhone HEIC/HEIF photos to JPG or PNG in batch, right in your browser. Optional EXIF/GPS removal, zero uploads.",
      it: "Converti le foto HEIC/HEIF dell'iPhone in JPG o PNG, anche in blocco, direttamente nel browser. Rimozione EXIF/GPS opzionale, zero upload.",
      es: "Convierte fotos HEIC/HEIF del iPhone a JPG o PNG por lotes, directamente en tu navegador. Eliminación opcional de EXIF/GPS, sin subir nada.",
      fr: "Convertissez vos photos HEIC/HEIF d'iPhone en JPG ou PNG par lot, directement dans le navigateur. Suppression EXIF/GPS optionnelle, sans envoi.",
      de: "iPhone-Fotos im HEIC/HEIF-Format stapelweise in JPG oder PNG umwandeln, direkt im Browser. Optionales Entfernen von EXIF/GPS, ohne Upload.",
      pt: "Converta fotos HEIC/HEIF do iPhone para JPG ou PNG em lote, direto no navegador. Remoção opcional de EXIF/GPS, sem upload.",
    },
    seoKeyword: {
      en: "heic to jpg converter online free no upload",
      it: "convertire heic in jpg gratis online senza caricamento",
      es: "convertir heic a jpg gratis online sin subir",
      fr: "convertir heic en jpg gratuit en ligne sans envoi",
      de: "heic in jpg umwandeln kostenlos ohne upload",
      pt: "converter heic para jpg gratis online sem upload",
    },
    metaTitle: {
      en: "HEIC to JPG Converter Free - Batch, No Upload | FileOmniTool",
      it: "Convertire HEIC in JPG Gratis - Foto iPhone, Senza Upload | FileOmniTool",
      es: "Convertir HEIC a JPG Gratis - Por Lotes, Sin Subir | FileOmniTool",
      fr: "Convertir HEIC en JPG Gratuitement - Par Lot | FileOmniTool",
      de: "HEIC in JPG Umwandeln Kostenlos - Ohne Upload | FileOmniTool",
      pt: "Converter HEIC para JPG Grátis - Em Lote, Sem Upload | FileOmniTool",
    },
    metaDescription: {
      en: "Open iPhone HEIC photos on Windows and anywhere: convert HEIC/HEIF to JPG or PNG in your browser, in batch, with optional GPS/EXIF removal. Photos never leave your device.",
      it: "Apri le foto HEIC dell'iPhone su Windows e ovunque: converti HEIC/HEIF in JPG o PNG nel browser, anche in blocco, con rimozione GPS/EXIF opzionale. Le foto non lasciano il dispositivo.",
      es: "Abre las fotos HEIC del iPhone en Windows: convierte HEIC/HEIF a JPG o PNG en el navegador, por lotes y con eliminación opcional de GPS/EXIF.",
      fr: "Ouvrez les photos HEIC d'iPhone sous Windows : convertissez HEIC/HEIF en JPG ou PNG dans le navigateur, par lot, avec suppression GPS/EXIF optionnelle.",
      de: "iPhone-HEIC-Fotos unter Windows öffnen: HEIC/HEIF im Browser stapelweise in JPG oder PNG umwandeln, optional ohne GPS/EXIF. Fotos verlassen nie Ihr Gerät.",
      pt: "Abra fotos HEIC do iPhone no Windows: converta HEIC/HEIF para JPG ou PNG no navegador, em lote, com remoção opcional de GPS/EXIF.",
    },
    instructions: {
      en: [
        "Drag & drop or select one or more HEIC/HEIF photos from your iPhone.",
        "Choose JPG or PNG and, for JPG, the quality level.",
        "Decide whether to keep EXIF metadata (date, camera, GPS) or strip it for privacy.",
        "Click 'Convert' and download each image or all of them as a ZIP."
      ],
      it: [
        "Trascina o seleziona una o più foto HEIC/HEIF dall'iPhone.",
        "Scegli JPG o PNG e, per il JPG, il livello di qualità.",
        "Decidi se mantenere i metadati EXIF (data, fotocamera, GPS) o rimuoverli per privacy.",
        "Clicca su 'Converti' e scarica ogni immagine o tutte insieme in un file ZIP."
      ],
      es: [
        "Arrastra o selecciona una o varias fotos HEIC/HEIF de tu iPhone.",
        "Elige JPG o PNG y, para JPG, el nivel de calidad.",
        "Decide si conservar los metadatos EXIF (fecha, cámara, GPS) o eliminarlos por privacidad.",
        "Pulsa 'Convertir' y descarga cada imagen o todas en un ZIP."
      ],
      fr: [
        "Glissez-déposez ou sélectionnez une ou plusieurs photos HEIC/HEIF de votre iPhone.",
        "Choisissez JPG ou PNG et, pour le JPG, le niveau de qualité.",
        "Décidez de conserver les métadonnées EXIF (date, appareil, GPS) ou de les supprimer.",
        "Cliquez sur « Convertir » et téléchargez chaque image ou toutes en ZIP."
      ],
      de: [
        "Ein oder mehrere HEIC/HEIF-Fotos vom iPhone ablegen oder auswählen.",
        "JPG oder PNG wählen und bei JPG die Qualitätsstufe einstellen.",
        "Entscheiden, ob EXIF-Metadaten (Datum, Kamera, GPS) erhalten oder entfernt werden.",
        "Auf „Konvertieren“ klicken und Bilder einzeln oder gesammelt als ZIP herunterladen."
      ],
      pt: [
        "Arraste ou selecione uma ou mais fotos HEIC/HEIF do iPhone.",
        "Escolha JPG ou PNG e, para JPG, o nível de qualidade.",
        "Decida se mantém os metadados EXIF (data, câmera, GPS) ou os remove por privacidade.",
        "Clique em 'Converter' e baixe cada imagem ou todas em um ZIP."
      ]
    },
    faq: {
      en: [
        {
          question: "Are my photos uploaded anywhere?",
          answer: "No. A WebAssembly HEIC decoder runs inside your browser tab and converts the photos locally. No image data is ever sent over the network."
        },
        {
          question: "Why can't Windows open HEIC files?",
          answer: "HEIC uses the HEVC codec, which Windows does not include by default. Converting to JPG makes the photos open everywhere: Windows, Android, web forms and email."
        },
        {
          question: "Is the location (GPS) of my photos removed?",
          answer: "By default yes: the converted image contains no EXIF metadata. Enable 'Keep EXIF metadata' if you want to preserve date, camera model and location."
        }
      ],
      it: [
        {
          question: "Le mie foto vengono caricate da qualche parte?",
          answer: "No. Un decoder HEIC in WebAssembly gira dentro la scheda del browser e converte le foto in locale. Nessun dato delle immagini viene inviato in rete."
        },
        {
          question: "Perché Windows non apre i file HEIC?",
          answer: "Il formato HEIC usa il codec HEVC, che Windows non include di serie. Convertendo in JPG le foto si aprono ovunque: Windows, Android, moduli web ed email."
        },
        {
          question: "La posizione GPS delle foto viene rimossa?",
          answer: "Sì, per impostazione predefinita l'immagine convertita non contiene metadati EXIF. Attiva 'Mantieni i metadati EXIF' se vuoi conservare data, modello di fotocamera e posizione."
        }
      ],
      es: [
        {
          question: "¿Se suben mis fotos a algún sitio?",
          answer: "No. Un decodificador HEIC en WebAssembly se ejecuta en la pestaña del navegador y convierte las fotos localmente. Ningún dato de imagen se envía por la red."
        },
        {
          question: "¿Por qué Windows no abre archivos HEIC?",
          answer: "HEIC usa el códec HEVC, que Windows no incluye por defecto. Al convertir a JPG las fotos se abren en cualquier sitio."
        },
        {
          question: "¿Se elimina la ubicación GPS de mis fotos?",
          answer: "Sí, por defecto la imagen convertida no contiene EXIF. Activa 'Mantener metadatos EXIF' para conservar fecha, cámara y ubicación."
        }
      ],
      fr: [
        {
          question: "Mes photos sont-elles envoyées quelque part ?",
          answer: "Non. Un décodeur HEIC en WebAssembly s'exécute dans l'onglet du navigateur et convertit les photos localement. Aucune donnée d'image n'est transmise sur le réseau."
        },
        {
          question: "Pourquoi Windows n'ouvre-t-il pas les fichiers HEIC ?",
          answer: "HEIC utilise le codec HEVC, absent par défaut de Windows. En convertissant en JPG, les photos s'ouvrent partout."
        },
        {
          question: "La position GPS de mes photos est-elle supprimée ?",
          answer: "Oui, par défaut l'image convertie ne contient aucune donnée EXIF. Activez « Conserver les métadonnées EXIF » pour garder date, appareil et position."
        }
      ],
      de: [
        {
          question: "Werden meine Fotos irgendwohin hochgeladen?",
          answer: "Nein. Ein HEIC-Decoder in WebAssembly läuft im Browser-Tab und konvertiert die Fotos lokal. Keine Bilddaten werden über das Netzwerk gesendet."
        },
        {
          question: "Warum öffnet Windows keine HEIC-Dateien?",
          answer: "HEIC nutzt den HEVC-Codec, den Windows standardmäßig nicht mitbringt. Als JPG lassen sich die Fotos überall öffnen."
        },
        {
          question: "Wird der GPS-Standort meiner Fotos entfernt?",
          answer: "Ja, standardmäßig enthält das konvertierte Bild keine EXIF-Daten. Aktivieren Sie „EXIF-Metadaten behalten“, um Datum, Kamera und Standort zu erhalten."
        }
      ],
      pt: [
        {
          question: "Minhas fotos são enviadas para algum lugar?",
          answer: "Não. Um decodificador HEIC em WebAssembly roda na aba do navegador e converte as fotos localmente. Nenhum dado de imagem é enviado pela rede."
        },
        {
          question: "Por que o Windows não abre arquivos HEIC?",
          answer: "O HEIC usa o codec HEVC, que o Windows não inclui por padrão. Convertendo para JPG, as fotos abrem em qualquer lugar."
        },
        {
          question: "A localização GPS das minhas fotos é removida?",
          answer: "Sim, por padrão a imagem convertida não contém EXIF. Ative 'Manter metadados EXIF' para preservar data, câmera e localização."
        }
      ]
    }
  }
];
