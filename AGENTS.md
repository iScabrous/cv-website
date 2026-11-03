# CV & Portfolio Guidelines (`cv-website`)

## 1. Project Overview & Architecture
- **Purpose:** Interactive CV and IT infrastructure portfolio for Nico Bührig, hosted at `https://cv.nico-core.de`.
- **Frontend Stack:** Semantic HTML5, Vanilla CSS3 (Custom Design System in `styles.css`), modern Vanilla JavaScript (`script.js`).
- **Edge Backend:** Cloudflare Worker in `worker.js` with `wrangler.jsonc` (handles `/api/status-badge` proxying with cache and SVG fallback).
- **Deployment:** GitOps via Cloudflare Pages and Workers. Pushes to `main` automatically deploy to production.

## 2. Development & Styling Principles
- **No Heavy Frameworks:** Pure Vanilla web technologies — do not introduce heavy UI frameworks (React, Vue) or bundlers unless explicitly requested.
- **Responsive & Accessible:** Ensure high contrast, responsive mobile/desktop layouts, semantic HTML tags, and clean ARIA attributes.
- **Local Testing:** Test static files using a simple HTTP server (e.g. `python -m http.server 8000`).
- **Worker Configuration:** Maintain Cloudflare compatibility in `worker.js` and `wrangler.jsonc`.
