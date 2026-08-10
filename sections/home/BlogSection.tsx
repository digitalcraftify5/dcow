"use client";

import * as React from "react";
import { BlogCard } from "@/components/cards/blog-card";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import { CyberHeader } from "@/components/ui/cyber-header";
import { CyberBackground } from "@/components/ui/cyber-background";

export const BLOG_POSTS = [
  {
    title: "Architecting Next.js 16 App Router for Sub-100ms Page Loads",
    excerpt: "Discover best practices for server component boundaries, streaming SSR, and Tailwind CSS v4 performance optimization.",
    date: "Aug 02, 2026",
    readTime: "5 min read",
    imageUrl: "/images/service-web-dev.png",
    category: "Engineering",
    slug: "/blog/nextjs-16-architecture",
  },
  {
    title: "Designing Awwwards-Grade WebGL & Three.js 3D Experiences",
    excerpt: "How to integrate React Three Fiber canvases seamlessly into enterprise web applications without sacrificing mobile FPS.",
    date: "Jul 28, 2026",
    readTime: "7 min read",
    imageUrl: "/images/service-website-design.png",
    category: "3D & Motion",
    slug: "/blog/threejs-awwwards-design",
  },
  {
    title: "AI-Powered Conversion Rate Optimization in 2026",
    excerpt: "Leveraging custom LLM micro-agents and predictive user analytics to double landing page conversion rates.",
    date: "Jul 20, 2026",
    readTime: "4 min read",
    imageUrl: "/images/blog-ai-conversion.png",
    category: "AI & Growth",
    slug: "/blog/ai-conversion-optimization",
  },
];

export const BlogSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-zinc-950/80 border-t border-zinc-800/60 overflow-hidden">
      <CyberBackground variant="purple" density={25} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <AnimatedWrapper variant="fadeIn">
          <CyberHeader
            badgeText="Thought Leadership"
            title="Latest Digital Insights"
            description="Read engineering walkthroughs, UI/UX breakdowns, and digital growth strategies from our lead architects."
            variant="purple"
          />
        </AnimatedWrapper>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {BLOG_POSTS.map((post, idx) => (
            <AnimatedWrapper key={post.title} variant="scaleUp" delay={idx * 0.1}>
              <BlogCard {...post} />
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
