import { ToolTranslationEntry } from "./tools-translations-base";

export const TOOLS_TRANSLATIONS_EXPANDED: Record<string, ToolTranslationEntry> = {
  "color-picker": {
    title: {
      es: "Selector y Pipeta de Colores",
      fr: "Sélecteur de Couleurs & Pipette",
      de: "Farbpipette & Farb-Auswahl",
      pt: "Seletor de Cores e Conta-gotas",
    },
    description: {
      es: "Extrae colores de imágenes o crea paletas convirtiendo entre códigos HEX, RGB y HSL.",
      fr: "Prélevez des couleurs sur des images ou convertissez entre codes HEX, RGB et HSL.",
      de: "Wählen Sie Farben aus Bildern oder konvertieren Sie zwischen HEX-, RGB- und HSL-Farbcodes.",
      pt: "Extraia cores de imagens ou crie paletas convertendo entre códigos HEX, RGB e HSL.",
    }
  },

  "audio-booster": {
    title: {
      es: "Amplificador de Volumen de Audio",
      fr: "Amplificateur de Volume Audio",
      de: "Audio Lautstärke-Verstärker",
      pt: "Amplificador de Volume de Áudio",
    },
    description: {
      es: "Aumenta el volumen de archivos de audio silenciosos hasta un 300% sin distorsión mediante Web Audio API.",
      fr: "Augmentez le volume de vos pistes audio jusqu'à +300% sans distorsion via la Web Audio API.",
      de: "Erhöhen Sie die Lautstärke leiser Audioaufnahmen um bis zu 300% ohne Verzerrung im Browser.",
      pt: "Aumente o volume de arquivos de áudio baixos em até 300% sem distorção via Web Audio API.",
    }
  },

  "password-generator": {
    title: {
      es: "Generador de Contraseñas Seguras",
      fr: "Générateur de Mots de Passe Sécurisés",
      de: "Sicherer Passwort-Generator",
      pt: "Gerador de Senhas Seguras",
    },
    description: {
      es: "Genera contraseñas aleatorias de alta entropía con Web Crypto API directamente en tu navegador.",
      fr: "Créez des mots de passe aléatoires ultra-sécurisés via l'API Web Crypto sans envoi sur serveur.",
      de: "Generieren Sie hochsichere Zufallspasswörter mit der Web Crypto API direkt im Browser.",
      pt: "Gere senhas aleatórias e de alta segurança com a Web Crypto API no seu navegador.",
    }
  },

  "uuid-generator": {
    title: {
      es: "Generador de UUID v4",
      fr: "Générateur d'UUID v4",
      de: "UUID v4 Generator",
      pt: "Gerador de UUID v4",
    },
    description: {
      es: "Genera identificadores únicos universales (UUID v4) de forma masiva para bases de datos y desarrollo.",
      fr: "Générez des identifiants uniques universels (UUID v4) en lot pour vos bases de données et projets.",
      de: "Erstellen Sie RFC 4122 konforme UUID v4 Identifikatoren einzeln oder in großen Mengen.",
      pt: "Gere identificadores únicos universais (UUID v4) em massa para bancos de dados e desenvolvimento.",
    }
  },

  "image-to-pdf": {
    title: {
      es: "Convertidor de Imágenes a PDF",
      fr: "Convertisseur d'Images en PDF",
      de: "Bilder zu PDF Konverter",
      pt: "Conversor de Imagens para PDF",
    },
    description: {
      es: "Convierte imágenes JPG, PNG y WebP en un documento PDF de varias páginas con orientación ajustable.",
      fr: "Transformez vos photos JPG, PNG et WebP en un document PDF multipage de haute qualité.",
      de: "Konvertieren Sie JPG-, PNG- und WebP-Bilder in ein mehrseitiges PDF-Dokument direkt im Speicher.",
      pt: "Converta imagens JPG, PNG e WebP em um documento PDF de várias páginas com orientação ajustável.",
    }
  },

  "word-counter": {
    title: {
      es: "Contador de Palabras y Caracteres",
      fr: "Compteur de Mots et Caractères",
      de: "Wort- & Zeichenzähler",
      pt: "Contador de Palavras e Caracteres",
    },
    description: {
      es: "Analiza textos en tiempo real calculando palabras, caracteres, tiempo de lectura y densidad léxica.",
      fr: "Analysez du texte en temps réel : mots, caractères, temps de lecture et statistiques de phrases.",
      de: "Zählen Sie Wörter, Zeichen und Lesezeit Ihrer Texte in Echtzeit direkt im Browser.",
      pt: "Analise textos em tempo real calculando palavras, caracteres, tempo de leitura e frases.",
    }
  },

  "favicon-generator": {
    title: {
      es: "Generador de Favicon",
      fr: "Générateur de Favicon",
      de: "Favicon-Generator",
      pt: "Gerador de Favicon",
    },
    description: {
      es: "Crea paquetes de favicons (16x16, 32x32, 180x180) y archivo .ico a partir de cualquier imagen o logotipo.",
      fr: "Générez des packs complets de favicons et fichier .ico pour votre site web à partir d'un logo.",
      de: "Erstellen Sie vollständige Favicon-Pakete inklusive .ico für Webseiten aus beliebigen Bildern.",
      pt: "Crie pacotes completos de favicons e arquivo .ico para seu site a partir de qualquer imagem.",
    }
  },

  "pdf-page-number": {
    title: {
      es: "Numerar Páginas de PDF",
      fr: "Numéroter les Pages d'un PDF",
      de: "Seitenzahlen zu PDF hinzufügen",
      pt: "Numerar Páginas de PDF",
    },
    description: {
      es: "Añade números de página personalizados en el encabezado o pie de tus documentos PDF de forma privada.",
      fr: "Insérez des numéros de page personnalisés en haut ou en bas de vos documents PDF.",
      de: "Fügen Sie anpassbare Seitenzahlen in Kopf- oder Fußzeilen Ihrer PDF-Dokumente ein.",
      pt: "Adicione numeração de página personalizada no cabeçalho ou rodapé de documentos PDF.",
    }
  },

  "pdf-to-text": {
    title: {
      es: "Extraer Texto de PDF",
      fr: "Extraire le Texte d'un PDF",
      de: "Text aus PDF extrahieren",
      pt: "Extrair Texto de PDF",
    },
    description: {
      es: "Extrae el texto sin formato de todas las páginas de tu documento PDF sin necesidad de instalar software.",
      fr: "Extrayez le texte brut de toutes les pages de votre document PDF sans logiciel tiers.",
      de: "Extrahieren Sie reinen Text aus PDF-Dokumenten direkt im Browser ohne Software-Installation.",
      pt: "Extraia o texto simples de todas as páginas do seu documento PDF sem necessidade de instalar programas.",
    }
  },

  "pdf-grayscale": {
    title: {
      es: "Convertir PDF a Escala de Grises",
      fr: "Convertir PDF en Niveaux de Gris",
      de: "PDF in Graustufen umwandeln",
      pt: "Converter PDF para Tons de Cinza",
    },
    description: {
      es: "Convierte documentos PDF a blanco y negro o escala de grises para optimizar la impresión de tinta y tóner.",
      fr: "Transformez vos documents PDF en noir et blanc pour économiser toner et encre lors de l'impression.",
      de: "Konvertieren Sie Farb-PDFs in Schwarz-Weiß / Graustufen für sparsames Drucken.",
      pt: "Converta documentos PDF em preto e branco para economizar tinta e toner na impressão.",
    }
  },

  "pdf-metadata": {
    title: {
      es: "Editor de Metadatos PDF",
      fr: "Éditeur de Métadonnées PDF",
      de: "PDF-Metadaten Editor",
      pt: "Editor de Metadados PDF",
    },
    description: {
      es: "Inspecciona, modifica o elimina título, autor, asunto y palabras clave de tus archivos PDF.",
      fr: "Consultez, modifiez ou effacez le titre, l'auteur, l'objet et les mots-clés de vos documents PDF.",
      de: "Lesen, bearbeiten oder löschen Sie Titel, Autor, Betreff und Schlüsselwörter aus PDF-Dateien.",
      pt: "Inspecione, altere ou remova título, autor, assunto e palavras-chave de seus arquivos PDF.",
    }
  },

  "pdf-organize": {
    title: {
      es: "Organizar y Reordenar Páginas PDF",
      fr: "Organiser et Réordonner les Pages PDF",
      de: "PDF-Seiten organisieren & sortieren",
      pt: "Organizar e Reordenar Páginas PDF",
    },
    description: {
      es: "Reorganiza, reordena o elimina páginas de tu documento PDF mediante una cuadrícula visual interactiva.",
      fr: "Réorganisez, triez ou supprimez des pages de votre PDF grâce à une grille visuelle interactive.",
      de: "Sortieren und löschen Sie PDF-Seiten visuell über eine interaktive Vorschau-Rasteransicht.",
      pt: "Reorganize, reordene ou exclua páginas do seu documento PDF usando uma grade visual interativa.",
    }
  },

  "image-crop": {
    title: {
      es: "Recortar Imágenes",
      fr: "Recadrer une Image",
      de: "Bilder zuschneiden (Crop)",
      pt: "Recortar Imagens",
    },
    description: {
      es: "Recorta fotos con proporciones libres o fijas (1:1, 16:9, 4:3) directamente en HTML5 Canvas.",
      fr: "Recadrez vos photos au format libre ou standard (1:1, 16:9, 4:3) dans votre navigateur.",
      de: "Schneiden Sie Fotos mit freiem Zuschnitt oder festen Seitenverhältnissen (1:1, 16:9, 4:3) zu.",
      pt: "Recorte fotos com proporções livres ou fixas (1:1, 16:9, 4:3) diretamente no HTML5 Canvas.",
    }
  },

  "image-blur": {
    title: {
      es: "Difuminar y Censurar Imágenes",
      fr: "Flouter et Masquer une Image",
      de: "Bilder weichzeichnen & verpixeln",
      pt: "Desfocar e Censurar Imagens",
    },
    description: {
      es: "Aplica desenfoque gaussiano o mosaico de píxeles para censurar rostros o datos confidenciales.",
      fr: "Appliquez un flou gaussien pour masquer visages, plaques d'immatriculation ou données sensibles.",
      de: "Wenden Sie Weichzeichner an, um Gesichter, Kennzeichen oder sensible Daten unkenntlich zu machen.",
      pt: "Aplique desfoque gaussiano para censurar rostos, placas ou informações confidenciais.",
    }
  },

  "image-invert": {
    title: {
      es: "Invertir Colores de Imágenes",
      fr: "Inverser les Couleurs d'une Image",
      de: "Bildfarben invertieren (Negativ)",
      pt: "Inverter Cores de Imagens",
    },
    description: {
      es: "Invierte los valores de color de cualquier fotografía para crear un efecto negativo instantáneo.",
      fr: "Inversez les couleurs de vos photos pour obtenir un effet négatif photo instantané.",
      de: "Invertieren Sie Bildfarben für kreative Negativeffekte direkt auf Chipebene im Browser.",
      pt: "Inverta os valores de cor de fotos para criar um efeito negativo instantâneo.",
    }
  },

  "image-flip": {
    title: {
      es: "Voltear y Reflejar Imágenes",
      fr: "Retourner et Miroiter une Image",
      de: "Bilder spiegeln & drehen",
      pt: "Girar e Espelhar Imagens",
    },
    description: {
      es: "Refleja imágenes horizontal o verticalmente en un instante sin pérdida de calidad.",
      fr: "Miroitez vos images horizontalement ou verticalement en un clic sans perte de qualité.",
      de: "Spiegeln Sie Bilder horizontal oder vertikal im Browser ohne Qualitätsverlust.",
      pt: "Espelhe imagens horizontalmente ou verticalmente em um clique sem perder qualidade.",
    }
  },

  "image-grayscale": {
    title: {
      es: "Convertir Fotos a Blanco y Negro",
      fr: "Convertir une Photo en Noir et Blanc",
      de: "Fotos in Schwarz-Weiß umwandeln",
      pt: "Converter Fotos para Preto e Branco",
    },
    description: {
      es: "Convierte imágenes a escala de grises monocromática en memoria para un estilo clásico o menor peso.",
      fr: "Passez vos photos en niveaux de gris monochromes pour un style élégant ou un poids réduit.",
      de: "Wandeln Sie Farbfotos in Graustufen um für künstlerische Effekte oder sparsame Dateigrößen.",
      pt: "Converta imagens para escala de cinza monocromática para estilo vintage ou menor tamanho.",
    }
  },

  "image-to-base64": {
    title: {
      es: "Convertir Imagen a Base64",
      fr: "Convertir une Image en Base64",
      de: "Bild zu Base64 konvertieren",
      pt: "Converter Imagem para Base64",
    },
    description: {
      es: "Convierte imágenes PNG, JPG y SVG en cadenas Data URI Base64 listas para incrustar en HTML o CSS.",
      fr: "Transformez vos images en chaînes Data URI Base64 pour inclusion directe dans votre code HTML/CSS.",
      de: "Wandeln Sie Bilder in Base64 Data URI Strings für direktes Einbetten in HTML und CSS um.",
      pt: "Converta imagens em strings Data URI Base64 prontas para incorporar no HTML ou CSS.",
    }
  },

  "audio-speed": {
    title: {
      es: "Cambiar Velocidad de Audio",
      fr: "Changer la Vitesse d'un Audio",
      de: "Audio-Geschwindigkeit anpassen",
      pt: "Alterar Velocidade de Áudio",
    },
    description: {
      es: "Acelera o ralentiza canciones y grabaciones de voz de 0.25x a 4x de velocidad sin subir archivos.",
      fr: "Accélérez ou ralentissez vos pistes audio et podcasts de 0.25x à 4x sans téléversement.",
      de: "Verändern Sie das Wiedergabetempo von Audioaufnahmen von 0,25x bis 4x stufenlos im Browser.",
      pt: "Acelere ou desacelere faixas de áudio e podcasts de 0.25x a 4x sem enviar arquivos para a nuvem.",
    }
  },

  "audio-reverse": {
    title: {
      es: "Revertir Audio al Revés",
      fr: "Inverser un Fichier Audio",
      de: "Audio rückwärts abspielen",
      pt: "Inverter Áudio ao Contrário",
    },
    description: {
      es: "Reproduce e invierte la pista de cualquier archivo de sonido para efectos de diseño sonoro.",
      fr: "Inversez le sens de lecture de vos fichiers sonores pour vos créations audio.",
      de: "Drehen Sie die Wellenform von Audioaufnahmen um für kreative Rückwärts-Effekte.",
      pt: "Inverta a direção de reprodução de arquivos de som para design sonoro criativo.",
    }
  },

  "audio-stereo-to-mono": {
    title: {
      es: "Convertir Audio Estéreo a Mono",
      fr: "Convertir Audio Stéréo en Mono",
      de: "Stereo-Audio zu Mono umwandeln",
      pt: "Converter Áudio Estéreo para Mono",
    },
    description: {
      es: "Mezcla pistas de audio de dos canales estéreo en una pista monoaural equilibrada.",
      fr: "Mixez les deux canaux stéréo en une piste audio mono parfaitement équilibrée.",
      de: "Mischen Sie Zweikanal-Stereo-Audiospuren zu einer ausgewogenen Mono-Spur zusammen.",
      pt: "Misture canais estéreo em uma faixa de áudio mono equilibrada diretamente no navegador.",
    }
  },

  "audio-tone": {
    title: {
      es: "Generador de Frecuencias de Audio",
      fr: "Générateur de Fréquences et Tonalités",
      de: "Audio-Frequenz- und Tongenerator",
      pt: "Gerador de Frequência e Tons de Áudio",
    },
    description: {
      es: "Genera ondas sonoras sinusoidales, cuadradas y triangulares de 20 Hz a 20 kHz para calibración.",
      fr: "Générez des ondes sonores pures (sinus, carré, triangle) de 20 Hz à 20 000 Hz pour tests acoustiques.",
      de: "Erzeugen Sie reine Sinus-, Rechteck- und Dreieckswellen von 20 Hz bis 20.000 Hz für Akustiktests.",
      pt: "Gere ondas sonoras senoidais, quadradas e triangulares de 20 Hz a 20 kHz para calibração de áudio.",
    }
  },

  "csv-to-markdown": {
    title: {
      es: "Convertidor CSV a Tabla Markdown",
      fr: "Convertisseur CSV en Tableau Markdown",
      de: "CSV zu Markdown-Tabelle Konverter",
      pt: "Conversor CSV para Tabela Markdown",
    },
    description: {
      es: "Convierte datos CSV y hojas de cálculo en tablas Markdown perfectamente alineadas para GitHub o Notion.",
      fr: "Transformez vos données CSV en tableaux Markdown élégamment alignés pour GitHub ou Notion.",
      de: "Wandeln Sie CSV-Tabellen in sauber formatierte Markdown-Tabellen für GitHub und Dokumentationen um.",
      pt: "Converta dados CSV em tabelas Markdown perfeitamente alinhadas para GitHub e Notion.",
    }
  },

  "text-to-pdf": {
    title: {
      es: "Convertidor de Texto a PDF",
      fr: "Convertisseur de Texte en PDF",
      de: "Text zu PDF Konverter",
      pt: "Conversor de Texto para PDF",
    },
    description: {
      es: "Escribe o pega texto plano y conviértelo en un documento PDF formateado y paginado al instante.",
      fr: "Rédigez ou collez du texte brut et transformez-le instantanément en PDF paginé.",
      de: "Wandeln Sie einfachen Text sofort in ein formatiertes und paginiertes PDF-Dokument um.",
      pt: "Digite ou cole texto simples e converta-o instantaneamente em um PDF formatado e paginado.",
    }
  },

  "json-formatter": {
    title: {
      es: "Formateador y Validador JSON",
      fr: "Formateur et Validateur JSON",
      de: "JSON Formatierer & Validator",
      pt: "Formatador e Validador JSON",
    },
    description: {
      es: "Embellece, comprime y valida código JSON con resaltado de sintaxis y detección de errores de sintaxis.",
      fr: "Formatez, compressez et validez du code JSON avec coloration syntaxique et détection d'erreurs.",
      de: "Formatieren, minimieren und validieren Sie JSON-Code mit Syntaxhervorhebung direkt im Browser.",
      pt: "Formate, comprima e valide código JSON com realce de sintaxe e detecção de erros.",
    }
  }
};
