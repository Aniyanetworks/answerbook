"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export interface StepItem {
  title: string;
  description: string;
}

interface HowItWorksStepsProps {
  heading: string;
  subheading?: string;
  steps: StepItem[];
}

export default function HowItWorksSteps({
  heading,
  subheading,
  steps,
}: HowItWorksStepsProps) {
  return (
    <section className="bg-grid-dark px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-4 text-lg text-slate-400">{subheading}</p>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6"
        >
          {steps.map((step, index) => (
            <motion.div key={step.title} variants={fadeUp} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent font-heading text-xl font-bold text-accent-foreground shadow-lg shadow-accent/20">
                {String(index + 1).padStart(2, "0")}
              </div>
              {index < steps.length - 1 && (
                <div
                  className="absolute left-1/2 top-8 hidden h-px w-full -translate-y-1/2 bg-linear-to-r from-white/15 to-transparent sm:block"
                  aria-hidden="true"
                />
              )}
              <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
