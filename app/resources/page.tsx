import type { Metadata } from "next";
import { ResourcesClientPage } from "./ResourcesClientPage";

export const metadata: Metadata = {
  title: "Knowledge & Developer Resource Hub | Digital Craftify",
  description:
    "Explore Digital Craftify's enterprise resource repository: Open-source SDKs, ISO-27001 security whitepapers, Cloud CDN architecture blueprints, brand media kits, and live SLA system telemetry.",
  openGraph: {
    title: "Knowledge & Developer Resource Hub | Digital Craftify",
    description:
      "Enterprise Whitepapers, Open-Source SDKs, Brand Vector Kits, and Live Telemetry Sentinel.",
    url: "https://www.digitalcraftify.com/resources",
  },
};

export default function ResourcesPage() {
  return <ResourcesClientPage />;
}
