"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ChevronDown, Search, Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/buttons/button";
import { ServicesMegaMenu, ResourcesMegaMenu } from "./mega-menu";
import { MobileMenu } from "./mobile-menu";
import { SearchModal } from "./search-modal";
import { LetsTalkModal } from "@/components/modals/lets-talk-modal";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<"services" | "resources" | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isLetsTalkOpen, setIsLetsTalkOpen] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const isRouteActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const NAV_ITEMS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", isMega: true, megaType: "services" as const },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources", isMega: true, megaType: "resources" as const },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="sticky top-0 z-40 w-full glass-navbar border-b border-cyan-500/20 bg-zinc-950/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo Left with High-Tech Terminal Tag */}
          <Link href="/" className="group flex items-center gap-3.5">
            <Image
              src="/logo.png"
              alt="Digital Craftify Logo"
              width={72}
              height={72}
              className="h-16 w-16 sm:h-18 sm:w-18 object-contain group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_25px_rgba(0,240,255,0.7)]"
              priority
            />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white leading-tight">
                Digital<span className="text-gradient-teal-cyan">Craftify</span>
              </span>
              <span className="text-[9px] font-mono font-bold tracking-widest text-cyan-400 uppercase -mt-0.5">
                Architecting Digital Excellence
              </span>
            </div>
          </Link>

          {/* Navigation Center: Title Case Navigation & High-Contrast Emerald Active Indicator */}
          <nav className="hidden lg:flex items-center gap-2 text-xs font-semibold">
            {NAV_ITEMS.map((item) => {
              const active = isRouteActive(item.href);

              if (item.isMega) {
                return (
                  <div
                    key={item.name}
                    className="relative py-6"
                    onMouseEnter={() => setActiveMenu(item.megaType)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all duration-300 ${
                        active
                          ? "bg-emerald-950/90 border border-emerald-400 text-emerald-300 font-bold shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                          : "text-zinc-300 hover:text-cyan-300 hover:bg-zinc-900/60"
                      }`}
                    >
                      {active && (
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                        </span>
                      )}
                      {item.name}
                      <ChevronDown
                        size={13}
                        className={`transition-transform ${
                          activeMenu === item.megaType ? "rotate-180 text-emerald-400" : ""
                        }`}
                      />
                      {active && <span className="text-[9px] text-emerald-400 font-bold font-mono">{"//"} ON</span>}
                    </button>
                    {activeMenu === "services" && item.megaType === "services" && (
                      <ServicesMegaMenu onClose={() => setActiveMenu(null)} />
                    )}
                    {activeMenu === "resources" && item.megaType === "resources" && (
                      <ResourcesMegaMenu onClose={() => setActiveMenu(null)} />
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-all duration-300 flex items-center gap-1.5 px-3 py-1.5 rounded-xl ${
                    active
                      ? "bg-emerald-950/90 border border-emerald-400 text-emerald-300 font-bold shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                      : "text-zinc-300 hover:text-cyan-300 hover:bg-zinc-900/60"
                  }`}
                >
                  {active && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                  )}
                  {item.name}
                  {active && <span className="text-[9px] text-emerald-400 font-bold font-mono">{"//"} ON</span>}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Controls Right */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="glass-button flex h-9 w-9 items-center justify-center rounded-xl text-zinc-300 hover:text-white hover:border-cyan-500/40 transition-all hover:scale-105"
              aria-label="Open Search"
              title="Search"
            >
              <Search size={16} />
            </button>

            {/* Let's Talk CTA Popup Trigger */}
            <div className="hidden sm:block">
              <Button
                variant="gradient"
                size="sm"
                rightIcon={<ArrowRight size={14} />}
                onClick={() => setIsLetsTalkOpen(true)}
              >
                Let&apos;s Talk
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="glass-button flex h-10 w-10 items-center justify-center rounded-xl text-zinc-300 lg:hidden hover:text-white hover:border-cyan-500/40"
              aria-label="Open Menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Interactive Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* High-Tech Cyber Let's Talk Popup Modal */}
      <LetsTalkModal isOpen={isLetsTalkOpen} onClose={() => setIsLetsTalkOpen(false)} />
    </>
  );
};
