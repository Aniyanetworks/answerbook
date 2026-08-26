import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.brandName}.`,
  alternates: { canonical: "/privacy" },
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
// registered address, and actual data-handling practices (what's collected
// via the GHL forms, how leads are stored/processed in GHL, and what
// third-party services — GA4, Meta Pixel, Google Ads — receive data) before
// this copy is treated as final. The SMS/TCPA sections below are written to
// match how the product actually behaves (automated SMS to leads and their
// customers) but still need sign-off from counsel before launch, given the
// statutory exposure around SMS consent specifically.
export default function PrivacyPage() {
  const updated = "August 26, 2026";

  return (
    <section className="bg-grid-dark bg-navy-950 relative -mt-28 overflow-hidden">
      <article className="relative mx-auto max-w-3xl px-4 pb-20 pt-36 sm:px-6 sm:pt-44">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Effective date: {updated}
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Introduction</h2>
            <p className="mt-3">
              At {siteConfig.brandName}, operated by Aniya Network Solutions
              Inc. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;),
              your privacy matters to us. This Privacy Policy explains how we
              collect, use, and safeguard your information when you interact
              with our website, services, and communications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. Information We Collect</h2>
            <p className="mt-3">We may collect the following types of information:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <span className="font-semibold text-white">Personal Information:</span>{" "}
                Name, business name, email address, phone number, and other
                details you provide via our forms.
              </li>
              <li>
                <span className="font-semibold text-white">Usage Data:</span>{" "}
                IP address, browser type, pages visited, and — where enabled
                — marketing identifiers passed through URL parameters (such
                as UTM parameters, Google Click ID, or Facebook Click ID).
              </li>
              <li>
                <span className="font-semibold text-white">Communication Data:</span>{" "}
                Text message and email interactions, form submissions, and
                call records.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. How We Use Your Information</h2>
            <p className="mt-3">We may use your information to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Respond to your inquiries and set up or administer your account</li>
              <li>Provide updates on our automation services</li>
              <li>Send appointment reminders or follow-ups via SMS, email, or phone</li>
              <li>Analyze site traffic and improve our services</li>
              <li>Comply with legal obligations or resolve disputes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. Sharing Your Information</h2>
            <p className="mt-3">
              We do not sell your personal information. We may share
              information with:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Internal staff and contractors under confidentiality agreements</li>
              <li>
                Third-party service providers (such as GoHighLevel, our CRM
                and messaging platform, plus analytics and hosting providers)
                strictly to perform services on our behalf
              </li>
              <li>Legal authorities if required by law</li>
            </ul>
            <div className="mt-4">
              <Callout title="Non-Sharing Clause">
                No mobile information will be shared with third parties or
                affiliates for marketing or promotional purposes. Information
                sharing to subcontractors in support services, such as
                customer service, is permitted. All other use case categories
                exclude text messaging originator opt-in data and consent —
                this information will not be shared with any third parties.
              </Callout>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Communication &amp; Consent</h2>
            <p className="mt-3">
              By submitting your information through our website forms, you
              consent to receive communications from{" "}
              {siteConfig.brandName} via phone, SMS/text message, and email.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <span className="font-semibold text-white">Marketing Messages:</span>{" "}
                Promotions, offers, and service opportunities require your
                express written consent via checkbox opt-in on our forms.
              </li>
              <li>
                <span className="font-semibold text-white">Non-Marketing Messages:</span>{" "}
                Appointment reminders, service updates, and follow-ups
                require your express consent via checkbox opt-in.
              </li>
              <li>Consent to receive SMS messages is not a condition of any purchase or service.</li>
              <li>
                You may opt out of SMS at any time by replying{" "}
                <span className="font-semibold text-white">STOP</span> to any
                message. After opting out, you will receive one final
                confirmation message.
              </li>
              <li>
                For help, reply <span className="font-semibold text-white">HELP</span>{" "}
                to any message or contact us at{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-accent underline underline-offset-2">
                  {siteConfig.contact.email}
                </a>{" "}
                or call {siteConfig.contact.phone}.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. SMS/Text Messaging Terms</h2>
            <p className="mt-3">
              {siteConfig.brandName} offers an SMS messaging program to
              provide service updates, appointment reminders, and follow-ups
              related to our automation services.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>By opting in, you agree to receive recurring text messages from us at the mobile number you provided.</li>
              <li>Message frequency varies based on your interactions with us.</li>
              <li>Message and data rates may apply. Contact your wireless carrier for pricing details.</li>
              <li>
                You can opt out at any time by texting{" "}
                <span className="font-semibold text-white">STOP</span>. You
                will receive one final confirmation message.
              </li>
              <li>
                For assistance, text{" "}
                <span className="font-semibold text-white">HELP</span> or
                contact us at {siteConfig.contact.email} or call{" "}
                {siteConfig.contact.phone}.
              </li>
              <li>We will not sell, rent, or share your phone number or SMS consent information with any third parties or affiliates for marketing purposes.</li>
              <li>Your data may be shared with service providers (such as our CRM and messaging platform) solely for delivering the messages you consented to receive.</li>
              <li>Participating carriers are not liable for delayed or undelivered messages.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">7. TCPA Compliance</h2>
            <p className="mt-3">
              {siteConfig.brandName} complies with the Telephone Consumer
              Protection Act (TCPA) and all applicable federal and provincial
              regulations governing text message and telephone communications.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>We only send text messages to individuals who have provided prior express consent (for informational messages) or prior express written consent (for marketing messages) through our website forms.</li>
              <li>We honor all opt-out requests promptly. Upon receiving a STOP message, we will cease sending further communications within a reasonable timeframe.</li>
              <li>
                If you believe you have received a message in error, please
                contact us immediately at {siteConfig.contact.email} or call{" "}
                {siteConfig.contact.phone}.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">8. Cookies &amp; Analytics</h2>
            <p className="mt-3">
              This site may use Google Analytics (GA4), the Meta Pixel, and
              Google Ads conversion tracking to understand site usage and
              measure advertising performance. These services may set
              cookies or use similar technologies. You can control cookie
              behavior through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">9. Data Security</h2>
            <p className="mt-3">
              We implement reasonable technical and organizational measures
              to protect your information against unauthorized access, loss,
              or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">10. Your Rights</h2>
            <p className="mt-3">
              You may request access to, correction of, or deletion of your
              personal data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">11. Updates to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy periodically. Updates will be
              reflected on this page with a revised effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">12. Contact Us</h2>
            <p className="mt-3">
              If you have any questions about this Privacy Policy, please
              contact us at:
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
