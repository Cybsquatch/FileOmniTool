import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { PrivacyContent } from "@/components/privacy/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Guarantee & Zero-Upload Architecture | FileOmniTool",
  description: "Learn how FileOmniTool guarantees 100% in-browser privacy using WebAssembly, Canvas, and Web Cryptography. Zero cloud uploads.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50/50 font-sans text-zinc-900 selection:bg-emerald-500 selection:text-white dark:bg-zinc-950 dark:text-zinc-100">
      <Header />
      <PrivacyContent />
      <Footer />
    </div>
  );
}
