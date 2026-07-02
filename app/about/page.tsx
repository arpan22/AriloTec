import type { Metadata } from "next";
import AboutPage from "@/components/sections/AboutPage";

export const metadata: Metadata = {
  title: "About AriloTec – Our Story, Mission & Team",
  description:
    "Learn how AriloTec is redefining enterprise AI in India. Our mission, core values, leadership team, and the philosophy behind everything we build.",
  openGraph: {
    title: "About AriloTec – India's Premier AI Innovation Company",
    description: "Our story, mission, vision, and the team behind AriloTec's AI excellence.",
  },
};

export default function Page() {
  return <AboutPage />;
}
