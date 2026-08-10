import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { CaseStudiesHeroSection } from "@/sections/case-studies/CaseStudiesHeroSection";
import { CaseStudiesGridSection } from "@/sections/case-studies/CaseStudiesGridSection";
import { CaseStudiesProcessSection } from "@/sections/case-studies/CaseStudiesProcessSection";
import { ContactStripSection } from "@/sections/home/ContactStripSection";
import { NewsletterSection } from "@/sections/home/NewsletterSection";

export const metadata: Metadata = constructMetadata({
  title: "Case Studies & ROI Audits | Digital Craftify — Enterprise Digital Agency",
  description:
    "Discover documented case studies demonstrating measurable ROI, high-speed edge CDN performance, Flutter mobile scaling, and zero-trust cloud security.",
});

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 selection:bg-cyan-500 selection:text-zinc-950">
      {/* Cyber Hero */}
      <CaseStudiesHeroSection />

      {/* Case Studies Interactive Showcase Grid */}
      <CaseStudiesGridSection />

      {/* 4-Step Engineering Process Timeline */}
      <CaseStudiesProcessSection />

      {/* 24/7 SLA Engineering Support Banner */}
      <ContactStripSection />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
