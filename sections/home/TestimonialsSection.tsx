"use client";

import * as React from "react";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import { CyberHeader } from "@/components/ui/cyber-header";
import { CyberBackground } from "@/components/ui/cyber-background";

export const TESTIMONIALS_DATA = [
  {
    quote: "Digital Craftify built www.gladiolus.pro into a luxury, high-converting digital agency platform with sub-45ms page loads, glassmorphic UI, and seamless client onboarding.",
    author: "Yawar Bhat",
    role: "Valued Enterprise Client",
    company: "Gladiolus Pro Project",
    rating: 5,
    image: "/images/advantage-architecture.png",
  },
  {
    quote: "The Misbah book reading app built by Digital Craftify provides my readership with an ultra-smooth offline e-reader, audio narration engine, and beautiful library experience.",
    author: "Arshid Hussain",
    role: "Valued Client & Author",
    company: "Misbah App Project",
    rating: 5,
    image: "/images/service-app-dev.png",
  },
  {
    quote: "Digital Craftify engineered our Bioscience analytics platform with high-precision scientific data visualization, strict regulatory compliance, and ultra-fast WebGL performance.",
    author: "Inna Krasnopolska",
    role: "Valued Client & Bioscience Specialist",
    company: "Bioscience Project",
    rating: 5,
    image: "/images/advantage-security.png",
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-zinc-950 overflow-hidden">
      <CyberBackground variant="cyan" density={25} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <AnimatedWrapper variant="fadeIn">
          <CyberHeader
            badgeText="Client Endorsements"
            title="Trusted by Industry Leaders"
            description="Read how our engineering and design partnerships have empowered executive teams to achieve digital market dominance."
            variant="cyan"
          />
        </AnimatedWrapper>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <AnimatedWrapper key={t.author} variant="scaleUp" delay={idx * 0.1}>
              <TestimonialCard {...t} />
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
