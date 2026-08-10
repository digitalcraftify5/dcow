"use client";

import * as React from "react";
import { PricingCard } from "@/components/cards/pricing-card";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Globe } from "lucide-react";

export type CurrencyCode = "USD" | "EUR" | "INR" | "AED" | "RUB" | "IRR" | "CNY";

interface CurrencyConfig {
  code: CurrencyCode;
  country: string;
  flag: string;
  symbol: string;
  label: string;
  rate: number;
}

const CURRENCIES: CurrencyConfig[] = [
  { code: "USD", country: "United States", flag: "🇺🇸", symbol: "$", label: "USD ($)", rate: 1 },
  { code: "EUR", country: "Europe", flag: "🇪🇺", symbol: "€", label: "EUR (€)", rate: 0.92 },
  { code: "INR", country: "India", flag: "🇮🇳", symbol: "₹", label: "INR (₹)", rate: 83.5 },
  { code: "AED", country: "United Arab Emirates", flag: "🇦🇪", symbol: "AED", label: "AED (د.إ)", rate: 3.67 },
  { code: "RUB", country: "Russia", flag: "🇷🇺", symbol: "₽", label: "RUB (₽)", rate: 90.0 },
  { code: "IRR", country: "Iran", flag: "🇮🇷", symbol: "Toman", label: "IRR (تومان)", rate: 42000 },
  { code: "CNY", country: "China", flag: "🇨🇳", symbol: "¥", label: "CNY (¥)", rate: 7.20 },
];

const BASE_TIERS = [
  {
    name: "Starter",
    usdPrice: 299,
    period: "one-time",
    description: "Affordable luxury custom web presence built for high conversion.",
    features: [
      "Custom 5-Page Responsive Web Application",
      "Next.js 16 + React 19 Fullstack Engine",
      "Tailwind v4 Glassmorphic & Dark Mode UI",
      "Full Source Code Ownership & Repository",
      "SEO & PageSpeed Performance Optimization",
      "Free SSL Certificate & Domain Configuration",
      "Basic Contact Form & Lead Email Alerts",
      "1 Month Dedicated Support & Bug Fixes",
    ],
    isPopular: false,
    ctaText: "Get Started",
  },
  {
    name: "Professional",
    usdPrice: 599,
    period: "one-time",
    description: "Complete fullstack web platform for established businesses.",
    features: [
      "Up to 12 Pages + Dynamic CMS Integration",
      "Interactive Three.js & WebGL 3D Canvas Elements",
      "Custom Micro-animations (Framer Motion & GSAP)",
      "Technical SEO Audits & Structured Schema Setup",
      "Multi-Currency & Internationalization Ready",
      "Custom API Integration & Webhook Endpoints",
      "Google Analytics 4 & Conversion Tracking",
      "3 Months Support, SLA & Maintenance",
    ],
    isPopular: true,
    ctaText: "Start Professional",
  },
  {
    name: "Enterprise",
    usdPrice: 1299,
    period: "custom scope",
    description: "Bespoke SaaS platform, mobile apps, and dedicated engineering team.",
    features: [
      "Unlimited Scalable Pages & Custom Admin Portal",
      "Native iOS & Android Mobile Apps (Flutter)",
      "Custom AI & LLM Micro-Agents Integration",
      "SOC2-Compliant Cloud Infrastructure (AWS / Cloudflare)",
      "Automated CI/CD Pipeline & Security Hardening",
      "High-Volume Database Architecture & Caching (Redis)",
      "24/7 Global Monitoring & Incident Response",
      "Lifetime Priority SLA Support & Architect Access",
    ],
    isPopular: false,
    ctaText: "Contact Enterprise",
  },
];

export const PricingCardsSection: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = React.useState<CurrencyCode>("USD");
  const [autoDetected, setAutoDetected] = React.useState(false);

  // Auto-detect currency based on IP or Timezone
  React.useEffect(() => {
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (timeZone.includes("Asia/Kolkata") || timeZone.includes("Calcutta")) {
        setSelectedCurrency("INR");
      } else if (timeZone.includes("Dubai") || timeZone.includes("Muscat")) {
        setSelectedCurrency("AED");
      } else if (timeZone.includes("Moscow") || timeZone.includes("Samara")) {
        setSelectedCurrency("RUB");
      } else if (timeZone.includes("Tehran")) {
        setSelectedCurrency("IRR");
      } else if (timeZone.includes("Shanghai") || timeZone.includes("Beijing") || timeZone.includes("Hong_Kong")) {
        setSelectedCurrency("CNY");
      } else if (timeZone.includes("Europe") || timeZone.includes("Paris") || timeZone.includes("Berlin")) {
        setSelectedCurrency("EUR");
      }
      setAutoDetected(true);
    } catch {
      // Default to USD if detection fails
    }
  }, []);

  const activeConfig = CURRENCIES.find((c) => c.code === selectedCurrency) || CURRENCIES[0];

  const formatPrice = (usd: number, isEnterprise = false) => {
    if (selectedCurrency === "IRR") {
      const tomanInThousands = Math.round((usd * activeConfig.rate) / 10000);
      return `${tomanInThousands.toLocaleString()}M Toman${isEnterprise ? "+" : ""}`;
    }
    const converted = Math.round(usd * activeConfig.rate);
    const formatted = converted.toLocaleString();
    if (selectedCurrency === "AED") {
      return `AED ${formatted}${isEnterprise ? "+" : ""}`;
    }
    if (selectedCurrency === "RUB") {
      return `₽${formatted}${isEnterprise ? "+" : ""}`;
    }
    if (selectedCurrency === "CNY") {
      return `¥${formatted}${isEnterprise ? "+" : ""}`;
    }
    return `${activeConfig.symbol}${formatted}${isEnterprise ? "+" : ""}`;
  };

  return (
    <section className="relative py-20 lg:py-24 bg-zinc-950 overflow-hidden border-t border-b border-zinc-800/80">
      <CyberBackground variant="emerald" density={30} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header & Multi-Currency Country Selector */}
        <AnimatedWrapper variant="fadeIn" className="space-y-4 text-center">
          <CyberBadge text="TRANSPARENT_INVESTMENT // MULTI_CURRENCY" variant="cyan" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Affordable & Predictable <span className="text-gradient-teal-cyan">Enterprise Pricing</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed max-w-2xl mx-auto">
            High-performance engineering designed to fit every budget. Select your country currency below to view local pricing.
          </p>

          {/* Country Currency Selector Bar */}
          <div className="flex flex-col items-center gap-4 pt-4">
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-semibold">
              <Globe size={16} className="text-cyan-400" />
              <span>Select Your Country / Regional Currency:</span>
              {autoDetected && (
                <span className="text-[10px] text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded font-mono">
                  IP Auto-Detected
                </span>
              )}
            </div>

            {/* Quick Country Buttons */}
            <div className="flex flex-wrap justify-center gap-2 rounded-2xl glass-card p-2 border border-zinc-800/80 shadow-2xl">
              {CURRENCIES.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => setSelectedCurrency(curr.code)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                    selectedCurrency === curr.code
                      ? "gradient-teal-cyan text-zinc-950 shadow-lg scale-105"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                  }`}
                >
                  <span>{curr.flag}</span>
                  <span>{curr.country} ({curr.code})</span>
                </button>
              ))}
            </div>
          </div>
        </AnimatedWrapper>

        {/* Homepage Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch pt-4">
          {BASE_TIERS.map((tier, idx) => (
            <AnimatedWrapper key={tier.name} variant="scaleUp" delay={idx * 0.1}>
              <PricingCard
                name={tier.name}
                price={formatPrice(tier.usdPrice, tier.name === "Enterprise")}
                period={tier.period}
                description={tier.description}
                features={tier.features}
                isPopular={tier.isPopular}
                ctaText={tier.ctaText}
              />
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
