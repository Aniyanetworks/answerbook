// Single source of truth for brand identity, contact info, and third-party IDs.
// Update values here (or via env vars) — never hardcode brand/contact/ID
// strings anywhere else in the codebase.
//
// NEXT_PUBLIC_* values below MUST be written as static `process.env.NEXT_PUBLIC_X`
// member accesses (not a dynamic `process.env[key]` helper) — Next.js can only
// inline env vars into the client bundle when it can statically see the exact
// reference at build time. A dynamic lookup silently resolves to `undefined`
// in the browser, which broke client-side analytics event firing here before.
const publicEnv = (value: string | undefined, fallback = "") => value ?? fallback;

export const siteConfig = {
  brandName: "ANS GHL SaaS",
  shortName: "ANS",
  tagline: "Book More Jobs — Automated",
  domain: publicEnv(process.env.NEXT_PUBLIC_SITE_DOMAIN, "ansghlsaas.com"),
  url: publicEnv(process.env.NEXT_PUBLIC_SITE_URL, "https://ansghlsaas.com"),

  // TODO: replace with real business contact details before launch.
  contact: {
    phone: publicEnv(process.env.NEXT_PUBLIC_CONTACT_PHONE, "(555) 555-0100"),
    email: publicEnv(process.env.NEXT_PUBLIC_CONTACT_EMAIL, "hello@ansghlsaas.com"),
    addressLine: publicEnv(process.env.NEXT_PUBLIC_BUSINESS_ADDRESS, "Ontario, Canada"),
  },

  social: {
    facebook: publicEnv(process.env.NEXT_PUBLIC_FACEBOOK_URL),
    instagram: publicEnv(process.env.NEXT_PUBLIC_INSTAGRAM_URL),
    linkedin: publicEnv(process.env.NEXT_PUBLIC_LINKEDIN_URL),
  },

  pricing: {
    tierName: "Growth Tier",
    price: 397,
    billingPeriod: "month",
    priceLabel: "$397/month",
  },

  ghl: {
    formIds: {
      home: publicEnv(process.env.NEXT_PUBLIC_GHL_FORM_ID_HOME),
      hvac: publicEnv(process.env.NEXT_PUBLIC_GHL_FORM_ID_HVAC),
      applianceRepair: publicEnv(process.env.NEXT_PUBLIC_GHL_FORM_ID_APPLIANCE),
      plumbing: publicEnv(process.env.NEXT_PUBLIC_GHL_FORM_ID_PLUMBING),
    },
  },

  analytics: {
    ga4Id: publicEnv(process.env.NEXT_PUBLIC_GA4_ID),
    metaPixelId: publicEnv(process.env.NEXT_PUBLIC_META_PIXEL_ID),
    googleAdsId: publicEnv(process.env.NEXT_PUBLIC_GOOGLE_ADS_ID),
    // Conversion action label from Google Ads (Tools > Conversions), distinct
    // from the account-level googleAdsId above — required to fire an actual
    // conversion event rather than just base pageview tracking.
    googleAdsConversionLabel: publicEnv(process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL),
  },

  search: {
    // Google Search Console domain-verification meta tag (Settings >
    // Ownership verification > HTML tag > copy just the content value).
    googleSiteVerification: publicEnv(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION),
  },

  blog: {
    // Server-only var (no NEXT_PUBLIC_ prefix) — never read client-side, so a
    // dynamic lookup here is fine; it's only ever evaluated in Node.
    apiUrl: process.env.BLOG_API_URL ?? "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
