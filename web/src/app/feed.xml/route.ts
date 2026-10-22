import { NextResponse } from "next/server";
import { ARTICLES_REGISTRY } from "@/lib/articles-registry";

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.fileomnitool.com";
  const now = new Date().toUTCString();

  const itemsXml = ARTICLES_REGISTRY.map((article) => {
    const pubDate = new Date(article.dateModified || article.datePublished).toUTCString();
    const url = `${baseUrl}/articles/${article.slug}`;
    const title = escapeXml(article.title.en || article.title.it);
    const description = escapeXml(article.excerpt.en || article.excerpt.it);

    return `    <item>
      <title>${title}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${description}</description>
      <author>security@fileomnitool.com (${escapeXml(article.author)})</author>
      <category>${escapeXml(article.category)}</category>
    </item>`;
  }).join("\n");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>FileOmniTool - In-Browser Privacy Tools &amp; Engineering Reports</title>
    <link>${baseUrl}</link>
    <description>Latest security guides, privacy deep-dives, and client-side web utility articles from FileOmniTool.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=14400",
    },
  });
}
