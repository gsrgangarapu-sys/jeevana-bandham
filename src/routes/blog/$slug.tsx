import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  ArrowLeft, Clock, Calendar, Share2, Check, BookOpen, 
  Phone, AlertTriangle, ShieldCheck, Heart, Sparkles, 
  HelpCircle, ChevronRight, MessageCircleHeart, Users
} from "lucide-react";
import { getBlogArticleBySlug, getRelatedBlogArticles } from "@/data/blogArticles";
import { Seo } from "@/components/Seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getBlogArticleBySlug(params.slug);
    if (!article) {
      throw notFound();
    }
    return { article };
  },
  head: ({ loaderData }) => {
    const article = loaderData?.article;
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
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold mb-3">404 - వ్యాసం లభించలేదు</h1>
      <p className="text-muted-foreground mb-6 max-w-md">
        మీరు చూస్తున్న కథ లేదా మార్గదర్శక వ్యాసం అందుబాటులో లేదు లేదా తొలగించబడింది.
      </p>
      <Link to="/blog" className="px-6 py-3 rounded-full bg-rose-600 text-white font-bold text-sm shadow hover:bg-rose-700 transition">
        బ్లాగ్ హోమ్‌పేజీకి వెళ్ళండి
      </Link>
    </div>
  ),
  component: BlogPostPage,
});

export function BlogPostPage() {
  const { article } = Route.useLoaderData();

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
      <div className="bg-amber-500/15 border-b border-amber-500/30 px-4 py-2.5 text-center text-xs text-amber-900 dark:text-amber-200 flex items-center justify-center gap-2">
        <AlertTriangle className="size-3.5 text-amber-600 shrink-0" />
        <span>
          <strong>గమనిక:</strong> ఇది అవగాహన మరియు కౌన్సెలింగ్ సమాచారం మాత్రమే. తక్షణ అత్యవసర వైద్య లేదా పోలీసు సహాయం కోసం <strong>112</strong> లేదా టెలి-మానస్ <strong>14416</strong> కు కాల్ చేయండి.
        </span>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            <span>బ్లాగ్ హోమ్‌పేజీ</span>
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={copyUrl}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-muted hover:bg-muted/80 transition-colors"
            >
              {copiedLink ? <Check className="size-3.5 text-emerald-600" /> : <Share2 className="size-3.5" />}
              <span>{copiedLink ? "లింక్ కాపీ అయింది" : "షేర్ చేయండి"}</span>
            </button>
            <Link
              to="/support"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-rose-600 text-white hover:bg-rose-700 shadow-sm transition-colors"
            >
              <Phone className="size-3.5" />
              <span>SOS సహాయం</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero / Article Header */}
      <div className="bg-gradient-to-b from-brand-warm/15 via-background to-background pt-10 pb-8 px-4 border-b border-border/40">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">హోమ్</Link>
            <ChevronRight className="size-3" />
            <Link to="/blog" className="hover:text-foreground">బ్లాగ్</Link>
            <ChevronRight className="size-3" />
            <span className="text-foreground truncate max-w-[200px]">{article.title}</span>
          </nav>

          {/* Meta Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-600/10 text-rose-600 border border-rose-600/20">
              {article.category}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="size-3" />
              {article.readTime}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar className="size-3" />
              {article.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-4 font-display">
            {article.title}
          </h1>

          <p className="text-base md:text-xl text-muted-foreground leading-relaxed mb-6 font-medium">
            {article.subtitle}
          </p>

          {/* Author Card */}
          <div className="flex items-center gap-3 pt-4 border-t border-border/50">
            <div className="size-11 rounded-full bg-rose-600/10 text-rose-600 border border-rose-600/20 flex items-center justify-center font-bold text-sm">
              <ShieldCheck className="size-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">{article.author.name}</div>
              <div className="text-xs text-muted-foreground">{article.author.role}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <main className="max-w-4xl mx-auto px-4 py-10 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Article Body */}
        <article className="lg:col-span-8 space-y-8">
          {/* Target Interactive Tool Callout */}
          {article.targetToolLink && article.targetToolName && (
            <div className="p-5 rounded-3xl bg-brand-primary/10 border border-brand-primary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary uppercase tracking-wider mb-1">
                  <Sparkles className="size-3.5" />
                  <span>సంబంధిత ఉచిత సాధనం</span>
                </div>
                <div className="font-bold text-base text-foreground">
                  {article.targetToolName}
                </div>
              </div>
              <Link
                to={article.targetToolLink}
                className="px-5 py-2.5 rounded-full bg-brand-primary text-primary-foreground font-bold text-xs shadow-warm hover:scale-105 active:scale-95 transition-all text-center shrink-0 flex items-center justify-center gap-2"
              >
                <span>ఇప్పుడే ఉపయోగించండి</span>
                <ChevronRight className="size-3.5" />
              </Link>
            </div>
          )}

          {/* Table of Contents */}
          {article.tableOfContents && article.tableOfContents.length > 0 && (
            <div className="p-6 rounded-3xl bg-card border border-border/60 shadow-sm space-y-3">
              <div className="flex items-center gap-2 font-bold text-base text-foreground">
                <BookOpen className="size-4 text-rose-600" />
                <span>విషయ సూచిక (Table of Contents)</span>
              </div>
              <ul className="space-y-2 text-sm">
                {article.tableOfContents.map((item, idx) => (
                  <li key={item.id} className="flex items-start gap-2">
                    <span className="font-mono text-xs text-muted-foreground mt-0.5">{idx + 1}.</span>
                    <a 
                      href={`#${item.id}`}
                      className="text-muted-foreground hover:text-rose-600 transition-colors leading-relaxed"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Rendered JSX Body Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-p:leading-relaxed prose-a:text-rose-600 prose-a:no-underline hover:prose-a:underline">
            {article.content}
          </div>

          {/* Frequently Asked Questions */}
          {article.faqs && article.faqs.length > 0 && (
            <div className="pt-8 border-t border-border/60 space-y-6">
              <div className="flex items-center gap-2 font-display text-2xl font-bold text-foreground">
                <HelpCircle className="size-6 text-rose-600" />
                <span>తరచూ అడిగే ప్రశ్నలు (FAQ)</span>
              </div>
              <div className="space-y-4">
                {article.faqs.map((faq, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-card border border-border/60 space-y-2 shadow-sm">
                    <h3 className="font-bold text-base text-foreground flex items-start gap-2">
                      <span className="text-rose-600 font-mono font-bold">Q:</span>
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="pt-6 border-t border-border/40 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground mr-1">కీలక అంశాలు:</span>
            {article.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground font-medium">
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Emergency Box */}
          <div className="p-6 rounded-3xl bg-rose-600 text-white space-y-4 shadow-warm">
            <div className="flex items-center gap-2 font-bold text-lg">
              <Phone className="size-5" />
              <span>అత్యవసర హెల్ప్‌లైన్లు</span>
            </div>
            <p className="text-xs leading-relaxed opacity-95">
              మీరు లేదా మీకు తెలిసినవారు సంక్షోభంలో ఉన్నారా? ప్రభుత్వ ఉచిత జాతీయ హెల్ప్‌లైన్‌లను 24/7 సంప్రదించండి:
            </p>
            <div className="space-y-2 pt-2">
              <a 
                href="tel:14416"
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors text-sm font-bold"
              >
                <span>టెలి-మానస్ (మానసిక ఆరోగ్యం)</span>
                <span className="font-mono underline">14416</span>
              </a>
              <a 
                href="tel:112"
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors text-sm font-bold"
              >
                <span>జాతీయ ఎమర్జెన్సీ</span>
                <span className="font-mono underline">112</span>
              </a>
              <a 
                href="tel:1098"
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors text-sm font-bold"
              >
                <span>చైల్డ్‌లైన్ (పిల్లల రక్షణ)</span>
                <span className="font-mono underline">1098</span>
              </a>
              <a 
                href="tel:181"
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors text-sm font-bold"
              >
                <span>మహిళా హెల్ప్‌లైన్</span>
                <span className="font-mono underline">181</span>
              </a>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="p-6 rounded-3xl bg-card border border-border/60 shadow-sm space-y-4">
              <div className="font-bold text-base text-foreground flex items-center gap-2">
                <BookOpen className="size-4 text-rose-600" />
                <span>సంబంధిత కథనాలు</span>
              </div>
              <div className="space-y-3">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    to="/blog/$slug"
                    params={{ slug: rel.slug }}
                    className="block p-3 rounded-2xl hover:bg-muted/50 transition-colors group"
                  >
                    <div className="text-[11px] font-bold text-rose-600 mb-1">{rel.category}</div>
                    <div className="text-sm font-bold text-foreground group-hover:text-rose-600 transition-colors line-clamp-2 leading-snug">
                      {rel.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                      <Clock className="size-3" />
                      <span>{rel.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </main>

      {/* Footer CTA */}
      <div className="bg-brand-warm/10 border-t border-border/40 py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <Heart className="size-8 text-rose-600 mx-auto fill-current" />
          <h2 className="text-2xl font-bold font-display text-foreground">
            ప్రతి బంధం ఒక జీవితం... ప్రతి జీవితం విలువైనది
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            జీవన బంధం తెలుగు కుటుంబాలకు, మహిళలకు, పిల్లలకు సహాయపడేందుకు సదా సిద్ధంగా ఉంది.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              to="/support"
              className="px-6 py-3 rounded-full bg-rose-600 text-white font-bold text-sm shadow hover:bg-rose-700 transition"
            >
              ఉచిత కౌన్సెలింగ్ వివరాలు
            </Link>
            <Link
              to="/blog"
              className="px-6 py-3 rounded-full bg-muted font-bold text-sm hover:bg-muted/80 transition"
            >
              మరిన్ని ఆర్టికల్స్ చదవండి
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
