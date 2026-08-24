"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/config";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// Fires once, on the page every GHL form redirects to after a successful
// submission — this is the one reliable "a lead just converted" signal we
// have, since the forms themselves are opaque GHL iframe embeds.
export default function ConversionTracking() {
  useEffect(() => {
    const { ga4Id, metaPixelId, googleAdsId, googleAdsConversionLabel } =
      siteConfig.analytics;

    if (typeof window.gtag === "function") {
      if (ga4Id) {
        window.gtag("event", "generate_lead");
      }
      if (googleAdsId && googleAdsConversionLabel) {
        window.gtag("event", "conversion", {
          send_to: `${googleAdsId}/${googleAdsConversionLabel}`,
        });
      }
    }

    if (metaPixelId && typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }
  }, []);

  return null;
}
