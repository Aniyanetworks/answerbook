"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

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
    <section className="bg-linear-to-b from-white to-surface px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="mx-auto max-w-2xl text-center"
        >
          {eyebrow && (
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-wide text-accent"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl"
          >
            {heading}
          </motion.h2>
          {subheading && (
            <motion.p variants={fadeUp} className="mt-4 text-lg text-muted">
              {subheading}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.07)}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-border bg-white p-6 shadow-sm hover:shadow-lg"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
