# Abubakar Tafawa Balewa University Developers Club (ATBUDEVS)

Official web platform for the Abubakar Tafawa Balewa University Developers Club (ATBUDEVS), chartered under Schedule II of the club constitution to foster student software engineering excellence, technical leadership, and open-source innovation.

---

## 🎨 Official Brand Palette (Immutable)

The ATBU Developers Club visual identity adheres strictly to five approved brand colors:

| Color Name | Hex Code | Semantic Role | CSS Custom Property |
| :--- | :--- | :--- | :--- |
| **Peach Glow** | `#FFC09F` | Hero headline emphasis, warm accents | `var(--color-peach-glow)` |
| **Light Gold** | `#FFEE93` | Button hover transitions, membership accents | `var(--color-light-gold)` |
| **Lemon Chiffon** | `#FCF5C7` | Activities & founder section backgrounds | `var(--color-lemon-chiffon)` |
| **Light Blue** | `#A0CED9` | FAQ section background, sky-blue links | `var(--color-light-blue)` |
| **Celadon** | `#ADF7B6` | Primary action CTAs, club emblems | `var(--color-celadon)` |

---

## 📁 Directory Architecture

```text
atbu-devs/
├── assets/
│   ├── logos/              # University crest, club emblem, accredited partner logos
│   ├── media/              # Hero photographic background, team and founder assets, activity visuals
│   └── favicons/           # Multi-resolution square web app icons and apple-touch-icon
├── components/             # Clean, modular HTML UI section templates
│   ├── hero.html           # Brand header, responsive navigation, and photographic hero
│   ├── partners.html       # Accredited departmental associations infinite marquee
│   ├── about.html          # Club identity, philosophy, and team visual
│   ├── membership.html     # Technical directorate tracks and community gallery
│   ├── founder.html        # Founder feature and institutional vision
│   ├── activities.html     # Flagship events and interactive touch-hardened slider
│   ├── faq.html            # Constitutional FAQ accordion with 60fps expansion
│   └── footer.html         # Sleek dark footer with official logos and legal directory
├── scripts/                # Modular vanilla JavaScript controllers (Zero external dependencies)
│   ├── drawer.js           # Accessible mobile drawer navigation with ESC trap
│   ├── scroll-reveal.js    # IntersectionObserver animations & card cursor sheen
│   ├── faq.js              # Single-expansion accordion controller
│   ├── carousel.js         # Touch-swipe slideshow with debounced controls
│   └── main.js             # Production runtime initialization
├── styles/
│   ├── variables.css       # Centralized design tokens and brand hex codes
│   └── main.css            # Production stylesheet with responsive breakpoints
├── build.js                # Assembly script compiling components into production index.html
├── server.js               # Production-hardened Node.js static server with /health endpoint
├── render.yaml             # Infrastructure-as-code blueprint for Render deployment
├── index.html              # Compiled production entry point
├── package.json            # Scripts, metadata, and dependencies
├── CONSTITUTION.md         # Full text of the club constitution and governance bylaws
└── DESIGN_SYSTEM.md        # Comprehensive design system reference specifications
```

---

## 🚀 Quickstart & Development

### 1. Installation
The codebase requires standard [Node.js](https://nodejs.org/) (v16+ recommended). Zero third-party runtime dependencies are needed.
```bash
git clone https://github.com/atbudevs/atbu-devs.git
cd atbu-devs
npm install
```

### 2. Development & Production Build
To recompile the HTML components into `index.html`:
```bash
npm run build
```

To run the production server locally:
```bash
npm start
```
The application will launch on `http://localhost:3000` (or the next available port).

---

## ☁️ Deployment to Render

This repository is pre-configured for automated continuous deployment to [Render](https://render.com/).

### Option A: Blueprint Deployment (Recommended)
1. Push your changes to GitHub or GitLab.
2. In the Render Dashboard, select **New +** &rarr; **Blueprint**.
3. Connect your repository; Render will automatically detect [`render.yaml`](render.yaml) and configure:
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Health Check Path**: `/health`

### Option B: Manual Web Service
- **Name**: `atbudevs-website`
- **Runtime**: `Node`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Port**: Automatic (`process.env.PORT` bound to `0.0.0.0`)

---

## 🛡️ Governance & Quality Standards
- Strict WCAG AAA compliance for high-contrast typography across all sections.
- Accessible ARIA semantics across dialogs, mobile drawers, sliders, and accordions.
- Zero layout shift (CLS), pre-sized responsive images, and lightweight asset footprints.
