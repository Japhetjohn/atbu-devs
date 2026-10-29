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
  - **Pill CTA Button**: `Join Club →` in Celadon (`#ADF7B6`), dark text (`#06130B`), `1.5px solid #06130b` border, and offset stylized drop shadow (`2px 2px 0px #06130b`), shifting on hover to Light Gold (`#FFEE93`) with a rightward arrow nudge.
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

## 5. "Our Partners" Section & Infinite Marquee Carousel (Light & Airy Layout)

Directly beneath the hero, a continuous, auto-scrolling partner logo marquee highlights official collaborations with student associations across Abubakar Tafawa Balewa University, styled in a bright, clean, airy layout:
- **Affiliated Student Bodies**:
  - Nigeria Association of Computing Students (NACOS)
  - Nigerian Universities Engineering Students Association (NUESA)
  - National Association of Science Students (NASS)
  - National Association of University Students Bauchi CMC (NAUS CMC)
  - Association of Environmental Technology Students (AETS)
  - Association of Management Sciences Students (AMSS)
  - Science and Technology Education Students Association (STESA)
  - Students Representative Assembly ATBU (SRA ATBU)
- **Visual Presentation & Background**:
  - Background: Brand **Lemon Chiffon** (`var(--color-lemon-chiffon)` / `#FCF5C7`), providing a warm, bright, off-white/cream canvas.
  - Borderless: Completely devoid of divider lines, top/bottom borders, or box shadows for seamless page integration.
  - Breathing Room: Comfortable vertical padding (`4.5rem 0 5rem 0` / ~72px-80px).
  - Section Header: **`Our Partners.`** styled in `var(--font-family)` (Inter Tight) with ExtraBold `850` weight and tight `-0.04em` letter-spacing matching the reference studio headline, in crisp `#080C14` dark charcoal.
- **Card Layout & Logo Sizing**:
  - Item Structure: Vertical stack card (`.partner-card`) with logo on top and partner name centered directly underneath with a 14px gap.
  - Logo Sizing: Ultra-prominent visibility at **`104px`** height (`84px` on tablet, `70px` on mobile), `width: auto; object-fit: contain`.
  - Fidelity: 100% full opacity and vivid color fidelity with subtle depth (`drop-shadow(0 4px 14px rgba(0, 0, 0, 0.12))`), elevating on hover with scale `1.08`.
  - Partner Name: Clean typography (`font-size: 1.15rem; font-weight: 650`, `letter-spacing: -0.015em`, crisp `#080C14` charcoal).
- **Marquee Mechanics**:
  - Infinite gapless linear translation using `@keyframes partnersMarqueeScroll` translating from `translateX(0)` to `translateX(-50%)` over `48s`.
  - Quadruple slide sets ensuring wide and 4K displays maintain a full continuous ribbon with zero gaps or hitches.
  - Generous card spacing: `5.5rem` (~88px) between cards.
  - Pause on hover: `animation-play-state: paused` on `.partners-carousel:hover` and `.partners-track:hover`.
  - Edge fade masks: CSS `mask-image` gradient combined with fallback gradient overlays in `var(--color-lemon-chiffon)` for smooth fade-in / fade-out at viewport edges.
  - Accessibility: First set is fully exposed to screen readers with descriptive `alt` tags and `title` tooltips; duplicates marked `aria-hidden="true"`; `prefers-reduced-motion` provides smooth manual horizontal scrolling.

---

## 6. "About Us" Section Architecture (Punchy & Concise Revision)

Directly continuing from the Partners carousel, the About Us section maintains an unbroken visual canvas on the brand Lemon Chiffon (`#FCF5C7`) surface:
- **Layout & Continuous Canvas**:
  - Background: Same Lemon Chiffon (`#FCF5C7`) tone with zero borders, dividers, or background cuts between Partners and About Us.
  - Container: Max width `1140px` (max-w-6xl) centered layout with comfortable vertical breathing room (`padding: 1.75rem 0 5.5rem 0`).
- **Centered Top Intro Block**:
  - Eyebrow: `*About Us*` in italicized, muted secondary text (`#4a5568`, `font-size: 1.05rem`, `font-weight: 400`).
  - Main Headline: `"ATBUDEVS bridges the gap between classroom theory and production-grade software."` styled in light hero typography (`font-weight: 350`, `font-size: clamp(2rem, 3.8vw, 3.15rem)`, `line-height: 1.18`, crisp `#080C14` dark text).
- **2-Column Responsive Story Block**:
  - Structure: 2-column balanced grid on desktop (`1fr 1fr`, `gap: 3.5rem`, `align-items: center`), single-column vertical stack on mobile (`≤ 860px`).
  - Left Column (Asset): 2D educational tech illustration (`partners/about_image_real-removebg-preview.png`), transparent background, responsive aspect ratio `1 / 1` (`max-width: 440px` on desktop, `360px` on tablet, `290px` on mobile), naturally blending directly on the Lemon Chiffon canvas.
  - Right Column (Headline & Concise Narrative):
    - Subheading: Official Motto — `"Learn. Build. Impact."` (`font-weight: 350`, `font-size: clamp(1.85rem, 3.2vw, 2.5rem)`).
    - Narrative: A single, cohesive, punchy sentence: *"Build production-grade software across Web, Mobile, AI/ML, UI/UX, and Cybersecurity by contributing to live open-source repositories alongside fellow student developers, with direct industry access through high-stakes hackathons, technical bootcamps, and career mentorship."*
    - Pill CTA Button: `"Explore Membership →"` in Celadon (`#ADF7B6`), dark text (`#06130B`), `1.5px solid #06130b` border, and signature offset drop shadow (`2px 2px 0px #06130b`), routing smoothly to `#membership`.

---

## 7. "Membership" Section Architecture (Article III Driven • High-Contrast Showcase)

Directly beneath the About Us section, a high-contrast dark section establishes immediate authority and focus:
- **Visual Contrast & Palette**:
  - Base: Deep Charcoal / Royal Navy background (`#080C14`) accented with subtle ambient radial gradients in Light Blue (`rgba(160, 206, 217, 0.05)`) and Celadon (`rgba(173, 247, 182, 0.06)`).
  - Spacing: Generous breathing space (`padding: 6rem 0 6.5rem 0` / ~96px–104px vertical padding) within a constrained `1200px` container.
- **Section Introduction**:
  - Eyebrow: `MEMBERSHIP • ARTICLE III` in uppercase bold Celadon (`#ADF7B6`, `font-size: 0.85rem`, `letter-spacing: 0.12em`).
  - Section Headline: `"Open to every student builder. Driven by excellence."` (`font-weight: 350`, `color: #FFFFFF`, `line-height: 1.15`).
  - Subtitle: `"Registration is open to all registered students of Abubakar Tafawa Balewa University across every department and level."` (`color: rgba(255, 255, 255, 0.72)`).
- **2-Column Showcase**:
  - Left Column (Asset Frame):
    - Photo: `partners/membership.jpg` (official members assembly).
    - Card Frame: `rounded-2xl` border (`border: 1px solid rgba(255, 255, 255, 0.1)`), deep drop shadow (`0 25px 60px -15px rgba(0, 0, 0, 0.75)`), ambient hover glow (`0 0 50px rgba(173, 247, 182, 0.14)`), and smooth hover scale (`1.02`).
    - Floating Badge: Frosted glass badge at the bottom of the photo displaying `"General Assembly • Community Members"`.
  - Right Column (Pillars & Rights Cards):
    - 3 semi-transparent frosted cards (`bg-white/5 border border-white/10 p-5 rounded-xl`):
      1. **Universal Access (Section 1):** Open to all students without barriers—from first-time coders to advanced engineers.
      2. **Builder Rights (Section 5):** Direct access to technical bootcamps, hackathons, open-source teams, and mentorship pipelines.
      3. **Digital Credentials (Section 8):** Official Club ID, verified digital credentials, and a unique Membership Identification Number.
    - Hover Interaction: Dynamic cursor-following gradient sheen and Celadon border highlight (`border-color: rgba(173, 247, 182, 0.45)`).
    - Section CTA: `"Join ATBUDEVS Today →"` in Celadon (`#ADF7B6`), dark text (`#06130B`), and signature tactile shadow.
- **Animation**:
  - Staggered scroll-reveal animation with Intersection Observer.
  - Interactive cursor hover sheen across membership cards.



