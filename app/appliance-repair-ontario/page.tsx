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
  WrenchIcon,
  ShieldIcon,
  PipelineIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: `Missed-Call Software for Ontario Appliance Repair Contractors | ${siteConfig.brandName}`,
  description:
    "Missed-call recovery, speed-to-lead follow-up, and review automation built for Ontario appliance repair technicians — diagnostics and in-home or in-shop repair, not retail or new installs.",
  alternates: { canonical: "/appliance-repair-ontario" },
  openGraph: {
    title: `Missed-Call Software for Ontario Appliance Repair Contractors | ${siteConfig.brandName}`,
    description:
      "Book more repair calls with automated follow-up built for appliance repair technicians.",
    url: `${siteConfig.url}/appliance-repair-ontario`,
  },
};

const features = [
  {
    icon: <PhoneIcon />,
    title: "Missed Repair-Call Recovery",
    description:
      "A fridge or washer breaks down and the homeowner needs help now — a missed call gets an instant text-back instead of silence.",
  },
  {
    icon: <LightningIcon />,
    title: "Fast Diagnostic Follow-Up",
    description:
      "Leads requesting a repair diagnosis get automated follow-up within minutes, before they call another repair tech.",
  },
  {
    icon: <CalendarIcon />,
    title: "Service Call Reminders",
    description:
      "Automated reminders for scheduled in-home or in-shop repair appointments reduce missed visits and wasted trips.",
  },
  {
    icon: <StarIcon />,
    title: "Post-Repair Review Requests",
    description:
      "Once a repair is marked complete, a review request goes out automatically — no manual follow-up needed.",
  },
  {
    icon: <WrenchIcon />,
    title: "Warranty Repair Follow-Up",
    description:
      "Keep warranty repair customers informed with automated status updates through the repair process.",
  },
  {
    icon: <ShieldIcon />,
    title: "Your Own Sub-Account",
    description:
      "Everything runs in a sub-account under your business name — you own the customer data and relationships.",
  },
];

const steps = features.slice(0, 3).map((f) => ({
  title: f.title,
  description: f.description,
}));

const problems = [
  {
    problem:
      "A customer's washer floods the laundry room and they call five repair companies — you're out on a job and don't answer in time.",
    solution:
      "Missed calls trigger an instant text-back, so the customer hears from you first even while you're mid-repair.",
  },
  {
    problem:
      "Someone requests a repair diagnosis online for their broken dryer, and by the time you call back it's already been booked elsewhere.",
    solution:
      "Speed-to-lead automation follows up within minutes of a diagnostic request, before the lead cools off.",
  },
  {
    problem:
      "You drive out for a scheduled in-home repair and nobody's there — a wasted trip that cuts into your day's capacity.",
    solution:
      "Automated appointment reminders go out ahead of every service call to cut down on no-shows and wasted trips.",
  },
  {
    problem:
      "You fix appliances all day but rarely get around to asking for a review, so your Google profile doesn't reflect the volume of work you do.",
    solution:
      "A review request fires automatically as soon as a repair job is marked complete.",
  },
];

// Interim trust block used in place of testimonials until real, named case
// studies exist — every line here is a verifiable claim, not an invented result.
const trustPoints = [
  {
    icon: <ShieldIcon />,
    title: "Built for repair, not retail",
    description:
      "Diagnostic calls, warranty work, and in-home visits work differently than a sales floor. Built around that distinction, not a generic install-focused template.",
  },
  {
    icon: <PipelineIcon />,
    title: "Your data, your account",
    description:
      "Everything runs in your own account — your customer relationships and repair history aren't locked into a shared platform.",
  },
  {
    icon: <LightningIcon />,
    title: "Live in days",
    description:
      "Most repair companies are fully set up and running within a few business days of signing up.",
  },
];

const faqs = [
  {
    question: "Is this for appliance retailers or installers?",
    answer:
      "No — this is built specifically for repair technicians: diagnostics, in-home or in-shop repair, and warranty repair work. It's not designed for retail sales or new-appliance installation businesses.",
  },
  {
    question: "Can it handle both in-home and in-shop repair bookings?",
    answer:
      "Yes. The appointment reminder and follow-up sequences work for both in-home service calls and in-shop drop-off repairs.",
  },
  {
    question: "Does it work for warranty repair work?",
    answer:
      "Yes — you can use the automated follow-up sequences to keep warranty repair customers updated through the repair process.",
  },
  {
    question: "What's included?",
    answer:
      "Missed-call text-back, speed-to-lead follow-up, service call reminders, automated review requests, and a sales pipeline — all deployed into your own account.",
  },
];

export default function ApplianceRepairPage() {
  return (
    <>
      <PageGlowBackground />
      <FAQPageJsonLd items={faqs} />
      <FormPopup
        formId={siteConfig.ghl.formIds.applianceRepair}
        formTitle="Appliance Repair Get Started Form"
      />
      <ServiceJsonLd
        name="Appliance Repair Missed-Call & Lead Follow-Up Automation"
        description="Missed-call recovery, speed-to-lead follow-up, and review automation for Ontario appliance repair technicians — diagnostics and in-home or in-shop repair."
        path="/appliance-repair-ontario"
      />
      <Hero
        variant="appliance"
        headlineLines={["Never miss another", "appliance repair call again."]}
        subhead="Automated missed-call recovery, fast diagnostic follow-up, and review requests built specifically for Ontario appliance repair technicians — repair only, not retail or installs."
        checklist={features.slice(0, 4).map((f) => f.title)}
        primaryCtaLabel="Get Started"
        primaryCtaHref="#get-started"
        secondaryCtaLabel="See How It Works"
        secondaryCtaHref="#how-it-works"
      />

      <FeatureGrid
        eyebrow="Built for Appliance Repair"
        heading="Automation for how repair techs book jobs"
        subheading="From urgent breakdown calls to scheduled diagnostic and warranty repair work."
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
        heading="The problems costing repair techs jobs"
        subheading="Breakdowns and diagnostic requests don't wait — and neither should your follow-up."
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
        heading="Get your repair business set up"
        subheading="Tell us about your business and we'll get your automation system live."
        bullets={[
          "Missed-call text-back (automatic, 24/7)",
          "Speed-to-lead follow-up sequences",
          "Appointment reminders (SMS + email)",
          "Automated review requests after every job",
        ]}
        formId={siteConfig.ghl.formIds.applianceRepair}
        formTitle="Appliance Repair Get Started Form"
      />

      <CTASection
        heading="Ready to stop losing repair calls to slow follow-up?"
        subheading="Join Ontario appliance repair companies automating their lead response."
        ctaLabel="Get Started"
        ctaHref="#get-started"
      />
    </>
  );
}
