import Link from "next/link";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import { siteConfig } from "@/lib/config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/hvac-ontario", label: "HVAC" },
  { href: "/appliance-repair-ontario", label: "Appliance Repair" },
  { href: "/plumbing-ontario", label: "Plumbing" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-full.png"
            alt={siteConfig.brandName}
            width={960}
            height={257}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-navy-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/#get-started"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            Get Started
          </Link>
        </div>

        <MobileNav navLinks={navLinks} ctaHref="/#get-started" ctaLabel="Get Started" />
      </div>
    </header>
  );
}
