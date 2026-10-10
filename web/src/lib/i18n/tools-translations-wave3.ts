import { ToolTranslationEntry } from "./tools-translations-base";

export const TOOLS_TRANSLATIONS_WAVE3: Record<string, ToolTranslationEntry> = {
  "xml-json": {
    title: {
      es: "Convertidor XML a JSON",
      fr: "Convertisseur XML en JSON",
      de: "XML zu JSON Konverter",
      pt: "Conversor XML para JSON",
    },
    description: {
      es: "Convierte estructuras XML en objetos JSON y viceversa en tu navegador sin enviar datos a servidores.",
      fr: "Convertissez du code XML en objets JSON et inversement sans envoyer de données sur le réseau.",
      de: "Konvertieren Sie XML-Strukturen in JSON-Objekte und umgekehrt sicher im Browser.",
      pt: "Converta estruturas XML em objetos JSON e vice-versa sem enviar dados para a rede.",
    }
  },

  "yaml-json": {
    title: {
      es: "Convertidor YAML a JSON",
      fr: "Convertisseur YAML en JSON",
      de: "YAML zu JSON Konverter",
      pt: "Conversor YAML para JSON",
    },
    description: {
      es: "Traduce configuraciones YAML a JSON estructurado y viceversa con validación de sintaxis en tiempo real.",
      fr: "Traduisez vos configurations YAML en JSON et inversement avec validation instantanée.",
      de: "Wandeln Sie YAML-Konfigurationen in JSON und umgekehrt mit Syntaxvalidierung um.",
      pt: "Converta arquivos de configuração YAML em JSON e vice-versa com validação em tempo real.",
    }
  },

  "keyword-density": {
    title: {
      es: "Analizador de Densidad de Palabras Clave",
      fr: "Analyseur de Densité de Mots-Clés",
      de: "Keyword-Dichte & SEO Textanalyse",
      pt: "Analisador de Densidade de Palavras-chave",
    },
    description: {
      es: "Calcula la frecuencia y porcentaje de palabras clave de 1, 2 y 3 términos para optimización SEO.",
      fr: "Mesurez la fréquence et le pourcentage de vos mots-clés (1, 2 et 3 mots) pour votre référencement SEO.",
      de: "Ermitteln Sie die Keyword-Dichte von Ein- und Mehrwortkombinationen für die SEO-Optimierung.",
      pt: "Calcule a frequência e o percentual de palavras-chave para otimização de SEO de conteúdo.",
    }
  },

  "color-converter": {
    title: {
      es: "Convertidor de Espacios de Color",
      fr: "Convertisseur de Formats de Couleur",
      de: "Farbcode-Konverter (HEX, RGB, CMYK)",
      pt: "Conversor de Formatos de Cor",
    },
    description: {
      es: "Convierte valores de color entre HEX, RGB, HSL y CMYK con previsualización visual inmediata.",
      fr: "Convertissez des codes de couleur entre HEX, RGB, HSL et CMYK avec aperçu en direct.",
      de: "Konvertieren Sie Farbcodes zwischen HEX, RGB, HSL und CMYK mit sofortiger Farbvorschau.",
      pt: "Converta códigos de cor entre HEX, RGB, HSL e CMYK com visualização imediata.",
    }
  },

  "html-entities": {
    title: {
      es: "Codificador de Entidades HTML",
      fr: "Encodeur et Décodeur d'Entités HTML",
      de: "HTML-Entities Encoder & Decoder",
      pt: "Codificador de Entidades HTML",
    },
    description: {
      es: "Convierte caracteres especiales a entidades HTML (&amp;, &lt;, &gt;) y viceversa para evitar ataques XSS.",
      fr: "Encodez les caractères spéciaux en entités HTML (&amp;, &lt;, &gt;) pour sécuriser votre code web.",
      de: "Kodieren Sie Sonderzeichen in sichere HTML-Entities zur Vermeidung von XSS-Schwachstellen.",
      pt: "Codifique caracteres especiais em entidades HTML (&amp;, &lt;, &gt;) para segurança contra XSS.",
    }
  },

  "regex-tester": {
    title: {
      es: "Probador de Expresiones Regulares (Regex)",
      fr: "Testeur d'Expressions Régulières (Regex)",
      de: "Regex-Tester (Reguläre Ausdrücke)",
      pt: "Testador de Expressões Regulares (Regex)",
    },
    description: {
      es: "Valida expresiones regulares de JavaScript con resaltado en vivo de coincidencias y grupos de captura.",
      fr: "Testez vos expressions régulières JavaScript avec surbrillance en temps réel des correspondances.",
      de: "Prüfen Sie reguläre Ausdrücke mit Echtzeit-Hervorhebung von Treffern und Erfassungsgruppen.",
      pt: "Valide expressões regulares JavaScript com destaque em tempo real de correspondências e grupos.",
    }
  },

  "slug-generator": {
    title: {
      es: "Generador de Slugs SEO para URLs",
      fr: "Générateur de Slugs d'URL SEO",
      de: "SEO URL-Slug Generator",
      pt: "Gerador de Slugs de URL para SEO",
    },
    description: {
      es: "Convierte títulos en slugs limpios optimizados para SEO eliminando acentos y caracteres especiales.",
      fr: "Transformez vos titres en slugs d'URL optimisés pour le référencement sans accents ni caractères interdits.",
      de: "Erstellen Sie suchmaschinenoptimierte, saubere URL-Slugs ohne Umlaute und Sonderzeichen.",
      pt: "Transforme títulos em slugs de URL limpos e otimizados para SEO sem acentos nem caracteres especiais.",
    }
  },

  "file-checksum": {
    title: {
      es: "Verificador de Integridad de Archivos",
      fr: "Vérificateur d'Intégrité de Fichiers",
      de: "Datei-Prüfsummen-Verifizierer",
      pt: "Verificador de Integridade de Arquivos",
    },
    description: {
      es: "Compara el hash SHA-256 o MD5 de un archivo con el hash esperado para verificar descargas no alteradas.",
      fr: "Comparez le hachage d'un fichier avec la valeur officielle pour vérifier l'absence d'altération.",
      de: "Vergleichen Sie SHA-256- oder MD5-Prüfsummen mit Sollwerten zur Erkennung manipulierte Downloads.",
      pt: "Compare a soma de verificação SHA-256 ou MD5 de um arquivo com o hash oficial para validar downloads.",
    }
  },

  "hex-viewer": {
    title: {
      es: "Visor Hexadecimal de Archivos (Hex Dump)",
      fr: "Visualiseur Hexadécimal de Fichiers",
      de: "Hex-Editor & Hex-Viewer",
      pt: "Visualizador Hexadecimal de Arquivos",
    },
    description: {
      es: "Inspecciona los bytes binarios de cualquier archivo con offsets hexadecimales y representación ASCII.",
      fr: "Inspectez les octets binaires de n'importe quel fichier avec adresses hexadécimales et rendu ASCII.",
      de: "Analysieren Sie Binärdateien mit Hexadezimal-Offsets und ASCII-Spalte direkt im Browser.",
      pt: "Inspecione os bytes binários de qualquer arquivo com offsets hexadecimais e texto ASCII.",
    }
  },

  "base64-to-image": {
    title: {
      es: "Convertir Base64 a Imagen",
      fr: "Convertir Base64 en Image",
      de: "Base64 zu Bild Konverter",
      pt: "Converter Base64 para Imagem",
    },
    description: {
      es: "Decodifica cadenas de texto Base64 o Data URI y descárgalas como archivos de imagen PNG, JPG o WebP.",
      fr: "Décodez du texte Base64 ou Data URI pour télécharger l'image d'origine en PNG, JPG ou WebP.",
      de: "Dekodieren Sie Base64-Strings zurück in herunterladbare Bilddateien (PNG, JPG, WebP).",
      pt: "Decodifique strings Base64 ou Data URI e baixe o arquivo de imagem PNG, JPG ou WebP original.",
    }
  },

  "srt-to-vtt": {
    title: {
      es: "Convertidor de Subtítulos SRT a WebVTT",
      fr: "Convertisseur de Sous-titres SRT en WebVTT",
      de: "SRT zu WebVTT Untertitel-Konverter",
      pt: "Conversor de Legendas SRT para WebVTT",
    },
    description: {
      es: "Convierte subtítulos SubRip (.srt) a formato WebVTT (.vtt) para reproductores HTML5 y plataformas de streaming.",
      fr: "Convertissez vos fichiers de sous-titres SRT en WebVTT (.vtt) pour lecteurs vidéo HTML5 et streaming.",
      de: "Konvertieren Sie SubRip (.srt) Untertitel in das moderne WebVTT (.vtt) Format für HTML5 Videoplayer.",
      pt: "Converta legendas SubRip (.srt) para formato WebVTT (.vtt) para reprodutores de vídeo HTML5 e web.",
    }
  },

  "srt-to-txt": {
    title: {
      es: "Convertidor de Subtítulos SRT a Texto Plano",
      fr: "Convertisseur SRT en Texte Brut",
      de: "SRT zu Text Konverter (Ohne Timecodes)",
      pt: "Conversor de Legendas SRT para Texto Simples",
    },
    description: {
      es: "Elimina códigos de tiempo y numeraciones de archivos de subtítulos para extraer solo los diálogos.",
      fr: "Supprimez les timecodes et numéros de séquence pour récupérer uniquement les dialogues transcrits.",
      de: "Entfernen Sie Zeitstempel und Zeilennummern aus Untertiteln, um reinen Lesetext zu erhalten.",
      pt: "Remova códigos de tempo e numerações de legendas para extrair apenas o texto dos diálogos.",
    }
  },

  "gif-frame-extractor": {
    title: {
      es: "Extractor de Fotogramas de GIF",
      fr: "Extracteur d'Images de GIF Animé",
      de: "GIF-Bilderrahmen Extrahierer",
      pt: "Extrator de Quadros de GIF Animado",
    },
    description: {
      es: "Descompone archivos GIF animados en fotogramas PNG individuales con descarga en paquete ZIP.",
      fr: "Décomposez vos GIF animés en images PNG individuelles et téléchargez-les dans un fichier ZIP.",
      de: "Zerlegen Sie animierte GIFs in einzelne hochauflösende PNG-Bilder mit ZIP-Download.",
      pt: "Desmonte GIFs animados em quadros PNG individuais com download em pacote ZIP.",
    }
  },

  "image-to-ascii": {
    title: {
      es: "Generador de Arte ASCII desde Imágenes",
      fr: "Générateur d'Art ASCII depuis une Image",
      de: "Bild zu ASCII-Art Generator",
      pt: "Gerador de Arte ASCII a partir de Fotos",
    },
    description: {
      es: "Transforma fotos e ilustraciones en arte ASCII con caracteres retro y descarga en TXT o HTML.",
      fr: "Transformez vos photos en art typographique ASCII vintage avec téléchargement en texte ou HTML.",
      de: "Wandeln Sie Fotos in Retro-ASCII-Textkunst um mit anpassbarer Spaltenbreite und Zeichensätzen.",
      pt: "Transforme fotos em arte ASCII com caracteres retrô e exportação em TXT ou HTML.",
    }
  },

  "png-to-ico": {
    title: {
      es: "Convertidor PNG a ICO para Windows",
      fr: "Convertisseur PNG en ICO Windows",
      de: "PNG zu ICO Windows Icon Konverter",
      pt: "Conversor PNG para ICO Windows",
    },
    description: {
      es: "Crea iconos de Windows .ico que contienen resoluciones múltiples (16, 32, 48 y 64 px) con transparencia.",
      fr: "Générez des fichiers d'icône Windows .ico multi-résolutions (16, 32, 48, 64 px) avec transparence.",
      de: "Erstellen Sie echte Windows .ico Dateien mit mehreren Auflösungen (16, 32, 48, 64 px) aus PNG.",
      pt: "Crie arquivos de ícone do Windows .ico com múltiplas resoluções (16, 32, 48, 64 px) e transparência.",
    }
  },

  "svg-cleaner": {
    title: {
      es: "Limpiador y Minificador SVG",
      fr: "Nettoyeur et Optimiseur SVG",
      de: "SVG-Bereiniger & Minifizierer",
      pt: "Limpador e Minificador SVG",
    },
    description: {
      es: "Sanitiza archivos SVG eliminando metadatos de Illustrator o Inkscape, scripts y comentarios.",
      fr: "Optimisez vos fichiers SVG en supprimant balises inutiles, scripts et métadonnées d'éditeurs.",
      de: "Bereinigen und minimieren Sie SVG-Vektordateien durch Entfernung von Metadaten und Skripten.",
      pt: "Otimize arquivos SVG removendo metadados de editores gráficos, scripts e comentários.",
    }
  },

  "pdf-encrypt": {
    title: {
      es: "Proteger y Cifrar PDF con Contraseña",
      fr: "Chiffrer et Protéger un PDF par Mot de Passe",
      de: "PDF mit Passwort verschlüsseln",
      pt: "Proteger e Criptografar PDF com Senha",
    },
    description: {
      es: "Protege documentos PDF confidenciales con contraseñas seguras y cifrado AES-256 en tu navegador.",
      fr: "Protégez vos PDF sensibles avec un mot de passe fort et chiffrement AES-256 en local.",
      de: "Verschlüsseln Sie vertrauliche PDF-Dokumente mit sicherem Passwortschutz und AES-256 lokal.",
      pt: "Proteja documentos PDF confidenciais com senha segura e criptografia AES-256 no seu navegador.",
    }
  },

  "pdf-flatten": {
    title: {
      es: "Aplanar Formularios y Páginas PDF",
      fr: "Aplatir un Formulaire PDF (Flatten)",
      de: "PDF-Formulare verebnen (Flatten)",
      pt: "Achatar Formulários e Páginas PDF",
    },
    description: {
      es: "Convierte campos de formulario rellenables y firmas en elementos gráficos fijos no modificables.",
      fr: "Figez les formulaires interactifs et signatures dans vos PDF pour empêcher toute modification.",
      de: "Wandeln Sie ausfüllbare Formularfelder und Signaturen in unveränderbare statische Elemente um.",
      pt: "Converta campos de formulário preenchíveis e assinaturas em elementos fixos e não editáveis.",
    }
  },

  "json-to-sql": {
    title: {
      es: "Convertidor JSON a Sentencias SQL INSERT",
      fr: "Convertisseur JSON en Requêtes SQL INSERT",
      de: "JSON zu SQL INSERT Konverter",
      pt: "Conversor JSON para Comandos SQL INSERT",
    },
    description: {
      es: "Transforma matrices y objetos JSON en sentencias SQL INSERT para MySQL, PostgreSQL y SQLite.",
      fr: "Convertissez des tableaux JSON en requêtes SQL INSERT pour MySQL, PostgreSQL et SQLite.",
      de: "Generieren Sie SQL INSERT Anweisungen für MySQL, PostgreSQL und SQLite direkt aus JSON-Arrays.",
      pt: "Transforme matrizes e objetos JSON em comandos SQL INSERT para MySQL, PostgreSQL e SQLite.",
    }
  },

  "html-to-markdown": {
    title: {
      es: "Convertidor HTML a Markdown",
      fr: "Convertisseur HTML en Markdown",
      de: "HTML zu Markdown Konverter",
      pt: "Conversor HTML para Markdown",
    },
    description: {
      es: "Convierte páginas o fragmentos de código HTML en Markdown limpio para GitHub, Obsidian o Notion.",
      fr: "Convertissez du code HTML en Markdown épuré compatible avec GitHub, Notion et Obsidian.",
      de: "Wandeln Sie HTML-Webseiten und Textauszüge in sauberes Markdown für GitHub und Notizen um.",
      pt: "Converta páginas ou trechos de código HTML em Markdown limpo para GitHub, Obsidian e Notion.",
    }
  },

  "jwt-decoder": {
    title: {
      es: "Decodificador e Inspector de Tokens JWT",
      fr: "Décodeur de Tokens JWT en ligne",
      de: "JWT Token Decoder & Inspector",
      pt: "Decodificador e Inspetor de Tokens JWT",
    },
    description: {
      es: "Decodifica e inspecciona encabezados y claims de tokens JWT de forma segura sin transmitir secretos en red.",
      fr: "Décodez et analysez vos jetons JWT sans jamais envoyer vos secrets d'authentification sur internet.",
      de: "Analysieren Sie JWT-Header und -Payloads sicher im Browser, ohne geheime Token preiszugeben.",
      pt: "Decodifique e inspecione cabeçalhos e cargas de tokens JWT com segurança sem transmitir dados.",
    }
  },

  "css-minifier": {
    title: {
      es: "Minificador de Código CSS",
      fr: "Minificateur de Fichiers CSS",
      de: "CSS-Minifizierer & Code-Kompressor",
      pt: "Minificador de Código CSS",
    },
    description: {
      es: "Reduce el tamaño de tus hojas de estilo CSS eliminando espacios en blanco, saltos y comentarios.",
      fr: "Compressez vos feuilles de style CSS en supprimant commentaires et espaces inutiles pour le web.",
      de: "Komprimieren Sie CSS-Stylesheets durch Entfernen von Leerzeichen und Kommentaren für schnelle Ladezeiten.",
      pt: "Reduza o tamanho de folhas de estilo CSS removendo espaços, quebras de linha e comentários.",
    }
  },

  "epoch-converter": {
    title: {
      es: "Convertidor de Marcas de Tiempo Unix Epoch",
      fr: "Convertisseur de Timestamp Unix Epoch",
      de: "Unix Timestamp & Epoch Konverter",
      pt: "Conversor de Timestamp Unix Epoch",
    },
    description: {
      es: "Convierte marcas de tiempo numéricas Unix a fechas legibles en UTC y hora local, y viceversa.",
      fr: "Convertissez des timestamps Unix en dates lisibles UTC et locales, et inversement en temps réel.",
      de: "Wandeln Sie Unix-Zeitstempel in lesbare Datumsangaben (UTC & Lokalzeit) und umgekehrt um.",
      pt: "Converta timestamps numéricos Unix para datas legíveis em UTC e hora local, e vice-versa.",
    }
  },

  "file-to-base64": {
    title: {
      es: "Convertidor de Cualquier Archivo a Base64",
      fr: "Convertisseur de Tout Fichier en Base64",
      de: "Datei zu Base64 Konverter (Beliebige Dateitypen)",
      pt: "Conversor de Qualquer Arquivo para Base64",
    },
    description: {
      es: "Codifica cualquier archivo (PDF, DOCX, ZIP, MP3) en una cadena Base64 y decodifica Base64 al archivo original.",
      fr: "Encodez n'importe quel fichier binaire en chaîne Base64 et restaurez le fichier d'origine en 1 clic.",
      de: "Konvertieren Sie beliebige Binärdateien in Base64-Text und stellen Sie Originaldateien wieder her.",
      pt: "Codifique qualquer arquivo binário em texto Base64 e restaure o arquivo original em 1 clique.",
    }
  },

  "file-magic-detector": {
    title: {
      es: "Detector de Tipo de Archivo por Magic Bytes",
      fr: "Détecteur de Type de Fichier (Magic Bytes)",
      de: "Datei-Format-Erkenner (Magic Bytes)",
      pt: "Detector de Tipo de Arquivo por Magic Bytes",
    },
    description: {
      es: "Identifica el formato real de archivos corruptos o sin extensión analizando su firma de bytes binarios.",
      fr: "Identifiez le véritable format de fichiers corrompus ou sans extension via leurs signatures binaires.",
      de: "Ermitteln Sie den echten Dateityp unbekannter Dateien anhand der ersten Header-Bytes im Speicher.",
      pt: "Identifique o formato real de arquivos sem extensão ou corrompidos analisando sua assinatura de bytes.",
    }
  }
};
