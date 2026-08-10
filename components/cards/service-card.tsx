import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Icon, IconName } from "@/components/ui/icon";
import { Button } from "@/components/buttons/button";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { ArrowRight } from "lucide-react";

export interface ServiceCardProps {
  title: string;
  description: string;
  iconName: IconName;
  features?: string[];
  href?: string;
  image?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconName,
  features,
  href = "#",
  image,
}) => {
  return (
    <GlassPanel glow="cyan" className="group flex flex-col justify-between space-y-6 overflow-hidden p-0">
      {/* Futuristic Card Header Image */}
      {image ? (
        <div className="relative h-48 w-full overflow-hidden border-b border-zinc-800/80 bg-zinc-950">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
          <div className="absolute top-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.3)]">
            <Icon name={iconName} size={20} glow />
          </div>
        </div>
      ) : (
        <div className="px-6 pt-6">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
            <Icon name={iconName} size={24} glow />
          </div>
        </div>
      )}

      <div className="px-6 space-y-2.5">
        {/* Line 1: Cyber Badge */}
        <div>
          <CyberBadge text="ENTERPRISE_SOLUTION" variant="cyan" />
        </div>
        {/* Line 2: Primary Title (compact text-base) */}
        <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors pt-0.5">{title}</h3>
        {/* Line 3: Secondary Description (compact text-xs) */}
        <p className="text-xs text-zinc-400 leading-relaxed font-normal">{description}</p>

        {features && features.length > 0 && (
          <ul className="space-y-1.5 pt-2.5 border-t border-zinc-800/60">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-[11px] text-zinc-400 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="px-6 pb-6 pt-2">
        <Link href={href}>
          <Button variant="ghost" size="sm" rightIcon={<ArrowRight size={14} />} className="p-0 text-cyan-400 hover:text-cyan-300">
            Learn More
          </Button>
        </Link>
      </div>
    </GlassPanel>
  );
};
