import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { AboutHeroSection } from "@/sections/about/AboutHeroSection";
import { AboutEcosystemSection } from "@/sections/about/AboutEcosystemSection";
import { AboutLeadershipSection } from "@/sections/about/AboutLeadershipSection";
import { AboutTechStackSection } from "@/sections/about/AboutTechStackSection";
import { ContactStripSection } from "@/sections/home/ContactStripSection";
import { NewsletterSection } from "@/sections/home/NewsletterSection";

export const metadata: Metadata = constructMetadata({
  title: "About Us | Digital Craftify — Web Development & Digital Growth Agency",
  description:
    "Discover Digital Craftify's story, expert team, innovative tech stack, and flagship digital products designed to empower modern businesses worldwide.",
});

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 selection:bg-cyan-500 selection:text-zinc-950">
      {/* Cyber Hero */}
      <AboutHeroSection />

      {/* Flagship Ecosystem & Software Suite */}
      <AboutEcosystemSection />

      {/* Leadership & Endorsements */}
      <AboutLeadershipSection />

      {/* Tech Stack Matrix (Flutter, Next.js, Python, AI) */}
      <AboutTechStackSection />

      {/* 24/7 SLA Support Strip */}
      <ContactStripSection />

      {/* Newsletter Hub */}
      <NewsletterSection />
    </div>
  );
}
