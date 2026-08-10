import { Metadata } from "next";
import { SITE_CONFIG } from "@/constants/site";

export interface ConstructMetadataOptions {
  title?: string;
  description?: string;
  image?: string;
  icons?: Metadata["icons"];
  noIndex?: boolean;
  keywords?: string[];
  canonicalUrl?: string;
  type?: "website" | "article";
}

export const DEFAULT_KEYWORDS = [
  "Digital Craftify",
  "Digital Craftify Agency",
  "Digital Craftify Ltd",
  "Tanveer Hussain",
  "Tanveer Hussain Digital Craftify",
  "Tanveer Hussain CEO",
  "Digital Craftify Srinagar",
  "Digital Craftify Kashmir",
  "Best Web Development Agency Kashmir",
  "Web Development Agency Srinagar",
  "Custom Website Design Agency",
  "Next.js Web Development Agency",
  "React Web Development Agency",
  "Futuristic UI UX Design Agency",
  "Website Redesign Services",
  "Mobile App Development Agency",
  "Flutter App Development Services",
  "Technical SEO Agency",
  "Digital Marketing Agency",
  "Branding and Logo Design",
  "High Speed Cloud Hosting",
  "24/7 Website Maintenance & Support",
  "Headless WordPress Development",
  "AI Integration & LLM Solutions",
  "Enterprise Software Development",
  "Top IT Agency Srinagar Kashmir India",
];

export function constructMetadata({
  title = SITE_CONFIG.name,
  description = SITE_CONFIG.description,
  image = SITE_CONFIG.ogImage,
  icons = [
    { rel: "icon", url: "/logo.png", type: "image/png" },
    { rel: "apple-touch-icon", url: "/logo.png" },
  ],
  noIndex = false,
  keywords = DEFAULT_KEYWORDS,
  canonicalUrl,
  type = "website",
}: ConstructMetadataOptions = {}): Metadata {
  const fullTitle = title === SITE_CONFIG.name 
    ? `${SITE_CONFIG.name} | Premium Web Development & Digital Design Agency` 
    : `${title} | ${SITE_CONFIG.name}`;
    
  const targetUrl = canonicalUrl ? `${SITE_CONFIG.url}${canonicalUrl}` : SITE_CONFIG.url;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: SITE_CONFIG.legalName, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.legalName,
    metadataBase: new URL(SITE_CONFIG.url),
    category: "technology",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: SITE_CONFIG.name,
    },
    alternates: {
      canonical: targetUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: targetUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} — Premium Web & App Agency`,
        },
      ],
      type,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    icons,
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}
