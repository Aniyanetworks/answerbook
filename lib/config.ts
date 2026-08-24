// Single source of truth for brand identity, contact info, and third-party IDs.
// Update values here (or via env vars) — never hardcode brand/contact/ID
// strings anywhere else in the codebase.

const env = (key: string, fallback = "") => process.env[key] ?? fallback;

export const siteConfig = {
  brandName: "ANS GHL SaaS",
  shortName: "ANS",
  tagline: "Book More Jobs — Automated",
  domain: env("NEXT_PUBLIC_SITE_DOMAIN", "ansghlsaas.com"),
  url: env("NEXT_PUBLIC_SITE_URL", "https://ansghlsaas.com"),

  // TODO: replace with real business contact details before launch.
  contact: {
    phone: env("NEXT_PUBLIC_CONTACT_PHONE", "(555) 555-0100"),
    email: env("NEXT_PUBLIC_CONTACT_EMAIL", "hello@ansghlsaas.com"),
    addressLine: env("NEXT_PUBLIC_BUSINESS_ADDRESS", "Ontario, Canada"),
  },

  social: {
    facebook: env("NEXT_PUBLIC_FACEBOOK_URL", ""),
    instagram: env("NEXT_PUBLIC_INSTAGRAM_URL", ""),
    linkedin: env("NEXT_PUBLIC_LINKEDIN_URL", ""),
  },

  pricing: {
    tierName: "Growth Tier",
    price: 397,
    billingPeriod: "month",
    priceLabel: "$397/month",
  },

  ghl: {
    formIds: {
      home: env("NEXT_PUBLIC_GHL_FORM_ID_HOME"),
      hvac: env("NEXT_PUBLIC_GHL_FORM_ID_HVAC"),
      applianceRepair: env("NEXT_PUBLIC_GHL_FORM_ID_APPLIANCE"),
      plumbing: env("NEXT_PUBLIC_GHL_FORM_ID_PLUMBING"),
    },
  },

  analytics: {
    ga4Id: env("NEXT_PUBLIC_GA4_ID"),
    metaPixelId: env("NEXT_PUBLIC_META_PIXEL_ID"),
    googleAdsId: env("NEXT_PUBLIC_GOOGLE_ADS_ID"),
  },

  blog: {
    apiUrl: env("BLOG_API_URL"),
  },
} as const;

export type SiteConfig = typeof siteConfig;
