import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Core pages
  const coreRoutes = [
    { route: "", priority: 1.0, changeFrequency: "daily" },
    { route: "/services", priority: 0.9, changeFrequency: "weekly" },
    { route: "/resources", priority: 0.9, changeFrequency: "weekly" },
    { route: "/founder", priority: 0.9, changeFrequency: "weekly" },
    { route: "/portfolio", priority: 0.8, changeFrequency: "weekly" },
    { route: "/case-studies", priority: 0.8, changeFrequency: "weekly" },
    { route: "/pricing", priority: 0.8, changeFrequency: "weekly" },
    { route: "/about", priority: 0.8, changeFrequency: "monthly" },
    { route: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { route: "/blog", priority: 0.8, changeFrequency: "weekly" },
  ];

  // 15 Service detail pages
  const serviceRoutes = [
    "/services/website-design",
    "/services/website-redesign",
    "/services/web-development",
    "/services/app-development",
    "/services/ui-ux",
    "/services/seo",
    "/services/digital-marketing",
    "/services/branding",
    "/services/graphics-design",
    "/services/logo-design",
    "/services/hosting",
    "/services/maintenance",
    "/services/wordpress",
    "/services/support",
    "/services/ai-integration",
  ].map((route) => ({
    route,
    priority: 0.85,
    changeFrequency: "weekly",
  }));

  // 6 Resource hub pages
  const resourceRoutes = [
    "/resources/knowledge-base",
    "/resources/documentation",
    "/resources/blog",
    "/resources/faq",
    "/resources/tutorials",
    "/resources/downloads",
  ].map((route) => ({
    route,
    priority: 0.8,
    changeFrequency: "weekly",
  }));

  const allRoutes = [...coreRoutes, ...serviceRoutes, ...resourceRoutes];

  return allRoutes.map(({ route, priority, changeFrequency }) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified,
    changeFrequency: changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority,
  }));
}
