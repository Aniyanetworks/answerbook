import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import HowItWorksSteps from "@/components/HowItWorksSteps";
import ProblemSolution from "@/components/ProblemSolution";
import PricingCallout from "@/components/PricingCallout";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import GetStartedSection from "@/components/GetStartedSection";
import PageGlowBackground from "@/components/PageGlowBackground";
import { FAQPageJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/config";
import {
  PhoneIcon,
  LightningIcon,
  CalendarIcon,
  StarIcon,
  SnowflakeIcon,
  ShieldIcon,
  PipelineIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: `Missed-Call Software for Ontario HVAC Contractors | ${siteConfig.brandName}`,
  description:
    "Missed-call recovery, speed-to-lead follow-up, and review automation built for Ontario HVAC installers and service companies — deployed to your own account.",
  alternates: { canonical: "/hvac-ontario" },
  openGraph: {
    title: `Missed-Call Software for Ontario HVAC Contractors | ${siteConfig.brandName}`,
    description:
      "Book more furnace, AC, and heat pump jobs with automated follow-up built for HVAC contractors.",
    url: `${siteConfig.url}/hvac-ontario`,
  },
};

const features = [
  {
    icon: <PhoneIcon />,
    title: "No-Heat / No-AC Call Recovery",
    description:
      "Emergency calls that go to voicemail get an instant text-back, so a customer with no heat doesn't call your competitor next.",
  },
  {
    icon: <LightningIcon />,
    title: "Fast Quote Follow-Up",
    description:
      "Leads requesting a furnace or AC quote get automated follow-up within minutes instead of sitting in an inbox overnight.",
  },
  {
    icon: <CalendarIcon />,
    title: "Install & Service Reminders",
    description:
      "Automatic reminders for scheduled installs, tune-ups, and seasonal maintenance visits cut down on no-shows.",
  },
  {
    icon: <StarIcon />,
    title: "Review Requests After Every Job",
    description:
      "A review request goes out automatically once a furnace or AC job is marked complete.",
  },
  {
    icon: <SnowflakeIcon />,
    title: "Seasonal Follow-Up Sequences",
    description:
      "Re-engage past customers ahead of heating and cooling season with automated seasonal check-in messages.",
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
      "A furnace dies at 6pm on a cold night, the homeowner calls three companies, and you're the one who doesn't pick up.",
    solution:
      "Missed calls trigger an immediate text-back, so that homeowner hears from you first even if you're mid-install.",
  },
  {
    problem:
      "A homeowner requests an AC quote online, and by the time you call back the next day, they've already booked with someone else.",
    solution:
      "Speed-to-lead automation follows up within minutes of a quote request, before the lead has a chance to go cold.",
  },
  {
    problem:
      "You've got a full install schedule, and a no-show mid-morning throws off the rest of your crew's day.",
    solution:
      "Automated appointment reminders go out ahead of every install and service call to cut down on no-shows.",
  },
  {
    problem:
      "Your work is solid, but you've only got a handful of Google reviews compared to competitors with hundreds.",
    solution:
      "Every completed job automatically triggers a review request, building your rating without you having to ask.",
  },
];

// Interim trust block used in place of testimonials until real, named case
// studies exist — every line here is a verifiable claim, not an invented result.
const trustPoints = [
  {
    icon: <ShieldIcon />,
    title: "Built for HVAC, not general contracting",
    description:
      "Furnace, AC, and heat pump calls have their own rhythm — seasonal spikes, no-heat emergencies, install schedules. Built around that, not a one-size-fits-all template.",
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
      "Most HVAC companies are fully set up and taking automated follow-up within a few business days.",
  },
];

const faqs = [
  {
    question: "Does this work for both install and service calls?",
    answer:
      "Yes — the follow-up and reminder sequences work for new installation quotes as well as service, repair, and maintenance calls.",
  },
  {
    question: "Can it handle emergency no-heat / no-AC calls?",
    answer:
      "Yes. Missed-call text-back fires immediately regardless of time of day, so urgent calls get an instant response even after hours.",
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

export default function HvacPage() {
  return (
    <>
      <PageGlowBackground />
      <FAQPageJsonLd items={faqs} />
      <ServiceJsonLd
        name="HVAC Missed-Call & Lead Follow-Up Automation"
        description="Missed-call recovery, speed-to-lead follow-up, appointment reminders, and review automation for Ontario HVAC installers and service companies."
        path="/hvac-ontario"
      />
      <Hero
        variant="hvac"
        headlineLines={["Never miss another", "no-heat or no-AC call again."]}
        subhead="Automated missed-call recovery, fast quote follow-up, and review requests built specifically for Ontario HVAC installers and service companies."
        checklist={features.slice(0, 4).map((f) => f.title)}
        primaryCtaLabel="Get Started"
        primaryCtaHref="#get-started"
        secondaryCtaLabel="See How It Works"
        secondaryCtaHref="#how-it-works"
      />

      <FeatureGrid
        eyebrow="Built for HVAC"
        heading="Automation for how HVAC contractors book jobs"
        subheading="From emergency no-heat calls to seasonal maintenance follow-up."
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
        heading="The problems costing HVAC contractors jobs"
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
        heading="Get your HVAC business set up"
        subheading="Tell us about your business and we'll get your automation system live."
        bullets={[
          "Missed-call text-back (automatic, 24/7)",
          "Speed-to-lead follow-up sequences",
          "Appointment reminders (SMS + email)",
          "Automated review requests after every job",
        ]}
        formId={siteConfig.ghl.formIds.hvac}
        formTitle="HVAC Get Started Form"
      />

      <CTASection
        heading="Ready to stop losing HVAC jobs to slow follow-up?"
        subheading="Join Ontario HVAC contractors automating their lead response."
        ctaLabel="Get Started"
        ctaHref="#get-started"
      />
    </>
  );
}
