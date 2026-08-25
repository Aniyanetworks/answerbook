import type { Metadata } from "next";
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- kept for when the "Built for your trade" section below is re-enabled
import Link from "next/link";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import HowItWorksSteps from "@/components/HowItWorksSteps";
import ProblemSolution from "@/components/ProblemSolution";
import PricingCallout from "@/components/PricingCallout";
import SocialProof from "@/components/Testimonial";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import GetStartedSection from "@/components/GetStartedSection";
import PageGlowBackground from "@/components/PageGlowBackground";
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- kept for when the "Built for your trade" section below is re-enabled
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/config";
import {
  PhoneIcon,
  LightningIcon,
  CalendarIcon,
  StarIcon,
  PipelineIcon,
  ShieldIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: `${siteConfig.brandName} — Book More Jobs with Automated Follow-Up`,
  description:
    "A done-for-you GoHighLevel automation snapshot for Ontario home-service contractors: missed-call recovery, speed-to-lead follow-up, appointment reminders, and review requests for $397/month.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.brandName} — Book More Jobs with Automated Follow-Up`,
    description:
      "Missed-call recovery, speed-to-lead follow-up, appointment reminders, and review automation for Ontario trade contractors.",
    url: siteConfig.url,
  },
};

const features = [
  {
    icon: <PhoneIcon />,
    title: "Missed-Call Text-Back",
    description:
      "Every missed call triggers an instant text so a busy job site never costs you a lead again.",
  },
  {
    icon: <LightningIcon />,
    title: "Speed-to-Lead Follow-Up",
    description:
      "New leads get contacted in minutes, not hours, with automated multi-touch follow-up sequences.",
  },
  {
    icon: <CalendarIcon />,
    title: "Appointment Reminders",
    description:
      "Automatic SMS and email reminders cut no-shows and last-minute cancellations.",
  },
  {
    icon: <StarIcon />,
    title: "Review Requests",
    description:
      "Every completed job triggers a review request, building your Google reputation on autopilot.",
  },
  {
    icon: <PipelineIcon />,
    title: "Simple Sales Pipeline",
    description:
      "Track every lead from first contact to booked job in one clear pipeline — no spreadsheets.",
  },
  {
    icon: <ShieldIcon />,
    title: "Your Own Sub-Account",
    description:
      "The entire automation snapshot is deployed into your own account — you own the data and the relationships.",
  },
];

const steps = features.slice(0, 3).map((f) => ({
  title: f.title,
  description: f.description,
}));

const problems = [
  {
    problem:
      "You're on a roof or under a sink when a new lead calls — and they hang up and call the next contractor on the list.",
    solution:
      "Missed calls trigger an instant text-back so the lead hears from you within seconds, even mid-job.",
  },
  {
    problem:
      "Leads fill out a web form at 9pm and go cold before anyone follows up the next morning.",
    solution:
      "Automated speed-to-lead sequences reach out immediately and keep following up until the lead responds.",
  },
  {
    problem:
      "Customers forget appointments, and a no-show wastes a slot you could've booked twice over.",
    solution:
      "Automatic reminders go out by text and email ahead of every appointment, cutting no-shows.",
  },
  {
    problem:
      "You do great work but have 4 Google reviews because asking for one always slips your mind.",
    solution:
      "A review request fires automatically after every completed job, building your rating without extra effort.",
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- kept for when the "Built for your trade" section below is re-enabled
const niches = [
  {
    href: "/hvac-ontario",
    title: "HVAC Contractors",
    description: "Furnace, AC, and heat pump installers and service companies.",
  },
  {
    href: "/appliance-repair-ontario",
    title: "Appliance Repair",
    description: "In-home and in-shop appliance diagnostics and repair.",
  },
  {
    href: "/plumbing-ontario",
    title: "Plumbing Contractors",
    description: "Residential plumbing, drain, and emergency service companies.",
  },
];

const testimonials = [
  {
    quote:
      "We stopped losing leads to voicemail. The missed-call text-back alone paid for the month.",
    name: "Placeholder Name",
    business: "Placeholder HVAC Co.",
    location: "Toronto, ON",
  },
  {
    quote:
      "Review requests go out automatically now — our Google rating went from 4.1 to 4.7 in two months.",
    name: "Placeholder Name",
    business: "Placeholder Plumbing Ltd.",
    location: "Ottawa, ON",
  },
  {
    quote:
      "Setup was fast and it just runs in the background. I don't think about it — it just books jobs.",
    name: "Placeholder Name",
    business: "Placeholder Appliance Repair",
    location: "Hamilton, ON",
  },
];

const faqs = [
  {
    question: "What exactly do I get for $397/month?",
    answer:
      "A fully deployed GoHighLevel automation snapshot in your own sub-account: missed-call text-back, speed-to-lead follow-up, appointment reminders, review request automation, and a simple sales pipeline — configured and ready to run.",
  },
  {
    question: "Do I need to already use GoHighLevel?",
    answer:
      "No. Your sub-account is set up for you as part of onboarding, so there's nothing to install or configure yourself.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most contractors are fully live within a few business days of signing up, once we have your business details and phone number.",
  },
  {
    question: "Is this only for one trade?",
    answer:
      "No — the core system works for any Ontario home-service contractor. We've built dedicated setups for HVAC, appliance repair, and plumbing businesses specifically.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. It's a flat monthly rate with no long-term contract.",
  },
];

export default function HomePage() {
  return (
    <>
      <PageGlowBackground />
      <LocalBusinessJsonLd />
      <Hero
        variant="home"
        headlineLines={["Stop losing jobs to", "missed calls and slow follow-up."]}
        subhead="A done-for-you automation system that answers missed calls, follows up on new leads in minutes, reminds customers about appointments, and asks for reviews automatically — all for one flat monthly price."
        checklist={features.slice(0, 4).map((f) => f.title)}
        primaryCtaLabel="Get Started — $397/mo"
        primaryCtaHref="#get-started"
        secondaryCtaLabel="See How It Works"
        secondaryCtaHref="#how-it-works"
      />

      <FeatureGrid
        eyebrow="What You Get"
        heading="Everything you need to book more jobs"
        subheading="One flat-rate automation system, deployed into your own account."
        features={features}
      />

      <div id="how-it-works">
        <HowItWorksSteps
          heading="How it works"
          subheading="From missed call to booked job — automatically."
          steps={steps}
        />
      </div>

      <ProblemSolution
        heading="Built for how trade contractors actually work"
        subheading="You're on job sites, not at a desk. The system runs whether you're free to answer or not."
        items={problems}
      />

      {/* <section className="bg-grid-dark px-4 py-20 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built for your trade
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Dedicated setups with niche-specific messaging for these
            contractor types.
          </p>
        </Reveal>
        <RevealGroup className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {niches.map((n) => (
            <RevealItem key={n.href}>
              <Link
                href={n.href}
                className="block h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <h3 className="text-lg font-semibold text-white">{n.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{n.description}</p>
                <p className="mt-4 text-sm font-medium text-accent">Learn more &rarr;</p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </section> */}

      <PricingCallout ctaHref="#get-started" />

      <SocialProof testimonials={testimonials} />

      <FAQAccordion items={faqs} />

      <GetStartedSection
        heading="Get started today"
        subheading="Tell us about your business and we'll reach out to get your automation system live."
        bullets={[
          "Missed-call text-back (automatic, 24/7)",
          "Speed-to-lead follow-up sequences",
          "Appointment reminders (SMS + email)",
          "Automated review requests after every job",
        ]}
        formId={siteConfig.ghl.formIds.home}
        formTitle="Get Started Form"
      />

      <CTASection
        heading="Ready to stop losing jobs to missed calls?"
        subheading="Join Ontario contractors automating their follow-up for $397/month."
        ctaLabel="Get Started — $397/mo"
        ctaHref="#get-started"
      />
    </>
  );
}
