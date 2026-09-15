"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import { fadeUp, easeOut } from "@/lib/motion";

// Mount-triggered (via the parent stagger's propagated hidden/visible state),
// not whileInView/viewport — this section is always near the top of the
// page anyway, and whileInView's IntersectionObserver didn't reliably fire
// here (confirmed via testing: the image stayed permanently clipped on a
// short mobile viewport), likely interacting badly with the 3D
// perspective/transformStyle context on the tilt wrapper it's nested in.
const wipeReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: { clipPath: "inset(0 0% 0 0)", transition: { duration: 0.9, ease: easeOut } },
};

function badgeVariant(index: number): Variants {
  return {
    hidden: { opacity: 0, y: 16, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: 0.55 + index * 0.15, duration: 0.4, ease: easeOut },
    },
  };
}

interface ShowcaseBadge {
  label: string;
  icon: ReactNode;
}

interface HeroShowcaseImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  badges: ShowcaseBadge[];
}

// Floating badges only ever get up to 3 — position classes are hand-picked
// per slot (overlapping the image's corners) rather than computed, since a
// generic "auto-arrange N badges" layout isn't worth the complexity here.
const BADGE_POSITION_CLASSES = [
  "-top-5 -left-5 sm:-top-6 sm:-left-8",
  "-bottom-5 -right-5 sm:-bottom-6 sm:-right-8",
  "top-1/2 -right-6 -translate-y-1/2 sm:-right-10",
];

export default function HeroShowcaseImage({
  src,
  alt,
  width,
  height,
  badges,
}: HeroShowcaseImageProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse-tracked 3D tilt: 0..1 across the card mapped to a small rotation,
  // spring-smoothed so it settles instead of snapping to the cursor.
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-7, 7]), springConfig);

  function handlePointerMove(e: MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set((e.clientX - rect.left) / rect.width);
    pointerY.set((e.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    pointerX.set(0.5);
    pointerY.set(0.5);
  }

  return (
    <motion.div
      variants={fadeUp}
      className="relative mx-auto mt-8 max-w-lg px-6 lg:mx-0 lg:mt-0 lg:max-w-none lg:px-0"
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handlePointerMove}
        onMouseLeave={handlePointerLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* Wipe reveal — clip-path sweeps open left-to-right as part of the
            hero's mount stagger, instead of a plain fade. */}
        <motion.div
          variants={wipeReveal}
          className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-navy-950/50"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 640px) 42rem, 100vw"
            className="h-auto w-full object-cover"
            priority
          />
          {/* Ties the photo into the brand palette instead of it sitting as
              a plain rectangle — a warm-toned photo would otherwise clash
              with the page's cool indigo background. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(21,12,49,0.15) 0%, transparent 35%, rgba(21,12,49,0.55) 100%), linear-gradient(120deg, rgba(65,30,184,0.35), transparent 60%)",
            }}
          />
        </motion.div>

        {badges.slice(0, 3).map((badge, i) => (
          <motion.div
            key={badge.label}
            variants={badgeVariant(i)}
            style={{ transform: "translateZ(50px)" }}
            className={`absolute hidden items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-xl sm:flex ${BADGE_POSITION_CLASSES[i]}`}
          >
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center gap-1.5 whitespace-nowrap"
            >
              <span className="text-accent">{badge.icon}</span>
              {badge.label}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
