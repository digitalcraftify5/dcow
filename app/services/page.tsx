import type { Metadata } from "next";
import { ServicesClientPage } from "./ServicesClientPage";

export const metadata: Metadata = {
  title: "15 Specialization Services | Digital Craftify",
  description:
    "Explore Digital Craftify's 15 specialized engineering services: Web Design, Web Development, Flutter Mobile Apps, UI/UX, SEO, Branding, Cloud Hosting, SLA Maintenance, and AI LLM Automations.",
  openGraph: {
    title: "15 Specialization Engineering Services | Digital Craftify",
    description:
      "Fullstack Web & Mobile Development, 3D WebGL UI/UX, Sovereign Cloud CDN Hosting, and AI Agent Automations.",
    url: "https://www.digitalcraftify.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesClientPage />;
}
