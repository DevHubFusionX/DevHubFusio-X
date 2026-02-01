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
  title: "DevHubFusionX | Strategic Development",
  description: "Bespoke engineering for founders who understand that quality is the only leverage that matters.",
  openGraph: {
    title: "DevHubFusionX | Strategic Development",
    description: "I build scalable assets for founders. High-authority engineering and zero-waste architecture.",
    type: "website",
    locale: "en_US",
    siteName: "DevHubFusionX",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevHubFusionX | Strategic Development",
    description: "Bespoke engineering for founders who value speed, precision, and architectural integrity.",
  }
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Preloader } from "@/components/ui/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
