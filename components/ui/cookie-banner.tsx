"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/buttons/button";

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAction = (status: "accepted" | "rejected" | "preferences") => {
    localStorage.setItem("cookie-consent", status);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-6 left-6 z-40 max-w-md glass-card rounded-2xl p-6 shadow-2xl space-y-4"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5 text-cyan-400">
            <Cookie size={22} />
            <h4 className="text-sm font-bold text-white">Cookie & Privacy Preferences</h4>
          </div>
          <button
            onClick={() => handleAction("rejected")}
            className="text-zinc-400 hover:text-white"
            aria-label="Close Cookie Banner"
          >
            <X size={16} />
          </button>
        </div>

        <p className="text-xs text-zinc-300 leading-relaxed">
          We use cookies and telemetry tools to optimize performance, analyze web traffic, and craft tailored experiences.
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-2">
          <Button variant="gradient" size="sm" onClick={() => handleAction("accepted")}>
            Accept All
          </Button>
          <Button variant="outline" size="sm" onClick={() => handleAction("rejected")}>
            Reject Non-Essential
          </Button>
          <Button variant="ghost" size="sm" onClick={() => handleAction("preferences")}>
            Preferences
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
