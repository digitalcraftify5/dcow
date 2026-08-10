import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { PricingHeroSection } from "@/sections/pricing/PricingHeroSection";
import { PricingCardsSection } from "@/sections/pricing/PricingCardsSection";
import { PricingMatrixSection } from "@/sections/pricing/PricingMatrixSection";
import { PricingFaqSection } from "@/sections/pricing/PricingFaqSection";
import { ContactStripSection } from "@/sections/home/ContactStripSection";
import { NewsletterSection } from "@/sections/home/NewsletterSection";

export const metadata: Metadata = constructMetadata({
  title: "Pricing Architecture & Enterprise Plans | Digital Craftify",
  description:
    "Explore Digital Craftify's transparent pricing architecture. Compare Starter Cyber, Pro Enterprise, and Custom Sovereign tiers for web development, Flutter apps, and Edge CDN hosting.",
});

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 selection:bg-cyan-500 selection:text-zinc-950">
      {/* Cyber Hero */}
      <PricingHeroSection />

      {/* Upscaled Pricing Tiers Cards with Monthly/Annual Toggle */}
      <PricingCardsSection />

      {/* Side-by-Side Detailed Capability Comparison Matrix */}
      <PricingMatrixSection />

      {/* FAQ Knowledge Base Accordion */}
      <PricingFaqSection />

      {/* 24/7 SLA Engineering Support Banner */}
      <ContactStripSection />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
