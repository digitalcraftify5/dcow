"use client";

import * as React from "react";
import { BlogHeroSection } from "@/sections/blog/BlogHeroSection";
import { BlogFeaturedSection, FeaturedArticle } from "@/sections/blog/BlogFeaturedSection";
import { BlogGridSection, BlogArticle } from "@/sections/blog/BlogGridSection";
import { BlogNewsletterSection } from "@/sections/blog/BlogNewsletterSection";
import { BlogCtaSection } from "@/sections/blog/BlogCtaSection";

export function BlogClientPage() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedArticle, setSelectedArticle] = React.useState<BlogArticle | FeaturedArticle | null>(null);

  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-cyan-500 selection:text-zinc-950">
      <BlogHeroSection
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <BlogFeaturedSection onReadArticle={setSelectedArticle} />
      <BlogGridSection
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        selectedArticle={selectedArticle}
        onSelectArticle={setSelectedArticle}
      />
      <BlogNewsletterSection />
      <BlogCtaSection />
    </main>
  );
}
