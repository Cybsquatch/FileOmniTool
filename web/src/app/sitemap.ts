import { MetadataRoute } from "next";
import { TOOLS_REGISTRY } from "@/lib/tools-registry";
import { GUIDES_REGISTRY } from "@/lib/guides-registry";
import { ARTICLES_REGISTRY, getArticleLocales } from "@/lib/articles-registry";
import { ALL_LOCALES, LONGFORM_LOCALES, getLocalizedUrl } from "@/lib/seo-helpers";
import { Language } from "@/lib/i18n/context";

export default function sitemap(): MetadataRoute.Sitemap {
  const getAlternates = (path: string, locales: Language[] = ALL_LOCALES) => {
    const languages: Record<string, string> = {};
    for (const loc of locales) {
      languages[loc] = getLocalizedUrl(path, loc);
    }
    languages["x-default"] = getLocalizedUrl(path, "en");
    return { languages };
  };

  const entries: MetadataRoute.Sitemap = [];
  // Real content dates only: a lastmod that changes on every build is ignored by Google
  const articleDates = ARTICLES_REGISTRY.map((a) => a.dateModified || a.datePublished);
  const guideDates = GUIDES_REGISTRY.map((g) => g.datePublished);
  const latest = (dates: string[]) => new Date(dates.reduce((max, d) => (d > max ? d : max)));
  const latestContent = latest([...articleDates, ...guideDates]);
  const latestArticle = latest(articleDates);
  const latestGuide = latest(guideDates);

  // 1. Static Core Pages (Home, Guides Index, Privacy) across all 6 locales
  for (const locale of ALL_LOCALES) {
    entries.push({
      url: getLocalizedUrl("/", locale),
      lastModified: latestContent,
      changeFrequency: "daily" as const,
      priority: locale === "it" || locale === "en" ? 1.0 : 0.9,
      alternates: getAlternates("/"),
    });

    entries.push({
      url: getLocalizedUrl("/guides", locale),
      lastModified: latestGuide,
      changeFrequency: "daily" as const,
      priority: 0.85,
      alternates: getAlternates("/guides"),
    });

    entries.push({
      url: getLocalizedUrl("/articles", locale),
      lastModified: latestArticle,
      changeFrequency: "daily" as const,
      priority: 0.88,
      alternates: getAlternates("/articles"),
    });

    entries.push({
      url: getLocalizedUrl("/privacy", locale),
      changeFrequency: "monthly" as const,
      priority: 0.5,
      alternates: getAlternates("/privacy"),
    });

    entries.push({
      url: getLocalizedUrl("/about", locale),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: getAlternates("/about"),
    });

    entries.push({
      url: getLocalizedUrl("/terms", locale),
      changeFrequency: "monthly" as const,
      priority: 0.5,
      alternates: getAlternates("/terms"),
    });
  }

  // 2. All tools across all 6 locales
  for (const tool of TOOLS_REGISTRY) {
    const path = `/tools/${tool.id}`;
    const alternates = getAlternates(path);

    for (const locale of ALL_LOCALES) {
      entries.push({
        url: getLocalizedUrl(path, locale),
        changeFrequency: "weekly" as const,
        priority: tool.popular ? 0.9 : 0.8,
        alternates,
      });
    }
  }

  // 3. Guides, only in the locales where their body is fully written
  for (const guide of GUIDES_REGISTRY) {
    const path = `/guides/${guide.slug}`;
    const alternates = getAlternates(path, LONGFORM_LOCALES);
    const published = new Date(guide.datePublished);

    for (const locale of LONGFORM_LOCALES) {
      entries.push({
        url: getLocalizedUrl(path, locale),
        lastModified: published,
        changeFrequency: "weekly" as const,
        priority: 0.85,
        alternates,
      });
    }
  }

  // 4. Articles, only in the locales where their body is fully written
  for (const article of ARTICLES_REGISTRY) {
    const path = `/articles/${article.slug}`;
    const locales = getArticleLocales(article);
    const alternates = getAlternates(path, locales);
    const lastMod = new Date(article.dateModified || article.datePublished);

    for (const locale of locales) {
      entries.push({
        url: getLocalizedUrl(path, locale),
        lastModified: lastMod,
        changeFrequency: "weekly" as const,
        priority: 0.9,
        alternates,
      });
    }
  }

  return entries;
}
