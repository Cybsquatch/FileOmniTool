"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ShieldCheck,
  Layers,
  Menu,
  X,
  FileText,
  Image as ImageIcon,
  Archive,
  FileCode,
  Globe,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Search,
  Mic,
  Monitor,
  Code2,
  Lock,
  ArrowRight,
  Sliders,
  CheckCircle2,
} from "lucide-react";
import { useLanguage, AVAILABLE_LANGUAGES, Language } from "@/lib/i18n/context";
import { QuickSearchModal } from "@/components/common/QuickSearchModal";
import { TOOLS_REGISTRY } from "@/lib/tools-registry";
import { ARTICLES_REGISTRY } from "@/lib/articles-registry";

// Counts come from the registries so the header never goes stale
const TOOL_COUNT = TOOLS_REGISTRY.length;
const ARTICLE_COUNT = ARTICLES_REGISTRY.length;

// Localized UI strings for Header & Navigation
const HEADER_I18N: Record<Language, {
  toolsDropdown: string;
  allTools: string;
  allToolsBanner: string;
  guides: string;
  guidesDesc: string;
  articles: string;
  articlesDesc: string;
  privacy: string;
  privacyBadge: string;
  searchPlaceholder: string;
  quickSearch: string;
  viewAllTools: string;
  exploreAllCategories: string;
  newBadge: string;
  categories: {
    pdf: { title: string; subtitle: string };
    image: { title: string; subtitle: string };
    audio: { title: string; subtitle: string };
    archive: { title: string; subtitle: string };
    text: { title: string; subtitle: string };
  };
  tools: {
    pdfMerge: string;
    pdfSplit: string;
    pdfRotate: string;
    pdfEncrypt: string;
    imageConvert: string;
    imageCompress: string;
    screenRecorder: string;
    exifRemover: string;
    audioConvert: string;
    voiceRecorder: string;
    audioTrim: string;
    videoAudio: string;
    zipCreate: string;
    zipExtract: string;
    checksum: string;
    hexViewer: string;
    jsonCsv: string;
    markdownPreview: string;
    textDiff: string;
    hashGen: string;
  };
}> = {
  it: {
    toolsDropdown: "Strumenti",
    allTools: `Tutti i ${TOOL_COUNT} Strumenti`,
    allToolsBanner: `${TOOL_COUNT} Strumenti In-Browser • 100% Gratuiti & Privati`,
    guides: "Guide",
    guidesDesc: "Tutorial ed esempi pratici",
    articles: "Articoli",
    articlesDesc: "Open source & alternative",
    privacy: "Garanzia Privacy",
    privacyBadge: "Zero Upload",
    searchPlaceholder: `Cerca tra ${TOOL_COUNT} strumenti e articoli...`,
    quickSearch: "Cerca...",
    viewAllTools: `Esplora tutti i ${TOOL_COUNT} strumenti →`,
    exploreAllCategories: "Catalogo Completo",
    newBadge: "Nuovo",
    categories: {
      pdf: { title: "Suite PDF", subtitle: "Unisci, dividi, proteggi" },
      image: { title: "Immagini & Schermo", subtitle: "Converti, cattura, comprimi" },
      audio: { title: "Audio & Voce", subtitle: "Convertitore & registratore" },
      archive: { title: "Archivi & Dati", subtitle: "ZIP, integrità & hex" },
      text: { title: "Testo & Dev", subtitle: "JSON, Markdown, Diff, Hash" },
    },
    tools: {
      pdfMerge: "Unisci PDF",
      pdfSplit: "Dividi PDF",
      pdfRotate: "Ruota Pagine",
      pdfEncrypt: "Proteggi PDF",
      imageConvert: "Convertitore Immagini",
      imageCompress: "Comprimi Foto",
      screenRecorder: "Registra Schermo",
      exifRemover: "Rimuovi EXIF / GPS",
      audioConvert: "Convertitore Audio",
      voiceRecorder: "Registratore Vocale",
      audioTrim: "Taglia Audio",
      videoAudio: "Estrai da Video",
      zipCreate: "Crea Archivio ZIP",
      zipExtract: "Estrai File ZIP",
      checksum: "Verifica Checksum",
      hexViewer: "Hex Viewer",
      jsonCsv: "JSON ↔ CSV",
      markdownPreview: "Editor Markdown",
      textDiff: "Confronta Codice Diff",
      hashGen: "Generatore Hash",
    },
  },
  en: {
    toolsDropdown: "Tools",
    allTools: `All ${TOOL_COUNT} Tools`,
    allToolsBanner: `${TOOL_COUNT} In-Browser Tools • 100% Free & Private`,
    guides: "Guides",
    guidesDesc: "Step-by-step tutorials",
    articles: "Articles",
    articlesDesc: "Open source & privacy insights",
    privacy: "Privacy Guarantee",
    privacyBadge: "Zero Uploads",
    searchPlaceholder: `Search ${TOOL_COUNT} tools and articles...`,
    quickSearch: "Search...",
    viewAllTools: `Explore all ${TOOL_COUNT} tools →`,
    exploreAllCategories: "Complete Catalog",
    newBadge: "New",
    categories: {
      pdf: { title: "PDF Suite", subtitle: "Merge, split, protect" },
      image: { title: "Images & Screen", subtitle: "Convert, capture, compress" },
      audio: { title: "Audio & Voice", subtitle: "Converter & recorder" },
      archive: { title: "Archives & Data", subtitle: "ZIP, integrity & hex" },
      text: { title: "Text & Dev", subtitle: "JSON, Markdown, Diff, Hash" },
    },
    tools: {
      pdfMerge: "Merge PDF",
      pdfSplit: "Split PDF",
      pdfRotate: "Rotate Pages",
      pdfEncrypt: "Protect PDF",
      imageConvert: "Image Converter",
      imageCompress: "Compress Images",
      screenRecorder: "Screen Recorder",
      exifRemover: "Remove EXIF / GPS",
      audioConvert: "Audio Converter",
      voiceRecorder: "Voice Recorder",
      audioTrim: "Trim Audio",
      videoAudio: "Extract from Video",
      zipCreate: "Create ZIP Archive",
      zipExtract: "Extract ZIP Archive",
      checksum: "Verify Checksum",
      hexViewer: "Hex Viewer",
      jsonCsv: "JSON ↔ CSV",
      markdownPreview: "Markdown Editor",
      textDiff: "Code Diff Checker",
      hashGen: "Hash Generator",
    },
  },
  es: {
    toolsDropdown: "Herramientas",
    allTools: `Las ${TOOL_COUNT} Herramientas`,
    allToolsBanner: `${TOOL_COUNT} Herramientas en el Navegador • 100% Gratuitas y Privadas`,
    guides: "Guías",
    guidesDesc: "Tutoriales paso a paso",
    articles: "Artículos",
    articlesDesc: "Open source y alternativas",
    privacy: "Garantía de Privacidad",
    privacyBadge: "Cero Subidas",
    searchPlaceholder: `Buscar en ${TOOL_COUNT} herramientas y artículos...`,
    quickSearch: "Buscar...",
    viewAllTools: `Explorar las ${TOOL_COUNT} herramientas →`,
    exploreAllCategories: "Catálogo Completo",
    newBadge: "Nuevo",
    categories: {
      pdf: { title: "Suite PDF", subtitle: "Unir, dividir, proteger" },
      image: { title: "Imágenes y Pantalla", subtitle: "Convertir, capturar, comprimir" },
      audio: { title: "Audio y Voz", subtitle: "Convertidor y grabadora" },
      archive: { title: "Archivos y Datos", subtitle: "ZIP, integridad y hex" },
      text: { title: "Texto y Dev", subtitle: "JSON, Markdown, Diff, Hash" },
    },
    tools: {
      pdfMerge: "Unir PDF",
      pdfSplit: "Dividir PDF",
      pdfRotate: "Rotar Páginas",
      pdfEncrypt: "Proteger PDF",
      imageConvert: "Convertir Imágenes",
      imageCompress: "Comprimir Imágenes",
      screenRecorder: "Grabar Pantalla",
      exifRemover: "Eliminar EXIF / GPS",
      audioConvert: "Convertir Audio",
      voiceRecorder: "Grabadora de Voz",
      audioTrim: "Recortar Audio",
      videoAudio: "Extraer de Video",
      zipCreate: "Crear Archivo ZIP",
      zipExtract: "Extraer Archivo ZIP",
      checksum: "Verificar Checksum",
      hexViewer: "Visor Hexadecimal",
      jsonCsv: "JSON ↔ CSV",
      markdownPreview: "Editor Markdown",
      textDiff: "Comparador Diff",
      hashGen: "Generador de Hash",
    },
  },
  fr: {
    toolsDropdown: "Outils",
    allTools: `Tous les ${TOOL_COUNT} Outils`,
    allToolsBanner: `${TOOL_COUNT} Outils dans le Navigateur • 100% Gratuits et Privés`,
    guides: "Guides",
    guidesDesc: "Tutoriels pas à pas",
    articles: "Articles",
    articlesDesc: "Open source et alternatives",
    privacy: "Garantie Confidentialité",
    privacyBadge: "Zéro Upload",
    searchPlaceholder: `Rechercher parmi ${TOOL_COUNT} outils et articles...`,
    quickSearch: "Rechercher...",
    viewAllTools: `Explorer les ${TOOL_COUNT} outils →`,
    exploreAllCategories: "Catalogue Complet",
    newBadge: "Nouveau",
    categories: {
      pdf: { title: "Suite PDF", subtitle: "Fusionner, diviser, protéger" },
      image: { title: "Images et Écran", subtitle: "Convertir, capturer, compresser" },
      audio: { title: "Audio et Voix", subtitle: "Convertisseur et dictaphone" },
      archive: { title: "Archives et Données", subtitle: "ZIP, intégrité et hex" },
      text: { title: "Texte et Dév", subtitle: "JSON, Markdown, Diff, Hash" },
    },
    tools: {
      pdfMerge: "Fusionner PDF",
      pdfSplit: "Diviser PDF",
      pdfRotate: "Pivoter Pages",
      pdfEncrypt: "Protéger PDF",
      imageConvert: "Convertir Images",
      imageCompress: "Compresser Images",
      screenRecorder: "Enregistrer Écran",
      exifRemover: "Supprimer EXIF / GPS",
      audioConvert: "Convertir Audio",
      voiceRecorder: "Enregistreur Vocal",
      audioTrim: "Découper Audio",
      videoAudio: "Extraire de Vidéo",
      zipCreate: "Créer un ZIP",
      zipExtract: "Extraire un ZIP",
      checksum: "Vérifier Checksum",
      hexViewer: "Visualiseur Hex",
      jsonCsv: "JSON ↔ CSV",
      markdownPreview: "Éditeur Markdown",
      textDiff: "Comparateur Diff",
      hashGen: "Générateur Hash",
    },
  },
  de: {
    toolsDropdown: "Werkzeuge",
    allTools: `Alle ${TOOL_COUNT} Werkzeuge`,
    allToolsBanner: `${TOOL_COUNT} Werkzeuge im Browser • 100% Kostenlos und Privat`,
    guides: "Anleitungen",
    guidesDesc: "Schritt-für-Schritt-Anleitungen",
    articles: "Artikel",
    articlesDesc: "Open Source & Alternativen",
    privacy: "Datenschutzgarantie",
    privacyBadge: "Zero Uploads",
    searchPlaceholder: `${TOOL_COUNT} Werkzeuge und Artikel suchen...`,
    quickSearch: "Suchen...",
    viewAllTools: `Alle ${TOOL_COUNT} Werkzeuge ansehen →`,
    exploreAllCategories: "Gesamtkatalog",
    newBadge: "Neu",
    categories: {
      pdf: { title: "PDF Suite", subtitle: "Zusammenfügen, teilen, schützen" },
      image: { title: "Bilder & Bildschirm", subtitle: "Konvertieren, aufnehmen, komprimieren" },
      audio: { title: "Audio & Stimme", subtitle: "Konverter & Diktiergerät" },
      archive: { title: "Archive & Daten", subtitle: "ZIP, Integrität und Hex" },
      text: { title: "Text & Dev", subtitle: "JSON, Markdown, Diff, Hash" },
    },
    tools: {
      pdfMerge: "PDF zusammenfügen",
      pdfSplit: "PDF teilen",
      pdfRotate: "Seiten drehen",
      pdfEncrypt: "PDF schützen",
      imageConvert: "Bilder konvertieren",
      imageCompress: "Bilder komprimieren",
      screenRecorder: "Bildschirm aufnehmen",
      exifRemover: "EXIF / GPS entfernen",
      audioConvert: "Audio konvertieren",
      voiceRecorder: "Diktiergerät",
      audioTrim: "Audio schneiden",
      videoAudio: "Aus Video extrahieren",
      zipCreate: "ZIP erstellen",
      zipExtract: "ZIP entpacken",
      checksum: "Checksum prüfen",
      hexViewer: "Hex-Viewer",
      jsonCsv: "JSON ↔ CSV",
      markdownPreview: "Markdown-Editor",
      textDiff: "Code-Diff-Vergleich",
      hashGen: "Hash-Generator",
    },
  },
  pt: {
    toolsDropdown: "Ferramentas",
    allTools: `Todas as ${TOOL_COUNT} Ferramentas`,
    allToolsBanner: `${TOOL_COUNT} Ferramentas no Navegador • 100% Gratuitas e Privadas`,
    guides: "Guias",
    guidesDesc: "Tutoriais passo a passo",
    articles: "Artigos",
    articlesDesc: "Open source e alternativas",
    privacy: "Garantia de Privacidade",
    privacyBadge: "Zero Uploads",
    searchPlaceholder: `Buscar em ${TOOL_COUNT} ferramentas e artigos...`,
    quickSearch: "Buscar...",
    viewAllTools: `Ver todas as ${TOOL_COUNT} ferramentas →`,
    exploreAllCategories: "Catálogo Completo",
    newBadge: "Novo",
    categories: {
      pdf: { title: "Suite PDF", subtitle: "Juntar, dividir, proteger" },
      image: { title: "Imagens e Tela", subtitle: "Converter, capturar, comprimir" },
      audio: { title: "Áudio e Voz", subtitle: "Conversor e gravador" },
      archive: { title: "Arquivos e Dados", subtitle: "ZIP, integridade e hex" },
      text: { title: "Texto e Dev", subtitle: "JSON, Markdown, Diff, Hash" },
    },
    tools: {
      pdfMerge: "Juntar PDF",
      pdfSplit: "Dividir PDF",
      pdfRotate: "Girar Páginas",
      pdfEncrypt: "Proteger PDF",
      imageConvert: "Converter Imagens",
      imageCompress: "Comprimir Imagens",
      screenRecorder: "Gravar Tela",
      exifRemover: "Remover EXIF / GPS",
      audioConvert: "Converter Áudio",
      voiceRecorder: "Gravador de Voz",
      audioTrim: "Cortar Áudio",
      videoAudio: "Extrair de Vídeo",
      zipCreate: "Criar Arquivo ZIP",
      zipExtract: "Extrair Arquivo ZIP",
      checksum: "Verificar Checksum",
      hexViewer: "Visualizador Hex",
      jsonCsv: "JSON ↔ CSV",
      markdownPreview: "Editor Markdown",
      textDiff: "Comparador Diff",
      hashGen: "Gerador de Hash",
    },
  },
};

export const Header: React.FC = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [toolsMegaMenuOpen, setToolsMegaMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState<string | null>("pdf");

  const { language, setLanguage, t } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const strings = HEADER_I18N[language] || HEADER_I18N.en;

  const handleLanguageChange = (newLocale: Language) => {
    setLanguage(newLocale);
    setLangDropdownOpen(false);
    setMobileDrawerOpen(false);
    setToolsMegaMenuOpen(false);

    let cleanPath = pathname || "/";
    for (const loc of ["en", "es", "fr", "de", "pt"] as const) {
      if (cleanPath === `/${loc}`) {
        cleanPath = "/";
        break;
      } else if (cleanPath.startsWith(`/${loc}/`)) {
        cleanPath = cleanPath.slice(loc.length + 1);
        break;
      }
    }

    const targetUrl = newLocale === "it"
      ? cleanPath
      : `/${newLocale}${cleanPath === "/" ? "" : cleanPath}`;

    router.push(targetUrl);
  };

  const getLocalizedHref = (path: string) => {
    if (language === "it") return path;
    return `/${language}${path === "/" ? "" : path}`;
  };

  const handleNavClick = () => {
    setToolsMegaMenuOpen(false);
    setMobileDrawerOpen(false);
    setLangDropdownOpen(false);
  };

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setLangDropdownOpen(false);
      }
      if (megaMenuRef.current && !megaMenuRef.current.contains(target)) {
        setToolsMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Global keyboard shortcuts (Ctrl+K / Cmd+K and Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setToolsMegaMenuOpen(false);
        setLangDropdownOpen(false);
        setMobileDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileDrawerOpen]);

  const currentLang = AVAILABLE_LANGUAGES.find((l) => l.code === language) || AVAILABLE_LANGUAGES[0];

  // Curated category items for Mega-Menu & Mobile Accordions
  const categoryGroups = [
    {
      id: "pdf",
      title: strings.categories.pdf.title,
      subtitle: strings.categories.pdf.subtitle,
      icon: FileText,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/60",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      badgeCount: "11",
      tools: [
        { id: "pdf-merge", label: strings.tools.pdfMerge },
        { id: "pdf-split", label: strings.tools.pdfSplit },
        { id: "pdf-rotate", label: strings.tools.pdfRotate },
        { id: "pdf-encrypt", label: strings.tools.pdfEncrypt },
      ],
    },
    {
      id: "image",
      title: strings.categories.image.title,
      subtitle: strings.categories.image.subtitle,
      icon: ImageIcon,
      color: "text-teal-600 dark:text-teal-400",
      bgColor: "bg-teal-50 dark:bg-teal-950/60",
      borderColor: "border-teal-200 dark:border-teal-800",
      badgeCount: "19",
      tools: [
        { id: "image-convert", label: strings.tools.imageConvert },
        { id: "image-compress", label: strings.tools.imageCompress },
        { id: "screen-recorder", label: strings.tools.screenRecorder, isNew: true },
        { id: "exif-remover", label: strings.tools.exifRemover },
      ],
    },
    {
      id: "audio",
      title: strings.categories.audio.title,
      subtitle: strings.categories.audio.subtitle,
      icon: Mic,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-950/60",
      borderColor: "border-purple-200 dark:border-purple-800",
      badgeCount: "10",
      tools: [
        { id: "audio-convert", label: strings.tools.audioConvert },
        { id: "voice-recorder", label: strings.tools.voiceRecorder, isNew: true },
        { id: "audio-trim", label: strings.tools.audioTrim },
        { id: "video-to-audio", label: strings.tools.videoAudio },
      ],
    },
    {
      id: "archive",
      title: strings.categories.archive.title,
      subtitle: strings.categories.archive.subtitle,
      icon: Archive,
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-50 dark:bg-amber-950/60",
      borderColor: "border-amber-200 dark:border-amber-800",
      badgeCount: "5",
      tools: [
        { id: "zip-create", label: strings.tools.zipCreate },
        { id: "zip-extract", label: strings.tools.zipExtract },
        { id: "file-checksum", label: strings.tools.checksum },
        { id: "hex-viewer", label: strings.tools.hexViewer },
      ],
    },
    {
      id: "text",
      title: strings.categories.text.title,
      subtitle: strings.categories.text.subtitle,
      icon: Code2,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950/60",
      borderColor: "border-blue-200 dark:border-blue-800",
      badgeCount: "32",
      tools: [
        { id: "json-csv", label: strings.tools.jsonCsv },
        { id: "markdown-preview", label: strings.tools.markdownPreview },
        { id: "text-diff", label: strings.tools.textDiff },
        { id: "hash-generator", label: strings.tools.hashGen },
      ],
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/85 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/85 transition-colors">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <Link
            href={getLocalizedHref("/")}
            onClick={handleNavClick}
            className="flex items-center gap-2.5 transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl p-1"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-500/20">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
                  File<span className="text-emerald-600 dark:text-emerald-400">OmniTool</span>
                </span>
                <span className="hidden sm:inline-flex rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
                  {t("badge.clientSide")}
                </span>
              </div>
              <p className="hidden md:block text-[11px] text-zinc-500 dark:text-zinc-400">
                {t("brand.tagline")}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex lg:gap-2">
            {/* Tools Mega-Menu Trigger */}
            <div className="relative" ref={megaMenuRef}>
              <button
                onClick={() => setToolsMegaMenuOpen(!toolsMegaMenuOpen)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
                  toolsMegaMenuOpen
                    ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300"
                    : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800/60 dark:hover:text-white"
                }`}
                aria-expanded={toolsMegaMenuOpen}
                aria-haspopup="true"
              >
                <span>{strings.toolsDropdown}</span>
                <span className="rounded-full bg-zinc-200/70 px-1.5 py-0.2 text-[10px] font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                  {TOOL_COUNT}
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    toolsMegaMenuOpen ? "rotate-180 text-emerald-600 dark:text-emerald-400" : "text-zinc-400"
                  }`}
                />
              </button>

              {/* Tools Mega-Menu Dropdown Panel */}
              {toolsMegaMenuOpen && (
                <div className="absolute left-1/2 top-full z-50 mt-2 w-[840px] max-w-[95vw] -translate-x-1/2 rounded-2xl border border-zinc-200 bg-white/95 p-5 shadow-2xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/95 animate-in fade-in zoom-in-95 duration-150">
                  {/* Mega-Menu Header */}
                  <div className="mb-4 flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-zinc-900 dark:text-white">
                          {strings.allToolsBanner}
                        </h4>
                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                          WebAssembly & HTML5 Canvas • Zero file inviati su server remoti
                        </p>
                      </div>
                    </div>
                    <Link
                      href={getLocalizedHref("/")}
                      onClick={handleNavClick}
                      className="group flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                    >
                      <span>{strings.viewAllTools}</span>
                    </Link>
                  </div>

                  {/* 5-Category Columns Grid */}
                  <div className="grid grid-cols-5 gap-3.5">
                    {categoryGroups.map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <div
                          key={cat.id}
                          className="flex flex-col rounded-xl border border-zinc-100 bg-zinc-50/60 p-2.5 transition hover:border-zinc-200 hover:bg-zinc-50 dark:border-zinc-850 dark:bg-zinc-850/40 dark:hover:border-zinc-800"
                        >
                          <div className="mb-2 flex items-center gap-1.5 border-b border-zinc-200/50 pb-2 dark:border-zinc-800">
                            <div className={`flex h-6 w-6 items-center justify-center rounded-md ${cat.bgColor} ${cat.color}`}>
                              <Icon className="h-3.5 w-3.5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="block truncate text-[11px] font-bold text-zinc-900 dark:text-zinc-100">
                                {cat.title}
                              </span>
                            </div>
                            <span className="text-[9px] font-bold text-zinc-400">
                              {cat.badgeCount}
                            </span>
                          </div>

                          <ul className="space-y-1">
                            {cat.tools.map((tItem) => (
                              <li key={tItem.id}>
                                <Link
                                  href={getLocalizedHref(`/tools/${tItem.id}`)}
                                  onClick={handleNavClick}
                                  className="group flex items-center justify-between rounded-md px-1.5 py-1 text-[11px] font-medium text-zinc-600 transition hover:bg-white hover:text-emerald-600 hover:shadow-xs dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-emerald-400"
                                >
                                  <span className="truncate">{tItem.label}</span>
                                  {tItem.isNew && (
                                    <span className="ml-1 rounded-full bg-emerald-100 px-1 py-0.2 text-[8px] font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                                      {strings.newBadge}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                  {/* Mega-Menu Footer / Quick Search trigger */}
                  <div className="mt-4 flex items-center justify-between rounded-xl bg-zinc-100/70 px-3.5 py-2 text-xs dark:bg-zinc-800/50">
                    <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
                      <Search className="h-3.5 w-3.5 text-zinc-400" />
                      <span>{strings.searchPlaceholder}</span>
                    </div>
                    <button
                      onClick={() => {
                        setToolsMegaMenuOpen(false);
                        setSearchModalOpen(true);
                      }}
                      className="flex items-center gap-1.5 rounded-lg border border-zinc-300 bg-white px-2 py-0.5 text-[10px] font-semibold text-zinc-700 shadow-xs hover:border-emerald-500 hover:text-emerald-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                    >
                      <span>Apri Ricerca</span>
                      <kbd className="font-mono text-[9px] text-zinc-400">Ctrl K</kbd>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Guides Link */}
            <Link
              href={getLocalizedHref("/guides")}
              onClick={handleNavClick}
              className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800/60 dark:hover:text-white"
            >
              <BookOpen className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span>{strings.guides}</span>
            </Link>

            {/* Direct Articles Link with Sparkles */}
            <Link
              href={getLocalizedHref("/articles")}
              onClick={handleNavClick}
              className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800/60 dark:hover:text-white"
            >
              <Sparkles className="h-4 w-4 text-amber-500" />
              <span>{strings.articles}</span>
              <span className="rounded-full bg-amber-100 px-1.5 py-0.2 text-[10px] font-bold text-amber-800 dark:bg-amber-950/80 dark:text-amber-300">
                {ARTICLE_COUNT}
              </span>
            </Link>

            {/* Privacy Guarantee Badge Button */}
            <Link
              href={getLocalizedHref("/privacy")}
              onClick={handleNavClick}
              className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/70 px-3 py-1 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100 hover:border-emerald-300 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:bg-emerald-900/50"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{strings.privacy}</span>
            </Link>
          </nav>

          {/* Header Right Actions (Search Button & Language Selector) */}
          <div className="flex items-center gap-2">
            {/* Quick Search Trigger Pill (Desktop) */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="hidden sm:flex items-center gap-2 rounded-xl border border-zinc-200/90 bg-zinc-50/80 px-3 py-1.5 text-xs text-zinc-500 shadow-xs transition hover:border-emerald-500/50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:bg-zinc-800"
              title="Search tools and guides (Ctrl+K / ⌘K)"
            >
              <Search className="h-3.5 w-3.5 text-zinc-400" />
              <span>{strings.quickSearch}</span>
              <kbd className="hidden lg:inline-flex rounded border border-zinc-300 bg-white px-1.5 py-0.5 text-[10px] font-mono text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
                ⌘K
              </kbd>
            </button>

            {/* Quick Search Button (Mobile Icon) */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="flex sm:hidden h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
              aria-label="Cerca strumenti"
            >
              <Search className="h-4 w-4" />
            </button>

            {/* Desktop Language Selector Dropdown */}
            <div className="relative hidden md:block" ref={dropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 text-xs font-semibold text-zinc-700 shadow-xs transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                title="Select Language"
                aria-label="Select Language"
              >
                <Globe className="h-3.5 w-3.5 text-emerald-600" />
                <span>{currentLang.flag} {currentLang.code.toUpperCase()}</span>
                <ChevronDown
                  className={`h-3 w-3 text-zinc-400 transition-transform ${
                    langDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-xl border border-zinc-200 bg-white py-1.5 shadow-xl dark:border-zinc-800 dark:bg-zinc-900 z-50">
                  {AVAILABLE_LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => handleLanguageChange(l.code)}
                      className={`flex w-full items-center justify-between px-3 py-1.5 text-left text-xs transition ${
                        language === l.code
                          ? "bg-emerald-50 font-bold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300"
                          : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </span>
                      {language === l.code && <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Hamburger Drawer Trigger Button */}
            <button
              onClick={() => setMobileDrawerOpen(true)}
              className="flex md:hidden h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
              aria-label="Apri menu laterale"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE SLIDE-OVER SIDEBAR DRAWER */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Sidebar Panel */}
          <div className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-2xl transition-transform dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3.5 dark:border-zinc-800">
              <Link
                href={getLocalizedHref("/")}
                onClick={handleNavClick}
                className="flex items-center gap-2"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-sm">
                  <Layers className="h-4 w-4" />
                </div>
                <span className="font-bold tracking-tight text-zinc-900 dark:text-white">
                  File<span className="text-emerald-600 dark:text-emerald-400">OmniTool</span>
                </span>
                <span className="rounded-full bg-emerald-100 px-1.5 py-0.2 text-[9px] font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  {TOOL_COUNT} Tools
                </span>
              </Link>
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                aria-label="Chiudi menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Quick Search Button inside Drawer */}
            <div className="p-4 border-b border-zinc-100 dark:border-zinc-800/80">
              <button
                onClick={() => {
                  setMobileDrawerOpen(false);
                  setSearchModalOpen(true);
                }}
                className="flex w-full items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-xs text-zinc-500 hover:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-850 dark:text-zinc-400 shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{strings.searchPlaceholder}</span>
                </div>
                <span className="rounded bg-zinc-200 px-1.5 py-0.5 text-[9px] font-mono text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300">
                  ⌘K
                </span>
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
              {/* Category Accordions */}
              <div>
                <div className="mb-2 flex items-center justify-between px-1">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                    {strings.toolsDropdown} ({categoryGroups.length} Categorie)
                  </p>
                  <Link
                    href={getLocalizedHref("/")}
                    onClick={handleNavClick}
                    className="text-[11px] font-bold text-emerald-600 hover:underline dark:text-emerald-400"
                  >
                    {strings.exploreAllCategories}
                  </Link>
                </div>

                <div className="space-y-1.5">
                  {categoryGroups.map((cat) => {
                    const isExpanded = mobileExpandedCategory === cat.id;
                    const Icon = cat.icon;
                    return (
                      <div
                        key={cat.id}
                        className="rounded-xl border border-zinc-200/80 bg-zinc-50/50 overflow-hidden dark:border-zinc-800 dark:bg-zinc-850/30"
                      >
                        <button
                          onClick={() =>
                            setMobileExpandedCategory(isExpanded ? null : cat.id)
                          }
                          className="flex w-full items-center justify-between px-3 py-2.5 text-left text-xs font-semibold text-zinc-800 dark:text-zinc-200"
                        >
                          <div className="flex items-center gap-2">
                            <div className={`flex h-6 w-6 items-center justify-center rounded-md ${cat.bgColor} ${cat.color}`}>
                              <Icon className="h-3.5 w-3.5" />
                            </div>
                            <span>{cat.title}</span>
                            <span className="rounded-full bg-zinc-200/80 px-1.5 py-0.2 text-[9px] font-bold text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300">
                              {cat.badgeCount}
                            </span>
                          </div>
                          <ChevronDown
                            className={`h-4 w-4 text-zinc-400 transition-transform duration-200 ${
                              isExpanded ? "rotate-180 text-emerald-600" : ""
                            }`}
                          />
                        </button>

                        {isExpanded && (
                          <div className="border-t border-zinc-200/60 bg-white px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900">
                            <ul className="space-y-1">
                              {cat.tools.map((tItem) => (
                                <li key={tItem.id}>
                                  <Link
                                    href={getLocalizedHref(`/tools/${tItem.id}`)}
                                    onClick={handleNavClick}
                                    className="flex items-center justify-between rounded-lg px-2 py-1.5 text-xs text-zinc-700 hover:bg-zinc-100 hover:text-emerald-600 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-emerald-400"
                                  >
                                    <span>{tItem.label}</span>
                                    {tItem.isNew && (
                                      <span className="rounded-full bg-emerald-100 px-1.5 py-0.2 text-[9px] font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                                        {strings.newBadge}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Editorial & Guides Links */}
              <div className="space-y-2 border-t border-zinc-100 pt-3 dark:border-zinc-800">
                <p className="px-1 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  Risorse & Approfondimenti
                </p>

                <Link
                  href={getLocalizedHref("/articles")}
                  onClick={handleNavClick}
                  className="flex items-center justify-between rounded-xl border border-amber-200/70 bg-amber-50/50 p-3 text-xs font-semibold text-zinc-800 transition hover:bg-amber-50 dark:border-amber-900/40 dark:bg-amber-950/20 dark:text-zinc-200"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-zinc-900 dark:text-white">
                          {strings.articles}
                        </span>
                        <span className="rounded-full bg-amber-200 px-1.5 py-0.2 text-[9px] font-bold text-amber-900 dark:bg-amber-900 dark:text-amber-200">
                          {ARTICLE_COUNT}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-normal">
                        {strings.articlesDesc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-zinc-400" />
                </Link>

                <Link
                  href={getLocalizedHref("/guides")}
                  onClick={handleNavClick}
                  className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50/60 p-3 text-xs font-semibold text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-850/40 dark:text-zinc-200"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-bold text-zinc-900 dark:text-white">
                        {strings.guides}
                      </span>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-normal">
                        {strings.guidesDesc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-zinc-400" />
                </Link>

                <Link
                  href={getLocalizedHref("/privacy")}
                  onClick={handleNavClick}
                  className="flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50/70 p-3 text-xs font-semibold text-emerald-900 transition hover:bg-emerald-100 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-200"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-200 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-bold text-emerald-900 dark:text-emerald-200">
                        {strings.privacy}
                      </span>
                      <p className="text-[11px] text-emerald-700/80 dark:text-emerald-400 font-normal">
                        100% In-Browser • Zero file al server
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                </Link>
              </div>

              {/* Language Selector Grid in Drawer */}
              <div className="border-t border-zinc-100 pt-3 dark:border-zinc-800">
                <p className="mb-2 px-1 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  Lingua / Language
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {AVAILABLE_LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => handleLanguageChange(l.code)}
                      className={`flex items-center justify-center gap-1.5 rounded-xl border p-2 text-xs font-semibold transition ${
                        language === l.code
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 shadow-xs"
                          : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-850 dark:text-zinc-300"
                      }`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer Footer Trust Signals */}
            <div className="border-t border-zinc-200 bg-zinc-50 px-4 py-3 text-center dark:border-zinc-800 dark:bg-zinc-950/80">
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                FileOmniTool • Privacy First • Autore Cybsquatch
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Global Quick Search Modal (Command Palette Ctrl+K / ⌘K) */}
      <QuickSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </>
  );
};
