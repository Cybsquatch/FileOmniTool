import { TOOLS_TRANSLATIONS_BASE, ToolTranslationEntry } from "./tools-translations-base";
import { TOOLS_TRANSLATIONS_EXPANDED } from "./tools-translations-expanded";
import { TOOLS_TRANSLATIONS_WAVE3 } from "./tools-translations-wave3";

export type { ToolTranslationEntry };

export const TOOLS_TRANSLATIONS: Record<string, ToolTranslationEntry> = {
  ...TOOLS_TRANSLATIONS_BASE,
  ...TOOLS_TRANSLATIONS_EXPANDED,
  ...TOOLS_TRANSLATIONS_WAVE3,
};
