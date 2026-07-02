import type { Metadata } from "next";
import ContactPageContent from "@/components/sections/ContactPage";

export const metadata: Metadata = {
  title: "Contact ArlioTec – Start Your AI Project",
  description:
    "Get in touch with ArlioTec. Start an AI project, book a discovery call, or ask us anything. We respond within 24 hours.",
};

export default function Page() {
  return <ContactPageContent />;
}
