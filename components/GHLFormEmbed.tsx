"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { PhoneIcon } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import { trackClickToCall } from "@/lib/track";

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
  // Distinguishes this embed's DOM id when the same form renders more than
  // once on one page (e.g. the always-present inline form plus a popup copy
  // of it) — form_embed.js keys its resize/reveal logic off that id, so two
  // simultaneous instances with the same id would collide and only the
  // first one in the DOM would work correctly.
  instanceId?: string;
}

export default function GHLFormEmbed({
  formId,
  title,
  height = 720,
  className = "",
  instanceId,
}: GHLFormEmbedProps) {
  const [query, setQuery] = useState("");
  const [interacted, setInteracted] = useState(false);

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

  // The iframe starts out lazy (see below) so GHL's scripts stay off the
  // critical path for the first paint. But plain lazy-loading only starts
  // fetching once the form is near the viewport — someone tapping a hero
  // CTA would then jump straight to a "Loading form…" box for a few
  // seconds. So switch it to eager on the visitor's first scroll/touch/tap:
  // the hero has already painted by then, and the form is ready by the
  // time they reach it.
  useEffect(() => {
    const events = ["scroll", "touchstart", "pointerdown", "keydown"] as const;
    const activate = () => {
      setInteracted(true);
      events.forEach((e) => window.removeEventListener(e, activate));
    };
    events.forEach((e) => window.addEventListener(e, activate, { passive: true }));
    return () => events.forEach((e) => window.removeEventListener(e, activate));
  }, []);

  if (!formId) {
    // Shown until NEXT_PUBLIC_GHL_FORM_ID_* is set in the environment — a
    // direct call button reads as a real CTA instead of a dead-end notice.
    return (
      <div className={`flex flex-col items-center gap-4 py-6 text-center ${className}`}>
        <p className="text-sm text-muted">Ready to get started? Give us a call.</p>
        <a
          href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}
          onClick={trackClickToCall}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
        >
          <PhoneIcon width={18} height={18} />
          Call {siteConfig.contact.phone}
        </a>
      </div>
    );
  }

  // Accepts either a bare form ID (default leadconnectorhq.com domain) or a
  // full embed URL — some GHL sub-accounts serve forms from a custom/branded
  // domain (e.g. link.dvrealty.ca) instead of the shared one.
  const baseSrc = formId.startsWith("http")
    ? formId
    : `https://api.leadconnectorhq.com/widget/form/${formId}`;
  const src = query ? `${baseSrc}${baseSrc.includes("?") ? "&" : "?"}${query}` : baseSrc;

  // form_embed.js keys its resize/reveal logic off these id/data-form-id
  // attributes and expects a short bare ID — when formId is a full URL, use
  // just its last path segment here (the src above still gets the full URL).
  const shortId = formId.startsWith("http")
    ? (formId.split("/").filter(Boolean).pop() ?? formId)
    : formId;
  // Only the element id / data-layout-iframe-id need to be unique per DOM
  // instance — data-form-id must stay the real, unmodified GHL form id, or
  // form_embed.js won't correctly match this iframe to that form.
  const domId = `inline-${shortId}${instanceId ? `-${instanceId}` : ""}`;

  return (
    // minHeight + the placeholder below cover the gap while the (lazy) iframe
    // loads: form_embed.js keeps the iframe hidden and out of flow until GHL
    // has rendered the form, which would otherwise collapse this box to 0px
    // right as someone lands here from a "#get-started" CTA.
    <div className={`relative ${className}`} style={{ minHeight: height }}>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 flex flex-col items-center gap-3 pt-24 text-sm text-muted"
      >
        <span className="h-7 w-7 animate-spin rounded-full border-2 border-border border-t-navy-700" />
        Loading form…
      </div>
      <iframe
        src={src}
        title={title}
        // The form pulls in ~1.5 MB of GHL + Cloudflare captcha scripts.
        // Lazy until first interaction (see effect above), so that doesn't
        // compete with the hero for bandwidth on a phone at page load.
        // (The popup copy is on-screen when it mounts, so it loads at once.)
        loading={interacted ? "eager" : "lazy"}
        // Opaque so the loading placeholder behind it doesn't show through.
        style={{ width: "100%", height, border: "none", borderRadius: "0.75rem", background: "#fff" }}
        id={domId}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-activation-type="alwaysActivated"
        data-deactivation-type="neverDeactivate"
        data-form-name={title}
        data-height={height}
        data-layout-iframe-id={domId}
        data-form-id={shortId}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
}
