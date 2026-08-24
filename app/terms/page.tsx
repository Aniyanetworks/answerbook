import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.brandName}.`,
  alternates: { canonical: "/terms" },
};

// TODO: legal review required before launch. Confirm business legal name,
// registered address, governing-law province details, and actual
// subscription/billing/cancellation terms with counsel before this copy is
// treated as final.
export default function TermsPage() {
  const updated = "August 24, 2026";

  return (
    <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight text-navy-900">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated: {updated}</p>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-navy-900">
        <section>
          <h2 className="text-xl font-semibold">1. Agreement to Terms</h2>
          <p className="mt-3">
            By accessing this website or subscribing to services offered by{" "}
            {siteConfig.brandName}, you agree to be bound by these Terms of
            Service. If you do not agree, do not use this site or our
            services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Services</h2>
          <p className="mt-3">
            {siteConfig.brandName} provides a GoHighLevel-based marketing
            automation snapshot (&ldquo;{siteConfig.pricing.tierName}&rdquo;)
            deployed into a sub-account for home-service trade contractors,
            including missed-call recovery, lead follow-up automation,
            appointment reminders, review request automation, and a sales
            pipeline.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Subscription &amp; Billing</h2>
          <p className="mt-3">
            The {siteConfig.pricing.tierName} service is billed at{" "}
            {siteConfig.pricing.priceLabel} on a recurring monthly basis.
            Subscriptions may be cancelled at any time; cancellation takes
            effect at the end of the current billing period.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Client Responsibilities</h2>
          <p className="mt-3">
            You are responsible for the accuracy of information provided
            during setup, for compliance with applicable telemarketing,
            SMS/text messaging, and privacy laws (including Canada&apos;s
            Anti-Spam Legislation) in your use of the deployed automations,
            and for maintaining the confidentiality of your account
            credentials.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
          <p className="mt-3">
            {siteConfig.brandName} provides the service &ldquo;as is&rdquo;
            without warranties of any kind. To the maximum extent permitted
            by law, {siteConfig.brandName} is not liable for indirect,
            incidental, or consequential damages arising from use of the
            service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Governing Law</h2>
          <p className="mt-3">
            These Terms are governed by the laws of the Province of Ontario
            and the federal laws of Canada applicable therein.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">7. Contact Us</h2>
          <p className="mt-3">
            Questions about these Terms can be directed to{" "}
            {siteConfig.contact.email} or {siteConfig.contact.phone}.
          </p>
        </section>
      </div>
    </article>
  );
}
