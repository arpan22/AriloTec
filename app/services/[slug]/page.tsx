import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceDataMap } from "@/lib/serviceData";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(serviceDataMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = serviceDataMap[slug];
  if (!data) return {};

  return {
    title: `${data.label} – AriloTec`,
    description: data.heroDescription,
    openGraph: {
      title: `${data.label} | AriloTec`,
      description: data.heroDescription,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const data = serviceDataMap[slug];

  if (!data) notFound();

  return <ServicePageTemplate data={data} />;
}
