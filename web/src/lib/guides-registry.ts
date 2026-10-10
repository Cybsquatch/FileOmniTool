import { PDF_GUIDES } from "./guides-pdf";
import { IMAGE_GUIDES } from "./guides-images";
import { AUDIO_GUIDES } from "./guides-audio";
import { OFFICE_TEXT_GUIDES } from "./guides-office-text";
import { DEV_INTEGRITY_GUIDES } from "./guides-dev-integrity";
import { WAVE3_GUIDES } from "./guides-wave3";

export interface GuideStep {
  title: { en: string; it: string };
  description: { en: string; it: string };
}

export interface GuideFaq {
  question: { en: string; it: string };
  answer: { en: string; it: string };
}

export interface GuideArticle {
  slug: string;
  toolId: string;
  category: "pdf" | "image" | "audio" | "document" | "text" | "privacy";
  datePublished: string;
  readTime: string;
  title: { en: string; it: string };
  excerpt: { en: string; it: string };
  metaTitle: { en: string; it: string };
  metaDescription: { en: string; it: string };
  seoKeyword: { en: string; it: string };
  steps: GuideStep[];
  intro: { en: string; it: string };
  deepDive: { en: string; it: string };
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
