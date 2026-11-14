import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  ArrowLeft, Clock, Calendar, Share2, Check, BookOpen, 
  Phone, AlertTriangle, ShieldCheck, Heart, Sparkles, 
  HelpCircle, ChevronRight, MessageCircleHeart, Users
} from "lucide-react";
import { getBlogArticleBySlug, getRelatedBlogArticles } from "@/data/blogArticles";
import { Seo } from "@/components/Seo";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const article = getBlogArticleBySlug(params.slug);
    if (!article) {
      return {
        meta: [
          { title: "ఆర్టికల్ లభించలేదు | జీవన బంధం" },
          { name: "description", content: "మీరు వెతుకుతున్న వ్యాసం అందుబాటులో లేదు." },
          { name: "robots", content: "noindex, follow" }
        ]
      };
    }

    const title = `${article.title} | జీవన బంధం`;
    const description = article.metaDescription || article.excerpt;
    const url = `https://www.jeevanabandham.online/blog/${article.slug}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "og:image", content: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80" },
        { property: "article:published_time", content: article.updatedDate },
        { property: "article:section", content: article.category },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "keywords", content: [article.primaryKeyword, ...article.secondaryKeywords, ...article.tags].join(", ") },
        { name: "robots", content: "index, follow" }
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: BlogPostPage,
});

export function BlogPostPage() {
  const { slug } = useParams({ from: "/blog/$slug" });
  const article = getBlogArticleBySlug(slug);

  const [copiedLink, setCopiedLink] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-bold mb-3">వ్యాసం లభించలేదు</h1>
        <p className="text-muted-foreground mb-6">మీరు చూస్తున్న కథ లేదా వ్యాసం వేరే పేజీకి మార్చబడి ఉండవచ్చు.</p>
        <Link to="/blog" className="px-5 py-2.5 rounded-full bg-rose-600 text-white font-bold text-sm">
          బ్లాగ్ హోమ్‌పేజీకి వెళ్ళండి
        </Link>
      </div>
    );
  }

  const relatedArticles = getRelatedBlogArticles(article.slug, 3);

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Seo 
        title={`${article.title} | జీవన బంధం`}
        description={article.metaDescription}
        url={`https://www.jeevanabandham.online/blog/${article.slug}`}
        type="article"
        breadcrumbs={[
          { name: "Home", url: "https://www.jeevanabandham.online/" },
          { name: "Blog", url: "https://www.jeevanabandham.online/blog" },
          { name: article.title, url: `https://www.jeevanabandham.online/blog/${article.slug}` }
        ]}
        faqs={article.faqs}
      />

      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-rose-600 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Top Emergency Notice */}
      <div className="bg-rose-600 text-white py-1.5 px-4 text-xs font-medium text-center">
        <span>🚨 అత్యవసర సహాయం &amp; మానసిక సంక్షోభ నివారణకు: </span>
        <a href="tel:14416" className="underline font-bold ml-1">Tele-MANAS: 14416 (24/7)</a>
        <span className="mx-2">|</span>
        <a href="tel:112" className="underline font-bold">112</a>
      </div>

      {/* Navigation Header */}
      <nav className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="h-4 w-4" />
            <span>బ్లాగ్ కథలు</span>
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={copyUrl}
              className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border border-border hover:bg-muted transition"
            >
              {copiedLink ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Share2 className="h-3.5 w-3.5" />}
              <span>{copiedLink ? "లింక్ కాపీ అయింది" : "షేర్ చేయండి"}</span>
            </button>
            <Link to="/support" className="px-3 py-1.5 rounded-full bg-rose-600 text-white text-xs font-bold hover:bg-rose-700 transition">
              సహాయం
            </Link>
          </div>
        </div>
      </nav>

      {/* Article Content Area */}
      <article className="max-w-3xl w-full mx-auto px-4 sm:px-6 py-10 flex-1">
        {/* Category & Metadata */}
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-xs font-bold">
            {article.category}
          </span>
          <div className="flex items-center gap-1 text-xs text-muted-foreground font-medium">
            <Clock className="h-3.5 w-3.5 ml-2" />
            <span>{article.readTime} చదవడం</span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-snug">
          {article.title}
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
          {article.subtitle}
        </p>

        {/* Author & Date Card */}
        <div className="flex items-center justify-between py-4 my-6 border-y border-border text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-rose-100 dark:bg-rose-950/50 text-rose-600 flex items-center justify-center font-bold">
              జీ
            </div>
            <div>
              <div className="font-bold text-foreground">{article.author.name}</div>
              <div className="text-[11px]">{article.author.role}</div>
            </div>
          </div>
          <div className="text-right">
            <div>అప్‌డేట్: {article.date}</div>
          </div>
        </div>

        {/* Target Tool Card */}
        {article.targetToolLink && (
          <div className="p-4 sm:p-5 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="font-bold text-rose-900 dark:text-rose-200 text-sm">
                ఈ విషయానికి సంబంధించిన ప్రత్యేక వేదిక:
              </div>
              <div className="text-xs text-rose-700 dark:text-rose-300 mt-0.5">
                సమగ్ర మార్గదర్శకాలు మరియు చెక్‌లిస్ట్‌ల కోసం చూడండి.
              </div>
            </div>
            <Link
              to={article.targetToolLink}
              className="px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold hover:bg-rose-700 transition inline-flex items-center justify-center gap-1 shrink-0"
            >
              <span>{article.targetToolName}</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}

        {/* Table of Contents */}
        {article.tableOfContents && article.tableOfContents.length > 0 && (
          <div className="p-5 rounded-2xl bg-card border border-border mb-8">
            <div className="font-bold text-foreground text-sm mb-3 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-rose-600" />
              <span>విషయ సూచిక (Table of Contents)</span>
            </div>
            <ul className="space-y-1.5 text-xs">
              {article.tableOfContents.map((toc) => (
                <li key={toc.id}>
                  <a href={`#${toc.id}`} className="text-muted-foreground hover:text-rose-600 transition flex items-center gap-1.5">
                    <span className="text-rose-500">•</span>
                    <span>{toc.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body */}
        <div className="prose prose-slate dark:prose-invert max-w-none text-sm sm:text-base">
          {article.content}
        </div>

        {/* FAQs Section */}
        {article.faqs && article.faqs.length > 0 && (
          <div id="faqs" className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-rose-600" />
              <span>తరచుగా అడిగే ప్రశ్నలు (Frequently Asked Questions)</span>
            </h3>
            <div className="space-y-4">
              {article.faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-card border border-border">
                  <h4 className="font-bold text-foreground text-sm mb-1.5">{faq.question}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Articles */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-lg font-bold text-foreground mb-4">మరిన్ని ముఖ్యమైన కథనాలు</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                to={`/blog/${rel.slug}`}
                className="p-4 rounded-2xl bg-card border border-border hover:border-rose-400 transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider">
                    {rel.category.split(" ")[0]}
                  </span>
                  <h4 className="text-xs font-bold text-foreground group-hover:text-rose-600 transition mt-1 line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
                <div className="text-[11px] text-rose-600 font-bold mt-3 flex items-center justify-between">
                  <span>చదవండి</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8 px-4 sm:px-6 text-center text-xs text-muted-foreground">
        <p>జీవన బంధం — జీవితాన్ని కాపాడే కుటుంబ సహాయ వేదిక. సంక్షోభ సమయంలో అండగా ఉంటాం.</p>
      </footer>
    </div>
  );
}
