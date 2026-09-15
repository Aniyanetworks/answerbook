"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp, staggerContainer, easeOut } from "@/lib/motion";
import HeroShowcaseImage from "@/components/HeroShowcaseImage";
import { Fragment, type ReactNode } from "react";

// Per-word headline reveal — each word flips up out of a slight 3D tilt
// while blurred, rather than the line fading in as one flat block. Needs
// `perspective` on an ancestor for rotateX to read as a flip instead of a
// flat squish (set on the <h1> itself, below).
const wordReveal: Variants = {
  hidden: { opacity: 0, y: 24, rotateX: -60, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: easeOut },
  },
};

export type HeroVariant = "home" | "hvac" | "appliance" | "plumbing";

const eyebrowByVariant: Record<HeroVariant, string> = {
  home: "Automation for Ontario Trade Contractors",
  hvac: "Built for Ontario HVAC Companies",
  appliance: "Built for Ontario Appliance Repair Companies",
  plumbing: "Built for Ontario Plumbing Companies",
};

const stats = [
  { value: "24/7", label: "Missed-call coverage" },
  { value: "Days", label: "To get fully live" },
  { value: "Your Own", label: "business account" },
];

interface HeroProps {
  variant: HeroVariant;
  /** Headline broken into short lines — the last line renders in accent color. */
  headlineLines: string[];
  subhead: string;
  /** Short feature callouts shown as a row of checkmark pills. */
  checklist?: string[];
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  /** Optional showcase photo — used on pages that have a relevant image
   *  (currently just /hvac-ontario). When present, the hero switches from
   *  its default centered layout to a left-aligned text / right-side image
   *  split (stacked on mobile). Omit on pages without one to keep the
   *  original centered layout unchanged. */
  showcaseImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    badges: { label: string; icon: ReactNode }[];
  };
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
  showcaseImage,
}: HeroProps) {
  const isSplit = !!showcaseImage;

  return (
    <section className="bg-grid-dark relative -mt-28 overflow-hidden">
      <div
        className={
          isSplit
            ? "relative mx-auto max-w-6xl px-4 pb-20 pt-36 sm:px-6 sm:pb-28 sm:pt-44"
            : "relative mx-auto max-w-4xl px-4 pb-20 pt-36 text-center sm:px-6 sm:pb-28 sm:pt-44"
        }
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.1, 0.05)}
          className={isSplit ? "grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16" : undefined}
        >
          <div className={isSplit ? "text-left" : undefined}>
            {!isSplit && (
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {eyebrowByVariant[variant]}
              </motion.div>
            )}

            <h1
              className={`${isSplit ? "" : "mt-6"} text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl`}
              style={{ perspective: 800 }}
            >
              {headlineLines.map((line, i) => (
                <motion.span
                  key={line}
                  variants={staggerContainer(0.035, 0)}
                  className={`block ${i === headlineLines.length - 1 ? "text-accent" : ""}`}
                >
                  {line.split(" ").map((word, wi, words) => (
                    <Fragment key={wi}>
                      <motion.span variants={wordReveal} className="inline-block">
                        {word}
                      </motion.span>
                      {/* Real space character, not CSS margin — margin-only
                          spacing between the word spans made innerText (and
                          therefore copy-paste, and some screen readers) run
                          every word together with no gap. */}
                      {wi < words.length - 1 ? " " : ""}
                    </Fragment>
                  ))}
                </motion.span>
              ))}
            </h1>

            <motion.p
              variants={fadeUp}
              className={
                isSplit
                  ? "mt-6 text-lg leading-relaxed text-slate-300"
                  : "mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
              }
            >
              {subhead}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className={`mt-8 flex flex-wrap items-center gap-3 ${isSplit ? "justify-start" : "justify-center"}`}
            >
              {checklist && checklist?.map((item) => (
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
              className={`mt-1 flex flex-col gap-4 sm:flex-row ${isSplit ? "items-stretch sm:items-center justify-start" : "items-center justify-center"}`}
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
              className={`mt-10 grid grid-cols-3 gap-2 border-t border-white/10 pt-6 sm:flex sm:items-center sm:gap-0 sm:divide-x sm:divide-white/10 ${isSplit ? "sm:justify-start" : "mx-auto sm:justify-center"}`}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="px-1 sm:px-6 sm:first:pl-0 sm:last:pr-0">
                  <p className="font-heading text-xl font-bold text-accent sm:whitespace-nowrap sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-400 sm:whitespace-nowrap sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {showcaseImage && (
            <HeroShowcaseImage
              src={showcaseImage.src}
              alt={showcaseImage.alt}
              width={showcaseImage.width}
              height={showcaseImage.height}
              badges={showcaseImage.badges}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
