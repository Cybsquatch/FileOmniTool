"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ToolDefinition, TOOLS_REGISTRY } from "@/lib/tools-registry";
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
import { PdfPageNumberTool } from "@/components/tools/PdfPageNumberTool";
import { PdfToTextTool } from "@/components/tools/PdfToTextTool";
import { PdfGrayscaleTool } from "@/components/tools/PdfGrayscaleTool";
import { PdfMetadataTool } from "@/components/tools/PdfMetadataTool";
import { PdfOrganizeTool } from "@/components/tools/PdfOrganizeTool";
import { ImageCropTool } from "@/components/tools/ImageCropTool";
import { ImageBlurTool } from "@/components/tools/ImageBlurTool";
import { ImageInvertTool } from "@/components/tools/ImageInvertTool";
import { ImageFlipTool } from "@/components/tools/ImageFlipTool";
import { ImageGrayscaleTool } from "@/components/tools/ImageGrayscaleTool";
import { ImageToBase64Tool } from "@/components/tools/ImageToBase64Tool";
import { AudioSpeedTool } from "@/components/tools/AudioSpeedTool";
import { AudioReverseTool } from "@/components/tools/AudioReverseTool";
import { AudioStereoToMonoTool } from "@/components/tools/AudioStereoToMonoTool";
import { AudioToneTool } from "@/components/tools/AudioToneTool";
import { CsvToMarkdownTool } from "@/components/tools/CsvToMarkdownTool";
import { TextToPdfTool } from "@/components/tools/TextToPdfTool";
import { JsonFormatterTool } from "@/components/tools/JsonFormatterTool";
import { XmlJsonTool } from "@/components/tools/XmlJsonTool";
import { YamlJsonTool } from "@/components/tools/YamlJsonTool";
import { KeywordDensityTool } from "@/components/tools/KeywordDensityTool";
import { ColorConverterTool } from "@/components/tools/ColorConverterTool";
import { HtmlEntitiesTool } from "@/components/tools/HtmlEntitiesTool";
import { RegexTesterTool } from "@/components/tools/RegexTesterTool";
import { SlugGeneratorTool } from "@/components/tools/SlugGeneratorTool";
import { FileChecksumTool } from "@/components/tools/FileChecksumTool";
import { HexViewerTool } from "@/components/tools/HexViewerTool";
import { Base64ToImageTool } from "@/components/tools/Base64ToImageTool";
import { SrtToVttTool } from "@/components/tools/SrtToVttTool";
import { SrtToTxtTool } from "@/components/tools/SrtToTxtTool";
import { GifFrameExtractorTool } from "@/components/tools/GifFrameExtractorTool";
import { ImageToAsciiTool } from "@/components/tools/ImageToAsciiTool";
import { PngToIcoTool } from "@/components/tools/PngToIcoTool";
import { SvgCleanerTool } from "@/components/tools/SvgCleanerTool";
import { PdfEncryptTool } from "@/components/tools/PdfEncryptTool";
import { PdfFlattenTool } from "@/components/tools/PdfFlattenTool";
import { JsonToSqlTool } from "@/components/tools/JsonToSqlTool";
import { HtmlToMarkdownTool } from "@/components/tools/HtmlToMarkdownTool";
import { JwtDecoderTool } from "@/components/tools/JwtDecoderTool";
import { CssMinifierTool } from "@/components/tools/CssMinifierTool";
import { EpochConverterTool } from "@/components/tools/EpochConverterTool";
import { FileToBase64Tool } from "@/components/tools/FileToBase64Tool";
import { FileMagicDetectorTool } from "@/components/tools/FileMagicDetectorTool";
import { ComparisonTable } from "@/components/tools/ComparisonTable";
import { AdBanner } from "@/components/ads/AdBanner";
import { EmbedWidgetModal } from "@/components/tools/EmbedWidgetModal";
import { getGuideByToolId } from "@/lib/guides-registry";
import { ShieldCheck, ChevronRight, HelpCircle, BookOpen } from "lucide-react";

interface ToolPageClientProps {
  tool: ToolDefinition;
}

export const ToolPageClient: React.FC<ToolPageClientProps> = ({ tool }) => {
  const { language, t } = useLanguage();

  const title = tool.title[language] || tool.title.en;
  const description = tool.description[language] || tool.description.en;
  const instructions = tool.instructions[language] || tool.instructions.en;
  const faq = tool.faq[language] || tool.faq.en;

  useEffect(() => {
    if (typeof document !== "undefined") {
      const currentTitle = tool.title[language] || tool.title.it || tool.title.en;
      document.title = `${currentTitle} | FileOmniTool`;
    }
  }, [language, tool]);

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
      case "pdf-page-number":
        return <PdfPageNumberTool />;
      case "pdf-to-text":
        return <PdfToTextTool />;
      case "pdf-grayscale":
        return <PdfGrayscaleTool />;
      case "pdf-metadata":
        return <PdfMetadataTool />;
      case "pdf-organize":
        return <PdfOrganizeTool />;
      case "image-crop":
        return <ImageCropTool />;
      case "image-blur":
        return <ImageBlurTool />;
      case "image-invert":
        return <ImageInvertTool />;
      case "image-flip":
        return <ImageFlipTool />;
      case "image-grayscale":
        return <ImageGrayscaleTool />;
      case "image-to-base64":
        return <ImageToBase64Tool />;
      case "audio-speed":
        return <AudioSpeedTool />;
      case "audio-reverse":
        return <AudioReverseTool />;
      case "audio-stereo-to-mono":
        return <AudioStereoToMonoTool />;
      case "audio-tone":
        return <AudioToneTool />;
      case "csv-to-markdown":
        return <CsvToMarkdownTool />;
      case "text-to-pdf":
        return <TextToPdfTool />;
      case "json-formatter":
        return <JsonFormatterTool />;
      case "xml-json":
        return <XmlJsonTool />;
      case "yaml-json":
        return <YamlJsonTool />;
      case "keyword-density":
        return <KeywordDensityTool />;
      case "color-converter":
        return <ColorConverterTool />;
      case "html-entities":
        return <HtmlEntitiesTool />;
      case "regex-tester":
        return <RegexTesterTool />;
      case "slug-generator":
        return <SlugGeneratorTool />;
      case "file-checksum":
        return <FileChecksumTool />;
      case "hex-viewer":
        return <HexViewerTool />;
      case "base64-to-image":
        return <Base64ToImageTool />;
      case "srt-to-vtt":
        return <SrtToVttTool />;
      case "srt-to-txt":
        return <SrtToTxtTool />;
      case "gif-frame-extractor":
        return <GifFrameExtractorTool />;
      case "image-to-ascii":
        return <ImageToAsciiTool />;
      case "png-to-ico":
        return <PngToIcoTool />;
      case "svg-cleaner":
        return <SvgCleanerTool />;
      case "pdf-encrypt":
        return <PdfEncryptTool />;
      case "pdf-flatten":
        return <PdfFlattenTool />;
      case "json-to-sql":
        return <JsonToSqlTool />;
      case "html-to-markdown":
        return <HtmlToMarkdownTool />;
      case "jwt-decoder":
        return <JwtDecoderTool />;
      case "css-minifier":
        return <CssMinifierTool />;
      case "epoch-converter":
        return <EpochConverterTool />;
      case "file-to-base64":
        return <FileToBase64Tool />;
      case "file-magic-detector":
        return <FileMagicDetectorTool />;
      default:
        return <div>Tool in development.</div>;
    }
  };

  const relatedTools = TOOLS_REGISTRY.filter(
    (t) => t.id !== tool.id && (t.category === tool.category || t.popular)
  ).slice(0, 4);

  const guide = getGuideByToolId(tool.id);

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

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          {guide && (
            <Link
              href={`/guides/${guide.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/70 px-3.5 py-1 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100 hover:shadow-sm dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300"
            >
              <BookOpen className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>
                {`${t("tool.fullTutorial")} ${guide.title[language] || guide.title.en} →`}
              </span>
            </Link>
          )}
          <EmbedWidgetModal toolId={tool.id} toolTitle={title} />
        </div>
      </div>

      {/* Interactive Tool Area */}
      <div className="mx-auto mt-8 max-w-3xl px-4 sm:px-6 lg:px-8">
        {renderToolComponent()}
      </div>

      {/* Post-Tool Sponsor Slot (High Viewability, Non-Invasive) */}
      <div className="mx-auto mt-10 max-w-4xl px-4 sm:px-6 lg:px-8">
        <AdBanner slot="leaderboard" />
      </div>

      {/* How It Works (Step-by-step Guide) */}
      <section className="mx-auto mt-12 max-w-4xl px-4 sm:px-6 lg:px-8">
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

      {/* Comparison Table: FileOmniTool vs Traditional Cloud Converters */}
      <ComparisonTable />

      {/* Mid-Content Sponsor Slot */}
      <div className="mx-auto mt-8 max-w-4xl px-4 sm:px-6 lg:px-8">
        <AdBanner slot="leaderboard" />
      </div>

      {/* FAQ Section */}
      <section className="mx-auto mt-8 max-w-4xl px-4 sm:px-6 lg:px-8">
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

      {/* Native Sponsored Recommendations (3x1) */}
      <div className="mx-auto mt-6 max-w-4xl px-4 sm:px-6 lg:px-8">
        <AdBanner slot="native" />
      </div>

      {/* Related Tools Section for Topic Cluster Internal Linking */}
      <section className="mx-auto mt-6 mb-16 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pb-4">
          <h2 className="text-base font-bold text-zinc-900 dark:text-white">
            {t("tool.relatedTools")}
          </h2>
          <Link
            href="/"
            className="text-xs font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
          >
            {t("tool.viewAllTools")}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {relatedTools.map((relTool) => (
            <Link
              key={relTool.id}
              href={`/tools/${relTool.id}`}
              className="flex items-center justify-between rounded-xl border border-zinc-200/80 bg-white p-4 shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-emerald-700"
            >
              <div>
                <h3 className="text-xs font-bold text-zinc-900 dark:text-white">
                  {relTool.title[language] || relTool.title.en}
                </h3>
                <p className="mt-1 text-[11px] text-zinc-500 line-clamp-1 dark:text-zinc-400">
                  {relTool.description[language] || relTool.description.en}
                </p>
              </div>
              <ChevronRight className="h-4 w-4 shrink-0 text-zinc-400" />
            </Link>
          ))}
        </div>
      </section>

      {/* Sticky Footer Ad Banner */}
      <div className="fixed bottom-0 left-0 z-40 w-full bg-white/90 p-1 shadow-lg backdrop-blur-md dark:bg-zinc-950/90">
        <AdBanner slot="sticky-footer" />
      </div>
    </>
  );
};
