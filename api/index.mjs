import { Readable } from "node:stream";

let serverPromise;
function loadServer() {
  if (!serverPromise) {
    serverPromise = import("../dist/server/server.js").then((m) => m.default);
  }
  return serverPromise;
}

export default async function handler(req, res) {
  try {
    const server = await loadServer();

    const protocol = req.headers["x-forwarded-proto"] ?? "https";
    const host =
      req.headers["x-forwarded-host"] ?? req.headers.host ?? "localhost";
    const url = new URL(req.url ?? "/", `${protocol}://${host}`);

    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (Array.isArray(value)) {
        for (const v of value) headers.append(key, v);
      } else if (value != null) {
        headers.set(key, value);
      }
    }

    const hasBody = req.method && req.method !== "GET" && req.method !== "HEAD";
    const init = {
      method: req.method,
      headers,
      body: hasBody ? Readable.toWeb(req) : undefined,
      duplex: hasBody ? "half" : undefined,
    };

    const response = await server.fetch(new Request(url, init));

    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));

    if (response.body) {
      Readable.fromWeb(response.body).pipe(res);
    } else {
      res.end();
    }
  } catch (err) {
    console.error("[ssr handler]", err);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.end(
      `SSR handler error\n\n${err?.name}: ${err?.message}\n\n${err?.stack ?? ""}`,
    );
  }
}
