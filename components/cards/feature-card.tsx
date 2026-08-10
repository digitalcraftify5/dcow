import * as React from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Heading4, Paragraph } from "@/components/ui/typography";
import { Icon, IconName } from "@/components/ui/icon";

export interface FeatureCardProps {
  title: string;
  description: string;
  iconName: IconName;
  badge?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  iconName,
  badge,
}) => {
  return (
    <GlassPanel glow="teal" className="group space-y-4">
      <div className="flex items-center justify-between">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400">
          <Icon name={iconName} size={20} />
        </div>
        {badge && (
          <span className="rounded-full bg-teal-500/10 px-2.5 py-0.5 text-xs font-semibold text-teal-400 border border-teal-500/20">
            {badge}
          </span>
        )}
      </div>
      <Heading4 className="group-hover:text-teal-400 transition-colors">{title}</Heading4>
      <Paragraph className="text-sm">{description}</Paragraph>
    </GlassPanel>
  );
};
