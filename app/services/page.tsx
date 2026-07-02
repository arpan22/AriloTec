import type { Metadata } from "next";
import ServicesPageContent from "@/components/sections/ServicesPageContent";

export const metadata: Metadata = {
  title: "AI Services – ArlioTech",
  description:
    "Explore ArlioTech's full range of AI and technology services: generative AI, machine learning, automation, cloud solutions, and more.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
