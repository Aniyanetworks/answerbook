import type { ReactNode } from "react";

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  features: Feature[];
}

export default function FeatureGrid({
  eyebrow,
  heading,
  subheading,
  features,
}: FeatureGridProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          {heading}
        </h2>
        {subheading && (
          <p className="mt-4 text-lg text-muted">{subheading}</p>
        )}
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-accent">
              {feature.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-navy-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
