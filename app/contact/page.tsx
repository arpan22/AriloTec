import type { Metadata } from "next";
import ContactPageContent from "@/components/sections/ContactPage";

export const metadata: Metadata = {
  title: "Contact ArlioTech – Start Your AI Project",
  description:
    "Get in touch with ArlioTech. Start an AI project, book a discovery call, or ask us anything. We respond within 24 hours.",
};

export default function Page() {
  return <ContactPageContent />;
}
