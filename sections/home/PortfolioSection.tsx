"use client";

import * as React from "react";
import { PortfolioCard } from "@/components/cards/portfolio-card";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import { CyberHeader } from "@/components/ui/cyber-header";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";
import { ArrowRight } from "lucide-react";

export const PORTFOLIO_ITEMS = [
  {
    title: "Aura Cloud Portal",
    category: "Web App",
    description: "Enterprise SaaS monitoring platform with real-time WebGL metrics dashboard.",
    imageUrl: "/images/service-web-dev.png",
    tags: ["Next.js", "React 19", "Tailwind v4"],
    href: "/portfolio/aura-cloud",
  },
  {
    title: "Nexus Mobile Banking",
    category: "Mobile",
    description: "Fintech mobile application with biometric login and instant cross-border transfers.",
    imageUrl: "/images/service-app-dev.png",
    tags: ["Flutter", "iOS", "Android"],
    href: "/portfolio/nexus-banking",
  },
  {
    title: "Vortex Brand Identity",
    category: "Branding",
    description: "Complete luxury brand identity system, vector logo, and 3D product motion graphics.",
    imageUrl: "/images/service-branding.png",
    tags: ["Branding", "3D Motion", "Figma"],
    href: "/portfolio/vortex-branding",
  },
  {
    title: "CyberFort Security Suite",
    category: "Web App",
    description: "Cybersecurity audit engine analyzing server vulnerabilities and SSL certificates.",
    imageUrl: "/images/advantage-security.png",
    tags: ["Node.js", "AWS", "Security"],
    href: "/portfolio/cyberfort-security",
  },
  {
    title: "Pulse Fitness Tracker",
    category: "Mobile",
    description: "Health & fitness tracking mobile app integrated with Apple Watch and HealthKit.",
    imageUrl: "/images/portfolio-pulse-fitness.png",
    tags: ["React Native", "HealthKit"],
    href: "/portfolio/pulse-fitness",
  },
  {
    title: "Hyperion Commerce",
    category: "Web App",
    description: "Headless e-commerce platform processing 10k+ daily transactions with sub-second page loads.",
    imageUrl: "/images/service-website-design.png",
    tags: ["Next.js", "Stripe", "GraphQL"],
    href: "/portfolio/hyperion-commerce",
  },
];

export const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = React.useState("All");

  const categories = ["All", "Web App", "Mobile", "Branding"];

  const filteredItems = filter === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === filter);

  return (
    <section className="relative py-24 bg-zinc-950 overflow-hidden">
      <CyberBackground variant="cyan" density={25} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <AnimatedWrapper variant="fadeIn">
          <CyberHeader
            badgeText="Our Portfolio"
            title="Crafted for Global Impact"
            description="Explore a curated selection of our recent digital products, web platforms, and brand transformations."
            variant="cyan"
          />

          {/* Filter Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  filter === cat
                    ? "gradient-teal-cyan text-zinc-950 shadow-md"
                    : "glass-button text-zinc-300 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedWrapper>

        {/* Filtered Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => (
            <AnimatedWrapper key={item.title} variant="scaleUp" delay={idx * 0.08}>
              <PortfolioCard {...item} />
            </AnimatedWrapper>
          ))}
        </div>

        <div className="text-center pt-4">
          <Button variant="outline" size="lg" rightIcon={<ArrowRight size={16} />}>
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
