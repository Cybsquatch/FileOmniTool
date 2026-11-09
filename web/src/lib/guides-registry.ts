import { PDF_GUIDES } from "./guides-pdf";
import { IMAGE_GUIDES } from "./guides-images";
import { AUDIO_GUIDES } from "./guides-audio";
import { OFFICE_TEXT_GUIDES } from "./guides-office-text";
import { DEV_INTEGRITY_GUIDES } from "./guides-dev-integrity";
import { WAVE3_GUIDES } from "./guides-wave3";
import { GUIDES_TRANSLATIONS } from "./i18n/guides-translations";
import { GUIDE_BODY_TRANSLATIONS } from "./i18n/guides-body-translations";
import type { Language } from "./i18n/context";

export interface LocalizedText {
  en: string;
  it: string;
  es?: string;
  fr?: string;
  de?: string;
  pt?: string;
  [key: string]: string | undefined;
}

export interface GuideStep {
  title: LocalizedText;
  description: LocalizedText;
}

export interface GuideFaq {
  question: LocalizedText;
  answer: LocalizedText;
}

export interface GuideArticle {
  slug: string;
  toolId: string;
  category: "pdf" | "image" | "audio" | "document" | "text" | "privacy";
  datePublished: string;
  readTime: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  metaTitle: LocalizedText;
  metaDescription: LocalizedText;
  seoKeyword: LocalizedText;
  steps: GuideStep[];
  intro: LocalizedText;
  deepDive: LocalizedText;
  faq: GuideFaq[];
}

const GUIDE_LOCALES: Language[] = ["it", "en", "es", "fr", "de", "pt"];

// Titles and excerpts come from guides-translations-*.ts, full bodies
// (intro, deepDive, steps, faq, meta) from guides-body-*.ts, keyed by slug.
function withTranslations(guide: GuideArticle): GuideArticle {
  let g = guide;
  const trans = GUIDES_TRANSLATIONS[g.slug];
  if (trans) {
    g = {
      ...g,
      title: { ...g.title, ...trans.title },
      excerpt: { ...g.excerpt, ...trans.excerpt },
      intro: { ...g.intro, ...(trans.intro || {}) },
      deepDive: { ...g.deepDive, ...(trans.deepDive || {}) },
    };
  }
  for (const [locale, bySlug] of Object.entries(GUIDE_BODY_TRANSLATIONS)) {
    const tr = bySlug[g.slug];
    if (!tr) continue;
    g = {
      ...g,
      metaTitle: { ...g.metaTitle, [locale]: tr.metaTitle },
      metaDescription: { ...g.metaDescription, [locale]: tr.metaDescription },
      seoKeyword: { ...g.seoKeyword, [locale]: tr.seoKeyword },
      intro: { ...g.intro, [locale]: tr.intro },
      deepDive: { ...g.deepDive, [locale]: tr.deepDive },
      steps:
        tr.steps.length === g.steps.length
          ? g.steps.map((s, i) => ({
              title: { ...s.title, [locale]: tr.steps[i][0] },
              description: { ...s.description, [locale]: tr.steps[i][1] },
            }))
          : g.steps,
      faq:
        tr.faq.length === g.faq.length
          ? g.faq.map((f, i) => ({
              question: { ...f.question, [locale]: tr.faq[i][0] },
              answer: { ...f.answer, [locale]: tr.faq[i][1] },
            }))
          : g.faq,
    };
  }
  return g;
}

export const GUIDES_REGISTRY: GuideArticle[] = [
  ...PDF_GUIDES,
  ...IMAGE_GUIDES,
  ...AUDIO_GUIDES,
  ...OFFICE_TEXT_GUIDES,
  ...DEV_INTEGRITY_GUIDES,
  ...WAVE3_GUIDES,
].map(withTranslations);

/** Locales in which every field of the guide is written (only these are indexed). */
export function getGuideLocales(guide: GuideArticle): Language[] {
  const texts: LocalizedText[] = [
    guide.title,
    guide.excerpt,
    guide.metaTitle,
    guide.metaDescription,
    guide.seoKeyword,
    guide.intro,
    guide.deepDive,
    ...guide.steps.flatMap((s) => [s.title, s.description]),
    ...guide.faq.flatMap((f) => [f.question, f.answer]),
  ];
  return GUIDE_LOCALES.filter((l) => texts.every((t) => !!t[l]));
}

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return GUIDES_REGISTRY.find((guide) => guide.slug === slug);
}

export function getGuideByToolId(toolId: string): GuideArticle | undefined {
  return GUIDES_REGISTRY.find((guide) => guide.toolId === toolId);
}
