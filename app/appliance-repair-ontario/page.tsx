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
  WrenchIcon,
  ShieldIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "GoHighLevel Automation for Ontario Appliance Repair Companies",
  description:
    "Missed-call recovery, speed-to-lead follow-up, and review automation built for Ontario appliance repair technicians — diagnostics and in-home or in-shop repair, not retail or new installs. $397/month.",
  alternates: { canonical: "/appliance-repair-ontario" },
  openGraph: {
    title: "GoHighLevel Automation for Ontario Appliance Repair Companies",
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
    title: "Your Own GHL Sub-Account",
    description:
      "Everything runs in a sub-account under your business name — you own the customer data and relationships.",
  },
];

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

const testimonials = [
  {
    quote:
      "A fridge repair call came in while I was under a dishwasher — the text-back kept the customer with us instead of calling around.",
    name: "Placeholder Name",
    business: "Placeholder Appliance Repair",
    location: "Kitchener, ON",
  },
  {
    quote:
      "Diagnostic requests used to sit until end of day. Now we follow up in minutes and we're booking more repair calls.",
    name: "Placeholder Name",
    business: "Placeholder Repair Services",
    location: "Windsor, ON",
  },
  {
    quote:
      "Review requests go out the moment a job's marked done. Our rating's climbed without anyone having to remember to ask.",
    name: "Placeholder Name",
    business: "Placeholder Home Appliance Repair",
    location: "Vaughan, ON",
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
    question: "What's included for $397/month?",
    answer:
      "Missed-call text-back, speed-to-lead follow-up, service call reminders, automated review requests, and a sales pipeline — all deployed into your own account.",
  },
];

export default function ApplianceRepairPage() {
  return (
    <>
      <Hero
        variant="appliance"
        headline="Never miss another appliance repair call again."
        subhead="Automated missed-call recovery, fast diagnostic follow-up, and review requests built specifically for Ontario appliance repair technicians — repair only, not retail or installs."
        primaryCtaLabel="Get Started — $397/mo"
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
        <ProblemSolution
          heading="The problems costing repair techs jobs"
          subheading="Breakdowns and diagnostic requests don't wait — and neither should your follow-up."
          items={problems}
        />
      </div>

      <PricingCallout ctaHref="#get-started" />

      <SocialProof
        heading="Trusted by Ontario appliance repair companies"
        testimonials={testimonials}
      />

      <FAQAccordion items={faqs} />

      <section id="get-started" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Get your repair business set up
          </h2>
          <p className="mt-4 text-lg text-muted">
            Tell us about your business and we&apos;ll get your automation
            system live.
          </p>
        </div>
        <div className="mt-10">
          <GHLFormEmbed
            formId={siteConfig.ghl.formIds.applianceRepair}
            title="Appliance Repair Get Started Form"
          />
        </div>
      </section>

      <CTASection
        heading="Ready to stop losing repair calls to slow follow-up?"
        subheading="Join Ontario appliance repair companies automating their lead response for $397/month."
        ctaLabel="Get Started — $397/mo"
        ctaHref="#get-started"
      />
    </>
  );
}
