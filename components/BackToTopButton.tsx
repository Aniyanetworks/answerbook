"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";

const SHOW_AFTER_PX = 600;

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > SHOW_AFTER_PX);
  });

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          transition={{ duration: 0.25 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-6 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-navy-900/90 text-white shadow-xl shadow-navy-950/40 backdrop-blur-md transition-colors hover:bg-navy-800 sm:bottom-8 sm:right-6"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M10 15V5M4.5 10.5 10 5l5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
