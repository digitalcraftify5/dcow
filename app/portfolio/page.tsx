import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { PortfolioHeroSection } from "@/sections/portfolio/PortfolioHeroSection";
import { PortfolioGridSection } from "@/sections/portfolio/PortfolioGridSection";
import { PortfolioMetricsSection } from "@/sections/portfolio/PortfolioMetricsSection";
import { ContactStripSection } from "@/sections/home/ContactStripSection";
import { NewsletterSection } from "@/sections/home/NewsletterSection";

export const metadata: Metadata = constructMetadata({
  title: "Portfolio & Case Studies | Digital Craftify — Enterprise Digital Showcase",
  description:
    "Explore Digital Craftify's curated portfolio of bespoke web applications, mobile platforms (Flutter), edge cloud systems, and AI automation engines.",
});

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 selection:bg-cyan-500 selection:text-zinc-950">
      {/* Portfolio Cyber Hero */}
      <PortfolioHeroSection />

      {/* Interactive Portfolio Filter & Grid Showcase */}
      <PortfolioGridSection />

      {/* Production SLA & Performance Metrics */}
      <PortfolioMetricsSection />

      {/* 24/7 SLA Engineering Support Banner */}
      <ContactStripSection />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
