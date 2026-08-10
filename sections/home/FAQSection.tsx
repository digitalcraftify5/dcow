"use client";

import * as React from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Heading2, Paragraph } from "@/components/ui/typography";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import { CyberHeader } from "@/components/ui/cyber-header";
import { CyberBackground } from "@/components/ui/cyber-background";
import { ChevronDown, Search } from "lucide-react";

export const FAQ_ITEMS = [
  {
    q: "How long does a typical custom enterprise web build take?",
    a: "Standard bespoke web applications are delivered within 3 to 6 weeks depending on custom 3D elements, API integrations, and content scope. Fast-track emergency sprints are also available.",
  },
  {
    q: "Do you provide full source code and IP ownership?",
    a: "Yes. Upon project finalization, 100% of source code, Figma design files, brand assets, and intellectual property belong exclusively to your enterprise without hidden licenses.",
  },
  {
    q: "Can Digital Craftify maintain and host our platform post-launch?",
    a: "Absolutely. We offer 24/7 SLA monitoring, edge cloud hosting on AWS/Cloudflare, automated security patches, and ongoing engineering maintenance retainer plans.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "We specialize in Next.js 16, React 19, TypeScript, Tailwind CSS v4, Three.js, GSAP, Node.js, Python AI, Flutter, Docker, AWS, and custom LLM micro-agents.",
  },
  {
    q: "How do you handle cybersecurity and data privacy compliance?",
    a: "All our code adheres to OWASP Top 10 security standards, SOC2 compliance protocols, strict SSL/TLS encryption, and automated vulnerability scanning before deployment.",
  },
  {
    q: "Can you integrate custom AI models & LLMs into our software?",
    a: "Yes! We build custom AI assistants, automated RAG search engines, fine-tuned OpenAI/Claude agents, and real-time predictive analytics into web & mobile applications.",
  },
  {
    q: "What currencies and payment terms do you accept?",
    a: "We support USD ($), EUR (€), INR (₹), AED (د.إ), and Rial (﷼) via milestone-based payment schedules (e.g. 50% deposit, 25% preview approval, 25% final launch).",
  },
  {
    q: "How many design revisions are included during prototyping?",
    a: "We provide unlimited design iterations during the wireframe and interactive Figma prototyping phase until your executive team is 100% satisfied.",
  },
  {
    q: "Do you build native mobile apps alongside web applications?",
    a: "Yes, we develop cross-platform mobile apps for iOS and Android using Flutter and React Native with shared backend APIs for seamless data sync.",
  },
  {
    q: "How do we get started with Digital Craftify?",
    a: "You can click 'Let's Talk' or fill out our contact form to schedule an initial 30-minute architectural discovery consultation with our technical team.",
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="relative py-24 bg-zinc-950 overflow-hidden">
      <CyberBackground variant="cyan" density={25} />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        <AnimatedWrapper variant="fadeIn" className="space-y-4">
          <CyberHeader
            badgeText="Common Questions"
            title="Frequently Asked Questions"
            description="Have questions about our process, technology stack, or engagement options? Find answers below."
            variant="cyan"
          />

          {/* Search Filter Input */}
          <div className="relative max-w-md mx-auto pt-4">
            <Search className="absolute left-3.5 top-7 h-4 w-4 text-zinc-500 pointer-events-none" />
            <input
              type="text"
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-11 rounded-xl bg-zinc-900/90 pl-10 pr-4 text-xs text-white border border-zinc-800 outline-none focus:border-cyan-500"
            />
          </div>
        </AnimatedWrapper>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <AnimatedWrapper key={faq.q} variant="scaleUp" delay={idx * 0.04}>
                <GlassPanel glow="teal" className="p-0 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 transition-transform ${isOpen ? "rotate-180 text-cyan-400" : "text-zinc-500"}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/60">
                      {faq.a}
                    </div>
                  )}
                </GlassPanel>
              </AnimatedWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};
