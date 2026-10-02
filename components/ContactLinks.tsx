"use client";

import { siteConfig } from "@/lib/config";
import { trackClickToCall } from "@/lib/track";

interface ContactLinkProps {
  className?: string;
}

// Tap-to-call / tap-to-email links for places that are otherwise server
// components (e.g. Footer) — the phone link needs a client onClick to fire
// the same click_to_call event every other tel: link on the site fires.
export function PhoneLink({ className }: ContactLinkProps) {
  return (
    <a
      href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}
      onClick={trackClickToCall}
      className={className}
    >
      {siteConfig.contact.phone}
    </a>
  );
}

export function EmailLink({ className }: ContactLinkProps) {
  return (
    <a href={`mailto:${siteConfig.contact.email}`} className={className}>
      {siteConfig.contact.email}
    </a>
  );
}
