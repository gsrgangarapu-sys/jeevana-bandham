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
const appCss = "/assets/styles-CT31mOqe.css";
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
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "జీవన బంధం — Jeevana Bandham | కుటుంబ సహాయ వేదిక (Family Support Platform)" },
      {
        name: "description",
        content: "జీవన బంధం (Jeevana Bandham) అనేది జీవితాన్ని కాపాడే తెలుగు కుటుంబ సహాయ వేదిక. SOS సహాయం, పిల్లల రక్షణ, మహిళల హక్కులు, విడాకుల ముందు కౌన్సెలింగ్, ఆత్మహత్య నివారణ (Suicide Prevention) కోసం ఒక స్ఫూర్తిదాయక వెబ్‌సైట్."
      },
      {
        name: "keywords",
        content: "జీవన బంధం, Jeevana Bandham, Telugu family support, suicide prevention Telugu, divorce counseling Telugu, pre-marriage guide Telugu, mental health Telugu, online counseling, emotional support, parenting guide"
      },
      { name: "author", content: "Jeevana Bandham" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "జీవన బంధం — జీవితాన్ని కాపాడే కుటుంబ సహాయ వేదిక" },
      {
        property: "og:description",
        content: "ఒక నిర్ణయం రెండు జీవితాలను విరిచేస్తుంది. ఒక నిమిషం ఆగితే కుటుంబం కాపాడబడుతుంది. ఎమర్జెన్సీ సహాయం, కౌన్సెలింగ్ మరియు మార్గదర్శకం కోసం మమ్మల్ని సంప్రదించండి."
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "జీవన బంధం | Jeevana Bandham" },
      { name: "twitter:description", content: "కుటుంబ సమస్యలు, మానసిక ఒత్తిడికి పరిష్కారం చూపే ఆశాజ్యోతి. ఇప్పుడే సహాయం పొందండి." },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80" }
    ],
    links: [
      { rel: "icon", href: "https://i.ibb.co/nNy5WSYw/home.png", type: "image/png" },
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
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$5 = () => import("./vasus-story-Cri-_Sbw.mjs");
const Route$6 = createFileRoute("/vasus-story")({
  head: () => ({
    meta: [{
      title: "వాసు ప్రేమకథ | జీవన బంధం (Vasu Story - Telugu Love Story)"
    }, {
      name: "description",
      content: "ఒక అందమైన నిజ జీవిత ప్రేమకథ – వాసు మరియు ఆమె. నా మొదటి ప్రేమ – ఒక హాల్ టికెట్లో మొదలైన కథ. భార్యాభర్తల మధ్య ప్రేమ, నమ్మకం యొక్క గొప్పదనం."
    }, {
      name: "keywords",
      content: "Telugu true love story, husband wife relationship Telugu, romantic stories Telugu, inspirational love story, real life story Telugu"
    }, {
      property: "og:title",
      content: "వాసు ప్రేమకథ – నా మొదటి ప్రేమ"
    }, {
      property: "og:description",
      content: "ఒక హాల్ టికెట్లో మొదలైన అందమైన ప్రయాణం. జీవితంలో ప్రేమ మరియు బంధం యొక్క విలువను తెలిపే కథ."
    }, {
      property: "og:image",
      content: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "వాసు ప్రేమకథ | జీవన బంధం"
    }, {
      name: "twitter:description",
      content: "నిజమైన ప్రేమకు నిదర్శనం ఈ కథ."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./support-D13B7xuj.mjs");
const Route$5 = createFileRoute("/support")({
  head: () => ({
    meta: [{
      title: "మేము మీకు తోడుగా ఉన్నాము | జీవన బంధం (Family & Suicide Support)"
    }, {
      name: "description",
      content: "ఒక్క సమస్య కోసం మీ జీవితాన్ని ముగించాలని నిర్ణయించుకోకండి. మీరు ఒంటరివారు కాదు. ఎమర్జెన్సీ హెల్ప్‌లైన్, ఆత్మహత్య నివారణ మరియు ఉచిత కౌన్సెలింగ్ మీకు అందుబాటులో ఉంది."
    }, {
      name: "keywords",
      content: "suicide helpline Telugu, emotional support Telugu, mental health crisis Telugu, depression help Telugu, domestic violence help Telugu, free counseling Telugu"
    }, {
      property: "og:title",
      content: "మేము మీకు తోడుగా ఉన్నాము | మీరు ఒంటరివారు కాదు"
    }, {
      property: "og:description",
      content: "మీ సమస్య ఎంత పెద్దదైనా పరిష్కారం ఉంటుంది. మాట్లాడండి. మా నిపుణులు మీకు సహాయం చేయడానికి సిద్ధంగా ఉన్నారు."
    }, {
      property: "og:image",
      content: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "సహాయం తీసుకోండి | జీవన బంధం"
    }, {
      name: "twitter:description",
      content: "మీ జీవితం చాలా విలువైనది. ఎమర్జెన్సీ సహాయం కోసం ఇక్కడ క్లిక్ చేయండి."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const BASE_URL = "";
const Route$4 = createFileRoute("/sitemap.xml")({
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
const $$splitComponentImporter$3 = () => import("./pre-marriage-C0_OL3_0.mjs");
const Route$3 = createFileRoute("/pre-marriage")({
  head: () => ({
    meta: [{
      title: "ప్రీ-మ్యారేజ్ గైడ్ | జీవన బంధం (Pre-Marriage Guide)"
    }, {
      name: "description",
      content: "వివాహానికి ముందు తప్పక తెలుసుకోవాల్సిన 10 విషయాలు, చెక్ లిస్ట్ మరియు Q&A. ఆనందకరమైన వైవాహిక జీవితానికి మార్గదర్శకం."
    }, {
      name: "keywords",
      content: "pre-marriage guide Telugu, marriage counseling Telugu, before marriage checklist, relationship advice Telugu, wedding preparation Telugu"
    }, {
      property: "og:title",
      content: "ప్రీ-మ్యారేజ్ గైడ్ | జీవన బంధం"
    }, {
      property: "og:description",
      content: "వివాహ బంధంలో అడుగుపెట్టే ముందు యువతీయువకులు తెలుసుకోవాల్సిన అత్యంత ముఖ్యమైన విషయాలు."
    }, {
      property: "og:image",
      content: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=1200&q=80"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "ప్రీ-మ్యారేజ్ గైడ్ | వివాహానికి ముందు"
    }, {
      name: "twitter:description",
      content: "వివాహానికి ముందు మీరు తప్పక అడగాల్సిన ప్రశ్నలు మరియు గైడ్."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./child-protection-BuUOn-gj.mjs");
const Route$2 = createFileRoute("/child-protection")({
  head: () => ({
    meta: [{
      title: "పిల్లల రక్షణ – నిర్ణయ సాధనం (పూర్తి విస్తరణ) | జీవన బంధం"
    }, {
      name: "description",
      content: "తల్లిదండ్రులు తీసుకునే ప్రతి నిర్ణయం పిల్లల జీవితంలో ఒక మలుపు. విడాకులు, కుటుంబ సమస్యల వల్ల పిల్లలు ఎదుర్కొనే మానసిక వేదన మరియు తీసుకోవాల్సిన జాగ్రత్తలు."
    }, {
      name: "keywords",
      content: "child protection Telugu, divorce impact on children Telugu, parenting tips Telugu, child psychology Telugu, saving marriage for kids"
    }, {
      property: "og:title",
      content: "పిల్లల రక్షణ – నిర్ణయ సాధనం"
    }, {
      property: "og:description",
      content: "ఒక్క నిర్ణయం... ఒక జీవితాన్ని మార్చేస్తుంది. మీ నిర్ణయానికి ముందు పిల్లల మనసును అర్థం చేసుకోండి."
    }, {
      property: "og:image",
      content: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-CyhRrCaf.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "జీవన బంధం — జీవితాన్ని కాపాడే కుటుంబ సహాయ వేదిక"
    }, {
      name: "description",
      content: "కుటుంబాలు, మహిళలు, పిల్లలు, ఒంటరితనంతో బాధపడుతున్న వారికి ప్రేమతో, గౌరవంతో దారి చూపే తెలుగు వేదిక. SOS సహాయం, పిల్లల రక్షణ, విడాకుల ముందు కౌన్సెలింగ్."
    }, {
      name: "keywords",
      content: "జీవన బంధం, Jeevana Bandham, family counseling Telugu, suicide prevention, mental health Telugu, online counseling Telugu, divorce counseling"
    }, {
      property: "og:title",
      content: "జీవన బంధం — Jeevana Bandham"
    }, {
      property: "og:description",
      content: "ఒక నిర్ణయం రెండు జీవితాలను విరిచేస్తుంది. ఒక నిమిషం ఆగితే కుటుంబం కాపాడబడుతుంది."
    }, {
      property: "og:image",
      content: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "జీవన బంధం | Jeevana Bandham"
    }, {
      name: "twitter:description",
      content: "మీ జీవితం చాలా విలువైనది. ఎమర్జెన్సీ సహాయం, కౌన్సెలింగ్ కోసం ఇక్కడ క్లిక్ చేయండి."
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
    fullStory: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand-warm/10 p-6 rounded-2xl border border-brand-warm/30 mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold text-brand-primary mb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "😭" }),
        " కథ 1: ఏడుస్తున్న వధువు"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground mb-4", children: "📖 కథ (2 నిమిషాల చదవడం):" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "సీత (పేరు మార్చబడింది) వివాహం అయి 2 సంవత్సరాలు. ఆమె భర్త ఒక మంచి వ్యక్తి, కానీ అతని కుటుంబం ఆమెను ఒక ఇంటి పనిమనిషిలా చూస్తుంది. ప్రతి రోజు ఉదయం 5 గంటలకు లేచి అందరికీ వంట చేయాలి, ఇంటి పనులు చేయాలి, కానీ ఎవరూ ఆమెను గౌరవంగా చూడరు." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ఆమె భర్త తన తల్లి మాటకు ఎదురుచెప్పడు. సీతకు తన బాధను పంచుకోవడానికి ఎవరూ లేరు. ఆమె అమ్మాయిగా ఉన్న తన కలలన్నీ ఇప్పుడు కలిసిపోయినట్టు అనిపిస్తోంది." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "కానీ సీత ధైర్యంగా కౌన్సెలింగ్ తీసుకుంది. ఇప్పుడు ఆమె తన భర్తతో మాట్లాడటం నేర్చుకుంది. కుటుంబంలో తనకు కూడా గౌరవం ఉండాలని, తాను కూడా ఒక మనిషినని చెప్పింది. ఆమె స్వంతంగా ఒక చిన్న టైలరింగ్ షాపు ప్రారంభించింది. ఇప్పుడు ఆమె ఆత్మవిశ్వాసంతో ఉంది." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-950/20 p-6 rounded-2xl border border-green-200 dark:border-green-900 mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📌" }),
          " పాఠం:"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: '"మీరు ఎంతటి వారైనా, మీకు గౌరవం లేని చోట మీరు ఉండకూడదు. మీరు మార్చుకోలేని పరిస్థితిని మార్చుకోవడం నేర్చుకోండి లేదా ఆ పరిస్థితి నుండి బయటకు రండి."' })
      ] })
    ] })
  },
  {
    id: "single-mother",
    emoji: "👩‍👧",
    img: cartoonMother,
    title: "సింగిల్ మదర్",
    quote: "“నా బిడ్డ తండ్రిని మిస్ అవుతున్నాడు”",
    chips: ["Co-parenting గైడ్", "చట్టపరమైన హక్కులు"],
    fullStory: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand-warm/10 p-6 rounded-2xl border border-brand-warm/30 mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold text-brand-primary mb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "👩‍👧" }),
        " కథ 2: సింగిల్ మదర్"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground mb-4", children: "📖 కథ:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'లక్ష్మి భర్త 3 సంవత్సరాల క్రితం మరణించాడు. ఆమె ఒక 5 ఏళ్ల కూతురుతో ఒంటరిగా ఉంది. ఆమె కూతురు ప్రతి రోజు "నాన్న ఎప్పుడు వస్తారు?" అని అడుగుతుంది. ఆ ప్రశ్న లక్ష్మి గుండెను పిండేస్తుంది.' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "లక్ష్మి ఒక చిన్న టిఫిన్ సెంటర్ నడుపుతుంది. ఆమెకు ఆర్థిక ఇబ్బందులు, ఒంటరితనం, సమాజం నుండి విమర్శలు ఉన్నాయి. కానీ ఆమె తన కూతురు కోసం బతకాలని నిర్ణయించుకుంది." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ఆమె కౌన్సెలింగ్ తీసుకుని, తన కూతురితో తండ్రి గురించి అందంగా మాట్లాడటం నేర్చుకుంది. ఆమె ఇతర సింగిల్ మదర్స్ కోసం ఒక సపోర్ట్ గ్రూప్ కూడా ప్రారంభించింది." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-950/20 p-6 rounded-2xl border border-green-200 dark:border-green-900 mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📌" }),
          " పాఠం:"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: '"ఒంటరితనం ఒక శాపం కాదు, అది మిమ్మల్ని బలంగా మార్చే అవకాశం."' })
      ] })
    ] })
  },
  {
    id: "suffering-child",
    emoji: "🧒",
    img: cartoonChild,
    title: "బాధపడుతున్న పిల్లవాడు",
    quote: "“అమ్మ నాన్న ప్రతిరోజూ గొడవపడుతున్నారు”",
    chips: ["పిల్లల లేఖ", "పరిష్కార మార్గాలు"],
    fullStory: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand-warm/10 p-6 rounded-2xl border border-brand-warm/30 mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold text-brand-primary mb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🧒" }),
        " కథ 3: బాధపడుతున్న పిల్లవాడు"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground mb-4", children: "📖 కథ (విస్తరణ):" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "8 ఏళ్ల చిన్ని. ఆమెకు అమ్మా నాన్న గొడవలు భయం కలిగిస్తాయి. ఆమె ఎప్పుడూ వాళ్లు శాంతిగా ఉండాలని కోరుకుంటుంది. ఆమె చిన్ని చేతులతో తన డ్రాయింగ్ పుస్తకంలో ఇలా రాసింది:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "border-l-4 border-brand-primary pl-4 italic text-lg text-muted-foreground my-6", children: '"అమ్మా, నాన్నా... దయచేసి గొడవపడకండి. నేను మీ ఇద్దరినీ ప్రేమిస్తున్నాను."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ఆమె టీచర్ ఆ డ్రాయింగ్ చూసి, ఆమె తల్లిదండ్రులకు కౌన్సెలింగ్ సూచించారు. ఇప్పుడు ఆ కుటుంబం కౌన్సెలింగ్ తీసుకుంటోంది. వాళ్లు ఇంకా కొన్ని సమస్యలు ఉన్నా, పిల్లల ముందు గొడవ చేయడం మానేశారు." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-950/20 p-6 rounded-2xl border border-green-200 dark:border-green-900 mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📌" }),
          " పాఠం:"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: '"పిల్లలు మీ మాటలను కాదు, మీ ప్రవర్తనను చూసి నేర్చుకుంటారు."' })
      ] })
    ] })
  },
  {
    id: "divorced-woman",
    emoji: "😔",
    img: cartoonWoman,
    title: "విడాకుల తర్వాత మహిళ",
    quote: "“ఇంకెవ్వరూ నన్ను పెళ్లి చేసుకోరు”",
    chips: ["విజయకథలు", "ఆత్మవిశ్వాసం పెంచే మార్గాలు"],
    fullStory: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand-warm/10 p-6 rounded-2xl border border-brand-warm/30 mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold text-brand-primary mb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "😔" }),
        " కథ 4: విడాకుల తర్వాత మహిళ"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground mb-4", children: "📖 కథ:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'రమ్యకు 30 ఏళ్లు. 3 సంవత్సరాల క్రితం విడాకులు తీసుకుంది. ఆమెకు ఒక చిన్న కూతురు ఉంది. ఆమె తిరిగి పెళ్లి చేసుకోవడానికి ప్రయత్నించినా, ఆమె "విడాకులు తీసుకున్న మహిళ" అన్న కారణంతో చాలా మంది తిరస్కరించారు.' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'ఆమెకు ఆత్మవిశ్వాసం పూర్తిగా కోల్పోయింది. "నేను ఎవరికీ పనికిరాను" అని అనుకుంది.' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "కానీ ఆమె కౌన్సెలింగ్ తీసుకున్న తర్వాత, తనలో ఉన్న బలాన్ని గుర్తించింది. ఆమె ఒక ప్రభుత్వ ఉద్యోగం సంపాదించింది, తన కూతురుకు మంచి చదువు చెబుతోంది. ఇప్పుడు ఆమెకు పెళ్లి కంటే, తన స్వంత జీవితం ముఖ్యం అనిపిస్తోంది. ఆమె చాలా సంతోషంగా ఉంది." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-950/20 p-6 rounded-2xl border border-green-200 dark:border-green-900 mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📌" }),
          " పాఠం:"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: '"మీ విలువ మీ వివాహ స్థితిపై కాదు, మీరు ఎవరనే దానిపై ఉంటుంది."' })
      ] })
    ] })
  },
  {
    id: "single-father",
    emoji: "😞",
    img: cartoonFather,
    title: "ఒంటరి తండ్రి",
    quote: "“నా బిడ్డను చూడలేకపోతున్నాను”",
    chips: ["చట్టపరమైన మార్గాలు", "బంధం పెంచే మార్గాలు"],
    fullStory: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand-warm/10 p-6 rounded-2xl border border-brand-warm/30 mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold text-brand-primary mb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "😞" }),
        " కథ 5: ఒంటరి తండ్రి"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground mb-4", children: "📖 కథ:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "రాజు విడాకుల తర్వాత తన 6 ఏళ్ల కొడుకును చూడలేకపోతున్నాడు. కోర్టు ఆదేశాల ప్రకారం, అతను నెలకు ఒకసారి మాత్రమే తన కొడుకును చూడగలడు. అతను ప్రతి రోజు తన కొడుకు ఫోటో చూసుకుంటూ ఏడుస్తాడు." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "అతను ఒక లాయర్ సహాయంతో తన విజిటేషన్ హక్కులను పెంచుకోవడానికి ప్రయత్నించాడు. ఇప్పుడు అతను ప్రతి వారం తన కొడుకును కలుస్తున్నాడు. అతను తన కొడుకుకు మంచి తండ్రిగా ఉండటానికి ప్రయత్నిస్తున్నాడు." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-950/20 p-6 rounded-2xl border border-green-200 dark:border-green-900 mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📌" }),
          " పాఠం:"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: '"ఒక తండ్రికి తన బిడ్డతో ఉండే బంధం అతి ముఖ్యమైనది."' })
      ] })
    ] })
  },
  {
    id: "teenager",
    emoji: "😢",
    img: cartoonTeen,
    title: "టీనేజర్",
    quote: "“నాన్న నా స్కూల్ మార్చేశారు”",
    chips: ["పిల్లల హక్కులు", "సంతులనం కోసం చిట్కాలు"],
    fullStory: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand-warm/10 p-6 rounded-2xl border border-brand-warm/30 mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold text-brand-primary mb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "😢" }),
        " కథ 6: టీనేజర్"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground mb-4", children: "📖 కథ:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "14 ఏళ్ల అర్జున్. అతని తండ్రి ఉద్యోగం కారణంగా ఊరు మార్చాల్సి వచ్చింది. అతను తన స్నేహితులు, టీచర్లు, అలవాటైన స్కూల్ను వదిలిపెట్టాల్సి వచ్చింది. కొత్త స్కూల్లో అతనికి ఎవరూ తోడు లేరు. అతను చాలా ఒంటరిగా ఫీలవుతున్నాడు." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "అతను తన తండ్రితో ఈ విషయం మాట్లాడాడు. అతని తండ్రి అతని భావాలను అర్థం చేసుకుని, అతనికి ఒక కొత్త హాబీ (గిటార్ నేర్చుకోవడం) ప్రారంభించాడు. ఇప్పుడు అర్జున్ కొత్త స్నేహితులను సంపాదించుకుంటున్నాడు మరియు ఎక్కువ సంతోషంగా ఉన్నాడు." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-950/20 p-6 rounded-2xl border border-green-200 dark:border-green-900 mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📌" }),
          " పాఠం:"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: '"మీ పిల్లల భావాలను తీవ్రంగా తీసుకోండి. వారి బాధ మీకు చిన్నదిగా అనిపించినా, వారికి అది పెద్దది."' })
      ] })
    ] })
  },
  {
    id: "vasus-story",
    emoji: "💕",
    img: cartoonTeen,
    // Using teen cartoon as placeholder for Vasu, can be updated later if a specific image exists
    title: "వాసు ప్రేమకథ (పూర్తి వివరణ)",
    quote: "“నా మొదటి ప్రేమ – ఒక హాల్ టికెట్లో మొదలైన కథ”",
    chips: ["యదార్థ సంఘటన", "జీవిత పాఠం"],
    fullStory: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-brand-warm/10 p-6 rounded-2xl border border-brand-warm/30 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold text-brand-primary mb-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "💕" }),
          " కథ 7: వాసు ప్రేమకథ (పూర్తి వివరణ)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl italic font-semibold", children: '"నా మొదటి ప్రేమ – ఒక హాల్ టికెట్లో మొదలైన కథ"' })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground mb-4", children: "📖 కథ (విస్తరణ):" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ఆంధ్రప్రదేశ్‌లోని ఒక చిన్న పల్లెటూరు రామాపురం. అక్కడ ఒక చిన్న కిరాణా దుకాణం ఉంది. ఆ దుకాణంలో పనిచేసే అబ్బాయి పేరు వాసు. అతనికి అప్పుడు వయసు 12 సంవత్సరాలు. చాలా చిన్న వయసులోనే తన తండ్రిని కోల్పోయిన వాసు, అమ్మ మరియు చెల్లెలితో కలిసి జీవిస్తున్నాడు. కుటుంబ పోషణ కోసం చదువుకు అడ్డంగా దుకాణం చూసుకోవాల్సి వచ్చింది." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "అతని దుకాణానికి కాస్త దూరంలో ఒక అమ్మాయి ఉండేది. ఆమె పేరు తనకు తెలియదు కానీ ఆమె ముఖం చూస్తే చాలు, అతని రోజంతా అలా కళకళలాడేది." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ఆ అమ్మాయి ప్రతి రోజు దుకాణానికి వచ్చేది — ఏదో ఒక సామాను కోసం. కానీ వాసుకు అదే కావాల్సినంత. ఆమె చిరునవ్వు, ఆమె కళ్ళలోని మెరుపు, ఆమె జడలో పూలు — ప్రతీదీ అతనికి కవిత్వంలా అనిపించేది." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "border-l-4 border-brand-primary pl-4 italic text-lg text-muted-foreground my-4", children: '"ఆ అమ్మాయి నా దుకాణంలోకి అడుగుపెట్టిన ప్రతిసారీ, నా గుండె వేగం పెరిగిపోయేది. ఒక్క మాట మాట్లాడాలని ఎంతో అనిపించేది కానీ... మాటలే రావు."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'వారిద్దరూ ఒకే స్కూల్లో చదివేవారు. కానీ ఆమె అతని కంటే ఒక క్లాస్ ఎక్కువ చదివేది. అతను అలా చూస్తూ, కలలు కంటూ, రోజులు గడిపేస్తున్నాడు. అతని మనసులో ఆమె ఒక కలలా నిలిచిపోయింది. "ఒకవేళ ఆమె నా భార్య అయితే?" అని అతను వేలసార్లు అనుకున్నాడు. ఆమె అంటే ఇష్టం అని ఎప్పుడూ చెప్పలేకపోయాడు. ఎందుకంటే అతను ఒక చిన్న దుకాణం యజమాని, ఆమె బాగా చదువుకునే అమ్మాయి.' })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-foreground mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🌸" }),
          " కాలేజ్ రోజులు – ఒక అజ్ఞాత ప్రేమ"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ఆమె పదవ తరగతి పూర్తి చేసి, దూరంలో ఉన్న కళాశాలలో చేరింది. వాసు మనసులో ఆమె జ్ఞాపకాలు ఇంకా తాజాగా ఉన్నాయి. ఆమెను మళ్లీ చూడాలనే కోరికతో, ఒక సంవత్సరం తర్వాత అతను అదే కళాశాలలో చేరాడు." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ఆ కళాశాలలో అతను ఆమెను మళ్లీ చూశాడు. ఆమె అంతకంటే మరింత అందంగా మారింది. కానీ ఇప్పటికీ అతను ఆమెతో మాట్లాడలేకపోయాడు. అతనికి భయం — ఆమె నేను ఎవరో కూడా గుర్తుపెట్టుకోలేదేమో? ఆమె దగ్గర ఏదైనా మాట్లాడితే నా భావన బయటపడిపోతుందేమో?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ఒక సంవత్సరం పూర్తిగా ఆమెను చూస్తూ, ఆమెలోని ప్రతి కదలికనూ గమనిస్తూ, కానీ ఒక్క మాట కూడా మాట్లాడకుండా గడిపాడు. అతను ఆమెతో ఏదైనా కారణంతో మాట్లాడాలనుకున్నాడు కానీ ఎలాగో తెలియలేదు. అతని ప్రేమ అజ్ఞాతంగానే కొనసాగింది." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-foreground mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📸" }),
          " ఆ హాల్ టికెట్ – ఎప్పటికీ మర్చిపోలేని క్షణం"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ఒక రోజు, ఫైనల్ పరీక్షల సమయంలో, హాల్ టికెట్లు జారీ చేశారు. అతనికి ఆమె హాల్ టికెట్ చూడాలని ఎంతో కుతూహలం. ఒక రోజు, ఆమె టికెట్ టేబుల్ మీద పడి ఉండడం చూసాడు. అతను దానిని కాసేపు చూసి, ఆమె పేరు చదివాడు. ఆమె పేరు ఎంత అందంగా ఉందో! అతని గుండెలో ఒక సంతోషం — ఇప్పుడు ఆమె పేరు తెలుసు!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ఆ టికెట్లోని ఆమె ఫోటో అతను ఎప్పటికీ మర్చిపోలేదు. ఆ ఫోటో అతని మనసులో శాశ్వతంగా నిలిచిపోయింది. ఆ కాలంలో స్మార్ట్ ఫోన్లు లేవు, కెమెరా కూడా లేదు. అతనికి ఆమె ఫోటో తీయాలనిపించింది కానీ వీలుకాలేదు. అతను ఆ ఫోటోను తన మనసు కెమెరాలో బంధించుకున్నాడు." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "border-l-4 border-brand-primary pl-4 italic text-lg text-muted-foreground my-4", children: '"ఆ ఒక్క ఫోటోనే నేను మళ్లీ మళ్లీ చూసుకుంటూ ఉండేవాడిని. ఆ ఫోటో కన్నా అందమైనది ఈ ప్రపంచంలో ఏదీ లేదు అని అనుకునేవాడిని."' })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-foreground mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "💔" }),
          " వేరుపడటం – ఒక కల ముగింపు"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "కళాశాల పూర్తయ్యే సమయానికి, ఆమె కుటుంబం మరో ఊరికి మారిపోయింది. వాసుకు ఆమె కొత్త చిరునామా తెలియదు. అతను చాలా ప్రయత్నించాడు కానీ ఆమె జాడ దొరకలేదు." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "5 సంవత్సరాల తర్వాత, అతనికి ఆమె పెళ్లయిపోయిందని తెలిసింది. అతను చాలా బాధపడ్డాడు. అతని మనసులో ఆమె మాత్రమే. ఆమె తర్వాత ఎవరినీ అతను ప్రేమించలేదు. అతను ఆమెతో మాట్లాడకపోవడం, తన ప్రేమను వ్యక్తపరచకపోవడం తన జీవితంలో అతిపెద్ద తప్పిదం అని అతను అనుకున్నాడు." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-brand-warm/5 p-6 rounded-2xl border border-brand-warm/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-brand-primary mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🫂" }),
          " వాసు మనసులోని మాట"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic text-muted-foreground", children: `"ఆ అమ్మాయి కోసమే నా ప్రతి కల. నేను ఆమెను ఒక్కసారి కలుసుకుని, 'నువ్వంటే నాకు చాలా ఇష్టం' అని చెప్పలేకపోయాను. ఇప్పుడు ఆమె వేరొకరి భార్య. కానీ ఆమె ముఖం, ఆమె చిరునవ్వు, ఆ హాల్ టికెట్ ఫోటో... ఇవన్నీ నా గుండెలోనే ఉన్నాయి. నేను ఆమెతో జీవించలేకపోయినా, ఆమెను ప్రేమించిన జ్ఞాపకాలు మాత్రం నా జీవితాన్ని అందంగా మార్చాయి."` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-950/20 p-6 rounded-2xl border border-green-200 dark:border-green-900 mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🌟" }),
          " వాసు కథ నుండి మనం నేర్చుకోవలసిన పాఠాలు:"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 list-none text-green-900 dark:text-green-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "💬 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ప్రేమను వ్యక్తపరచండి:" }),
            " మీరు ఎవరినైనా ప్రేమిస్తే, ఆ మాట చెప్పండి. మౌనంగా ఉండడం వల్ల జీవితాంతం బాధపడాల్సి వస్తుంది."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "⏰ ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "సమయం వృథా చేయవద్దు:" }),
            " వేరే వారికోసం ఎదురుచూస్తూ మీ జీవితాన్ని ఆపుకోకండి."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "🤗 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "నిరాశను అంగీకరించండి:" }),
            " మీ ప్రేమ విఫలమైతే, అది మీ విలువను తగ్గించదు."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "🌱 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ముందుకు సాగండి:" }),
            " మీ జీవితం అంతా ఒక వ్యక్తి మీద ఆధారపడి ఉండదు. మీరు ప్రేమించిన జ్ఞాపకాలు ఎప్పటికీ మీతోనే ఉంటాయి."
          ] })
        ] })
      ] })
    ] })
  }
];
const $$splitComponentImporter = () => import("../_storyId-DvauRIxe.mjs");
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
const VasusStoryRoute = Route$6.update({
  id: "/vasus-story",
  path: "/vasus-story",
  getParentRoute: () => Route$7
});
const SupportRoute = Route$5.update({
  id: "/support",
  path: "/support",
  getParentRoute: () => Route$7
});
const SitemapDotxmlRoute = Route$4.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$7
});
const PreMarriageRoute = Route$3.update({
  id: "/pre-marriage",
  path: "/pre-marriage",
  getParentRoute: () => Route$7
});
const ChildProtectionRoute = Route$2.update({
  id: "/child-protection",
  path: "/child-protection",
  getParentRoute: () => Route$7
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const StoriesStoryIdRoute = Route.update({
  id: "/stories/$storyId",
  path: "/stories/$storyId",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  ChildProtectionRoute,
  PreMarriageRoute,
  SitemapDotxmlRoute,
  SupportRoute,
  VasusStoryRoute,
  StoriesStoryIdRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
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
