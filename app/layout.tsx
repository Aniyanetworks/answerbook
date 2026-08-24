import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brandName} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description:
    "GoHighLevel-based automation for Ontario home-service contractors. Missed-call recovery, speed-to-lead follow-up, appointment reminders, and review requests — deployed to your own account for $397/month.",
  openGraph: {
    siteName: siteConfig.brandName,
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
  },
  ...(siteConfig.search.googleSiteVerification && {
    verification: { google: siteConfig.search.googleSiteVerification },
  }),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <OrganizationJsonLd />
      </head>
      <body className="min-h-full flex flex-col">
        <Analytics />
        <MotionConfig reducedMotion="user">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
