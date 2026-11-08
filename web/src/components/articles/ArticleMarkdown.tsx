import React from "react";
import Link from "next/link";

// Minimal, safe Markdown renderer for article bodies: builds React elements only
// (no innerHTML). Supports paragraphs, bullet and numbered lists, blockquotes,
// tables, **bold**, *italic*, `code` and [links](url). Internal links are
// prefixed with the current locale.

function localizeHref(href: string, language: string): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  if (language === "it") return href;
  return `/${language}${href === "/" ? "" : href}`;
}

const INLINE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\)|`[^`]+`|\*[^*\s][^*]*\*)/g;

function renderInline(text: string, language: string, keyBase: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(INLINE)) {
    const tok = m[0];
    const start = m.index ?? 0;
    if (start > last) out.push(text.slice(last, start));
    const key = `${keyBase}-${i++}`;
    if (tok.startsWith("**")) {
      out.push(
        <strong key={key} className="font-semibold text-zinc-900 dark:text-white">
          {renderInline(tok.slice(2, -2), language, key)}
        </strong>,
      );
    } else if (tok.startsWith("[")) {
      const lm = tok.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/)!;
      const href = localizeHref(lm[2], language);
      const cls = "font-medium text-emerald-700 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-800 dark:text-emerald-400";
      out.push(
        href.startsWith("/") ? (
          <Link key={key} href={href} className={cls}>
            {lm[1]}
          </Link>
        ) : (
          <a key={key} href={href} className={cls} target="_blank" rel="noopener">
            {lm[1]}
          </a>
        ),
      );
    } else if (tok.startsWith("`")) {
      out.push(
        <code key={key} className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[0.85em] dark:bg-zinc-800">
          {tok.slice(1, -1)}
        </code>,
      );
    } else {
      out.push(<em key={key}>{tok.slice(1, -1)}</em>);
    }
    last = start + tok.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const BULLET = /^\s*[-*•]\s+/;
const NUMBERED = /^\s*\d+\.\s+/;

function renderTable(lines: string[], language: string, key: string) {
  const rows = lines
    .filter((l) => !/^\|\s*:?-{2,}/.test(l))
    .map((l) => l.replace(/^\||\|$/g, "").split("|").map((c) => c.trim()));
  const [head, ...body] = rows;
  return (
    <div key={key} className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
      <table className="w-full text-left text-xs sm:text-sm">
        <thead className="bg-zinc-50 dark:bg-zinc-900">
          <tr>
            {head.map((c, i) => (
              <th key={i} className="px-3 py-2 font-semibold text-zinc-900 dark:text-white">
                {renderInline(c, language, `${key}-h${i}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {body.map((r, ri) => (
            <tr key={ri}>
              {r.map((c, ci) => (
                <td key={ci} className="px-3 py-2 align-top">
                  {renderInline(c, language, `${key}-${ri}-${ci}`)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ArticleMarkdown({ content, language }: { content: string; language: string }) {
  const blocks: React.ReactNode[] = [];
  content.split(/\n{2,}/).forEach((block, bi) => {
    const lines = block.split("\n").filter((l) => l.trim() !== "");
    if (lines.length === 0) return;
    const key = `b${bi}`;

    if (lines.every((l) => l.trim().startsWith("|"))) {
      blocks.push(renderTable(lines, language, key));
      return;
    }
    if (lines.every((l) => l.trim().startsWith(">"))) {
      blocks.push(
        <blockquote key={key} className="border-l-4 border-emerald-400 bg-emerald-50/50 py-2 pl-4 pr-3 italic dark:bg-emerald-950/20">
          {renderInline(lines.map((l) => l.replace(/^\s*>\s?/, "")).join(" "), language, key)}
        </blockquote>,
      );
      return;
    }

    // A block may start with an intro line followed by a list
    const firstList = lines.findIndex((l) => BULLET.test(l) || NUMBERED.test(l));
    if (firstList > 0) {
      blocks.push(
        <p key={`${key}-intro`}>{renderInline(lines.slice(0, firstList).join(" "), language, `${key}-intro`)}</p>,
      );
    }
    if (firstList >= 0) {
      const items: string[] = [];
      for (const l of lines.slice(firstList)) {
        if (BULLET.test(l) || NUMBERED.test(l)) items.push(l.replace(BULLET, "").replace(NUMBERED, ""));
        else if (items.length) items[items.length - 1] += " " + l.trim();
      }
      const ordered = NUMBERED.test(lines[firstList]);
      const ListTag = ordered ? "ol" : "ul";
      blocks.push(
        <ListTag key={key} className={`space-y-2 pl-5 ${ordered ? "list-decimal" : "list-disc"} marker:text-emerald-600`}>
          {items.map((it, ii) => (
            <li key={ii} className="pl-1">
              {renderInline(it, language, `${key}-${ii}`)}
            </li>
          ))}
        </ListTag>,
      );
      return;
    }

    blocks.push(
      <p key={key} className="leading-relaxed">
        {lines.map((l, li) => (
          <React.Fragment key={li}>
            {li > 0 && <br />}
            {renderInline(l, language, `${key}-${li}`)}
          </React.Fragment>
        ))}
      </p>,
    );
  });
  return <>{blocks}</>;
}
