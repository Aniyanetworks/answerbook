"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface CTASectionProps {
  id?: string;
  heading: string;
  subheading?: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function CTASection({
  id,
  heading,
  subheading,
  ctaLabel,
  ctaHref,
}: CTASectionProps) {
  return (
    <section id={id} className="bg-grid-dark">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {heading}
        </h2>
        {subheading && (
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            {subheading}
          </p>
        )}
        <a
          href={ctaHref}
          className="mt-8 inline-block rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
        >
          {ctaLabel}
        </a>
      </motion.div>
    </section>
  );
}
