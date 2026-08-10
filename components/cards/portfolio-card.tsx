import * as React from "react";
import Image from "next/image";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SmallText } from "@/components/ui/typography";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { ExternalLink } from "lucide-react";

export interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  href?: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  category,
  description,
  imageUrl,
  tags = [],
  href = "#",
}) => {
  return (
    <GlassPanel glow="purple" className="group overflow-hidden p-0 space-y-0">
      <div className="relative h-56 w-full overflow-hidden bg-zinc-900">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        <span className="absolute top-4 left-4 rounded-full bg-purple-500/20 backdrop-blur-md px-3 py-1 text-xs font-semibold text-purple-300 border border-purple-500/30">
          {category}
        </span>
      </div>
      <div className="p-6 space-y-3">
        {/* Line 1: Cyber Badge */}
        <div>
          <CyberBadge text={category.toUpperCase()} variant="purple" />
        </div>

        {/* Line 2: Title (compact text-base) */}
        <div className="flex items-center justify-between pt-0.5">
          <h4 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors">{title}</h4>
          <a href={href} className="text-zinc-400 hover:text-purple-400 transition-colors">
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Line 3: Description (compact text-xs) */}
        <p className="text-xs text-zinc-400 leading-relaxed font-normal line-clamp-2">{description}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {tags.map((tag, idx) => (
              <SmallText key={idx} className="rounded bg-zinc-800/60 px-2 py-0.5 text-[11px] text-zinc-300 font-mono">
                #{tag}
              </SmallText>
            ))}
          </div>
        )}
      </div>
    </GlassPanel>
  );
};
