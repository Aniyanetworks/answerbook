import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import ProblemSolution from "@/components/ProblemSolution";
import PricingCallout from "@/components/PricingCallout";
import SocialProof from "@/components/Testimonial";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import GHLFormEmbed from "@/components/GHLFormEmbed";
import { siteConfig } from "@/lib/config";
import {
  PhoneIcon,
  LightningIcon,
  CalendarIcon,
  StarIcon,
  DropletIcon,
  ShieldIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "GoHighLevel Automation for Ontario Plumbing Companies",
  description:
    "Missed-call recovery, speed-to-lead follow-up, and review automation built for Ontario residential plumbing and emergency service companies. $397/month, deployed to your own account.",
  alternates: { canonical: "/plumbing-ontario" },
  openGraph: {
    title: "GoHighLevel Automation for Ontario Plumbing Companies",
    description:
      "Book more plumbing jobs with automated follow-up built for residential and emergency plumbing companies.",
    url: `${siteConfig.url}/plumbing-ontario`,
  },
};

const features = [
  {
    icon: <PhoneIcon />,
    title: "Emergency Call Recovery",
    description:
      "A burst pipe doesn't wait for business hours — missed calls trigger an instant text-back so the homeowner hears from you first.",
  },
  {
    icon: <LightningIcon />,
    title: "Fast Quote Follow-Up",
    description:
      "Leads requesting a drain cleaning or fixture quote get automated follow-up within minutes instead of sitting overnight.",
  },
  {
    icon: <CalendarIcon />,
    title: "Service Call Reminders",
    description:
      "Automated reminders for scheduled plumbing visits reduce no-shows and keep your crew's day on schedule.",
  },
  {
    icon: <StarIcon />,
    title: "Review Requests After Every Job",
    description:
      "A review request goes out automatically once a plumbing job is marked complete.",
  },
  {
    icon: <DropletIcon />,
    title: "Emergency Dispatch Messaging",
    description:
      "Automated messaging keeps emergency callers informed while you're en route to a burst pipe or major leak.",
  },
  {
    icon: <ShieldIcon />,
    title: "Your Own GHL Sub-Account",
    description:
      "The whole system runs in a sub-account under your business — you keep the customer relationships and data.",
  },
];

const problems = [
  {
    problem:
      "A pipe bursts at 11pm, the homeowner is calling every plumber they can find, and you're the one who doesn't answer in time.",
    solution:
      "Missed calls trigger an immediate text-back, so that homeowner hears from you first even during an emergency call-out.",
  },
  {
    problem:
      "A homeowner requests a drain cleaning quote online, and by the time you call back the next morning, they've booked with someone else.",
    solution:
      "Speed-to-lead automation follows up within minutes of a quote request, before the lead has a chance to go cold.",
  },
  {
    problem:
      "You've got back-to-back service calls scheduled, and a no-show mid-morning throws off the rest of your route.",
    solution:
      "Automated appointment reminders go out ahead of every service visit to cut down on no-shows.",
  },
  {
    problem:
      "You handle dozens of jobs a month but have a thin handful of Google reviews compared to competitors.",
    solution:
      "Every completed job automatically triggers a review request, building your rating without you having to ask.",
  },
];

const testimonials = [
  {
    quote:
      "A burst pipe call came in overnight and the text-back kept the homeowner with us until we could call first thing.",
    name: "Placeholder Name",
    business: "Placeholder Plumbing Services",
    location: "Brampton, ON",
  },
  {
    quote:
      "Quote requests used to sit overnight. Now they get a response in minutes and we're booking more jobs because of it.",
    name: "Placeholder Name",
    business: "Placeholder Plumbing & Drain",
    location: "Guelph, ON",
  },
  {
    quote:
      "Our review count climbed steadily without anyone on the team manually asking for them.",
    name: "Placeholder Name",
    business: "Placeholder Plumbing Co.",
    location: "Oshawa, ON",
  },
];

const faqs = [
  {
    question: "Can it handle emergency after-hours calls?",
    answer:
      "Yes. Missed-call text-back fires immediately regardless of time of day, so urgent burst-pipe or major-leak calls get an instant response even after hours.",
  },
  {
    question: "Does this work for residential and commercial plumbing?",
    answer:
      "It's built primarily for residential and emergency service plumbing companies, though the same automations apply to light commercial work.",
  },
  {
    question: "Do I need a dispatcher to manage this?",
    answer:
      "No. The automations run on their own — you and your team just work the pipeline that's already organized for you.",
  },
  {
    question: "What's included for $397/month?",
    answer:
      "Missed-call text-back, speed-to-lead follow-up, appointment reminders, automated review requests, and a sales pipeline — all deployed into your own account.",
  },
];

export default function PlumbingPage() {
  return (
    <>
      <Hero
        variant="plumbing"
        headline="Never miss another emergency plumbing call again."
        subhead="Automated missed-call recovery, fast quote follow-up, and review requests built specifically for Ontario residential and emergency plumbing companies."
        primaryCtaLabel="Get Started — $397/mo"
        primaryCtaHref="#get-started"
        secondaryCtaLabel="See How It Works"
        secondaryCtaHref="#how-it-works"
      />

      <FeatureGrid
        eyebrow="Built for Plumbing"
        heading="Automation for how plumbing contractors book jobs"
        subheading="From emergency burst-pipe calls to scheduled drain cleaning and fixture work."
        features={features}
      />

      <div id="how-it-works">
        <ProblemSolution
          heading="The problems costing plumbing contractors jobs"
          subheading="Emergency calls and quote requests don't wait — and neither should your follow-up."
          items={problems}
        />
      </div>

      <PricingCallout ctaHref="#get-started" />

      <SocialProof
        heading="Trusted by Ontario plumbing contractors"
        testimonials={testimonials}
      />

      <FAQAccordion items={faqs} />

      <section id="get-started" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Get your plumbing business set up
          </h2>
          <p className="mt-4 text-lg text-muted">
            Tell us about your business and we&apos;ll get your automation
            system live.
          </p>
        </div>
        <div className="mt-10">
          <GHLFormEmbed
            formId={siteConfig.ghl.formIds.plumbing}
            title="Plumbing Get Started Form"
          />
        </div>
      </section>

      <CTASection
        heading="Ready to stop losing plumbing jobs to slow follow-up?"
        subheading="Join Ontario plumbing contractors automating their lead response for $397/month."
        ctaLabel="Get Started — $397/mo"
        ctaHref="#get-started"
      />
    </>
  );
}
