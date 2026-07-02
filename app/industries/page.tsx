import type { Metadata } from "next";
import IndustriesPageContent from "@/components/sections/IndustriesPage";

export const metadata: Metadata = {
  title: "Industries We Serve – AriloTec",
  description:
    "AriloTec delivers AI solutions across healthcare, finance, retail, manufacturing, education, logistics, real estate, and more.",
};

export default function Page() {
  return <IndustriesPageContent />;
}
