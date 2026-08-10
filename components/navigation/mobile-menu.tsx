"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/buttons/button";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  if (!isOpen) return null;

  const isRouteActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex flex-col bg-zinc-950/95 backdrop-blur-2xl p-6 lg:hidden overflow-y-auto border-l border-cyan-500/20"
      >
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
          <Link href="/" onClick={onClose} className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Digital Craftify Logo"
              width={56}
              height={56}
              className="h-14 w-14 object-contain drop-shadow-[0_0_20px_rgba(0,240,255,0.6)]"
            />
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-white leading-tight">
                Digital<span className="text-cyan-400">Craftify</span>
              </span>
              <span className="text-[8px] font-mono font-bold tracking-wider text-cyan-400 uppercase -mt-0.5">
                Architecting Digital Excellence
              </span>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="rounded-xl p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
            aria-label="Close Mobile Menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 py-6 space-y-3 font-mono">
          {navLinks.map((item) => {
            const active = isRouteActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-extrabold tracking-wider transition-all ${
                  active
                    ? "bg-emerald-950/90 border border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                    : "text-zinc-200 hover:text-cyan-400 hover:bg-zinc-900/60"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {active && <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />}
                  <span>{item.name}</span>
                </div>
                {active && <span className="text-xs text-emerald-400 font-bold">{"//"} ACTIVE</span>}
              </Link>
            );
          })}
        </div>

        <div className="pt-4 border-t border-zinc-800">
          <Link href="/contact" onClick={onClose}>
            <Button variant="gradient" size="lg" className="w-full" rightIcon={<ArrowRight size={18} />}>
              Let&apos;s Talk
            </Button>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
