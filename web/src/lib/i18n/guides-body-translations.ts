import { GUIDES_BODY_ES } from "./guides-body-es";
import { GUIDES_BODY_FR } from "./guides-body-fr";
import { GUIDES_BODY_DE } from "./guides-body-de";
import { GUIDES_BODY_PT } from "./guides-body-pt";

/**
 * Full guide body for one locale, translated from the English source.
 * steps and faq are [title, description] / [question, answer] pairs in the
 * same order as the English guide; the merge skips them if the count differs.
 */
export interface GuideBodyTranslation {
  metaTitle: string;
  metaDescription: string;
  seoKeyword: string;
  intro: string;
  deepDive: string;
  steps: [string, string][];
  faq: [string, string][];
}

export type GuideBodyTranslations = Record<string, GuideBodyTranslation>;

export const GUIDE_BODY_TRANSLATIONS: Record<"es" | "fr" | "de" | "pt", GuideBodyTranslations> = {
  es: GUIDES_BODY_ES,
  fr: GUIDES_BODY_FR,
  de: GUIDES_BODY_DE,
  pt: GUIDES_BODY_PT,
};
