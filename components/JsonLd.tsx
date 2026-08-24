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
      "GoHighLevel-based automation software for Ontario home-service trade contractors — missed-call recovery, speed-to-lead follow-up, appointment reminders, review requests, and pipeline management.",
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
      addressRegion: "ON",
      addressCountry: "CA",
      // TODO: replace with a real street address once available.
      streetAddress: siteConfig.contact.addressLine,
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
