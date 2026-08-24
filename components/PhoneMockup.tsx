"use client";

import { motion } from "framer-motion";

// Simulates the missed-call text-back feature: a missed call banner, a brief
// typing indicator, then the automated reply lands — plays once on load.
export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px]">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.3 }}
        className="relative rounded-[2.5rem] border border-white/10 bg-navy-950 p-3 shadow-2xl shadow-black/40"
      >
        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-navy-950" />
        <div className="flex h-[500px] w-full flex-col overflow-hidden rounded-[1.75rem] bg-slate-50">
          <div className="flex items-center gap-3 border-b border-border bg-white px-4 pb-3 pt-8">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-xs font-semibold text-white">
              JD
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-900">John D.</p>
              <p className="text-xs text-muted">Missed call &middot; 2s ago</p>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-end gap-2 px-3 py-4">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.9 }}
              className="mr-auto max-w-[80%] rounded-2xl rounded-bl-sm bg-white px-3.5 py-2.5 text-xs text-navy-900 shadow-sm"
            >
              Incoming call — missed
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.1, delay: 1.3, times: [0, 0.2, 0.8, 1] }}
              className="ml-auto flex items-center gap-1 rounded-2xl rounded-br-sm bg-accent/15 px-3.5 py-2.5"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, delay: 2.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-accent px-3.5 py-2.5 text-xs leading-relaxed text-accent-foreground shadow-sm"
            >
              Sorry we missed your call! Text us here and we&apos;ll get right
              back to you.
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 2.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="absolute -right-3 -top-3 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy-900 shadow-lg"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Lead recovered
      </motion.div>
    </div>
  );
}
