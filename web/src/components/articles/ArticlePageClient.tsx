"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArticleMarkdown } from "./ArticleMarkdown";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { AdBanner } from "@/components/ads/AdBanner";
import { ArticleItem } from "@/lib/articles-registry";
import { getToolById, ToolDefinition } from "@/lib/tools-registry";
import { useLanguage } from "@/lib/i18n/context";
import { SocialLinks } from "@/components/common/SocialLinks";
import { ShareButtons } from "@/components/common/ShareButtons";
import { 
  Clock, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Wrench,
  BadgeCheck,
  Calendar,
  Share2,
  Lock,
  ArrowLeft
} from "lucide-react";

interface ArticlePageClientProps {
  article: ArticleItem;
  otherArticles: Pick<ArticleItem, "slug" | "coverEmoji" | "category" | "title">[];
}

const AUTHOR_BIO: Record<string, string> = {
  it: "Riccardo sviluppa e mantiene FileOmniTool da solo. Gli articoli spiegano come funzionano i formati di file e come lavorarci senza caricare documenti online.",
  en: "Riccardo builds and maintains FileOmniTool on his own. The articles explain how file formats work and how to handle them without uploading documents.",
  es: "Riccardo desarrolla y mantiene FileOmniTool por su cuenta. Los artículos explican cómo funcionan los formatos de archivo y cómo trabajar con ellos sin subir documentos.",
  fr: "Riccardo développe et maintient FileOmniTool seul. Les articles expliquent le fonctionnement des formats de fichiers et comment les traiter sans envoyer de documents.",
  de: "Riccardo entwickelt und betreut FileOmniTool allein. Die Artikel erklären, wie Dateiformate funktionieren und wie man sie ohne Upload bearbeitet.",
  pt: "Riccardo desenvolve e mantém o FileOmniTool sozinho. Os artigos explicam como os formatos de arquivo funcionam e como lidar com eles sem enviar documentos.",
};
const AUTHOR_MORE: Record<string, string> = { it: "Chi siamo →", en: "About →", es: "Quiénes somos →", fr: "À propos →", de: "Über uns →", pt: "Quem somos →" };

const UI: Record<string, Record<"articles" | "updated" | "badge" | "takeaways" | "related" | "practice" | "more" | "viewAll" | "read", string>> = {
  it: { articles: "Articoli", updated: "Aggiornato", badge: "Strumenti senza upload", takeaways: "Punti chiave in sintesi", related: "Strumenti gratuiti correlati su FileOmniTool", practice: "Metti in pratica ciò che hai letto, 100% nel tuo browser:", more: "Altri approfondimenti", viewAll: "Vedi tutti gli articoli", read: "Leggi l'articolo" },
  en: { articles: "Articles", updated: "Updated", badge: "No-upload tools", takeaways: "Key takeaways", related: "Related free tools on FileOmniTool", practice: "Put this into practice directly in your browser:", more: "More in-depth articles", viewAll: "View all articles", read: "Read article" },
  es: { articles: "Artículos", updated: "Actualizado", badge: "Herramientas sin subidas", takeaways: "Puntos clave", related: "Herramientas gratuitas relacionadas en FileOmniTool", practice: "Ponlo en práctica directamente en tu navegador:", more: "Más artículos", viewAll: "Ver todos los artículos", read: "Leer artículo" },
  fr: { articles: "Articles", updated: "Mis à jour", badge: "Outils sans envoi", takeaways: "Points clés", related: "Outils gratuits associés sur FileOmniTool", practice: "Mettez-le en pratique directement dans votre navigateur :", more: "Autres articles", viewAll: "Voir tous les articles", read: "Lire l'article" },
  de: { articles: "Artikel", updated: "Aktualisiert", badge: "Werkzeuge ohne Upload", takeaways: "Das Wichtigste in Kürze", related: "Passende kostenlose Werkzeuge auf FileOmniTool", practice: "Direkt im Browser ausprobieren:", more: "Weitere Artikel", viewAll: "Alle Artikel ansehen", read: "Artikel lesen" },
  pt: { articles: "Artigos", updated: "Atualizado", badge: "Ferramentas sem upload", takeaways: "Pontos principais", related: "Ferramentas gratuitas relacionadas no FileOmniTool", practice: "Coloque em prática direto no seu navegador:", more: "Mais artigos", viewAll: "Ver todos os artigos", read: "Ler artigo" },
};

export const ArticlePageClient: React.FC<ArticlePageClientProps> = ({ article, otherArticles }) => {
  const { language, t } = useLanguage();
  const ui = UI[language] ?? UI.en;

  const title = article.title[language] || article.title.en;
  const subtitle = article.subtitle[language] || article.subtitle.en;
  const excerpt = article.excerpt[language] || article.excerpt.en;
  const authorRole = article.authorRole[language] || article.authorRole.en;

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = `${title} | FileOmniTool`;
    }
  }, [title]);

  const relatedTools: ToolDefinition[] = article.relatedToolIds
    .map((id) => getToolById(id))
    .filter((t): t is ToolDefinition => Boolean(t));

  const getArticleUrl = (slug: string) => {
    return language === "it" ? `/articles/${slug}` : `/${language}/articles/${slug}`;
  };

  const getToolUrl = (toolId: string) => {
    return language === "it" ? `/tools/${toolId}` : `/${language}/tools/${toolId}`;
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50/50 font-sans text-zinc-900 selection:bg-emerald-500 selection:text-white dark:bg-zinc-950 dark:text-zinc-100">
      <Header />

      <main className="flex-1 pb-16">
        {/* Breadcrumb Navigation */}
        <div className="mx-auto max-w-4xl px-4 pt-6 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <Link href={language === "it" ? "/" : `/${language}`} className="hover:text-emerald-600 dark:hover:text-emerald-400">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-400" />
            <Link href={language === "it" ? "/articles" : `/${language}/articles`} className="hover:text-emerald-600 dark:hover:text-emerald-400">
              {ui.articles}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-400" />
            <span className="font-semibold text-zinc-800 dark:text-zinc-200 truncate max-w-xs sm:max-w-md">
              {title}
            </span>
          </nav>
        </div>

        {/* Top AdSlot Leaderboard */}
        <section className="mx-auto max-w-4xl px-4 pt-4 sm:px-6 lg:px-8">
          <AdBanner slot="leaderboard" />
        </section>

        {/* Article Header */}
        <header className="mx-auto max-w-4xl px-4 pt-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="text-xl">{article.coverEmoji}</span>
            <span className="rounded-full bg-emerald-50 px-3 py-1 font-semibold uppercase tracking-wider text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
              {article.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-zinc-400" />
              {article.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-zinc-400" />
              {article.datePublished}
            </span>
            {article.dateModified && article.dateModified !== article.datePublished && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
                  <Sparkles className="h-3 w-3 text-emerald-500" />
                  {`${ui.updated}: ${article.dateModified}`}
                </span>
              </>
            )}
            <span>•</span>
            <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>{ui.badge}</span>
            </div>
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-zinc-900 dark:text-white leading-tight">
            {title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed dark:text-zinc-300">
            {subtitle}
          </p>

          {/* Author Badge */}
          <div className="mt-6 flex items-center justify-between border-y border-zinc-200/80 py-4 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 font-extrabold text-white text-base shadow-sm">
                CS
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-zinc-900 dark:text-white">
                    {article.author}
                  </span>
                  <BadgeCheck className="h-4 w-4 text-emerald-600" />
                  <SocialLinks size="sm" className="ml-1" />
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {authorRole}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <ShareButtons title={title} description={subtitle} variant="pill" />
            </div>
          </div>
        </header>

        {/* Key Takeaways Box */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <section className="mx-auto mt-8 max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-50/50 p-6 dark:border-emerald-600/30 dark:bg-emerald-950/20">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>{ui.takeaways}</span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {article.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                    <span>{item[language] || item.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Article Content Sections */}
        <article className="mx-auto mt-10 max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          {article.sections.map((section, idx) => {
            const heading = section.heading[language] || section.heading.en;
            const content = section.content[language] || section.content.en;

            return (
              <React.Fragment key={idx}>
                <div
                  className="rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white leading-snug">
                    {heading}
                  </h2>
                  <div className="mt-5 space-y-4 text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                    <ArticleMarkdown content={content} language={language} />
                  </div>
                </div>

                {/* Mid-Article Sponsor Break after Section 2 */}
                {idx === 1 && (
                  <div className="my-8 flex justify-center">
                    <AdBanner slot="action-card" />
                  </div>
                )}
              </React.Fragment>
            );
          })}

          {/* Related Tools Box */}
          {relatedTools.length > 0 && (
            <section className="rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/50 p-6 shadow-sm dark:border-emerald-600/40 dark:from-emerald-950/30 dark:via-zinc-900 dark:to-zinc-900">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                <Wrench className="h-4 w-4" />
                <span>{ui.related}</span>
              </div>
              <h3 className="mt-2 text-lg font-bold text-zinc-900 dark:text-white">
                {ui.practice}
              </h3>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {relatedTools.map((tool) => (
                  <Link
                    key={tool.id}
                    href={getToolUrl(tool.id)}
                    className="group flex items-center justify-between rounded-xl border border-zinc-200/80 bg-white p-4 shadow-sm transition hover:border-emerald-400 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-600"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 group-hover:text-emerald-600 transition dark:text-white dark:group-hover:text-emerald-400">
                        {tool.title[language] || tool.title.en}
                      </h4>
                      <p className="mt-1 text-[11px] text-zinc-500 line-clamp-1 dark:text-zinc-400">
                        {tool.description[language] || tool.description.en}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Adsterra Native Banner Slot */}
          <div className="py-2">
            <AdBanner slot="native" />
          </div>

          {/* E-E-A-T Author & Testing Trust Box */}
          <section className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-50/60 via-white to-zinc-50 p-6 shadow-sm dark:border-emerald-600/30 dark:from-emerald-950/20 dark:via-zinc-900 dark:to-zinc-900">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white font-extrabold text-xl shadow-md">
                CS
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-bold text-zinc-900 dark:text-white">
                    {article.author}
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                    <BadgeCheck className="h-3 w-3" />
                    {authorRole}
                  </span>
                  <SocialLinks size="sm" className="ml-1" />
                </div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {AUTHOR_BIO[language] ?? AUTHOR_BIO.en}{" "}
                  <Link href={language === "it" ? "/about" : `/${language}/about`} className="font-semibold text-emerald-700 hover:underline dark:text-emerald-400">
                    {AUTHOR_MORE[language] ?? AUTHOR_MORE.en}
                  </Link>
                </p>
              </div>
            </div>
          </section>

          {/* Share Article Banner */}
          <div className="pt-6">
            <ShareButtons title={title} description={subtitle} variant="banner" />
          </div>

          {/* Related Articles Navigation */}
          {otherArticles.length > 0 && (
            <section className="pt-6">
              <div className="flex items-center justify-between pb-4">
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {ui.more}
                </h2>
                <Link
                  href={language === "it" ? "/articles" : `/${language}/articles`}
                  className="text-xs font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
                >
                  {ui.viewAll}
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {otherArticles.slice(0, 2).map((other) => (
                  <Link
                    key={other.slug}
                    href={getArticleUrl(other.slug)}
                    className="group flex flex-col justify-between rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-emerald-800"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base">{other.coverEmoji}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                          {other.category}
                        </span>
                      </div>
                      <h3 className="mt-2 text-xs font-bold text-zinc-900 group-hover:text-emerald-600 transition dark:text-white dark:group-hover:text-emerald-400 line-clamp-2">
                        {other.title[language] || other.title.en}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <span>{ui.read}</span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* Bottom Leaderboard Banner */}
        <section className="mx-auto mt-10 max-w-4xl px-4 sm:px-6 lg:px-8">
          <AdBanner slot="leaderboard" />
        </section>
      </main>

      <Footer />
    </div>
  );
};
