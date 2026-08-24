"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

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
    return (
      <div className="rounded-lg border border-dashed border-border bg-surface p-8 text-center text-sm text-muted">
        {/* Shown until NEXT_PUBLIC_GHL_FORM_ID_* is set in the environment. */}
        Form unavailable — GHL form ID not configured for &ldquo;{title}&rdquo;.
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
