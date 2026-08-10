"use client";

import * as React from "react";
import { ServiceCard } from "@/components/cards/service-card";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import { CyberHeader } from "@/components/ui/cyber-header";
import { CyberBackground } from "@/components/ui/cyber-background";

export const SERVICES_DATA = [
  {
    title: "Website Design",
    description: "High-converting, luxury web design engineered for maximum engagement and brand storytelling.",
    iconName: "Layout" as const,
    features: ["Bespoke Layouts", "Interactive Prototyping", "Awwwards Aesthetics"],
    href: "/services/website-design",
    image: "/images/service-website-design.png",
  },
  {
    title: "Web Development",
    description: "Enterprise-grade Next.js, React, and Fullstack systems built for speed, security, and scalability.",
    iconName: "Code" as const,
    features: ["Server-Side Rendering", "API Integration", "Micro-services Architecture"],
    href: "/services/web-development",
    image: "/images/service-web-dev.png",
  },
  {
    title: "App Development",
    description: "Native iOS, Android, and cross-platform Flutter mobile applications crafted with precision.",
    iconName: "Smartphone" as const,
    features: ["iOS & Android Native", "Offline Persistence", "Push Notifications"],
    href: "/services/app-development",
    image: "/images/service-app-dev.png",
  },
  {
    title: "UI UX Design",
    description: "Deep user research, wireframing, design systems, and frictionless conversion architecture.",
    iconName: "Palette" as const,
    features: ["User Testing", "Figma Design Systems", "Accessibility (WCAG 2.1)"],
    href: "/services/ui-ux",
    image: "/images/service-ui-ux.png",
  },
  {
    title: "SEO & Digital Marketing",
    description: "Data-driven organic search domination, technical SEO audits, and targeted performance campaigns.",
    iconName: "Search" as const,
    features: ["Technical SEO", "Keyword Strategy", "Conversion Rate Optimization"],
    href: "/services/seo",
    image: "/images/service-seo.png",
  },
  {
    title: "Branding & Graphics",
    description: "Complete visual identities, brand guidelines, logo systems, and high-impact marketing assets.",
    iconName: "Award" as const,
    features: ["Logo Design", "Brand Guidelines", "Corporate Identity Kits"],
    href: "/services/branding",
    image: "/images/service-branding.png",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-zinc-950 overflow-hidden">
      <CyberBackground variant="cyan" density={30} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <AnimatedWrapper variant="fadeIn">
          <CyberHeader
            badgeText="Enterprise Solutions"
            title="Bespoke Services for High-Growth Brands"
            description="We combine cutting-edge software architecture, human-centered design, and data-driven marketing to deliver transformative business growth."
            variant="cyan"
          />
        </AnimatedWrapper>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((service, index) => (
            <AnimatedWrapper key={service.title} variant="scaleUp" delay={index * 0.1}>
              <ServiceCard {...service} />
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
