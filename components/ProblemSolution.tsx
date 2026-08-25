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
    <section className="bg-grid-dark py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceSmall}
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

        <div className="mt-14 space-y-4">
          {items.map((item) => (
            <div
              key={item.problem}
              className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-xl sm:grid-cols-2 sm:gap-8 sm:p-8"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnceSmall}
                variants={slideInLeft}
              >
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-red-400">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M8.485 3.495c.673-1.165 2.357-1.165 3.03 0l6.28 10.875c.673 1.167-.17 2.63-1.516 2.63H3.72c-1.347 0-2.189-1.463-1.515-2.63L8.485 3.495ZM10 7a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3A.75.75 0 0110 7Zm0 7a1 1 0 100-2 1 1 0 000 2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  The Problem
                </p>
                <p className="mt-2 text-base leading-relaxed text-slate-200">
                  {item.problem}
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnceSmall}
                variants={slideInRight}
                className="border-t border-white/10 pt-4 sm:border-t-0 sm:border-l sm:pl-8 sm:pt-0"
              >
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" className="fill-accent" />
                    <path
                      d="M6 10.2l2.4 2.4L14 7"
                      stroke="#150f30"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  How {siteConfig.shortName} Solves It
                </p>
                <p className="mt-2 text-base leading-relaxed text-slate-200">
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
