import { GUIDES_TRANSLATIONS_PART1, GuideTranslationEntry } from "./guides-translations-part1";
import { GUIDES_TRANSLATIONS_PART2 } from "./guides-translations-part2";
import { GUIDES_TRANSLATIONS_PART3 } from "./guides-translations-part3";

export type { GuideTranslationEntry };

export const GUIDES_TRANSLATIONS: Record<string, GuideTranslationEntry> = {
  ...GUIDES_TRANSLATIONS_PART1,
  ...GUIDES_TRANSLATIONS_PART2,
  ...GUIDES_TRANSLATIONS_PART3,
};
