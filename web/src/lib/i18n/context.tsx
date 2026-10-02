"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "it";

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
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Controlla preferenza salvata in localStorage
    const saved = localStorage.getItem("fileomnitool_lang") as Language | null;
    if (saved && (saved === "en" || saved === "it")) {
      setLanguageState(saved);
      return;
    }

    // Altrimenti rileva dalla lingua del browser dell'utente
    if (typeof window !== "undefined" && window.navigator) {
      const browserLang = window.navigator.language.toLowerCase();
      if (browserLang.startsWith("it")) {
        setLanguageState("it");
      } else {
        setLanguageState("en"); // Inglese per tutti gli altri paesi
      }
    }
  }, []);

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
