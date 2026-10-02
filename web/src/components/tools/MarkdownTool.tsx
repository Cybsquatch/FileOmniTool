"use client";

import React, { useState } from "react";
import { AdBanner } from "../ads/AdBanner";
import { FileCode, Download, Copy, Check, Eye } from "lucide-react";

const SAMPLE_MD = `# Benvenuto su FileOmniTool 🚀

Questo è un editor **Markdown** con anteprima istantanea nel browser.

## Funzionalità Principali
- **Zero Upload:** I tuoi appunti non lasciano mai il browser.
- **Supporto Elenchi:**
  1. Primo punto
  2. Secondo punto
  3. Terzo punto
- **Blocchi di Codice:**
\`\`\`javascript
function saluta() {
  console.log("Ciao da FileOmniTool!");
}
\`\`\`

> "La privacy è un diritto fondamentale, anche quando converti o modifichi documenti."

*Puoi scaricare direttamente la pagina HTML finita con un click!*
`;

export const MarkdownTool: React.FC = () => {
  const [markdown, setMarkdown] = useState(SAMPLE_MD);
  const [copied, setCopied] = useState(false);

  // Parser Markdown leggero client-side in puro JS
  const parseMarkdownToHtml = (md: string): string => {
    let html = md
      .replace(/^### (.*$)/gim, '<h3 class="text-base font-bold my-2 text-zinc-900 dark:text-white">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-lg font-bold my-3 text-zinc-900 dark:text-white border-b border-zinc-200 pb-1">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-xl font-extrabold my-4 text-zinc-900 dark:text-white">$1</h1>')
      .replace(/^\> (.*$)/gim, '<blockquote class="border-l-4 border-emerald-500 pl-4 py-1 my-3 italic text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/50 rounded-r">$1</blockquote>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/```([\s\S]*?)```/gim, '<pre class="bg-zinc-900 text-zinc-100 p-3 rounded-xl my-3 text-xs overflow-x-auto font-mono"><code>$1</code></pre>')
      .replace(/`([^`]+)`/gim, '<code class="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-xs font-mono text-emerald-600 dark:text-emerald-400">$1</code>')
      .replace(/^\s*\n\*/gm, '<ul>\n*')
      .replace(/^(\*.+)\s*\n([^\*])/gm, '$1\n</ul>\n\n$2')
      .replace(/^\*(.+)/gm, '<li class="ml-4 list-disc">$1</li>')
      .replace(/^\s*\n\d\./gm, '<ol>\n1.')
      .replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2')
      .replace(/^\d\.(.+)/gm, '<li class="ml-4 list-decimal">$1</li>')
      .replace(/\n$/gim, '<br />');

    return html.trim();
  };

  const htmlOutput = parseMarkdownToHtml(markdown);
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  const chars = markdown.length;

  const copyHtml = () => {
    navigator.clipboard.writeText(htmlOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadHtml = () => {
    const doc = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Documento Markdown</title><style>body{font-family:sans-serif;line-height:1.6;max-width:800px;margin:40px auto;padding:0 20px;}code{background:#f4f4f4;padding:2px 4px;border-radius:4px;}pre{background:#1e1e1e;color:#fff;padding:12px;border-radius:8px;}blockquote{border-left:4px solid #10b981;margin:0;padding-left:16px;font-style:italic;}</style></head><body>${htmlOutput}</body></html>`;
    const blob = new Blob([doc], { type: "text/html;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "documento.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-100 text-teal-600 dark:bg-teal-950 dark:text-teal-400">
              <FileCode className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              {words} parole • {chars} caratteri
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyHtml}
              className="flex items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? "Copiato!" : "Copia HTML"}</span>
            </button>
            <button
              onClick={downloadHtml}
              className="flex items-center gap-1.5 rounded-xl bg-teal-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-teal-700 active:scale-95"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Scarica HTML</span>
            </button>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Editor Markdown:
            </label>
            <textarea
              rows={14}
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="mt-1.5 w-full font-mono rounded-xl border border-zinc-300 bg-zinc-50 p-3 text-xs text-zinc-900 focus:border-teal-500 focus:bg-white focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
            />
          </div>

          <div>
            <div className="flex items-center gap-1.5 pb-1">
              <Eye className="h-3.5 w-3.5 text-teal-600" />
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Anteprima HTML Live:
              </label>
            </div>
            <iframe
              title="Markdown Live Preview"
              srcDoc={`<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:system-ui,-apple-system,sans-serif;font-size:13px;line-height:1.6;color:#27272a;margin:16px;padding:0;}h1,h2,h3{color:#09090b;margin-top:1em;margin-bottom:0.5em;}code{background:#f4f4f5;padding:2px 5px;border-radius:4px;font-family:monospace;}pre{background:#18181b;color:#fafafa;padding:12px;border-radius:8px;overflow-x:auto;}blockquote{border-left:4px solid #10b981;margin:10px 0;padding-left:12px;color:#52525b;font-style:italic;}ul,ol{padding-left:20px;}</style></head><body>${htmlOutput}</body></html>`}
              sandbox=""
              className="h-72 w-full rounded-xl border border-zinc-200 bg-white shadow-inner dark:border-zinc-800 dark:bg-zinc-950"
            />
          </div>
        </div>
      </div>

      <AdBanner slot="action-card" />
    </div>
  );
};
