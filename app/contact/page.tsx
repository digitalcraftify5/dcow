import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { ContactHeroSection } from "@/sections/contact/ContactHeroSection";
import { ContactFormSection } from "@/sections/contact/ContactFormSection";
import { ContactMapSection } from "@/sections/contact/ContactMapSection";
import { ContactChannelsSection } from "@/sections/contact/ContactChannelsSection";
import { ContactStripSection } from "@/sections/home/ContactStripSection";
import { NewsletterSection } from "@/sections/home/NewsletterSection";

export const metadata: Metadata = constructMetadata({
  title: "Contact & Architecture Strategy | Digital Craftify",
  description:
    "Connect with Digital Craftify solutions architects. Calculate project quotes, inspect global hub locations (Dubai, USA, India), and request 24/7 SLA engineering support.",
});

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 selection:bg-cyan-500 selection:text-zinc-950">
      {/* Cyber Hero */}
      <ContactHeroSection />

      {/* Advanced Interactive Consultation Form & Scope Calculator */}
      <ContactFormSection />

      {/* High-Tech Interactive Global Hub Map Component */}
      <ContactMapSection />

      {/* Executive Contact Channels Grid */}
      <ContactChannelsSection />

      {/* 24/7 SLA Engineering Support Banner */}
      <ContactStripSection />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
