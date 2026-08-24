export interface TestimonialItem {
  quote: string;
  name: string;
  business: string;
  location: string;
}

interface SocialProofProps {
  heading?: string;
  testimonials: TestimonialItem[];
}

export default function SocialProof({
  heading = "Trusted by Ontario contractors",
  testimonials,
}: SocialProofProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="text-center text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
        {heading}
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col justify-between rounded-xl border border-border bg-white p-6"
          >
            {/* TODO: replace with real testimonial */}
            <blockquote className="text-sm leading-relaxed text-navy-900">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <p className="font-semibold text-navy-900">{t.name}</p>
              <p className="text-muted">
                {t.business} &middot; {t.location}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
