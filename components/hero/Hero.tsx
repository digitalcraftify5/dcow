"use client";

import * as React from "react";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroStats } from "./HeroStats";
import { HeroVisual } from "./HeroVisual";

export const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-[90vh] w-full flex-col justify-between overflow-hidden pt-6 pb-12">
      {/* Background Atmosphere */}
      <HeroBackground />

      {/* Main Split Grid */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column Content */}
          <div className="lg:col-span-7 flex items-center">
            <HeroContent />
          </div>

          {/* Right Column — Large DC Eagle Logo Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center overflow-visible">
            <HeroVisual />
          </div>
        </div>

        {/* Hero Statistics & Scroll Indicator */}
        <HeroStats />
      </div>
    </section>
  );
};
