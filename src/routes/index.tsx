import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Heart, ShieldCheck, ArrowRight, MessageCircleHeart, AlertCircle } from "lucide-react";
import cartoonBride from "@/assets/cartoon-bride.jpg";
import cartoonChild from "@/assets/cartoon-child.jpg";
import cartoonFather from "@/assets/cartoon-father.jpg";
import cartoonMother from "@/assets/cartoon-mother.jpg";
import cartoonWoman from "@/assets/cartoon-woman.jpg";
import cartoonTeen from "@/assets/cartoon-teen.jpg";
import heroHands from "@/assets/hero-hands.jpg";
import heroHope from "@/assets/hero-hope.png";
import { stories } from "@/data/stories";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "జీవన బంధం — జీవితాన్ని కాపాడే కుటుంబ సహాయ వేదిక" },
      {
        name: "description",
        content:
          "కుటుంబాలు, మహిళలు, పిల్లలు, ఒంటరితనంతో బాధపడుతున్న వారికి ప్రేమతో, గౌరవంతో దారి చూపే తెలుగు వేదిక. SOS సహాయం, పిల్లల రక్షణ, విడాకుల ముందు కౌన్సెలింగ్.",
      },
      {
        name: "keywords",
        content: "జీవన బంధం, Jeevana Bandham, family counseling Telugu, suicide prevention, mental health Telugu, online counseling Telugu, divorce counseling"
      },
      { property: "og:title", content: "జీవన బంధం — Jeevana Bandham" },
      {
        property: "og:description",
        content: "ఒక నిర్ణయం రెండు జీవితాలను విరిచేస్తుంది. ఒక నిమిషం ఆగితే కుటుంబం కాపాడబడుతుంది.",
      },
      { property: "og:image", content: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "జీవన బంధం | Jeevana Bandham" },
      { name: "twitter:description", content: "మీ జీవితం చాలా విలువైనది. ఎమర్జెన్సీ సహాయం, కౌన్సెలింగ్ కోసం ఇక్కడ క్లిక్ చేయండి." },
    ],
  }),
  component: Home,
});

const helplines = [
  { name: "Vandrevala Foundation", number: "9999 666 555", note: "24/7, అన్ని భాషలు", tel: "9999666555", whatsapp: true },
  { name: "Tele MANAS", number: "14416", note: "ప్రభుత్వం, 20+ భాషలు", tel: "14416" },
  { name: "MPower Minds", number: "1800-120-820050", note: "24/7", tel: "1800120820050" },
  { name: "AASRA", number: "02227546669", note: "24/7", tel: "02227546669" },
  { name: "Jeevan Aastha", number: "18002333330", note: "24/7", tel: "18002333330" },
  { name: "Fortis", number: "8376804102", note: "24/7, 13+ భాషలు", tel: "8376804102" },
  { name: "1Life", number: "7893078930", note: "5am-12am, అన్ని భాషలు", tel: "7893078930" },
  { name: "Voice That Cares", number: "8448-8448-45", note: "9am-9pm, తెలుగు", tel: "8448844845" },
  { name: "Roshni Trust", number: "8142020033", note: "11am-9pm, తెలుగు", tel: "8142020033" },
  { name: "iCALL", number: "022-25521111", note: "10am-8pm, తెలుగు", tel: "02225521111" },
  { name: "KIRAN", number: "1800-5990019", note: "24/7, ప్రభుత్వం", tel: "18005990019" },
  { name: "NIMHANS", number: "080-46110007", note: "మానసిక ఆరోగ్యం", tel: "08046110007" },
  { name: "Connecting Trust", number: "9922004305", note: "12pm-8pm", tel: "9922004305" },
  { name: "Mann Talks", number: "8686139139", note: "9am-8pm", tel: "8686139139" },
  { name: "Parivarthan", number: "7676602602", note: "1pm-10pm", tel: "7676602602" },
  { name: "COOJ", number: "6361612525", note: "1pm-7pm", tel: "6361612525" },
  { name: "HEAL Foundation", number: "8108172432", note: "2pm-9pm, తెలుగు", tel: "8108172432" },
  { name: "Lifeline", number: "9088030303", note: "10am-10pm", tel: "9088030303" },
  { name: "Sumaitri", number: "23389090", note: "12:30pm-5pm", tel: "23389090" },
  { name: "Ankahee", number: "8655486966", note: "4pm-10pm", tel: "8655486966" }
];



const impacts = [
  { icon: "🍛", title: "రోజువారీ భోజనం", body: "ఇంటి వంట vs హాస్టల్ లేదా వేరే వాతావరణం. వారి ఆరోగ్యంపై ప్రభావం పడవచ్చు." },
  { icon: "🏫", title: "స్కూల్ & ఫ్రెండ్స్", body: "పూర్తిగా మార్పు, కొత్త వాతావరణం వారికి భయాన్ని కలిగించవచ్చు." },
  { icon: "👩‍👧", title: "తల్లి/తండ్రి సమయం", body: "ప్రేమ పంచే సమయం చాలా తగ్గిపోవచ్చు. ఒంటరితనం పెరుగుతుంది." },
  { icon: "😢", title: "రాత్రిపూట ఏడుపు", body: "నిశ్శబ్దంగా ఉన్న రాత్రి వేళల్లో భయం, గందరగోళం ఎక్కువగా అనిపించవచ్చు." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand-warm/30">
      <Nav />
      <Hero />
      <Intervention />
      <Stories />
      <NewGuides />
      <ChildImpact />
      <AnonymousChat />
      <Footer />
      <FloatingSOS />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-brand-warm/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="size-9 bg-brand-primary rounded-full flex items-center justify-center text-primary-foreground shadow-warm">
            <Heart className="size-4 fill-current" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-brand-primary">
            జీవన బంధం
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-1 text-sm font-medium">
          <Link to="/support" className="px-3 py-2 rounded-full hover:bg-brand-warm/10 transition-colors">కౌన్సెలింగ్</Link>
          <a href="/#stories" className="px-3 py-2 rounded-full hover:bg-brand-warm/10 transition-colors font-bold text-brand-primary">Blog / కథలు</a>
          <Link to="/pre-marriage" className="px-3 py-2 rounded-full hover:bg-brand-warm/10 transition-colors">ప్రీ-మ్యారేజ్ గైడ్</Link>
          <Link to="/vasus-story" className="px-3 py-2 rounded-full hover:bg-brand-warm/10 transition-colors">వాసు కథ</Link>
          <a href="/#child-impact" className="px-3 py-2 rounded-full hover:bg-brand-warm/10 transition-colors">పిల్లల రక్షణ</a>
        </div>
        <Link
          to="/support"
          className="bg-brand-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold shadow-warm hover:scale-105 active:scale-95 transition-transform flex items-center gap-2"
        >
          <AlertCircle className="size-4" />
          SOS సహాయం
        </Link>
      </div>
    </nav>
  );
}

const quotes = [
  "“ఒక నిర్ణయం రెండు జీవితాలను విరిచేస్తుంది. ఒక నిమిషం ఆగితే కుటుంబం కాపాడబడుతుంది.”",
  "“మీ గతం మీ భవిష్యత్తును నిర్ణయించదు... మీరు ఈ రోజు తీసుకునే నిర్ణయమే మీ భవిష్యత్తు.”",
  "“విడాకులు జీవితానికి ముగింపు కాదు, కొత్త అధ్యాయానికి నాంది మాత్రమే.”",
  "“ప్రతి చీకటి రాత్రి తర్వాత ఒక అందమైన ఉదయం ఉంటుంది.”",
  "“ప్రతి బంధానికి మరమ్మత్తు అవసరం అవుతుంది... కానీ మరమ్మత్తు కంటే ముఖ్యం కాపాడుకోవాలనే నిర్ణయం.”",
  "“సింగిల్ పేరెంట్ కావడం ఒక సవాలు, కానీ అది మిమ్మల్ని మరింత బలంగా మారుస్తుంది.”",
  "“ఆత్మహత్య పరిష్కారం కాదు, అది మీ ప్రియమైన వారికి మీరు ఇచ్చే అతిపెద్ద శిక్ష.”",
  "“మీలో మార్పు తీసుకురావాలనే ఆ కోరికే... మీరు ఇంకా ఓడిపోలేదనడానికి గొప్ప సాక్ష్యం.”",
  "“ఒంటరిగా ఎదుర్కోవాల్సిన అవసరం లేదు... సహాయం కోరడం బలహీనత కాదు, అది ధైర్యం.”",
  "“ప్రతి సమస్య ఒక పాఠం... ప్రతి పాఠం ఒక బలం... ప్రతి బలం ఒక కొత్త ఆరంభం.”"
];

function AnimatedQuotes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-28 md:h-24 relative flex items-center">
      {quotes.map((quote, i) => (
        <p
          key={i}
          className={`absolute w-full italic text-xl md:text-2xl text-muted-foreground transition-all duration-1000 ${
            i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {quote}
        </p>
      ))}
    </div>
  );
}

const heroImages = [
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80"
];

function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative rounded-[2rem] shadow-warm aspect-[4/3] border border-brand-warm/20 hidden lg:block overflow-hidden w-full max-w-[600px] hover:scale-[1.02] transition-transform duration-500">
      {heroImages.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Hero hopeful moment ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all duration-300 rounded-full h-2 shadow-sm ${
              i === index ? 'w-6 bg-brand-primary' : 'w-2 bg-white/70 hover:bg-white'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--brand-warm) 25%, transparent) 0%, transparent 70%)",
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-warm/15 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6 border border-brand-warm/30 shadow-sm">
            <span className="size-1.5 rounded-full bg-brand-primary animate-breathe" />
            🌸 జీవన బంధం — Life Changing Platform
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.2] mb-6 font-display text-foreground">
            ప్రతి <span className="text-brand-primary">బంధం</span> ఒక<br />
            <span className="text-brand-primary">జీవితం</span>... ప్రతి జీవితం
            <br className="md:hidden" />
            <span className="text-brand-primary md:ml-3">విలువైనది</span>
          </h1>

          <div className="mb-6 leading-relaxed">
            <AnimatedQuotes />
          </div>

          <div className="bg-brand-warm/10 border-l-4 border-brand-primary p-6 rounded-2xl mb-10">
            <p className="text-lg md:text-xl font-semibold text-foreground m-0 leading-relaxed flex gap-3 items-start">
              <span className="text-2xl">💛</span>
              "మీరు ఒంటరిగా లేరు. మేము మీతో ఉన్నాము. ఇప్పుడే మీ మొదటి అడుగు వేయండి."
            </p>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-8 mb-10 text-foreground">
            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-2xl md:text-3xl">💛</span>
              <span className="font-bold text-base md:text-lg">సహాయం</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-2xl md:text-3xl">🤝</span>
              <span className="font-bold text-base md:text-lg">అవగాహన</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-2xl md:text-3xl">💪</span>
              <span className="font-bold text-base md:text-lg">బలం</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-2xl md:text-3xl">🌈</span>
              <span className="font-bold text-base md:text-lg">ఆశ</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/support"
              className="bg-brand-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg shadow-warm hover:scale-105 transition-transform flex items-center gap-2"
            >
              💬 అజ్ఞాత చాట్ ప్రారంభించండి
            </Link>
            <a
              href="#sos"
              className="bg-card text-foreground px-8 py-4 rounded-full font-semibold text-lg border-2 border-brand-warm/30 hover:bg-brand-warm/10 transition-colors flex items-center gap-2 shadow-sm"
            >
              📞 హెల్ప్‌లైన్‌కు కాల్ చేయండి
            </a>
            <Link
              to="/child-protection"
              className="bg-card text-foreground px-8 py-4 rounded-full font-semibold text-lg border-2 border-brand-warm/30 hover:bg-brand-warm/10 transition-colors flex items-center gap-2 shadow-sm"
            >
              📖 పిల్లల రక్షణ గైడ్ చదవండి
            </Link>
          </div>

          <div className="flex flex-wrap gap-10 md:gap-16 mt-12 pt-8 border-t-2 border-brand-warm/20">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-brand-primary mb-1">10,000+</div>
              <div className="text-muted-foreground text-xs md:text-sm font-bold uppercase tracking-wider">కుటుంబాలకు సహాయం</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-brand-primary mb-1">50+</div>
              <div className="text-muted-foreground text-xs md:text-sm font-bold uppercase tracking-wider">నిపుణుల బృందం</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-brand-primary mb-1">24/7</div>
              <div className="text-muted-foreground text-xs md:text-sm font-bold uppercase tracking-wider">అందుబాటులో</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="bg-brand-warm/5 p-1 md:p-2 rounded-[2rem] border border-brand-warm/20 shadow-warm text-center w-full relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-warm to-brand-primary rounded-[2.1rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-card p-8 md:p-10 rounded-[1.5rem] border border-brand-warm/10">
              <div className="text-7xl mb-6 drop-shadow-md">🌸</div>
              <h3 className="text-foreground text-2xl md:text-3xl font-bold mb-3">మీ ప్రయాణం మా మద్దతు</h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                "ప్రతి సూర్యోదయం కొత్త ఆశను తెస్తుంది. ప్రతి నిర్ణయం కొత్త జీవితాన్ని ఇస్తుంది."
              </p>
              <div className="flex gap-3 md:gap-5 justify-center">
                <span className="text-3xl md:text-4xl hover:-translate-y-2 transition-transform cursor-default">❤️</span>
                <span className="text-3xl md:text-4xl hover:-translate-y-2 transition-transform cursor-default">💛</span>
                <span className="text-3xl md:text-4xl hover:-translate-y-2 transition-transform cursor-default">💚</span>
                <span className="text-3xl md:text-4xl hover:-translate-y-2 transition-transform cursor-default">💙</span>
                <span className="text-3xl md:text-4xl hover:-translate-y-2 transition-transform cursor-default">💜</span>
              </div>
            </div>
          </div>
          
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}

function Intervention() {
  return (
    <section id="sos" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-20">
      <div className="bg-card border-2 border-brand-primary/30 p-8 md:p-12 rounded-[2rem] shadow-warm relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-2 bg-brand-primary" />
        <span className="inline-block text-5xl mb-4">💛</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
          ఆగండి… ఒక్క నిమిషం
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-3 leading-relaxed max-w-2xl mx-auto">
          మీరు ఇప్పుడు అనుకుంటున్న నిర్ణయం మీ బిడ్డ జీవితాన్ని శాశ్వతంగా మార్చేస్తుంది.
        </p>
        <p className="text-lg md:text-xl font-semibold text-foreground mb-10">
          మీ బిడ్డకు మీరు చాలా అవసరం.
        </p>

        <div id="help" className="grid sm:grid-cols-3 gap-3 mb-10 scroll-mt-20">
          {helplines.map((h) => (
            <a
              key={h.name}
              href={`tel:${h.tel}`}
              className="group p-5 bg-brand-cream rounded-2xl border border-brand-warm/30 hover:border-brand-primary/50 hover:-translate-y-0.5 transition-all text-left"
            >
              <div className="flex items-center gap-2 text-brand-primary text-xs font-bold uppercase tracking-wider mb-2">
                <Phone className="size-3.5" />
                {h.name}
              </div>
              <div className="text-xl font-bold text-foreground tabular-nums">{h.number}</div>
              <div className="text-xs text-muted-foreground mt-1">{h.note}</div>
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <Link to="/support" className="w-full py-4 bg-brand-primary text-primary-foreground rounded-2xl font-bold text-lg hover:opacity-95 transition-opacity shadow-warm flex items-center justify-center gap-2">
            🙏 నేను నా బిడ్డ కోసం ఒక్క నిమిషం ఆగుతాను
          </Link>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link to="/support" className="py-3 px-4 border-2 border-brand-warm/30 rounded-xl font-medium hover:bg-brand-warm/5 transition-colors flex items-center justify-center gap-2">
              🏠 కుటుంబాన్ని కాపాడుకోవాలనుకుంటున్నాను
            </Link>
            <Link to="/support" className="py-3 px-4 border-2 border-brand-warm/30 rounded-xl font-medium hover:bg-brand-warm/5 transition-colors flex items-center justify-center gap-2">
              💔 విడాకులు? దయచేసి నాకు దారి చూపండి
            </Link>
          </div>
          <Link to="/support" className="py-3 px-4 border-2 border-brand-warm/30 rounded-xl font-medium hover:bg-brand-warm/5 transition-colors flex items-center justify-center gap-2 mt-2 bg-brand-cream dark:bg-brand-warm/5">
            🤝 అజ్ఞాత చాట్ ప్రారంభించండి
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stories() {
  return (
    <section id="stories" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-20">
      <div className="flex flex-wrap justify-between items-end gap-4 mb-10">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">కార్టూన్ ఎమోషన్ స్టోర్</h2>
          <p className="text-muted-foreground">మీ మనసులోని మాటను ఈ బొమ్మల ద్వారా చెప్పండి</p>
        </div>
        <button className="text-brand-primary font-bold flex items-center gap-1 group">
          అన్నీ చూడండి <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((s) => (
          <Link
            to="/stories/$storyId"
            params={{ storyId: s.id }}
            key={s.id}
            className="bg-card rounded-3xl overflow-hidden border border-brand-warm/20 hover:shadow-warm hover:-translate-y-1 transition-all group block"
          >
            <div className="relative w-full aspect-[5/4] bg-brand-warm/10 overflow-hidden">
              <img
                src={s.img}
                width={1024}
                height={1024}
                loading="lazy"
                alt={s.title}
                className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-3 left-3 text-3xl drop-shadow-md">{s.emoji}</span>
            </div>
            <div className="p-6">
              <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 italic">{s.quote}</p>
              <div className="flex flex-wrap gap-2">
                {s.chips.map((c) => (
                  <span key={c} className="px-3 py-1 bg-brand-warm/15 text-brand-primary text-[11px] font-bold rounded-full">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function NewGuides() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10 pb-16">
      <div className="grid md:grid-cols-2 gap-6">
        <Link to="/pre-marriage" className="bg-brand-warm/10 border border-brand-warm/30 p-8 rounded-3xl hover:shadow-warm hover:-translate-y-1 transition-all group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
            <Heart className="size-24 text-brand-primary" />
          </div>
          <h3 className="text-3xl font-display font-bold mb-3 relative z-10">💍 ప్రీ-మ్యారేజ్ గైడ్</h3>
          <p className="text-muted-foreground mb-6 relative z-10 max-w-sm">
            వివాహానికి ముందు తప్పక తెలుసుకోవాల్సిన 10 విషయాలు, చెక్ లిస్ట్ మరియు Q&A.
          </p>
          <span className="inline-flex items-center gap-1 font-bold text-brand-primary relative z-10">
            చదవండి <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
        <Link to="/vasus-story" className="bg-brand-ink text-white p-8 rounded-3xl hover:shadow-warm hover:-translate-y-1 transition-all group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Heart className="size-24 text-white" />
          </div>
          <h3 className="text-3xl font-display font-bold mb-3 relative z-10">❤️ వాసు ప్రేమకథ</h3>
          <p className="text-stone-300 mb-6 relative z-10 max-w-sm italic">
            "నా మొదటి ప్రేమ – ఒక హాల్ టికెట్లో మొదలైన కథ". స్పూర్తిదాయకమైన జీవిత పాఠం.
          </p>
          <span className="inline-flex items-center gap-1 font-bold text-white relative z-10">
            పూర్తి కథ చదవండి <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </div>
    </section>
  );
}

function ChildImpact() {
  return (
    <section id="child-impact" className="bg-brand-warm/5 py-20 px-6 scroll-mt-20 border-y border-brand-warm/15">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-brand-warm/30 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="size-3.5 text-brand-primary" />
            పిల్లల రక్షణ నిర్ణయ సాధనం
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 italic leading-tight">
            ఈ నిర్ణయం మీ బిడ్డ జీవితాన్ని ఎలా ప్రభావితం చేస్తుంది?
          </h2>
          <p className="text-muted-foreground">ఏ చట్టపరమైన నిర్ణయం తీసుకునే ముందు ఒక్కసారి ఆలోచించండి</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {impacts.map((i) => (
            <div key={i.title} className="bg-card p-6 rounded-2xl shadow-soft border border-brand-warm/20 flex gap-4 items-start">
              <div className="p-3 bg-brand-warm/15 rounded-xl text-2xl shrink-0">{i.icon}</div>
              <div>
                <h4 className="font-bold mb-1">{i.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{i.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/support" className="bg-brand-ink text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity flex justify-center items-center">
            ముందు కౌన్సెలింగ్ ప్రయత్నిస్తాను
          </Link>
          <Link to="/child-protection" className="border-2 border-brand-ink/20 px-6 py-3 rounded-xl font-semibold hover:bg-brand-ink/5 transition-colors flex justify-center items-center text-foreground">
            పిల్లలపై ప్రభావాన్ని తగ్గించే మార్గాలు
          </Link>
        </div>
      </div>
    </section>
  );
}

function AnonymousChat() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="bg-brand-primary text-primary-foreground rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row gap-6 items-center justify-between shadow-warm overflow-hidden relative">
        <div aria-hidden className="absolute -right-12 -bottom-12 size-64 rounded-full bg-brand-warm/30 blur-2xl" />
        <div className="relative">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">ఎవరికీ తెలియకుండా మాట్లాడాలనుకుంటున్నారా?</h3>
          <p className="opacity-90 max-w-xl">
            మీ పేరు అవసరం లేదు. మీ కథ సురక్షితం. ఒక శిక్షణ పొందిన కౌన్సెలర్‌తో అజ్ఞాతంగా చర్చించండి.
          </p>
        </div>
        <button className="bg-card text-brand-primary px-7 py-4 rounded-full font-bold whitespace-nowrap hover:scale-105 transition-transform flex items-center gap-2 shadow-warm relative">
          <MessageCircleHeart className="size-5" />
          అజ్ఞాత చాట్ ప్రారంభించండి
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-ink text-stone-300 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-5">
            <div className="size-7 bg-brand-warm rounded-full flex items-center justify-center">
              <Heart className="size-3.5 text-brand-ink fill-current" />
            </div>
            <span className="font-display text-white text-xl font-bold tracking-tight">జీవన బంధం</span>
          </div>
          <p className="max-w-md leading-relaxed text-sm">
            ప్రతి ప్రాణం విలువైనది. ముఖ్యంగా ఒక చిన్నారికి తన తల్లిదండ్రులు ప్రపంచం. మేము ఆ ప్రపంచాన్ని కాపాడటానికి ఇక్కడ ఉన్నాము.
          </p>
        </div>
        <div>
          <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">హెల్ప్‌లైన్</h5>
          <ul className="space-y-2 text-sm">
            {helplines.map((h) => (
              <li key={h.name} className="tabular-nums">
                <a href={`tel:${h.tel}`} className="hover:text-brand-warm transition-colors">
                  {h.name}: {h.number}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">విభాగాలు</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/pre-marriage" className="hover:text-brand-warm transition-colors">ప్రీ-మ్యారేజ్ గైడ్</Link></li>
            <li><Link to="/vasus-story" className="hover:text-brand-warm transition-colors">వాసు ప్రేమకథ</Link></li>
            <li><Link to="/pre-marriage" className="hover:text-brand-warm transition-colors">ప్రీ-మ్యారేజ్ గైడ్</Link></li>
            <li><Link to="/vasus-story" className="hover:text-brand-warm transition-colors">వాసు ప్రేమకథ</Link></li>
            <li><a href="#stories" className="hover:text-brand-warm transition-colors">కార్టూన్ స్టోర్</a></li>
            <li><a href="#child-impact" className="hover:text-brand-warm transition-colors">పిల్లల రక్షణ</a></li>
            <li><a href="#sos" className="hover:text-brand-warm transition-colors">SOS సహాయం</a></li>
            <li><a href="#help" className="hover:text-brand-warm transition-colors">అజ్ఞాత చాట్</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-xs leading-relaxed text-stone-400">
        <p className="mb-3">
          <strong className="text-stone-200">డిస్క్లైమర్:</strong> ఈ వెబ్‌సైట్ సహాయం కోసం మాత్రమే. తీవ్రమైన మానసిక సమస్యలకు
          దయచేసి మానసిక వైద్యుడిని లేదా హెల్ప్‌లైన్‌ను సంప్రదించండి. మీరు ఆత్మహత్య ఆలోచనలో ఉంటే వెంటనే{" "}
          <a href="tel:9820466726" className="text-brand-warm font-semibold">982-046-6726</a> కు కాల్ చేయండి.
        </p>
        <p className="text-center opacity-60">© {new Date().getFullYear()} Jeevana Bandham. Built with love for Telugu families.</p>
      </div>
    </footer>
  );
}

function FloatingSOS() {
  return (
    <a
      href="#sos"
      aria-label="SOS సహాయం"
      className="fixed bottom-5 left-5 z-50 bg-[#E94560] text-white px-5 py-3 rounded-full font-bold shadow-[0_8px_30px_rgba(233,69,96,0.4)] animate-pulse flex items-center gap-2 hover:scale-105 transition-transform"
    >
      <AlertCircle className="size-5" />
      <span className="hidden sm:inline">ఎమర్జెన్సీ సహాయం</span>
      <span className="sm:hidden">SOS</span>
    </a>
  );
}
