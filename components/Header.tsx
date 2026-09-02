"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileNav from "@/components/MobileNav";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
];

// Pages that render their own <GetStartedSection> (their own #get-started
// form) — the header's CTA on these should jump to THAT form instead of
// navigating away to the homepage's. Every other page (blog posts, legal
// pages, etc.) has no local form, so it falls back to the homepage's.
const PAGES_WITH_OWN_GET_STARTED = new Set([
  "/",
  "/hvac-ontario",
  "/appliance-repair-ontario",
  "/plumbing-ontario",
]);

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const ctaHref = PAGES_WITH_OWN_GET_STARTED.has(pathname ?? "")
    ? "#get-started"
    : "/#get-started";

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6 sm:px-6">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-4 rounded-full border border-black/5 bg-white/90 py-2.5 pl-4 pr-2.5 shadow-xl shadow-navy-900/10 backdrop-blur-md sm:py-3 sm:pl-6 sm:pr-3">
        {/* On the homepage this is just "/" (a no-op, already there). On
            every other page it links to that same page rather than "/" —
            the logo stays put instead of navigating away from wherever the
            visitor currently is. */}
        <Link href={pathname || "/"} className="flex shrink-0 items-center">
          <Image
            src="/wordmark-light.png"
            alt="answer&book"
            width={2301}
            height={481}
            priority
            className="h-6 w-auto sm:h-7"
          />
        </Link>

        {isHome && (
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy-800 transition-colors hover:text-navy-950"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        <div className="hidden md:block">
          <Link
            href={ctaHref}
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            Get Started
          </Link>
        </div>

        <MobileNav
          navLinks={isHome ? navLinks : []}
          ctaHref={ctaHref}
          ctaLabel="Get Started"
        />
      </div>
    </header>
  );
}
