"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import GHLFormEmbed from "@/components/GHLFormEmbed";

// How long after the page loads the popup first appears, and how often it
// reappears after that (whether or not the visitor closed the previous one)
// — closing it only dismisses that one instance, it doesn't stop the timer.
const FIRST_SHOW_DELAY_MS = 8_000;
const REPEAT_INTERVAL_MS = 5 * 60 * 1000;

interface FormPopupProps {
  formId: string;
  formTitle: string;
  heading?: string;
  subheading?: string;
}

export default function FormPopup({
  formId,
  formTitle,
  heading = "Ready to get started?",
  subheading = "Tell us about your business and we'll reach out to get your automation system live.",
}: FormPopupProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-mount flag to gate document.body portal access (unavailable during SSR)
    setMounted(true);
  }, []);

  useEffect(() => {
    const firstShow = setTimeout(() => setOpen(true), FIRST_SHOW_DELAY_MS);
    // Re-shows on a fixed cadence from page load, regardless of whether the
    // visitor closed an earlier popup — closing only dismisses that instance.
    const repeat = setInterval(() => setOpen(true), REPEAT_INTERVAL_MS);
    return () => {
      clearTimeout(firstShow);
      clearInterval(repeat);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Not mounted yet (SSR / first paint): nothing to render — the portal
  // target isn't available server-side, and it shouldn't show up instantly
  // anyway (FIRST_SHOW_DELAY_MS handles that once mounted).
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="form-popup-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={heading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-90 flex items-center justify-center bg-navy-950/70 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-navy-500 transition-colors hover:bg-surface hover:text-navy-900"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
              </svg>
            </button>

            <h3 className="pr-8 text-xl font-bold tracking-tight text-navy-900 sm:text-2xl">
              {heading}
            </h3>
            <p className="mt-2 text-sm text-muted">{subheading}</p>

            <div className="mt-6">
              <GHLFormEmbed formId={formId} title={formTitle} instanceId="popup" height={600} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
