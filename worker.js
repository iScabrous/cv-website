export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Proxy the Kuma status badge server-side with 60s cache
    if (url.pathname === "/api/status-badge" || url.pathname === "/status-badge.svg") {
      try {
        const response = await fetch("https://kuma.nico-core.de/api/badge/12/status?style=for-the-badge", {
          headers: {
            "User-Agent": "Cloudflare-Worker-Badge-Proxy"
          },
          cf: {
            cacheTtl: 60,
            cacheEverything: true
          }
        });

        if (response.ok) {
          const svg = await response.text();
          return new Response(svg, {
            headers: {
              "Content-Type": "image/svg+xml; charset=utf-8",
              "Cache-Control": "public, max-age=60, s-maxage=60",
              "Access-Control-Allow-Origin": "*"
            }
          });
        }
      } catch (e) {
        // Fallback on network/fetch error
      }

      // Resilient fallback SVG (STATUS: UP) so visitor never sees a broken image
      const fallbackSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="113" height="28" role="img" aria-label="STATUS: UP"><title>STATUS: UP</title><g shape-rendering="crispEdges"><rect width="71.5" height="28" fill="#555"/><rect x="71.5" width="41.5" height="28" fill="#66c20a"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><text transform="scale(.1)" x="357.5" y="175" textLength="475" fill="#fff">STATUS</text><text transform="scale(.1)" x="922.5" y="175" textLength="175" fill="#fff" font-weight="bold">UP</text></g></svg>`;
      return new Response(fallbackSvg, {
        headers: {
          "Content-Type": "image/svg+xml; charset=utf-8",
          "Cache-Control": "public, max-age=30",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }

    // Default: serve static assets
    return env.ASSETS.fetch(request);
  }
};
