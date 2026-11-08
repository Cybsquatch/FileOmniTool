import { ARTICLES_ES } from "./articles-translations-es";
import { ARTICLES_FR } from "./articles-translations-fr";
import { ARTICLES_DE } from "./articles-translations-de";
import { ARTICLES_PT } from "./articles-translations-pt";

export interface ArticleTranslation {
  keyTakeaways: string[];
  sections: { heading: string; content: string }[];
}

export type ArticleTranslations = Record<string, ArticleTranslation>;

export const ARTICLE_TRANSLATIONS: Record<"es" | "fr" | "de" | "pt", ArticleTranslations> = {
  es: ARTICLES_ES,
  fr: ARTICLES_FR,
  de: ARTICLES_DE,
  pt: ARTICLES_PT,
};
