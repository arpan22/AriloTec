import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://arliotech.com"),
  title: {
    default: "ArlioTech – AI Solutions & Digital Transformation Company India",
    template: "%s | ArlioTech",
  },
  description:
    "ArlioTech is India's premier AI innovation company delivering intelligent automation, generative AI, cloud solutions, and enterprise digital transformation services.",
  keywords: [
    "AI company India",
    "artificial intelligence solutions",
    "generative AI",
    "machine learning",
    "automation",
    "digital transformation",
    "cloud solutions",
    "data engineering",
    "ArlioTech",
    "enterprise AI",
  ],
  authors: [{ name: "ArlioTech", url: "https://arliotech.com" }],
  creator: "ArlioTech",
  publisher: "ArlioTech",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://arliotech.com",
    siteName: "ArlioTech",
    title: "ArlioTech – AI Solutions & Digital Transformation Company India",
    description:
      "India's premier AI innovation company delivering intelligent automation, generative AI, and enterprise digital transformation.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ArlioTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ArlioTech – AI Innovation Company India",
    description: "Intelligent AI solutions for startups, SMEs and enterprises.",
    images: ["/og-image.png"],
    creator: "@arliotech",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://arliotech.com",
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
              name: "ArlioTech",
              url: "https://arliotech.com",
              logo: "https://arliotech.com/logo.png",
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
                email: "hello@arliotech.com",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://linkedin.com/company/arliotech",
                "https://twitter.com/arliotech",
                "https://github.com/arliotech",
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
