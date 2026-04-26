import { createRouter } from "@tanstack/react-router";

export async function handleRequest(request: Request) {
  // Get the pathname from the request URL
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Don't rewrite API calls or static assets
  if (pathname.startsWith("/api/") || /\.[^/]+$/.test(pathname)) {
    return null; // Let the default handler take over
  }

  // For all other routes, this will be handled by the SPA router
  return null;
}
