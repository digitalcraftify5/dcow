"use client";

import * as React from "react";
import { ResourcesHeroSection } from "@/sections/resources/ResourcesHeroSection";
import { ResourcesGridSection } from "@/sections/resources/ResourcesGridSection";
import { ResourcesStatusSection } from "@/sections/resources/ResourcesStatusSection";
import { ResourcesCtaSection } from "@/sections/resources/ResourcesCtaSection";

export function ResourcesClientPage() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-cyan-500 selection:text-zinc-950">
      <ResourcesHeroSection
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <ResourcesGridSection
        activeCategory={activeCategory}
        searchQuery={searchQuery}
      />
      <ResourcesStatusSection />
      <ResourcesCtaSection />
    </main>
  );
}
