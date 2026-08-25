"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export interface TestimonialItem {
  quote: string;
  name: string;
  business: string;
  location: string;
}

interface SocialProofProps {
  heading?: string;
  testimonials: TestimonialItem[];
}

function StarRow() {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="var(--brand-amber)">
          <path d="M10 1.5l2.6 5.4 5.9.9-4.3 4.2 1 5.9L10 15.1l-5.2 2.8 1-5.9-4.3-4.2 5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof({
  heading = "Trusted by Ontario contractors",
  testimonials,
}: SocialProofProps) {
  return (
    <section className="bg-grid-dark px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          {heading}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.business}
              variants={fadeUp}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl"
            >
              <div>
                <StarRow />
                {/* TODO: replace with real testimonial */}
                <blockquote className="mt-4 text-sm leading-relaxed text-slate-200">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-6 text-sm">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-slate-400">
                  {t.business} &middot; {t.location}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
