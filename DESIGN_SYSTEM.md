# ATBU Developers Club (ATBUDEVS) — Design System & Brand Guidelines

## 1. Official Brand Color Palette (Mandatory — Fixed Hexadecimal Values)

The following five colors constitute the official and exclusive brand palette for the ATBU Developers Club website, digital platforms, and user interfaces:

| Color Token | Name | Hex Code | RGB | Intended Application |
|---|---|---|---|---|
| `--color-peach-glow` | **Peach Glow** | `#FFC09F` | `rgb(255, 192, 159)` | Headline bold emphasis, warm focal highlights, hover states |
| `--color-light-gold` | **Light Gold** | `#FFEE93` | `rgb(255, 238, 147)` | Primary CTA hover state, badges, key milestone highlights |
| `--color-lemon-chiffon`| **Lemon Chiffon**| `#FCF5C7` | `rgb(252, 245, 199)`| Brand subtitle, delicate indicators |
| `--color-light-blue` | **Light Blue** | `#A0CED9` | `rgb(160, 206, 217)`| Header links, nav hover indicator, focus outlines |
| `--color-celadon` | **Celadon** | `#ADF7B6` | `rgb(173, 247, 182)`| Primary CTA button background, success indicators |

### Supporting Accessible Neutrals
- `--color-white`: `#FFFFFF` (Headline light phrase, navigation text, CTA circle badge)
- `--color-text-body`: `rgba(255, 255, 255, 0.85)` (Supporting copy)
- `--color-text-muted`: `rgba(255, 255, 255, 0.65)` (Secondary text)
- `--color-text-subtle`: `rgba(255, 255, 255, 0.50)` (Subtle metadata)
- `--color-bg-dark`: `#080C14` (Deep charcoal navy base for directional overlays)
- `--color-primary-cta-text`: `#06130B` (High-contrast dark text and arrow on Celadon/Gold buttons)

---

## 2. Header & Navigation Architecture (Reference-Inspired Design)

Recreating the modern, clean, editorial header treatment:
- **Brand Identity**:
  - Official ATBUDEVS Emblem (`atbu-removebg-preview.png`, `42px x 42px`).
  - Brand wordmark: `atbudevs` in solid **White** (`#FFFFFF`), styled with the exact editorial typography of the headline emphasis (`font-weight: 850; letter-spacing: -0.04em;`) + `Developers Club` in Lemon Chiffon.
- **Navigation Items (Constitution-Informed)**:
  - `About` (`#about`) — Article II: Mission, Philosophy & Core Values.
  - `Activities` (`#activities`) — Article II Section 10: Bootcamps, Hackathons, Workshops & Summit.
  - `Learning` (`#learning`) — Article II Section 7: Software Engineering, Web, Mobile, AI, Cloud.
  - `Community` (`#community`) — Article III: Membership & Student Developers.
  - `Partners` (`#partners`) — Article II Section 7(vi): Industry Partnerships & Collaborations.
  - `Constitution` (`CONSTITUTION.md`) — Supreme governing instrument & official charter.
- **Header Actions Group**:
  - **Pill CTA Button**: `Get in Touch →` in Celadon (`#ADF7B6`), dark text (`#06130B`), `1.5px solid #06130b` border, and offset stylized drop shadow (`2px 2px 0px #06130b`), shifting on hover to Light Gold (`#FFEE93`) with a rightward arrow nudge.
  - **Circular Charter Button**: `36px` circular button with `?` symbol in Celadon/Dark text with matching offset shadow, linking to `CONSTITUTION.md`.
- **Mobile Responsive Drawer**:
  - Accessible hamburger button on screens ≤ 900px (`aria-expanded`, `aria-controls`).
  - Slide-in glassmorphism panel with full navigation links, comfortable touch targets, and full-width `Join Club` button.

---

## 3. Typography System (Editorial Studio Direction)

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
  - `line-height: 1.62`, `max-width: 520px` (mobile: full width), color `rgba(255, 255, 255, 0.85)`.

---

## 4. Hero Primary CTA ("Explore Community")

- **Silhouette**: Full pill (`border-radius: 9999px`).
- **Left icon badge**: Inset white circular disc with a 2px contrasting dark border and a right-pointing arrow (`→`).
- **Fill**: Solid Celadon (`#ADF7B6`) with `#06130B` bold typography.
- **Label**: **Explore Community**.
- **Touch accessibility**: Minimum 48px height on mobile.
- **Hover transition**: Shifts smoothly to Light Gold (`#FFEE93`), arrow icon shifts subtly to the right (+3px).

---

## 5. "Powered by" Partner Section & Infinite Marquee Carousel

Directly beneath the hero, a continuous, auto-scrolling partner logo marquee highlights official collaborations with student associations across Abubakar Tafawa Balewa University:
- **Affiliated Student Bodies**:
  - Nigeria Association of Computing Students (NACOS)
  - Nigerian Universities Engineering Students Association (NUESA)
  - National Association of Science Students (NASS)
  - National Association of University Students Bauchi CMC (NAUS)
  - Association of Environmental Technology Students (AETS)
  - Association of Management Sciences Students (AMSS)
  - Science and Technology Education Students Association (STESA)
  - Students Representative Assembly ATBU (SRA)
- **Visual Presentation**:
  - Centered label: `POWERED BY` styled in `var(--font-family)`, uppercase, letter-spacing `0.12em`, `var(--color-text-subtle)`.
  - Transparent PNGs with tightly cropped bounding boxes for optical height balance across circular/shield emblems.
  - Consistent optical height: `38px` (desktop), `32px` (tablet), `28px` (mobile) with `width: auto; object-fit: contain`.
  - Opacity: `0.75` default with transition to `1.0` and gentle scale on hover.
- **Marquee Mechanics**:
  - Infinite gapless linear translation using `@keyframes partnersMarqueeScroll` translating from `translateX(0)` to `translateX(-50%)`.
  - Quadruple slide sets ensuring wide and 4K displays maintain a full continuous ribbon with zero gaps or hitches.
  - Pause on hover: `animation-play-state: paused` on `.partners-carousel:hover`.
  - Double edge fade: CSS `mask-image` gradient combined with fallback subtle gradient overlays in `var(--color-bg-dark)` for smooth fade-in / fade-out at viewport edges.
  - Accessibility: First set is fully exposed to screen readers with descriptive `alt` tags; duplicates marked `aria-hidden="true"`; `prefers-reduced-motion` pauses the marquee and provides smooth manual horizontal scrolling.

