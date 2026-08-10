import { Hero } from "@/components/hero/Hero";
import { TrustedSection } from "@/sections/home/TrustedSection";
import { ServicesSection } from "@/sections/home/ServicesSection";
import { FeaturedProjectSection } from "@/sections/home/FeaturedProjectSection";
import { TechnologySection } from "@/sections/home/TechnologySection";
import { WhyChooseSection } from "@/sections/home/WhyChooseSection";
import { StatsSection } from "@/sections/home/StatsSection";
import { ProcessSection } from "@/sections/home/ProcessSection";
import { PortfolioSection } from "@/sections/home/PortfolioSection";
import { CaseStudiesSection } from "@/sections/home/CaseStudiesSection";
import { TestimonialsSection } from "@/sections/home/TestimonialsSection";
import { AwardsSection } from "@/sections/home/AwardsSection";
import { PricingSection } from "@/sections/home/PricingSection";
import { BlogSection } from "@/sections/home/BlogSection";
import { FAQSection } from "@/sections/home/FAQSection";
import { CTASection } from "@/sections/home/CTASection";
import { NewsletterSection } from "@/sections/home/NewsletterSection";
import { ContactStripSection } from "@/sections/home/ContactStripSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedSection />
      <ServicesSection />
      <FeaturedProjectSection />
      <TechnologySection />
      <WhyChooseSection />
      <StatsSection />
      <ProcessSection />
      <PortfolioSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <AwardsSection />
      <PricingSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
      <NewsletterSection />
      <ContactStripSection />
    </>
  );
}
