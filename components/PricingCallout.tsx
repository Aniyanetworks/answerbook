"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const included = [
  "Missed-call text-back (automatic, 24/7)",
  "Speed-to-lead follow-up sequences",
  "Appointment reminders (SMS + email)",
  "Automated review requests after every job",
  "Simple sales pipeline in your own sub-account",
  "Deployed and configured for your business",
];

interface PricingCalloutProps {
  ctaHref: string;
  ctaLabel?: string;
}

export default function PricingCallout({
  ctaHref,
  ctaLabel = "Book a Call",
}: PricingCalloutProps) {
  return (
    <section className="bg-grid-dark px-4 py-20 sm:px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="mx-auto max-w-4xl rounded-2xl p-[2px] animate-gradient-border"
      >
        <div className="overflow-hidden rounded-[calc(1rem-2px)] bg-navy-900">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                Let&apos;s Talk
              </p>
              <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                One flat rate. No surprises.
              </p>
              <p className="mt-3 text-sm text-slate-400">
                Pricing depends on your business and what&apos;s already in
                place — we&apos;ll walk through it together on a quick call.
              </p>
              <a
                href={ctaHref}
                className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
              >
                {ctaLabel}
              </a>
            </div>
            <div className="border-t border-white/10 bg-navy-800 p-8 sm:border-l sm:border-t-0 sm:p-10">
              <p className="text-sm font-semibold text-white">
                Everything included:
              </p>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerContainer(0.08, 0.1)}
                className="mt-4 space-y-3"
              >
                {included.map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    className="flex items-start gap-2.5 text-sm text-slate-300"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
