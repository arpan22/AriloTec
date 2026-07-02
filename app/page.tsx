import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrustedBy from "@/components/home/TrustedBy";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TechStack from "@/components/home/TechStack";
import IndustriesSection from "@/components/home/IndustriesSection";
import ProcessSection from "@/components/home/ProcessSection";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import FAQSection from "@/components/home/FAQSection";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "AriloTec – AI Solutions & Digital Transformation Company India",
  description:
    "AriloTec builds enterprise AI solutions — generative AI, intelligent automation, machine learning, and cloud platforms. India's premier AI innovation partner for startups, SMEs, and enterprises.",
  openGraph: {
    title: "AriloTec – AI Solutions & Digital Transformation",
    description:
      "India's premier AI innovation company delivering generative AI, automation, and enterprise digital transformation.",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <ServicesOverview />
      <StatsSection />
      <WhyChooseUs />
      <TechStack />
      <IndustriesSection />
      <ProcessSection />
      <CaseStudiesSection />
      <Testimonials />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
