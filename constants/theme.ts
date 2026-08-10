export const THEME_TOKENS = {
  colors: {
    primary: {
      teal: "hsl(174 100% 41%)",
      cyan: "hsl(188 100% 50%)",
      electricBlue: "hsl(217 100% 56%)",
    },
    secondary: {
      purple: "hsl(270 91% 65%)",
      emerald: "hsl(160 84% 39%)",
    },
    status: {
      success: "hsl(142 71% 45%)",
      warning: "hsl(38 92% 50%)",
      danger: "hsl(0 84% 60%)",
      info: "hsl(199 89% 48%)",
    },
  },
  spacing: {
    xs: "0.25rem",   // 4px
    sm: "0.5rem",    // 8px
    md: "1rem",      // 16px
    lg: "1.5rem",    // 24px
    xl: "2rem",      // 32px
    "2xl": "3rem",   // 48px
    "3xl": "4rem",   // 64px
    "4xl": "6rem",   // 96px
  },
  radius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
    full: "9999px",
  },
  shadows: {
    soft: "0 4px 20px -2px rgba(0, 0, 0, 0.25)",
    medium: "0 8px 30px -4px rgba(0, 0, 0, 0.35)",
    large: "0 20px 50px -10px rgba(0, 0, 0, 0.5)",
    glowTeal: "0 0 25px hsl(174 100% 41% / 0.35)",
    glowCyan: "0 0 25px hsl(188 100% 50% / 0.35)",
    glowPurple: "0 0 25px hsl(270 91% 65% / 0.35)",
  },
} as const;
