"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { Copy, Download, Code, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export const HtmlToMarkdownTool: React.FC = () => {
  const { language } = useLanguage();
  const [htmlInput, setHtmlInput] = useState(
    `<h1>Benvenuti su FileOmniTool</h1>\n<p>La piattaforma <strong>100% in-browser</strong> per la manipolazione sicura dei file.</p>\n<ul>\n  <li>Zero caricamenti su server cloud</li>\n  <li>Crittografia client-side</li>\n  <li>Tutti gli strumenti gratuiti</li>\n</ul>\n<p>Visita il sito su <a href="https://www.fileomnitool.com">fileomnitool.com</a>.</p>`
  );
  const [mdOutput, setMdOutput] = useState("");
  const [copied, setCopied] = useState(false);

  // Pure in-browser DOM-based HTML to Markdown converter
  const convertNodeToMarkdown = (node: Node): string => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent || "";
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      return "";
    }

    const el = node as HTMLElement;
    const tag = el.tagName.toLowerCase();
    const childrenText = Array.from(el.childNodes).map(convertNodeToMarkdown).join("");

    switch (tag) {
      case "h1":
        return `\n\n# ${childrenText.trim()}\n\n`;
      case "h2":
        return `\n\n## ${childrenText.trim()}\n\n`;
      case "h3":
        return `\n\n### ${childrenText.trim()}\n\n`;
      case "h4":
        return `\n\n#### ${childrenText.trim()}\n\n`;
      case "h5":
        return `\n\n##### ${childrenText.trim()}\n\n`;
      case "h6":
        return `\n\n###### ${childrenText.trim()}\n\n`;
      case "p":
        return `\n\n${childrenText.trim()}\n\n`;
      case "strong":
      case "b":
        return `**${childrenText}**`;
      case "em":
      case "i":
        return `*${childrenText}*`;
      case "code":
        return el.parentElement?.tagName.toLowerCase() === "pre"
          ? childrenText
          : `\`${childrenText}\``;
      case "pre":
        return `\n\n\`\`\`\n${childrenText.trim()}\n\`\`\`\n\n`;
      case "blockquote":
        return `\n\n> ${childrenText.trim()}\n\n`;
      case "ul":
        return `\n\n${childrenText}\n\n`;
      case "ol":
        return `\n\n${childrenText}\n\n`;
      case "li": {
        const isOrdered = el.parentElement?.tagName.toLowerCase() === "ol";
        const prefix = isOrdered ? "1. " : "- ";
        return `${prefix}${childrenText.trim()}\n`;
      }
      case "a": {
        const href = el.getAttribute("href") || "#";
        return `[${childrenText}](${href})`;
      }
      case "img": {
        const src = el.getAttribute("src") || "";
        const alt = el.getAttribute("alt") || "image";
        return `![${alt}](${src})`;
      }
      case "hr":
        return `\n\n---\n\n`;
      case "br":
        return `\n`;
      default:
        return childrenText;
    }
  };

  const convertHtmlToMd = (htmlStr: string) => {
    if (!htmlStr.trim()) {
      setMdOutput("");
      return;
    }
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlStr, "text/html");
      const rawMd = Array.from(doc.body.childNodes).map(convertNodeToMarkdown).join("");
      // Clean duplicate blank lines
      const cleanMd = rawMd.replace(/\n{3,}/g, "\n\n").trim();
      setMdOutput(cleanMd);
    } catch {
      setMdOutput(htmlStr);
    }
  };

  React.useEffect(() => {
    convertHtmlToMd(htmlInput);
  }, []);

  const handleFilesSelected = async (files: File[]) => {
    const file = files[0];
    if (!file) return;
    const text = await file.text();
    setHtmlInput(text);
    convertHtmlToMd(text);
  };

  const handleCopy = async () => {
    if (!mdOutput) return;
    await navigator.clipboard.writeText(mdOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!mdOutput) return;
    const blob = new Blob([mdOutput], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `document.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
        <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
          {language === "it" ? "Convertitore HTML in Markdown" : "HTML to Markdown Converter"}
        </span>

        {mdOutput && (
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              {copied ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? (language === "it" ? "Copiato!" : "Copied!") : (language === "it" ? "Copia Markdown" : "Copy Markdown")}</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{language === "it" ? "Scarica .MD" : "Download .MD"}</span>
            </button>
          </div>
        )}
      </div>

      <Dropzone
        onFilesSelected={handleFilesSelected}
        accept=".html,.htm,text/html"
        helperText={language === "it" ? "Trascina qui un file .html oppure incolla il codice sotto" : "Drag & drop .html file or paste code below"}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            {language === "it" ? "Codice HTML (Input)" : "HTML Source (Input)"}
          </label>
          <textarea
            value={htmlInput}
            onChange={(e) => {
              const val = e.target.value;
              setHtmlInput(val);
              convertHtmlToMd(val);
            }}
            className="h-80 w-full rounded-2xl border border-zinc-200 bg-white p-4 font-mono text-xs leading-relaxed text-zinc-800 shadow-sm outline-none transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            {language === "it" ? "Markdown Risultante (Output)" : "Markdown Output"}
          </label>
          <textarea
            readOnly
            value={mdOutput}
            placeholder="Il codice Markdown convertito apparirà qui..."
            className="h-80 w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-800 shadow-sm outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
          />
        </div>
      </div>
    </div>
  );
};
