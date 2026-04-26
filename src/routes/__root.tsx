import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { FloatingNav } from "@/components/site/FloatingNav";
import { Footer } from "@/components/site/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gradient-warm">404</h1>
        <h2 className="mt-4 font-display text-2xl">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          That slice slipped off the table. Let's get you back home.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">Return home</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Crust & Co — Wood-fired Pizza, Smash Burgers & Sandwiches" },
      {
        name: "description",
        content:
          "Crust & Co serves wood-fired pizza, smash burgers and pressed sandwiches in Brooklyn. Order pickup, delivery or grab a table — open daily.",
      },
      { name: "author", content: "Crust & Co" },
      { property: "og:title", content: "Crust & Co — Pizza · Burgers · Sandwiches" },
      {
        property: "og:description",
        content: "Wood-fired pizza, smash burgers and pressed sandwiches in Brooklyn.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
