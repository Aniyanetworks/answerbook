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
    <section className="bg-grid-dark relative overflow-hidden px-4 py-20 sm:px-6">
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="mx-auto max-w-2xl text-center"
        >
          {eyebrow && (
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent"
            >
              {eyebrow}
            </motion.div>
          )}
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {heading}
          </motion.h2>
          {subheading && (
            <motion.p variants={fadeUp} className="mt-4 text-lg text-slate-400">
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
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
