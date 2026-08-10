import * as React from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/buttons/button";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { Check } from "lucide-react";

export interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  period = "/month",
  description,
  features,
  isPopular = false,
  ctaText = "Get Started",
}) => {
  return (
    <GlassPanel
      glow={isPopular ? "cyan" : "none"}
      className={`relative flex flex-col justify-between space-y-6 ${
        isPopular ? "border-cyan-500/50 bg-cyan-950/20" : ""
      }`}
    >
      {isPopular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full gradient-teal-cyan px-3 py-1 text-xs font-extrabold uppercase text-zinc-950 shadow-md">
          Most Popular
        </span>
      )}

      <div className="space-y-4">
        {/* Line 1: Cyber Badge */}
        <div>
          <CyberBadge text={isPopular ? "POPULAR_TIER" : "INVESTMENT_PLAN"} variant={isPopular ? "cyan" : "emerald"} />
        </div>

        {/* Line 2: Title (Upscaled text-2xl) */}
        <div>
          <h3 className="text-2xl font-extrabold text-white tracking-tight">{name}</h3>
        </div>

        {/* Line 3: Description (Upscaled text-sm) */}
        <p className="text-sm text-zinc-300 leading-relaxed font-normal">{description}</p>

        <div className="flex items-baseline gap-1.5 pt-1">
          <span className="text-4xl font-extrabold text-white">{price}</span>
          <span className="text-sm text-zinc-400 font-medium">{period}</span>
        </div>

        <ul className="space-y-2.5 pt-4 border-t border-zinc-800">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                <Check size={12} />
              </span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button variant={isPopular ? "gradient" : "outline"} className="w-full">
        {ctaText}
      </Button>
    </GlassPanel>
  );
};
