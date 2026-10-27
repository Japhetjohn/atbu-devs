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

## 2. EDITORIAL TYPOGRAPHY & HERO COMPOSITION

- **Typeface**: `Inter Tight` (primary) / `Manrope` (fallback).
- **Headline Contrast**: Strong contrast between a Light (`font-weight: 300`) opening line in white, and an ExtraBold (`font-weight: 850`) emphasized phrase in Peach Glow (`#FFC09F`).
- **Single-Screen Hero**: The current development phase renders ONLY the header and hero section within full viewport height (`100vh` / `100dvh`), with zero vertical scrolling on standard desktop.
- **Mobile Experience**: Responsive typography using `clamp()`, dynamic viewport units (`100svh`), consistent left gutters (`1.5rem` / `1.15rem`), zero horizontal overflow, and dual-layer contrast gradients.
- **Single Primary CTA**: Modern pill-shaped button (`border-radius: 9999px`) in Celadon (`#ADF7B6`), featuring an inset white circular badge on the left with a contrasting dark outline and right-pointing arrow (`→`), with clear dark text (`#06130B`) reading **"Explore Community"**. Only one primary CTA button; no secondary button.
- **Strictly NO cards**, NO floating glassmorphic containers, NO white boxes, NO decorative geometric blobs, and NO fake stats counters.

## 3. PROJECT DOCUMENTATION REFERENCE

Before making styling or architectural adjustments, always consult:
- `CONSTITUTION.md` — Club mission, philosophy, governance, and Schedule II brand colors.
- `DESIGN_SYSTEM.md` — CSS variable mappings, semantic roles, typography, and responsive specifications.
