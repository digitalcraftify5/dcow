import * as React from "react";
import { SITE_CONFIG } from "@/constants/site";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_CONFIG.url}/logo.png`,
      caption: SITE_CONFIG.name,
    },
    image: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.contact.address.street,
      addressLocality: SITE_CONFIG.contact.address.city,
      addressRegion: SITE_CONFIG.contact.address.region,
      postalCode: SITE_CONFIG.contact.address.postalCode,
      addressCountry: SITE_CONFIG.contact.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.contact.phone,
      contactType: "customer service",
      email: SITE_CONFIG.contact.email,
      availableLanguage: ["English", "Hindi", "Urdu"],
    },
    sameAs: [
      SITE_CONFIG.socials.facebook,
      SITE_CONFIG.socials.instagram,
      SITE_CONFIG.socials.github,
      SITE_CONFIG.socials.discord,
      SITE_CONFIG.socials.linkedin,
    ],
    founder: {
      "@type": "Person",
      name: "Tanveer Hussain",
      jobTitle: "Founder & Chief Executive Officer",
      email: SITE_CONFIG.contact.email,
      telephone: SITE_CONFIG.contact.phone,
      url: SITE_CONFIG.url,
      worksFor: {
        "@id": `${SITE_CONFIG.url}/#organization`,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "148",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    image: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    priceRange: "$$$",
    hasMap: "https://maps.google.com/?q=Al+Mehdi+Colony+Yayil+Rawalpora+Srinagar+Jammu+Kashmir+190005",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.contact.address.street,
      addressLocality: SITE_CONFIG.contact.address.city,
      addressRegion: SITE_CONFIG.contact.address.region,
      postalCode: SITE_CONFIG.contact.address.postalCode,
      addressCountry: SITE_CONFIG.contact.address.country,
    },
    founder: {
      "@type": "Person",
      name: "Tanveer Hussain",
      jobTitle: "Founder & Chief Executive Officer",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0322,
      longitude: 74.8000,
    },
    areaServed: [
      { "@type": "Country", name: "Worldwide" },
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "148",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/resources/knowledge-base?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServicesCatalogJsonLd() {
  const services = [
    { name: "Website Design", path: "/services/website-design", desc: "Custom high-conversion web design." },
    { name: "Website Redesign", path: "/services/website-redesign", desc: "Complete website redesign & modernization." },
    { name: "Web Development", path: "/services/web-development", desc: "Next.js & React web application development." },
    { name: "App Development", path: "/services/app-development", desc: "Native iOS, Android & Flutter mobile apps." },
    { name: "UI/UX Design", path: "/services/ui-ux", desc: "User research, wireframing & design systems." },
    { name: "Technical SEO", path: "/services/seo", desc: "Core Web Vitals & search engine optimization." },
    { name: "Digital Marketing", path: "/services/digital-marketing", desc: "Performance marketing & conversion growth campaigns." },
    { name: "Branding", path: "/services/branding", desc: "Visual identity and brand design." },
    { name: "Graphics Design", path: "/services/graphics-design", desc: "Marketing visuals and graphics design." },
    { name: "Logo Design", path: "/services/logo-design", desc: "Vector logo design & brand marks." },
    { name: "Edge Cloud Hosting", path: "/services/hosting", desc: "High-speed CDN & cloud hosting deployment." },
    { name: "Website Maintenance", path: "/services/maintenance", desc: "24/7 security updates & site maintenance." },
    { name: "Headless WordPress", path: "/services/wordpress", desc: "Headless WordPress & Next.js integration." },
    { name: "Dedicated Support SLA", path: "/services/support", desc: "24/7 helpdesk & developer support." },
    { name: "AI Integration & Agents", path: "/services/ai-integration", desc: "Custom AI agents & LLM integrations." },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Digital Craftify Engineering Services",
    itemListElement: services.map((s, idx) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.desc,
        url: `${SITE_CONFIG.url}${s.path}`,
        provider: {
          "@id": `${SITE_CONFIG.url}/#organization`,
        },
      },
      position: idx + 1,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_CONFIG.url}/founder#tanveer-hussain`,
    name: "Tanveer Hussain",
    givenName: "Tanveer",
    familyName: "Hussain",
    jobTitle: "Founder & Chief Executive Officer",
    worksFor: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    url: `${SITE_CONFIG.url}/founder`,
    image: `${SITE_CONFIG.url}/founder-photo.jpg`,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.contact.address.street,
      addressLocality: SITE_CONFIG.contact.address.city,
      addressRegion: SITE_CONFIG.contact.address.region,
      postalCode: SITE_CONFIG.contact.address.postalCode,
      addressCountry: SITE_CONFIG.contact.address.country,
    },
    sameAs: [
      SITE_CONFIG.socials.github,
      SITE_CONFIG.socials.discord,
      SITE_CONFIG.socials.facebook,
      SITE_CONFIG.socials.instagram,
      SITE_CONFIG.socials.linkedin,
    ],
    knowsAbout: [
      "Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "UI/UX Design",
      "Search Engine Optimization",
      "Software Architecture",
      "Entrepreneurship"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
