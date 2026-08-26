"use client";

import { useEffect } from "react";
import { trackFormSubmit } from "@/lib/track";

// Fires once, on the page every GHL form redirects to after a successful
// submission — this is the one reliable "a lead just converted" signal we
// have, since the forms themselves are opaque GHL iframe embeds.
export default function ConversionTracking() {
  useEffect(() => {
    trackFormSubmit();
  }, []);

  return null;
}
