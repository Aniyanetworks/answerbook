import Link from "next/link";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6 sm:px-6">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-4 rounded-full border border-black/5 bg-white/90 py-2.5 pl-4 pr-2.5 shadow-xl shadow-navy-900/10 backdrop-blur-md sm:py-3 sm:pl-6 sm:pr-3">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/wordmark-light.png"
            alt="answer&book"
            width={2301}
            height={481}
            priority
            className="h-6 w-auto sm:h-7"
          />
        </Link>

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

        <div className="hidden md:block">
          <Link
            href="/#get-started"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            Get Started
          </Link>
        </div>

        <MobileNav navLinks={navLinks} ctaHref="/#get-started" ctaLabel="Get Started" />
      </div>
    </header>
  );
}
