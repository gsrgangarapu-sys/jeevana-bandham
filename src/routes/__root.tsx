import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "జీవన బంధం — Jeevana Bandham | కుటుంబ సహాయ వేదిక (Family Support Platform)" },
      {
        name: "description",
        content:
          "జీవన బంధం (Jeevana Bandham) అనేది జీవితాన్ని కాపాడే తెలుగు కుటుంబ సహాయ వేదిక. SOS సహాయం, పిల్లల రక్షణ, మహిళల హక్కులు, విడాకుల ముందు కౌన్సెలింగ్, ఆత్మహత్య నివారణ (Suicide Prevention) కోసం ఒక స్ఫూర్తిదాయక వెబ్‌సైట్.",
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
        content:
          "ఒక నిర్ణయం రెండు జీవితాలను విరిచేస్తుంది. ఒక నిమిషం ఆగితే కుటుంబం కాపాడబడుతుంది. ఎమర్జెన్సీ సహాయం, కౌన్సెలింగ్ మరియు మార్గదర్శకం కోసం మమ్మల్ని సంప్రదించండి.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "జీవన బంధం | Jeevana Bandham" },
      { name: "twitter:description", content: "కుటుంబ సమస్యలు, మానసిక ఒత్తిడికి పరిష్కారం చూపే ఆశాజ్యోతి. ఇప్పుడే సహాయం పొందండి." },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80" },
    ],
    links: [
      { rel: "icon", href: "https://i.ibb.co/nNy5WSYw/home.png", type: "image/png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@300;400;500;600;700&family=Noto+Serif+Telugu:wght@400;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
