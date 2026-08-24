import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.brandName}.`,
  alternates: { canonical: "/privacy" },
};

// TODO: legal review required before launch. Confirm business legal name,
// registered address, and actual data-handling practices (what's collected
// via the GHL forms, how leads are stored/processed in GHL, and what
// third-party services — GA4, Meta Pixel, Google Ads — receive data) before
// this copy is treated as final.
export default function PrivacyPage() {
  const updated = "August 24, 2026";

  return (
    <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight text-navy-900">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated: {updated}</p>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-navy-900">
        <section>
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p className="mt-3">
            {siteConfig.brandName} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) provides marketing automation software for
            home-service trade contractors in Ontario, Canada. This policy
            describes how we collect, use, and protect information submitted
            through this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Information We Collect</h2>
          <p className="mt-3">
            When you submit a form on this site, we collect the information
            you provide, which may include your name, business name, email
            address, phone number, and details about your business. We also
            collect standard technical information such as IP address,
            browser type, and pages visited, and — where enabled — marketing
            identifiers passed through URL parameters (such as UTM
            parameters, Google Click ID, or Facebook Click ID).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. How We Use Information</h2>
          <p className="mt-3">
            We use the information you submit to respond to inquiries, set up
            and administer your account, communicate with you about our
            services, and improve this website. Form submissions are
            processed through GoHighLevel, our customer relationship
            management platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Analytics &amp; Advertising</h2>
          <p className="mt-3">
            This site may use Google Analytics (GA4), the Meta Pixel, and
            Google Ads conversion tracking to understand site usage and
            measure advertising performance. These services may set cookies
            or use similar technologies. You can control cookie behavior
            through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Data Sharing</h2>
          <p className="mt-3">
            We do not sell your personal information. We share information
            with service providers who help us operate this site and deliver
            our services (such as GoHighLevel, analytics providers, and
            hosting providers), only as necessary to provide those services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Your Rights</h2>
          <p className="mt-3">
            You may request access to, correction of, or deletion of your
            personal information by contacting us at{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-accent underline">
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">7. Contact Us</h2>
          <p className="mt-3">
            Questions about this policy can be directed to{" "}
            {siteConfig.contact.email} or {siteConfig.contact.phone}.
          </p>
        </section>
      </div>
    </article>
  );
}
