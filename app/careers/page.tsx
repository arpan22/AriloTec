import type { Metadata } from "next";
import CareersPageContent from "@/components/sections/CareersPage";

export const metadata: Metadata = {
  title: "Careers at ArlioTec – Join India's Leading AI Team",
  description:
    "Build the future of AI with us. Explore open positions, our culture, benefits, and what it's like to work at ArlioTec.",
};

export default function Page() {
  return <CareersPageContent />;
}
