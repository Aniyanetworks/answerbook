import { siteConfig } from "@/lib/config";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// Fires when a GHL form (redirected to /thank-you) is submitted.
export function trackFormSubmit() {
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
}

// Fires on click of any tel: link — a phone call is a real conversion for a
// service business and is otherwise invisible to ad platforms.
export function trackClickToCall() {
  const { ga4Id, metaPixelId, googleAdsId, googleAdsCallConversionLabel } =
    siteConfig.analytics;

  if (typeof window.gtag === "function") {
    if (ga4Id) {
      window.gtag("event", "click_to_call");
    }
    if (googleAdsId && googleAdsCallConversionLabel) {
      window.gtag("event", "conversion", {
        send_to: `${googleAdsId}/${googleAdsCallConversionLabel}`,
      });
    }
  }

  if (metaPixelId && typeof window.fbq === "function") {
    window.fbq("track", "Contact");
  }
}
