"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-9 w-9 rounded-lg bg-zinc-800/40" />;

  const options = [
    { name: "light", label: "Light", icon: Sun },
    { name: "dark", label: "Dark", icon: Moon },
    { name: "system", label: "System", icon: Laptop },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass-button flex h-9 w-9 items-center justify-center rounded-lg text-zinc-300 hover:text-white"
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? <Moon size={16} /> : theme === "light" ? <Sun size={16} /> : <Laptop size={16} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-36 rounded-xl glass-card p-1.5 shadow-2xl z-50"
          >
            {options.map((opt) => {
              const Icon = opt.icon;
              const isSelected = theme === opt.name;
              return (
                <button
                  key={opt.name}
                  onClick={() => {
                    setTheme(opt.name);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                    isSelected
                      ? "bg-cyan-500/20 text-cyan-400 font-semibold"
                      : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
                  }`}
                >
                  <Icon size={14} />
                  {opt.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
