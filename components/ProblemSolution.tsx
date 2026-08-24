"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { fadeUp, slideInLeft, slideInRight, viewportOnceSmall } from "@/lib/motion";

export interface ProblemSolutionItem {
  problem: string;
  solution: string;
}

interface ProblemSolutionProps {
  heading: string;
  subheading?: string;
  items: ProblemSolutionItem[];
}

export default function ProblemSolution({
  heading,
  subheading,
  items,
}: ProblemSolutionProps) {
  return (
    <section className="bg-linear-to-b from-surface to-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceSmall}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-4 text-lg text-muted">{subheading}</p>
          )}
        </motion.div>

        <div className="mt-14 space-y-4">
          {items.map((item) => (
            <div
              key={item.problem}
              className="grid grid-cols-1 gap-4 rounded-xl border border-border bg-white p-6 sm:grid-cols-2 sm:gap-8 sm:p-8"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnceSmall}
                variants={slideInLeft}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-red-600">
                  The Problem
                </p>
                <p className="mt-2 text-base leading-relaxed text-navy-900">
                  {item.problem}
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnceSmall}
                variants={slideInRight}
                className="border-t border-border pt-4 sm:border-t-0 sm:border-l sm:pl-8 sm:pt-0"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  How {siteConfig.shortName} Solves It
                </p>
                <p className="mt-2 text-base leading-relaxed text-navy-900">
                  {item.solution}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
