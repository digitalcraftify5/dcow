export interface SiteConfig {
  name: string;
  legalName: string;
  description: string;
  url: string;
  ogImage: string;
  contact: {
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      region: string;
      country: string;
      postalCode: string;
      formatted: string;
    };
  };
  socials: Record<string, string>;
}

export type ThemeMode = "light" | "dark" | "system";

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  children?: NavItem[];
}
