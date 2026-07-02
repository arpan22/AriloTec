import type { Metadata } from "next";
import BlogPageContent from "@/components/sections/BlogPage";

export const metadata: Metadata = {
  title: "AI Insights Blog – AriloTec",
  description:
    "Expert articles on generative AI, machine learning, automation, and enterprise digital transformation from the AriloTec team.",
};

export default function Page() {
  return <BlogPageContent />;
}
