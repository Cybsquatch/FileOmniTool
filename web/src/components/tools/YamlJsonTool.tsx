"use client";

import React, { useState } from "react";
import { ArrowLeftRight, Copy, Check, Download, AlertCircle } from "lucide-react";

export const YamlJsonTool: React.FC = () => {
  const [direction, setDirection] = useState<"yaml-to-json" | "json-to-yaml">("yaml-to-json");
  const [input, setInput] = useState<string>(
    "version: '3.8'\nservices:\n  web:\n    image: nginx:latest\n    ports:\n      - '80:80'\n      - '443:443'\n    environment:\n      NODE_ENV: production\n      DEBUG: false"
  );
  const [output, setOutput] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Simple in-browser YAML to JS parser
  const parseYaml = (yaml: string): any => {
    const lines = yaml.split(/\r?\n/).filter((l) => l.trim().length > 0 && !l.trim().startsWith("#"));
    const root: Record<string, any> = {};
    const stack: { indent: number; obj: any; key?: string }[] = [{ indent: -1, obj: root }];

    for (let i = 0; i < lines.length; i++) {
      const rawLine = lines[i];
      const indent = rawLine.search(/\S/);
      const line = rawLine.trim();

      while (stack.length > 1 && stack[stack.length - 1].indent >= indent) {
        stack.pop();
      }
      const currentParent = stack[stack.length - 1].obj;

      if (line.startsWith("- ")) {
        // List item
        const valStr = line.slice(2).trim();
        let val: any = valStr;
        if (valStr.startsWith("'") && valStr.endsWith("'")) val = valStr.slice(1, -1);
        else if (valStr === "true") val = true;
        else if (valStr === "false") val = false;
        else if (!isNaN(Number(valStr)) && valStr !== "") val = Number(valStr);

        if (Array.isArray(currentParent)) {
          currentParent.push(val);
        } else {
          // Parent wasn't an array yet
          const lastKey = stack[stack.length - 1].key;
          if (lastKey && stack.length > 1) {
            const grandParent = stack[stack.length - 2].obj;
            grandParent[lastKey] = [val];
            stack[stack.length - 1].obj = grandParent[lastKey];
          }
        }
      } else if (line.includes(":")) {
        const colonIdx = line.indexOf(":");
        const key = line.slice(0, colonIdx).trim().replace(/^['"]|['"]$/g, "");
        const rawVal = line.slice(colonIdx + 1).trim();

        if (rawVal === "") {
          // Object or array follows
          const nextLine = lines[i + 1] ? lines[i + 1].trim() : "";
          const newObj = nextLine.startsWith("- ") ? [] : {};
          currentParent[key] = newObj;
          stack.push({ indent, obj: newObj, key });
        } else {
          let val: any = rawVal;
          if ((rawVal.startsWith("'") && rawVal.endsWith("'")) || (rawVal.startsWith('"') && rawVal.endsWith('"'))) {
            val = rawVal.slice(1, -1);
          } else if (rawVal === "true") val = true;
          else if (rawVal === "false") val = false;
          else if (!isNaN(Number(rawVal))) val = Number(rawVal);

          currentParent[key] = val;
        }
      }
    }

    return root;
  };

  // Convert JS object to YAML string
  const objectToYaml = (obj: any, indent: number = 0): string => {
    const pad = "  ".repeat(indent);
    if (obj === null || obj === undefined) return "\n";

    if (Array.isArray(obj)) {
      return (
        "\n" +
        obj
          .map((item) => {
            if (typeof item === "object") {
              return `${pad}- ` + objectToYaml(item, indent + 1).trimStart();
            }
            return `${pad}- ${typeof item === "string" ? `'${item}'` : item}\n`;
          })
          .join("")
      );
    }

    if (typeof obj === "object") {
      let yaml = indent === 0 ? "" : "\n";
      for (const [k, v] of Object.entries(obj)) {
        if (typeof v === "object" && v !== null) {
          yaml += `${pad}${k}:${objectToYaml(v, indent + 1)}`;
        } else {
          const valStr = typeof v === "string" ? `'${v}'` : String(v);
          yaml += `${pad}${k}: ${valStr}\n`;
        }
      }
      return yaml;
    }

    return String(obj) + "\n";
  };

  const convert = () => {
    if (!input.trim()) {
      setOutput("");
      setError(null);
      return;
    }

    setError(null);

    try {
      if (direction === "yaml-to-json") {
        const parsed = parseYaml(input);
        setOutput(JSON.stringify(parsed, null, 2));
      } else {
        const parsedJson = JSON.parse(input);
        const yamlStr = objectToYaml(parsedJson);
        setOutput(yamlStr);
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Errore di conversione YAML / JSON.");
    }
  };

  React.useEffect(() => {
    convert();
  }, [input, direction]);

  const handleSwitchDirection = () => {
    if (direction === "yaml-to-json") {
      setDirection("json-to-yaml");
      setInput(output || '{"version":"3.8","services":{"web":{"image":"nginx"}}}');
    } else {
      setDirection("yaml-to-json");
      setInput(output || "version: '3.8'\nservices:\n  web:\n    image: nginx");
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
    const ext = direction === "yaml-to-json" ? "json" : "yaml";
    const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
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
              {direction === "yaml-to-json" ? "Converti YAML in JSON" : "Converti JSON in YAML"}
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
              {direction === "yaml-to-json" ? "Sorgente YAML" : "Sorgente JSON"}
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
              {direction === "yaml-to-json" ? "Risultato JSON" : "Risultato YAML"}
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
