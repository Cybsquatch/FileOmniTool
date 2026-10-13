import type { Metadata } from "next";
import { ToolDefinition } from "./tools-registry";
import { GuideArticle } from "./guides-registry";
import { Language } from "./i18n/context";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.fileomnitool.com";

export const ALL_LOCALES: Language[] = ["it", "en", "es", "fr", "de", "pt"];
export const NON_DEFAULT_LOCALES: Array<"en" | "es" | "fr" | "de" | "pt"> = ["en", "es", "fr", "de", "pt"];

export function getLocalizedUrl(path: string, locale: Language): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === "it") {
    return `${SITE_URL}${cleanPath}`;
  }
  return `${SITE_URL}/${locale}${cleanPath}`;
}

export function getHreflangAlternates(path: string, currentLocale: Language) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonical = getLocalizedUrl(cleanPath, currentLocale);

  const languages: Record<string, string> = {
    "it": `${SITE_URL}${cleanPath}`,
    "en": `${SITE_URL}/en${cleanPath}`,
    "es": `${SITE_URL}/es${cleanPath}`,
    "fr": `${SITE_URL}/fr${cleanPath}`,
    "de": `${SITE_URL}/de${cleanPath}`,
    "pt": `${SITE_URL}/pt${cleanPath}`,
    "x-default": `${SITE_URL}/en${cleanPath}`,
  };

  return {
    canonical,
    languages,
  };
}

const LOCALE_OG_MAP: Record<Language, { locale: string; alternates: string[] }> = {
  it: { locale: "it_IT", alternates: ["en_US", "es_ES", "fr_FR", "de_DE", "pt_BR"] },
  en: { locale: "en_US", alternates: ["it_IT", "es_ES", "fr_FR", "de_DE", "pt_BR"] },
  es: { locale: "es_ES", alternates: ["it_IT", "en_US", "fr_FR", "de_DE", "pt_BR"] },
  fr: { locale: "fr_FR", alternates: ["it_IT", "en_US", "es_ES", "de_DE", "pt_BR"] },
  de: { locale: "de_DE", alternates: ["it_IT", "en_US", "es_ES", "fr_FR", "pt_BR"] },
  pt: { locale: "pt_BR", alternates: ["it_IT", "en_US", "es_ES", "fr_FR", "de_DE"] },
};

const TITLE_SUFFIXES: Record<Language, string> = {
  it: "Gratis nel Browser - 100% Privato | FileOmniTool",
  en: "Free in Browser - 100% Private | FileOmniTool",
  es: "Gratis en el Navegador - 100% Privado | FileOmniTool",
  fr: "Gratuit dans le Navigateur - 100% Privé | FileOmniTool",
  de: "Kostenlos im Browser - 100% Privat | FileOmniTool",
  pt: "Grátis no Navegador - 100% Privado | FileOmniTool",
};

const COMMON_KEYWORDS: Record<Language, string[]> = {
  it: ["online gratis", "nel browser", "senza caricamento", "privacy", "client-side", "webassembly"],
  en: ["online free", "in-browser", "no upload", "privacy", "client-side", "webassembly"],
  es: ["online gratis", "en el navegador", "sin subir archivos", "privacidad", "client-side"],
  fr: ["en ligne gratuit", "dans le navigateur", "sans téléversement", "confidentialité", "client-side"],
  de: ["online kostenlos", "im browser", "ohne server upload", "datenschutz", "client-side"],
  pt: ["online grátis", "no navegador", "sem envio de arquivos", "privacidade", "client-side"],
};

export function getToolMetadata(tool: ToolDefinition, locale: Language): Metadata {
  const titleText = tool.title[locale] || tool.title.en;
  const descText = tool.description[locale] || tool.description.en;
  const keywordText = tool.seoKeyword[locale] || tool.seoKeyword.en || titleText;

  const fullTitle = `${titleText} ${TITLE_SUFFIXES[locale]}`;
  const path = `/tools/${tool.id}`;
  const hreflang = getHreflangAlternates(path, locale);
  const ogConfig = LOCALE_OG_MAP[locale];

  return {
    title: fullTitle,
    description: descText,
    keywords: [
      keywordText,
      titleText,
      ...COMMON_KEYWORDS[locale],
      "FileOmniTool"
    ].filter(Boolean),
    alternates: hreflang,
    openGraph: {
      title: `${titleText} | FileOmniTool`,
      description: descText,
      url: hreflang.canonical,
      type: "website",
      locale: ogConfig.locale,
      alternateLocale: ogConfig.alternates,
    },
    twitter: {
      card: "summary_large_image",
      title: `${titleText} | FileOmniTool`,
      description: descText,
    },
  };
}

export function getGuideMetadata(guide: GuideArticle, locale: Language): Metadata {
  const titleText = guide.title[locale] || guide.title.en;
  const excerptText = guide.excerpt[locale] || guide.excerpt.en;
  const keywordText = guide.seoKeyword[locale] || guide.seoKeyword.en || titleText;

  const fullTitle = `${titleText} | FileOmniTool`;
  const path = `/guides/${guide.slug}`;
  const hreflang = getHreflangAlternates(path, locale);
  const ogConfig = LOCALE_OG_MAP[locale];

  return {
    title: fullTitle,
    description: excerptText,
    keywords: [
      keywordText,
      titleText,
      ...COMMON_KEYWORDS[locale],
      "guide",
      "tutorial",
      "FileOmniTool"
    ].filter(Boolean),
    alternates: hreflang,
    openGraph: {
      title: fullTitle,
      description: excerptText,
      url: hreflang.canonical,
      type: "article",
      publishedTime: guide.datePublished,
      locale: ogConfig.locale,
      alternateLocale: ogConfig.alternates,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: excerptText,
    },
  };
}

const HOME_TITLES: Record<Language, string> = {
  it: "FileOmniTool - Strumenti per File Gratuiti, Privati e nel Browser",
  en: "FileOmniTool - Free, Private & 100% In-Browser File Tools",
  es: "FileOmniTool - Herramientas de Archivos Gratuitas y Privadas en el Navegador",
  fr: "FileOmniTool - Outils de Fichiers Gratuits, Privés et dans le Navigateur",
  de: "FileOmniTool - Kostenlose, Private & Browserbasierte Datei-Tools",
  pt: "FileOmniTool - Ferramentas de Arquivos Gratuitas, Privadas e no Navegador",
};

const HOME_DESCRIPTIONS: Record<Language, string> = {
  it: "Unisci PDF, converti immagini (WebP/PNG/JPG), comprimi file ed estrai archivi ZIP al 100% nel tuo browser senza upload su server. 100% privato e gratuito.",
  en: "Merge PDFs, convert images (WebP/PNG/JPG), compress files, create & extract ZIPs directly in your browser. Zero cloud uploads, 100% private, free forever.",
  es: "Une PDFs, convierte imágenes, comprime archivos y extrae ZIPs directamente en tu navegador. Cero subidas a la nube, 100% privado y gratuito.",
  fr: "Fusionnez des PDF, convertissez des images, compressez des fichiers et extrayez des ZIP dans votre navigateur. Aucun téléversement, 100% privé et gratuit.",
  de: "Fügen Sie PDFs zusammen, konvertieren Sie Bilder, komprimieren Sie Dateien und entpacken Sie ZIPs direkt im Browser. 100% privat und kostenlos.",
  pt: "Junte PDFs, converta imagens, comprima arquivos e extraia ZIPs diretamente no seu navegador. Zero upload na nuvem, 100% privado e gratuito.",
};

export function getHomeMetadata(locale: Language): Metadata {
  const hreflang = getHreflangAlternates("/", locale);
  const ogConfig = LOCALE_OG_MAP[locale];

  return {
    title: HOME_TITLES[locale],
    description: HOME_DESCRIPTIONS[locale],
    keywords: [
      ...COMMON_KEYWORDS[locale],
      "merge pdf", "split pdf", "convert image", "compress photos", "create zip", "extract zip"
    ],
    alternates: hreflang,
    openGraph: {
      title: HOME_TITLES[locale],
      description: HOME_DESCRIPTIONS[locale],
      url: hreflang.canonical,
      type: "website",
      siteName: "FileOmniTool",
      locale: ogConfig.locale,
      alternateLocale: ogConfig.alternates,
    },
    twitter: {
      card: "summary_large_image",
      title: HOME_TITLES[locale],
      description: HOME_DESCRIPTIONS[locale],
    },
  };
}

const GUIDES_INDEX_TITLES: Record<Language, string> = {
  it: "Guide e Tutorial sui File nel Browser | FileOmniTool",
  en: "Step-by-Step File Guides & Privacy Tutorials | FileOmniTool",
  es: "Guías Paso a Paso de Archivos y Privacidad | FileOmniTool",
  fr: "Guides Étape par Étape et Tutoriels Fichiers | FileOmniTool",
  de: "Schritt-für-Schritt Datei-Anleitungen & Datenschutz | FileOmniTool",
  pt: "Guias Passo a Passo de Arquivos e Privacidade | FileOmniTool",
};

const GUIDES_INDEX_DESCRIPTIONS: Record<Language, string> = {
  it: "Guide complete passo-passo su come unire PDF, convertire immagini, estrarre audio MP3 e proteggere la privacy con strumenti 100% nel tuo browser senza upload.",
  en: "Comprehensive step-by-step guides on merging PDFs, compressing images, extracting MP3 audio, and protecting digital privacy with 100% in-browser utilities.",
  es: "Guías paso a paso para unir PDFs, comprimir fotos, convertir formatos y proteger tu privacidad digital directamente en tu navegador.",
  fr: "Tutoriels détaillés pour fusionner vos PDF, convertir des images, compresser des fichiers et préserver votre vie privée en ligne.",
  de: "Umfassende Anleitungen zum Zusammenfügen von PDFs, Konvertieren von Bildern und Schutz Ihrer Privatsphäre ohne Cloud-Uploads.",
  pt: "Tutoriais passo a passo para juntar PDFs, converter imagens, compactar arquivos e proteger sua privacidade sem enviar arquivos.",
};

export function getGuidesIndexMetadata(locale: Language): Metadata {
  const hreflang = getHreflangAlternates("/guides", locale);
  const ogConfig = LOCALE_OG_MAP[locale];

  return {
    title: GUIDES_INDEX_TITLES[locale],
    description: GUIDES_INDEX_DESCRIPTIONS[locale],
    alternates: hreflang,
    openGraph: {
      title: GUIDES_INDEX_TITLES[locale],
      description: GUIDES_INDEX_DESCRIPTIONS[locale],
      url: hreflang.canonical,
      type: "website",
      locale: ogConfig.locale,
      alternateLocale: ogConfig.alternates,
    },
  };
}

const PRIVACY_TITLES: Record<Language, string> = {
  it: "Garanzia di Privacy & Architettura Zero-Upload | FileOmniTool",
  en: "Privacy Guarantee & Zero-Upload Architecture | FileOmniTool",
  es: "Garantía de Privacidad y Arquitectura Zero-Upload | FileOmniTool",
  fr: "Garantie de Confidentialité et Architecture Zéro-Upload | FileOmniTool",
  de: "Datenschutzgarantie & Zero-Upload-Architektur | FileOmniTool",
  pt: "Garantia de Privacidade e Arquitetura Zero-Upload | FileOmniTool",
};

const PRIVACY_DESCRIPTIONS: Record<Language, string> = {
  it: "Scopri come FileOmniTool garantisce la privacy al 100% elaborando ogni file nel tuo browser tramite WebAssembly e Canvas. Zero cloud upload.",
  en: "Learn how FileOmniTool guarantees 100% in-browser privacy using WebAssembly, Canvas, and Web Cryptography. Zero cloud uploads.",
  es: "Descubre cómo FileOmniTool garantiza el 100% de privacidad procesando tus archivos en el navegador con WebAssembly. Sin subidas a la nube.",
  fr: "Découvrez comment FileOmniTool garantit une confidentialité totale grâce à un traitement 100% local dans votre navigateur. Zéro téléversement.",
  de: "Erfahren Sie, wie FileOmniTool 100% Datenschutz garantiert, indem alle Dateien lokal im Browser verarbeitet werden. Keine Server-Uploads.",
  pt: "Descubra como o FileOmniTool garante 100% de privacidade processando cada arquivo no seu navegador com WebAssembly. Zero upload na nuvem.",
};

export function getPrivacyMetadata(locale: Language): Metadata {
  const hreflang = getHreflangAlternates("/privacy", locale);
  const ogConfig = LOCALE_OG_MAP[locale];

  return {
    title: PRIVACY_TITLES[locale],
    description: PRIVACY_DESCRIPTIONS[locale],
    alternates: hreflang,
    openGraph: {
      title: PRIVACY_TITLES[locale],
      description: PRIVACY_DESCRIPTIONS[locale],
      url: hreflang.canonical,
      type: "website",
      locale: ogConfig.locale,
      alternateLocale: ogConfig.alternates,
    },
  };
}

const ARTICLES_INDEX_TITLES: Record<Language, string> = {
  it: "Articoli, Progetti Open-Source & Privacy Digitale | FileOmniTool",
  en: "Articles, Open-Source Projects & Digital Privacy | FileOmniTool",
  es: "Artículos, Proyectos de Código Abierto y Privacidad Digital | FileOmniTool",
  fr: "Articles, Projets Open-Source et Confidentialité Numérique | FileOmniTool",
  de: "Artikel, Open-Source-Projekte & Digitale Privatsphäre | FileOmniTool",
  pt: "Artigos, Projetos de Código Aberto e Privacidade Digital | FileOmniTool",
};

const ARTICLES_INDEX_DESCRIPTIONS: Record<Language, string> = {
  it: "Approfondimenti su software open source, sicurezza informatica, alternative gratuite ad Adobe e analisi sui rischi dei convertitori cloud.",
  en: "In-depth insights into open-source software, cybersecurity, free alternatives to Adobe, and cloud converter privacy risks.",
  es: "Análisis sobre software de código abierto, ciberseguridad, alternativas libres a Adobe y riesgos de convertidores en la nube.",
  fr: "Analyses approfondies sur les logiciels open source, la cybersécurité, les alternatives à Adobe et les risques du cloud.",
  de: "Tiefgründige Analysen zu Open-Source-Software, Cybersicherheit, kostenlosen Adobe-Alternativen und Cloud-Risiken.",
  pt: "Análises aprofundadas sobre softwares livres, segurança digital, alternativas gratuitas à Adobe e riscos na nuvem.",
};

export function getArticlesIndexMetadata(locale: Language): Metadata {
  const hreflang = getHreflangAlternates("/articles", locale);
  const ogConfig = LOCALE_OG_MAP[locale];

  return {
    title: ARTICLES_INDEX_TITLES[locale],
    description: ARTICLES_INDEX_DESCRIPTIONS[locale],
    alternates: hreflang,
    openGraph: {
      title: ARTICLES_INDEX_TITLES[locale],
      description: ARTICLES_INDEX_DESCRIPTIONS[locale],
      url: hreflang.canonical,
      type: "website",
      locale: ogConfig.locale,
      alternateLocale: ogConfig.alternates,
    },
  };
}

