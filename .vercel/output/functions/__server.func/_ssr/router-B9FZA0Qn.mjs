import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-CkHJtyrF.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "జీవన బంధం — Jeevana Bandham | కుటుంబ సహాయం" },
      {
        name: "description",
        content: "జీవితాన్ని కాపాడే తెలుగు కుటుంబ సహాయ వేదిక. SOS సహాయం, పిల్లల రక్షణ, మహిళల హక్కులు, విడాకుల ముందు కౌన్సెలింగ్."
      },
      { name: "author", content: "Jeevana Bandham" },
      { property: "og:title", content: "జీవన బంధం — జీవితాన్ని కాపాడే కుటుంబ సహాయ వేదిక" },
      {
        property: "og:description",
        content: "ఒక నిర్ణయం రెండు జీవితాలను విరిచేస్తుంది. ఒక నిమిషం ఆగితే కుటుంబం కాపాడబడుతుంది."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@300;400;500;600;700&family=Noto+Serif+Telugu:wght@400;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$4 = () => import("./vasus-story-Cri-_Sbw.mjs");
const Route$5 = createFileRoute("/vasus-story")({
  head: () => ({
    meta: [{
      title: "వాసు ప్రేమకథ | జీవన బంధం"
    }, {
      name: "description",
      content: "ఒక అందమైన ప్రేమకథ – వాసు మరియు ఆమె. నా మొదటి ప్రేమ – ఒక హాల్ టికెట్లో మొదలైన కథ"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./support-D13B7xuj.mjs");
const Route$4 = createFileRoute("/support")({
  head: () => ({
    meta: [{
      title: "మేము మీకు తోడుగా ఉన్నాము | జీవన బంధం"
    }, {
      name: "description",
      content: "ఒక్క సమస్య కోసం మీ జీవితాన్ని ముగించాలని నిర్ణయించుకోకండి. మీరు ఒంటరివారు కాదు. మీకు సహాయం అందుబాటులో ఉంది."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const BASE_URL = "";
const Route$3 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [{ path: "/", changefreq: "weekly", priority: "1.0" }];
        const urls = entries.map(
          (e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$2 = () => import("./pre-marriage-BwfCqrEv.mjs");
const Route$2 = createFileRoute("/pre-marriage")({
  head: () => ({
    meta: [{
      title: "వివాహానికి ముందు గైడ్ | జీవన బంధం"
    }, {
      name: "description",
      content: "వివాహానికి ముందు తప్పక తెలుసుకోవాల్సిన విషయాలు, చెక్ లిస్ట్ మరియు చర్చించుకోవాల్సిన అంశాలు"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-DIkH0y3_.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "జీవన బంధం — జీవితాన్ని కాపాడే కుటుంబ సహాయ వేదిక"
    }, {
      name: "description",
      content: "కుటుంబాలు, మహిళలు, పిల్లలు, ఒంటరితనంతో బాధపడుతున్న వారికి ప్రేమతో, గౌరవంతో దారి చూపే తెలుగు వేదిక. SOS సహాయం, పిల్లల రక్షణ, విడాకుల ముందు కౌన్సెలింగ్."
    }, {
      property: "og:title",
      content: "జీవన బంధం — Jeevana Bandham"
    }, {
      property: "og:description",
      content: "ఒక నిర్ణయం రెండు జీవితాలను విరిచేస్తుంది. ఒక నిమిషం ఆగితే కుటుంబం కాపాడబడుతుంది."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const cartoonBride = "/assets/cartoon-bride-CuH-DnUZ.jpg";
const cartoonChild = "/assets/cartoon-child-CxrfwVjf.jpg";
const cartoonFather = "/assets/cartoon-father-BhxpC7HX.jpg";
const cartoonMother = "/assets/cartoon-mother-eSj5mxx1.jpg";
const cartoonWoman = "/assets/cartoon-woman-CTYT0mmv.jpg";
const cartoonTeen = "/assets/cartoon-teen-BT1gj8_Z.jpg";
const stories = [
  {
    id: "crying-bride",
    emoji: "😭",
    img: cartoonBride,
    title: "ఏడుస్తున్న వధువు",
    quote: "“నా భర్త కుటుంబం నన్ను పట్టించుకోవడం లేదు”",
    chips: ["2 నిమిషాల కథ", "కౌన్సెలింగ్"],
    fullStory: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'పెళ్లి తర్వాత అత్తింటికి వెళ్లిన కొత్తలో చాలా మంది అమ్మాయిలు ఎదుర్కొనే ప్రధాన సమస్య ఇది. "నా భర్త నాతో బాగానే ఉంటాడు, కానీ నా అత్తమామలు నన్ను సరిగ్గా చూసుకోరు. నన్ను ఒక పరాయి మనిషిలా చూస్తున్నారు" అనే వేదన చాలా మంది వధువుల మనసులో ఉంటుంది.' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "కొత్త వాతావరణం, కొత్త మనుషులతో సర్దుకుపోవడానికి సమయం పడుతుంది. కానీ ఆ సమయం ఇవ్వకుండా మాటలతో బాధపెడితే ఆ నొప్పి భరించలేరు. ఇలాంటి సమయంలో భర్త మద్దతు చాలా అవసరం. భార్యను తన కుటుంబంలో ఒకరిగా మార్చే బాధ్యత భర్త మీదే ఉంటుంది." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground mt-8 mb-4", children: "దీనికి పరిష్కారం ఏమిటి?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "కమ్యూనికేషన్ ముఖ్యం. మీ బాధను మీ భర్తతో ప్రశాంతంగా పంచుకోండి. అత్తింటివారితో కూడా నెమ్మదిగా సంబంధాలు పెంచుకోవడానికి ప్రయత్నించండి. అవసరమైతే ఫ్యామిలీ కౌన్సెలింగ్ తీసుకోవడం ఉత్తమం." })
    ] })
  },
  {
    id: "single-mother",
    emoji: "👩‍👧",
    img: cartoonMother,
    title: "సింగిల్ మదర్",
    quote: "“నా బిడ్డ తండ్రిని మిస్ అవుతున్నాడు”",
    chips: ["Co-parenting గైడ్", "చట్టపరమైన హక్కులు"],
    fullStory: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'విడాకుల తర్వాత లేదా భర్తను కోల్పోయిన తర్వాత పిల్లలను ఒంటరిగా పెంచడం ఒక తల్లికి పెద్ద సవాలు. అన్నీ తానై చూసుకుంటున్నప్పటికీ, పిల్లలు "నాన్న ఎక్కడ?" అని అడిగినప్పుడు తల్లి గుండె తరుక్కుపోతుంది.' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "పిల్లలకు తండ్రి ప్రేమ కూడా అంతే ముఖ్యం. ఒకవేళ విడాకులు జరిగితే, పిల్లల కోసం కో-పేరెంటింగ్ (Co-parenting) పద్ధతిని పాటించడం మంచిది. ఇద్దరి మధ్య ఎన్ని విభేదాలున్నా, పిల్లల కోసం తండ్రిని కలవడానికి అనుమతించాలి." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground mt-8 mb-4", children: "మీరు ఏమి చేయవచ్చు?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "మీ పిల్లవాడికి తండ్రి లేని లోటు తెలియకుండా మీరు ఎంత ప్రేమను పంచినా, వారితో దాపరికం లేకుండా మాట్లాడండి. వారి మానసిక స్థితిని అర్థం చేసుకోండి. కో-పేరెంటింగ్ సాధ్యం కాకపోతే, పిల్లలకు మంచి రోల్ మోడల్స్ (తాతయ్య, మామయ్య) ఉండేలా చూసుకోండి." })
    ] })
  },
  {
    id: "suffering-child",
    emoji: "🧒",
    img: cartoonChild,
    title: "బాధపడుతున్న పిల్లవాడు",
    quote: "“అమ్మ నాన్న ప్రతిరోజూ గొడవపడుతున్నారు”",
    chips: ["పిల్లల లేఖ", "పరిష్కారం"],
    fullStory: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-brand-warm/10 p-6 rounded-2xl border border-brand-warm/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold text-brand-primary mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🧒" }),
          " కార్టూన్ ఎమోషన్ స్టోరీ సిరీస్ – భాగం 1"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl italic font-semibold mb-2", children: '😢 "అమ్మా... నాన్నా... దయచేసి గొడవపడకండి"' })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-foreground mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📖" }),
          " కథ – ఒక చిన్న మనసు మాట"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "చిన్ని (పేరు) వయసు 8 సంవత్సరాలు. ఆమెకు ఇష్టమైన రంగు పింక్, ఇష్టమైన ఆహారం చాక్లెట్ ఐస్క్రీం. కానీ ఆమెకు ఎక్కువగా ఇష్టం ఉండేది — ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "అమ్మా నాన్న నవ్వుతూ ఉండటం." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "కానీ ఇప్పుడు... ఇంట్లో నవ్వులు తగ్గిపోయాయి. అమ్మా నాన్న మధ్య మాటలు పెరిగాయి. అరుపులు, తలుపులు మూయబడే శబ్దాలు, ఆ తర్వాత వచ్చే నిశ్శబ్దం — అది చిన్నికి చాలా భయంగా ఉంటుంది." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ఒక రోజు రాత్రి, చిన్ని తన గదిలో పడుకుని, దుప్పటి లోపల దాక్కుని ఏడ్చింది. ఆమె తన చిన్ని చేతులతో గట్టిగా దుప్పటిని పట్టుకుని, మనసులో అనుకుంది:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "border-l-4 border-brand-primary pl-4 italic text-lg text-muted-foreground my-4", children: "“నేను ఏదైనా తప్పు చేశానా? అమ్మ నాన్న నన్ను ఇష్టపడటం లేదా? నేను లేకపోతే వాళ్లు సంతోషంగా ఉంటారా?”" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ఆ రాత్రి ఆమెకు నిద్ర పట్టలేదు." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-foreground mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🧠" }),
          " పిల్లల మనస్తత్వ శాస్త్రం – వారు ఏమి ఆలోచిస్తారు?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "తల్లిదండ్రుల గొడవలు పిల్లల మనసుపై తీవ్ర ప్రభావం చూపుతాయి. పిల్లలు సాధారణంగా ఇలా భావిస్తారు:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-brand-warm/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 border-b border-brand-warm/30 font-bold", children: "పిల్లల ఆలోచన" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 border-b border-brand-warm/30 font-bold", children: "వాస్తవ పరిస్థితి" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-brand-warm/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: '"ఇది నా వల్లే జరుగుతోందా?"' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "ఇది పెద్దల సమస్య, పిల్లల తప్పు కాదు." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-brand-warm/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: '"వాళ్లు నన్ను విడిచిపెడతారా?"' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "చాలామంది తల్లిదండ్రులు పిల్లల కోసమే కలిసి ఉంటారు." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-brand-warm/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: '"నేను సరైన పిల్లవాడిని కాదా?"' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "ప్రతి పిల్లవాడు ప్రత్యేకం, ఎవరికీ ఇష్టం లేని పిల్లలు ఉండరు." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: '"నేను ఎవరితో చెప్పాలి?"' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "మౌనంగా ఉండటం కంటే మాట్లాడటం మంచిది." })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-foreground mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "💔" }),
          " గొడవల వల్ల పిల్లలపై ప్రభావాలు"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6 rounded-2xl border border-brand-warm/20 shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-4 text-brand-primary", children: "తక్షణ ప్రభావాలు" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "😰" }),
                " భయం, ఆందోళన"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "😔" }),
                " విచారం, ఒంటరితనం"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🤐" }),
                " మాట్లాడకపోవడం"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "😴" }),
                " నిద్ర లేకపోవడం"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📉" }),
                " చదువులో శ్రద్ధ తగ్గడం"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "😡" }),
                " చిన్న విషయాలకు కోపం"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6 rounded-2xl border border-brand-warm/20 shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-4 text-brand-primary", children: "దీర్ఘకాలిక ప్రభావాలు" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ఆత్మవిశ్వాసం లోపం:" }),
                ' "నేను సరిపోను" అనే భావన'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "సంబంధాల భయం:" }),
                " పెద్దయ్యాక ప్రేమ, పెళ్లి పట్ల అపనమ్మకం"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ఆందోళన, నిరాశ:" }),
                " ఎప్పుడూ టెన్షన్లో ఉండటం"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "కోపం నియంత్రణ:" }),
                " చిన్న విషయాలకు అదుపు తప్పడం"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "నమ్మకం లేకపోవడం:" }),
                " ద్రోహం చేస్తారనే భయం"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-950/20 p-6 rounded-2xl border border-green-200 dark:border-green-900", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✅" }),
          ' "GOOD" – సానుకూల పరిష్కారాలు, సూచనలు'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-lg mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🌟" }),
              " తల్లిదండ్రులకు సూచనలు (Positive Parenting)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 list-disc pl-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ఒకరి మాట ఒకరు వినండి:" }),
                " అరవకండి. ప్రశాంతంగా, గౌరవంగా మాట్లాడుకోండి."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "పిల్లల ముందు గొడవ చేయకండి:" }),
                " సమస్యలు ఉంటే మూసి గదిలో మాట్లాడుకోండి."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "పిల్లలకు భరోసా ఇవ్వండి:" }),
                ' "అమ్మా నాన్న మధ్య కొన్ని భేదాభిప్రాయాలు ఉన్నాయి, కానీ మేము నిన్ను ఎప్పుడూ ప్రేమిస్తాము" అని చెప్పండి.'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "కుటుంబ సమయం పెంచండి:" }),
                " కలిసి భోజనం చేయండి. ప్రతి రోజు కనీసం 15 నిమిషాలు పిల్లలతో మాట్లాడండి."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ప్రేమను ప్రదర్శించండి:" }),
                " పిల్లల ముందు ఒకరికొకరు చిన్న గౌరవప్రదమైన మాటలు, చిరునవ్వులు పంచుకోండి."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-lg mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🌈" }),
              " పిల్లలు ఏం చేయవచ్చు? (What Children Can Do)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 list-disc pl-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "మీ భావాలను చెప్పండి:" }),
                ' "అమ్మా, మీరు గొడవపడుతుంటే నాకు భయంగా ఉంటుంది" అని ధైర్యంగా చెప్పండి.'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "నమ్మకమైన వ్యక్తితో మాట్లాడండి:" }),
                " తాత, నాయనమ్మ లేదా టీచర్ లాంటి వారితో మాట్లాడండి."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "క్రియేటివ్గా ఉండండి:" }),
                " డ్రాయింగ్, పాట, డ్యాన్స్ — ఇవి మీ బాధను తగ్గిస్తాయి."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "మీరు తప్పు కాదు అని గుర్తుంచుకోండి:" }),
                " తల్లిదండ్రుల గొడవలకు మీరు కారణం కాదు."
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-brand-warm/20 to-transparent p-6 rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3", children: "💬 తల్లిదండ్రుల మధ్య సంభాషణ – ఉదాహరణ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "తండ్రి:" }),
          " “నేను కోపంగా ఉన్నాను, కానీ పిల్లల ముందు మాట్లాడొద్దు. గదిలోకి వెళ్దాం.”"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "తల్లి:" }),
          " “సరే. నేను కూడా కోపంగా ఉన్నాను, కానీ ప్రశాంతంగా మాట్లాడుదాం.”"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 italic text-sm text-muted-foreground", children: "(గదిలోకి వెళ్ళి, ప్రశాంతంగా మాట్లాడుకుంటారు, పరిష్కారం కనుగొని పిల్లల దగ్గరికి వచ్చి...)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ఇద్దరు:" }),
          " “చిన్ని, మేము కొంచెం మాట్లాడుకున్నాం. మేము నిన్ను ఎంతో ప్రేమిస్తాము. నీకు ఏమైనా భయముంటే మాతో చెప్పు.”"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4", children: "🌸 ఆశావాద ముగింపు" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg italic font-medium", children: '"పిల్లలకు ఖరీదైన బొమ్మలు కాదు… ప్రశాంతమైన ఇల్లే అతిపెద్ద బహుమతి."' })
      ] })
    ] })
  },
  {
    id: "divorced-woman",
    emoji: "😔",
    img: cartoonWoman,
    title: "విడాకుల తర్వాత మహిళ",
    quote: "“ఇంకెవ్వరూ నన్ను పెళ్లి చేసుకోరు”",
    chips: ["విజయకథలు", "ఆత్మవిశ్వాసం"],
    fullStory: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'విడాకులు జీవితానికి అంతం కాదు. కానీ మన సమాజంలో విడాకులు తీసుకున్న మహిళను చూసే కోణం వల్ల వారిలో ఆత్మన్యూనతా భావం ఏర్పడుతుంది. "నా జీవితం అయిపోయింది, నన్ను ఇంకెవరూ చేసుకోరు, నేను ఒంటరిగా బతకలేను" అనే ఆలోచనలు వస్తాయి.' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "కానీ గుర్తుంచుకోండి, ఒక విషపూరితమైన బంధంలో ఉండి రోజూ చనిపోవడం కంటే, విడాకులు తీసుకుని ధైర్యంగా నిలబడటం చాలా ఉత్తమం. విడాకులు ఒక కొత్త జీవితానికి నాంది." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground mt-8 mb-4", children: "ఆత్మవిశ్వాసం పెంచుకోండి:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ముందుగా ఆర్థికంగా స్థిరపడటంపై దృష్టి పెట్టండి. మీకంటూ ఒక గుర్తింపును సృష్టించుకోండి. పెళ్లి ఒక్కటే జీవితం కాదు. మిమ్మల్ని అర్థం చేసుకునే వారు కచ్చితంగా వస్తారు. అంతవరకు మిమ్మల్ని మీరు ప్రేమించుకోవడం ప్రారంభించండి." })
    ] })
  },
  {
    id: "single-father",
    emoji: "😞",
    img: cartoonFather,
    title: "ఒంటరి తండ్రి",
    quote: "“నా బిడ్డను చూడలేకపోతున్నాను”",
    chips: ["చట్టపరమైన మార్గాలు", "బంధం"],
    fullStory: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "పిల్లల కస్టడీ విషయంలో మన చట్టాలు ఎక్కువగా తల్లుల పక్షాన ఉంటాయని చాలా మంది అంటుంటారు. విడాకుల తర్వాత పిల్లలకు దూరమైన తండ్రుల బాధ వర్ణనాతీతం. తమ రక్తాన్ని పంచుకు పుట్టిన బిడ్డను వారాంతాల్లో మాత్రమే చూడాల్సి రావడం, లేదా అసలు చూడనివ్వకపోవడం ఒక తండ్రికి నరకం లాంటిది." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "పిల్లలకు తల్లి ఎంత అవసరమో, తండ్రి కూడా అంతే అవసరం. " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground mt-8 mb-4", children: "మీ హక్కులు తెలుసుకోండి:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "చట్టపరంగా మీకు మీ పిల్లలను చూసే హక్కు (Visitation Rights) ఉంటుంది. మీ లాయర్‌తో మాట్లాడి మీ హక్కులను సాధించుకోండి. మీరు దూరం అయినప్పటికీ, పిల్లల ఫోన్లో, వీడియో కాల్స్‌లో మాట్లాడుతూ వారితో అనుబంధాన్ని కొనసాగించండి. వారి కోసం మీరు ఎప్పుడూ ఉంటారని భరోసా ఇవ్వండి." })
    ] })
  },
  {
    id: "teenager",
    emoji: "😢",
    img: cartoonTeen,
    title: "టీనేజర్",
    quote: "“నాన్న నా స్కూల్ మార్చేశారు”",
    chips: ["పిల్లల హక్కులు", "సంతులనం"],
    fullStory: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "తల్లిదండ్రుల విడాకులు లేదా బదిలీల వల్ల పిల్లల స్కూల్ మారడం అనేది వారిపై పెద్ద ప్రభావం చూపుతుంది. ముఖ్యంగా టీనేజర్స్... వారి స్నేహితులు, వారి ప్రపంచం అంతా ఆ స్కూల్‌లోనే ఉంటుంది. ఒక్కసారిగా అంతా వదిలేసి కొత్త వాతావరణంలోకి వెళ్లాలంటే వారికి చాలా భయంగా, కోపంగా ఉంటుంది." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "టీనేజ్‌లో హార్మోన్ల మార్పుల వల్ల ఇప్పటికే ఎమోషనల్‌గా ఉండే పిల్లలు, ఈ మార్పును తట్టుకోలేరు. వారు ఒంటరిగా ఫీల్ అవుతారు." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground mt-8 mb-4", children: "తల్లిదండ్రులు ఏమి చేయాలి?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "మీరు నిర్ణయం తీసుకునే ముందు వారితో మాట్లాడండి. వారి భావాలను అర్థం చేసుకోండి. పాత స్నేహితులతో టచ్‌లో ఉండటానికి సహాయం చేయండి. కొత్త స్కూల్‌లో వారు అలవాటు పడేవరకు వారికి అదనపు ప్రేమను, మద్దతును అందించండి." })
    ] })
  }
];
const $$splitComponentImporter = () => import("../_storyId-DX4i_PSb.mjs");
const Route = createFileRoute("/stories/$storyId")({
  loader: ({
    params
  }) => {
    const story = stories.find((s) => s.id === params.storyId);
    if (!story) {
      throw notFound();
    }
    return {
      story
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData.story.title} | జీవన బంధం`
    }, {
      name: "description",
      content: loaderData.story.quote
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const VasusStoryRoute = Route$5.update({
  id: "/vasus-story",
  path: "/vasus-story",
  getParentRoute: () => Route$6
});
const SupportRoute = Route$4.update({
  id: "/support",
  path: "/support",
  getParentRoute: () => Route$6
});
const SitemapDotxmlRoute = Route$3.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$6
});
const PreMarriageRoute = Route$2.update({
  id: "/pre-marriage",
  path: "/pre-marriage",
  getParentRoute: () => Route$6
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const StoriesStoryIdRoute = Route.update({
  id: "/stories/$storyId",
  path: "/stories/$storyId",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  PreMarriageRoute,
  SitemapDotxmlRoute,
  SupportRoute,
  VasusStoryRoute,
  StoriesStoryIdRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  router as r,
  stories as s
};
