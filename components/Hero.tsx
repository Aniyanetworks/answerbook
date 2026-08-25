"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export type HeroVariant = "home" | "hvac" | "appliance" | "plumbing";

const eyebrowByVariant: Record<HeroVariant, string> = {
  home: "GoHighLevel Automation for Ontario Trade Contractors",
  hvac: "Built for Ontario HVAC Companies",
  appliance: "Built for Ontario Appliance Repair Companies",
  plumbing: "Built for Ontario Plumbing Companies",
};

const stats = [
  { value: "24/7", label: "Missed-call coverage" },
  { value: "Days", label: "To get fully live" },
  { value: "Your Own", label: "GHL sub-account" },
];

interface HeroProps {
  variant: HeroVariant;
  /** Headline broken into short lines — the last line renders in accent color. */
  headlineLines: string[];
  subhead: string;
  /** Short feature callouts shown as a row of checkmark pills. */
  checklist: string[];
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function Hero({
  variant,
  headlineLines,
  subhead,
  checklist,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: HeroProps) {
  return (
    <section className="bg-grid-dark relative -mt-28 overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-36 text-center sm:px-6 sm:pb-28 sm:pt-44">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer(0.1, 0.05)}>
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrowByVariant[variant]}
          </motion.div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {headlineLines.map((line, i) => (
              <motion.span
                key={line}
                variants={fadeUp}
                className={`block ${i === headlineLines.length - 1 ? "text-accent" : ""}`}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
          >
            {subhead}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {checklist.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-200"
              >
                <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" className="text-accent">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href={primaryCtaHref}
              className="rounded-full bg-accent px-7 py-3.5 text-center text-base font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              {primaryCtaLabel}
            </a>
            {secondaryCtaLabel && secondaryCtaHref && (
              <a
                href={secondaryCtaHref}
                className="rounded-full border border-white/20 px-7 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                {secondaryCtaLabel}
              </a>
            )}
          </motion.div>

          <motion.p variants={fadeUp} className="mt-4 text-xs text-slate-500">
            No setup surprises. Cancel anytime.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-10 flex items-center justify-center divide-x divide-white/10 border-t border-white/10 pt-6"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 first:pl-0 last:pr-0">
                <p className="whitespace-nowrap font-heading text-2xl font-bold text-accent">{stat.value}</p>
                <p className="mt-0.5 whitespace-nowrap text-xs text-slate-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
