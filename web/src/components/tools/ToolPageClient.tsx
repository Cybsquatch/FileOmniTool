"use client";

import React from "react";
import Link from "next/link";
import { ToolDefinition } from "@/lib/tools-registry";
import { useLanguage } from "@/lib/i18n/context";
import { PdfMergeTool } from "@/components/tools/PdfMergeTool";
import { PdfSplitTool } from "@/components/tools/PdfSplitTool";
import { PdfRotateTool } from "@/components/tools/PdfRotateTool";
import { ImageConvertTool } from "@/components/tools/ImageConvertTool";
import { ImageCompressTool } from "@/components/tools/ImageCompressTool";
import { SvgToPngTool } from "@/components/tools/SvgToPngTool";
import { AudioConvertTool } from "@/components/tools/AudioConvertTool";
import { AudioTrimTool } from "@/components/tools/AudioTrimTool";
import { VideoToAudioTool } from "@/components/tools/VideoToAudioTool";
import { ZipCreateTool } from "@/components/tools/ZipCreateTool";
import { ZipExtractTool } from "@/components/tools/ZipExtractTool";
import { HashGeneratorTool } from "@/components/tools/HashGeneratorTool";
import { JsonCsvTool } from "@/components/tools/JsonCsvTool";
import { QrGeneratorTool } from "@/components/tools/QrGeneratorTool";
import { ExcelConvertTool } from "@/components/tools/ExcelConvertTool";
import { DocxConvertTool } from "@/components/tools/DocxConvertTool";
import { ExifRemoverTool } from "@/components/tools/ExifRemoverTool";
import { Base64Tool } from "@/components/tools/Base64Tool";
import { MarkdownTool } from "@/components/tools/MarkdownTool";
import { TextDiffTool } from "@/components/tools/TextDiffTool";
import { CaseConverterTool } from "@/components/tools/CaseConverterTool";
import { ListCleanerTool } from "@/components/tools/ListCleanerTool";
import { LoremGeneratorTool } from "@/components/tools/LoremGeneratorTool";
import { ImageResizeTool } from "@/components/tools/ImageResizeTool";
import { ImageWatermarkTool } from "@/components/tools/ImageWatermarkTool";
import { ColorPickerTool } from "@/components/tools/ColorPickerTool";
import { AudioBoosterTool } from "@/components/tools/AudioBoosterTool";
import { PasswordGeneratorTool } from "@/components/tools/PasswordGeneratorTool";
import { UuidGeneratorTool } from "@/components/tools/UuidGeneratorTool";
import { ImageToPdfTool } from "@/components/tools/ImageToPdfTool";
import { WordCounterTool } from "@/components/tools/WordCounterTool";
import { FaviconGeneratorTool } from "@/components/tools/FaviconGeneratorTool";
import { AdBanner } from "@/components/ads/AdBanner";
import { ShieldCheck, ChevronRight, HelpCircle } from "lucide-react";

interface ToolPageClientProps {
  tool: ToolDefinition;
}

export const ToolPageClient: React.FC<ToolPageClientProps> = ({ tool }) => {
  const { language, t } = useLanguage();

  const title = tool.title[language] || tool.title.en;
  const description = tool.description[language] || tool.description.en;
  const instructions = tool.instructions[language] || tool.instructions.en;
  const faq = tool.faq[language] || tool.faq.en;

  const renderToolComponent = () => {
    switch (tool.id) {
      case "pdf-merge":
        return <PdfMergeTool />;
      case "pdf-split":
        return <PdfSplitTool />;
      case "pdf-rotate":
        return <PdfRotateTool />;
      case "image-convert":
        return <ImageConvertTool />;
      case "image-compress":
        return <ImageCompressTool />;
      case "svg-to-png":
        return <SvgToPngTool />;
      case "audio-convert":
        return <AudioConvertTool />;
      case "audio-trim":
        return <AudioTrimTool />;
      case "video-to-audio":
        return <VideoToAudioTool />;
      case "zip-create":
        return <ZipCreateTool />;
      case "zip-extract":
        return <ZipExtractTool />;
      case "hash-generator":
        return <HashGeneratorTool />;
      case "json-csv":
        return <JsonCsvTool />;
      case "qr-generator":
        return <QrGeneratorTool />;
      case "excel-convert":
        return <ExcelConvertTool />;
      case "docx-convert":
        return <DocxConvertTool />;
      case "exif-remover":
        return <ExifRemoverTool />;
      case "base64-tool":
        return <Base64Tool />;
      case "markdown-preview":
        return <MarkdownTool />;
      case "text-diff":
        return <TextDiffTool />;
      case "case-converter":
        return <CaseConverterTool />;
      case "list-cleaner":
        return <ListCleanerTool />;
      case "lorem-generator":
        return <LoremGeneratorTool />;
      case "image-resize":
        return <ImageResizeTool />;
      case "image-watermark":
        return <ImageWatermarkTool />;
      case "color-picker":
        return <ColorPickerTool />;
      case "audio-booster":
        return <AudioBoosterTool />;
      case "password-generator":
        return <PasswordGeneratorTool />;
      case "uuid-generator":
        return <UuidGeneratorTool />;
      case "image-to-pdf":
        return <ImageToPdfTool />;
      case "word-counter":
        return <WordCounterTool />;
      case "favicon-generator":
        return <FaviconGeneratorTool />;
      default:
        return <div>Tool in development.</div>;
    }
  };

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="mx-auto max-w-5xl px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-zinc-400" />
          <span className="capitalize">{tool.category}</span>
          <ChevronRight className="h-3.5 w-3.5 text-zinc-400" />
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">{title}</span>
        </nav>
      </div>

      {/* Tool Header & Description */}
      <div className="mx-auto max-w-5xl px-4 pt-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/80 px-3 py-1 text-xs font-semibold text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
          <span>{t("tool.privacyNote")}</span>
        </div>

        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-white">
          {title}
        </h1>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>

      {/* Interactive Tool Area */}
      <div className="mx-auto mt-8 max-w-3xl px-4 sm:px-6 lg:px-8">
        {renderToolComponent()}
      </div>

      {/* How It Works (Step-by-step Guide) */}
      <section className="mx-auto mt-16 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
            {t("tool.howItWorks")} {title}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {instructions.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                  {idx + 1}
                </div>
                <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto mt-10 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-emerald-600" />
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
              {t("tool.faq")}
            </h2>
          </div>

          <div className="mt-6 space-y-4">
            {faq.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-950/40">
                <h3 className="text-xs font-bold text-zinc-900 dark:text-white">
                  {item.question}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Footer Ad Banner */}
      <div className="fixed bottom-0 left-0 z-40 w-full bg-white/90 p-1 shadow-lg backdrop-blur-md dark:bg-zinc-950/90">
        <AdBanner slot="sticky-footer" />
      </div>
    </>
  );
};
