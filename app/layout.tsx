import type { Metadata } from "next";
import { Geist, Sora } from "next/font/google";
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

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brandName} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description:
    "Automation for Ontario home-service contractors. Missed-call recovery, speed-to-lead follow-up, appointment reminders, and review requests — deployed to your own account.",
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
    <html lang="en" className={`${geistSans.variable} ${sora.variable} h-full antialiased`}>
      <head>
        <OrganizationJsonLd />
      </head>
      <body className="min-h-full flex flex-col">
        <Analytics />
        <MotionConfig reducedMotion="user">
          <Header />
          {/* Header now floats (position: fixed) over page content instead of
              sitting in normal flow, so every page needs this top clearance.
              Hero cancels it with a matching negative margin so its own
              background can bleed up behind the floating nav — see Hero.tsx. */}
          <main className="flex-1 pt-28">{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
