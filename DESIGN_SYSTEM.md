# ATBU Developers Club (ATBUDEVS) — Design System & Brand Guidelines

## 1. Official Brand Color Palette (Mandatory — Fixed Hexadecimal Values)

The following five colors constitute the official and exclusive brand palette for the ATBU Developers Club website, digital platforms, and user interfaces:

| Color Token | Name | Hex Code | RGB | Intended Application |
|---|---|---|---|---|
| `--color-peach-glow` | **Peach Glow** | `#FFC09F` | `rgb(255, 192, 159)` | Headline bold emphasis, warm focal highlights, hover states |
| `--color-light-gold` | **Light Gold** | `#FFEE93` | `rgb(255, 238, 147)` | Primary CTA hover state, badges, key milestone highlights |
| `--color-lemon-chiffon`| **Lemon Chiffon**| `#FCF5C7` | `rgb(252, 245, 199)`| Brand subtitle, delicate indicators |
| `--color-light-blue` | **Light Blue** | `#A0CED9` | `rgb(160, 206, 217)`| Header links, tag chips, focus outlines |
| `--color-celadon` | **Celadon** | `#ADF7B6` | `rgb(173, 247, 182)`| Primary CTA button background, success indicators |

### Supporting Accessible Neutrals
- `--color-white`: `#FFFFFF` (Headline light phrase, navigation text, CTA circle badge)
- `--color-text-body`: `rgba(255, 255, 255, 0.85)` (Supporting copy)
- `--color-text-muted`: `rgba(255, 255, 255, 0.65)` (Secondary text)
- `--color-text-subtle`: `rgba(255, 255, 255, 0.50)` (Subtle metadata)
- `--color-bg-dark`: `#080C14` (Deep charcoal navy base for directional overlays)
- `--color-primary-cta-text`: `#06130B` (High-contrast dark text and arrow on Celadon/Gold buttons)

---

## 2. Typography System (Editorial Studio Direction)

Following the modern editorial studio reference:
- **Primary Typeface**: `Inter Tight` (with fallback to `Manrope` and system grotesk/sans-serif).
- **Headline Architecture**:
  - **Structure**: 2 concise lines on desktop and mobile.
  - **Opening line**: `font-weight: 300` (Light), color `#FFFFFF`.
  - **Emphasized line**: `font-weight: 850` (ExtraBold), color `var(--color-peach-glow)` (`#FFC09F`).
  - **Desktop Size**: `clamp(2.85rem, 5vw, 4.35rem)`, `line-height: 1.08`.
  - **Mobile Size**: `clamp(2.2rem, 8vw, 2.75rem)` (down to `1.95rem` at ≤390px), `line-height: 1.12`.
  - **Letter-spacing**: `-0.035em` on light text, `-0.04em` on bold text.
- **Supporting Paragraph**:
  - `font-weight: 350`, `font-size: clamp(1.05rem, 1.25vw, 1.15rem)` (mobile: `0.975rem – 1.05rem`).
  - `line-height: 1.6`, `max-width: 520px` (mobile: full width), color `rgba(255, 255, 255, 0.85)`.
- **Navigation**:
  - `font-weight: 500`, `font-size: 0.925rem`, letter-spacing `-0.01em`.

---

## 3. Visual Composition & Viewport Principles

1. **Single-Screen Hero (Desktop)**:
   - On desktop, the page renders exclusively the header and the hero section within full viewport height (`100vh` / `100dvh`), with zero vertical scrolling.
   - Zero content or promotional sections rendered beneath the CTA.
2. **Mobile Hero Layout (Responsive Sizing)**:
   - Dynamic viewport height (`min-height: 100svh; min-height: 100dvh;`).
   - Mobile gutters: consistent `1.5rem` (or `1.15rem` on ≤390px screens).
   - Left-aligned edge for headline, paragraph, and CTA.
   - Dual-gradient overlay (top-to-bottom and left-to-right) ensuring WCAG AAA text contrast while keeping background community members visible.
   - Zero horizontal overflow (`overflow-x: hidden`).
3. **Pill-Shaped Arrow CTA Button (Single Primary CTA — "Explore Community")**:
   - Silhouette: Full pill (`border-radius: 9999px`).
   - Left icon badge: Inset white circular disc with a 2px contrasting dark border and a right-pointing arrow (`→`).
   - Fill: Solid Celadon (`#ADF7B6`) with `#06130B` bold typography.
   - Label: **Explore Community**.
   - Touch accessibility: Minimum 48px height on mobile.
   - Hover transition: Shifts smoothly to Light Gold (`#FFEE93`), arrow icon shifts subtly to the right (+3px).
   - Only ONE primary CTA; no competing secondary button.
