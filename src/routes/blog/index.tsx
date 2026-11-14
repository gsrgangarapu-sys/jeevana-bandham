import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { 
  Search, BookOpen, Clock, Heart, Shield, ArrowRight, 
  Sparkles, Phone, AlertCircle, ChevronRight, MessageCircleHeart
} from "lucide-react";
import { ALL_BLOG_ARTICLES } from "@/data/blogArticles";
import { BlogCategory } from "@/types/blog";
import { Seo } from "@/components/Seo";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "బ్లాగ్ & స్ఫూర్తిదాయక కథలు | జీవన బంధం (Jeevana Bandham Blog)" },
      {
        name: "description",
        content: "వివాహ సమస్యలు, భార్యాభర్తల సంబంధాలు, పిల్లల పెంపకం, ప్రీ-మ్యారేజ్ కౌన్సెలింగ్ మరియు మానసిక ఆరోగ్య పరిరక్షణపై సమగ్ర తెలుగు గైడ్‌లు మరియు ఆర్టికల్స్."
      },
      {
        name: "keywords",
        content: "జీవన బంధం బ్లాగ్, telugu relationship blog, marriage counselling telugu, pre marriage guide, parenting tips telugu, suicide prevention telugu"
      },
      { property: "og:title", content: "బ్లాగ్ & స్ఫూర్తిదాయక కథలు | జీవన బంధం" },
      { property: "og:description", content: "కుటుంబంలో శాంతి, భార్యాభర్తల అన్యోన్యత మరియు పిల్లల సంరక్షణ కోసం మార్గదర్శక ఆర్టికల్స్." },
      { property: "og:url", content: "https://www.jeevanabandham.online/blog" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.jeevanabandham.online/blog" }],
  }),
  component: BlogArchivePage,
});

const CATEGORIES: BlogCategory[] = [
  "All",
  "వివాహ సమస్యలు (Marriage)",
  "భార్యాభర్తల బంధం (Relationships)",
  "కుటుంబ సమస్యలు (Family)",
  "ప్రీ-మ్యారేజ్ గైడ్ (Pre-Marriage)",
  "పిల్లల సంరక్షణ (Parenting)",
  "సింగిల్ పేరెంటింగ్ (Single Parents)",
  "మానసిక ఆరోగ్యం (Mental Health)",
  "పిల్లల హక్కులు (Child Safety)"
];

export function BlogArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return ALL_BLOG_ARTICLES.filter((article) => {
      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.titleEn.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.tags.some(t => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Seo 
        title="బ్లాగ్ & స్ఫూర్తిదాయక కథలు | జీవన బంధం"
        description="కుటుంబ సంబంధాలు, వివాహ సలహాలు, పిల్లల సంరక్షణ మరియు మానసిక ఆరోగ్య మార్గదర్శకాలు."
        url="https://www.jeevanabandham.online/blog"
        breadcrumbs={[
          { name: "Home", url: "https://www.jeevanabandham.online/" },
          { name: "Blog", url: "https://www.jeevanabandham.online/blog" }
        ]}
      />

      {/* Top Emergency Bar */}
      <div className="bg-rose-600 text-white py-2 px-4 text-xs sm:text-sm font-medium text-center">
        <span>🚨 అత్యవసర సహాయం / తీవ్ర మానసిక ఒత్తిడికి 24/7 ఉచిత హెల్ప్‌లైన్: </span>
        <a href="tel:14416" className="underline font-bold ml-1">Tele-MANAS: 14416</a>
        <span className="mx-2">|</span>
        <a href="tel:112" className="underline font-bold">ఎమర్జెన్సీ: 112</a>
      </div>

      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🌱</span>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-foreground group-hover:text-rose-600 transition">జీవన బంధం</span>
              <span className="text-[10px] text-muted-foreground tracking-wider uppercase">Jeevana Bandham</span>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/pre-marriage" className="text-xs sm:text-sm font-semibold hover:text-rose-600 transition">ప్రీ-మ్యారేజ్</Link>
            <Link to="/child-protection" className="text-xs sm:text-sm font-semibold hover:text-rose-600 transition">పిల్లల రక్షణ</Link>
            <Link to="/support" className="px-3 py-1.5 rounded-full bg-rose-600 text-white text-xs sm:text-sm font-bold hover:bg-rose-700 transition">
              SOS సహాయం
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider mb-4">
          <BookOpen className="h-3.5 w-3.5" />
          <span>కుటుంబ మార్గదర్శక వేదిక</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
          జీవన బంధం కథలు &amp; మార్గదర్శక బ్లాగ్
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
          వివాహంలో శాంతి, భార్యాభర్తల అన్యోన్యత, పిల్లల ఎదుగుదల మరియు కష్ట కాలంలో ఆశను నింపే ఆచరణాత్మక వ్యాసాలు.
        </p>

        {/* Live Search */}
        <div className="relative mt-8 max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="శీర్షిక లేదా కీవర్డ్ ద్వారా వెతకండి (ఉదా: పెళ్లి, గొడవలు, పిల్లలు, కౌన్సెలింగ్)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm shadow-sm"
          />
        </div>
      </header>

      {/* Category Pills */}
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-3 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = cat === "All" 
              ? ALL_BLOG_ARTICLES.length 
              : ALL_BLOG_ARTICLES.filter(a => a.category === cat).length;
            if (count === 0 && cat !== "All") return null;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isSelected 
                    ? "bg-rose-600 text-white shadow-md shadow-rose-500/20" 
                    : "bg-card border border-border text-muted-foreground hover:bg-muted"
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected ? "bg-rose-800 text-white" : "bg-muted text-muted-foreground"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Blog Cards Grid */}
      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 pb-20 flex-1">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-card rounded-3xl border border-border p-8">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
            <h3 className="text-lg font-bold text-foreground">ఎలాంటి ఆర్టికల్స్ లభించలేదు</h3>
            <p className="text-sm text-muted-foreground mt-1">దయచేసి వేరే కీవర్డ్‌తో వెతకండి.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-card rounded-3xl border border-border/80 overflow-hidden shadow-sm hover:shadow-md hover:border-rose-400 transition-all flex flex-col group"
              >
                <div className="p-6 flex-1 flex flex-col">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 dark:bg-rose-950/40 px-2.5 py-1 rounded-lg">
                      {article.category.split(" ")[0]}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title & Excerpt */}
                  <Link to={`/blog/${article.slug}`} className="block group-hover:text-rose-600 transition-colors">
                    <h2 className="text-lg font-bold text-foreground group-hover:text-rose-600 leading-snug line-clamp-2">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-3 leading-relaxed flex-1">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 py-3.5 bg-muted/40 border-t border-border flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-medium text-[11px]">{article.date}</span>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>పూర్తిగా చదవండి</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            <span className="font-bold text-foreground">జీవన బంధం (Jeevana Bandham)</span> — జీవితాన్ని కాపాడే కుటుంబ సహాయ వేదిక.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/pre-marriage" className="hover:underline">ప్రీ-మ్యారేజ్</Link>
            <Link to="/child-protection" className="hover:underline">పిల్లల రక్షణ</Link>
            <Link to="/vasus-story" className="hover:underline">వాసు కథ</Link>
            <Link to="/support" className="hover:underline">సహాయం</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
