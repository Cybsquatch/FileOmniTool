import type { Language } from "./i18n/context";

// Search-driven titles for tools that already get impressions on Google.
// Written from the real queries in Search Console (e.g. "online audio converter",
// "conversor de audio", "qr que no caduca", "conta parole"). Only true claims.
// Applied on top of the registries: h1 = on-page title, metaTitle and metaDescription = SERP.

type L = Record<Language, string>;
export interface ToolSeoOverride {
  h1?: L;
  metaTitle: L;
  metaDescription: L;
}

export const TOOL_SEO_OVERRIDES: Record<string, ToolSeoOverride> = {
  "audio-convert": {
    h1: {
      it: "Convertitore Audio Online (MP3, WAV, OGG, M4A)",
      en: "Online Audio Converter (MP3, WAV, OGG, M4A)",
      es: "Conversor de Audio Online (MP3, WAV, OGG, M4A)",
      fr: "Convertisseur Audio en Ligne (MP3, WAV, OGG, M4A)",
      de: "Audio Konverter Online (MP3, WAV, OGG, M4A)",
      pt: "Conversor de Áudio Online (MP3, WAV, OGG, M4A)",
    },
    metaTitle: {
      it: "Convertitore Audio Online Gratis - MP3, WAV, OGG | FileOmniTool",
      en: "Online Audio Converter Free - MP3, WAV, OGG, M4A | FileOmniTool",
      es: "Conversor de Audio Online Gratis - MP3, WAV, OGG | FileOmniTool",
      fr: "Convertisseur Audio en Ligne Gratuit - MP3, WAV | FileOmniTool",
      de: "Audio Konverter Online Kostenlos - MP3, WAV, OGG | FileOmniTool",
      pt: "Conversor de Áudio Online Grátis - MP3, WAV, OGG | FileOmniTool",
    },
    metaDescription: {
      it: "Converti audio in MP3 o WAV da OGG, M4A, AAC, FLAC e WebM direttamente nel browser. Gratis, senza registrazione e senza caricare i file su un server.",
      en: "Convert OGG, M4A, AAC, FLAC, WebM or WAV audio to MP3 or WAV right in your browser. Free, no signup, and your files are never uploaded to a server.",
      es: "Convierte audio OGG, M4A, AAC, FLAC, WebM o WAV a MP3 o WAV en tu navegador. Gratis, sin registro y sin subir tus archivos a ningún servidor.",
      fr: "Convertissez vos fichiers OGG, M4A, AAC, FLAC, WebM ou WAV en MP3 ou WAV dans le navigateur. Gratuit, sans inscription et sans envoi sur un serveur.",
      de: "OGG, M4A, AAC, FLAC, WebM oder WAV direkt im Browser in MP3 oder WAV umwandeln. Kostenlos, ohne Anmeldung und ohne Upload auf einen Server.",
      pt: "Converta áudio OGG, M4A, AAC, FLAC, WebM ou WAV para MP3 ou WAV no navegador. Grátis, sem cadastro e sem enviar seus arquivos para servidores.",
    },
  },

  "audio-trim": {
    h1: {
      it: "Taglia MP3 Online e Crea Suonerie",
      en: "MP3 Cutter Online & Ringtone Maker",
      es: "Cortar MP3 Online y Crear Tonos",
      fr: "Couper un MP3 en Ligne et Créer une Sonnerie",
      de: "MP3 Schneiden Online & Klingelton Erstellen",
      pt: "Cortar MP3 Online e Criar Toques",
    },
    metaTitle: {
      it: "Taglia MP3 Online Gratis - Crea Suonerie | FileOmniTool",
      en: "MP3 Cutter Online Free - Trim Audio & Ringtones | FileOmniTool",
      es: "Cortar MP3 Online Gratis - Recortar Audio y Tonos | FileOmniTool",
      fr: "Couper MP3 en Ligne Gratuit - Créer une Sonnerie | FileOmniTool",
      de: "MP3 Schneiden Online Kostenlos - Klingeltöne | FileOmniTool",
      pt: "Cortar MP3 Online Grátis - Recortar Áudio e Toques | FileOmniTool",
    },
    metaDescription: {
      it: "Taglia MP3, WAV e altri file audio online: scegli inizio e fine, ascolta l'anteprima e scarica la clip o la suoneria. Gratis e senza caricare il file.",
      en: "Cut MP3, WAV and other audio online: pick start and end, preview the clip and download it or turn it into a ringtone. Free, and the file is never uploaded.",
      es: "Corta MP3, WAV y otros audios online: elige inicio y fin, escucha la vista previa y descarga el fragmento o tu tono. Gratis y sin subir el archivo.",
      fr: "Coupez un MP3, WAV ou autre audio en ligne : choisissez le début et la fin, écoutez l'aperçu et téléchargez l'extrait ou la sonnerie. Gratuit, sans envoi.",
      de: "MP3, WAV und andere Audiodateien online schneiden: Start und Ende wählen, Vorschau anhören, Ausschnitt oder Klingelton laden. Kostenlos, ohne Upload.",
      pt: "Corte MP3, WAV e outros áudios online: escolha início e fim, ouça a prévia e baixe o trecho ou o toque. Grátis e sem enviar o arquivo.",
    },
  },

  "audio-reverse": {
    metaTitle: {
      it: "Audio al Contrario Online Gratis - Reverse MP3 | FileOmniTool",
      en: "Audio Reverser Online Free - Play Audio Backwards | FileOmniTool",
      es: "Invertir Audio Online Gratis - Audio al Revés | FileOmniTool",
      fr: "Inverser un Audio en Ligne Gratuit - Lire à l'Envers | FileOmniTool",
      de: "Audio Rückwärts Abspielen Online Kostenlos | FileOmniTool",
      pt: "Inverter Áudio Online Grátis - Áudio ao Contrário | FileOmniTool",
    },
    metaDescription: {
      it: "Riproduci al contrario canzoni, messaggi vocali e registrazioni ed esporta il risultato in MP3 o WAV. Tutto nel browser, gratis e senza caricare file.",
      en: "Reverse songs, voice messages and recordings, then export the backwards audio as MP3 or WAV. Runs in your browser: free, and nothing is uploaded.",
      es: "Reproduce al revés canciones, notas de voz y grabaciones y exporta el resultado en MP3 o WAV. Todo en el navegador, gratis y sin subir archivos.",
      fr: "Lisez à l'envers chansons, messages vocaux et enregistrements, puis exportez le résultat en MP3 ou WAV. Dans le navigateur, gratuit et sans envoi.",
      de: "Songs, Sprachnachrichten und Aufnahmen rückwärts abspielen und als MP3 oder WAV speichern. Läuft im Browser, kostenlos und ohne Upload.",
      pt: "Toque músicas, mensagens de voz e gravações ao contrário e exporte em MP3 ou WAV. Tudo no navegador, grátis e sem enviar arquivos.",
    },
  },

  "zip-extract": {
    h1: {
      it: "Estrai File ZIP Online (Apri e Decomprimi)",
      en: "ZIP Extractor Online (Open & Unzip Files)",
      es: "Descomprimir ZIP Online (Abrir y Extraer)",
      fr: "Extraire un ZIP en Ligne (Ouvrir et Décompresser)",
      de: "ZIP Entpacken Online (Öffnen & Extrahieren)",
      pt: "Extrair ZIP Online (Abrir e Descompactar)",
    },
    metaTitle: {
      it: "Estrarre File ZIP Online Gratis - Apri e Decomprimi | FileOmniTool",
      en: "ZIP Extractor Online Free - Open & Unzip Files | FileOmniTool",
      es: "Descomprimir ZIP Online Gratis - Abrir Archivos ZIP | FileOmniTool",
      fr: "Extraire un ZIP en Ligne Gratuit - Ouvrir un ZIP | FileOmniTool",
      de: "ZIP Entpacken Online Kostenlos - ZIP Öffnen | FileOmniTool",
      pt: "Extrair ZIP Online Grátis - Abrir Arquivos ZIP | FileOmniTool",
    },
    metaDescription: {
      it: "Apri e decomprimi file ZIP online, anche da telefono, senza installare app. Vedi il contenuto e scarica i file che ti servono. Gratis e senza caricare l'archivio.",
      en: "Open and unzip ZIP files online, even on your phone, without installing an app. See what's inside and download the files you need. Free, and the archive is never uploaded.",
      es: "Abre y descomprime archivos ZIP online, también desde el móvil, sin instalar apps. Mira el contenido y descarga lo que necesites. Gratis y sin subir el archivo.",
      fr: "Ouvrez et décompressez des fichiers ZIP en ligne, même sur téléphone, sans application. Voyez le contenu et téléchargez ce qu'il vous faut. Gratuit et sans envoi.",
      de: "ZIP-Dateien online öffnen und entpacken, auch am Handy, ohne App. Inhalt ansehen und benötigte Dateien laden. Kostenlos, das Archiv wird nie hochgeladen.",
      pt: "Abra e descompacte arquivos ZIP online, até no celular, sem instalar apps. Veja o conteúdo e baixe o que precisar. Grátis e sem enviar o arquivo.",
    },
  },

  "qr-generator": {
    h1: {
      it: "Generatore QR Code Gratis (Non Scade Mai)",
      en: "Free QR Code Generator (Never Expires)",
      es: "Generador de Códigos QR Gratis (No Caduca)",
      fr: "Générateur de QR Code Gratuit (Sans Expiration)",
      de: "QR-Code Generator Kostenlos (Läuft Nie Ab)",
      pt: "Gerador de QR Code Grátis (Não Expira)",
    },
    metaTitle: {
      it: "Generatore QR Code Gratis che Non Scade Mai | FileOmniTool",
      en: "Free QR Code Generator That Never Expires | FileOmniTool",
      es: "Generador de QR Gratis que No Caduca Nunca | FileOmniTool",
      fr: "Générateur de QR Code Gratuit Sans Expiration | FileOmniTool",
      de: "QR-Code Generator Kostenlos - Läuft Nie Ab | FileOmniTool",
      pt: "Gerador de QR Code Grátis que Nunca Expira | FileOmniTool",
    },
    metaDescription: {
      it: "Crea QR code statici che non scadono mai: il contenuto è scritto nel codice, senza link di reindirizzamento né abbonamenti. Colori personalizzati, PNG in alta risoluzione.",
      en: "Create static QR codes that never expire: the content is stored in the code itself, with no redirect link or subscription. Custom colours, high-resolution PNG.",
      es: "Crea códigos QR estáticos que no caducan: el contenido va dentro del código, sin redirecciones ni suscripciones. Colores personalizados y PNG en alta resolución.",
      fr: "Créez des QR codes statiques qui n'expirent jamais : le contenu est dans le code, sans lien de redirection ni abonnement. Couleurs au choix, PNG haute résolution.",
      de: "Statische QR-Codes erstellen, die nie ablaufen: Der Inhalt steckt im Code selbst, ohne Weiterleitung und ohne Abo. Eigene Farben, PNG in hoher Auflösung.",
      pt: "Crie QR codes estáticos que nunca expiram: o conteúdo fica no próprio código, sem link de redirecionamento nem assinatura. Cores personalizadas e PNG em alta resolução.",
    },
  },

  "lorem-generator": {
    metaTitle: {
      it: "Lorem Ipsum Generator - Testo Segnaposto Gratis | FileOmniTool",
      en: "Lorem Ipsum Generator - Free Placeholder Text | FileOmniTool",
      es: "Generador Lorem Ipsum - Texto de Relleno Gratis | FileOmniTool",
      fr: "Générateur Lorem Ipsum - Faux Texte Gratuit | FileOmniTool",
      de: "Lorem Ipsum Generator - Blindtext Kostenlos | FileOmniTool",
      pt: "Gerador Lorem Ipsum - Texto de Preenchimento Grátis | FileOmniTool",
    },
    metaDescription: {
      it: "Genera Lorem Ipsum per paragrafi, frasi o parole e copialo con un clic. Testo segnaposto classico per siti, mockup e impaginazione. Gratis, senza registrazione.",
      en: "Generate Lorem Ipsum by paragraphs, sentences or words and copy it in one click. Classic placeholder text for websites, mockups and layouts. Free, no signup.",
      es: "Genera Lorem Ipsum por párrafos, frases o palabras y cópialo con un clic. Texto de relleno clásico para webs, maquetas y diseño. Gratis y sin registro.",
      fr: "Générez du Lorem Ipsum par paragraphes, phrases ou mots et copiez-le en un clic. Faux texte classique pour sites, maquettes et mise en page. Gratuit.",
      de: "Lorem Ipsum nach Absätzen, Sätzen oder Wörtern erzeugen und mit einem Klick kopieren. Klassischer Blindtext für Websites, Mockups und Layouts. Kostenlos.",
      pt: "Gere Lorem Ipsum por parágrafos, frases ou palavras e copie com um clique. Texto de preenchimento clássico para sites, mockups e diagramação. Grátis.",
    },
  },

  "word-counter": {
    h1: {
      it: "Conta Parole e Caratteri Online",
      en: "Word Counter & Character Counter",
      es: "Contador de Palabras y Caracteres Online",
      fr: "Compteur de Mots et de Caractères en Ligne",
      de: "Wörter Zählen & Zeichenzähler Online",
      pt: "Contador de Palavras e Caracteres Online",
    },
    metaTitle: {
      it: "Conta Parole e Caratteri Online Gratis (con Spazi) | FileOmniTool",
      en: "Word Counter Online Free - Characters, Sentences | FileOmniTool",
      es: "Contador de Palabras Online Gratis - Caracteres | FileOmniTool",
      fr: "Compteur de Mots en Ligne Gratuit - Caractères | FileOmniTool",
      de: "Wörter Zählen Online Kostenlos - Zeichenzähler | FileOmniTool",
      pt: "Contador de Palavras Online Grátis - Caracteres | FileOmniTool",
    },
    metaDescription: {
      it: "Conta parole, caratteri con e senza spazi, frasi e paragrafi mentre scrivi, con il tempo di lettura. Utile per tesi, articoli e social. Gratis e privato.",
      en: "Count words, characters with and without spaces, sentences and paragraphs as you type, plus reading time. Handy for essays, articles and posts. Free and private.",
      es: "Cuenta palabras, caracteres con y sin espacios, frases y párrafos mientras escribes, con tiempo de lectura. Útil para trabajos, artículos y redes. Gratis.",
      fr: "Comptez mots, caractères avec et sans espaces, phrases et paragraphes en tapant, avec le temps de lecture. Idéal pour mémoires, articles et réseaux. Gratuit.",
      de: "Wörter, Zeichen mit und ohne Leerzeichen, Sätze und Absätze beim Tippen zählen, inklusive Lesezeit. Praktisch für Hausarbeiten, Artikel und Posts.",
      pt: "Conte palavras, caracteres com e sem espaços, frases e parágrafos enquanto digita, com tempo de leitura. Útil para TCC, artigos e redes. Grátis.",
    },
  },

  "keyword-density": {
    metaTitle: {
      it: "Densità Parole Chiave - Analisi SEO Gratis | FileOmniTool",
      en: "Keyword Density Checker for Google SEO - Free | FileOmniTool",
      es: "Densidad de Palabras Clave - Herramienta SEO Gratis | FileOmniTool",
      fr: "Densité Mot Clé - Outil SEO Gratuit en Ligne | FileOmniTool",
      de: "Keyworddichte Tool - SEO Textanalyse Kostenlos | FileOmniTool",
      pt: "Densidade de Palavras-chave - Ferramenta SEO Grátis | FileOmniTool",
    },
    metaDescription: {
      it: "Calcola la densità delle parole chiave e delle frasi di 2-3 parole di un testo, per evitare ripetizioni eccessive e scrivere in modo naturale per Google. Gratis.",
      en: "Check the keyword density of single words and 2-3 word phrases in any text, to avoid over-optimisation and write naturally for Google. Free, nothing uploaded.",
      es: "Calcula la densidad de palabras clave y frases de 2-3 palabras de cualquier texto para evitar repeticiones y escribir de forma natural para Google. Gratis.",
      fr: "Calculez la densité des mots clés et des expressions de 2-3 mots d'un texte, pour éviter la sur-optimisation et écrire naturellement pour Google. Gratuit.",
      de: "Keyworddichte von Einzelwörtern und 2-3-Wort-Phrasen in jedem Text prüfen, um Überoptimierung zu vermeiden und natürlich für Google zu schreiben.",
      pt: "Calcule a densidade de palavras-chave e frases de 2-3 palavras de qualquer texto para evitar repetições e escrever de forma natural para o Google. Grátis.",
    },
  },

  "image-crop": {
    metaTitle: {
      it: "Ritaglia Immagini Online Gratis - Crop 1:1, 16:9 | FileOmniTool",
      en: "Crop Image Online Free - 1:1, 16:9, 9:16, Custom | FileOmniTool",
      es: "Recortar Imagen Online Gratis - 1:1, 16:9, Libre | FileOmniTool",
      fr: "Recadrer une Image en Ligne Gratuit - 1:1, 16:9 | FileOmniTool",
      de: "Bild Zuschneiden Online Kostenlos - 1:1, 16:9 | FileOmniTool",
      pt: "Recortar Imagem Online Grátis - 1:1, 16:9, Livre | FileOmniTool",
    },
    metaDescription: {
      it: "Ritaglia foto online con proporzioni pronte (1:1 per Instagram, 16:9, 9:16 per le storie) o a mano libera, e scarica subito. Gratis e senza caricare l'immagine.",
      en: "Crop photos online with ready-made ratios (1:1 for Instagram, 16:9, 9:16 for Stories) or freeform, and download instantly. Free, and your image is never uploaded.",
      es: "Recorta fotos online con proporciones listas (1:1 para Instagram, 16:9, 9:16) o libre, y descarga al momento. Gratis y sin subir la imagen.",
      fr: "Recadrez vos photos en ligne avec des formats prêts (1:1 pour Instagram, 16:9, 9:16 pour les stories) ou librement, et téléchargez aussitôt. Gratuit, sans envoi.",
      de: "Fotos online zuschneiden mit fertigen Formaten (1:1 für Instagram, 16:9, 9:16 für Storys) oder frei, und sofort herunterladen. Kostenlos und ohne Upload.",
      pt: "Recorte fotos online com proporções prontas (1:1 para Instagram, 16:9, 9:16) ou livre, e baixe na hora. Grátis e sem enviar a imagem.",
    },
  },
};
