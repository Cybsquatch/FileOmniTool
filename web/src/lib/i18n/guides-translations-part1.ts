export interface GuideTranslationEntry {
  title: Record<"es" | "fr" | "de" | "pt", string>;
  excerpt: Record<"es" | "fr" | "de" | "pt", string>;
  intro?: Record<"es" | "fr" | "de" | "pt", string>;
  deepDive?: Record<"es" | "fr" | "de" | "pt", string>;
}

export const GUIDES_TRANSLATIONS_PART1: Record<string, GuideTranslationEntry> = {
  "how-to-merge-pdf-without-uploading": {
    title: {
      es: "Cómo Unir Archivos PDF Gratis Sin Subirlos a la Nube (100% Privado)",
      fr: "Comment Fusionner des PDF Gratuitement Sans Téléversement (100% Privé)",
      de: "Wie man PDF-Dateien kostenlos ohne Cloud-Upload zusammenfügt",
      pt: "Como Juntar Arquivos PDF Grátis Sem Upload na Nuvem (100% Privado)",
    },
    excerpt: {
      es: "Combina contratos, extractos bancarios y facturas en la memoria RAM de tu navegador con WebAssembly y total privacidad.",
      fr: "Combinez vos contrats et factures dans la mémoire vive de votre navigateur sans aucun risque pour vos données.",
      de: "Kombinieren Sie Verträge und Rechnungen direkt im Arbeitsspeicher Ihres Browsers mit voller Privatsphäre.",
      pt: "Combine contratos e faturas diretamente na memória RAM do seu navegador com total privacidade.",
    },
    intro: {
      es: "¿Tienes dos o más documentos PDF para unir pero no quieres subir archivos confidenciales a servidores desconocidos? Con FileOmniTool la unión se realiza 100% en la RAM de tu navegador.",
      fr: "Vous devez fusionner plusieurs PDF sans installer de logiciels ni risquer de fuite de données ? Voici la solution locale et sécurisée.",
      de: "Müssen Sie mehrere PDF-Dateien zusammenfügen, möchten aber keine sensiblen Dokumente hochladen? Hier ist die sichere Lösung.",
      pt: "Precisa juntar dois ou mais arquivos PDF sem instalar programas ou enviar dados para o servidor? Esta é a solução segura.",
    }
  },

  "how-to-split-extract-pages-from-pdf": {
    title: {
      es: "Cómo Dividir y Extraer Páginas de un PDF Sin Programas",
      fr: "Comment Diviser et Extraire des Pages d'un PDF en Ligne",
      de: "Wie man PDF-Seiten kostenlos im Browser teilt und extrahiert",
      pt: "Como Dividir e Extrair Páginas de um PDF Sem Programas",
    },
    excerpt: {
      es: "Extrae solo las páginas que necesitas o separa un PDF grande en varios documentos directamente en tu dispositivo.",
      fr: "Extrayez uniquement les pages utiles ou découpez un PDF volumineux directement sur votre appareil.",
      de: "Extrahieren Sie gezielt einzelne Seiten aus großen PDF-Dokumenten ohne Qualitätsverlust.",
      pt: "Extraia apenas as páginas necessárias ou separe um PDF grande em vários documentos no seu aparelho.",
    }
  },

  "how-to-rotate-pdf-pages-permanently": {
    title: {
      es: "Cómo Rotar Páginas PDF y Guardarlas Permanentemente",
      fr: "Comment Faire Pivoter des Pages PDF et Sauvegarder Définitivement",
      de: "Wie man PDF-Seiten dauerhaft dreht und speichert",
      pt: "Como Girar Páginas PDF e Salvar Permanentemente",
    },
    excerpt: {
      es: "Corrige la orientación de páginas escaneadas al revés o de lado a 90°, 180° o 270° sin perder nitidez de texto.",
      fr: "Corrigez l'orientation de vos documents numérisés à l'envers sans dégrader la netteté du texte.",
      de: "Korrigieren Sie falsch gescannte PDF-Seiten um 90°, 180° oder 270° direkt im Browser.",
      pt: "Corrija a orientação de páginas escaneadas invertidas a 90°, 180° ou 270° sem perder qualidade.",
    }
  },

  "how-to-convert-images-jpg-png-to-pdf": {
    title: {
      es: "Cómo Convertir Imágenes JPG y PNG a PDF en un Solo Archivo",
      fr: "Comment Convertir des Images JPG et PNG en un Seul Fichier PDF",
      de: "Wie man JPG- und PNG-Bilder in eine PDF-Datei konvertiert",
      pt: "Como Converter Imagens JPG e PNG em um Único Arquivo PDF",
    },
    excerpt: {
      es: "Agrupa recibos, fotos y documentos en un archivo PDF ordenado y listo para enviar por email.",
      fr: "Regroupez vos reçus et photos dans un document PDF prêt pour l'envoi administratif.",
      de: "Fügen Sie Fotos, Quittungen und Belege in ein sauberes, mehrseitiges PDF-Dokument zusammen.",
      pt: "Agrupe recibos, fotos e documentos em um arquivo PDF organizado para envio por e-mail.",
    }
  },

  "how-to-add-page-numbers-to-pdf-free": {
    title: {
      es: "Cómo Numerar Páginas de un PDF Gratis (Encabezado y Pie)",
      fr: "Comment Numéroter les Pages d'un PDF Gratuitement",
      de: "Wie man Seitenzahlen zu PDF-Dateien kostenlos hinzufügt",
      pt: "Como Numerar Páginas de um PDF Grátis (Cabeçalho e Rodapé)",
    },
    excerpt: {
      es: "Inserta numeración profesional 'Página X de Y' en tus documentos para tesis, contratos y trámites oficiales.",
      fr: "Ajoutez une numérotation professionnelle à vos thèses, mémoires et dossiers administratifs.",
      de: "Fügen Sie professionelle Seitennummerierung in wissenschaftliche Arbeiten und Verträge ein.",
      pt: "Insira numeração profissional 'Página X de Y' em relatórios, monografias e contratos.",
    }
  },

  "how-to-extract-text-from-pdf-online": {
    title: {
      es: "Cómo Extraer Texto de un Archivo PDF Sin Instalar Software",
      fr: "Comment Extraire le Texte d'un PDF Sans Logiciel",
      de: "Wie man Text aus PDF-Dateien ohne Zusatzsoftware extrahiert",
      pt: "Como Extrair Texto de um Arquivo PDF Sem Instalar Programas",
    },
    excerpt: {
      es: "Copia el contenido textual íntegro de documentos PDF directamente a tu portapapeles o archivo de texto.",
      fr: "Récupérez le contenu textuel complet d'un PDF directement dans votre presse-papiers ou en fichier texte.",
      de: "Kopieren Sie den gesamten Textinhalt aus PDFs sauber in Ihre Zwischenablage.",
      pt: "Copie o conteúdo textual de arquivos PDF diretamente para sua área de transferência ou arquivo TXT.",
    }
  },

  "how-to-convert-pdf-to-black-and-white-grayscale": {
    title: {
      es: "Cómo Convertir un PDF a Blanco y Negro (Escala de Grises)",
      fr: "Comment Convertir un PDF en Noir et Blanc (Niveaux de Gris)",
      de: "Wie man PDF-Dateien in Schwarz-Weiß / Graustufen umwandelt",
      pt: "Como Converter um PDF para Preto e Branco (Escala de Cinza)",
    },
    excerpt: {
      es: "Ahorra tinta de impresora y reduce el peso de documentos convirtiendo páginas de color a escala de grises.",
      fr: "Économisez toner et encre d'impression en convertissant vos PDF couleur en niveaux de gris.",
      de: "Sparen Sie Druckertinte und Toner durch die Umwandlung von Farb-PDFs in Graustufen.",
      pt: "Economize tinta de impressora e reduza o peso de documentos convertendo cores para tons de cinza.",
    }
  },

  "how-to-edit-remove-pdf-metadata-properties": {
    title: {
      es: "Cómo Editar o Eliminar Metadatos Ocultos de un PDF",
      fr: "Comment Modifier ou Supprimer les Métadonnées d'un PDF",
      de: "Wie man PDF-Metadaten einsieht, bearbeitet und entfernt",
      pt: "Como Editar ou Remover Metadados Ocultos de um PDF",
    },
    excerpt: {
      es: "Borra el nombre del autor original, software creador y fechas antes de compartir documentos en internet.",
      fr: "Supprimez l'auteur, le logiciel utilisé et les dates cachées avant d'envoyer vos documents confidentiels.",
      de: "Entfernen Sie Verfasser, Software und Erstellungsdatum vor der Weitergabe von PDF-Dokumenten.",
      pt: "Remova o nome do autor, software criador e histórico antes de compartilhar documentos.",
    }
  },

  "how-to-reorder-organize-delete-pdf-pages": {
    title: {
      es: "Cómo Reordenar y Eliminar Páginas de un PDF con Vista Previa",
      fr: "Comment Réorganiser et Supprimer des Pages d'un PDF",
      de: "Wie man PDF-Seiten visuell neu anordnet und löscht",
      pt: "Como Reordenar e Excluir Páginas de um PDF com Prévia",
    },
    excerpt: {
      es: "Organiza las páginas de tus documentos arrastrando miniaturas visuales y elimina páginas en blanco en segundos.",
      fr: "Réorganisez les pages de vos PDF par glisser-déposer et supprimez les pages blanches en un clic.",
      de: "Bringen Sie PDF-Seiten in die richtige Reihenfolge und entfernen Sie überflüssige Seiten im Browser.",
      pt: "Organize as páginas de seus documentos arrastando miniaturas e exclua páginas em branco facilmente.",
    }
  },

  "how-to-convert-images-webp-png-jpg": {
    title: {
      es: "Cómo Convertir Imágenes WebP, PNG y JPG Sin Perder Calidad",
      fr: "Comment Convertir des Images WebP, PNG et JPG Facilement",
      de: "Wie man WebP-, PNG- und JPG-Bilder ohne Qualitätsverlust konvertiert",
      pt: "Como Converter Imagens WebP, PNG e JPG Sem Perder Qualidade",
    },
    excerpt: {
      es: "Pasa imágenes descargadas en formato WebP a JPG o PNG compatibles con cualquier visor y programa.",
      fr: "Convertissez les images WebP du web en fichiers JPG ou PNG lisibles partout.",
      de: "Konvertieren Sie WebP-Bilder aus dem Internet in universell kompatible JPG- oder PNG-Formate.",
      pt: "Converta imagens WebP da web em JPG ou PNG compatíveis com qualquer programa.",
    }
  },

  "how-to-compress-images-without-losing-quality": {
    title: {
      es: "Cómo Comprimir Imágenes Sin Perder Calidad Visible",
      fr: "Comment Compresser des Images Sans Perte de Qualité",
      de: "Wie man Bilder komprimiert ohne sichtbaren Qualitätsverlust",
      pt: "Como Comprimir Imagens Sem Perder Qualidade Visível",
    },
    excerpt: {
      es: "Reduce el peso de tus fotos hasta un 80% para enviar por email, subir a webs o guardar espacio en disco.",
      fr: "Réduisez le poids de vos photos jusqu'à 80% pour vos emails ou sites internet.",
      de: "Verringern Sie die Dateigröße von Fotos um bis zu 80% für E-Mail-Versand und Webseiten.",
      pt: "Reduza o tamanho de suas fotos em até 80% para enviar por e-mail ou economizar espaço.",
    }
  },

  "how-to-resize-image-dimensions-pixels": {
    title: {
      es: "Cómo Cambiar el Tamaño de una Imagen en Píxeles o Porcentaje",
      fr: "Comment Redimensionner une Image en Pixels ou Pourcentage",
      de: "Wie man die Bildgröße in Pixeln oder Prozent anpasst",
      pt: "Como Mudar o Tamanho de uma Imagem em Pixels ou Porcentagem",
    },
    excerpt: {
      es: "Ajusta ancho y alto de imágenes para redes sociales, tiendas online y formularios oficiales sin deformar la foto.",
      fr: "Ajustez la largeur et la hauteur de vos images sans déformer les proportions de l'image.",
      de: "Passen Sie Breite und Höhe von Bildern für soziale Netzwerke und Ausweise proportional an.",
      pt: "Ajuste largura e altura de fotos para redes sociais e formulários sem distorcer a imagem.",
    }
  },

  "how-to-add-watermark-to-photos-online": {
    title: {
      es: "Cómo Añadir Marcas de Agua a Fotos Para Proteger Tus Derechos",
      fr: "Comment Ajouter un Filigrane sur des Photos Gratuitement",
      de: "Wie man Wasserzeichen zum Schutz von Fotos hinzufügt",
      pt: "Como Adicionar Marca d'Água em Fotos Para Proteger Seus Direitos",
    },
    excerpt: {
      es: "Superpón firmas de texto o logotipos transparentes para evitar el robo de tus fotos en redes sociales.",
      fr: "Protégez vos créations et photographies contre le vol avec une signature ou un logo en filigrane.",
      de: "Schützen Sie Ihre Urheberrechte mit transparenten Text- oder Logo-Wasserzeichen direkt im Browser.",
      pt: "Proteja suas fotografias e trabalhos com assinatura de texto ou logotipo personalizado.",
    }
  },

  "how-to-pick-colors-from-images-online": {
    title: {
      es: "Cómo Extraer Códigos de Color HEX y RGB de Cualquier Imagen",
      fr: "Comment Prélever des Couleurs HEX et RGB sur une Image",
      de: "Wie man Farbcodes (HEX, RGB) aus beliebigen Bildern ausliest",
      pt: "Como Extrair Códigos de Cor HEX e RGB de Qualquer Imagem",
    },
    excerpt: {
      es: "Usa la lupa interactiva para copiar al portapapeles el código hexadecimal exacto de cualquier píxel de una foto.",
      fr: "Prélevez avec précision la couleur exacte de n'importe quel pixel pour vos projets de design.",
      de: "Finden und kopieren Sie exakte Farbwerte einzelner Pixel für Grafikdesign und Webentwicklung.",
      pt: "Copie o código hexadecimal exato de qualquer ponto de uma foto com o conta-gotas digital.",
    }
  },

  "how-to-create-favicons-ico-for-websites": {
    title: {
      es: "Cómo Crear un Favicon .ICO para Tu Sitio Web desde un Logo",
      fr: "Comment Créer un Favicon .ICO pour Site Web depuis un Logo",
      de: "Wie man ein Favicon (.ico) für Webseiten aus einem Logo erstellt",
      pt: "Como Criar um Favicon .ICO para Seu Site a Partir de um Logo",
    },
    excerpt: {
      es: "Genera el icono oficial que se muestra en las pestañas del navegador en todos los tamaños estándar.",
      fr: "Générez l'icône officielle des onglets de navigateur aux formats et dimensions recommandés.",
      de: "Erstellen Sie das passende Tab-Icon für Browser im Standardformat .ico mit optimaler Schärfe.",
      pt: "Gere o ícone oficial exibido nas abas do navegador em todas as resoluções padrão.",
    }
  },

  "how-to-convert-svg-vector-to-png-image": {
    title: {
      es: "Cómo Convertir Gráficos Vectoriales SVG a Imágenes PNG Transparentes",
      fr: "Comment Convertir un SVG Vectoriel en Image PNG Transparente",
      de: "Wie man SVG-Vektorgrafiken in transparente PNG-Bilder konvertiert",
      pt: "Como Converter Vetor SVG em Imagem PNG Transparente",
    },
    excerpt: {
      es: "Renderiza archivos vectoriales SVG a cualquier resolución en píxeles manteniendo la transparencia intacta.",
      fr: "Convertissez des vecteurs SVG en images PNG nettes à la résolution de votre choix.",
      de: "Rendern Sie Vektordateien in gestochen scharfe Rastergrafiken bei frei wählbarer Skalierung.",
      pt: "Renderize vetores SVG em qualquer resolução em pixels mantendo o fundo transparente.",
    }
  },

  "how-to-crop-photos-online-free": {
    title: {
      es: "Cómo Recortar Fotos Online Gratis en Formatos Estándar (1:1, 16:9)",
      fr: "Comment Recadrer des Photos en Ligne aux Formats Standards",
      de: "Wie man Fotos online kostenlos auf feste Formate zuschneidet",
      pt: "Como Recortar Fotos Online Grátis em Formatos Padrão (1:1, 16:9)",
    },
    excerpt: {
      es: "Recorta retratos, paisajes o fotos de perfil con proporciones exactas para redes y pasaportes.",
      fr: "Recadrez vos photos pour vos avatars, bannières et documents d'identité sans logiciel complexe.",
      de: "Schneiden Sie Porträts und Landschaftsbilder auf perfekte Maße für Instagram und Profile zu.",
      pt: "Recorte retratos e fotos de perfil nas proporções exatas para redes sociais e documentos.",
    }
  },

  "how-to-blur-censor-faces-in-photos": {
    title: {
      es: "Cómo Desenfocar y Censurar Rostros o Datos en Fotos",
      fr: "Comment Flouter et Censurer des Visages sur une Photo",
      de: "Wie man Gesichter und Kennzeichen auf Fotos unkenntlich macht",
      pt: "Como Desfocar e Censurar Rostos ou Dados Sensíveis em Fotos",
    },
    excerpt: {
      es: "Protege la identidad de menores, matrículas y documentos confidenciales antes de publicar fotos online.",
      fr: "Masquez visages d'enfants, plaques d'immatriculation et pièces d'identité avant publication.",
      de: "Machen Sie sensible Bildbereiche mit Weichzeichnern vor dem Online-Teilen unkenntlich.",
      pt: "Oculte rostos de pessoas, placas e dados de documentos antes de postar fotos na internet.",
    }
  },

  "how-to-invert-photo-colors-negative-online": {
    title: {
      es: "Cómo Invertir los Colores de una Foto (Efecto Negativo)",
      fr: "Comment Inverser les Couleurs d'une Photo (Effet Négatif)",
      de: "Wie man Bildfarben invertiert (Negativ-Effekt online)",
      pt: "Como Inverter as Cores de uma Foto (Efeito Negativo)",
    },
    excerpt: {
      es: "Transforma fotos normales en negativos o escaneos de películas fotográficas en imágenes positivas en 1 clic.",
      fr: "Créez un effet négatif photo vintage ou inversez des négatifs numérisés instantanément.",
      de: "Verwandeln Sie Fotos in Negative oder digitalisierte Filmstreifen in positive Bilder.",
      pt: "Crie um efeito negativo estilizado ou revele películas digitalizadas com um clique.",
    }
  },

  "how-to-flip-mirror-images-online": {
    title: {
      es: "Cómo Voltear y Reflejar Fotos Horizontal o Verticalmente",
      fr: "Comment Retourner et Miroiter une Image en Ligne",
      de: "Wie man Bilder horizontal oder vertikal spiegelt",
      pt: "Como Girar e Espelhar Fotos Horizontal ou Verticalmente",
    },
    excerpt: {
      es: "Corrige selfies invertidos por la cámara frontal del móvil o crea composiciones en espejo simétricas.",
      fr: "Corrigez vos selfies inversés par la caméra avant de votre smartphone en quelques secondes.",
      de: "Spiegeln Sie Selfies oder kreieren Sie symmetrische Foto-Effekte ohne Bildverlust.",
      pt: "Corrija selfies espelhadas pela câmera frontal do celular ou crie efeitos simétricos.",
    }
  },

  "how-to-convert-color-photos-to-black-white": {
    title: {
      es: "Cómo Convertir Fotos a Blanco y Negro con Estilo Monocromático",
      fr: "Comment Transformer des Photos Couleur en Noir et Blanc",
      de: "Wie man Farbfotos in stilvolles Schwarz-Weiß umwandelt",
      pt: "Como Converter Fotos para Preto e Branco com Estilo Monocromático",
    },
    excerpt: {
      es: "Aplica una conversión a escala de grises equilibrada que resalta sombras y contrastes para un look atemporal.",
      fr: "Sublimez vos portraits et paysages avec un rendu noir et blanc contrasté et élégant.",
      de: "Verleihen Sie Fotos zeitlose Eleganz durch hochwertige Graustufen-Konvertierung.",
      pt: "Dê um toque artístico e atemporal a retratos e paisagens convertendo para preto e branco.",
    }
  },

  "how-to-remove-exif-metadata-from-photos": {
    title: {
      es: "Cómo Eliminar Metadatos EXIF Ocultos de Tus Fotografías",
      fr: "Comment Supprimer les Métadonnées EXIF de Vos Photos",
      de: "Wie man EXIF-Daten (GPS & Kamera) aus Fotos restlos entfernt",
      pt: "Como Remover Metadados EXIF Ocultos de Suas Fotografias",
    },
    excerpt: {
      es: "Borra la ubicación GPS de tu casa, fecha y número de serie de la cámara antes de compartir imágenes en foros.",
      fr: "Protégez votre domicile en effaçant les coordonnées GPS et données d'appareil de vos clichés.",
      de: "Löschen Sie Geodaten und Kamerainformationen aus Fotos zum Schutz Ihrer Privatsphäre.",
      pt: "Remova a localização GPS da sua casa e dados do aparelho antes de enviar fotos na internet.",
    }
  },

  "how-to-convert-image-to-base64-data-uri": {
    title: {
      es: "Cómo Convertir Imágenes a Cadenas Base64 Data URI Para Web",
      fr: "Comment Convertir une Image en Base64 Data URI pour le Web",
      de: "Wie man Bilder in Base64 Data URI Strings für Webseiten umwandelt",
      pt: "Como Converter Imagens para Strings Base64 Data URI para Web",
    },
    excerpt: {
      es: "Incrusta iconos y gráficos directamente en código HTML y CSS sin realizar peticiones HTTP adicionales.",
      fr: "Intégrez des icônes directement dans vos fichiers HTML et CSS sans requêtes réseau supplémentaires.",
      de: "Binden Sie Grafiken ohne zusätzliche HTTP-Anfragen direkt in Stylesheets und HTML ein.",
      pt: "Incorpore ícones e gráficos diretamente no código HTML e CSS sem requisições de rede extras.",
    }
  },

  "how-to-convert-base64-string-to-image-file": {
    title: {
      es: "Cómo Convertir Código Base64 en Archivos de Imagen Descargables",
      fr: "Comment Transformer du Code Base64 en Fichier Image Téléchargeable",
      de: "Wie man Base64-Code in herunterladbare Bilddateien umwandelt",
      pt: "Como Converter Código Base64 em Arquivo de Imagem Baixável",
    },
    excerpt: {
      es: "Pega una cadena Data URI o Base64 y descárgala al instante como archivo PNG, JPG o WebP en tu ordenador.",
      fr: "Collez une chaîne Base64 et récupérez immédiatement le fichier image original sur votre disque.",
      de: "Fügen Sie Base64-Text ein und speichern Sie das Originalbild als PNG oder JPG auf Ihrem Gerät.",
      pt: "Cole uma string Base64 e baixe a imagem original em formato PNG, JPG ou WebP imediatamente.",
    }
  },

  "how-to-create-permanent-free-qr-codes": {
    title: {
      es: "Cómo Crear Códigos QR Gratis Que No Caducan Nunca",
      fr: "Comment Créer des Codes QR Gratuits Sans Expiration",
      de: "Wie man dauerhaft kostenlose QR-Codes ohne Ablaufdatum erstellt",
      pt: "Como Criar Códigos QR Grátis Que Nunca Expiram",
    },
    excerpt: {
      es: "Genera códigos QR directos para tu menú, Wi-Fi o tarjeta de presentación sin enlaces intermedios de pago.",
      fr: "Créez des QR codes directs sans intermédiaires payants ni redirections publicitaires.",
      de: "Erstellen Sie statische QR-Codes für WLAN, Menüs und Visitenkarten ohne versteckte Abo-Fallen.",
      pt: "Gere códigos QR diretos para Wi-Fi, cardápios e links sem taxas ou links que expiram.",
    }
  }
};
