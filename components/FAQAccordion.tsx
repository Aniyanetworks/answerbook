"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, viewportOnceSmall } from "@/lib/motion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  heading?: string;
  items: FAQItem[];
}

export default function FAQAccordion({
  heading = "Frequently asked questions",
  items,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-grid-dark py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceSmall}
          variants={fadeUp}
          className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          {heading}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceSmall}
          variants={fadeUp}
          className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-xl"
        >
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-base font-semibold text-white">
                    {item.question}
                  </span>
                  <motion.svg
                    className="h-5 w-5 shrink-0 text-slate-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </motion.svg>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-base leading-relaxed text-slate-400 sm:px-6 sm:text-sm">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
