import { constructMetadata } from "@/lib/metadata";
import FounderClientPage from "./founder-client";

export const metadata = constructMetadata({
  title: "Tanveer Hussain — Founder & CEO",
  description: "Official Founder Profile & Digital Visiting Card for Tanveer Hussain, Founder & CEO of Digital Craftify. Full-stack web developer, UI/UX designer, entrepreneur, and tech architect.",
  canonicalUrl: "/founder",
});

export default function FounderPage() {
  return <FounderClientPage />;
}
