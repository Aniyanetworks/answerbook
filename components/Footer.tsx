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
    <footer className="mt-auto border-t border-border bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="inline-block rounded-lg bg-white px-3 py-2">
              <Image
                src="/logo-full.png"
                alt={siteConfig.brandName}
                width={960}
                height={257}
                className="h-8 w-auto"
              />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Missed-call recovery, speed-to-lead follow-up, and review
              automation for Ontario home-service contractors.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">For Contractors</p>
            <ul className="mt-3 space-y-2">
              {niches.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-sm text-slate-400 hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Company</p>
            <ul className="mt-3 space-y-2">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-slate-400 hover:text-white">
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

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.brandName}. All
            rights reserved.
          </p>
          <p>Serving home-service contractors across Ontario, Canada.</p>
        </div>
      </div>
    </footer>
  );
}
