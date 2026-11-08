import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { AboutContent } from "@/components/about/AboutContent";
import { getAboutJsonLd, getAboutMetadata } from "@/lib/seo-helpers";

export const metadata: Metadata = getAboutMetadata("it");

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50/50 font-sans text-zinc-900 selection:bg-emerald-500 selection:text-white dark:bg-zinc-950 dark:text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getAboutJsonLd("it")) }} />
      <Header />
      <AboutContent />
      <Footer />
    </div>
  );
}
