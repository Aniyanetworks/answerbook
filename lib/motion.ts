import type { Variants } from "framer-motion";

// Shared easing + durations so every section feels like the same system.
export const easeOut = [0.21, 0.47, 0.32, 0.98] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: easeOut } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOut } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOut } },
};

export function staggerContainer(
  staggerChildren = 0.07,
  delayChildren = 0,
): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
  };
}

// Trigger once, slightly before the element fully enters the viewport.
export const viewportOnce = { once: true, margin: "-80px" as const };
export const viewportOnceSmall = { once: true, margin: "-40px" as const };
