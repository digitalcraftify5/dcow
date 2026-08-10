"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/buttons/button";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const HeroButtons: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 pt-2">
      {/* Primary CTA */}
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link href="/portfolio">
          <Button
            variant="gradient"
            size="lg"
            rightIcon={<ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
            className="shadow-[0_0_25px_rgba(0,240,255,0.4)]"
          >
            Explore Our Work
          </Button>
        </Link>
      </motion.div>

      {/* Secondary CTA */}
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link href="/services">
          <Button
            variant="glass"
            size="lg"
            leftIcon={<Sparkles size={18} className="text-cyan-400" />}
            className="border-zinc-700/80 hover:border-cyan-500/50"
          >
            Our Services
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};
