import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iamaltera - Your Digital Alter Ego | Automation & Creative Services",
  description:
    "Transform your business with expert automation solutions and creative services. Google Apps Script, dashboard development, Telegram bots, and custom poetry.",
  keywords:
    "automation, business process automation, Google Apps Script, dashboard development, React, Next.js, Telegram bots, custom poetry, creative services",
  authors: [{ name: "iamaltera" }],
  openGraph: {
    title: "iamaltera - Your Digital Alter Ego",
    description:
      "Expert automation and creative services to transform your business",
    url: "https://iamaltera.com",
    siteName: "iamaltera",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50/20`}
      >
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
