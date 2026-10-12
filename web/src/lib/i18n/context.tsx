"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "it" | "es" | "fr" | "de" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const DICTIONARY: Record<Language, Record<string, string>> = {
  en: {
    // Brand & Header
    "brand.tagline": "Free & Private In-Browser File Tools",
    "badge.clientSide": "100% Client-Side",
    "nav.allTools": "All Tools",
    "nav.pdf": "PDF",
    "nav.images": "Images",
    "nav.audio": "Audio",
    "nav.zip": "ZIP",
    "nav.data": "Data & Text",
    "nav.privacy": "Privacy Guarantee",

    // Hero
    "hero.pill": "No files touch our server • 100% In-Browser Processing",
    "hero.title1": "All your file tools, ",
    "hero.titleHighlight": "100% free and private",
    "hero.subtitle": "Merge PDFs, convert images, compress files, extract ZIPs, and calculate hashes directly inside your device's memory. No signup, no limits, zero server uploads.",
    "hero.searchPlaceholder": "Search tool (e.g. convert ogg to mp3, merge pdf, svg to png)...",
    "hero.all": "All Tools",
    "hero.pdfCategory": "PDF & Documents",
    "hero.imageCategory": "Images (WebP/PNG/JPG)",
    "hero.audioCategory": "Audio (OGG/MP3/WAV)",
    "hero.archiveCategory": "ZIP Archives",
    "hero.textCategory": "Data & Crypto",

    // Privacy Banner
    "privacyBanner.title": "Absolute Privacy Guarantee: 100% Client-Side Processing",
    "privacyBanner.desc": "Unlike traditional file converters that upload your confidential files to remote cloud servers, FileOmniTool runs entirely inside your browser using WebAssembly and HTML5 Canvas. Your files are never uploaded or stored on any server.",
    "privacyBanner.btn": "How it works",
    "privacyBanner.bullet1": "Zero Uploads: No bytes ever leave your device",
    "privacyBanner.bullet2": "Instant Speed: No queue or cloud processing delays",
    "privacyBanner.bullet3": "Hardware Accelerated via WebAssembly & Web APIs",

    // Section Titles
    "tools.sectionTitle": "Available Tools",
    "tools.sectionSubtitle": "Select a tool to start instant processing in your browser",
    "tools.noResults": "No tools found matching",
    "tools.resetFilters": "Reset filters",
    "tools.useTool": "Open Tool",
    "tools.inBrowser": "100% In-Browser",

    // Why Section
    "why.title": "Why is FileOmniTool different from other converter sites?",
    "why.subtitle": "A transparent look at privacy, speed, and modern client-side architecture.",
    "why.card1.title": "Zero Server Uploads",
    "why.card1.desc": "Your contracts, sensitive documents, and personal photos never travel across unknown cloud servers.",
    "why.card2.title": "Instant Speed",
    "why.card2.desc": "No upload wait times. Processing leverages the hardware power of your own processor and GPU.",
    "why.card3.title": "Always Free",
    "why.card3.desc": "Because we don't pay for heavy cloud compute servers, this service is and will remain 100% free.",
    "why.card4.title": "WebAssembly & HTML5",
    "why.card4.desc": "Built with cutting-edge browser engines for maximum memory efficiency and security.",

    // Dropzone & General Tool UI
    "dropzone.default": "Drag & drop your files here or click to browse",
    "dropzone.maxSize": "Max file size",
    "dropzone.perFile": "per file • 100% private local execution",
    "dropzone.browseBtn": "Choose from your device",
    "dropzone.errorEmpty": "The selected file is empty (0 bytes).",
    "tool.howItWorks": "How to use",
    "tool.faq": "Frequently Asked Questions (FAQ)",
    "tool.processing": "Processing in your browser...",
    "tool.download": "Download Processed File",
    "tool.processAnother": "Process another",
    "tool.privacyNote": "100% In-Browser • Your files never leave your device",
    "tool.remove": "Remove",
    "tool.removeAll": "Remove all",
    "tool.changeFile": "Change file",

    // Embed Widget
    "tool.embedBtn": "Embed Tool",
    "tool.embedTitle": "Embed this tool on your website",
    "tool.embedDesc": "Copy and paste this HTML snippet to embed this free, 100% private in-browser tool directly on your website or blog.",
    "tool.embedCopy": "Copy Embed Code",
    "tool.embedCopied": "Copied to clipboard!",

    // Ad Banner
    "ad.label": "SPONSORED ADVERTISEMENT",
    "ad.desc": "Google AdSense Ready • Fixed Dimensions (Zero CLS)",

    // Footer
    "footer.desc": "The complete platform for free in-browser file tools. All files are manipulated locally in your browser memory via WebAssembly/Canvas without ever hitting remote servers.",
    "footer.privacyNote": "No logs, no file tracking, 100% privacy respected.",
    "footer.popular": "Popular Tools",
    "footer.info": "Information & Privacy",
    "footer.privacyGuarantee": "Zero-Upload Privacy Guarantee",
    "footer.cookiePolicy": "Cookie & GDPR Consent (TCF 2.2)",
    "footer.terms": "Terms of Service",
    "footer.rights": "All rights reserved. Supported by non-intrusive ads.",
    "footer.builtWith": "Built with care for your data privacy",

    // Navigation & Categories
    "nav.guides": "Guides & Tutorials",
    "category.pdf": "PDF Suite",
    "category.image": "Image Suite",
    "category.audio": "Audio & Video",
    "category.document": "Document & Office",
    "category.text": "Text & Dev",
    "category.privacy": "Privacy & Security",

    // Guides Section
    "guides.breadcrumb": "Guides & Tutorials",
    "guides.heroPill": "Master Your Digital Files",
    "guides.heroTitle": "Guides, Tutorials & ",
    "guides.heroHighlight": "Privacy Best Practices",
    "guides.heroSubtitle": "Practical walkthroughs for manipulating PDFs, optimizing photos, converting media, and securing your documents directly in your browser without uploading anything online.",
    "guides.readTime": "read",
    "guides.zeroUploads": "Zero Uploads",
    "guides.readGuide": "Read Guide",
    "guides.readyTitle": "Ready to work with your files?",
    "guides.readySubtitle": "Browse our complete suite of 75 in-browser utilities. 100% private, free forever, no installation required.",
    "guides.readyBtn": "Browse All 75 Free Tools",
    "guides.freeTool": "Free In-Browser Tool",
    "guides.launchTool": "Launch Tool Now",
    "guides.whyLocal": "Why In-Browser Processing Matters",
    "guides.stepByStep": "Step-by-Step Walkthrough",
    "guides.techArch": "Technical Architecture & Security",
    "guides.faqTitle": "Frequently Asked Questions (FAQ)",
    "guides.authorRole": "Author & Developer",
    "guides.authorBio": "Software developer and web privacy advocate. Every procedure outlined in this guide has been personally field-tested and verified across Windows 11, macOS Sonoma, and mobile browsers (Safari iOS, Chrome Android) to guarantee 100% in-browser processing with zero cloud uploads.",
    "guides.fieldVerified": "Field Verified",
    "guides.zeroLogs": "Zero logs, zero server",
    "guides.freeNoSignup": "100% Free, no signup",
    "guides.moreGuides": "More Practical Guides",
    "guides.viewAllGuides": "View all guides →",

    // Tool Detail Page
    "tool.fullTutorial": "Full Tutorial:",
    "tool.relatedTools": "Related & Recommended Tools",
    "tool.viewAllTools": "View all 75 tools →",

    // Home Page
    "home.allToolsTitle": "All 75 Free In-Browser File Tools",
    "home.allToolsSubtitle": "Instant client-side file tools with zero cloud uploads and 100% privacy guarantee.",

    // Footer Guides
    "footer.guidesTitle": "Step-by-Step Guides & Tutorials",
    "footer.allGuides": "All guides →",
  },
  it: {
    // Brand & Header
    "brand.tagline": "Strumenti file gratuiti & privati nel browser",
    "badge.clientSide": "100% Client-Side",
    "nav.allTools": "Tutti i Tool",
    "nav.pdf": "PDF",
    "nav.images": "Immagini",
    "nav.audio": "Audio",
    "nav.zip": "ZIP",
    "nav.data": "Dati & Testo",
    "nav.privacy": "Garanzia Privacy",

    // Hero
    "hero.pill": "Nessun file tocca il nostro server • Elaborazione 100% in-browser",
    "hero.title1": "Tutti gli strumenti per i tuoi file, ",
    "hero.titleHighlight": "liberi e privati al 100%",
    "hero.subtitle": "Unisci PDF, converti immagini, crea archivi ZIP e calcola hash direttamente nella memoria del tuo dispositivo. Gratuito, senza registrazione e senza limiti.",
    "hero.searchPlaceholder": "Cerca strumento (es. converti ogg in mp3, unisci pdf, svg in png)...",
    "hero.all": "Tutti i Tool",
    "hero.pdfCategory": "PDF & Documenti",
    "hero.imageCategory": "Immagini (WebP/PNG/JPG)",
    "hero.audioCategory": "Audio (OGG/MP3/WAV)",
    "hero.archiveCategory": "Archivi ZIP",
    "hero.textCategory": "Dati & Crittografia",

    // Privacy Banner
    "privacyBanner.title": "Garanzia Assoluta di Privacy: Elaborazione 100% Client-Side",
    "privacyBanner.desc": "A differenza di altri servizi online che caricano i tuoi documenti riservati su cloud remoti, FileOmniTool esegue tutte le operazioni direttamente sul tuo browser usando WebAssembly e HTML5. I tuoi file non vengono mai inviati via internet né memorizzati su alcun server.",
    "privacyBanner.btn": "Scopri come funziona",
    "privacyBanner.bullet1": "Zero upload: Nessun dato lascia il tuo PC",
    "privacyBanner.bullet2": "Istantaneo: Nessuna coda di elaborazione",
    "privacyBanner.bullet3": "Potenza Hardware locale via WebAssembly",

    // Section Titles
    "tools.sectionTitle": "Strumenti Disponibili",
    "tools.sectionSubtitle": "Seleziona uno strumento per avviare l'elaborazione istantanea nel browser",
    "tools.noResults": "Nessun tool trovato per la ricerca",
    "tools.resetFilters": "Reimposta filtri",
    "tools.useTool": "Usa Tool",
    "tools.inBrowser": "100% In-Browser",

    // Why Section
    "why.title": "Perché FileOmniTool è diverso dagli altri siti di conversione?",
    "why.subtitle": "Un confronto trasparente sulla privacy, velocità e architettura tecnica.",
    "why.card1.title": "Zero Upload su Server",
    "why.card1.desc": "I tuoi contratti, documenti sensibili e immagini personali non transitano mai su server cloud sconosciuti.",
    "why.card2.title": "Velocità Immediata",
    "why.card2.desc": "Nessun tempo di upload o download remoto. L'elaborazione usa la potenza di calcolo della tua scheda madre e CPU.",
    "why.card3.title": "Sempre Gratuito",
    "why.card3.desc": "Poiché non dobbiamo sostenere costi per server di calcolo pesanti, il servizio è e rimarrà 100% gratuito per tutti.",
    "why.card4.title": "WebAssembly & HTML5",
    "why.card4.desc": "Architettura all'avanguardia con compilazione nativa e motori ottimizzati per la massima efficienza in memoria.",

    // Dropzone & General Tool UI
    "dropzone.default": "Trascina qui i tuoi file oppure clicca per selezionarli",
    "dropzone.maxSize": "Dimensione massima",
    "dropzone.perFile": "per file • Elaborazione locale 100% privata",
    "dropzone.browseBtn": "Scegli dal tuo dispositivo",
    "dropzone.errorEmpty": "Il file selezionato è vuoto (0 byte).",
    "tool.howItWorks": "Come utilizzare",
    "tool.faq": "Domande Frequenti (FAQ)",
    "tool.processing": "Elaborazione in corso nel browser...",
    "tool.download": "Scarica File Pronto",
    "tool.processAnother": "Elabora un altro",
    "tool.privacyNote": "100% In-Browser • I tuoi file non lasciano mai il dispositivo",
    "tool.remove": "Rimuovi",
    "tool.removeAll": "Rimuovi tutti",
    "tool.changeFile": "Cambia file",

    // Embed Widget
    "tool.embedBtn": "Incorpora Tool",
    "tool.embedTitle": "Incorpora questo strumento sul tuo sito web",
    "tool.embedDesc": "Copia e incolla questo codice HTML per offrire questo strumento gratuito e 100% privato direttamente sul tuo blog o sito web.",
    "tool.embedCopy": "Copia Codice HTML",
    "tool.embedCopied": "Copiato negli appunti!",

    // Ad Banner
    "ad.label": "SPAZIO PUBBLICITARIO SPONSORIZZATO",
    "ad.desc": "Google AdSense Ready • Dimensioni fisse protette (Zero CLS)",

    // Footer
    "footer.desc": "La piattaforma completa di strumenti gratuiti per convertire, dividere, unire e modificare file. Tutti i file vengono elaborati localmente nella memoria del tuo browser WebAssembly/Canvas senza essere mai trasferiti su server remoti.",
    "footer.privacyNote": "Nessun log, nessun tracking di file, 100% rispetto della privacy.",
    "footer.popular": "Strumenti Popolari",
    "footer.info": "Informazioni & Privacy",
    "footer.privacyGuarantee": "Garanzia Privacy Zero-Upload",
    "footer.cookiePolicy": "Cookie & Consenso GDPR (CMP TCF 2.2)",
    "footer.terms": "Termini di Servizio",
    "footer.rights": "Tutti i diritti riservati. Sostenuto da pubblicità non invasiva.",
    "footer.builtWith": "Costruito con cura per la sicurezza dei tuoi dati",

    // Navigation & Categories
    "nav.guides": "Guide & Tutorial",
    "category.pdf": "Suite PDF",
    "category.image": "Suite Immagini",
    "category.audio": "Audio e Video",
    "category.document": "Documenti & Office",
    "category.text": "Testo & Dev",
    "category.privacy": "Privacy & Sicurezza",

    // Guides Section
    "guides.breadcrumb": "Guide e Tutorial",
    "guides.heroPill": "Padroneggia i tuoi file digitali",
    "guides.heroTitle": "Guide, Tutorial & ",
    "guides.heroHighlight": "Best Practice per la Privacy",
    "guides.heroSubtitle": "Istruzioni pratiche per modificare PDF, ottimizzare foto, convertire file multimediali e proteggere i tuoi documenti direttamente nel browser senza caricare nulla online.",
    "guides.readTime": "lettura",
    "guides.zeroUploads": "Zero Upload su Server",
    "guides.readGuide": "Leggi Guida",
    "guides.readyTitle": "Pronto a elaborare i tuoi file?",
    "guides.readySubtitle": "Esplora la nostra suite completa di 75 strumenti gratuiti. 100% privati, gratuiti per sempre, senza registrazione.",
    "guides.readyBtn": "Esplora tutti i 75 strumenti gratuiti",
    "guides.freeTool": "Strumento Gratuito nel Browser",
    "guides.launchTool": "Avvia Strumento Ora",
    "guides.whyLocal": "Perché l'elaborazione locale è fondamentale",
    "guides.stepByStep": "Procedura Passo-Passo",
    "guides.techArch": "Architettura Tecnica & Sicurezza",
    "guides.faqTitle": "Domande Frequenti (FAQ)",
    "guides.authorRole": "Autore & Sviluppatore",
    "guides.authorBio": "Sviluppatore software e appassionato di privacy digitale. Ogni procedura descritta in questa guida è stata testata e verificata personalmente su Windows 11, macOS Sonoma e browser mobili (Safari iOS e Chrome Android) per confermare l'elaborazione al 100% in-browser senza caricamento su server.",
    "guides.fieldVerified": "Verifica sul campo",
    "guides.zeroLogs": "Zero log, zero server",
    "guides.freeNoSignup": "100% Gratuito senza iscrizione",
    "guides.moreGuides": "Altre Guide Consigliate",
    "guides.viewAllGuides": "Vedi tutte le guide →",

    // Tool Detail Page
    "tool.fullTutorial": "Guida completa:",
    "tool.relatedTools": "Strumenti Correlati & Consigliati",
    "tool.viewAllTools": "Vedi tutti i 75 strumenti →",

    // Home Page
    "home.allToolsTitle": "Tutti i 75 Strumenti per File Gratuiti",
    "home.allToolsSubtitle": "Accesso immediato senza login, limiti di dimensione o caricamento su cloud server.",

    // Footer Guides
    "footer.guidesTitle": "Guide e Tutorial Passo-Passo",
    "footer.allGuides": "Tutte le guide →",
  },
  es: {
    // Brand & Header
    "brand.tagline": "Herramientas de archivos gratuitas y privadas en el navegador",
    "badge.clientSide": "100% en el Navegador",
    "nav.allTools": "Todas las herramientas",
    "nav.pdf": "PDF",
    "nav.images": "Imágenes",
    "nav.audio": "Audio",
    "nav.zip": "ZIP",
    "nav.data": "Datos y Texto",
    "nav.privacy": "Garantía de Privacidad",

    // Hero
    "hero.pill": "Ningún archivo toca nuestros servidores • Procesamiento 100% en el navegador",
    "hero.title1": "Todas las herramientas de archivos, ",
    "hero.titleHighlight": "100% gratis y privadas",
    "hero.subtitle": "Une PDFs, convierte imágenes, extrae archivos ZIP y genera hashes directamente en la memoria de tu dispositivo. Sin registro, sin límites y sin subidas a la nube.",
    "hero.searchPlaceholder": "Buscar herramienta (ej. convertir ogg a mp3, unir pdf, svg a png)...",
    "hero.all": "Todas",
    "hero.pdfCategory": "PDF y Documentos",
    "hero.imageCategory": "Imágenes (WebP/PNG/JPG)",
    "hero.audioCategory": "Audio (OGG/MP3/WAV)",
    "hero.archiveCategory": "Archivos ZIP",
    "hero.textCategory": "Datos y Criptografía",

    // Privacy Banner
    "privacyBanner.title": "Garantía Absoluta de Privacidad: Procesamiento 100% Client-Side",
    "privacyBanner.desc": "A diferencia de otros convertidores online que suben tus documentos confidenciales a servidores en la nube, FileOmniTool funciona enteramente en tu navegador mediante WebAssembly y HTML5. Tus archivos nunca se suben ni se almacenan en ningún servidor.",
    "privacyBanner.btn": "Cómo funciona",
    "privacyBanner.bullet1": "Cero Subidas: Ningún dato sale de tu dispositivo",
    "privacyBanner.bullet2": "Velocidad Inmediata: Sin colas ni esperas en la nube",
    "privacyBanner.bullet3": "Aceleración de hardware local mediante WebAssembly",

    // Section Titles
    "tools.sectionTitle": "Herramientas Disponibles",
    "tools.sectionSubtitle": "Selecciona una herramienta para comenzar el procesamiento instantáneo en tu navegador",
    "tools.noResults": "No se encontraron herramientas que coincidan con",
    "tools.resetFilters": "Restablecer filtros",
    "tools.useTool": "Abrir Herramienta",
    "tools.inBrowser": "100% en el Navegador",

    // Why Section
    "why.title": "¿Por qué FileOmniTool es diferente a otros sitios de conversión?",
    "why.subtitle": "Una mirada transparente a la privacidad, la velocidad y la arquitectura client-side.",
    "why.card1.title": "Cero Subidas a Servidores",
    "why.card1.desc": "Tus contratos, documentos sensibles y fotos personales nunca viajan por servidores desconocidos.",
    "why.card2.title": "Velocidad Inmediata",
    "why.card2.desc": "Sin tiempos de espera. El procesamiento aprovecha la potencia de tu propio procesador y gráfica.",
    "why.card3.title": "Siempre Gratuito",
    "why.card3.desc": "Al no tener costes de servidores cloud masivos, este servicio es y seguirá siendo 100% gratuito.",
    "why.card4.title": "WebAssembly y HTML5",
    "why.card4.desc": "Desarrollado con motores web modernos para máxima eficiencia de memoria y seguridad.",

    // Dropzone & General Tool UI
    "dropzone.default": "Arrastra tus archivos aquí o haz clic para seleccionar",
    "dropzone.maxSize": "Tamaño máximo",
    "dropzone.perFile": "por archivo • Procesamiento local 100% privado",
    "dropzone.browseBtn": "Elegir desde tu dispositivo",
    "dropzone.errorEmpty": "El archivo seleccionado está vacío (0 bytes).",
    "tool.howItWorks": "Cómo usar",
    "tool.faq": "Preguntas Frecuentes (FAQ)",
    "tool.processing": "Procesando en tu navegador...",
    "tool.download": "Descargar Archivo Procesado",
    "tool.processAnother": "Procesar otro",
    "tool.privacyNote": "100% en el Navegador • Tus archivos nunca salen de tu dispositivo",
    "tool.remove": "Eliminar",
    "tool.removeAll": "Eliminar todos",
    "tool.changeFile": "Cambiar archivo",

    // Embed Widget
    "tool.embedBtn": "Incrustar Herramienta",
    "tool.embedTitle": "Incrusta esta herramienta en tu sitio web",
    "tool.embedDesc": "Copia y pega este código HTML para ofrecer esta herramienta gratuita y 100% privada directamente en tu blog o web.",
    "tool.embedCopy": "Copiar Código HTML",
    "tool.embedCopied": "¡Copiado al portapapeles!",

    // Ad Banner
    "ad.label": "PUBLICIDAD PATROCINADA",
    "ad.desc": "Google AdSense Ready • Dimensiones fijas (Zero CLS)",

    // Footer
    "footer.desc": "La plataforma completa de herramientas gratuitas de archivos en el navegador. Todos los archivos se procesan localmente en tu memoria vía WebAssembly/Canvas sin enviarse jamás a servidores remotos.",
    "footer.privacyNote": "Sin registros, sin rastreo de archivos, 100% privacidad garantizada.",
    "footer.popular": "Herramientas Populares",
    "footer.info": "Información y Privacidad",
    "footer.privacyGuarantee": "Garantía de Privacidad Zero-Upload",
    "footer.cookiePolicy": "Cookies y Consentimiento RGPD (TCF 2.2)",
    "footer.terms": "Términos del Servicio",
    "footer.rights": "Todos los derechos reservados. Mantenido con anuncios no invasivos.",
    "footer.builtWith": "Creado con dedicación para proteger tu privacidad",

    // Navigation & Categories
    "nav.guides": "Guías y Tutoriales",
    "category.pdf": "Suite PDF",
    "category.image": "Suite de Imágenes",
    "category.audio": "Audio y Video",
    "category.document": "Documentos y Oficina",
    "category.text": "Texto y Dev",
    "category.privacy": "Privacidad y Seguridad",

    // Guides Section
    "guides.breadcrumb": "Guías y Tutoriales",
    "guides.heroPill": "Domina tus archivos digitales",
    "guides.heroTitle": "Guías, Tutoriales y ",
    "guides.heroHighlight": "Mejores Prácticas de Privacidad",
    "guides.heroSubtitle": "Instrucciones prácticas para modificar PDF, optimizar fotos, convertir archivos multimedia y proteger tus documentos directamente en el navegador sin subir nada a la red.",
    "guides.readTime": "lectura",
    "guides.zeroUploads": "Cero Subidas a Servidores",
    "guides.readGuide": "Leer Guía",
    "guides.readyTitle": "¿Listo para trabajar con tus archivos?",
    "guides.readySubtitle": "Explora nuestra suite completa de 75 herramientas gratuitas en el navegador. 100% privadas, gratis para siempre, sin instalación.",
    "guides.readyBtn": "Explorar las 75 herramientas gratuitas",
    "guides.freeTool": "Herramienta Gratuita en el Navegador",
    "guides.launchTool": "Abrir Herramienta Ahora",
    "guides.whyLocal": "Por qué es fundamental el procesamiento local",
    "guides.stepByStep": "Procedimiento Paso a Paso",
    "guides.techArch": "Arquitectura Técnica y Seguridad",
    "guides.faqTitle": "Preguntas Frecuentes (FAQ)",
    "guides.authorRole": "Autor y Desarrollador",
    "guides.authorBio": "Desarrollador de software y defensor de la privacidad digital. Cada procedimiento descrito en esta guía ha sido probado y verificado personalmente en Windows 11, macOS Sonoma y navegadores móviles (Safari iOS, Chrome Android) para garantizar el procesamiento 100% en el navegador sin subir archivos a la nube.",
    "guides.fieldVerified": "Verificado en la práctica",
    "guides.zeroLogs": "Sin registros ni servidores",
    "guides.freeNoSignup": "100% Gratis sin registro",
    "guides.moreGuides": "Más Guías Prácticas",
    "guides.viewAllGuides": "Ver todas las guías →",

    // Tool Detail Page
    "tool.fullTutorial": "Guía completa:",
    "tool.relatedTools": "Herramientas Relacionadas y Recomendadas",
    "tool.viewAllTools": "Ver las 75 herramientas →",

    // Home Page
    "home.allToolsTitle": "Las 75 Herramientas de Archivos Gratuitas",
    "home.allToolsSubtitle": "Acceso inmediato sin registro, límites de tamaño ni subidas a servidores en la nube.",

    // Footer Guides
    "footer.guidesTitle": "Guías y Tutoriales Paso a Paso",
    "footer.allGuides": "Todas las guías →",
  },
  fr: {
    // Brand & Header
    "brand.tagline": "Outils de fichiers gratuits et privés dans votre navigateur",
    "badge.clientSide": "100% Côté Client",
    "nav.allTools": "Tous les outils",
    "nav.pdf": "PDF",
    "nav.images": "Images",
    "nav.audio": "Audio",
    "nav.zip": "ZIP",
    "nav.data": "Données et Texte",
    "nav.privacy": "Garantie de Confidentialité",

    // Hero
    "hero.pill": "Aucun fichier n'atteint nos serveurs • Traitement 100% dans le navigateur",
    "hero.title1": "Tous vos outils de fichiers, ",
    "hero.titleHighlight": "100% gratuits et privés",
    "hero.subtitle": "Fusionnez des PDF, convertissez des images, extrayez des archives ZIP et calculez des hashs directement dans la mémoire de votre appareil. Sans inscription, sans limites et sans aucun téléversement.",
    "hero.searchPlaceholder": "Rechercher un outil (ex: convertir ogg en mp3, fusionner pdf, svg en png)...",
    "hero.all": "Tous les outils",
    "hero.pdfCategory": "PDF et Documents",
    "hero.imageCategory": "Images (WebP/PNG/JPG)",
    "hero.audioCategory": "Audio (OGG/MP3/WAV)",
    "hero.archiveCategory": "Archives ZIP",
    "hero.textCategory": "Données et Cryptographie",

    // Privacy Banner
    "privacyBanner.title": "Garantie Absolue de Confidentialité : Traitement 100% Côté Client",
    "privacyBanner.desc": "Contrairement aux convertisseurs classiques qui envoient vos fichiers sensibles sur des serveurs distants, FileOmniTool fonctionne intégralement dans votre navigateur grâce à WebAssembly et HTML5 Canvas. Vos fichiers ne sont jamais téléchargés ni stockés.",
    "privacyBanner.btn": "Comment ça fonctionne",
    "privacyBanner.bullet1": "Zéro Téléversement : Aucun octet ne quitte votre appareil",
    "privacyBanner.bullet2": "Vitesse Instantanée : Pas de file d'attente ni de délai cloud",
    "privacyBanner.bullet3": "Accélération matérielle locale via WebAssembly",

    // Section Titles
    "tools.sectionTitle": "Outils Disponibles",
    "tools.sectionSubtitle": "Choisissez un outil pour démarrer le traitement instantané dans votre navigateur",
    "tools.noResults": "Aucun outil trouvé pour",
    "tools.resetFilters": "Réinitialiser les filtres",
    "tools.useTool": "Ouvrir l'outil",
    "tools.inBrowser": "100% dans le Navigateur",

    // Why Section
    "why.title": "Pourquoi FileOmniTool est-il différent des autres convertisseurs ?",
    "why.subtitle": "Une vue transparente sur la confidentialité, la rapidité et l'architecture locale.",
    "why.card1.title": "Zéro Téléversement sur Serveur",
    "why.card1.desc": "Vos contrats, documents confidentiels et photos personnelles ne transitent jamais sur des serveurs inconnus.",
    "why.card2.title": "Vitesse Immédiate",
    "why.card2.desc": "Aucun délai de transfert réseau. Le traitement utilise la puissance brute de votre processeur et carte graphique.",
    "why.card3.title": "Toujours Gratuit",
    "why.card3.desc": "N'ayant aucun coût de serveurs de calcul volumineux, ce service est et restera 100% gratuit.",
    "why.card4.title": "WebAssembly et HTML5",
    "why.card4.desc": "Conçu avec les moteurs web modernes pour une efficacité mémoire et une sécurité optimales.",

    // Dropzone & General Tool UI
    "dropzone.default": "Glissez-déposez vos fichiers ici ou cliquez pour parcourir",
    "dropzone.maxSize": "Taille maximale",
    "dropzone.perFile": "par fichier • Traitement local 100% privé",
    "dropzone.browseBtn": "Choisir sur votre appareil",
    "dropzone.errorEmpty": "Le fichier sélectionné est vide (0 octet).",
    "tool.howItWorks": "Mode d'emploi",
    "tool.faq": "Foire Aux Questions (FAQ)",
    "tool.processing": "Traitement en cours dans votre navigateur...",
    "tool.download": "Télécharger le Fichier Traité",
    "tool.processAnother": "Traiter un autre fichier",
    "tool.privacyNote": "100% dans le Navigateur • Vos fichiers ne quittent jamais votre appareil",
    "tool.remove": "Supprimer",
    "tool.removeAll": "Tout supprimer",
    "tool.changeFile": "Changer de fichier",

    // Embed Widget
    "tool.embedBtn": "Intégrer l'outil",
    "tool.embedTitle": "Intégrez cet outil sur votre site web",
    "tool.embedDesc": "Copiez-collez ce code HTML pour offrir cet outil gratuit et 100% confidentiel directement sur votre site ou blog.",
    "tool.embedCopy": "Copier le code HTML",
    "tool.embedCopied": "Copié dans le presse-papiers !",

    // Ad Banner
    "ad.label": "ESPACE PUBLICITAIRE SPONSORISÉ",
    "ad.desc": "Google AdSense Ready • Dimensions fixes protégées (Zero CLS)",

    // Footer
    "footer.desc": "La suite complète d'outils de fichiers gratuits dans le navigateur. Tous les fichiers sont manipulés localement en mémoire via WebAssembly/Canvas sans jamais être envoyés sur des serveurs distants.",
    "footer.privacyNote": "Zéro journal, aucun pistage de fichiers, respect absolu de la vie privée.",
    "footer.popular": "Outils Populaires",
    "footer.info": "Informations et Confidentialité",
    "footer.privacyGuarantee": "Garantie Confidentialité Zéro-Téléversement",
    "footer.cookiePolicy": "Cookies et Consentement RGPD (TCF 2.2)",
    "footer.terms": "Conditions d'Utilisation",
    "footer.rights": "Tous droits réservés. Financé par des publicités non intrusives.",
    "footer.builtWith": "Développé avec soin pour préserver la confidentialité de vos données",

    // Navigation & Categories
    "nav.guides": "Guides et Tutoriels",
    "category.pdf": "Suite PDF",
    "category.image": "Suite Images",
    "category.audio": "Audio et Vidéo",
    "category.document": "Documents et Bureautique",
    "category.text": "Texte et Dev",
    "category.privacy": "Confidentialité et Sécurité",

    // Guides Section
    "guides.breadcrumb": "Guides et Tutoriels",
    "guides.heroPill": "Maîtrisez vos fichiers numériques",
    "guides.heroTitle": "Guides, Tutoriels et ",
    "guides.heroHighlight": "Meilleures Pratiques de Confidentialité",
    "guides.heroSubtitle": "Tutoriels pratiques pour manipuler des PDF, optimiser des photos, convertir des fichiers multimédias et sécuriser vos documents directement dans votre navigateur sans téléversement.",
    "guides.readTime": "lecture",
    "guides.zeroUploads": "Zéro Téléversement Serveur",
    "guides.readGuide": "Lire le Guide",
    "guides.readyTitle": "Prêt à traiter vos fichiers ?",
    "guides.readySubtitle": "Découvrez notre suite complète de 75 outils gratuits dans le navigateur. 100% privés, gratuits pour toujours, sans installation.",
    "guides.readyBtn": "Explorer les 75 outils gratuits",
    "guides.freeTool": "Outil Gratuit dans le Navigateur",
    "guides.launchTool": "Lancer l'Outil Maintenant",
    "guides.whyLocal": "Pourquoi le traitement local est essentiel",
    "guides.stepByStep": "Procédure Étape par Étape",
    "guides.techArch": "Architecture Technique et Sécurité",
    "guides.faqTitle": "Foire Aux Questions (FAQ)",
    "guides.authorRole": "Auteur et Développeur",
    "guides.authorBio": "Développeur logiciel et défenseur de la vie privée en ligne. Chaque procédure décrite dans ce guide a été testée et vérifiée personnellement sur Windows 11, macOS Sonoma et navigateurs mobiles (Safari iOS, Chrome Android) afin de garantir un traitement 100% local sans transfert cloud.",
    "guides.fieldVerified": "Vérifié sur le terrain",
    "guides.zeroLogs": "Zéro journal, aucun serveur",
    "guides.freeNoSignup": "100% Gratuit sans inscription",
    "guides.moreGuides": "Autres Guides Pratiques",
    "guides.viewAllGuides": "Voir tous les guides →",

    // Tool Detail Page
    "tool.fullTutorial": "Guide complet :",
    "tool.relatedTools": "Outils Associés et Recommandés",
    "tool.viewAllTools": "Voir les 75 outils →",

    // Home Page
    "home.allToolsTitle": "Les 75 Outils de Fichiers Gratuits dans le Navigateur",
    "home.allToolsSubtitle": "Accès instantané sans inscription, sans limite de taille ni téléversement vers le cloud.",

    // Footer Guides
    "footer.guidesTitle": "Guides et Tutoriels Étape par Étape",
    "footer.allGuides": "Tous les guides →",
  },
  de: {
    // Brand & Header
    "brand.tagline": "Kostenlose & private browserbasierte Datei-Tools",
    "badge.clientSide": "100% Client-Side",
    "nav.allTools": "Alle Werkzeuge",
    "nav.pdf": "PDF",
    "nav.images": "Bilder",
    "nav.audio": "Audio",
    "nav.zip": "ZIP",
    "nav.data": "Daten & Text",
    "nav.privacy": "Datenschutzgarantie",

    // Hero
    "hero.pill": "Keine Dateien erreichen unsere Server • 100% Verarbeitung im Browser",
    "hero.title1": "Alle Ihre Datei-Werkzeuge, ",
    "hero.titleHighlight": "100% kostenlos und privat",
    "hero.subtitle": "PDFs zusammenfügen, Bilder konvertieren, ZIPs entpacken und Prüfsummen berechnen – direkt im Arbeitsspeicher Ihres Geräts. Ohne Registrierung, ohne Limits, ohne Cloud-Uploads.",
    "hero.searchPlaceholder": "Werkzeug suchen (z.B. OGG zu MP3, PDF zusammenfügen, SVG zu PNG)...",
    "hero.all": "Alle Werkzeuge",
    "hero.pdfCategory": "PDF & Dokumente",
    "hero.imageCategory": "Bilder (WebP/PNG/JPG)",
    "hero.audioCategory": "Audio (OGG/MP3/WAV)",
    "hero.archiveCategory": "ZIP-Archive",
    "hero.textCategory": "Daten & Kryptographie",

    // Privacy Banner
    "privacyBanner.title": "Absolute Datenschutzgarantie: 100% Client-Side Verarbeitung",
    "privacyBanner.desc": "Im Gegensatz zu herkömmlichen Online-Konvertern, die Ihre vertraulichen Dokumente auf Cloud-Server laden, läuft FileOmniTool vollständig in Ihrem Browser über WebAssembly und HTML5 Canvas. Ihre Daten werden niemals hochgeladen oder gespeichert.",
    "privacyBanner.btn": "So funktioniert es",
    "privacyBanner.bullet1": "Zero Uploads: Keine Bytes verlassen Ihr Gerät",
    "privacyBanner.bullet2": "Sofortige Geschwindigkeit: Keine Warteschlangen oder Server-Verzögerungen",
    "privacyBanner.bullet3": "Hardware-beschleunigt über WebAssembly & Web APIs",

    // Section Titles
    "tools.sectionTitle": "Verfügbare Werkzeuge",
    "tools.sectionSubtitle": "Wählen Sie ein Werkzeug für die sofortige Ausführung im Browser",
    "tools.noResults": "Keine passenden Werkzeuge gefunden für",
    "tools.resetFilters": "Filter zurücksetzen",
    "tools.useTool": "Werkzeug öffnen",
    "tools.inBrowser": "100% im Browser",

    // Why Section
    "why.title": "Warum unterscheidet sich FileOmniTool von anderen Konvertern?",
    "why.subtitle": "Ein transparenter Einblick in Datenschutz, Geschwindigkeit und moderne lokale Web-Architektur.",
    "why.card1.title": "Keine Server-Uploads",
    "why.card1.desc": "Ihre Verträge, vertraulichen Dokumente und Fotos werden nie über fremde Server übertragen.",
    "why.card2.title": "Sofortige Ausführung",
    "why.card2.desc": "Keine Wartezeiten beim Hoch- und Herunterladen. Die Berechnung nutzt Ihre eigene CPU und GPU.",
    "why.card3.title": "Dauerhaft Kostenlos",
    "why.card3.desc": "Da wir keine kostspieligen Cloud-Server betreiben müssen, ist und bleibt der Dienst 100% kostenlos.",
    "why.card4.title": "WebAssembly & HTML5",
    "why.card4.desc": "Entwickelt mit modernsten Web-Technologien für höchste Speichereffizienz und Sicherheit.",

    // Dropzone & General Tool UI
    "dropzone.default": "Dateien hierher ziehen oder zum Auswählen klicken",
    "dropzone.maxSize": "Maximale Dateigröße",
    "dropzone.perFile": "pro Datei • 100% private lokale Verarbeitung",
    "dropzone.browseBtn": "Vom Gerät auswählen",
    "dropzone.errorEmpty": "Die ausgewählte Datei ist leer (0 Bytes).",
    "tool.howItWorks": "Anleitung",
    "tool.faq": "Häufig gestellte Fragen (FAQ)",
    "tool.processing": "Wird im Browser verarbeitet...",
    "tool.download": "Verarbeitete Datei herunterladen",
    "tool.processAnother": "Weitere Datei verarbeiten",
    "tool.privacyNote": "100% im Browser • Ihre Daten verlassen niemals Ihr Gerät",
    "tool.remove": "Entfernen",
    "tool.removeAll": "Alle entfernen",
    "tool.changeFile": "Datei ändern",

    // Embed Widget
    "tool.embedBtn": "Werkzeug einbetten",
    "tool.embedTitle": "Binden Sie dieses Werkzeug auf Ihrer Website ein",
    "tool.embedDesc": "Kopieren Sie diesen HTML-Code, um dieses kostenlose und 100% datenschutzkonforme Tool auf Ihrer Webseite anzubieten.",
    "tool.embedCopy": "HTML-Code kopieren",
    "tool.embedCopied": "In die Zwischenablage kopiert!",

    // Ad Banner
    "ad.label": "GESPONSERTE ANZEIGE",
    "ad.desc": "Google AdSense Bereit • Feste Maße (Zero CLS)",

    // Footer
    "footer.desc": "Die Komplettsuite für kostenlose Datei-Werkzeuge im Browser. Alle Dateien werden lokal im Speicher über WebAssembly/Canvas manipuliert, ohne jemals externe Server zu berühren.",
    "footer.privacyNote": "Keine Logs, kein Datei-Tracking, 100% garantierter Datenschutz.",
    "footer.popular": "Beliebte Werkzeuge",
    "footer.info": "Informationen & Datenschutz",
    "footer.privacyGuarantee": "Zero-Upload Datenschutzgarantie",
    "footer.cookiePolicy": "Cookies & DSGVO-Einwilligung (TCF 2.2)",
    "footer.terms": "Nutzungsbedingungen",
    "footer.rights": "Alle Rechte vorbehalten. Unterstützt durch unaufdringliche Werbung.",
    "footer.builtWith": "Entwickelt mit höchster Sorgfalt für Ihre Datensicherheit",

    // Navigation & Categories
    "nav.guides": "Anleitungen & Tutorials",
    "category.pdf": "PDF-Suite",
    "category.image": "Bilder-Suite",
    "category.audio": "Audio & Video",
    "category.document": "Dokumente & Office",
    "category.text": "Text & Dev",
    "category.privacy": "Datenschutz & Sicherheit",

    // Guides Section
    "guides.breadcrumb": "Anleitungen und Tutorials",
    "guides.heroPill": "Meistern Sie Ihre digitalen Dateien",
    "guides.heroTitle": "Anleitungen, Tutorials & ",
    "guides.heroHighlight": "Datenschutz Best Practices",
    "guides.heroSubtitle": "Praktische Anleitungen zur Bearbeitung von PDFs, Optimierung von Fotos, Konvertierung von Mediendateien und Sicherung Ihrer Dokumente direkt im Browser ohne Server-Uploads.",
    "guides.readTime": "Lesezeit",
    "guides.zeroUploads": "Keine Server-Uploads",
    "guides.readGuide": "Anleitung lesen",
    "guides.readyTitle": "Bereit, Ihre Dateien zu bearbeiten?",
    "guides.readySubtitle": "Entdecken Sie unsere Suite mit 75 kostenlosen Browser-Tools. 100% privat, dauerhaft kostenlos, ohne Installation.",
    "guides.readyBtn": "Alle 75 kostenlosen Tools entdecken",
    "guides.freeTool": "Kostenloses In-Browser-Tool",
    "guides.launchTool": "Tool jetzt starten",
    "guides.whyLocal": "Warum lokale Verarbeitung entscheidend ist",
    "guides.stepByStep": "Schritt-für-Schritt Anleitung",
    "guides.techArch": "Technische Architektur & Sicherheit",
    "guides.faqTitle": "Häufig gestellte Fragen (FAQ)",
    "guides.authorRole": "Autor & Entwickler",
    "guides.authorBio": "Softwareentwickler und Verfechter digitaler Privatsphäre. Jedes Verfahren in dieser Anleitung wurde persönlich auf Windows 11, macOS Sonoma und mobilen Browsern (Safari iOS, Chrome Android) getestet und verifiziert, um eine 100% lokale Verarbeitung ohne Server-Uploads zu garantieren.",
    "guides.fieldVerified": "Praxiserprobt & Verifiziert",
    "guides.zeroLogs": "Keine Logs, keine Server",
    "guides.freeNoSignup": "100% Kostenlos ohne Registrierung",
    "guides.moreGuides": "Weitere praktische Anleitungen",
    "guides.viewAllGuides": "Alle Anleitungen ansehen →",

    // Tool Detail Page
    "tool.fullTutorial": "Vollständige Anleitung:",
    "tool.relatedTools": "Verwandte & Empfohlene Werkzeuge",
    "tool.viewAllTools": "Alle 75 Werkzeuge ansehen →",

    // Home Page
    "home.allToolsTitle": "Alle 75 kostenlosen Datei-Werkzeuge im Browser",
    "home.allToolsSubtitle": "Sofortiger Zugriff ohne Registrierung, Größenlimits oder Uploads auf Cloud-Server.",

    // Footer Guides
    "footer.guidesTitle": "Schritt-für-Schritt Anleitungen & Tutorials",
    "footer.allGuides": "Alle Anleitungen →",
  },
  pt: {
    // Brand & Header
    "brand.tagline": "Ferramentas de arquivos gratuitas e privadas no navegador",
    "badge.clientSide": "100% no Navegador",
    "nav.allTools": "Todas as Ferramentas",
    "nav.pdf": "PDF",
    "nav.images": "Imagens",
    "nav.audio": "Áudio",
    "nav.zip": "ZIP",
    "nav.data": "Dados e Texto",
    "nav.privacy": "Garantia de Privacidade",

    // Hero
    "hero.pill": "Nenhum arquivo toca nossos servidores • Processamento 100% no navegador",
    "hero.title1": "Todas as suas ferramentas de arquivos, ",
    "hero.titleHighlight": "100% gratuitas e privadas",
    "hero.subtitle": "Junte PDFs, converta imagens, extraia arquivos ZIP e calcule hashes diretamente na memória do seu dispositivo. Sem cadastro, sem limites e sem uploads na nuvem.",
    "hero.searchPlaceholder": "Pesquisar ferramenta (ex: converter ogg para mp3, juntar pdf, svg para png)...",
    "hero.all": "Todas as Ferramentas",
    "hero.pdfCategory": "PDF e Documentos",
    "hero.imageCategory": "Imagens (WebP/PNG/JPG)",
    "hero.audioCategory": "Áudio (OGG/MP3/WAV)",
    "hero.archiveCategory": "Arquivos ZIP",
    "hero.textCategory": "Dados e Criptografia",

    // Privacy Banner
    "privacyBanner.title": "Garantia Absoluta de Privacidade: Processamento 100% Client-Side",
    "privacyBanner.desc": "Diferente de conversores online que enviam seus arquivos confidenciais para servidores remotos na nuvem, o FileOmniTool funciona integralmente no seu navegador através de WebAssembly e HTML5 Canvas. Seus arquivos nunca são enviados nem armazenados.",
    "privacyBanner.btn": "Como funciona",
    "privacyBanner.bullet1": "Zero Uploads: Nenhum byte sai do seu computador",
    "privacyBanner.bullet2": "Velocidade Imediata: Sem filas de espera ou lentidão da nuvem",
    "privacyBanner.bullet3": "Aceleração de hardware local via WebAssembly e Web APIs",

    // Section Titles
    "tools.sectionTitle": "Ferramentas Disponíveis",
    "tools.sectionSubtitle": "Selecione uma ferramenta para iniciar o processamento instantâneo no navegador",
    "tools.noResults": "Nenhuma ferramenta encontrada para",
    "tools.resetFilters": "Redefinir filtros",
    "tools.useTool": "Abrir Ferramenta",
    "tools.inBrowser": "100% no Navegador",

    // Why Section
    "why.title": "Por que o FileOmniTool é diferente de outros conversores?",
    "why.subtitle": "Uma comparação transparente sobre privacidade, rapidez e arquitetura técnica moderna.",
    "why.card1.title": "Zero Uploads para Servidores",
    "why.card1.desc": "Seus contratos, documentos confidenciais e fotos pessoais nunca viajam por servidores desconhecidos.",
    "why.card2.title": "Velocidade Imediata",
    "why.card2.desc": "Sem tempos de espera para upload. O processamento aproveita o poder bruto do seu próprio processador.",
    "why.card3.title": "Sempre Gratuito",
    "why.card3.desc": "Como não pagamos por servidores de processamento pesados na nuvem, este serviço é e continuará 100% gratuito.",
    "why.card4.title": "WebAssembly e HTML5",
    "why.card4.desc": "Construído com tecnologia web moderna para máxima eficiência de memória e segurança.",

    // Dropzone & General Tool UI
    "dropzone.default": "Arraste seus arquivos aqui ou clique para selecionar",
    "dropzone.maxSize": "Tamanho máximo",
    "dropzone.perFile": "por arquivo • Processamento local 100% privado",
    "dropzone.browseBtn": "Escolher do seu dispositivo",
    "dropzone.errorEmpty": "O arquivo selecionado está vazio (0 bytes).",
    "tool.howItWorks": "Como usar",
    "tool.faq": "Perguntas Frequentes (FAQ)",
    "tool.processing": "Processando no seu navegador...",
    "tool.download": "Baixar Arquivo Processado",
    "tool.processAnother": "Processar outro arquivo",
    "tool.privacyNote": "100% no Navegador • Seus arquivos nunca saem do seu dispositivo",
    "tool.remove": "Remover",
    "tool.removeAll": "Remover todos",
    "tool.changeFile": "Alterar arquivo",

    // Embed Widget
    "tool.embedBtn": "Incorporar Ferramenta",
    "tool.embedTitle": "Incorpore esta ferramenta no seu site",
    "tool.embedDesc": "Copie e cole este código HTML para oferecer esta ferramenta gratuita e 100% privada diretamente no seu site ou blog.",
    "tool.embedCopy": "Copiar Código HTML",
    "tool.embedCopied": "Copiado para a área de transferência!",

    // Ad Banner
    "ad.label": "ESPAÇO PUBLICITÁRIO PATROCINADO",
    "ad.desc": "Google AdSense Ready • Dimensões fixas (Zero CLS)",

    // Footer
    "footer.desc": "A suíte completa de ferramentas gratuitas para manipular arquivos no navegador. Todos os arquivos são processados localmente via WebAssembly/Canvas sem nunca serem transmitidos para servidores remotos.",
    "footer.privacyNote": "Sem logs, sem rastreamento de arquivos, 100% de privacidade respeitada.",
    "footer.popular": "Ferramentas Populares",
    "footer.info": "Informações e Privacidade",
    "footer.privacyGuarantee": "Garantia de Privacidade Zero-Upload",
    "footer.cookiePolicy": "Cookies e Consentimento LGPD/GDPR (TCF 2.2)",
    "footer.terms": "Termos de Uso",
    "footer.rights": "Todos os direitos reservados. Mantido por anúncios não invasivos.",
    "footer.builtWith": "Desenvolvido com carinho para garantir a privacidade dos seus dados",

    // Navigation & Categories
    "nav.guides": "Guias e Tutoriais",
    "category.pdf": "Suíte PDF",
    "category.image": "Suíte de Imagens",
    "category.audio": "Áudio e Vídeo",
    "category.document": "Documentos e Escritório",
    "category.text": "Texto e Dev",
    "category.privacy": "Privacidade e Segurança",

    // Guides Section
    "guides.breadcrumb": "Guias e Tutoriais",
    "guides.heroPill": "Domine seus arquivos digitais",
    "guides.heroTitle": "Guias, Tutoriais e ",
    "guides.heroHighlight": "Melhores Práticas de Privacidade",
    "guides.heroSubtitle": "Instruções práticas para manipular PDFs, otimizar fotos, converter mídias e proteger seus documentos diretamente no navegador sem enviar arquivos para a nuvem.",
    "guides.readTime": "leitura",
    "guides.zeroUploads": "Zero Uploads para Servidores",
    "guides.readGuide": "Ler Guia",
    "guides.readyTitle": "Pronto para processar seus arquivos?",
    "guides.readySubtitle": "Explore nossa suíte completa de 75 ferramentas gratuitas no navegador. 100% privadas, gratuitas para sempre, sem instalação.",
    "guides.readyBtn": "Explorar todas as 75 ferramentas gratuitas",
    "guides.freeTool": "Ferramenta Gratuita no Navegador",
    "guides.launchTool": "Iniciar Ferramenta Agora",
    "guides.whyLocal": "Por que o processamento local é fundamental",
    "guides.stepByStep": "Passo a Passo Detalhado",
    "guides.techArch": "Arquitetura Técnica e Segurança",
    "guides.faqTitle": "Perguntas Frequentes (FAQ)",
    "guides.authorRole": "Autor e Desenvolvedor",
    "guides.authorBio": "Desenvolvedor de software e defensor da privacidade digital. Cada procedimento descrito neste guia foi testado e verificado pessoalmente no Windows 11, macOS Sonoma e navegadores móveis (Safari iOS, Chrome Android) para garantir processamento 100% local sem uploads na nuvem.",
    "guides.fieldVerified": "Verificado na prática",
    "guides.zeroLogs": "Sem registros nem servidores",
    "guides.freeNoSignup": "100% Grátis sem cadastro",
    "guides.moreGuides": "Mais Guias Práticos",
    "guides.viewAllGuides": "Ver todos os guias →",

    // Tool Detail Page
    "tool.fullTutorial": "Guia completo:",
    "tool.relatedTools": "Ferramentas Relacionadas e Recomendadas",
    "tool.viewAllTools": "Ver todas as 75 ferramentas →",

    // Home Page
    "home.allToolsTitle": "Todas as 75 Ferramentas Gratuitas de Arquivos",
    "home.allToolsSubtitle": "Acesso imediato sem login, limites de tamanho ou uploads para servidores na nuvem.",

    // Footer Guides
    "footer.guidesTitle": "Guias e Tutoriais Passo a Passo",
    "footer.allGuides": "Todos os guias →",
  }
};

export const AVAILABLE_LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
];

const LanguageContext = createContext<LanguageContextType>({
  language: "it",
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode; initialLanguage?: Language }> = ({ children, initialLanguage }) => {
  const [language, setLanguageState] = useState<Language>(initialLanguage || "it");

  useEffect(() => {
    if (initialLanguage) {
      setLanguageState(initialLanguage);
      document.documentElement.lang = initialLanguage;
      return;
    }

    // 1. Controlla preferenza esplicita salvata in localStorage
    const saved = localStorage.getItem("fileomnitool_lang") as Language | null;
    const validCodes: Language[] = ["en", "it", "es", "fr", "de", "pt"];
    if (saved && validCodes.includes(saved)) {
      setLanguageState(saved);
      document.documentElement.lang = saved;
      return;
    }

    // 2. Altrimenti rileva dalla lingua di sistema/browser dell'utente
    if (typeof window !== "undefined" && window.navigator) {
      const browserLang = (window.navigator.language || "").toLowerCase();
      if (browserLang.startsWith("it")) {
        setLanguageState("it");
        document.documentElement.lang = "it";
      } else if (browserLang.startsWith("es")) {
        setLanguageState("es");
        document.documentElement.lang = "es";
      } else if (browserLang.startsWith("fr")) {
        setLanguageState("fr");
        document.documentElement.lang = "fr";
      } else if (browserLang.startsWith("de")) {
        setLanguageState("de");
        document.documentElement.lang = "de";
      } else if (browserLang.startsWith("pt")) {
        setLanguageState("pt");
        document.documentElement.lang = "pt";
      } else {
        setLanguageState("en");
        document.documentElement.lang = "en";
      }
    }
  }, [initialLanguage]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("fileomnitool_lang", lang);
      document.documentElement.lang = lang;
    }
  };

  const t = (key: string): string => {
    return DICTIONARY[language]?.[key] || DICTIONARY["en"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
