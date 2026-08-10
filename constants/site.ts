export const SITE_CONFIG = {
  name: "Digital Craftify",
  legalName: "Digital Craftify Ltd.",
  description: "Digital Craftify is a premier digital engineering & design agency creating high-performing websites, mobile apps, custom software, and futuristic digital experiences that drive real business growth.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://www.digitalcraftify.com",
  ogImage: "https://www.digitalcraftify.com/images/og.png",
  contact: {
    email: "support@digitalcraftify.com",
    phone: "+91 91494 55143",
    address: {
      street: "Al Mehdi Colony Yayil Rawalpora",
      city: "Srinagar",
      region: "Jammu & Kashmir",
      country: "India",
      postalCode: "190005",
      formatted: "Al Mehdi Colony Yayil Rawalpora, Srinagar, Jammu & Kashmir, India – 190005",
    },
  },
  socials: {
    facebook: "https://facebook.com/digitalcraftify5",
    instagram: "https://instagram.com/digitalcraftify5",
    github: "https://github.com/digitalcraftify5",
    discord: "https://discord.gg/digitalcraftify5",
    linkedin: "https://linkedin.com/company/digitalcraftify5",
  },
} as const;
