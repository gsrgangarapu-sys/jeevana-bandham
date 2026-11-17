interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  breadcrumbs?: { name: string; url: string }[];
  faqs?: { question: string; answer: string }[];
  schemaType?: "Article" | "WebSite" | "Organization";
}

export function Seo({
  title,
  description,
  keywords,
  url = "https://www.jeevanabandham.online/",
  image = "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "జీవన బంధం సంపాదకీయ బృందం",
  breadcrumbs,
  faqs,
  schemaType = "WebSite",
}: SeoProps) {
  const schemas: any[] = [];

  // 1. BreadcrumbList Schema for Google rich snippets
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    });
  }

  // 2. FAQPage Schema for interactive SERP accordions
  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  // 3. Article Schema for Google Discover and Top Stories
  if (type === "article") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      headline: title.replace(/ \| జీవన బంధం.*$/, ""),
      description,
      image,
      author: {
        "@type": "Organization",
        name: author,
        url: "https://www.jeevanabandham.online/",
      },
      publisher: {
        "@type": "Organization",
        name: "జీవన బంధం",
        logo: {
          "@type": "ImageObject",
          url: "https://i.ibb.co/nNy5WSYw/home.png",
        },
      },
      datePublished: publishedTime || "2026-11-15",
      dateModified: modifiedTime || publishedTime || "2026-11-17",
      inLanguage: "te",
    });
  }

  return (
    <>
      {schemas.map((schemaObj, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
        />
      ))}
    </>
  );
}
