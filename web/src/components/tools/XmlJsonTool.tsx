"use client";

import React, { useState } from "react";
import { ArrowLeftRight, Copy, Check, Download, AlertCircle } from "lucide-react";

export const XmlJsonTool: React.FC = () => {
  const [direction, setDirection] = useState<"xml-to-json" | "json-to-xml">("xml-to-json");
  const [input, setInput] = useState<string>(
    '<?xml version="1.0" encoding="UTF-8"?>\n<note>\n  <to>Tove</to>\n  <from>Jani</from>\n  <heading>Reminder</heading>\n  <body>Non dimenticare l\'appuntamento!</body>\n</note>'
  );
  const [output, setOutput] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // XML Element to JS Object
  const xmlNodeToObject = (node: Node): any => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.nodeValue?.trim() || "";
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element;
      const obj: Record<string, any> = {};

      // Attributes
      if (element.attributes.length > 0) {
        obj["@attributes"] = {};
        for (let i = 0; i < element.attributes.length; i++) {
          const attr = element.attributes[i];
          obj["@attributes"][attr.name] = attr.value;
        }
      }

      // Children
      const childElements = Array.from(element.children);
      if (childElements.length === 0) {
        const text = element.textContent?.trim() || "";
        if (Object.keys(obj).length === 0) return text;
        obj["#text"] = text;
        return obj;
      }

      childElements.forEach((child) => {
        const childName = child.nodeName;
        const childVal = xmlNodeToObject(child);

        if (obj[childName] !== undefined) {
          if (!Array.isArray(obj[childName])) {
            obj[childName] = [obj[childName]];
          }
          obj[childName].push(childVal);
        } else {
          obj[childName] = childVal;
        }
      });

      return obj;
    }

    return null;
  };

  // JS Object to XML String
  const objectToXml = (obj: any, rootName: string = "root", indent: string = ""): string => {
    if (obj === null || obj === undefined) return `${indent}<${rootName}/>\n`;

    if (typeof obj !== "object") {
      return `${indent}<${rootName}>${String(obj).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</${rootName}>\n`;
    }

    if (Array.isArray(obj)) {
      return obj.map((item) => objectToXml(item, rootName, indent)).join("");
    }

    let xml = `${indent}<${rootName}>\n`;
    for (const [key, val] of Object.entries(obj)) {
      xml += objectToXml(val, key, indent + "  ");
    }
    xml += `${indent}</${rootName}>\n`;
    return xml;
  };

  const convert = () => {
    if (!input.trim()) {
      setOutput("");
      setError(null);
      return;
    }

    setError(null);

    try {
      if (direction === "xml-to-json") {
        const parser = new DOMParser();
        const doc = parser.parseFromString(input, "application/xml");
        const parserError = doc.querySelector("parsererror");
        if (parserError) {
          throw new Error(parserError.textContent || "Errore di parsing del documento XML.");
        }

        const rootObj = {
          [doc.documentElement.nodeName]: xmlNodeToObject(doc.documentElement),
        };
        setOutput(JSON.stringify(rootObj, null, 2));
      } else {
        const parsedJson = JSON.parse(input);
        const xmlString = '<?xml version="1.0" encoding="UTF-8"?>\n' + objectToXml(parsedJson, "root");
        setOutput(xmlString);
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Errore durante la conversione.");
    }
  };

  React.useEffect(() => {
    convert();
  }, [input, direction]);

  const handleSwitchDirection = () => {
    if (direction === "xml-to-json") {
      setDirection("json-to-xml");
      setInput(output || '{"note":{"to":"Tove","from":"Jani","heading":"Reminder"}}');
    } else {
      setDirection("xml-to-json");
      setInput(output || '<?xml version="1.0"?>\n<note><to>Tove</to></note>');
    }
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!output) return;
    const ext = direction === "xml-to-json" ? "json" : "xml";
    const mime = direction === "xml-to-json" ? "application/json" : "application/xml";
    const blob = new Blob([output], { type: `${mime};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `convertito.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <h3 className="font-semibold text-zinc-900 dark:text-white">
              {direction === "xml-to-json" ? "Conversione XML in JSON" : "Conversione JSON in XML"}
            </h3>
            <button
              onClick={handleSwitchDirection}
              className="flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              <ArrowLeftRight className="h-3 w-3" />
              <span>Inverti Direzione</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? "Copiato!" : "Copia Risultato"}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-500"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Scarica</span>
            </button>
          </div>
        </div>

        {error && (
          <div className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 p-3 text-xs text-red-600 dark:bg-red-950/50 dark:text-red-400">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {direction === "xml-to-json" ? "Documento XML Input" : "Documento JSON Input"}
            </label>
            <textarea
              rows={16}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
            />
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {direction === "xml-to-json" ? "Risultato JSON" : "Risultato XML"}
            </label>
            <textarea
              readOnly
              rows={16}
              value={output}
              className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
