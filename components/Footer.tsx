import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

const niches = [
  { href: "/hvac-ontario", label: "HVAC Contractors" },
  { href: "/appliance-repair-ontario", label: "Appliance Repair" },
  { href: "/plumbing-ontario", label: "Plumbing Contractors" },
];

const company = [
  { href: "/blog", label: "Blog" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="bg-grid-dark mt-auto border-t border-white/10 bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/wordmark-dark.png"
                alt="answer&book"
                width={2299}
                height={479}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Missed-call recovery, speed-to-lead follow-up, and review
              automation for Ontario home-service contractors.
            </p>
            <p className="mt-3 text-[15px] text-slate-500">
              {siteConfig.brandName} is a product of{" "}
              <a
                href="https://aniyanetworks.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 underline underline-offset-2 transition-colors hover:text-accent"
              >
                Aniya Network Solutions Inc.
              </a>
            </p>
          </div>

          {/* These links should not have to expose in home page now */}
          {/* <div>
            <p className="text-sm font-semibold text-white">For Contractors</p>
            <ul className="mt-3 space-y-2">
              {niches.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-sm text-slate-400 transition-colors hover:text-accent">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <p className="text-sm font-semibold text-white">Company</p>
            <ul className="mt-3 space-y-2">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-slate-400 transition-colors hover:text-accent">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            {/* TODO: confirm final business phone, email, and address before launch. */}
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>{siteConfig.contact.phone}</li>
              <li>{siteConfig.contact.email}</li>
              <li>{siteConfig.contact.addressLine}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-[15px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.brandName}. All
            rights reserved.
          </p>
          <p>Serving home-service contractors across Ontario, Canada.</p>
        </div>

        <p className="mt-4 text-center text-[15px] text-slate-500">
          Designed &amp; Developed by{" "}
          <a
            href="https://aniyanetworks.net"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent transition-colors hover:text-white"
          >
            &copy; {new Date().getFullYear()} Aniya Network Solutions Inc.
          </a>
        </p>
      </div>
    </footer>
  );
}
