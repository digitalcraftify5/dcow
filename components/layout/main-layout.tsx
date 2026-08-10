"use client";

import * as React from "react";
import { AnnouncementBar } from "@/components/navigation/announcement-bar";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "./footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { LuxuryLoader } from "@/components/ui/luxury-loader";
import { PageTransition } from "./page-transition";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-zinc-950 text-zinc-100 selection:bg-cyan-500 selection:text-zinc-950">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Splash Luxury Loader */}
      <LuxuryLoader />

      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Floating Utilities */}
      <BackToTop />
      <CookieBanner />
    </div>
  );
}
