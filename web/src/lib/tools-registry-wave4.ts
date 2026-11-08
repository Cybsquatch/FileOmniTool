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
  },
  // 85. background-remover
  {
    id: "background-remover",
    category: "image",
    iconName: "Wand2",
    badge: { en: "AI · New", it: "AI · Nuovo", es: "IA · Nuevo", fr: "IA · Nouveau", de: "KI · Neu", pt: "IA · Novo" },
    popular: true,
    acceptedMime: "image/jpeg,image/png,image/webp,image/bmp,image/avif",
    maxSizeMB: 40,
    title: {
      en: "Remove Background from Image (AI)",
      it: "Rimuovi Sfondo dalle Foto (AI)",
      es: "Quitar Fondo de Imagen (IA)",
      fr: "Supprimer l'Arrière-plan d'une Image (IA)",
      de: "Hintergrund Entfernen (KI)",
      pt: "Remover Fundo de Imagem (IA)",
    },
    description: {
      en: "Cut out people, products and objects with AI and get a transparent PNG. The AI runs in your browser: your photo is never uploaded.",
      it: "Scontorna persone, prodotti e oggetti con l'intelligenza artificiale e ottieni un PNG trasparente. L'AI gira nel browser: la foto non viene mai caricata.",
      es: "Recorta personas, productos y objetos con IA y obtén un PNG transparente. La IA funciona en tu navegador: tu foto nunca se sube.",
      fr: "Détourez personnes, produits et objets par IA et obtenez un PNG transparent. L'IA tourne dans votre navigateur : votre photo n'est jamais envoyée.",
      de: "Personen, Produkte und Objekte per KI freistellen und als transparentes PNG speichern. Die KI läuft im Browser: Ihr Foto wird nie hochgeladen.",
      pt: "Recorte pessoas, produtos e objetos com IA e obtenha um PNG transparente. A IA roda no navegador: sua foto nunca é enviada.",
    },
    seoKeyword: {
      en: "remove background from image free ai no upload",
      it: "rimuovere sfondo foto gratis scontornare immagine online",
      es: "quitar fondo imagen gratis ia sin subir",
      fr: "supprimer arrière-plan image gratuit détourage ia",
      de: "hintergrund entfernen kostenlos ki bild freistellen",
      pt: "remover fundo de imagem gratis ia sem upload",
    },
    metaTitle: {
      en: "Remove Background from Image Free - AI, No Upload | FileOmniTool",
      it: "Rimuovere lo Sfondo da una Foto Gratis - AI Senza Upload | FileOmniTool",
      es: "Quitar Fondo de Imagen Gratis - IA Sin Subir | FileOmniTool",
      fr: "Supprimer l'Arrière-plan d'une Image Gratuit - IA | FileOmniTool",
      de: "Hintergrund Entfernen Kostenlos - KI Ohne Upload | FileOmniTool",
      pt: "Remover Fundo de Imagem Grátis - IA Sem Upload | FileOmniTool",
    },
    metaDescription: {
      en: "Remove the background from any photo with AI, free and without signup. Transparent PNG, white or custom color. The AI runs in your browser, so your image is never uploaded.",
      it: "Rimuovi lo sfondo da qualsiasi foto con l'AI, gratis e senza registrazione. PNG trasparente, sfondo bianco o colorato. L'AI gira nel browser: l'immagine non viene caricata.",
      es: "Quita el fondo de cualquier foto con IA, gratis y sin registro. PNG transparente, fondo blanco o de color. La IA funciona en tu navegador: la imagen nunca se sube.",
      fr: "Supprimez l'arrière-plan de n'importe quelle photo par IA, gratuitement. PNG transparent, fond blanc ou coloré. L'IA tourne dans le navigateur, sans envoi.",
      de: "Hintergrund aus jedem Foto per KI entfernen, kostenlos und ohne Anmeldung. Transparentes PNG, weißer oder farbiger Hintergrund. Die KI läuft lokal im Browser.",
      pt: "Remova o fundo de qualquer foto com IA, grátis e sem cadastro. PNG transparente, fundo branco ou colorido. A IA roda no navegador: a imagem nunca é enviada.",
    },
    instructions: {
      en: [
        "Drop or select a JPG, PNG or WebP photo.",
        "Click 'Remove background'. The first time, your browser downloads the AI model once; after that it is instant.",
        "Drag the slider to compare the original and the cut-out.",
        "Pick a transparent, white, black or custom background and download as PNG, WebP or JPG."
      ],
      it: [
        "Trascina o seleziona una foto JPG, PNG o WebP.",
        "Clicca su 'Rimuovi sfondo'. Al primo utilizzo il browser scarica una sola volta il modello AI, poi è immediato.",
        "Trascina il cursore per confrontare l'originale e lo scontorno.",
        "Scegli sfondo trasparente, bianco, nero o di un colore a piacere e scarica in PNG, WebP o JPG."
      ],
      es: [
        "Arrastra o selecciona una foto JPG, PNG o WebP.",
        "Pulsa 'Quitar fondo'. La primera vez el navegador descarga el modelo de IA una sola vez; después es inmediato.",
        "Arrastra el control para comparar el original y el recorte.",
        "Elige fondo transparente, blanco, negro o de color y descarga en PNG, WebP o JPG."
      ],
      fr: [
        "Déposez ou sélectionnez une photo JPG, PNG ou WebP.",
        "Cliquez sur « Supprimer l'arrière-plan ». La première fois, le navigateur télécharge le modèle d'IA une seule fois ; ensuite c'est immédiat.",
        "Faites glisser le curseur pour comparer l'original et le détourage.",
        "Choisissez un fond transparent, blanc, noir ou coloré et téléchargez en PNG, WebP ou JPG."
      ],
      de: [
        "Ein JPG-, PNG- oder WebP-Foto ablegen oder auswählen.",
        "Auf „Hintergrund entfernen“ klicken. Beim ersten Mal lädt der Browser das KI-Modell einmalig herunter, danach geht es sofort.",
        "Mit dem Schieberegler Original und Freisteller vergleichen.",
        "Transparenten, weißen, schwarzen oder farbigen Hintergrund wählen und als PNG, WebP oder JPG herunterladen."
      ],
      pt: [
        "Arraste ou selecione uma foto JPG, PNG ou WebP.",
        "Clique em 'Remover fundo'. Na primeira vez o navegador baixa o modelo de IA uma única vez; depois é imediato.",
        "Arraste o controle para comparar o original e o recorte.",
        "Escolha fundo transparente, branco, preto ou de cor e baixe em PNG, WebP ou JPG."
      ]
    },
    faq: {
      en: [
        { question: "Is my photo uploaded to a server?", answer: "No. The AI model (ormbg, Apache-2.0 license) is downloaded to your browser and runs on your device with WebGPU or WebAssembly. The only network request is the one-time model download, which contains none of your data." },
        { question: "Why does the first run take longer?", answer: "The first time, the browser downloads the AI model (about 88 MB with GPU acceleration, 44 MB otherwise). It is stored on your device, so every following photo starts immediately, even offline." },
        { question: "Which browsers work best?", answer: "Recent Chrome, Edge and other browsers with WebGPU process a photo in a few seconds using your graphics card. Other browsers use the CPU, which works but can take 5 to 30 seconds." },
        { question: "Does it work on products, animals and hair?", answer: "Yes. The model is trained for general objects, not only portraits, and keeps soft edges like hair and fur as semi-transparent pixels." }
      ],
      it: [
        { question: "La mia foto viene caricata su un server?", answer: "No. Il modello AI (ormbg, licenza Apache-2.0) viene scaricato nel browser e gira sul tuo dispositivo con WebGPU o WebAssembly. L'unica richiesta di rete è il download iniziale del modello, che non contiene nessun tuo dato." },
        { question: "Perché il primo utilizzo è più lento?", answer: "La prima volta il browser scarica il modello AI (circa 88 MB con accelerazione GPU, 44 MB altrimenti). Resta salvato sul dispositivo, quindi le foto successive partono subito, anche offline." },
        { question: "Con quali browser funziona meglio?", answer: "Chrome, Edge e gli altri browser aggiornati con WebGPU elaborano una foto in pochi secondi usando la scheda grafica. Gli altri browser usano il processore: funziona, ma può richiedere da 5 a 30 secondi." },
        { question: "Funziona con prodotti, animali e capelli?", answer: "Sì. Il modello è addestrato su oggetti di ogni tipo, non solo ritratti, e conserva i bordi morbidi come capelli e pelo come pixel semitrasparenti." }
      ],
      es: [
        { question: "¿Se sube mi foto a un servidor?", answer: "No. El modelo de IA (ormbg, licencia Apache-2.0) se descarga en el navegador y funciona en tu dispositivo con WebGPU o WebAssembly. La única petición de red es la descarga inicial del modelo, que no contiene ningún dato tuyo." },
        { question: "¿Por qué el primer uso tarda más?", answer: "La primera vez el navegador descarga el modelo de IA (unos 88 MB con aceleración GPU, 44 MB en los demás casos). Queda guardado en tu dispositivo, así que las siguientes fotos empiezan al instante, incluso sin conexión." },
        { question: "¿Con qué navegadores funciona mejor?", answer: "Chrome, Edge y otros navegadores actualizados con WebGPU procesan una foto en pocos segundos usando la tarjeta gráfica. Los demás usan la CPU: funciona, pero puede tardar de 5 a 30 segundos." },
        { question: "¿Funciona con productos, animales y pelo?", answer: "Sí. El modelo está entrenado con objetos de todo tipo, no solo retratos, y conserva los bordes suaves como el pelo como píxeles semitransparentes." }
      ],
      fr: [
        { question: "Ma photo est-elle envoyée sur un serveur ?", answer: "Non. Le modèle d'IA (ormbg, licence Apache-2.0) est téléchargé dans le navigateur et tourne sur votre appareil via WebGPU ou WebAssembly. La seule requête réseau est le téléchargement initial du modèle, qui ne contient aucune de vos données." },
        { question: "Pourquoi la première utilisation est-elle plus lente ?", answer: "La première fois, le navigateur télécharge le modèle d'IA (environ 88 Mo avec accélération GPU, 44 Mo sinon). Il reste sur votre appareil : les photos suivantes démarrent immédiatement, même hors ligne." },
        { question: "Quels navigateurs fonctionnent le mieux ?", answer: "Chrome, Edge et les navigateurs récents compatibles WebGPU traitent une photo en quelques secondes grâce à la carte graphique. Les autres utilisent le processeur : cela fonctionne mais peut prendre 5 à 30 secondes." },
        { question: "Fonctionne-t-il avec les produits, animaux et cheveux ?", answer: "Oui. Le modèle est entraîné sur tous types d'objets, pas seulement des portraits, et conserve les contours fins comme les cheveux en pixels semi-transparents." }
      ],
      de: [
        { question: "Wird mein Foto auf einen Server hochgeladen?", answer: "Nein. Das KI-Modell (ormbg, Apache-2.0-Lizenz) wird in den Browser geladen und läuft per WebGPU oder WebAssembly auf Ihrem Gerät. Die einzige Netzwerkanfrage ist der einmalige Modell-Download, der keine Ihrer Daten enthält." },
        { question: "Warum dauert der erste Durchlauf länger?", answer: "Beim ersten Mal lädt der Browser das KI-Modell herunter (ca. 88 MB mit GPU-Beschleunigung, sonst 44 MB). Es bleibt auf Ihrem Gerät gespeichert, daher starten alle weiteren Fotos sofort, auch offline." },
        { question: "Mit welchen Browsern funktioniert es am besten?", answer: "Aktuelle Chrome-, Edge- und andere WebGPU-Browser verarbeiten ein Foto in wenigen Sekunden über die Grafikkarte. Andere Browser nutzen den Prozessor: Das funktioniert, kann aber 5 bis 30 Sekunden dauern." },
        { question: "Funktioniert es mit Produkten, Tieren und Haaren?", answer: "Ja. Das Modell ist auf Objekte aller Art trainiert, nicht nur auf Porträts, und erhält feine Kanten wie Haare als halbtransparente Pixel." }
      ],
      pt: [
        { question: "Minha foto é enviada para um servidor?", answer: "Não. O modelo de IA (ormbg, licença Apache-2.0) é baixado no navegador e roda no seu dispositivo com WebGPU ou WebAssembly. A única requisição de rede é o download inicial do modelo, que não contém nenhum dado seu." },
        { question: "Por que o primeiro uso demora mais?", answer: "Na primeira vez o navegador baixa o modelo de IA (cerca de 88 MB com aceleração por GPU, 44 MB nos demais casos). Ele fica salvo no dispositivo, então as próximas fotos começam na hora, até offline." },
        { question: "Em quais navegadores funciona melhor?", answer: "Chrome, Edge e outros navegadores atualizados com WebGPU processam uma foto em poucos segundos usando a placa de vídeo. Os demais usam a CPU: funciona, mas pode levar de 5 a 30 segundos." },
        { question: "Funciona com produtos, animais e cabelo?", answer: "Sim. O modelo é treinado com objetos de todo tipo, não só retratos, e preserva bordas suaves como cabelo como pixels semitransparentes." }
      ]
    }
  },

  // 86. pdf-to-image
  {
    id: "pdf-to-image",
    category: "pdf",
    iconName: "Images",
    badge: { en: "New", it: "Nuovo", es: "Nuevo", fr: "Nouveau", de: "Neu", pt: "Novo" },
    popular: true,
    acceptedMime: ".pdf,application/pdf",
    maxSizeMB: 200,
    title: {
      en: "PDF to JPG / PNG Converter",
      it: "Convertire PDF in JPG / PNG",
      es: "Convertir PDF a JPG / PNG",
      fr: "Convertir PDF en JPG / PNG",
      de: "PDF in JPG / PNG Umwandeln",
      pt: "Converter PDF para JPG / PNG",
    },
    description: {
      en: "Turn every page of a PDF into a high-quality JPG, PNG or WebP image, up to 300 DPI. Pick the pages you need. Nothing is uploaded.",
      it: "Trasforma ogni pagina di un PDF in un'immagine JPG, PNG o WebP di alta qualità, fino a 300 DPI. Scegli le pagine che ti servono. Nessun upload.",
      es: "Convierte cada página de un PDF en una imagen JPG, PNG o WebP de alta calidad, hasta 300 DPI. Elige las páginas que necesitas. Sin subir nada.",
      fr: "Transformez chaque page d'un PDF en image JPG, PNG ou WebP haute qualité, jusqu'à 300 DPI. Choisissez les pages voulues. Aucun envoi.",
      de: "Jede PDF-Seite als hochwertiges JPG-, PNG- oder WebP-Bild speichern, bis 300 DPI. Seiten frei wählbar. Kein Upload.",
      pt: "Transforme cada página de um PDF em imagem JPG, PNG ou WebP de alta qualidade, até 300 DPI. Escolha as páginas. Sem upload.",
    },
    seoKeyword: {
      en: "pdf to jpg converter free no upload",
      it: "convertire pdf in jpg gratis senza caricare",
      es: "convertir pdf a jpg gratis sin subir",
      fr: "convertir pdf en jpg gratuit sans envoi",
      de: "pdf in jpg umwandeln kostenlos ohne upload",
      pt: "converter pdf para jpg gratis sem upload",
    },
    metaTitle: {
      en: "PDF to JPG Converter Free - High Quality, No Upload | FileOmniTool",
      it: "Convertire PDF in JPG Gratis - Alta Qualità, Senza Upload | FileOmniTool",
      es: "Convertir PDF a JPG Gratis - Alta Calidad, Sin Subir | FileOmniTool",
      fr: "Convertir PDF en JPG Gratuit - Haute Qualité, Sans Envoi | FileOmniTool",
      de: "PDF in JPG Umwandeln Kostenlos - Ohne Upload | FileOmniTool",
      pt: "Converter PDF para JPG Grátis - Alta Qualidade | FileOmniTool",
    },
    metaDescription: {
      en: "Convert PDF pages to JPG, PNG or WebP images up to 300 DPI, free and without signup. Choose pages, download as ZIP. The PDF is processed in your browser and never uploaded.",
      it: "Converti le pagine di un PDF in immagini JPG, PNG o WebP fino a 300 DPI, gratis e senza registrazione. Scegli le pagine e scarica lo ZIP. Il PDF non viene mai caricato.",
      es: "Convierte páginas PDF en imágenes JPG, PNG o WebP hasta 300 DPI, gratis y sin registro. Elige páginas y descarga un ZIP. El PDF nunca se sube.",
      fr: "Convertissez les pages d'un PDF en images JPG, PNG ou WebP jusqu'à 300 DPI, gratuitement. Choix des pages, ZIP. Le PDF n'est jamais envoyé.",
      de: "PDF-Seiten kostenlos in JPG-, PNG- oder WebP-Bilder bis 300 DPI umwandeln. Seiten wählen, als ZIP laden. Das PDF wird nie hochgeladen.",
      pt: "Converta páginas de PDF em imagens JPG, PNG ou WebP até 300 DPI, grátis e sem cadastro. Escolha páginas e baixe em ZIP. O PDF nunca é enviado.",
    },
    instructions: {
      en: [
        "Drop or select a PDF file (password-protected files are supported: you'll be asked for the password).",
        "Choose JPG, PNG or WebP and the resolution: 96 DPI for screens, 150 DPI for print, 300 DPI for maximum detail.",
        "Optionally type the pages to convert, for example 1-3, 5.",
        "Click 'Convert to images' and download single pages or everything as a ZIP."
      ],
      it: [
        "Trascina o seleziona un PDF (anche protetto da password: ti verrà chiesta).",
        "Scegli JPG, PNG o WebP e la risoluzione: 96 DPI per lo schermo, 150 DPI per la stampa, 300 DPI per il massimo dettaglio.",
        "Se vuoi, indica le pagine da convertire, per esempio 1-3, 5.",
        "Clicca su 'Converti in immagini' e scarica le singole pagine o tutto in un file ZIP."
      ],
      es: [
        "Arrastra o selecciona un PDF (también protegido con contraseña: se te pedirá).",
        "Elige JPG, PNG o WebP y la resolución: 96 DPI para pantalla, 150 DPI para imprimir, 300 DPI para el máximo detalle.",
        "Si quieres, indica las páginas a convertir, por ejemplo 1-3, 5.",
        "Pulsa 'Convertir en imágenes' y descarga cada página o todo en un ZIP."
      ],
      fr: [
        "Déposez ou sélectionnez un PDF (les fichiers protégés sont pris en charge : le mot de passe vous sera demandé).",
        "Choisissez JPG, PNG ou WebP et la résolution : 96 DPI pour l'écran, 150 DPI pour l'impression, 300 DPI pour un maximum de détails.",
        "Indiquez si besoin les pages à convertir, par exemple 1-3, 5.",
        "Cliquez sur « Convertir en images » et téléchargez chaque page ou tout en ZIP."
      ],
      de: [
        "PDF ablegen oder auswählen (auch passwortgeschützt: Das Passwort wird abgefragt).",
        "JPG, PNG oder WebP und die Auflösung wählen: 96 DPI für Bildschirm, 150 DPI für Druck, 300 DPI für maximale Details.",
        "Optional die Seiten angeben, z. B. 1-3, 5.",
        "Auf „In Bilder umwandeln“ klicken und einzelne Seiten oder alles als ZIP herunterladen."
      ],
      pt: [
        "Arraste ou selecione um PDF (também protegido por senha: ela será solicitada).",
        "Escolha JPG, PNG ou WebP e a resolução: 96 DPI para tela, 150 DPI para impressão, 300 DPI para o máximo de detalhes.",
        "Se quiser, informe as páginas, por exemplo 1-3, 5.",
        "Clique em 'Converter em imagens' e baixe cada página ou tudo em um ZIP."
      ]
    },
    faq: {
      en: [
        { question: "Is my PDF uploaded?", answer: "No. Pages are rendered by pdf.js, Mozilla's PDF engine, inside your browser tab. The file is read from your disk into memory and never sent over the network." },
        { question: "Which resolution should I choose?", answer: "150 DPI is right for most uses, including printing and sharing. Choose 300 DPI for detailed scans or when you need to zoom in, and 96 DPI for small images to put on a website or in chat." },
        { question: "JPG or PNG?", answer: "JPG gives much smaller files and is perfect for scanned documents and photos. PNG is lossless and keeps text and line drawings perfectly sharp, at the cost of larger files." }
      ],
      it: [
        { question: "Il mio PDF viene caricato online?", answer: "No. Le pagine vengono disegnate da pdf.js, il motore PDF di Mozilla, dentro la scheda del browser. Il file viene letto dal disco in memoria e non viene mai inviato in rete." },
        { question: "Quale risoluzione scelgo?", answer: "150 DPI va bene per quasi tutto, compresi stampa e condivisione. Scegli 300 DPI per scansioni dettagliate o se devi ingrandire, e 96 DPI per immagini leggere da mettere su un sito o in chat." },
        { question: "Meglio JPG o PNG?", answer: "Il JPG produce file molto più leggeri ed è perfetto per documenti scansionati e foto. Il PNG non perde qualità e mantiene testo e linee perfettamente nitidi, ma i file sono più pesanti." }
      ],
      es: [
        { question: "¿Se sube mi PDF?", answer: "No. Las páginas se dibujan con pdf.js, el motor PDF de Mozilla, dentro de la pestaña del navegador. El archivo se lee del disco a la memoria y nunca se envía por la red." },
        { question: "¿Qué resolución elijo?", answer: "150 DPI sirve para casi todo, incluso para imprimir y compartir. Elige 300 DPI para escaneos detallados o si necesitas ampliar, y 96 DPI para imágenes ligeras para web o chat." },
        { question: "¿JPG o PNG?", answer: "El JPG genera archivos mucho más ligeros y es ideal para documentos escaneados y fotos. El PNG no pierde calidad y mantiene texto y líneas nítidos, pero pesa más." }
      ],
      fr: [
        { question: "Mon PDF est-il envoyé en ligne ?", answer: "Non. Les pages sont dessinées par pdf.js, le moteur PDF de Mozilla, dans l'onglet du navigateur. Le fichier est lu depuis votre disque en mémoire et n'est jamais transmis sur le réseau." },
        { question: "Quelle résolution choisir ?", answer: "150 DPI convient à presque tout, y compris l'impression. Choisissez 300 DPI pour des numérisations détaillées et 96 DPI pour des images légères destinées au web ou aux messageries." },
        { question: "JPG ou PNG ?", answer: "Le JPG produit des fichiers bien plus légers, parfait pour les documents numérisés et les photos. Le PNG est sans perte et garde texte et traits parfaitement nets, mais pèse plus lourd." }
      ],
      de: [
        { question: "Wird mein PDF hochgeladen?", answer: "Nein. Die Seiten werden von pdf.js, der PDF-Engine von Mozilla, im Browser-Tab gezeichnet. Die Datei wird von Ihrer Festplatte in den Speicher gelesen und nie über das Netzwerk gesendet." },
        { question: "Welche Auflösung soll ich wählen?", answer: "150 DPI passt für fast alles, auch zum Drucken. 300 DPI für detaillierte Scans oder zum Vergrößern, 96 DPI für leichte Bilder für Websites oder Messenger." },
        { question: "JPG oder PNG?", answer: "JPG erzeugt deutlich kleinere Dateien und ist ideal für Scans und Fotos. PNG ist verlustfrei und hält Text und Linien gestochen scharf, ist aber größer." }
      ],
      pt: [
        { question: "Meu PDF é enviado online?", answer: "Não. As páginas são desenhadas pelo pdf.js, o motor de PDF da Mozilla, dentro da aba do navegador. O arquivo é lido do disco para a memória e nunca vai para a rede." },
        { question: "Qual resolução escolher?", answer: "150 DPI serve para quase tudo, inclusive impressão. Escolha 300 DPI para digitalizações detalhadas e 96 DPI para imagens leves para sites ou chat." },
        { question: "JPG ou PNG?", answer: "O JPG gera arquivos bem mais leves e é ideal para documentos digitalizados e fotos. O PNG não perde qualidade e mantém texto e linhas nítidos, mas é mais pesado." }
      ]
    }
  },

  // 87. image-compress-kb
  {
    id: "image-compress-kb",
    category: "image",
    iconName: "Scale",
    badge: { en: "For Forms", it: "Per Moduli", es: "Para Formularios", fr: "Pour Formulaires", de: "Für Formulare", pt: "Para Formulários" },
    popular: true,
    acceptedMime: "image/jpeg,image/png,image/webp,image/bmp,image/avif",
    maxSizeMB: 60,
    title: {
      en: "Compress Image to 100 KB (or Any Size)",
      it: "Ridurre Foto a 100 KB (o Qualsiasi Dimensione)",
      es: "Comprimir Imagen a 100 KB (o Cualquier Tamaño)",
      fr: "Compresser une Image à 100 Ko (ou Toute Taille)",
      de: "Bild auf 100 KB Verkleinern (oder Beliebige Größe)",
      pt: "Comprimir Imagem para 100 KB (ou Qualquer Tamanho)",
    },
    description: {
      en: "Set a maximum size (20 KB, 50 KB, 100 KB, 200 KB...) and get the best-looking photo that fits, for forms and application portals. Batch, no upload.",
      it: "Imposta la dimensione massima (20 KB, 50 KB, 100 KB, 200 KB...) e ottieni la foto più nitida che ci sta, per moduli, concorsi e portali. Anche in blocco, senza upload.",
      es: "Fija un tamaño máximo (20 KB, 50 KB, 100 KB, 200 KB...) y obtén la foto más nítida que quepa, para formularios y portales. Por lotes, sin subir.",
      fr: "Fixez une taille maximale (20 Ko, 50 Ko, 100 Ko, 200 Ko...) et obtenez la photo la plus nette qui tienne, pour formulaires et portails. Par lot, sans envoi.",
      de: "Maximale Größe festlegen (20, 50, 100, 200 KB...) und das schärfste passende Foto für Formulare und Portale erhalten. Stapelweise, ohne Upload.",
      pt: "Defina o tamanho máximo (20 KB, 50 KB, 100 KB, 200 KB...) e obtenha a foto mais nítida que caiba, para formulários e portais. Em lote, sem upload.",
    },
    seoKeyword: {
      en: "compress image to 100kb online free",
      it: "ridurre dimensione foto kb comprimere a 100 kb",
      es: "comprimir imagen a 100 kb online gratis",
      fr: "compresser image 100 ko en ligne gratuit",
      de: "bild auf 100 kb verkleinern online kostenlos",
      pt: "comprimir imagem para 100 kb online gratis",
    },
    metaTitle: {
      en: "Compress Image to 100KB, 50KB, 20KB Free - No Upload | FileOmniTool",
      it: "Ridurre Foto a 100 KB, 200 KB, 50 KB Gratis - Senza Upload | FileOmniTool",
      es: "Comprimir Imagen a 100 KB, 50 KB, 20 KB Gratis | FileOmniTool",
      fr: "Compresser une Image à 100 Ko, 50 Ko, 20 Ko Gratuit | FileOmniTool",
      de: "Bild auf 100 KB, 50 KB, 20 KB Verkleinern Kostenlos | FileOmniTool",
      pt: "Comprimir Imagem para 100 KB, 50 KB, 20 KB Grátis | FileOmniTool",
    },
    metaDescription: {
      en: "Shrink photos under an exact size limit (20 KB to 1 MB) for job, visa and passport forms. Best quality that fits, batch mode, GPS data removed. Runs in your browser, no upload.",
      it: "Riduci le foto sotto un limite esatto (da 20 KB a 1 MB) per concorsi, INPS, passaporto e moduli online. Massima qualità possibile, in blocco, senza GPS. Nessun upload.",
      es: "Reduce fotos por debajo de un límite exacto (de 20 KB a 1 MB) para oposiciones, visados y formularios. Máxima calidad posible, por lotes y sin subir nada.",
      fr: "Réduisez vos photos sous une taille exacte (de 20 Ko à 1 Mo) pour concours, visas et formulaires. Qualité maximale, traitement par lot, sans envoi.",
      de: "Fotos unter eine exakte Größe bringen (20 KB bis 1 MB) für Bewerbungen, Visa und Behördenformulare. Beste Qualität, stapelweise, ohne Upload.",
      pt: "Reduza fotos abaixo de um limite exato (de 20 KB a 1 MB) para concursos, vistos e formulários. Melhor qualidade possível, em lote e sem upload.",
    },
    instructions: {
      en: [
        "Drop or select one or more photos.",
        "Choose the maximum size required by the form (for example 100 KB) or type a custom value.",
        "Optionally limit the longest side in pixels, if the form also asks for dimensions.",
        "Click 'Compress' and download each photo or all of them as a ZIP."
      ],
      it: [
        "Trascina o seleziona una o più foto.",
        "Scegli la dimensione massima richiesta dal modulo (per esempio 100 KB) o scrivi un valore personalizzato.",
        "Se il modulo chiede anche le dimensioni, puoi limitare il lato più lungo in pixel.",
        "Clicca su 'Comprimi' e scarica ogni foto o tutte insieme in uno ZIP."
      ],
      es: [
        "Arrastra o selecciona una o varias fotos.",
        "Elige el tamaño máximo que pide el formulario (por ejemplo 100 KB) o escribe un valor personalizado.",
        "Si el formulario también pide dimensiones, puedes limitar el lado más largo en píxeles.",
        "Pulsa 'Comprimir' y descarga cada foto o todas en un ZIP."
      ],
      fr: [
        "Déposez ou sélectionnez une ou plusieurs photos.",
        "Choisissez la taille maximale demandée par le formulaire (par exemple 100 Ko) ou saisissez une valeur.",
        "Si le formulaire impose aussi des dimensions, limitez le plus grand côté en pixels.",
        "Cliquez sur « Compresser » et téléchargez chaque photo ou tout en ZIP."
      ],
      de: [
        "Ein oder mehrere Fotos ablegen oder auswählen.",
        "Die vom Formular verlangte Maximalgröße wählen (z. B. 100 KB) oder einen eigenen Wert eingeben.",
        "Verlangt das Formular auch Abmessungen, die längste Seite in Pixeln begrenzen.",
        "Auf „Komprimieren“ klicken und Fotos einzeln oder als ZIP herunterladen."
      ],
      pt: [
        "Arraste ou selecione uma ou mais fotos.",
        "Escolha o tamanho máximo exigido pelo formulário (por exemplo 100 KB) ou digite um valor.",
        "Se o formulário também pedir dimensões, limite o lado maior em pixels.",
        "Clique em 'Comprimir' e baixe cada foto ou todas em um ZIP."
      ]
    },
    faq: {
      en: [
        { question: "How does it hit the exact size?", answer: "It tries several JPG or WebP quality levels and keeps the highest one that stays under your limit. If even a low quality is too big, it scales the photo down step by step until it fits." },
        { question: "Will the photo look bad at 20 KB?", answer: "At very small sizes the image has to be smaller in pixels, but it stays sharp for its size. For ID photos and signatures, 20 to 50 KB is usually plenty." },
        { question: "Are my photos uploaded?", answer: "No. Compression happens on a canvas inside your browser. As a bonus, the output contains no EXIF data or GPS location." }
      ],
      it: [
        { question: "Come fa a rispettare la dimensione esatta?", answer: "Prova diversi livelli di qualità JPG o WebP e tiene il più alto che resta sotto il tuo limite. Se anche la qualità bassa non basta, riduce gradualmente le dimensioni in pixel finché la foto ci sta." },
        { question: "A 20 KB la foto si vedrà male?", answer: "Con limiti molto bassi l'immagine deve diventare più piccola in pixel, ma resta nitida per la sua dimensione. Per fototessere e firme da 20 a 50 KB sono di solito più che sufficienti." },
        { question: "Le mie foto vengono caricate?", answer: "No. La compressione avviene su un canvas dentro il browser. In più, il file finale non contiene dati EXIF né posizione GPS." }
      ],
      es: [
        { question: "¿Cómo consigue el tamaño exacto?", answer: "Prueba varios niveles de calidad JPG o WebP y se queda con el más alto que cabe en tu límite. Si ni siquiera una calidad baja basta, reduce poco a poco las dimensiones hasta que encaje." },
        { question: "¿A 20 KB se verá mal la foto?", answer: "Con límites muy bajos la imagen debe ser más pequeña en píxeles, pero sigue nítida para su tamaño. Para fotos de carné y firmas, de 20 a 50 KB suelen bastar." },
        { question: "¿Se suben mis fotos?", answer: "No. La compresión se hace en un canvas dentro del navegador. Además, el archivo final no contiene datos EXIF ni ubicación GPS." }
      ],
      fr: [
        { question: "Comment atteint-il la taille exacte ?", answer: "Il essaie plusieurs niveaux de qualité JPG ou WebP et garde le plus élevé qui respecte votre limite. Si même une qualité basse ne suffit pas, il réduit progressivement les dimensions jusqu'à ce que la photo rentre." },
        { question: "À 20 Ko, la photo sera-t-elle laide ?", answer: "Avec des limites très basses, l'image doit être plus petite en pixels, mais reste nette pour sa taille. Pour les photos d'identité et signatures, 20 à 50 Ko suffisent généralement." },
        { question: "Mes photos sont-elles envoyées ?", answer: "Non. La compression se fait sur un canvas dans le navigateur. En prime, le fichier final ne contient ni données EXIF ni position GPS." }
      ],
      de: [
        { question: "Wie wird die exakte Größe erreicht?", answer: "Es testet mehrere JPG- oder WebP-Qualitätsstufen und behält die höchste, die unter Ihrem Limit bleibt. Reicht selbst niedrige Qualität nicht, werden die Pixelmaße schrittweise verkleinert, bis es passt." },
        { question: "Sieht ein Foto mit 20 KB schlecht aus?", answer: "Bei sehr kleinen Limits muss das Bild weniger Pixel haben, bleibt aber für seine Größe scharf. Für Passfotos und Unterschriften reichen 20 bis 50 KB meist aus." },
        { question: "Werden meine Fotos hochgeladen?", answer: "Nein. Die Komprimierung läuft auf einem Canvas im Browser. Zusätzlich enthält die Ausgabedatei keine EXIF-Daten und keinen GPS-Standort." }
      ],
      pt: [
        { question: "Como ele atinge o tamanho exato?", answer: "Testa vários níveis de qualidade JPG ou WebP e mantém o mais alto que fica abaixo do limite. Se nem uma qualidade baixa bastar, reduz aos poucos as dimensões até caber." },
        { question: "Com 20 KB a foto fica ruim?", answer: "Com limites muito baixos a imagem precisa ter menos pixels, mas continua nítida para o seu tamanho. Para fotos 3x4 e assinaturas, de 20 a 50 KB costumam bastar." },
        { question: "Minhas fotos são enviadas?", answer: "Não. A compressão acontece em um canvas dentro do navegador. Além disso, o arquivo final não contém dados EXIF nem localização GPS." }
      ]
    }
  },

  // 88. pdf-watermark
  {
    id: "pdf-watermark",
    category: "pdf",
    iconName: "Droplets",
    badge: { en: "New", it: "Nuovo", es: "Nuevo", fr: "Nouveau", de: "Neu", pt: "Novo" },
    acceptedMime: ".pdf,application/pdf",
    maxSizeMB: 200,
    title: {
      en: "Add Watermark to PDF",
      it: "Aggiungi Filigrana al PDF",
      es: "Añadir Marca de Agua a PDF",
      fr: "Ajouter un Filigrane à un PDF",
      de: "Wasserzeichen zu PDF Hinzufügen",
      pt: "Adicionar Marca d'Água ao PDF",
    },
    description: {
      en: "Stamp 'COPY', 'CONFIDENTIAL' or your own text on PDF pages, centered or tiled, with adjustable opacity and angle. Processed locally, never uploaded.",
      it: "Stampa 'COPIA', 'RISERVATO' o un testo a scelta sulle pagine del PDF, al centro o ripetuto, con trasparenza e angolo regolabili. Elaborato in locale, mai caricato.",
      es: "Estampa 'COPIA', 'CONFIDENCIAL' o tu propio texto en las páginas del PDF, centrado o en mosaico, con opacidad y ángulo ajustables. Sin subir nada.",
      fr: "Apposez « COPIE », « CONFIDENTIEL » ou votre texte sur les pages d'un PDF, centré ou répété, opacité et angle réglables. Traité en local, jamais envoyé.",
      de: "„KOPIE“, „VERTRAULICH“ oder eigenen Text auf PDF-Seiten stempeln, zentriert oder gekachelt, mit einstellbarer Deckkraft und Winkel. Lokal, ohne Upload.",
      pt: "Carimbe 'CÓPIA', 'CONFIDENCIAL' ou seu texto nas páginas do PDF, centralizado ou repetido, com opacidade e ângulo ajustáveis. Sem upload.",
    },
    seoKeyword: {
      en: "add watermark to pdf free online",
      it: "aggiungere filigrana pdf gratis online",
      es: "añadir marca de agua pdf gratis",
      fr: "ajouter filigrane pdf gratuit",
      de: "pdf wasserzeichen hinzufügen kostenlos",
      pt: "adicionar marca d'água pdf gratis",
    },
    metaTitle: {
      en: "Add Watermark to PDF Free - Text, No Upload | FileOmniTool",
      it: "Aggiungere Filigrana a PDF Gratis - Senza Upload | FileOmniTool",
      es: "Añadir Marca de Agua a PDF Gratis - Sin Subir | FileOmniTool",
      fr: "Ajouter un Filigrane à un PDF Gratuit - Sans Envoi | FileOmniTool",
      de: "PDF Wasserzeichen Hinzufügen Kostenlos - Ohne Upload | FileOmniTool",
      pt: "Adicionar Marca d'Água em PDF Grátis - Sem Upload | FileOmniTool",
    },
    metaDescription: {
      en: "Protect ID scans, payslips and contracts with a text watermark like 'COPY - for rental application only'. Centered or tiled, live preview. The PDF stays on your device.",
      it: "Proteggi documenti d'identità, buste paga e contratti con una filigrana come 'COPIA - solo per affitto'. Al centro o ripetuta, con anteprima. Il PDF resta sul dispositivo.",
      es: "Protege DNI escaneados, nóminas y contratos con una marca de agua como 'COPIA - solo para alquiler'. Centrada o en mosaico, con vista previa. Sin subir el PDF.",
      fr: "Protégez pièces d'identité, fiches de paie et contrats avec un filigrane comme « COPIE - dossier location ». Centré ou répété, aperçu en direct, sans envoi.",
      de: "Ausweiskopien, Gehaltsabrechnungen und Verträge mit einem Wasserzeichen wie „KOPIE - nur für Mietbewerbung“ schützen. Mit Vorschau, ohne Upload.",
      pt: "Proteja documentos, holerites e contratos com uma marca d'água como 'CÓPIA - só para aluguel'. Centralizada ou repetida, com prévia. O PDF não sai do dispositivo.",
    },
    instructions: {
      en: [
        "Drop or select the PDF.",
        "Type the watermark text or pick a suggestion such as 'CONFIDENTIAL'. Tip: write who the copy is for and why.",
        "Adjust size, opacity, angle and color, and choose a single centered stamp or a tiled pattern. The preview updates live.",
        "Optionally limit it to some pages, then click 'Add watermark' and download the PDF."
      ],
      it: [
        "Trascina o seleziona il PDF.",
        "Scrivi il testo della filigrana o scegli un suggerimento come 'RISERVATO'. Consiglio: indica per chi è la copia e a cosa serve.",
        "Regola dimensione, trasparenza, angolo e colore, e scegli un timbro al centro o una ripetizione su tutta la pagina. L'anteprima si aggiorna subito.",
        "Se vuoi, limitala ad alcune pagine, poi clicca su 'Aggiungi filigrana' e scarica il PDF."
      ],
      es: [
        "Arrastra o selecciona el PDF.",
        "Escribe el texto o elige una sugerencia como 'CONFIDENCIAL'. Consejo: indica para quién es la copia y para qué.",
        "Ajusta tamaño, opacidad, ángulo y color, y elige un sello centrado o un mosaico. La vista previa se actualiza al momento.",
        "Si quieres, limítala a algunas páginas, pulsa 'Añadir marca de agua' y descarga el PDF."
      ],
      fr: [
        "Déposez ou sélectionnez le PDF.",
        "Saisissez le texte ou choisissez une suggestion comme « CONFIDENTIEL ». Conseil : indiquez le destinataire et l'usage de la copie.",
        "Réglez taille, opacité, angle et couleur, puis choisissez un tampon centré ou un motif répété. L'aperçu se met à jour en direct.",
        "Limitez-le éventuellement à certaines pages, cliquez sur « Ajouter le filigrane » et téléchargez le PDF."
      ],
      de: [
        "PDF ablegen oder auswählen.",
        "Wasserzeichen-Text eingeben oder einen Vorschlag wie „VERTRAULICH“ wählen. Tipp: Empfänger und Zweck der Kopie angeben.",
        "Größe, Deckkraft, Winkel und Farbe einstellen und zwischen zentriertem Stempel und Kachelmuster wählen. Die Vorschau aktualisiert sich sofort.",
        "Optional auf bestimmte Seiten beschränken, „Wasserzeichen hinzufügen“ klicken und das PDF herunterladen."
      ],
      pt: [
        "Arraste ou selecione o PDF.",
        "Digite o texto ou escolha uma sugestão como 'CONFIDENCIAL'. Dica: informe para quem é a cópia e para quê.",
        "Ajuste tamanho, opacidade, ângulo e cor, e escolha um carimbo central ou repetido. A prévia é atualizada na hora.",
        "Se quiser, limite a algumas páginas, clique em 'Adicionar marca d'água' e baixe o PDF."
      ]
    },
    faq: {
      en: [
        { question: "Why watermark a copy of my ID?", answer: "A copy stamped 'for rental application at X only, date' is much harder to reuse for identity fraud. The French public administration (service-public.fr) officially recommends it." },
        { question: "Can the watermark be removed?", answer: "It is drawn into the page content, so it can't simply be switched off like a layer. A determined person with PDF editing software could still edit it out: for stronger protection, combine it with the Flatten PDF or PDF to JPG tools." },
        { question: "Is the PDF uploaded?", answer: "No. The watermark is added with pdf-lib inside your browser. The document never leaves your device." }
      ],
      it: [
        { question: "Perché mettere la filigrana sulla copia di un documento?", answer: "Una copia con scritto 'solo per contratto d'affitto con X, data' è molto più difficile da riutilizzare per un furto d'identità. Lo raccomanda ufficialmente anche la pubblica amministrazione francese (service-public.fr)." },
        { question: "La filigrana si può togliere?", answer: "Viene disegnata nel contenuto della pagina, quindi non si spegne come un livello. Con un programma di modifica PDF una persona determinata potrebbe comunque cancellarla: per una protezione più forte, usa poi Appiattisci PDF o PDF in JPG." },
        { question: "Il PDF viene caricato online?", answer: "No. La filigrana viene aggiunta con pdf-lib dentro il browser. Il documento non lascia mai il dispositivo." }
      ],
      es: [
        { question: "¿Por qué poner marca de agua a la copia del DNI?", answer: "Una copia que dice 'solo para alquiler con X, fecha' es mucho más difícil de reutilizar para suplantar tu identidad. La administración pública francesa (service-public.fr) lo recomienda oficialmente." },
        { question: "¿Se puede quitar la marca de agua?", answer: "Se dibuja en el contenido de la página, así que no se desactiva como una capa. Alguien decidido con un editor de PDF podría borrarla: para más protección, usa después Aplanar PDF o PDF a JPG." },
        { question: "¿Se sube el PDF?", answer: "No. La marca de agua se añade con pdf-lib dentro del navegador. El documento nunca sale de tu dispositivo." }
      ],
      fr: [
        { question: "Pourquoi filigraner la copie de ma pièce d'identité ?", answer: "Une copie portant « uniquement pour dossier de location chez X, date » est bien plus difficile à réutiliser pour une usurpation d'identité. Le service public français le recommande d'ailleurs." },
        { question: "Le filigrane peut-il être retiré ?", answer: "Il est dessiné dans le contenu de la page et ne se désactive pas comme un calque. Une personne déterminée équipée d'un éditeur PDF pourrait toutefois l'effacer : pour plus de sécurité, utilisez ensuite Aplatir PDF ou PDF en JPG." },
        { question: "Le PDF est-il envoyé ?", answer: "Non. Le filigrane est ajouté avec pdf-lib dans le navigateur. Le document ne quitte jamais votre appareil." }
      ],
      de: [
        { question: "Warum ein Wasserzeichen auf die Ausweiskopie?", answer: "Eine Kopie mit „nur für Mietbewerbung bei X, Datum“ lässt sich viel schwerer für Identitätsbetrug missbrauchen. Die französische Verwaltung (service-public.fr) empfiehlt es offiziell." },
        { question: "Lässt sich das Wasserzeichen entfernen?", answer: "Es wird in den Seiteninhalt gezeichnet und lässt sich nicht wie eine Ebene ausblenden. Mit PDF-Bearbeitungssoftware könnte es jemand dennoch entfernen: Für stärkeren Schutz danach PDF reduzieren oder PDF in JPG nutzen." },
        { question: "Wird das PDF hochgeladen?", answer: "Nein. Das Wasserzeichen wird mit pdf-lib im Browser eingefügt. Das Dokument verlässt nie Ihr Gerät." }
      ],
      pt: [
        { question: "Por que colocar marca d'água na cópia do documento?", answer: "Uma cópia com 'somente para aluguel com X, data' é muito mais difícil de reutilizar em fraudes de identidade. A administração pública francesa (service-public.fr) recomenda oficialmente essa prática." },
        { question: "A marca d'água pode ser removida?", answer: "Ela é desenhada no conteúdo da página e não se desliga como uma camada. Alguém determinado com um editor de PDF ainda poderia apagá-la: para mais proteção, use depois Achatar PDF ou PDF para JPG." },
        { question: "O PDF é enviado?", answer: "Não. A marca d'água é adicionada com pdf-lib dentro do navegador. O documento nunca sai do seu dispositivo." }
      ]
    }
  }
];
