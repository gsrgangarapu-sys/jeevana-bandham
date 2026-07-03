import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as ArrowLeft, H as Heart, I as Info, C as CircleCheck, M as MessageCircleHeart } from "../_libs/lucide-react.mjs";
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
function PreMarriageComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-brand-warm/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 py-4 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "p-2 -ml-2 rounded-full hover:bg-brand-warm/10 transition-colors text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-lg text-brand-primary", children: "ప్రీ-మ్యారేజ్ గైడ్ (పూర్తి విభాగం)" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "max-w-4xl mx-auto px-6 py-12 md:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block p-4 bg-brand-warm/15 rounded-3xl text-brand-primary mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-12" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-5xl font-bold mb-4", children: "జీవన బంధం – పూర్తి విస్తరణ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "వివాహం అనేది ఇద్దరు వ్యక్తుల కలయిక మాత్రమే కాదు — ఇది రెండు కుటుంబాల, రెండు ఆత్మల కలయిక. పెళ్లికి ముందు ఈ విషయాలను తప్పక చర్చించుకోండి." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-display font-bold mb-8 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📋" }),
          " వివాహానికి ముందు తప్పక చేయవలసిన 10 తనిఖీలు"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: checks.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6 md:p-8 rounded-3xl border border-brand-warm/20 shadow-sm hover:shadow-warm transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: item.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-foreground m-0", children: [
              i + 1,
              ". ",
              item.title
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-brand-warm/5 p-6 rounded-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-brand-primary mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "size-4" }),
                " ఏమి చూడాలి:"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 list-disc pl-5 text-muted-foreground", children: item.whatToLook.map((point, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: point }, j)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-brand-ink/5 dark:bg-brand-ink/40 p-6 rounded-2xl border border-brand-ink/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-foreground mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-green-600" }),
                " ఎలా తెలుసుకోవాలి:"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 list-disc pl-5 text-muted-foreground", children: item.howToKnow.map((point, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: point }, j)) })
            ] })
          ] }),
          item.note && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-4 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-xl text-sm font-medium flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg leading-none", children: "⚠️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.note })
          ] })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-display font-bold mb-8 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📝" }),
          " ప్రీ-మ్యారేజ్ చెక్లిస్ట్ (ఫుల్ వెర్షన్)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-brand-warm/10 p-6 md:p-8 rounded-3xl border border-brand-warm/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold mb-6 flex items-center gap-2 text-brand-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "👩" }),
              " అమ్మాయి తనిఖీ చేయవలసినవి"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b-2 border-brand-warm/30 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 font-semibold", children: "విషయం" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 font-semibold text-center w-16", children: "సరే" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 font-semibold text-center w-16", children: "కాదు" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-brand-warm/10", children: girlChecklist.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-brand-warm/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 pr-4", children: item }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "size-5 accent-brand-primary cursor-pointer" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "size-5 accent-red-500 cursor-pointer" }) })
              ] }, i)) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-brand-ink/5 dark:bg-brand-ink/40 p-6 md:p-8 rounded-3xl border border-brand-ink/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold mb-6 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "👦" }),
              " అబ్బాయి తనిఖీ చేయవలసినవి"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b-2 border-brand-ink/20 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 font-semibold", children: "విషయం" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 font-semibold text-center w-16", children: "సరే" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 font-semibold text-center w-16", children: "కాదు" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-brand-ink/10", children: boyChecklist.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-brand-ink/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 pr-4", children: item }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "size-5 accent-brand-primary cursor-pointer" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "size-5 accent-red-500 cursor-pointer" }) })
              ] }, i)) })
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-display font-bold mb-8 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "❓" }),
          " ప్రీ-మ్యారేజ్ Q&A – పూర్తి జాబితా"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-8 rounded-3xl border border-brand-warm/20 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-6 text-brand-primary", children: "Q1: వివాహానికి ముందు ఏమేమి అడగాలి?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium mb-8", children: "A: ఈ 25 ప్రశ్నలు తప్పక అడగండి:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-x-8 gap-y-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xl mb-4 bg-brand-warm/15 inline-block px-4 py-1 rounded-full text-brand-primary", children: "వ్యక్తిగతం:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 list-disc pl-5 text-muted-foreground marker:text-brand-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "మీకు ఏమి ఇష్టం? ఏమి ఇష్టం లేదు?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "మీ బలహీనతలు ఏమిటి?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "మీరు ఒంటరిగా ఉన్నప్పుడు ఏమి చేస్తారు?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "మీకు కోపం వచ్చినప్పుడు ఎలా ఉంటారు?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "మీరు ఇతరులతో ఎలా ప్రవర్తిస్తారు?" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xl mb-4 bg-brand-warm/15 inline-block px-4 py-1 rounded-full text-brand-primary", children: "కుటుంబం:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 list-disc pl-5 text-muted-foreground marker:text-brand-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "మీ తల్లిదండ్రులతో మీ సంబంధం ఎలా ఉంది?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "మీరు మీ కుటుంబానికి ఎంత సమయం ఇస్తారు?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "వివాహం తర్వాత మీరు మీ కుటుంబాన్ని ఎలా చూసుకుంటారు?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "మీరు పిల్లలు కావాలనుకుంటున్నారా? ఎప్పుడు?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "మీ కుటుంబంలో ఏ బాధ్యతలు మీరు తీసుకుంటారు?" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xl mb-4 bg-brand-warm/15 inline-block px-4 py-1 rounded-full text-brand-primary", children: "ఆర్థికం:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 list-disc pl-5 text-muted-foreground marker:text-brand-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "మీ ప్రస్తుత ఆదాయం ఎంత?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "మీకు అప్పులు ఉన్నాయా?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "మీరు ఎలా పొదుపు చేస్తారు?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "ఆర్థిక నిర్వహణ ఎలా చేస్తారు?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "భవిష్యత్తులో ఇల్లు, కారు కొనాలనుకుంటున్నారా?" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xl mb-4 bg-brand-warm/15 inline-block px-4 py-1 rounded-full text-brand-primary", children: "భవిష్యత్తు:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 list-disc pl-5 text-muted-foreground marker:text-brand-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "5 సంవత్సరాల తర్వాత మీరు ఎక్కడ ఉండాలనుకుంటున్నారు?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "మీ కెరీర్ లక్ష్యాలు ఏమిటి?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "మీరు ప్రయాణం చేయాలనుకుంటున్నారా?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "వృద్ధాప్యంలో ఎక్కడ ఉండాలనుకుంటున్నారు?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "మీకు ఏ భయాలు ఉన్నాయి?" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 bg-brand-warm/5 p-6 rounded-2xl border border-brand-warm/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-xl mb-4 text-brand-primary flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-5" }),
                " సంబంధం:"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 list-disc pl-5 text-muted-foreground marker:text-brand-primary", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "మీరు సమస్యలను ఎలా పరిష్కరిస్తారు?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "మీరు ఒకరి మాట ఒకరు వింటారా?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "మీరు ఒకరికి ఒకరు ఎంత సమయం ఇవ్వాలనుకుంటున్నారు?" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 list-disc pl-5 text-muted-foreground marker:text-brand-primary", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "మీరు గౌరవాన్ని ఎలా చూపిస్తారు?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "మీరు ఈ సంబంధం నుండి ఏమి ఆశిస్తున్నారు?" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 space-y-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-brand-warm/20 pt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4 text-brand-primary", children: "Q2: అమ్మాయి లేదా అబ్బాయి నేపథ్యాన్ని ఎలా పరిశీలించాలి?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-muted-foreground list-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "👨‍👩‍👧‍👦 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "కుటుంబం:" }),
                  " ఇద్దరి కుటుంబాల సభ్యులు, వారి ప్రవర్తన, ఆర్థిక స్థితి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "🎓 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "విద్య:" }),
                  " అసలు విద్యార్హతలు, డిగ్రీలు, ఉద్యోగ వివరాలు"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "🏥 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ఆరోగ్యం:" }),
                  " వంశపారంపర్య వ్యాధులు, ఆరోగ్య పరిస్థితి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "💼 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ఉద్యోగం:" }),
                  " ఉద్యోగ స్థిరత్వం, భవిష్యత్తు అవకాశాలు"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "💰 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ఆర్థికం:" }),
                  " అప్పులు, ఆదాయం, పొదుపు అలవాట్లు"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "🤝 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "సామాజికం:" }),
                  " స్నేహితులు, సంఘంలో గౌరవం, అలవాట్లు"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "📱 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "డిజిటల్ పాదముద్ర:" }),
                  " సోషల్ మీడియా ప్రవర్తన"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-brand-warm/20 pt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4 text-brand-primary", children: 'Q3: ఒకరు "కాదు" అంటే, మరొకరు "అవును" అంటే ఏం చేయాలి?' }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-muted-foreground list-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "❌ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "బలవంతం చేయవద్దు:" }),
                  " ఎవరి ఇష్టాయిష్టాలను గౌరవించండి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "🤝 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "స్నేహంగా వీడ్కోలు:" }),
                  ' "అవును" అన్న వ్యక్తికి ఇంకొక సంబంధం చూడండి'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "💬 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "కారణం అడగవద్దు:" }),
                  " అవతలి వ్యక్తి కారణం చెప్పాలనుకుంటే చెప్పవచ్చు"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "🙏 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "గౌరవంగా తిరస్కరించండి:" }),
                  ' "నాకు ఈ సంబంధంలో ఇబ్బంది ఉంది, క్షమించండి" అని చెప్పండి'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "❤️ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "భవిష్యత్తులో స్నేహంగా ఉండండి:" }),
                  " అవకాశం ఉంటే స్నేహితులుగా కొనసాగవచ్చు"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-brand-warm/20 pt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4 text-brand-primary", children: "Q4: ఏదైనా లవ్ ఫెయిల్యూర్ తర్వాత మళ్లీ ప్రేమించడం ఎలా?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-muted-foreground list-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "💔 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "గతాన్ని అంగీకరించండి:" }),
                  " ప్రతి విఫల సంబంధం ఒక పాఠం"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "⏳ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "సమయం ఇవ్వండి:" }),
                  " తొందరపడి కొత్త సంబంధంలోకి రాకండి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "💪 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ఆత్మవిశ్వాసం పెంచుకోండి:" }),
                  " మీరు ఒక విఫల సంబంధంతో ముగిసిపోలేదు"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "🤗 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "కొత్త వ్యక్తులను కలవండి:" }),
                  " ఫ్రెండ్స్, కౌన్సెలర్, కుటుంబ సభ్యులతో మాట్లాడండి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "❤️ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "మళ్లీ ప్రేమించడానికి భయపడకండి:" }),
                  " ప్రతి కొత్త అవకాశం ఒక కొత్త మొదలు"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-brand-warm/20 pt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4 text-brand-primary", children: "Q5: పెళ్లి కోసం ఎంత సమయం తీసుకోవాలి?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-muted-foreground list-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "⏳ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "కనీసం 3-6 నెలలు:" }),
                  " ఇద్దరూ ఒకరినొకరు బాగా తెలుసుకోవడానికి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "📅 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ఆరు నెలల కంటే ఎక్కువ ఉత్తమం:" }),
                  " వారి వ్యక్తిత్వం, అలవాట్లు, భవిష్యత్తు ప్రణాళికలు తెలుసుకోవడానికి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "❌ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ఒక్క రోజు లోపు నిర్ణయం తీసుకోవద్దు:" }),
                  " ఇది పెద్ద నిర్ణయం"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "🤝 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ఇద్దరి కుటుంబాలు కలిసే వరకు వేచి ఉండండి:" }),
                  " కుటుంబాల అభిప్రాయం కూడా ముఖ్యం"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-brand-warm/20 pt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4 text-brand-primary", children: "Q6: మ్యాచ్‌లో గర్ల్/బాయ్ ఇష్టం లేకపోతే ఏం చేయాలి?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-muted-foreground list-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "🗣️ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "బహిరంగంగా చెప్పండి:" }),
                  ' "నాకు ఇష్టం లేదు" అని గౌరవంగా చెప్పండి'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "🙅 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "అవును అని అబద్ధం చెప్పకండి:" }),
                  " అది తర్వాత ఇద్దరికీ బాధ కలిగిస్తుంది"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "⏳ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "తొందరపడవద్దు:" }),
                  " కొంత సమయం తీసుకుని, మళ్లీ ఆలోచించండి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "💬 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "కారణం చెప్పాల్సిన అవసరం లేదు:" }),
                  " కానీ చెప్పగలిగితే నొప్పి తగ్గుతుంది"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "🤗 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ఇద్దరి భావాలకు గౌరవం:" }),
                  ' "నేను అర్థం చేసుకున్నాను, కానీ నాకు సరిపడడం లేదు"'
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-brand-warm/20 pt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4 text-brand-primary", children: "Q7: వివాహానికి ముందు కౌన్సెలింగ్ అవసరమా?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-muted-foreground list-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "✅ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "అవసరం:" }),
                  " ప్రీ-మారిటల్ కౌన్సెలింగ్ ఇద్దరి మధ్య అర్థం చేసుకునే శక్తిని పెంచుతుంది"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "💬 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "సమస్యల గుర్తింపు:" }),
                  " ఇప్పటికే ఉన్న సమస్యలను గుర్తించవచ్చు"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "🤝 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "కమ్యూనికేషన్ నేర్పు:" }),
                  " ఎలా మాట్లాడాలో, ఎలా వినాలో నేర్పుతుంది"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "❤️ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "సంబంధం బలపడుతుంది:" }),
                  " ఒకరినొకరు బాగా అర్థం చేసుకుంటారు"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "🏡 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "కుటుంబం స్థిరంగా ఉంటుంది:" }),
                  " భవిష్యత్తులో విభేదాలు తగ్గుతాయి"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-brand-warm/20 pt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4 text-brand-primary", children: "Q8: వివాహానికి ముందు ఏ డాక్యుమెంట్లు చూడాలి?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-muted-foreground list-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "📄 విద్యార్హతల సర్టిఫికెట్లు" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "🏢 ఉద్యోగ ప్రూఫ్ (ఆఫర్ లెటర్, సాలరీ స్లిప్)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "🏦 బ్యాంక్ స్టేట్మెంట్లు (ఐచ్ఛికం)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "🏠 ఆస్తి పత్రాలు (ఐచ్ఛికం)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "🩺 మెడికల్ రికార్డ్స్ (ఐచ్ఛికం)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "🆔 ఆధార్, పాన్ కార్డ్ (గుర్తింపు కోసం)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-brand-warm/20 pt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4 text-brand-primary", children: "Q9: పెళ్లి తర్వాత భార్యాభర్తల మధ్య సమస్యలు వస్తే?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-muted-foreground list-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "💬 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "మొదట మాట్లాడుకోండి:" }),
                  " ఒకరి భావాలను మరొకరు వినండి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "🧘 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "శాంతంగా ఉండండి:" }),
                  " కోపంగా ఉన్నప్పుడు నిర్ణయాలు తీసుకోకండి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "🤝 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "కౌన్సెలింగ్ తీసుకోండి:" }),
                  " మూడవ వ్యక్తి సహాయం తీసుకోండి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "⏳ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "సమయం ఇవ్వండి:" }),
                  " సమస్యలు ఒక్క రోజులో పరిష్కారం కావు"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "❤️ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ప్రేమను గుర్తు చేసుకోండి:" }),
                  " మీరు ఎందుకు కలిసారో గుర్తు చేసుకోండి"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-brand-warm/20 pt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4 text-brand-primary", children: "Q10: వివాహం ఎప్పుడు చేయకూడదు?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-muted-foreground list-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "❌ తొందరపడి: తెలియని వ్యక్తితో" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "❌ బలవంతంగా: కుటుంబం లేదా సమాజం ఒత్తిడితో" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "❌ ఆర్థికంగా అస్థిరంగా ఉన్నప్పుడు" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "❌ ఇద్దరి మధ్య అవగాహన లేనప్పుడు" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "❌ ఒకరి గురించి ఏదైనా అనుమానం ఉన్నప్పుడు" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "❌ మానసికంగా సిద్ధంగా లేనప్పుడు" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-brand-warm/20 pt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4 text-brand-primary", children: "Q11: లవ్ మ్యారేజ్ vs అరేంజ్డ్ మ్యారేజ్ – ఏది మంచిది?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-muted-foreground list-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "💕 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "లవ్ మ్యారేజ్:" }),
                  " మీరు ఆ వ్యక్తిని బాగా తెలుసు, కానీ కుటుంబాల మధ్య అవగాహన లేకపోవచ్చు"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "🤝 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "అరేంజ్డ్ మ్యారేజ్:" }),
                  " కుటుంబాలు కలిసి ఉంటాయి, కానీ ఇద్దరి మధ్య అవగాహన తక్కువగా ఉండవచ్చు"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "✅ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "మంచిది:" }),
                  " ఇద్దరూ ఒకరినొకరు బాగా తెలుసుకోవడం, కుటుంబాల అంగీకారం ఉండటం"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "⚖️ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "సమతుల్యం:" }),
                  " లవ్ + కుటుంబ అంగీకారం = ఆదర్శవంతమైన వివాహం"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-brand-warm/20 pt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4 text-brand-primary", children: "Q12: పెళ్లి తర్వాత కెరీర్ ఎలా కొనసాగించాలి?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-muted-foreground list-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "💼 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ఇద్దరి కెరీర్‌లకు ప్రాధాన్యం:" }),
                  " ఇద్దరి ఉద్యోగాలు, కలలు ముఖ్యమే"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "🏠 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "బాధ్యతలు పంచుకోండి:" }),
                  " ఇంటి పనులు, పిల్లల సంరక్షణ ఇద్దరూ పంచుకోండి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "📅 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "సమయం కేటాయించండి:" }),
                  " కెరీర్ మరియు కుటుంబం రెండింటికీ సమయం ఇవ్వండి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "💬 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ఓపెన్ కమ్యూనికేషన్:" }),
                  " మీ కెరీర్ ఆశయాల గురించి భర్త/భార్యకు చెప్పండి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "🤝 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "మద్దతు:" }),
                  " ఒకరి కెరీర్‌కి మరొకరు మద్దతు ఇవ్వండి"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-brand-warm/20 pt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4 text-brand-primary", children: "Q13: పిల్లలు ఎప్పుడు ప్లాన్ చేయాలి?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-muted-foreground list-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "⏳ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "కనీసం 2-3 సంవత్సరాలు వేచి ఉండండి:" }),
                  " ఇద్దరూ ఒకరినొకరు బాగా తెలుసుకోవడానికి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "💰 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ఆర్థికంగా సిద్ధంగా ఉండండి:" }),
                  " పిల్లల పెంపకం ఖర్చులు ప్లాన్ చేయండి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "❤️ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "మానసికంగా సిద్ధంగా ఉండండి:" }),
                  " పిల్లల కోసం సమయం, శక్తి ఉండాలి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "👨‍👩‍👧 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ఇద్దరి అభిప్రాయం:" }),
                  " పిల్లలు కావాలా లేదా అనేది ఇద్దరూ కలిసి నిర్ణయించుకోండి"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-brand-warm/20 pt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4 text-brand-primary", children: "Q14: వివాహంలో ఆర్థిక నిర్వహణ ఎలా చేయాలి?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-muted-foreground list-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "💰 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "జాయింట్ అకౌంట్:" }),
                  " ఇద్దరి పేరిట బ్యాంక్ అకౌంట్"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "📊 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "నెలవారీ బడ్జెట్:" }),
                  " ఆదాయం, ఖర్చులు ప్లాన్ చేయండి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "💳 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "అప్పులు నివారించండి:" }),
                  " అనవసర అప్పులు చేయకండి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "💵 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "అత్యవసర నిధి:" }),
                  " కనీసం 6 నెలల ఖర్చులకు నిధి ఉంచండి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "📈 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "పెట్టుబడులు:" }),
                  " భవిష్యత్తు కోసం ప్లాన్ చేయండి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "🤝 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ఇద్దరి భాగస్వామ్యం:" }),
                  " ఆర్థిక నిర్ణయాలు ఇద్దరూ కలిసి తీసుకోండి"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-brand-warm/20 pt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4 text-brand-primary", children: "Q15: వివాహంలో విభేదాలు వస్తే ఎలా పరిష్కరించాలి?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-muted-foreground list-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "🧘 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "శాంతంగా ఉండండి:" }),
                  " కోపం తగ్గేవరకు వేచి ఉండండి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "💬 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "మాట్లాడండి:" }),
                  " మీ సమస్య ఏమిటో స్పష్టంగా చెప్పండి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "🤝 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "సమరస భావం:" }),
                  " ఎవరి తప్పు వారే ఒప్పుకోండి"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "❤️ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "క్షమించండి:" }),
                  " తప్పులను మనసులో పెట్టుకోకండి"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8 bg-brand-warm/5 rounded-3xl border-2 border-brand-warm/20 border-dashed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "మరిన్ని సందేహాలు ఉన్నాయా?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "మా నిపుణులతో అజ్ఞాతంగా మాట్లాడండి మరియు సరైన మార్గదర్శకత్వం పొందండి." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/support", className: "bg-brand-primary text-primary-foreground px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 w-fit mx-auto hover:scale-105 transition-transform shadow-warm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircleHeart, { className: "size-5" }),
          "అజ్ఞాత కౌన్సెలింగ్ తీసుకోండి"
        ] })
      ] })
    ] })
  ] });
}
const checks = [{
  icon: "💑",
  title: "ఇద్దరి ఆలోచనా విధానం",
  whatToLook: ["జీవితంపై దృష్టి (ఆశావాదమా? నిరాశావాదమా?)", "భవిష్యత్తు ప్రణాళికలు (కలిసి ఉండాలనుకుంటున్నారా?)", "కుటుంబం పట్ల అభిప్రాయం (ఎంత బాధ్యత తీసుకుంటారు?)"],
  howToKnow: ["అనేక సార్లు మాట్లాడండి", "వారి పాత స్నేహితులతో మాట్లాడండి", "వారు ఎలాంటి పుస్తకాలు చదువుతారో, ఎలాంటి సినిమాలు చూస్తారో చూడండి"]
}, {
  icon: "👨‍👩‍👧‍👦",
  title: "కుటుంబ నేపథ్యం",
  whatToLook: ["తల్లిదండ్రుల సంబంధం ఎలా ఉంది?", "తోబుట్టువులు ఎలా ఉన్నారు?", "కుటుంబంలో గౌరవం, ప్రేమ ఉందా?", "కుటుంబ ఆర్థిక స్థితి ఎలా ఉంది?"],
  howToKnow: ["వారి ఇంటికి వెళ్లి చూడండి", "వారి తల్లిదండ్రులతో మాట్లాడండి", "కుటుంబ సభ్యుల ప్రవర్తనను గమనించండి"]
}, {
  icon: "💰",
  title: "ఆర్థిక పరిస్థితి",
  whatToLook: ["నెలవారీ ఆదాయం ఎంత?", "అప్పులు ఉన్నాయా?", "పొదుపు అలవాట్లు ఎలా ఉన్నాయి?", "ఖర్చు చేసే విధానం ఎలా ఉంది?", "బ్యాంక్ బ్యాలెన్స్, పెట్టుబడులు ఎలా ఉన్నాయి?"],
  howToKnow: ["నేరుగా అడగండి (ఇది ముఖ్యమైన విషయం)", "వారి ఉద్యోగ భవిష్యత్తు గురించి తెలుసుకోండి", "కుటుంబ ఆస్తుల గురించి అడగండి"],
  note: "గమనిక: ఆర్థిక విషయాలు సున్నితమైనవి. గౌరవంగా, జాగ్రత్తగా అడగండి."
}, {
  icon: "🎓",
  title: "విద్య & ఉద్యోగం",
  whatToLook: ["అసలు విద్యార్హతలు ఏమిటి?", "ప్రస్తుత ఉద్యోగం ఏమిటి?", "భవిష్యత్తులో కెరీర్ లక్ష్యాలు ఏమిటి?", "ఉద్యోగంలో స్థిరత్వం ఉందా?"],
  howToKnow: ["వారి డిగ్రీ సర్టిఫికెట్లు చూడండి", "వారి కంపెనీ గురించి తెలుసుకోండి", "వారి కెరీర్ ప్లాన్ గురించి అడగండి"]
}, {
  icon: "🏠",
  title: "నివాస ప్రణాళిక",
  whatToLook: ["వివాహం తర్వాత ఎక్కడ ఉండాలనుకుంటున్నారు?", "వారి కుటుంబంతోనా? ప్రత్యేకంగానా?", "ఇంటి ఖర్చులు ఎలా పంచుకుంటారు?", "భవిష్యత్తులో ఇల్లు కొనాలనుకుంటున్నారా?"],
  howToKnow: ["ఇది నేరుగా చర్చించండి", "ఇద్దరి కుటుంబాల అభిప్రాయం తీసుకోండి", "అందుబాటులో ఉన్న ఎంపికల గురించి మాట్లాడండి"]
}, {
  icon: "👶",
  title: "పిల్లల ప్రణాళిక",
  whatToLook: ["పిల్లలు కావాలనుకుంటున్నారా? ఎప్పుడు?", "ఎంత మంది పిల్లలు కావాలి?", "పిల్లల పెంపకం గురించి వారి ఆలోచనలు ఏమిటి?", "పిల్లల విద్య కోసం ఏర్పాట్లు ఉన్నాయా?"],
  howToKnow: ["ఓపెన్ గా మాట్లాడండి", "మీ ఆశలు, అంచనాలు చెప్పండి", "ఒకరి అభిప్రాయాలను గౌరవించండి"]
}, {
  icon: "🙏",
  title: "ఆధ్యాత్మిక & నైతిక విలువలు",
  whatToLook: ["వారి మతం, విశ్వాసాలు ఏమిటి?", "ప్రార్థన, ఆచారాలు పాటిస్తారా?", "నైతిక విలువలు ఏమిటి?", "నిజాయితీ, నమ్మకం ఎలా ఉన్నాయి?"],
  howToKnow: ["వారి రోజువారీ అలవాట్లను గమనించండి", "వారి పెద్దలు, స్నేహితులు ఏం అంటారో తెలుసుకోండి", "కష్టమైన సమయంలో వారు ఎలా ప్రవర్తిస్తారో గమనించండి"]
}, {
  icon: "💬",
  title: "కమ్యూనికేషన్ స్టైల్",
  whatToLook: ["కోపం వచ్చినప్పుడు ఎలా ప్రవర్తిస్తారు?", "సమస్యలను ఎలా పరిష్కరిస్తారు?", "ఇతరుల మాట వింటారా?", "గౌరవంగా మాట్లాడతారా?"],
  howToKnow: ["వారు ఇతరులతో ఎలా మాట్లాడతారో గమనించండి", "ఒక చిన్న విభేదం వచ్చినప్పుడు ఎలా ప్రవర్తిస్తారో చూడండి", "వారు మీ మాట వింటున్నారా లేదా అని గమనించండి"]
}, {
  icon: "🤝",
  title: "సామాజిక జీవితం",
  whatToLook: ["స్నేహితులు ఎలా ఉన్నారు?", "సోషల్ మీడియా ఎలా వాడతారు?", "సమయం ఎలా గడుపుతారు?", "హాబీలు, ఆసక్తులు ఏమిటి?"],
  howToKnow: ["వారి స్నేహితులను కలవండి", "వారి సోషల్ మీడియా ప్రొఫైల్స్ చూడండి", "వారు ఖాళీ సమయంలో ఏమి చేస్తారో అడగండి"]
}, {
  icon: "❤️",
  title: "ఇద్దరి మధ్య అనుబంధం",
  whatToLook: ["ఒకరి పట్ల ఒకరికి అర్థం చేసుకునే శక్తి ఉందా?", "ఒకరి భావాలను మరొకరు గౌరవిస్తారా?", "సమస్యల్లో కలిసి నిలబడతారా?", "భవిష్యత్తు కలలు ఒకేలా ఉన్నాయా?"],
  howToKnow: ["చాలా సమయం కలిసి గడపండి", "వివిధ సందర్భాల్లో వారి ప్రవర్తన గమనించండి", "మీ భావాలను బహిరంగంగా పంచుకోండి"]
}];
const girlChecklist = ["అబ్బాయి విద్యార్హతలు", "అబ్బాయి ఉద్యోగం & ఆదాయం", "అబ్బాయి కుటుంబ నేపథ్యం", "అబ్బాయి వ్యక్తిత్వం", "అబ్బాయి అలవాట్లు (మద్యం, ధూమపానం)", "అబ్బాయి కోపం & ప్రవర్తన", "అబ్బాయి ఆర్థిక పరిస్థితి", "అబ్బాయి కుటుంబంలో గౌరవం", "అబ్బాయి భవిష్యత్తు ప్రణాళికలు", "అబ్బాయి ఆధ్యాత్మిక విలువలు"];
const boyChecklist = ["అమ్మాయి విద్యార్హతలు", "అమ్మాయి ఉద్యోగం / కెరీర్", "అమ్మాయి కుటుంబ నేపథ్యం", "అమ్మాయి వ్యక్తిత్వం", "అమ్మాయి అలవాట్లు", "అమ్మాయి కోపం & ప్రవర్తన", "అమ్మాయి ఆర్థిక పరిస్థితి", "అమ్మాయి కుటుంబంలో గౌరవం", "అమ్మాయి భవిష్యత్తు ఆశయాలు", "అమ్మాయి ఆధ్యాత్మిక విలువలు"];
export {
  PreMarriageComponent as component
};
