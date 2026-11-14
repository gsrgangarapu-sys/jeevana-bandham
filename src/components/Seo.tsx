import { useEffect } from "react";

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
  author = "Jeevana Bandham Editorial Team",
  breadcrumbs,
  faqs,
  schemaType = "WebSite",
}: SeoProps) {
  useEffect(() => {
    // Generate BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(breadcrumbSchema);
      script.id = "breadcrumb-schema";
      document.head.appendChild(script);

      return () => {
        const el = document.getElementById("breadcrumb-schema");
        if (el) el.remove();
      };
    }
  }, [breadcrumbs]);

  useEffect(() => {
    // Generate FAQ Schema
    if (faqs && faqs.length > 0) {
      const faqSchema = {
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
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(faqSchema);
      script.id = "faq-schema";
      document.head.appendChild(script);

      return () => {
        const el = document.getElementById("faq-schema");
        if (el) el.remove();
      };
    }
  }, [faqs]);

  return null;
}
