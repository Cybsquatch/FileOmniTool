import { MetadataRoute } from "next";
import { TOOLS_REGISTRY } from "@/lib/tools-registry";
import { GUIDES_REGISTRY } from "@/lib/guides-registry";
import { ARTICLES_REGISTRY } from "@/lib/articles-registry";
import { ALL_LOCALES, getLocalizedUrl } from "@/lib/seo-helpers";
import { Language } from "@/lib/i18n/context";

export default function sitemap(): MetadataRoute.Sitemap {
  const getAlternates = (path: string) => {
    const languages: Record<string, string> = {};
    for (const loc of ALL_LOCALES) {
      languages[loc] = getLocalizedUrl(path, loc);
    }
    languages["x-default"] = getLocalizedUrl(path, "en");
    return { languages };
  };

  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  // 1. Static Core Pages (Home, Guides Index, Privacy) across all 6 locales
  for (const locale of ALL_LOCALES) {
    entries.push({
      url: getLocalizedUrl("/", locale),
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: locale === "it" || locale === "en" ? 1.0 : 0.9,
      alternates: getAlternates("/"),
    });

    entries.push({
      url: getLocalizedUrl("/guides", locale),
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.85,
      alternates: getAlternates("/guides"),
    });

    entries.push({
      url: getLocalizedUrl("/articles", locale),
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.88,
      alternates: getAlternates("/articles"),
    });

    entries.push({
      url: getLocalizedUrl("/privacy", locale),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
      alternates: getAlternates("/privacy"),
    });

    entries.push({
      url: getLocalizedUrl("/terms", locale),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
      alternates: getAlternates("/terms"),
    });
  }

  // 2. All 77 Tools across all 6 locales
  for (const tool of TOOLS_REGISTRY) {
    const path = `/tools/${tool.id}`;
    const alternates = getAlternates(path);

    for (const locale of ALL_LOCALES) {
      entries.push({
        url: getLocalizedUrl(path, locale),
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: tool.popular ? 0.9 : 0.8,
        alternates,
      });
    }
  }

  // 3. 75 Guides across all 6 locales (450 guide URLs)
  for (const guide of GUIDES_REGISTRY) {
    const path = `/guides/${guide.slug}`;
    const alternates = getAlternates(path);
    const published = new Date(guide.datePublished);

    for (const locale of ALL_LOCALES) {
      entries.push({
        url: getLocalizedUrl(path, locale),
        lastModified: published,
        changeFrequency: "weekly" as const,
        priority: 0.85,
        alternates,
      });
    }
  }

  // 4. Articles across all 6 locales (30 article URLs)
  for (const article of ARTICLES_REGISTRY) {
    const path = `/articles/${article.slug}`;
    const alternates = getAlternates(path);
    const published = new Date(article.datePublished);

    for (const locale of ALL_LOCALES) {
      entries.push({
        url: getLocalizedUrl(path, locale),
        lastModified: published,
        changeFrequency: "monthly" as const,
        priority: 0.9,
        alternates,
      });
    }
  }

  return entries;
}
