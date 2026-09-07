# 🌐 Personal CV & Portfolio Website

[![Website](https://img.shields.io/badge/Live_Demo-cv.nico--core.de-007acc?style=flat-square&logo=cloudflare&logoColor=white)](https://cv.nico-core.de)
[![Cloudflare Pages](https://img.shields.io/badge/Deployed_with-Cloudflare_Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)

Interaktiver Lebenslauf und IT-Infrastruktur-Portfolio von **Nico Bührig** mit Einblicken in praktische Erfahrungen mit Virtualisierung, Netzwerksicherheit und Homelab-Architektur.

---

### 🛠️ Architektur & Tech-Stack

- **Frontend:** Semantisches HTML5, Vanilla CSS3 (Custom Design System), modernes Vanilla JavaScript.
- **Hosting & CDN:** Cloudflare Pages (Serverless, globale Edge-Distribution).
- **Edge Worker Proxy:** Cloudflare Worker (`worker.js`) als API-Gateway für `/api/status-badge` mit Server-Side-Caching (60s) und SVG-Fallback für das Live-Monitoring aus Uptime Kuma.
- **GitOps:** Automatisches Deployment bei Push auf `main` über die Cloudflare Pages / Workers Integration.

---

### 🚀 Lokale Entwicklung

Die Seite benötigt keine Build-Tools und kann direkt im Browser geöffnet oder über einen beliebigen lokalen Webserver gestartet werden:

```bash
# Python 3
python -m http.server 8000
```
