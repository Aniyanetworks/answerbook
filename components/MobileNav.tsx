"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { easeOut } from "@/lib/motion";

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  navLinks: NavLink[];
  ctaHref: string;
  ctaLabel: string;
}

export default function MobileNav({ navLinks, ctaHref, ctaLabel }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0, radius: 0 });
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-mount flag to gate document.body portal access (unavailable during SSR)
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleToggle = () => {
    if (!open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );
      setOrigin({ x, y, radius });
    }
    setOpen((v) => !v);
  };

  const overlayVariants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.25 } },
        exit: { opacity: 0, transition: { duration: 0.2 } },
      }
    : {
        hidden: { clipPath: `circle(0px at ${origin.x}px ${origin.y}px)` },
        visible: {
          clipPath: `circle(${origin.radius}px at ${origin.x}px ${origin.y}px)`,
          transition: { duration: 0.4, ease: easeOut },
        },
        exit: {
          clipPath: `circle(0px at ${origin.x}px ${origin.y}px)`,
          transition: { duration: 0.35, ease: easeOut },
        },
      };

  const listVariants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.15 } },
      }
    : {
        hidden: {},
        visible: { transition: { staggerChildren: 0.07, delayChildren: 0.18 } },
        exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
      };

  const itemVariants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeOut } },
        exit: { opacity: 0, y: -12, transition: { duration: 0.15 } },
      };

  const menuButton = (
    <button
      ref={buttonRef}
      type="button"
      className="fixed right-4 top-4 z-70 flex h-11 w-11 items-center justify-center rounded-full border border-black/5 bg-white/90 shadow-xl shadow-navy-900/10 backdrop-blur-md sm:right-6 sm:top-6 md:hidden"
      aria-label="Toggle menu"
      aria-expanded={open}
      onClick={handleToggle}
    >
      {/* The button keeps its own light pill background at all times (open
          or closed), so the lines stay a fixed dark color regardless of
          whether it's sitting over the hero, page content, or the open
          full-screen overlay — no color-swap logic needed. */}
      <span className="relative block h-4 w-6">
        <motion.span
          className="absolute left-0 top-0 block h-0.5 w-6 rounded-full bg-navy-900"
          animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.25, ease: easeOut }}
        />
        <motion.span
          className="absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 rounded-full bg-navy-900"
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.15 }}
        />
        <motion.span
          className="absolute bottom-0 left-0 block h-0.5 w-6 rounded-full bg-navy-900"
          animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.25, ease: easeOut }}
        />
      </span>
    </button>
  );

  // Not mounted yet (SSR / first paint): render the trigger inline so it's
  // clickable immediately, since the portal target isn't available server-side.
  if (!mounted) {
    return <div className="md:hidden">{menuButton}</div>;
  }

  return (
    <>
      {createPortal(
        <>
          {menuButton}
          <AnimatePresence>
            {open && (
              <motion.div
                key="mobile-nav-overlay"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={overlayVariants}
                className="fixed inset-0 z-50 bg-navy-900 md:hidden"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 15% 20%, rgba(168,229,5,0.22), transparent 45%), radial-gradient(circle at 85% 0%, rgba(157,141,255,0.25), transparent 40%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                  backgroundSize: "auto, auto, 48px 48px, 48px 48px",
                }}
              >
                <motion.nav
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={listVariants}
                  className="flex h-full flex-col items-center justify-center gap-7 px-6"
                >
                  {navLinks.map((link) => (
                    <motion.div key={link.href} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="text-3xl font-semibold text-white transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div variants={itemVariants} className="mt-4">
                    <Link
                      href={ctaHref}
                      onClick={() => setOpen(false)}
                      className="rounded-full bg-accent px-8 py-3.5 text-lg font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
                    >
                      {ctaLabel}
                    </Link>
                  </motion.div>
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </>,
        document.body,
      )}
    </>
  );
}
