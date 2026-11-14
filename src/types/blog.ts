import React from "react";

export type BlogCategory =
  | "All"
  | "వివాహ సమస్యలు (Marriage)"
  | "భార్యాభర్తల బంధం (Relationships)"
  | "కుటుంబ సమస్యలు (Family)"
  | "ప్రీ-మ్యారేజ్ గైడ్ (Pre-Marriage)"
  | "పిల్లల సంరక్షణ (Parenting)"
  | "సింగిల్ పేరెంటింగ్ (Single Parents)"
  | "మానసిక ఆరోగ్యం (Mental Health)"
  | "పిల్లల హక్కులు (Child Safety)";

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  subtitle: string;
  category: BlogCategory;
  status: "published" | "draft";
  readTime: string;
  date: string;
  updatedDate: string;
  author: {
    name: string;
    role: string;
  };
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  tags: string[];
  excerpt: string;
  metaDescription: string;
  canonicalUrl: string;
  targetToolLink: string;
  targetToolName: string;
  tableOfContents: {
    id: string;
    title: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedSlugs: string[];
  content: React.ReactNode;
}
