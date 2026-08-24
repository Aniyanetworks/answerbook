"use client";

import { motion } from "framer-motion";
import PhoneMockup from "@/components/PhoneMockup";
import { fadeUp, staggerContainer } from "@/lib/motion";

export type HeroVariant = "home" | "hvac" | "appliance" | "plumbing";

const eyebrowByVariant: Record<HeroVariant, string> = {
  home: "GoHighLevel Automation for Ontario Trade Contractors",
  hvac: "Built for Ontario HVAC Companies",
  appliance: "Built for Ontario Appliance Repair Companies",
  plumbing: "Built for Ontario Plumbing Companies",
};

interface HeroProps {
  variant: HeroVariant;
  /** Headline broken into short lines — each animates in on its own beat. */
  headlineLines: string[];
  subhead: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function Hero({
  variant,
  headlineLines,
  subhead,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(47,111,237,0.35), transparent 45%), radial-gradient(circle at 85% 0%, rgba(245,166,35,0.18), transparent 40%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.1, 0.05)}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-wide text-accent"
          >
            {eyebrowByVariant[variant]}
          </motion.p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {headlineLines.map((line) => (
              <motion.span key={line} variants={fadeUp} className="block">
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
          >
            {subhead}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={primaryCtaHref}
              className="rounded-md bg-accent px-7 py-3.5 text-center text-base font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              {primaryCtaLabel}
            </a>
            {secondaryCtaLabel && secondaryCtaHref && (
              <a
                href={secondaryCtaHref}
                className="rounded-md border border-white/20 px-7 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                {secondaryCtaLabel}
              </a>
            )}
          </motion.div>
        </motion.div>

        <div className="mx-auto w-full max-w-sm lg:mx-0">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
