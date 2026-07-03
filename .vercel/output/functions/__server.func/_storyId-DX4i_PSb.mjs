import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { R as Route } from "./_ssr/router-B9FZA0Qn.mjs";
import { A as ArrowLeft, M as MessageCircleHeart } from "./_libs/lucide-react.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
function StoryComponent() {
  const {
    story
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-brand-warm/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 py-4 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "p-2 -ml-2 rounded-full hover:bg-brand-warm/10 transition-colors text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-lg text-brand-primary", children: "కార్టూన్ ఎమోషన్ స్టోర్" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "max-w-3xl mx-auto px-6 py-12 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl drop-shadow-md mb-6 inline-block", children: story.emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-5xl font-bold mb-4", children: story.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl md:text-2xl text-muted-foreground italic font-medium", children: story.quote })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[2rem] overflow-hidden shadow-warm mb-12 border-4 border-brand-warm/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: story.img, alt: story.title, className: "w-full h-auto object-cover aspect-video" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-lg prose-stone dark:prose-invert max-w-none mb-12 prose-p:leading-relaxed prose-headings:font-display", children: story.fullStory }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-brand-warm/10 rounded-3xl p-8 text-center border border-brand-warm/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold mb-3", children: "మీరు కూడా ఇలాంటి పరిస్థితిలో ఉన్నారా?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "మాతో మాట్లాడండి. మేము వింటాము. ఎవరికీ తెలియకుండా కౌన్సెలింగ్ పొందండి." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "bg-brand-primary text-primary-foreground px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 shadow-warm hover:scale-105 transition-transform", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircleHeart, { className: "size-5" }),
            "అజ్ఞాతంగా మాట్లాడండి"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "px-6 py-3 rounded-full font-bold border-2 border-brand-warm/30 hover:bg-brand-warm/10 transition-colors", children: "మరిన్ని కథలు చూడండి" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  StoryComponent as component
};
