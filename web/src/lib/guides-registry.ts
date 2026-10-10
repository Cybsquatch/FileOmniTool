import { PDF_GUIDES } from "./guides-pdf";
import { IMAGE_GUIDES } from "./guides-images";
import { AUDIO_GUIDES } from "./guides-audio";
import { OFFICE_TEXT_GUIDES } from "./guides-office-text";
import { DEV_INTEGRITY_GUIDES } from "./guides-dev-integrity";
import { WAVE3_GUIDES } from "./guides-wave3";

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

export const GUIDES_REGISTRY: GuideArticle[] = [
  ...PDF_GUIDES,
  ...IMAGE_GUIDES,
  ...AUDIO_GUIDES,
  ...OFFICE_TEXT_GUIDES,
  ...DEV_INTEGRITY_GUIDES,
  ...WAVE3_GUIDES,
];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return GUIDES_REGISTRY.find((guide) => guide.slug === slug);
}

export function getGuideByToolId(toolId: string): GuideArticle | undefined {
  return GUIDES_REGISTRY.find((guide) => guide.toolId === toolId);
}
