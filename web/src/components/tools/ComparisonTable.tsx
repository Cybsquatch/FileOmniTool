"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/context";
import { Check, X, Shield, Zap, Sparkles } from "lucide-react";

interface ComparisonItem {
  feature: Record<string, string>;
  omni: Record<string, string>;
  others: Record<string, string>;
  winner: boolean;
}

export const ComparisonTable: React.FC = () => {
  const { language } = useLanguage();

  const comparisonData: ComparisonItem[] = [
    {
      feature: {
        en: "Server Upload & Privacy",
        it: "Upload su Server & Privacy",
        es: "Subida a Servidores y Privacidad",
        fr: "Téléversement et Confidentialité",
        de: "Server-Uploads & Datenschutz",
        pt: "Upload para Servidor e Privacidade",
      },
      omni: {
        en: "Zero Uploads (100% In-Browser RAM)",
        it: "Zero Upload (100% Locale nella RAM)",
        es: "Cero Subidas (100% en RAM local)",
        fr: "Zéro Téléversement (100% en RAM locale)",
        de: "Keine Uploads (100% im Browser-RAM)",
        pt: "Zero Uploads (100% na RAM local)",
      },
      others: {
        en: "Files uploaded to remote cloud disks",
        it: "File caricati su server cloud terzi",
        es: "Archivos subidos a discos en la nube",
        fr: "Fichiers envoyés sur des serveurs distants",
        de: "Dateien werden auf Cloud-Server geladen",
        pt: "Arquivos enviados para servidores na nuvem",
      },
      winner: true,
    },
    {
      feature: {
        en: "File Size Restrictions",
        it: "Limiti di Dimensione File",
        es: "Límites de Tamaño de Archivo",
        fr: "Limites de Taille de Fichier",
        de: "Dateigrößen-Beschränkungen",
        pt: "Limites de Tamanho de Arquivo",
      },
      omni: {
        en: "Unlimited (Uses your device's memory)",
        it: "Illimitato (Usa la memoria del tuo dispositivo)",
        es: "Ilimitado (Usa la memoria de tu dispositivo)",
        fr: "Illimité (Utilise la mémoire de l'appareil)",
        de: "Unbegrenzt (Nutzt Gerätespeicher)",
        pt: "Ilimitado (Usa a memória do seu aparelho)",
      },
      others: {
        en: "Capped at 15-50 MB (Requires paid plans)",
        it: "Limitato a 15-50 MB (Richiede abbonamento)",
        es: "Limitado a 15-50 MB (Exige pago)",
        fr: "Limité à 15-50 Mo (Abonnement payant requis)",
        de: "Begrenzt auf 15-50 MB (Abo erforderlich)",
        pt: "Limitado a 15-50 MB (Exige assinatura)",
      },
      winner: true,
    },
    {
      feature: {
        en: "Speed & Bandwidth",
        it: "Velocità & Consumo Dati",
        es: "Velocidad y Consumo de Datos",
        fr: "Rapidité et Bande Passante",
        de: "Geschwindigkeit & Bandbreite",
        pt: "Velocidade e Consumo de Dados",
      },
      omni: {
        en: "Instant (Zero network lag, local hardware)",
        it: "Istantaneo (Zero consumo dati, hardware locale)",
        es: "Instantáneo (Sin lag de red, hardware local)",
        fr: "Instantané (Zéro latence réseau, matériel local)",
        de: "Sofort (Keine Netzwerklatenz, lokale CPU)",
        pt: "Instantâneo (Sem atraso de rede, hardware local)",
      },
      others: {
        en: "Slow upload & download wait times",
        it: "Lento (Attese di upload e download via rete)",
        es: "Lento (Tiempos de subida y bajada por red)",
        fr: "Lent (Temps d'attente transfert réseau)",
        de: "Langsam (Wartezeiten für Up- und Download)",
        pt: "Lento (Tempos de espera para upload e download)",
      },
      winner: true,
    },
    {
      feature: {
        en: "Account & Registration",
        it: "Account & Registrazione",
        es: "Cuenta y Registro",
        fr: "Compte et Inscription",
        de: "Konto & Registrierung",
        pt: "Conta e Cadastro",
      },
      omni: {
        en: "No signup, no email required",
        it: "Nessun account o email richiesta",
        es: "Sin registro ni correo obligatorio",
        fr: "Aucune inscription ni email requis",
        de: "Keine Anmeldung, keine E-Mail nötig",
        pt: "Sem cadastro nem e-mail obrigatório",
      },
      others: {
        en: "Aggressive signup popups & daily caps",
        it: "Popup aggressivi e limiti di uso giornalieri",
        es: "Popups molestos y límites de uso diarios",
        fr: "Popups agressifs et quotas quotidiens",
        de: "Aufdringliche Popups und Tageslimits",
        pt: "Popups insistentes e limites diários de uso",
      },
      winner: true,
    },
    {
      feature: {
        en: "Confidential Documents (GDPR)",
        it: "Documenti Riservati & GDPR",
        es: "Documentos Confidenciales (RGPD)",
        fr: "Documents Confidentiels (RGPD)",
        de: "Vertrauliche Dokumente (DSGVO)",
        pt: "Documentos Confidenciais (LGPD)",
      },
      omni: {
        en: "Safe for medical, tax & legal files",
        it: "Ideale per fatture, contratti e dati bancari",
        es: "Seguro para contratos, nóminas e impuestos",
        fr: "Sûr pour contrats, factures et données médicales",
        de: "Sicher für Verträge, Finanzen und Steuerdaten",
        pt: "Seguro para contratos, holerites e impostos",
      },
      others: {
        en: "Compliance and data leak risks",
        it: "Rischio data-breach e profilazione",
        es: "Riesgos de filtración y cumplimiento",
        fr: "Risques de fuites et non-conformité légale",
        de: "Risiko von Datenlecks und Profiling",
        pt: "Riscos de vazamento e não conformidade",
      },
      winner: true,
    },
    {
      feature: {
        en: "Pricing & Transparency",
        it: "Prezzo & Trasparenza",
        es: "Precio y Transparencia",
        fr: "Tarification et Transparence",
        de: "Preise & Transparenz",
        pt: "Preço e Transparência",
      },
      omni: {
        en: "100% Free Forever",
        it: "100% Gratuito per sempre",
        es: "100% Gratis para siempre",
        fr: "100% Gratuit pour toujours",
        de: "100% Dauerhaft kostenlos",
        pt: "100% Gratuito para sempre",
      },
      others: {
        en: "Monthly subscriptions ($6 - $15/mo)",
        it: "Abbonamenti mensili a pagamento (6€ - 15€/mese)",
        es: "Suscripciones mensuales (6€ - 15€/mes)",
        fr: "Abonnements mensuels payants (6€ - 15€/mois)",
        de: "Monatliche Abonnements (6€ - 15€/Monat)",
        pt: "Assinaturas mensais pagas (6€ - 15€/mês)",
      },
      winner: true,
    },
  ];

  const badgeLabels: Record<string, string> = {
    en: "Architecture Comparison",
    it: "Confronto Architetturale",
    es: "Comparativa Arquitectónica",
    fr: "Comparatif d'Architecture",
    de: "Architektur-Vergleich",
    pt: "Comparativo de Arquitetura",
  };

  const titleLabels: Record<string, string> = {
    en: "FileOmniTool vs Traditional Cloud Converters",
    it: "FileOmniTool vs Altri Servizi Cloud",
    es: "FileOmniTool vs Otros Convertidores Cloud",
    fr: "FileOmniTool vs Convertisseurs Cloud Traditionnels",
    de: "FileOmniTool vs Herkömmliche Cloud-Konverter",
    pt: "FileOmniTool vs Outros Conversores em Nuvem",
  };

  const subtitleLabels: Record<string, string> = {
    en: "Why client-side processing gives you superior privacy and zero wait times.",
    it: "Perché l'elaborazione locale garantisce massima privacy e velocità superiore.",
    es: "Por qué el procesamiento client-side te brinda máxima privacidad y velocidad.",
    fr: "Pourquoi le traitement côté client assure confidentialité absolue et zéro attente.",
    de: "Warum clientseitige Verarbeitung maximale Privatsphäre und null Wartezeiten bietet.",
    pt: "Por que o processamento no navegador garante privacidade máxima e velocidade superior.",
  };

  const featureColLabels: Record<string, string> = {
    en: "Feature",
    it: "Funzionalità",
    es: "Característica",
    fr: "Fonctionnalité",
    de: "Funktion",
    pt: "Recurso",
  };

  const competitorColLabels: Record<string, string> = {
    en: "Traditional Cloud Converters",
    it: "Convertitori Cloud Convenzionali",
    es: "Convertidores Cloud Convencionales",
    fr: "Convertisseurs Cloud Traditionnels",
    de: "Herkömmliche Cloud-Konverter",
    pt: "Conversores Cloud Convencionais",
  };

  return (
    <section className="mx-auto mt-16 max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 sm:p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-6 border-b border-zinc-100 dark:border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{badgeLabels[language] || badgeLabels.en}</span>
            </div>
            <h2 className="mt-1 text-xl font-bold text-zinc-900 dark:text-white">
              {titleLabels[language] || titleLabels.en}
            </h2>
          </div>
          <p className="text-xs text-zinc-500 max-w-xs dark:text-zinc-400">
            {subtitleLabels[language] || subtitleLabels.en}
          </p>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800">
                <th className="py-3 px-3 font-semibold text-zinc-500 uppercase tracking-wider">
                  {featureColLabels[language] || featureColLabels.en}
                </th>
                <th className="py-3 px-4 font-bold text-emerald-700 bg-emerald-50/70 rounded-t-xl dark:bg-emerald-950/40 dark:text-emerald-300">
                  FileOmniTool (100% In-Browser)
                </th>
                <th className="py-3 px-4 font-medium text-zinc-500">
                  {competitorColLabels[language] || competitorColLabels.en}
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
