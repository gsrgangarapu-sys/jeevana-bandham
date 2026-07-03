import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as stories } from "./router-C8NAIE59.mjs";
import { H as Heart, d as CircleAlert, P as Phone, f as ArrowRight, g as ShieldCheck, M as MessageCircleHeart } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const helplines = [{
  name: "Vandrevala Foundation",
  number: "9999 666 555",
  note: "24/7, అన్ని భాషలు",
  tel: "9999666555",
  whatsapp: true
}, {
  name: "Tele MANAS",
  number: "14416",
  note: "ప్రభుత్వం, 20+ భాషలు",
  tel: "14416"
}, {
  name: "MPower Minds",
  number: "1800-120-820050",
  note: "24/7",
  tel: "1800120820050"
}, {
  name: "AASRA",
  number: "02227546669",
  note: "24/7",
  tel: "02227546669"
}, {
  name: "Jeevan Aastha",
  number: "18002333330",
  note: "24/7",
  tel: "18002333330"
}, {
  name: "Fortis",
  number: "8376804102",
  note: "24/7, 13+ భాషలు",
  tel: "8376804102"
}, {
  name: "1Life",
  number: "7893078930",
  note: "5am-12am, అన్ని భాషలు",
  tel: "7893078930"
}, {
  name: "Voice That Cares",
  number: "8448-8448-45",
  note: "9am-9pm, తెలుగు",
  tel: "8448844845"
}, {
  name: "Roshni Trust",
  number: "8142020033",
  note: "11am-9pm, తెలుగు",
  tel: "8142020033"
}, {
  name: "iCALL",
  number: "022-25521111",
  note: "10am-8pm, తెలుగు",
  tel: "02225521111"
}, {
  name: "KIRAN",
  number: "1800-5990019",
  note: "24/7, ప్రభుత్వం",
  tel: "18005990019"
}, {
  name: "NIMHANS",
  number: "080-46110007",
  note: "మానసిక ఆరోగ్యం",
  tel: "08046110007"
}, {
  name: "Connecting Trust",
  number: "9922004305",
  note: "12pm-8pm",
  tel: "9922004305"
}, {
  name: "Mann Talks",
  number: "8686139139",
  note: "9am-8pm",
  tel: "8686139139"
}, {
  name: "Parivarthan",
  number: "7676602602",
  note: "1pm-10pm",
  tel: "7676602602"
}, {
  name: "COOJ",
  number: "6361612525",
  note: "1pm-7pm",
  tel: "6361612525"
}, {
  name: "HEAL Foundation",
  number: "8108172432",
  note: "2pm-9pm, తెలుగు",
  tel: "8108172432"
}, {
  name: "Lifeline",
  number: "9088030303",
  note: "10am-10pm",
  tel: "9088030303"
}, {
  name: "Sumaitri",
  number: "23389090",
  note: "12:30pm-5pm",
  tel: "23389090"
}, {
  name: "Ankahee",
  number: "8655486966",
  note: "4pm-10pm",
  tel: "8655486966"
}];
const impacts = [{
  icon: "🍛",
  title: "రోజువారీ భోజనం",
  body: "ఇంటి వంట vs హాస్టల్ లేదా వేరే వాతావరణం. వారి ఆరోగ్యంపై ప్రభావం పడవచ్చు."
}, {
  icon: "🏫",
  title: "స్కూల్ & ఫ్రెండ్స్",
  body: "పూర్తిగా మార్పు, కొత్త వాతావరణం వారికి భయాన్ని కలిగించవచ్చు."
}, {
  icon: "👩‍👧",
  title: "తల్లి/తండ్రి సమయం",
  body: "ప్రేమ పంచే సమయం చాలా తగ్గిపోవచ్చు. ఒంటరితనం పెరుగుతుంది."
}, {
  icon: "😢",
  title: "రాత్రిపూట ఏడుపు",
  body: "నిశ్శబ్దంగా ఉన్న రాత్రి వేళల్లో భయం, గందరగోళం ఎక్కువగా అనిపించవచ్చు."
}];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground selection:bg-brand-warm/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Intervention, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stories, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NewGuides, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChildImpact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnonymousChat, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingSOS, {})
  ] });
}
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-brand-warm/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 py-4 flex justify-between items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5 group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 bg-brand-primary rounded-full flex items-center justify-center text-primary-foreground shadow-warm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-4 fill-current" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-bold tracking-tight text-brand-primary", children: "జీవన బంధం" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-1 text-sm font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/support", className: "px-3 py-2 rounded-full hover:bg-brand-warm/10 transition-colors", children: "కౌన్సెలింగ్" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#stories", className: "px-3 py-2 rounded-full hover:bg-brand-warm/10 transition-colors font-bold text-brand-primary", children: "Blog / కథలు" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pre-marriage", className: "px-3 py-2 rounded-full hover:bg-brand-warm/10 transition-colors", children: "ప్రీ-మ్యారేజ్ గైడ్" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/vasus-story", className: "px-3 py-2 rounded-full hover:bg-brand-warm/10 transition-colors", children: "వాసు కథ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#child-impact", className: "px-3 py-2 rounded-full hover:bg-brand-warm/10 transition-colors", children: "పిల్లల రక్షణ" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/support", className: "bg-brand-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold shadow-warm hover:scale-105 active:scale-95 transition-transform flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "size-4" }),
      "SOS సహాయం"
    ] })
  ] }) });
}
const quotes = ["“ఒక నిర్ణయం రెండు జీవితాలను విరిచేస్తుంది. ఒక నిమిషం ఆగితే కుటుంబం కాపాడబడుతుంది.”", "“మీ గతం మీ భవిష్యత్తును నిర్ణయించదు... మీరు ఈ రోజు తీసుకునే నిర్ణయమే మీ భవిష్యత్తు.”", "“విడాకులు జీవితానికి ముగింపు కాదు, కొత్త అధ్యాయానికి నాంది మాత్రమే.”", "“ప్రతి చీకటి రాత్రి తర్వాత ఒక అందమైన ఉదయం ఉంటుంది.”", "“ప్రతి బంధానికి మరమ్మత్తు అవసరం అవుతుంది... కానీ మరమ్మత్తు కంటే ముఖ్యం కాపాడుకోవాలనే నిర్ణయం.”", "“సింగిల్ పేరెంట్ కావడం ఒక సవాలు, కానీ అది మిమ్మల్ని మరింత బలంగా మారుస్తుంది.”", "“ఆత్మహత్య పరిష్కారం కాదు, అది మీ ప్రియమైన వారికి మీరు ఇచ్చే అతిపెద్ద శిక్ష.”", "“మీలో మార్పు తీసుకురావాలనే ఆ కోరికే... మీరు ఇంకా ఓడిపోలేదనడానికి గొప్ప సాక్ష్యం.”", "“ఒంటరిగా ఎదుర్కోవాల్సిన అవసరం లేదు... సహాయం కోరడం బలహీనత కాదు, అది ధైర్యం.”", "“ప్రతి సమస్య ఒక పాఠం... ప్రతి పాఠం ఒక బలం... ప్రతి బలం ఒక కొత్త ఆరంభం.”"];
function AnimatedQuotes() {
  const [index, setIndex] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5e3);
    return () => clearInterval(timer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-28 md:h-24 relative flex items-center", children: quotes.map((quote, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `absolute w-full italic text-xl md:text-2xl text-muted-foreground transition-all duration-1000 ${i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`, children: quote }, i)) });
}
const heroImages = ["https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=800&auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80"];
function HeroCarousel() {
  const [index, setIndex] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4e3);
    return () => clearInterval(timer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[2rem] shadow-warm aspect-[4/3] border border-brand-warm/20 hidden lg:block overflow-hidden w-full max-w-[600px] hover:scale-[1.02] transition-transform duration-500", children: [
    heroImages.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: `Hero hopeful moment ${i + 1}`, className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}` }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10", children: heroImages.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIndex(i), className: `transition-all duration-300 rounded-full h-2 shadow-sm ${i === index ? "w-6 bg-brand-primary" : "w-2 bg-white/70 hover:bg-white"}`, "aria-label": `Go to slide ${i + 1}` }, i)) })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 -z-10 opacity-60", style: {
      background: "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--brand-warm) 25%, transparent) 0%, transparent 70%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-warm/15 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6 border border-brand-warm/30 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-brand-primary animate-breathe" }),
          "🌸 జీవన బంధం — Life Changing Platform"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-6xl font-extrabold leading-[1.2] mb-6 font-display text-foreground", children: [
          "ప్రతి ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-primary", children: "బంధం" }),
          " ఒక",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-primary", children: "జీవితం" }),
          "... ప్రతి జీవితం",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "md:hidden" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-primary md:ml-3", children: "విలువైనది" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 leading-relaxed", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedQuotes, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand-warm/10 border-l-4 border-brand-primary p-6 rounded-2xl mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg md:text-xl font-semibold text-foreground m-0 leading-relaxed flex gap-3 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "💛" }),
          '"మీరు ఒంటరిగా లేరు. మేము మీతో ఉన్నాము. ఇప్పుడే మీ మొదటి అడుగు వేయండి."'
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-6 md:gap-8 mb-10 text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 md:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl md:text-3xl", children: "💛" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-base md:text-lg", children: "సహాయం" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 md:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl md:text-3xl", children: "🤝" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-base md:text-lg", children: "అవగాహన" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 md:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl md:text-3xl", children: "💪" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-base md:text-lg", children: "బలం" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 md:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl md:text-3xl", children: "🌈" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-base md:text-lg", children: "ఆశ" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/support", className: "bg-brand-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg shadow-warm hover:scale-105 transition-transform flex items-center gap-2", children: "💬 అజ్ఞాత చాట్ ప్రారంభించండి" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#sos", className: "bg-card text-foreground px-8 py-4 rounded-full font-semibold text-lg border-2 border-brand-warm/30 hover:bg-brand-warm/10 transition-colors flex items-center gap-2 shadow-sm", children: "📞 హెల్ప్‌లైన్‌కు కాల్ చేయండి" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/child-protection", className: "bg-card text-foreground px-8 py-4 rounded-full font-semibold text-lg border-2 border-brand-warm/30 hover:bg-brand-warm/10 transition-colors flex items-center gap-2 shadow-sm", children: "📖 పిల్లల రక్షణ గైడ్ చదవండి" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-10 md:gap-16 mt-12 pt-8 border-t-2 border-brand-warm/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl md:text-4xl font-extrabold text-brand-primary mb-1", children: "10,000+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs md:text-sm font-bold uppercase tracking-wider", children: "కుటుంబాలకు సహాయం" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl md:text-4xl font-extrabold text-brand-primary mb-1", children: "50+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs md:text-sm font-bold uppercase tracking-wider", children: "నిపుణుల బృందం" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl md:text-4xl font-extrabold text-brand-primary mb-1", children: "24/7" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs md:text-sm font-bold uppercase tracking-wider", children: "అందుబాటులో" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-8 justify-center items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-brand-warm/5 p-1 md:p-2 rounded-[2rem] border border-brand-warm/20 shadow-warm text-center w-full relative group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-brand-warm to-brand-primary rounded-[2.1rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-card p-8 md:p-10 rounded-[1.5rem] border border-brand-warm/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-7xl mb-6 drop-shadow-md", children: "🌸" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-foreground text-2xl md:text-3xl font-bold mb-3", children: "మీ ప్రయాణం మా మద్దతు" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base md:text-lg leading-relaxed mb-8", children: '"ప్రతి సూర్యోదయం కొత్త ఆశను తెస్తుంది. ప్రతి నిర్ణయం కొత్త జీవితాన్ని ఇస్తుంది."' }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 md:gap-5 justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl md:text-4xl hover:-translate-y-2 transition-transform cursor-default", children: "❤️" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl md:text-4xl hover:-translate-y-2 transition-transform cursor-default", children: "💛" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl md:text-4xl hover:-translate-y-2 transition-transform cursor-default", children: "💚" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl md:text-4xl hover:-translate-y-2 transition-transform cursor-default", children: "💙" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl md:text-4xl hover:-translate-y-2 transition-transform cursor-default", children: "💜" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(HeroCarousel, {})
      ] })
    ] })
  ] });
}
function Intervention() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "sos", className: "max-w-4xl mx-auto px-6 py-16 scroll-mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border-2 border-brand-primary/30 p-8 md:p-12 rounded-[2rem] shadow-warm relative overflow-hidden text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full h-2 bg-brand-primary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-5xl mb-4", children: "💛" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-5xl font-bold mb-6 leading-tight", children: "ఆగండి… ఒక్క నిమిషం" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-3 leading-relaxed max-w-2xl mx-auto", children: "మీరు ఇప్పుడు అనుకుంటున్న నిర్ణయం మీ బిడ్డ జీవితాన్ని శాశ్వతంగా మార్చేస్తుంది." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl font-semibold text-foreground mb-10", children: "మీ బిడ్డకు మీరు చాలా అవసరం." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "help", className: "grid sm:grid-cols-3 gap-3 mb-10 scroll-mt-20", children: helplines.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${h.tel}`, className: "group p-5 bg-brand-cream rounded-2xl border border-brand-warm/30 hover:border-brand-primary/50 hover:-translate-y-0.5 transition-all text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-brand-primary text-xs font-bold uppercase tracking-wider mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-3.5" }),
        h.name
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-foreground tabular-nums", children: h.number }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: h.note })
    ] }, h.name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/support", className: "w-full py-4 bg-brand-primary text-primary-foreground rounded-2xl font-bold text-lg hover:opacity-95 transition-opacity shadow-warm flex items-center justify-center gap-2", children: "🙏 నేను నా బిడ్డ కోసం ఒక్క నిమిషం ఆగుతాను" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/support", className: "py-3 px-4 border-2 border-brand-warm/30 rounded-xl font-medium hover:bg-brand-warm/5 transition-colors flex items-center justify-center gap-2", children: "🏠 కుటుంబాన్ని కాపాడుకోవాలనుకుంటున్నాను" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/support", className: "py-3 px-4 border-2 border-brand-warm/30 rounded-xl font-medium hover:bg-brand-warm/5 transition-colors flex items-center justify-center gap-2", children: "💔 విడాకులు? దయచేసి నాకు దారి చూపండి" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/support", className: "py-3 px-4 border-2 border-brand-warm/30 rounded-xl font-medium hover:bg-brand-warm/5 transition-colors flex items-center justify-center gap-2 mt-2 bg-brand-cream dark:bg-brand-warm/5", children: "🤝 అజ్ఞాత చాట్ ప్రారంభించండి" })
    ] })
  ] }) });
}
function Stories() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "stories", className: "max-w-6xl mx-auto px-6 py-16 scroll-mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-between items-end gap-4 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold mb-2", children: "కార్టూన్ ఎమోషన్ స్టోర్" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "మీ మనసులోని మాటను ఈ బొమ్మల ద్వారా చెప్పండి" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "text-brand-primary font-bold flex items-center gap-1 group", children: [
        "అన్నీ చూడండి ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 group-hover:translate-x-1 transition-transform" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: stories.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/stories/$storyId", params: {
      storyId: s.id
    }, className: "bg-card rounded-3xl overflow-hidden border border-brand-warm/20 hover:shadow-warm hover:-translate-y-1 transition-all group block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full aspect-[5/4] bg-brand-warm/10 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, width: 1024, height: 1024, loading: "lazy", alt: s.title, className: "size-full object-cover group-hover:scale-105 transition-transform duration-700" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 text-3xl drop-shadow-md", children: s.emoji })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl mb-2", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-4 italic", children: s.quote }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: s.chips.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 bg-brand-warm/15 text-brand-primary text-[11px] font-bold rounded-full", children: c }, c)) })
      ] })
    ] }, s.id)) })
  ] });
}
function NewGuides() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-6xl mx-auto px-6 py-10 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/pre-marriage", className: "bg-brand-warm/10 border border-brand-warm/30 p-8 rounded-3xl hover:shadow-warm hover:-translate-y-1 transition-all group relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-24 text-brand-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-display font-bold mb-3 relative z-10", children: "💍 ప్రీ-మ్యారేజ్ గైడ్" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 relative z-10 max-w-sm", children: "వివాహానికి ముందు తప్పక తెలుసుకోవాల్సిన 10 విషయాలు, చెక్ లిస్ట్ మరియు Q&A." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 font-bold text-brand-primary relative z-10", children: [
        "చదవండి ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 group-hover:translate-x-1 transition-transform" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/vasus-story", className: "bg-brand-ink text-white p-8 rounded-3xl hover:shadow-warm hover:-translate-y-1 transition-all group relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-24 text-white" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-display font-bold mb-3 relative z-10", children: "❤️ వాసు ప్రేమకథ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-stone-300 mb-6 relative z-10 max-w-sm italic", children: '"నా మొదటి ప్రేమ – ఒక హాల్ టికెట్లో మొదలైన కథ". స్పూర్తిదాయకమైన జీవిత పాఠం.' }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 font-bold text-white relative z-10", children: [
        "పూర్తి కథ చదవండి ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 group-hover:translate-x-1 transition-transform" })
      ] })
    ] })
  ] }) });
}
function ChildImpact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "child-impact", className: "bg-brand-warm/5 py-20 px-6 scroll-mt-20 border-y border-brand-warm/15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-brand-warm/30 text-xs font-bold uppercase tracking-wider mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-3.5 text-brand-primary" }),
        "పిల్లల రక్షణ నిర్ణయ సాధనం"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold mb-3 italic leading-tight", children: "ఈ నిర్ణయం మీ బిడ్డ జీవితాన్ని ఎలా ప్రభావితం చేస్తుంది?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "ఏ చట్టపరమైన నిర్ణయం తీసుకునే ముందు ఒక్కసారి ఆలోచించండి" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-4", children: impacts.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6 rounded-2xl shadow-soft border border-brand-warm/20 flex gap-4 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-brand-warm/15 rounded-xl text-2xl shrink-0", children: i.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-1", children: i.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: i.body })
      ] })
    ] }, i.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col sm:flex-row gap-3 justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/support", className: "bg-brand-ink text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity flex justify-center items-center", children: "ముందు కౌన్సెలింగ్ ప్రయత్నిస్తాను" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/child-protection", className: "border-2 border-brand-ink/20 px-6 py-3 rounded-xl font-semibold hover:bg-brand-ink/5 transition-colors flex justify-center items-center text-foreground", children: "పిల్లలపై ప్రభావాన్ని తగ్గించే మార్గాలు" })
    ] })
  ] }) });
}
function AnonymousChat() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-6xl mx-auto px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-brand-primary text-primary-foreground rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row gap-6 items-center justify-between shadow-warm overflow-hidden relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute -right-12 -bottom-12 size-64 rounded-full bg-brand-warm/30 blur-2xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl font-bold mb-2", children: "ఎవరికీ తెలియకుండా మాట్లాడాలనుకుంటున్నారా?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-90 max-w-xl", children: "మీ పేరు అవసరం లేదు. మీ కథ సురక్షితం. ఒక శిక్షణ పొందిన కౌన్సెలర్‌తో అజ్ఞాతంగా చర్చించండి." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "bg-card text-brand-primary px-7 py-4 rounded-full font-bold whitespace-nowrap hover:scale-105 transition-transform flex items-center gap-2 shadow-warm relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircleHeart, { className: "size-5" }),
      "అజ్ఞాత చాట్ ప్రారంభించండి"
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-brand-ink text-stone-300 py-16 px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid md:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-7 bg-brand-warm rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-3.5 text-brand-ink fill-current" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-white text-xl font-bold tracking-tight", children: "జీవన బంధం" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md leading-relaxed text-sm", children: "ప్రతి ప్రాణం విలువైనది. ముఖ్యంగా ఒక చిన్నారికి తన తల్లిదండ్రులు ప్రపంచం. మేము ఆ ప్రపంచాన్ని కాపాడటానికి ఇక్కడ ఉన్నాము." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-white font-bold mb-4 text-sm uppercase tracking-wider", children: "హెల్ప్‌లైన్" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: helplines.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "tabular-nums", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${h.tel}`, className: "hover:text-brand-warm transition-colors", children: [
          h.name,
          ": ",
          h.number
        ] }) }, h.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-white font-bold mb-4 text-sm uppercase tracking-wider", children: "విభాగాలు" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pre-marriage", className: "hover:text-brand-warm transition-colors", children: "ప్రీ-మ్యారేజ్ గైడ్" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/vasus-story", className: "hover:text-brand-warm transition-colors", children: "వాసు ప్రేమకథ" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pre-marriage", className: "hover:text-brand-warm transition-colors", children: "ప్రీ-మ్యారేజ్ గైడ్" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/vasus-story", className: "hover:text-brand-warm transition-colors", children: "వాసు ప్రేమకథ" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#stories", className: "hover:text-brand-warm transition-colors", children: "కార్టూన్ స్టోర్" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#child-impact", className: "hover:text-brand-warm transition-colors", children: "పిల్లల రక్షణ" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#sos", className: "hover:text-brand-warm transition-colors", children: "SOS సహాయం" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#help", className: "hover:text-brand-warm transition-colors", children: "అజ్ఞాత చాట్" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-xs leading-relaxed text-stone-400", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-stone-200", children: "డిస్క్లైమర్:" }),
        " ఈ వెబ్‌సైట్ సహాయం కోసం మాత్రమే. తీవ్రమైన మానసిక సమస్యలకు దయచేసి మానసిక వైద్యుడిని లేదా హెల్ప్‌లైన్‌ను సంప్రదించండి. మీరు ఆత్మహత్య ఆలోచనలో ఉంటే వెంటనే",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:9820466726", className: "text-brand-warm font-semibold", children: "982-046-6726" }),
        " కు కాల్ చేయండి."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center opacity-60", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Jeevana Bandham. Built with love for Telugu families."
      ] })
    ] })
  ] });
}
function FloatingSOS() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#sos", "aria-label": "SOS సహాయం", className: "fixed bottom-5 left-5 z-50 bg-[#E94560] text-white px-5 py-3 rounded-full font-bold shadow-[0_8px_30px_rgba(233,69,96,0.4)] animate-pulse flex items-center gap-2 hover:scale-105 transition-transform", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "size-5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "ఎమర్జెన్సీ సహాయం" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "SOS" })
  ] });
}
export {
  Home as component
};
