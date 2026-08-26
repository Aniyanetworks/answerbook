import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Terms and conditions for ${siteConfig.brandName}.`,
  alternates: { canonical: "/terms" },
};

function Callout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      {title && <p className="text-sm font-semibold text-white">{title}</p>}
      <div className={title ? "mt-2" : ""}>{children}</div>
    </div>
  );
}

// TODO: legal review required before launch. Confirm business legal name,
// registered address, and the actual subscription/billing mechanics (billing
// cadence, cancellation process, contract term if any) before this copy is
// treated as final. The SMS Terms of Service section needs sign-off from
// counsel given the statutory exposure around SMS consent specifically.
export default function TermsPage() {
  const updated = "August 26, 2026";

  return (
    <section className="bg-grid-dark bg-navy-950 relative -mt-28 overflow-hidden">
      <article className="relative mx-auto max-w-3xl px-4 pb-20 pt-36 sm:px-6 sm:pt-44">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Terms and Conditions
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Effective date: {updated}
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Acceptance of Terms</h2>
            <p className="mt-3">
              By accessing or using the {siteConfig.brandName} website
              (operated by Aniya Network Solutions Inc., &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound
              by these Terms and Conditions. If you do not agree, please do
              not use this website or our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. Use of the Website</h2>
            <p className="mt-3">
              This website is provided to give information about our
              automation services for home-service trade contractors and to
              let visitors request more information or book a call. You
              agree to use this website only for lawful purposes and not to
              submit false, misleading, or fraudulent information through
              any of our forms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. Intellectual Property</h2>
            <p className="mt-3">
              All content on this website — including text, graphics, logos,
              and the {siteConfig.brandName} name and mark — is the property
              of Aniya Network Solutions Inc. and may not be copied,
              reproduced, or distributed without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              4. User Submissions and Communication Consent
            </h2>
            <p className="mt-3">
              When you submit a form on this website, you provide accurate
              contact information and consent to be contacted by{" "}
              {siteConfig.brandName} by phone, SMS/text message, and email
              regarding your inquiry. See our{" "}
              <a href="/privacy" className="text-accent underline underline-offset-2">
                Privacy Policy
              </a>{" "}
              for details on how we handle and use that information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. SMS Terms of Service</h2>

            <h3 className="mt-4 text-base font-semibold text-white">5.1 Program Description</h3>
            <p className="mt-2">
              By submitting your phone number through our website forms and
              opting in, you agree to receive SMS/text messages from{" "}
              {siteConfig.brandName} related to your inquiry, scheduled
              calls, and service updates.
            </p>

            <h3 className="mt-4 text-base font-semibold text-white">5.2 Opt-In and Consent</h3>
            <p className="mt-2">
              Consent is collected via checkbox opt-in on our website forms.
              Consent to receive SMS messages is not a condition of any
              purchase or service.
            </p>

            <h3 className="mt-4 text-base font-semibold text-white">5.3 Message Frequency</h3>
            <p className="mt-2">
              Message frequency varies based on your interactions with us
              (for example, a scheduling confirmation or a follow-up after
              you request information).
            </p>

            <h3 className="mt-4 text-base font-semibold text-white">5.4 Message and Data Rates</h3>
            <p className="mt-2">
              Message and data rates may apply. Contact your wireless carrier
              for details on your specific plan.
            </p>

            <h3 className="mt-4 text-base font-semibold text-white">5.5 Opt-Out</h3>
            <p className="mt-2">
              You can cancel SMS messages at any time by texting{" "}
              <span className="font-semibold text-white">STOP</span>. After
              you send STOP, we will send you a message confirming that you
              have been unsubscribed, and you will no longer receive SMS
              messages from us.
            </p>

            <h3 className="mt-4 text-base font-semibold text-white">5.6 Help</h3>
            <p className="mt-2">
              If you are experiencing issues, text{" "}
              <span className="font-semibold text-white">HELP</span> or
              contact us at {siteConfig.contact.email} or{" "}
              {siteConfig.contact.phone}.
            </p>

            <h3 className="mt-4 text-base font-semibold text-white">5.7 Carrier Liability</h3>
            <p className="mt-2">
              Carriers are not liable for delayed or undelivered messages.
            </p>

            <h3 className="mt-4 text-base font-semibold text-white">5.8 Privacy</h3>
            <p className="mt-2">
              We will not sell, rent, or share your mobile information or SMS
              consent data with third parties or affiliates for marketing
              purposes. See our{" "}
              <a href="/privacy" className="text-accent underline underline-offset-2">
                Privacy Policy
              </a>{" "}
              for full details.
            </p>

            <h3 className="mt-4 text-base font-semibold text-white">5.9 Modifications</h3>
            <p className="mt-2">
              We reserve the right to modify or discontinue the SMS program
              at any time, with or without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. Subscription &amp; Billing</h2>
            <p className="mt-3">
              If you purchase our automation service, your subscription is
              billed on a recurring monthly basis at the rate confirmed with
              you directly before your subscription begins. You may cancel
              at any time by contacting us; cancellation takes effect at the
              end of the current billing period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">7. Client Responsibilities</h2>
            <p className="mt-3">
              If you use our service to send automated communications to
              your own customers, you are responsible for ensuring your use
              complies with applicable telemarketing and anti-spam laws,
              including Canada&rsquo;s Anti-Spam Legislation (CASL) and the
              Telephone Consumer Protection Act (TCPA), including obtaining
              proper consent from your own customers before messaging them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">8. Third-Party Links</h2>
            <p className="mt-3">
              This website may link to third-party sites or services we do
              not control. We are not responsible for the content, policies,
              or practices of any third-party site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              9. Disclaimers and Limitation of Liability
            </h2>
            <p className="mt-3">
              This website and our services are provided &ldquo;as is&rdquo;
              without warranties of any kind. To the fullest extent
              permitted by law, Aniya Network Solutions Inc. is not liable
              for any indirect, incidental, or consequential damages arising
              from your use of this website or our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">10. Governing Law</h2>
            <p className="mt-3">
              These Terms are governed by the laws of the Province of
              Ontario and the federal laws of Canada applicable therein,
              without regard to conflict-of-law principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">11. Changes to Terms</h2>
            <p className="mt-3">
              We may update these Terms periodically. Continued use of this
              website after changes are posted constitutes acceptance of the
              revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">12. Contact Us</h2>
            <p className="mt-3">
              If you have any questions about these Terms, please contact us
              at:
            </p>
            <div className="mt-4">
              <Callout>
                <p>
                  <span className="font-semibold text-white">Email:</span>{" "}
                  {siteConfig.contact.email}
                </p>
                <p className="mt-1">
                  <span className="font-semibold text-white">Phone:</span>{" "}
                  {siteConfig.contact.phone}
                </p>
                <p className="mt-3 font-semibold text-white">Address:</p>
                <p>Aniya Network Solutions Inc.</p>
                <p>{siteConfig.contact.addressLine}</p>
              </Callout>
            </div>
          </section>
        </div>
      </article>
    </section>
  );
}
