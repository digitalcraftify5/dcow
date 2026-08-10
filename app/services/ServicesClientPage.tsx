"use client";

import * as React from "react";
import { ServicesHeroSection } from "@/sections/services/ServicesHeroSection";
import { ServicesGridSection } from "@/sections/services/ServicesGridSection";
import { ServicesProcessSection } from "@/sections/services/ServicesProcessSection";
import { ServicesComparisonSection } from "@/sections/services/ServicesComparisonSection";
import { ServicesCtaSection } from "@/sections/services/ServicesCtaSection";

export function ServicesClientPage() {
  const [activeCategory, setActiveCategory] = React.useState("all");

  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-cyan-500 selection:text-zinc-950">
      <ServicesHeroSection
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      <ServicesGridSection activeCategory={activeCategory} />
      <ServicesProcessSection />
      <ServicesComparisonSection />
      <ServicesCtaSection />
    </main>
  );
}
