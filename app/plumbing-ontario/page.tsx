import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import HowItWorksSteps from "@/components/HowItWorksSteps";
import ProblemSolution from "@/components/ProblemSolution";
import PricingCallout from "@/components/PricingCallout";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import GetStartedSection from "@/components/GetStartedSection";
import FormPopup from "@/components/FormPopup";
import PageGlowBackground from "@/components/PageGlowBackground";
import { FAQPageJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/config";
import {
  PhoneIcon,
  LightningIcon,
  CalendarIcon,
  StarIcon,
  DropletIcon,
  ShieldIcon,
  PipelineIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: `Missed-Call Software for Ontario Plumbing Contractors | ${siteConfig.brandName}`,
  description:
    "Missed-call recovery, speed-to-lead follow-up, and review automation built for Ontario residential plumbing and emergency service companies — deployed to your own account.",
  alternates: { canonical: "/plumbing-ontario" },
  openGraph: {
    title: `Missed-Call Software for Ontario Plumbing Contractors | ${siteConfig.brandName}`,
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
    title: "Your Own Sub-Account",
    description:
      "The whole system runs in a sub-account under your business — you keep the customer relationships and data.",
  },
];

const steps = features.slice(0, 3).map((f) => ({
  title: f.title,
  description: f.description,
}));

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

// Interim trust block used in place of testimonials until real, named case
// studies exist — every line here is a verifiable claim, not an invented result.
const trustPoints = [
  {
    icon: <ShieldIcon />,
    title: "Built for plumbing, emergencies included",
    description:
      "Burst pipes and after-hours calls don't wait for business hours — built around that reality, not a generic office-hours template.",
  },
  {
    icon: <PipelineIcon />,
    title: "Your data, your account",
    description:
      "The whole system runs in your own account. Your leads, customers, and history stay with your business.",
  },
  {
    icon: <LightningIcon />,
    title: "Live in days",
    description:
      "Most plumbing companies are fully set up and running within a few business days of signing up.",
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
    question: "What's included?",
    answer:
      "Missed-call text-back, speed-to-lead follow-up, appointment reminders, automated review requests, and a sales pipeline — all deployed into your own account.",
  },
];

export default function PlumbingPage() {
  return (
    <>
      <PageGlowBackground />
      <FAQPageJsonLd items={faqs} />
      <FormPopup formId={siteConfig.ghl.formIds.plumbing} formTitle="Plumbing Get Started Form" />
      <ServiceJsonLd
        name="Plumbing Missed-Call & Lead Follow-Up Automation"
        description="Missed-call recovery, speed-to-lead follow-up, and review automation for Ontario residential plumbing and emergency service companies."
        path="/plumbing-ontario"
      />
      <Hero
        variant="plumbing"
        headlineLines={["Never miss another", "emergency plumbing call again."]}
        subhead="Automated missed-call recovery, fast quote follow-up, and review requests built specifically for Ontario residential and emergency plumbing companies."
        checklist={features.slice(0, 4).map((f) => f.title)}
        primaryCtaLabel="Get Started"
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
        <HowItWorksSteps
          heading="How it works"
          subheading="From missed call to booked job — automatically."
          steps={steps}
        />
      </div>

      <ProblemSolution
        heading="The problems costing plumbing contractors jobs"
        subheading="Emergency calls and quote requests don't wait — and neither should your follow-up."
        items={problems}
      />

      <PricingCallout ctaHref="#get-started" />

      <FeatureGrid
        eyebrow="Why Trust Us"
        heading="Built to earn it, not just claim it"
        subheading="We're not publishing fake reviews. Here's what's actually true about how this works."
        features={trustPoints}
      />

      <FAQAccordion items={faqs} />

      <GetStartedSection
        heading="Get your plumbing business set up"
        subheading="Tell us about your business and we'll get your automation system live."
        bullets={[
          "Missed-call text-back (automatic, 24/7)",
          "Speed-to-lead follow-up sequences",
          "Appointment reminders (SMS + email)",
          "Automated review requests after every job",
        ]}
        formId={siteConfig.ghl.formIds.plumbing}
        formTitle="Plumbing Get Started Form"
      />

      <CTASection
        heading="Ready to stop losing plumbing jobs to slow follow-up?"
        subheading="Join Ontario plumbing contractors automating their lead response."
        ctaLabel="Get Started"
        ctaHref="#get-started"
      />
    </>
  );
}
