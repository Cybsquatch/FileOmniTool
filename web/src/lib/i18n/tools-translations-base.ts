export interface ToolTranslationEntry {
  title: Record<"es" | "fr" | "de" | "pt", string>;
  description: Record<"es" | "fr" | "de" | "pt", string>;
  instructions?: Record<"es" | "fr" | "de" | "pt", string[]>;
  faq?: Record<"es" | "fr" | "de" | "pt", Array<{ question: string; answer: string }>>;
}

export const TOOLS_TRANSLATIONS_BASE: Record<string, ToolTranslationEntry> = {
  "pdf-merge": {
    title: {
      es: "Unir PDF Online",
      fr: "Fusionner PDF en ligne",
      de: "PDF online zusammenfügen",
      pt: "Juntar PDF Online",
    },
    description: {
      es: "Combina dos o más archivos PDF en un único documento directamente en tu navegador. 100% privado y sin subidas a servidores.",
      fr: "Combinez plusieurs fichiers PDF en un seul document directement dans votre navigateur. 100% privé, sans aucun téléversement.",
      de: "Fügen Sie mehrere PDF-Dateien direkt im Browser zu einem Dokument zusammen. 100% privat ohne Server-Uploads.",
      pt: "Combine dois ou mais arquivos PDF em um único documento diretamente no seu navegador. 100% privado e sem envio para servidores.",
    },
    instructions: {
      es: [
        "Arrastra y suelta o selecciona 2 o más archivos PDF para combinar.",
        "Verifica los archivos en el orden que deseas.",
        "Haz clic en 'Unir PDFs' para generar el documento en memoria.",
        "Descarga al instante tu archivo PDF unificado."
      ],
      fr: [
        "Glissez-déposez ou sélectionnez 2 fichiers PDF ou plus à combiner.",
        "Vérifiez l'ordre de vos documents.",
        "Cliquez sur 'Fusionner les PDF' pour assembler le document en mémoire.",
        "Téléchargez instantanément votre fichier PDF fusionné."
      ],
      de: [
        "Ziehen Sie 2 oder mehr PDF-Dateien hierher oder wählen Sie sie aus.",
        "Überprüfen Sie die Reihenfolge der Dokumente.",
        "Klicken Sie auf 'PDFs zusammenfügen', um das Dokument im Speicher zu erstellen.",
        "Laden Sie Ihre zusammengefügte PDF-Datei sofort herunter."
      ],
      pt: [
        "Arraste e solte ou selecione 2 ou mais arquivos PDF para combinar.",
        "Verifique os arquivos na ordem desejada.",
        "Clique em 'Juntar PDFs' para gerar o documento na memória.",
        "Baixe instantaneamente seu arquivo PDF unificado."
      ]
    },
    faq: {
      es: [
        {
          question: "¿Se suben mis archivos PDF a sus servidores?",
          answer: "No, nunca. FileOmniTool utiliza WebAssembly y pdf-lib: todo el proceso ocurre en la memoria RAM de tu dispositivo. Ningún dato sale de tu ordenador."
        }
      ],
      fr: [
        {
          question: "Mes fichiers PDF sont-ils téléversés sur vos serveurs ?",
          answer: "Non, jamais. FileOmniTool utilise WebAssembly et pdf-lib : l'ensemble du traitement se fait dans la mémoire vive locale de votre appareil. Aucune donnée ne quitte votre ordinateur."
        }
      ],
      de: [
        {
          question: "Werden meine PDF-Dateien auf Server hochgeladen?",
          answer: "Nein, niemals. FileOmniTool verwendet WebAssembly und pdf-lib: Der gesamte Vorgang findet im lokalen Arbeitsspeicher Ihres Geräts statt."
        }
      ],
      pt: [
        {
          question: "Meus arquivos PDF são enviados para servidores?",
          answer: "Não, nunca. O FileOmniTool utiliza WebAssembly e pdf-lib: todo o processo ocorre na memória RAM local do seu dispositivo."
        }
      ]
    }
  },

  "pdf-split": {
    title: {
      es: "Dividir PDF Online",
      fr: "Diviser PDF en ligne",
      de: "PDF online teilen",
      pt: "Dividir PDF Online",
    },
    description: {
      es: "Extrae páginas específicas o separa intervalos de tu documento PDF sin subir archivos a la nube.",
      fr: "Extrayez des pages spécifiques ou séparez des plages de pages de votre PDF sans téléversement.",
      de: "Extrahieren Sie bestimmte Seiten oder Seitenbereiche aus Ihrem PDF-Dokument ohne Server-Upload.",
      pt: "Extraia páginas específicas ou separe intervalos do seu documento PDF sem enviar arquivos para a nuvem.",
    },
    instructions: {
      es: [
        "Selecciona el archivo PDF que deseas dividir.",
        "Indica los números de página o el intervalo deseado (ej. 1-3, 5).",
        "Haz clic en 'Dividir PDF' para procesarlo localmente.",
        "Descarga el nuevo documento PDF generado."
      ],
      fr: [
        "Sélectionnez le fichier PDF que vous souhaitez diviser.",
        "Indiquez les numéros de page ou la plage souhaitée (ex: 1-3, 5).",
        "Cliquez sur 'Diviser le PDF' pour traiter localement.",
        "Téléchargez le nouveau document PDF extrait."
      ],
      de: [
        "Wählen Sie die PDF-Datei aus, die Sie teilen möchten.",
        "Geben Sie die gewünschten Seitenzahlen oder Bereiche an (z.B. 1-3, 5).",
        "Klicken Sie auf 'PDF teilen', um es lokal zu verarbeiten.",
        "Laden Sie das extrahierte Dokument herunter."
      ],
      pt: [
        "Selecione o arquivo PDF que deseja dividir.",
        "Indique as páginas ou o intervalo desejado (ex: 1-3, 5).",
        "Clique em 'Dividir PDF' para processá-lo localmente.",
        "Baixe o novo documento PDF gerado."
      ]
    }
  },

  "image-convert": {
    title: {
      es: "Convertidor de Imágenes",
      fr: "Convertisseur d'Images",
      de: "Bildkonverter",
      pt: "Conversor de Imagens",
    },
    description: {
      es: "Convierte imágenes entre WebP, PNG, JPG y AVIF en tu navegador a máxima velocidad y en total privacidad.",
      fr: "Convertissez vos images entre WebP, PNG, JPG et AVIF dans votre navigateur à vitesse maximale et en toute confidentialité.",
      de: "Konvertieren Sie Bilder zwischen WebP, PNG, JPG und AVIF im Browser mit maximaler Geschwindigkeit und Privatsphäre.",
      pt: "Converta imagens entre WebP, PNG, JPG e AVIF no navegador com máxima velocidade e total privacidade.",
    }
  },

  "image-compress": {
    title: {
      es: "Comprimir Imágenes",
      fr: "Compresser des Images",
      de: "Bilder komprimieren",
      pt: "Comprimir Imagens",
    },
    description: {
      es: "Reduce el peso de imágenes WebP, JPEG y PNG sin perder calidad visible, directamente en tu navegador.",
      fr: "Réduisez la taille de vos images WebP, JPEG et PNG sans perte de qualité visible, directement dans le navigateur.",
      de: "Reduzieren Sie die Dateigröße von WebP-, JPEG- und PNG-Bildern ohne sichtbaren Qualitätsverlust direkt im Browser.",
      pt: "Reduza o tamanho de imagens WebP, JPEG e PNG sem perder qualidade visível, diretamente no seu navegador.",
    }
  },

  "zip-create": {
    title: {
      es: "Crear Archivo ZIP",
      fr: "Créer une Archive ZIP",
      de: "ZIP-Archiv erstellen",
      pt: "Criar Arquivo ZIP",
    },
    description: {
      es: "Empaqueta y comprime varios archivos en una carpeta ZIP en la memoria de tu dispositivo.",
      fr: "Compressez plusieurs fichiers dans une archive ZIP directement dans la mémoire de votre appareil.",
      de: "Packen und komprimieren Sie mehrere Dateien direkt im Speicher Ihres Geräts in einen ZIP-Ordner.",
      pt: "Agrupe e comprima vários arquivos em uma pasta ZIP na memória do seu dispositivo.",
    }
  },

  "zip-extract": {
    title: {
      es: "Descomprimir Archivo ZIP",
      fr: "Extraire une Archive ZIP",
      de: "ZIP-Archiv entpacken",
      pt: "Extrair Arquivo ZIP",
    },
    description: {
      es: "Extrae archivos de carpetas ZIP de forma instantánea en tu navegador sin subirlos a internet.",
      fr: "Extrayez les fichiers d'une archive ZIP instantanément dans votre navigateur sans téléversement.",
      de: "Entpacken Sie Dateien aus ZIP-Archiven sofort im Browser ohne Server-Upload.",
      pt: "Extraia arquivos de pastas ZIP instantaneamente no seu navegador sem enviá-los para a internet.",
    }
  },

  "hash-generator": {
    title: {
      es: "Generador de Hashes Criptográficos",
      fr: "Générateur de Hachage Cryptographique",
      de: "Kryptographischer Hash-Generator",
      pt: "Gerador de Hash Criptográfico",
    },
    description: {
      es: "Calcula hashes SHA-256, SHA-512, SHA-1 y MD5 para archivos y textos con Web Crypto API.",
      fr: "Calculez des hachages SHA-256, SHA-512, SHA-1 et MD5 pour fichiers et textes avec l'API Web Crypto.",
      de: "Berechnen Sie SHA-256-, SHA-512-, SHA-1- und MD5-Hashes für Dateien und Texte mit der Web Crypto API.",
      pt: "Calcule hashes SHA-256, SHA-512, SHA-1 e MD5 para arquivos e textos usando a Web Crypto API.",
    }
  },

  "json-csv": {
    title: {
      es: "Convertidor JSON a CSV",
      fr: "Convertisseur JSON en CSV",
      de: "JSON zu CSV Konverter",
      pt: "Conversor JSON para CSV",
    },
    description: {
      es: "Convierte archivos JSON estructurados en hojas de cálculo CSV y viceversa sin compartir datos con terceros.",
      fr: "Convertissez des fichiers JSON en feuilles de calcul CSV et inversement en toute confidentialité.",
      de: "Konvertieren Sie strukturierte JSON-Dateien in CSV-Tabellen und umgekehrt direkt im Browser.",
      pt: "Converta arquivos JSON em planilhas CSV e vice-versa sem compartilhar dados com terceiros.",
    }
  },

  "audio-convert": {
    title: {
      es: "Convertidor de Audio Online",
      fr: "Convertisseur Audio en ligne",
      de: "Online Audio-Konverter",
      pt: "Conversor de Áudio Online",
    },
    description: {
      es: "Convierte archivos de audio entre formatos MP3, WAV y OGG usando Web Audio API en tu navegador.",
      fr: "Convertissez des pistes audio entre MP3, WAV et OGG grâce à la Web Audio API directement dans le navigateur.",
      de: "Konvertieren Sie Audio-Dateien zwischen MP3, WAV und OGG mit der Web Audio API im Browser.",
      pt: "Converta arquivos de áudio entre MP3, WAV e OGG usando a Web Audio API diretamente no navegador.",
    }
  },

  "audio-trim": {
    title: {
      es: "Cortar Audio Online",
      fr: "Découper Audio en ligne",
      de: "Audio online schneiden",
      pt: "Cortar Áudio Online",
    },
    description: {
      es: "Corta y recorta archivos de música o voz con precisión de milisegundos en tu navegador.",
      fr: "Découpez des fichiers audio avec une précision millimétrique directement dans votre navigateur.",
      de: "Schneiden Sie Audio- und Sprachdateien mit Millisekunden-Präzision direkt im Browser.",
      pt: "Corte e apare arquivos de áudio com precisão de milissegundos no seu navegador.",
    }
  },

  "video-to-audio": {
    title: {
      es: "Extraer Audio de Video",
      fr: "Extraire Audio d'une Vidéo",
      de: "Audio aus Video extrahieren",
      pt: "Extrair Áudio de Vídeo",
    },
    description: {
      es: "Extrae pistas de audio de archivos de video MP4, WebM o MKV en formato MP3/WAV sin subir gigabytes de video.",
      fr: "Extrayez la piste audio de vidéos MP4, WebM ou MKV en MP3/WAV sans envoyer vos vidéos sur le cloud.",
      de: "Extrahieren Sie Tonspuren aus MP4-, WebM- oder MKV-Videos als MP3/WAV ohne Cloud-Uploads.",
      pt: "Extraia faixas de áudio de arquivos de vídeo MP4, WebM ou MKV em formato MP3/WAV sem upload de vídeos pesados.",
    }
  },

  "svg-to-png": {
    title: {
      es: "Convertidor SVG a PNG",
      fr: "Convertisseur SVG en PNG",
      de: "SVG zu PNG Konverter",
      pt: "Conversor SVG para PNG",
    },
    description: {
      es: "Rasteriza archivos vectoriales SVG a imágenes PNG en alta definición con resolución y fondo personalizables.",
      fr: "Convertissez des graphiques vectoriels SVG en images PNG haute définition avec fond transparent.",
      de: "Konvertieren Sie SVG-Vektorgrafiken in hochauflösende PNG-Bilder mit anpassbarer Skalierung.",
      pt: "Rasterize gráficos vetoriais SVG em imagens PNG em alta definição com resolução personalizável.",
    }
  },

  "qr-generator": {
    title: {
      es: "Generador de Códigos QR",
      fr: "Générateur de Code QR",
      de: "QR-Code Generator",
      pt: "Gerador de QR Code",
    },
    description: {
      es: "Crea códigos QR personalizados para enlaces, textos y redes Wi-Fi con descarga en alta resolución PNG y SVG.",
      fr: "Créez des codes QR pour liens, textes et Wi-Fi avec téléchargement haute résolution en PNG et SVG.",
      de: "Erstellen Sie QR-Codes für Links, Texte und WLAN mit hochauflösendem PNG- und SVG-Download.",
      pt: "Crie códigos QR para links, textos e Wi-Fi com download em alta resolução PNG e SVG.",
    }
  },

  "pdf-rotate": {
    title: {
      es: "Rotar Páginas PDF",
      fr: "Faire Pivoter des Pages PDF",
      de: "PDF-Seiten drehen",
      pt: "Girar Páginas PDF",
    },
    description: {
      es: "Gira páginas de tu documento PDF 90°, 180° o 270° de forma permanente y sin perder calidad vectorial.",
      fr: "Faites pivoter les pages de votre PDF à 90°, 180° ou 270° de façon permanente sans perte de qualité.",
      de: "Drehen Sie PDF-Seiten um 90°, 180° oder 270° dauerhaft ohne Qualitätsverlust im Browser.",
      pt: "Gire páginas do seu documento PDF em 90°, 180° ou 270° permanentemente sem perder qualidade vetorial.",
    }
  },

  "excel-convert": {
    title: {
      es: "Convertidor Excel a CSV / JSON",
      fr: "Convertisseur Excel en CSV / JSON",
      de: "Excel zu CSV / JSON Konverter",
      pt: "Conversor Excel para CSV / JSON",
    },
    description: {
      es: "Convierte hojas de cálculo de Microsoft Excel (XLSX, XLS) en tablas CSV o colecciones JSON en tu dispositivo.",
      fr: "Convertissez des classeurs Excel (XLSX, XLS) en tableaux CSV ou données JSON dans votre navigateur.",
      de: "Konvertieren Sie Excel-Dateien (XLSX, XLS) in CSV-Tabellen oder JSON direkt auf Ihrem Gerät.",
      pt: "Converta planilhas do Excel (XLSX, XLS) em tabelas CSV ou dados JSON no seu dispositivo.",
    }
  },

  "docx-convert": {
    title: {
      es: "Convertidor Word DOCX a HTML / Texto",
      fr: "Convertisseur Word DOCX en HTML / Texte",
      de: "Word DOCX zu HTML / Text Konverter",
      pt: "Conversor Word DOCX para HTML / Texto",
    },
    description: {
      es: "Convierte documentos de Word (.docx) a HTML limpio o texto sin formato directamente en tu navegador.",
      fr: "Convertissez des documents Word (.docx) en code HTML propre ou en texte brut dans votre navigateur.",
      de: "Konvertieren Sie Word-Dokumente (.docx) in sauberes HTML oder reinen Text direkt im Browser.",
      pt: "Converta documentos do Word (.docx) em HTML limpo ou texto simples diretamente no seu navegador.",
    }
  },

  "exif-remover": {
    title: {
      es: "Eliminar Metadatos EXIF de Fotos",
      fr: "Supprimer les Métadonnées EXIF",
      de: "EXIF-Metadaten aus Fotos entfernen",
      pt: "Remover Metadados EXIF de Fotos",
    },
    description: {
      es: "Elimina coordenadas GPS, modelo de cámara y fecha de captura de fotos JPG y PNG para proteger tu privacidad.",
      fr: "Supprimez coordonnées GPS, modèle d'appareil et dates de vos photos JPG et PNG pour protéger votre vie privée.",
      de: "Entfernen Sie GPS-Standort, Kameramodell und Zeitstempel aus Fotos, um Ihre Privatsphäre zu schützen.",
      pt: "Remova coordenadas GPS, modelo de câmera e data de fotos JPG e PNG para proteger sua privacidade.",
    }
  },

  "base64-tool": {
    title: {
      es: "Codificador y Decodificador Base64",
      fr: "Encodeur et Décodeur Base64",
      de: "Base64 Encoder & Decoder",
      pt: "Codificador e Decodificador Base64",
    },
    description: {
      es: "Codifica y decodifica cadenas de texto en formato Base64 con soporte para codificación UTF-8.",
      fr: "Encodez et décodez des chaînes de texte en Base64 avec prise en charge complète d'UTF-8.",
      de: "Kodieren und dekodieren Sie Text in Base64 mit vollständiger UTF-8 Unterstützung.",
      pt: "Codifique e decodifique textos em Base64 com suporte total para codificação UTF-8.",
    }
  },

  "markdown-preview": {
    title: {
      es: "Editor y Vista Previa Markdown",
      fr: "Éditeur et Aperçu Markdown",
      de: "Markdown Editor & Vorschau",
      pt: "Editor e Pré-visualização Markdown",
    },
    description: {
      es: "Escribe y previsualiza código Markdown en tiempo real con exportación a HTML enriquecido.",
      fr: "Rédigez et prévisualisez du code Markdown en temps réel avec export HTML prêt à l'emploi.",
      de: "Schreiben Sie Markdown-Code mit Echtzeit-Vorschau und HTML-Export im Browser.",
      pt: "Escreva e visualize Markdown em tempo real com exportação para HTML formatado.",
    }
  },

  "text-diff": {
    title: {
      es: "Comparador de Textos Diff",
      fr: "Comparateur de Textes Diff",
      de: "Text-Vergleich (Diff)",
      pt: "Comparador de Textos Diff",
    },
    description: {
      es: "Compara dos textos o fragmentos de código e identifica adiciones, eliminaciones y cambios línea por línea.",
      fr: "Comparez deux textes ou codes pour repérer ajouts, suppressions et modifications ligne par ligne.",
      de: "Vergleichen Sie zwei Texte oder Codeblöcke und sehen Sie Ergänzungen und Änderungen Zeile für Zeile.",
      pt: "Compare dois textos ou códigos e veja adições, exclusões e alterações linha por linha.",
    }
  },

  "case-converter": {
    title: {
      es: "Convertidor de Mayúsculas y Minúsculas",
      fr: "Convertisseur de Casse de Texte",
      de: "Groß-/Kleinschreibung Konverter",
      pt: "Conversor de Maiúsculas e Minúsculas",
    },
    description: {
      es: "Transforma textos a MAYÚSCULAS, minúsculas, Modo Título, camelCase, snake_case y kebab-case.",
      fr: "Transformez du texte en MAJUSCULES, minuscules, Casse Titre, camelCase, snake_case et kebab-case.",
      de: "Wandeln Sie Text in GROSSBUCHSTABEN, Kleinbuchstaben, Titel-Schreibweise, camelCase und snake_case um.",
      pt: "Transforme texto em MAIÚSCULAS, minúsculas, Formato Título, camelCase, snake_case e kebab-case.",
    }
  },

  "list-cleaner": {
    title: {
      es: "Limpiador y Ordenador de Listas",
      fr: "Nettoyeur et Trieur de Listes",
      de: "Listen-Bereiniger & Sortierer",
      pt: "Limpador e Organizador de Listas",
    },
    description: {
      es: "Elimina líneas duplicadas, ordena alfabéticamente, borra espacios vacíos y formatea listas en segundos.",
      fr: "Supprimez les doublons, triez par ordre alphabétique et nettoyez vos listes en quelques secondes.",
      de: "Entfernen Sie Duplikate, sortieren Sie alphabetisch und bereinigen Sie Textlisten blitzschnell.",
      pt: "Remova itens duplicados, ordene em ordem alfabética e limpe listas de texto em segundos.",
    }
  },

  "lorem-generator": {
    title: {
      es: "Generador de Texto Lorem Ipsum",
      fr: "Générateur de Texte Lorem Ipsum",
      de: "Lorem Ipsum Textgenerator",
      pt: "Gerador de Texto Lorem Ipsum",
    },
    description: {
      es: "Genera párrafos, oraciones o listas de texto simulado Lorem Ipsum para maquetación y diseño.",
      fr: "Générez des paragraphes ou phrases de faux texte Lorem Ipsum pour vos maquettes et designs.",
      de: "Erstellen Sie Lorem Ipsum Platzhalter-Texte nach Absätzen, Sätzen oder Wörtern für Webdesign.",
      pt: "Gere parágrafos, frases ou listas de texto simulado Lorem Ipsum para layouts e design.",
    }
  },

  "image-resize": {
    title: {
      es: "Redimensionar Imágenes",
      fr: "Redimensionner une Image",
      de: "Bildgröße anpassen (Resize)",
      pt: "Redimensionar Imagens",
    },
    description: {
      es: "Cambia las dimensiones en píxeles o porcentaje de fotos preservando la relación de aspecto.",
      fr: "Modifiez la largeur et la hauteur en pixels ou pourcentage en préservant les proportions.",
      de: "Ändern Sie die Bildabmessungen in Pixeln oder Prozent unter Beibehaltung des Seitenverhältnisses.",
      pt: "Altere as dimensões em pixels ou porcentagem mantendo a proporção da imagem.",
    }
  },

  "image-watermark": {
    title: {
      es: "Añadir Marca de Agua a Imágenes",
      fr: "Ajouter un Filigrane sur une Image",
      de: "Wasserzeichen zu Bildern hinzufügen",
      pt: "Adicionar Marca d'Água em Imagens",
    },
    description: {
      es: "Coloca marcas de agua de texto o logotipos en tus fotos con opacidad y posición regulables.",
      fr: "Ajoutez un filigrane textuel ou un logo sur vos photos avec opacité et position réglables.",
      de: "Fügen Sie Text- oder Logo-Wasserzeichen mit anpassbarer Deckkraft und Position in Bilder ein.",
      pt: "Adicione marcas d'água de texto ou logotipo em fotos com controle de opacidade e posicionamento.",
    }
  }
};
