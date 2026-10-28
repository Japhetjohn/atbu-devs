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

## 7. "Membership & Community" Section Architecture (Alternating Story Blocks • Reference-Inspired)

Directly beneath the About Us section, the Membership & Community section establishes a clean, spacious, editorial storytelling flow across two alternating blocks:
- **Visual Presentation & Palette**:
  - Background: Complementary solid brand tone from the official palette — **Light Gold** (`var(--color-light-gold)` / `#FFEE93`), creating a warm, distinct chapter shift from the Lemon Chiffon above.
  - Borderless & Airy: Zero divider lines, zero borders, zero box shadows on the section container with generous vertical breathing space (`padding: 6.5rem 0 7.5rem 0` / ~104px–120px).
  - Strict Rules: Strictly NO cards, NO boxes, NO frosted glass containers, NO bordered tiles, NO emojis, and NO markdown horizontal dividers (`---`).
- **Section Introduction**:
  - Headline: **`Membership & Community`** centered at the top in `var(--font-family)` (Inter Tight) with bold weight (`font-weight: 850; letter-spacing: -0.04em`), matching the reference studio headline typography in crisp `#080C14` dark charcoal.
- **Alternating 2-Column Story Blocks**:
  - **Block 1 — Student Membership (Image Left, Content Right)**:
    - Left Column: Clean real photo display (`partners/tech-community-1.jpg` / student builders assembly) with rounded corners (`border-radius: 1.5rem`), natural subtle depth, and zero card shell wrappers.
    - Right Column: Title `"Student Membership"`, narrative paragraph on universal access across all faculties/departments with verified credentials, and signature pill button `"Join the Club →"` in Celadon (`#ADF7B6`) with offset retro drop shadow (`2px 2px 0px #06130b`).
  - **Organic Dotted / Dashed Path Connector (Mid)**:
    - Subtle curved SVG dashed line (`stroke-dasharray="6 8"`, `stroke-width="2.5"`) organically meandering downward and across from Block 1 to Block 2, naturally guiding the eye.
  - **Block 2 — Active Developer Community (Content Left, Image Right)**:
    - Left Column: Title `"Active Developer Community"`, narrative paragraph on specialized tracks, collaborative open-source projects, and university hackathons, with signature pill button `"Explore Community →"`.
    - Right Column: Clean real photo display (`partners/tech-community-2.jpg` / active tech community) matching Block 1's rounded aesthetic.
  - **Organic Dotted / Dashed Path Connector (Bottom)**:
    - Continuation of the subtle curved dashed trail exiting the bottom of Block 2 toward the center.
- **Mobile Responsiveness (`< 768px`)**:
  - Transitions into a single-column stack with Block 2's image ordered on top (`order: -1`) to maintain a consistent `[Image → Title → Paragraph → Button]` reading hierarchy throughout.
  - Decorative SVG dotted connectors hidden on mobile (`display: none;`) to eliminate clutter and layout shift.

---

## 8. "Meet the Founder" Section Architecture (Reference-Inspired Layout)

Directly beneath the Membership & Community section, a bright, modern editorial showcase highlights club founder Sen. Muhammad Shehu Danbinta:
- **Visual Presentation & Background**:
  - Background: Brand **Lemon Chiffon** (`var(--color-lemon-chiffon)` / `#FCF5C7`) overlaid with a faint geometric checkered grid pattern (`linear-gradient` lines 32px x 32px in `rgba(8, 12, 20, 0.04)`), matching the reference layout.
  - Clean Spacing: Generous padding (`6.5rem 0 7.5rem 0` on desktop, `3.5rem 0 4rem 0` on mobile).
  - Strict Rules: No emojis anywhere in the text, no bordered card tiles enclosing the section, and no markdown divider lines (`---`).
- **Section Header (Bold Two-Tone)**:
  - Line 1: **"The"** in solid dark charcoal (`#080C14`, `font-weight: 850; letter-spacing: -0.04em`).
  - Line 2: **"Founder"** in brand accent **Peach Glow** (`#FFC09F`) with subtle drop shadow for crisp definition.
  - Desktop: Left-aligned above the polaroid card. Mobile: Centered.
- **2-Column Responsive Layout**:
  - **Left Column (Founder Visual — Polaroid Card)**:
    - Photo: `partners/founder.jpg` (official portrait of Sen. Muhammad Shehu Danbinta).
    - Polaroid Styling: Pure white frame (`bg-white p-3.5 rounded-2xl shadow-xl`), rotated `-2.5deg` on desktop (`rotate-0` on hover with smooth cubic-bezier transition).
    - Decorative Detail: Glossy red 3D push-pin graphic positioned on the top corner.
  - **Right Column (Biography & Profile Details)**:
    - Narrative Bio: First-person constitution-aligned statement on bridging academic theory with production software and building a collaborative student ecosystem.
    - Profile: **`Sen. Muhammad Shehu Danbinta`** in bold 750 weight with **`Founder, ATBU Developers Club`** subtitle.
    - Signature CTA Pill: **`Connect with the Founder →`** in Celadon (`#ADF7B6`), dark text (`#06130B`), and offset drop shadow (`2px 2px 0px #06130b`).
- **Mobile View Responsiveness (`< 768px`)**:
  - Hierarchy: `[The Founder Header] → [Polaroid Image Centered] → [Bio Narrative] → [Name & Title] → [Connect CTA]`.
  - Full-width touch-friendly hit targets (`min-height: 46px`).

---

## 9. "Activities & Programs" Slideshow Section Architecture (Schedule VIII & XIV Driven)

Directly following the Meet the Founder block, an editorial interactive slideshow showcases the club's flagship events and calendar:
- **Visual Presentation & Background**:
  - Background: Brand **Lemon Chiffon** (`var(--color-lemon-chiffon)` / `#FCF5C7`) solid, clean, airy canvas.
  - Borderless & Zero-Card Layout: Strictly NO card shells, NO boxed tiles, NO frosted glass containers, NO emojis, and NO markdown horizontal dividers (`---`).
  - Breathing Space: Generous vertical padding (`6.5rem 0 7.5rem 0` on desktop, `3.5rem 0 4rem 0` on mobile).
- **Section Header**:
  - Eyebrow: *Programs & Impact* (italicized/uppercase muted text `#6b7280`).
  - Main Headline (Slim Hero Font Style): `"Hands-on programs engineered for continuous growth."` in `var(--font-family)`, `font-weight: 350; letter-spacing: -0.035em; color: var(--color-bg-dark)`.
  - Subtitle: `"From semester-long bootcamps to our flagship summit, our calendar is built around practical engineering, teamwork, and real-world deployment."`
- **4 Official Program Slides (Constitution Schedule VIII & XIV)**:
  1. **The Developers Summit & Hackathons** (ANNUAL FLAGSHIP):
     - Description: An energetic gathering uniting student innovators and mentors. Teams build and pitch functional prototypes during intensive multi-day hackathons addressing campus and community needs.
     - Focus Tags: Live Coding Sprints, Technical Demos, Team Mentorship.
     - Visual Asset: `partners/hackathon-github-removebg-preview.png` (transparent background GitHub hackathon collaboration mark seamlessly blending on Lemon Chiffon). No device frames or card shells.
  2. **Intensive Web, Mobile & AI Bootcamps** (SEMESTER 1 TECHNICAL TRACKS):
     - Description: Structured, mentor-led engineering tracks covering web stacks, cross-platform mobile apps, and machine learning pipelines.
     - Focus Tags: Full-Stack Web, Mobile Engineering, Practical AI/ML.
     - Asset: `partners/bootcamp-removebg-preview.png` (transparent background illustration seamlessly blending on Lemon Chiffon).
  3. **Cybersecurity CTFs & UI/UX Sprints** (SPECIALIZED SESSIONS):
     - Description: Interactive security workshops featuring Capture-The-Flag challenges alongside human-centered product design sprints that refine digital products from concept to interface.
     - Focus Tags: Ethical Hacking, Interface Design, Security Audits.
     - Asset: `partners/cyber-security-removebg-preview.png` (transparent background illustration seamlessly blending on Lemon Chiffon).
  4. **Open Source Week & Tech Outreach** (COMMUNITY & IMPACT):
     - Description: Dedicated community sessions focused on public repo contributions, paired code reviews, and community tech outreaches bringing digital skills to the wider community.
     - Focus Tags: Git Collaboration, Open Source Contributions, Community Impact.
     - Asset: `partners/bootcamp-removebg-preview.png` (transparent background illustration seamlessly blending on Lemon Chiffon).
- **Interactive Controls & Mechanics**:
  - Chevron buttons (left/right) with offset retro shadow and hover state (`var(--color-celadon)`).
  - Quiet pagination dots with elongated pill indicator for active slide.
  - Touch-friendly swipe gestures on mobile devices (`touchstart`, `touchend`).
  - Keyboard arrow navigation when focused (`ArrowLeft`, `ArrowRight`).
  - Auto-advance (6.5s) paused during cursor hover and synchronized video playback.
- **Mobile Responsiveness & Overflow Prevention (`< 768px`)**:
  - `width: 100%; max-width: 100vw; overflow-x: hidden;` prevents horizontal flex leaks and layout blowout.
  - `min-width: 0;` applied on all content/visual containers ensuring long words wrap without forcing horizontal scrollbars.
  - Dynamic `min-height: auto;` eliminating fixed height clipping.
  - Converts from 50/50 2-column desktop grid to single column with media (video/image) pinned cleanly on top (`order: -1`).
  - Generous touch targets (`>= 44px`) and clean legible typography.






