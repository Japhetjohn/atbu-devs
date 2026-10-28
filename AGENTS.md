# CODING AGENT INSTRUCTIONS — MANDATORY BRAND, TYPOGRAPHY & UI GUIDELINES

## 1. MANDATORY BRAND PALETTE (IMMUTABLE)

All AI coding assistants, developers, and tools working on this codebase must strictly adhere to the official ATBU Developers Club (ATBUDEVS) five-color brand palette:

- **Peach Glow**: `#FFC09F`
- **Light Gold**: `#FFEE93`
- **Lemon Chiffon**: `#FCF5C7`
- **Light Blue**: `#A0CED9`
- **Celadon**: `#ADF7B6`

### Strict Rules:
- NEVER modify or replace these five hexadecimal values.
- NEVER introduce unapproved brand colors or fall back to generic SaaS blue/purple gradients.
- Always use the centralized CSS custom properties declared in `styles.css` (`--color-peach-glow`, `--color-light-gold`, `--color-lemon-chiffon`, `--color-light-blue`, `--color-celadon`).
- Ensure all text has sufficient WCAG contrast against background surfaces.

## 2. EDITORIAL TYPOGRAPHY, HEADER & HERO ARCHITECTURE

- **Typeface**: `Inter Tight` (primary) / `Manrope` (fallback).
- **Header & Navigation (Reference-Inspired)**:
  - Brand wordmark: `atbudevs` in solid **White** (`#FFFFFF`, `font-weight: 850; letter-spacing: -0.04em`, matching the font weight and tracking of the headline emphasis) + `Developers Club` in Lemon Chiffon alongside the official seal.
  - Constitution-informed links: `About` (`#about`), `Activities` (`#activities`), `Learning` (`#learning`), `Community` (`#community`), `Partners` (`#partners`), `Constitution` (`CONSTITUTION.md`).
  - Dual action group: Celadon pill button (`Get in Touch →`) with offset shadow + circular `?` charter info button.
  - Mobile drawer with accessible hamburger toggle (`≤900px`).
- **Hero Composition**:
  - Headline: Contrast between Light 300 opening line in white, and ExtraBold 850 emphasized phrase in Peach Glow (`#FFC09F`).
  - Single Primary Hero CTA: Pill-shaped button (`border-radius: 9999px`) in Celadon with inset white arrow disc, reading **"Explore Community"**.
  - Single-Screen on desktop (`100vh` / `100dvh`), zero vertical scroll on standard desktop.
- **Strictly NO cards**, NO floating glassmorphic containers, NO white boxes, NO decorative geometric blobs, and NO fake stats counters.

## 3. PROJECT DOCUMENTATION REFERENCE

Before making styling or architectural adjustments, always consult:
- `CONSTITUTION.md` — Club mission, philosophy, governance, and Schedule II brand colors.
- `DESIGN_SYSTEM.md` — CSS variable mappings, semantic roles, typography, and responsive specifications.
