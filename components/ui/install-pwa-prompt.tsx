"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bookmark,
  X,
  Smartphone,
  Share,
  PlusSquare,
  Check,
  Zap,
} from "lucide-react";
import { Button } from "@/components/buttons/button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean;
}

export const InstallPwaPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = React.useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = React.useState(false);
  const [isIos, setIsIos] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [showIosModal, setShowIosModal] = React.useState(false);
  const [showBookmarkModal, setShowBookmarkModal] = React.useState(false);
  const [copiedLink, setCopiedLink] = React.useState(false);

  React.useEffect(() => {
    // 1. Check session dismissal
    const isDismissed = sessionStorage.getItem("dcow_pwa_prompt_dismissed");
    if (isDismissed) return;

    // 2. Check standalone mode (already installed)
    const nav = window.navigator as NavigatorWithStandalone;
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches || Boolean(nav.standalone);
    if (isStandalone) return;

    // 3. Detect Mobile & iOS Safari
    const ua = window.navigator.userAgent;
    const isMobileDevice = /mobi|android|iphone|ipad|ipod/i.test(ua);
    const isIosDevice = /iphone|ipad|ipod/i.test(ua);
    setIsMobile(isMobileDevice);
    setIsIos(isIosDevice);

    // 4. Capture native browser beforeinstallprompt event (Desktop Chrome, Edge, Brave, Android)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setTimeout(() => setShowPrompt(true), 2500);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Show prompt after 3.5s if not standalone
    const timer = setTimeout(() => {
      if (!isStandalone) {
        setShowPrompt(true);
      }
    }, 3500);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      clearTimeout(timer);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setShowPrompt(false);
        setDeferredPrompt(null);
      }
    } else if (isIos) {
      setShowIosModal(true);
    } else {
      setShowBookmarkModal(true);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    sessionStorage.setItem("dcow_pwa_prompt_dismissed", "true");
  };

  const handleBookmarkClick = () => {
    setShowBookmarkModal(true);
  };

  const copyPageUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  if (!showPrompt) return null;

  return (
    <>
      {/* FLOATING PWA INSTALL & BOOKMARK BOTTOM CAPSULE */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 22, stiffness: 280 }}
            className="fixed bottom-5 left-4 sm:left-6 z-50 max-w-sm sm:max-w-md w-[calc(100%-2rem)] p-4 sm:p-5 rounded-3xl glass-card border border-cyan-500/50 bg-zinc-950/95 shadow-[0_0_40px_rgba(0,240,255,0.3)] text-white space-y-4"
          >
            {/* Top Bar with Icon.png */}
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
              <div className="flex items-center gap-3">
                <div className="relative h-13 w-13 rounded-2xl overflow-hidden bg-zinc-900 border border-cyan-500/50 p-1 shadow-[0_0_15px_rgba(0,240,255,0.4)] shrink-0 flex items-center justify-center">
                  <img
                    src="/icon.png"
                    alt="Digital Craftify Web App Icon"
                    className="h-full w-full object-contain drop-shadow-[0_0_12px_rgba(0,240,255,0.7)]"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white leading-tight flex items-center gap-1.5">
                    Digital Craftify <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  </h4>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold block uppercase">
                    {isMobile ? "OFFICIAL MOBILE APP" : "DESKTOP WEB APP & BOOKMARK"}
                  </span>
                </div>
              </div>

              <button
                onClick={handleDismiss}
                className="rounded-full p-1.5 text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors"
                aria-label="Dismiss"
              >
                <X size={16} />
              </button>
            </div>

            {/* Description */}
            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              Install the official <strong>Digital Craftify Web App</strong> for 1-tap launch, offline capability &amp; direct executive connect.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 pt-1">
              <Button
                variant="gradient"
                size="sm"
                onClick={handleInstallClick}
                leftIcon={<Zap size={14} className="text-zinc-950" />}
                className="flex-1 text-xs"
              >
                Install App ⚡
              </Button>

              {/* Show Bookmark button only on Desktop */}
              {!isMobile && (
                <Button
                  variant="glass"
                  size="sm"
                  onClick={handleBookmarkClick}
                  leftIcon={<Bookmark size={14} className="text-cyan-400" />}
                  className="text-xs"
                >
                  Bookmark 🔖
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* iOS SAFARI INSTALL INSTRUCTIONS MODAL */}
      <AnimatePresence>
        {showIosModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowIosModal(false)}
              className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 w-full max-w-sm rounded-3xl glass-card border border-cyan-500/50 bg-zinc-950/95 p-6 shadow-[0_0_50px_rgba(0,240,255,0.3)] text-white space-y-5"
            >
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                  <Smartphone size={18} className="text-cyan-400" />
                  <span>Install on iOS Safari</span>
                </h3>
                <button
                  onClick={() => setShowIosModal(false)}
                  className="rounded-full p-1.5 text-zinc-400 hover:bg-zinc-900 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="space-y-4 text-xs font-mono text-zinc-300">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-3">
                  <span className="h-7 w-7 rounded-lg bg-cyan-950 border border-cyan-500 text-cyan-300 flex items-center justify-center font-bold">1</span>
                  <span>Tap the <strong>Share</strong> button <Share size={14} className="inline text-cyan-400 mx-1" /> at bottom menu bar.</span>
                </div>

                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-3">
                  <span className="h-7 w-7 rounded-lg bg-cyan-950 border border-cyan-500 text-cyan-300 flex items-center justify-center font-bold">2</span>
                  <span>Scroll down &amp; tap <strong>&ldquo;Add to Home Screen&rdquo;</strong> <PlusSquare size={14} className="inline text-emerald-400 mx-1" />.</span>
                </div>

                <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-200 text-[11px]">
                  <span>🟢 Instant access right from your iPhone home screen!</span>
                </div>
              </div>

              <Button variant="gradient" size="sm" onClick={() => setShowIosModal(false)} className="w-full">
                Got It! ➔
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* BOOKMARK PAGE HELPER MODAL (DESKTOP ONLY) */}
      <AnimatePresence>
        {showBookmarkModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBookmarkModal(false)}
              className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 w-full max-w-md rounded-3xl glass-card border border-cyan-500/50 bg-zinc-950/95 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.3)] text-white space-y-6"
            >
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <Bookmark size={22} className="text-cyan-400" />
                  <div>
                    <h3 className="text-lg font-black text-white">Bookmark Digital Craftify</h3>
                    <p className="text-[11px] font-mono text-cyan-400">Save for instant future visits</p>
                  </div>
                </div>

                <button
                  onClick={() => setShowBookmarkModal(false)}
                  className="rounded-full p-1.5 text-zinc-400 hover:bg-zinc-900 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="space-y-4 text-xs font-mono text-zinc-300">
                {/* Show Keyboard Shortcut ONLY on Desktop/Laptop */}
                {!isMobile && (
                  <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2 text-center">
                    <span className="text-xs text-zinc-400 uppercase tracking-widest block font-bold">DESKTOP KEYBOARD SHORTCUT</span>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-950 border border-cyan-500/60 text-cyan-300 font-extrabold text-sm shadow-md">
                      <span>Press</span>
                      <kbd className="px-2 py-1 rounded bg-zinc-800 border border-zinc-700 text-white">Ctrl</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 rounded bg-zinc-800 border border-zinc-700 text-white">D</kbd>
                      <span className="text-zinc-400 text-xs">(Mac: ⌘ + D)</span>
                    </div>
                  </div>
                )}

                <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between gap-3">
                  <div className="truncate">
                    <span className="text-[10px] text-zinc-400 block">WEBSITE URL</span>
                    <span className="text-xs text-white font-bold truncate block">https://www.digitalcraftify.com</span>
                  </div>

                  <Button
                    variant="glass"
                    size="sm"
                    onClick={copyPageUrl}
                    leftIcon={copiedLink ? <Check size={14} className="text-emerald-400" /> : undefined}
                  >
                    {copiedLink ? "Copied!" : "Copy Link"}
                  </Button>
                </div>
              </div>

              <Button variant="gradient" size="md" onClick={() => setShowBookmarkModal(false)} className="w-full">
                Close &amp; Continue Browsing ➔
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
