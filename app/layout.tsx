import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devhubfusionx.github.io/DevHubFusion-X"),
  title: {
    default: "DevHubFusionX | Strategic Development",
    template: "%s | DevHubFusionX"
  },
  description: "Bespoke engineering for founders who understand that quality is the only leverage that matters. High-authority engineering and zero-waste architecture.",
  keywords: ["Software Development", "Strategic Architecture", "Web Applications", "Bespoke Engineering", "Founders", "Scalable Assets"],
  authors: [{ name: "DevHubFusionX" }],
  creator: "DevHubFusionX",
  publisher: "DevHubFusionX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "DevHubFusionX | Strategic Development",
    description: "I build scalable assets for founders. High-authority engineering and zero-waste architecture.",
    url: "https://devhubfusionx.com/DevHubFusion-X",
    siteName: "DevHubFusionX",
    images: [
      {
        url: "/Logo.svg",
        width: 800,
        height: 600,
        alt: "DevHubFusionX Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevHubFusionX | Strategic Development",
    description: "Bespoke engineering for founders who value speed, precision, and architectural integrity.",
    images: ["/Logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Preloader } from "@/components/ui/Preloader";
import { JsonLd } from "@/components/seo/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevHubFusionX",
    "url": "https://devhubfusionx.github.io/DevHubFusion-X",
    "logo": "https://devhubfusionx.github.io/DevHubFusion-X/Logo.svg",
    "sameAs": [
      "https://x.com/DevHubFusionX",
      "https://github.com/DevHubFusionX",
      "https://tiktok.com/@DevHubFusionX"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "DevHubFusionX@gmail.com",
      "contactType": "customer service"
    }
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd data={organizationData} />
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
