import * as React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

export type IconName = keyof typeof LucideIcons;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  className?: string;
  glow?: boolean;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 20, className, glow = false, ...props }, ref) => {
    const IconComponent = (LucideIcons[name] as React.ComponentType<LucideIcons.LucideProps>) || LucideIcons.HelpCircle;

    return (
      <IconComponent
        ref={ref}
        size={size}
        className={cn(
          "transition-all duration-300",
          glow && "drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]",
          className
        )}
        {...props}
      />
    );
  }
);
Icon.displayName = "Icon";
