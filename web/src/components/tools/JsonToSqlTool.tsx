"use client";

import React, { useState } from "react";
import { Copy, Download, Database, CheckCircle2, Sliders } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export const JsonToSqlTool: React.FC = () => {
  const { language } = useLanguage();
  const [jsonInput, setJsonInput] = useState(
    JSON.stringify(
      [
        { id: 1, name: "Mario Rossi", email: "mario@example.com", active: true, balance: 150.5 },
        { id: 2, name: "Luigi Bianchi", email: "luigi@example.com", active: false, balance: 0.0 },
        { id: 3, name: "Anna Verdi", email: "anna@example.com", active: true, balance: 340.2 }
      ],
      null,
      2
    )
  );
  const [sqlOutput, setSqlOutput] = useState("");
  const [tableName, setTableName] = useState("users");
  const [dialect, setDialect] = useState<"mysql" | "postgres" | "sqlite">("mysql");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const escapeValue = (val: unknown): string => {
    if (val === null || val === undefined) return "NULL";
    if (typeof val === "number") return isNaN(val) ? "NULL" : val.toString();
    if (typeof val === "boolean") return val ? "1" : "0";
    if (typeof val === "object") return `'${JSON.stringify(val).replace(/'/g, "''")}'`;
    return `'${String(val).replace(/'/g, "''")}'`;
  };

  const wrapIdentifier = (id: string, d: string): string => {
    if (d === "mysql") return `\`${id}\``;
    return `"${id}"`;
  };

  const convertJsonToSql = (raw: string, tbl: string, d: "mysql" | "postgres" | "sqlite") => {
    try {
      setError(null);
      if (!raw.trim()) {
        setSqlOutput("");
        return;
      }

      const parsed = JSON.parse(raw);
      const rows = Array.isArray(parsed) ? parsed : [parsed];

      if (rows.length === 0) {
        setSqlOutput("-- Nessun record trovato nel JSON");
        return;
      }

      // Collect all unique column names
      const columnsSet = new Set<string>();
      rows.forEach((r) => {
        if (typeof r === "object" && r !== null) {
          Object.keys(r).forEach((k) => columnsSet.add(k));
        }
      });
      const columns = Array.from(columnsSet);

      if (columns.length === 0) {
        setSqlOutput("-- Nessun campo valido presente negli oggetti");
        return;
      }

      const safeTable = wrapIdentifier(tbl.trim() || "my_table", d);
      const safeCols = columns.map((c) => wrapIdentifier(c, d)).join(", ");

      const sqlLines: string[] = [];
      sqlLines.push(`-- Generato con FileOmniTool (100% In-Browser)`);
      sqlLines.push(`-- Tabella: ${safeTable} (${rows.length} righe)\n`);

      // Generate INSERT statements
      rows.forEach((row) => {
        const values = columns.map((col) => escapeValue(row[col])).join(", ");
        sqlLines.push(`INSERT INTO ${safeTable} (${safeCols}) VALUES (${values});`);
      });

      setSqlOutput(sqlLines.join("\n"));
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Sintassi JSON non valida";
      setError(msg);
      setSqlOutput("");
    }
  };

  React.useEffect(() => {
    convertJsonToSql(jsonInput, tableName, dialect);
  }, []);

  const handleCopy = async () => {
    if (!sqlOutput) return;
    await navigator.clipboard.writeText(sqlOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!sqlOutput) return;
    const blob = new Blob([sqlOutput], { type: "application/sql;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${tableName || "export"}.sql`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Settings Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
              {language === "it" ? "Nome Tabella:" : "Table Name:"}
            </label>
            <input
              type="text"
              value={tableName}
              onChange={(e) => {
                const val = e.target.value;
                setTableName(val);
                convertJsonToSql(jsonInput, val, dialect);
              }}
              className="mt-1 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-800 outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            />
          </div>

          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
              {language === "it" ? "Dialetto SQL:" : "SQL Dialect:"}
            </label>
            <select
              value={dialect}
              onChange={(e) => {
                const val = e.target.value as "mysql" | "postgres" | "sqlite";
                setDialect(val);
                convertJsonToSql(jsonInput, tableName, val);
              }}
              className="mt-1 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-800 outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              <option value="mysql">MySQL / MariaDB (`col`)</option>
              <option value="postgres">PostgreSQL ("col")</option>
              <option value="sqlite">SQLite ("col")</option>
            </select>
          </div>
        </div>

        {sqlOutput && (
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              {copied ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? (language === "it" ? "Copiato!" : "Copied!") : (language === "it" ? "Copia SQL" : "Copy SQL")}</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{language === "it" ? "Scarica .SQL" : "Download .SQL"}</span>
            </button>
          </div>
        )}
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
          {error}
        </div>
      )}

      {/* Editor Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            {language === "it" ? "Input JSON (Array di oggetti o singolo record)" : "Input JSON (Array or Object)"}
          </label>
          <textarea
            value={jsonInput}
            onChange={(e) => {
              const val = e.target.value;
              setJsonInput(val);
              convertJsonToSql(val, tableName, dialect);
            }}
            className="h-96 w-full rounded-2xl border border-zinc-200 bg-white p-4 font-mono text-xs leading-relaxed text-zinc-800 shadow-sm outline-none transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            {language === "it" ? "Output Query SQL INSERT" : "Output SQL INSERT Queries"}
          </label>
          <textarea
            readOnly
            value={sqlOutput}
            placeholder="Le query SQL INSERT appariranno qui..."
            className="h-96 w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-800 shadow-sm outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
          />
        </div>
      </div>
    </div>
  );
};
