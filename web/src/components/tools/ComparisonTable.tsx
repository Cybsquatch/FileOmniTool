"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/context";
import { Check, X, Shield, Zap, Sparkles } from "lucide-react";

export const ComparisonTable: React.FC = () => {
  const { language } = useLanguage();

  const comparisonData = [
    {
      feature: {
        en: "Server Upload & Privacy",
        it: "Upload su Server & Privacy",
      },
      omni: {
        en: "Zero Uploads (100% In-Browser RAM)",
        it: "Zero Upload (100% Locale nella RAM)",
      },
      others: {
        en: "Files uploaded to remote cloud disks",
        it: "File caricati su server cloud terzi",
      },
      winner: true,
    },
    {
      feature: {
        en: "File Size Restrictions",
        it: "Limiti di Dimensione File",
      },
      omni: {
        en: "Unlimited (Uses your device's memory)",
        it: "Illimitato (Usa la memoria del tuo dispositivo)",
      },
      others: {
        en: "Capped at 15-50 MB (Requires paid plans)",
        it: "Limitato a 15-50 MB (Richiede abbonamento)",
      },
      winner: true,
    },
    {
      feature: {
        en: "Speed & Bandwidth",
        it: "Velocità & Consumo Dati",
      },
      omni: {
        en: "Instant (Zero network lag, local hardware)",
        it: "Istantaneo (Zero consumo dati, hardware locale)",
      },
      others: {
        en: "Slow upload & download wait times",
        it: "Lento (Attese di upload e download via rete)",
      },
      winner: true,
    },
    {
      feature: {
        en: "Account & Registration",
        it: "Account & Registrazione",
      },
      omni: {
        en: "No signup, no email required",
        it: "Nessun account o email richiesta",
      },
      others: {
        en: "Aggressive signup popups & daily caps",
        it: "Popup aggressivi e limiti di uso giornalieri",
      },
      winner: true,
    },
    {
      feature: {
        en: "Confidential Documents (GDPR)",
        it: "Documenti Riservati & GDPR",
      },
      omni: {
        en: "Safe for medical, tax & legal files",
        it: "Ideale per fatture, contratti e dati bancari",
      },
      others: {
        en: "Compliance and data leak risks",
        it: "Rischio data-breach e profilazione",
      },
      winner: true,
    },
    {
      feature: {
        en: "Pricing & Transparency",
        it: "Prezzo & Trasparenza",
      },
      omni: {
        en: "100% Free Forever",
        it: "100% Gratuito per sempre",
      },
      others: {
        en: "Monthly subscriptions ($6 - $15/mo)",
        it: "Abbonamenti mensili a pagamento (6€ - 15€/mese)",
      },
      winner: true,
    },
  ];

  return (
    <section className="mx-auto mt-16 max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 sm:p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-6 border-b border-zinc-100 dark:border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{language === "it" ? "Confronto Architetturale" : "Architecture Comparison"}</span>
            </div>
            <h2 className="mt-1 text-xl font-bold text-zinc-900 dark:text-white">
              {language === "it" ? "FileOmniTool vs Altri Servizi Cloud" : "FileOmniTool vs Traditional Cloud Converters"}
            </h2>
          </div>
          <p className="text-xs text-zinc-500 max-w-xs dark:text-zinc-400">
            {language === "it"
              ? "Perché l'elaborazione locale garantisce massima privacy e velocità superiore."
              : "Why client-side processing gives you superior privacy and zero wait times."}
          </p>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800">
                <th className="py-3 px-3 font-semibold text-zinc-500 uppercase tracking-wider">
                  {language === "it" ? "Funzionalità" : "Feature"}
                </th>
                <th className="py-3 px-4 font-bold text-emerald-700 bg-emerald-50/70 rounded-t-xl dark:bg-emerald-950/40 dark:text-emerald-300">
                  FileOmniTool (100% In-Browser)
                </th>
                <th className="py-3 px-4 font-medium text-zinc-500">
                  {language === "it" ? "Convertitori Cloud Convenzionali" : "Traditional Cloud Converters"}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/60">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition">
                  <td className="py-3.5 px-3 font-semibold text-zinc-800 dark:text-zinc-200">
                    {row.feature[language] || row.feature.en}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-800 bg-emerald-50/40 dark:bg-emerald-950/20 dark:text-emerald-200">
                    <div className="flex items-center gap-2">
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                      </div>
                      <span>{row.omni[language] || row.omni.en}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-zinc-500 dark:text-zinc-400">
                    <div className="flex items-center gap-2">
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                        <X className="h-2.5 w-2.5 stroke-[2.5]" />
                      </div>
                      <span>{row.others[language] || row.others.en}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
