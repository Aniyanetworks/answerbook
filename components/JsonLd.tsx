import { siteConfig } from "@/lib/config";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brandName,
    url: siteConfig.url,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    description:
      "Automation software for Ontario home-service trade contractors — missed-call recovery, speed-to-lead follow-up, appointment reminders, review requests, and pipeline management.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.url}${path}`,
    serviceType: name,
    areaServed: {
      "@type": "State",
      name: "Ontario",
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.brandName,
      url: siteConfig.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.brandName,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.addressStreet,
      addressLocality: siteConfig.contact.addressCity,
      addressRegion: "ON",
      postalCode: siteConfig.contact.addressPostalCode,
      addressCountry: "CA",
    },
    areaServed: "Ontario, Canada",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BlogPostingJsonLd({
  title,
  description,
  slug,
  publishedAt,
  author,
  coverImage,
}: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  author: string;
  coverImage?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: publishedAt,
    author: { "@type": "Person", name: author },
    image: coverImage,
    mainEntityOfPage: `${siteConfig.url}/blog/${slug}`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.brandName,
      url: siteConfig.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQPageJsonLd({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
