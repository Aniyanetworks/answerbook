"use client";

import { motion } from "framer-motion";
import GHLFormEmbed from "@/components/GHLFormEmbed";
import { Reveal } from "@/components/Reveal";
import { PhoneIcon, MailIcon, PinIcon } from "@/components/icons";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { siteConfig } from "@/lib/config";

interface GetStartedSectionProps {
  heading: string;
  subheading: string;
  bullets: string[];
  formId: string;
  formTitle: string;
}

export default function GetStartedSection({
  heading,
  subheading,
  bullets,
  formId,
  formTitle,
}: GetStartedSectionProps) {
  return (
    <section id="get-started" className="bg-grid-dark px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 max-w-lg text-lg text-slate-300">{subheading}</p>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.08, 0.1)}
            className="mt-8 space-y-3"
          >
            {bullets.map((bullet) => (
              <motion.li
                key={bullet}
                variants={fadeUp}
                className="flex items-start gap-2.5 text-sm text-slate-200"
              >
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                {bullet}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.08, 0.1)}
            className="mt-8 space-y-3 border-t border-white/10 pt-6"
          >
            <motion.a
              variants={fadeUp}
              href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.07]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <PhoneIcon width={18} height={18} />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Call Us
                </span>
                <span className="block text-sm font-medium text-white">
                  {siteConfig.contact.phone}
                </span>
              </span>
            </motion.a>

            <motion.a
              variants={fadeUp}
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.07]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <MailIcon width={18} height={18} />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Email Us
                </span>
                <span className="block text-sm font-medium text-white">
                  {siteConfig.contact.email}
                </span>
              </span>
            </motion.a>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <PinIcon width={18} height={18} />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Based in
                </span>
                <span className="block text-sm font-medium text-white">
                  {siteConfig.contact.addressLine}
                </span>
              </span>
            </motion.div>
          </motion.div>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="rounded-2xl border border-border bg-white p-6 shadow-xl shadow-navy-950/30 sm:p-8"
        >
          <GHLFormEmbed formId={formId} title={formTitle} />
        </motion.div>
      </div>
    </section>
  );
}
