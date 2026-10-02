import HeroShowcaseImage from "@/components/HeroShowcaseImage";
import { Fragment, type CSSProperties, type ReactNode } from "react";

// Entrance animations here are plain CSS keyframes (.hero-word /
// .hero-fade-up in globals.css), not framer-motion. The hero is the first
// thing a mobile visitor sees, and framer's `initial="hidden"` server-renders
// every element at opacity 0 until the JS bundle hydrates — on a throttled
// phone that kept the headline, subhead, and CTA invisible for several
// seconds (Lighthouse LCP render delay ~7s). CSS runs on first paint.
//
// Delays mirror the old staggerContainer(0.1, 0.05) timing: each block
// starts 0.1s after the previous one, and headline words stagger 0.035s.
const BLOCK_STAGGER = 0.1;
const BLOCK_START = 0.05;
const WORD_STAGGER = 0.035;

function delay(seconds: number): CSSProperties {
  return { "--delay": `${seconds}s` } as CSSProperties;
}

function blockDelay(index: number) {
  return delay(BLOCK_START + index * BLOCK_STAGGER);
}

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

  // Running block index, so the stagger order matches render order whether
  // or not the optional eyebrow/checklist blocks are present.
  let block = 0;
  const eyebrowIndex = !isSplit ? block++ : -1;
  const lineIndexes = headlineLines.map(() => block++);
  const subheadIndex = block++;
  const checklistIndex = checklist?.length ? block++ : -1;
  const ctaIndex = block++;
  const noteIndex = block++;
  const statsIndex = block++;
  const imageIndex = block++;

  return (
    <section className="bg-grid-dark relative -mt-36 overflow-hidden">
      <div
        className={
          isSplit
            ? "relative mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pb-28 sm:pt-44"
            : "relative mx-auto max-w-4xl px-4 pb-16 pt-28 text-center sm:px-6 sm:pb-28 sm:pt-44"
        }
      >
        <div className={isSplit ? "grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16" : undefined}>
          <div className={isSplit ? "text-left" : undefined}>
            {!isSplit && (
              <div
                style={blockDelay(eyebrowIndex)}
                className="hero-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {eyebrowByVariant[variant]}
              </div>
            )}

            {/* `perspective` here so each word's rotateX reads as a 3D flip
                rather than a flat squish. text-balance evens out the line
                breaks on narrow phones instead of leaving a lone orphan word. */}
            <h1
              className={`${isSplit ? "" : "mt-6"} text-balance text-[2.125rem] font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl`}
              style={{ perspective: 800 }}
            >
              {headlineLines.map((line, i) => (
                <span
                  key={line}
                  className={`block ${i === headlineLines.length - 1 ? "text-accent" : ""}`}
                >
                  {line.split(" ").map((word, wi, words) => (
                    <Fragment key={wi}>
                      <span
                        className="hero-word"
                        style={delay(BLOCK_START + lineIndexes[i] * BLOCK_STAGGER + wi * WORD_STAGGER)}
                      >
                        {word}
                      </span>
                      {/* Real space character, not CSS margin — margin-only
                          spacing between the word spans made innerText (and
                          therefore copy-paste, and some screen readers) run
                          every word together with no gap. */}
                      {wi < words.length - 1 ? " " : ""}
                    </Fragment>
                  ))}
                </span>
              ))}
            </h1>

            <p
              style={blockDelay(subheadIndex)}
              className={
                isSplit
                  ? "hero-fade-up mt-5 text-lg leading-relaxed text-slate-300"
                  : "hero-fade-up mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300"
              }
            >
              {subhead}
            </p>

            {checklist && checklist.length > 0 && (
              <div
                style={blockDelay(checklistIndex)}
                className={`hero-fade-up mt-8 flex flex-wrap items-center gap-3 ${isSplit ? "justify-start" : "justify-center"}`}
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
              </div>
            )}

            {/* Full-width, 3.25rem-tall buttons on phones — a thumb-sized
                target that's still within the first screen on a typical
                phone; side-by-side auto-width from sm: up. */}
            <div
              style={blockDelay(ctaIndex)}
              className={`hero-fade-up mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4 ${isSplit ? "items-stretch sm:items-center justify-start" : "items-stretch sm:items-center sm:justify-center"}`}
            >
              <a
                href={primaryCtaHref}
                className="flex min-h-13 items-center justify-center rounded-full bg-accent px-5 py-3 sm:px-7 text-center text-base font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-colors hover:bg-accent-hover"
              >
                {primaryCtaLabel}
              </a>
              {secondaryCtaLabel && secondaryCtaHref && (
                <a
                  href={secondaryCtaHref}
                  className="flex min-h-13 items-center justify-center rounded-full border border-white/20 px-5 py-3 sm:px-7 text-center text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {secondaryCtaLabel}
                </a>
              )}
            </div>

            <p style={blockDelay(noteIndex)} className="hero-fade-up mt-4 text-sm text-slate-400">
              No setup surprises. Cancel anytime.
            </p>

            {/* <div
              style={blockDelay(statsIndex)}
              className={`hero-fade-up mt-8 grid grid-cols-3 gap-2 border-t border-white/10 pt-6 sm:mt-10 sm:flex sm:items-center sm:gap-0 sm:divide-x sm:divide-white/10 ${isSplit ? "sm:justify-start" : "mx-auto sm:justify-center"}`}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="px-1 sm:px-6 sm:first:pl-0 sm:last:pr-0">
                  <p className="font-heading text-xl font-bold text-accent sm:whitespace-nowrap sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-slate-400 sm:whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div> */}
          </div>

          {showcaseImage && (
            <HeroShowcaseImage
              src={showcaseImage.src}
              alt={showcaseImage.alt}
              width={showcaseImage.width}
              height={showcaseImage.height}
              badges={showcaseImage.badges}
              delay={BLOCK_START + imageIndex * BLOCK_STAGGER}
            />
          )}
        </div>
      </div>
    </section>
  );
}
