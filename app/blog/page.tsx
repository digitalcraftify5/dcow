import type { Metadata } from "next";
import { BlogClientPage } from "./BlogClientPage";

export const metadata: Metadata = {
  title: "Executive Insights & Technical Blog | Digital Craftify",
  description:
    "Explore in-depth technical whitepapers and engineering articles on Next.js 15 App Router architecture, sovereign AI agent pipelines, Flutter cross-platform apps, and zero-trust security.",
  openGraph: {
    title: "Executive Insights & Technical Blog | Digital Craftify",
    description:
      "Deep-Dive Technical Dispatches on Web Architecture, AI LLM Agents, Mobile Sync, and Cybersecurity.",
    url: "https://www.digitalcraftify.com/blog",
  },
};

export default function BlogPage() {
  return <BlogClientPage />;
}
