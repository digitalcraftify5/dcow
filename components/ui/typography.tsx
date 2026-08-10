import * as React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const HeroText = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, as: Component = "h1", ...props }, ref) => (
    <Component
      ref={ref}
      className={cn(
        "text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl",
        "bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
);
HeroText.displayName = "HeroText";

export const Heading1 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, as: Component = "h1", ...props }, ref) => (
    <Component
      ref={ref}
      className={cn("text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl", className)}
      {...props}
    >
      {children}
    </Component>
  )
);
Heading1.displayName = "Heading1";

export const Heading2 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, as: Component = "h2", ...props }, ref) => (
    <Component
      ref={ref}
      className={cn("text-3xl font-semibold tracking-tight sm:text-4xl", className)}
      {...props}
    >
      {children}
    </Component>
  )
);
Heading2.displayName = "Heading2";

export const Heading3 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, as: Component = "h3", ...props }, ref) => (
    <Component
      ref={ref}
      className={cn("text-2xl font-semibold tracking-tight sm:text-3xl", className)}
      {...props}
    >
      {children}
    </Component>
  )
);
Heading3.displayName = "Heading3";

export const Heading4 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, as: Component = "h4", ...props }, ref) => (
    <Component
      ref={ref}
      className={cn("text-xl font-medium tracking-tight sm:text-2xl", className)}
      {...props}
    >
      {children}
    </Component>
  )
);
Heading4.displayName = "Heading4";

export const Heading5 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, as: Component = "h5", ...props }, ref) => (
    <Component
      ref={ref}
      className={cn("text-lg font-medium tracking-tight sm:text-xl", className)}
      {...props}
    >
      {children}
    </Component>
  )
);
Heading5.displayName = "Heading5";

export const Paragraph = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, className, as: Component = "p", ...props }, ref) => (
    <Component
      ref={ref}
      className={cn("text-base leading-relaxed text-zinc-400 sm:text-lg", className)}
      {...props}
    >
      {children}
    </Component>
  )
);
Paragraph.displayName = "Paragraph";

export const SmallText = React.forwardRef<HTMLSpanElement, TypographyProps>(
  ({ children, className, as: Component = "span", ...props }, ref) => (
    <Component
      ref={ref}
      className={cn("text-sm font-normal text-zinc-400", className)}
      {...props}
    >
      {children}
    </Component>
  )
);
SmallText.displayName = "SmallText";

export const Caption = React.forwardRef<HTMLSpanElement, TypographyProps>(
  ({ children, className, as: Component = "span", ...props }, ref) => (
    <Component
      ref={ref}
      className={cn("text-xs font-medium uppercase tracking-widest text-zinc-500", className)}
      {...props}
    >
      {children}
    </Component>
  )
);
Caption.displayName = "Caption";

export const ButtonText = React.forwardRef<HTMLSpanElement, TypographyProps>(
  ({ children, className, as: Component = "span", ...props }, ref) => (
    <Component
      ref={ref}
      className={cn("text-sm font-semibold tracking-wide uppercase", className)}
      {...props}
    >
      {children}
    </Component>
  )
);
ButtonText.displayName = "ButtonText";

export const NavText = React.forwardRef<HTMLSpanElement, TypographyProps>(
  ({ children, className, as: Component = "span", ...props }, ref) => (
    <Component
      ref={ref}
      className={cn("text-sm font-medium tracking-wide transition-colors hover:text-white", className)}
      {...props}
    >
      {children}
    </Component>
  )
);
NavText.displayName = "NavText";
