import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://arliotec.com"),
  title: {
    default: "ArlioTec – AI Solutions & Digital Transformation Company India",
    template: "%s | ArlioTec",
  },
  description:
    "ArlioTec is India's premier AI innovation company delivering intelligent automation, generative AI, cloud solutions, and enterprise digital transformation services.",
  keywords: [
    "AI company India",
    "artificial intelligence solutions",
    "generative AI",
    "machine learning",
    "automation",
    "digital transformation",
    "cloud solutions",
    "data engineering",
    "ArlioTec",
    "enterprise AI",
  ],
  authors: [{ name: "ArlioTec", url: "https://arliotec.com" }],
  creator: "ArlioTec",
  publisher: "ArlioTec",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://arliotec.com",
    siteName: "ArlioTec",
    title: "ArlioTec – AI Solutions & Digital Transformation Company India",
    description:
      "India's premier AI innovation company delivering intelligent automation, generative AI, and enterprise digital transformation.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ArlioTec" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ArlioTec – AI Innovation Company India",
    description: "Intelligent AI solutions for startups, SMEs and enterprises.",
    images: ["/og-image.png"],
    creator: "@arliotec",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://arliotec.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ArlioTec",
              url: "https://arliotec.com",
              logo: "https://arliotec.com/logo.png",
              description:
                "India's premier AI innovation company delivering intelligent automation, generative AI, cloud solutions, and enterprise digital transformation services.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressRegion: "India",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "hello@arliotec.com",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://linkedin.com/company/arliotec",
                "https://twitter.com/arliotec",
                "https://github.com/arliotec",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-navy-900 text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
