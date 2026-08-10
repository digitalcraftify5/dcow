"use client";

import * as React from "react";
import Link from "next/link";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/buttons/button";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import { CyberHeader } from "@/components/ui/cyber-header";
import { ArrowRight, Calendar } from "lucide-react";

export const CTASection: React.FC = () => {
  return (
    <section className="relative py-24 bg-zinc-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper variant="scaleUp">
          <GlassPanel glow="cyan" className="relative overflow-hidden p-10 lg:p-16 text-center space-y-8 bg-gradient-to-b from-zinc-900/90 to-zinc-950/90">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <CyberHeader
                badgeText="Ready to Transform Your Brand?"
                title="Let's Build Something Amazing Together"
                description="Schedule a 30-minute strategic consultation with our lead engineering architects to discuss your technical requirements and growth roadmap."
                variant="cyan"
              />
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link href="/contact">
                <Button variant="gradient" size="lg" leftIcon={<Calendar size={18} />}>
                  Book Free Consultation
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" rightIcon={<ArrowRight size={18} />}>
                  View Portfolio
                </Button>
              </Link>
            </div>
          </GlassPanel>
        </AnimatedWrapper>
      </div>
    </section>
  );
};
