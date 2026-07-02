import type { Metadata } from "next";
import CaseStudiesPageContent from "@/components/sections/CaseStudiesPage";

export const metadata: Metadata = {
  title: "Case Studies – ArlioTech AI Success Stories",
  description:
    "Explore how ArlioTech has delivered measurable AI outcomes for clients across healthcare, finance, retail, manufacturing, and more.",
};

export default function Page() {
  return <CaseStudiesPageContent />;
}
