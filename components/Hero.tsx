import type { ReactNode } from "react";

export type HeroVariant = "home" | "hvac" | "appliance" | "plumbing";

const eyebrowByVariant: Record<HeroVariant, string> = {
  home: "GoHighLevel Automation for Ontario Trade Contractors",
  hvac: "Built for Ontario HVAC Companies",
  appliance: "Built for Ontario Appliance Repair Companies",
  plumbing: "Built for Ontario Plumbing Companies",
};

interface HeroProps {
  variant: HeroVariant;
  headline: ReactNode;
  subhead: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function Hero({
  variant,
  headline,
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
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          {eyebrowByVariant[variant]}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          {subhead}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
        </div>
      </div>
    </section>
  );
}
