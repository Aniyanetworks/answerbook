"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { PhoneIcon } from "@/components/icons";
import { siteConfig } from "@/lib/config";

// Query params GHL's hosted form will read into matching hidden fields
// (configure hidden fields with these exact keys in the GHL form builder).
const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

interface GHLFormEmbedProps {
  formId: string;
  title: string;
  height?: number;
  className?: string;
}

export default function GHLFormEmbed({
  formId,
  title,
  height = 720,
  className = "",
}: GHLFormEmbedProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tracked = new URLSearchParams();

    for (const key of TRACKED_PARAMS) {
      const value = params.get(key);
      if (value) tracked.set(key, value);
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from the external URL on mount, not derivable during render (SSR has no window)
    setQuery(tracked.toString());
  }, []);

  if (!formId) {
    // Shown until NEXT_PUBLIC_GHL_FORM_ID_* is set in the environment — a
    // direct call button reads as a real CTA instead of a dead-end notice.
    return (
      <div className={`flex flex-col items-center gap-4 rounded-lg border border-border bg-surface p-10 text-center ${className}`}>
        <p className="text-sm text-muted">Ready to get started? Give us a call.</p>
        <a
          href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}
          className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
        >
          <PhoneIcon width={18} height={18} />
          Call {siteConfig.contact.phone}
        </a>
      </div>
    );
  }

  const src = `https://api.leadconnectorhq.com/widget/form/${formId}${
    query ? `?${query}` : ""
  }`;

  return (
    <div className={className}>
      <iframe
        src={src}
        title={title}
        style={{ width: "100%", height, border: "none", borderRadius: "0.75rem" }}
        id={`inline-${formId}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-activation-type="alwaysActivated"
        data-deactivation-type="neverDeactivate"
        data-form-name={title}
        data-height={height}
        data-layout-iframe-id={`inline-${formId}`}
        data-form-id={formId}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
}
