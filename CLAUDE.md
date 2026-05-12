# BSA Project — CLAUDE.md

> You are building the Blue Sands Academy website.
> Read only what you need for the current task.

---

## Quick Context (Always in Memory)

**Project:** Blue Sands Academy (BSA) website
**Stack:** Next.js 16 (App Router), Tailwind CSS v4, JavaScript (not TypeScript)
**Mission:** Closing the gender digital gap — empowering women and girls with ICT skills
**Audience:** Government agencies, startup funders (CcHub), angel investors
**Primary CTA:** "Partner With Us"
**Design reference:** Girls Who Code + KoraHQ — bold, type-forward, seamless section transitions, word-level colour emphasis in headings

---

## Colours (never guess — use these exact values)

```
--primary:   #0483E2   Brand blue (headings accent, links, active states)
--secondary: #02345A   Deep navy (body text, dark sections, navbar scrolled)
--accent:    #0AADFF   Electric blue (light accent, rarely used)
--pink:      #E63F8E   Pink (CTAs, heading word-emphasis, progress bars, accents)
--surface:   #F4F8FE   Light blue-white (alternate section bg)
--bdr:       #E2EBF6   Subtle border
--muted:     #6B7E9E   Muted text / labels
```

**Pink is a first-class colour.** Client requested it. Use it on:
- Primary CTA buttons (hero, CTA banners)
- One or two emphasis words inside section headings
- Progress bars, indicator dots, accent bars
- Hover states on text CTAs (`hover:text-pink`)

---

## Fonts (Fontshare CDN — loaded via CSS @import in globals.css)

```
Display: Clash Display (600, 700) — all headings h1–h6
Body:    Satoshi (400, 500, 700)  — body copy, UI, buttons, labels
```

- Fonts are loaded via `@import url(...)` at the top of `globals.css`
- `<link rel="preconnect" href="https://api.fontshare.com" />` is in layout.js `<head>`
- Do NOT use `next/font/google` — these are Fontshare fonts
- `font-display` utility = Clash Display
- `font-body` utility = Satoshi

---

## Section Heading System (locked — apply to every section)

**Rule: No eyebrow labels. Ever.**
Do not place small uppercase text above headings to label the section.
The heading size does all the work. Go straight from heading to content.

**Section h2 — always use the `.section-title` CSS utility:**
```
font-family: Clash Display
font-weight: 700
font-size:   clamp(2.82rem, 5vw, 4rem)  →  48px min, 68px max
line-height: 1.1
letter-spacing: -0.03em
color: #02345a (text-secondary)
```

**Word-level colour emphasis (KoraHQ pattern):**
Every section heading must have one or two words pulled into `text-pink` or `text-primary`.
The accent word should carry the value proposition — what BSA does or who it serves.

```jsx
// ✅ Correct
<h2 className="section-title">
  Empowering Women and Girls through <span className="text-pink">ICT Skills</span>
</h2>

// ❌ Wrong — no accent word
<h2 className="section-title">
  Empowering Women and Girls through ICT Skills
</h2>
```

**Alignment:** Always left-aligned. Never centered.

---

## Section Background Rhythm (locked — home page)

Sections alternate to create visual breathing room. Never two navys in a row.
Transition statements and the milestone callout box adopted from Loom's scroll rhythm pattern.

| # | Section | Background | Notes |
|---|---|---|---|
| 1 | Hero Slider | `bg-secondary` (navy) | — |
| 2 | About Strip | `bg-white` | Heading left / content right, no image |
| 3 | **Transition Statement** | `bg-white` | Centered bold bridge line. No heading, no content — one declarative sentence only |
| 4 | What We Do | `bg-surface` | 4 alternating rows, converging scroll animation |
| 5 | **Milestone Callout Box** | `bg-white` | Loom-style inset bordered card — Times Square feature + competition wins. Credibility anchor for funders |
| 6 | Our Initiatives | `bg-secondary` (navy) | 3 numbered blocks (01/02/03), type-only, no cards |
| 7 | **Transition Statement** | `bg-secondary` (navy) | Centered bold line within the navy section, bridges Initiatives → Partners |
| 8 | Partners | `bg-white` | Statement above logos: "Trusted by organisations across Nigeria" |
| 9 | Testimonials | `bg-surface` | One large featured quote + 4 in 2-col grid below |
| 10 | Email Subscription CTA | `bg-pink` | Full-width, white text + inline email form |

### Transition Statement rules
- Always centered, never left-aligned
- `.section-title` scale or slightly smaller — `clamp(2rem, 4vw, 3.2rem)`
- One sentence maximum. No body copy beneath it.
- No CTA, no links — it is purely a rhythm device
- Example: *"We don't just believe in the potential of women and girls — we build it."*

### Milestone Callout Box rules (Loom pattern)
- Rounded border (`border-bdr`, `rounded-2xl`), white bg, generous internal padding
- No eyebrow label — the no-eyebrow rule applies here too
- Bold headline + 2–3 achievement lines
- Optional: single CTA link
- Never full-bleed — always sits within the max-w-7xl content rail

---

## Section Layout Principles (KoraHQ-inspired, locked)

1. **Same horizontal padding rail on every section** — `px-6 lg:px-8`, `max-w-7xl mx-auto`. Content locks to an invisible vertical rail as you scroll.
2. **Section vertical padding** — `py-28` throughout. Never cram.
3. **No dividers between sections** — background colour change is the only separator.
4. **Heading as visual anchor** — on split layouts, the heading alone can occupy the left column. No image required to hold visual weight.
5. **No borders, no heavy shadows on cards** — spacing alone creates order.
6. **Large numbers as design elements** — stats use Clash Display at display scale, not small badges.
7. **Seamless scroll** — each section's bottom padding + next section's top padding = the only transition.

---

## Locked Component Decisions

### Navbar
- Fixed, transparent on home hero (scroll = 0), white + border on scroll
- Transparent when mobile menu is closed on home; always white when open
- "Partner With Us" CTA button in `bg-primary`

### Hero Slider
- 5 slides, 7s auto-advance
- Cascade-reveal transition: each headline line clips up from `translateY(115%)` inside `overflow-hidden` wrapper
- Ghost slide number (01–05) as background texture at 2.8% opacity
- Pink left accent bar (1.5px), pink progress tracks, pink CTA buttons
- Progress nav: thin tracks that fill with pink over 7s

### About Strip (home page)
- Layout Option A: heading is left column, content (body + facts + CTA) is right column. No image.
- `lg:grid-cols-2`, `items-start`
- Facts as large Clash Display numbers in a 3-column `dl`, no decoration
- CTA: text link with arrow, `hover:text-pink`

---

## Core Rules (never break)

- Type is the design. Every element earns its place.
- Body text minimum 17px (`font-size: 17px` set on `html`), line-height 1.7
- Body text colour: `text-secondary` (#02345A) — no heavy opacity modifiers that make text faint
- `next/image` on every image
- One `<h1>` per page. Never skip heading levels.
- All forms: loading → success → error states required
- Do not use `localStorage` or `sessionStorage`
- Do not clear form values on error
- No wave/diagonal section dividers
- No gradient section backgrounds
- Do not ship without testing on real mobile device

---

## Page Routes

```
/                           Home
/about                      About Us
/about/story                Founder's Story
/about/team                 Our Team
/about/advisory-board       Advisory Board
/focus-areas                Key Focus Areas
/focus-areas/stem-training
/focus-areas/tech-competitions
/focus-areas/rural-women
/focus-areas/disabilities
/programs                   Programs / Initiatives Overview
/programs/tech-fingers
/programs/one-girl-one-laptop
/programs/techfingers-platform
/stem-labs                  STEM Labs
/insights                   Insights Hub
/insights/blog
/insights/newsletters
/insights/case-studies
/insights/careers
/volunteer                  Volunteer
/contact                    Contact
/privacy                    Privacy Policy
```

---

## Build Order

1. ✅ Global layout — Navbar + Footer
2. ✅ Tailwind config — design tokens, fonts, colours
3. 🔄 Home page (in progress)
   - ✅ Hero Slider (5 slides)
   - ✅ About Strip
   - ⬜ What We Do
   - ⬜ Our Initiatives preview
   - ⬜ Partners
   - ⬜ Testimonials
   - ⬜ Email Subscription CTA
4. ⬜ About page
5. ⬜ Focus Areas
6. ⬜ Programs / Initiatives
7. ⬜ Volunteer (working form)
8. ⬜ Contact (working form)
9. ⬜ Insights / Blog
10. ⬜ Direct Chat widget (global)

---

## What Not To Do

- Do not invent colours outside the design system
- Do not add eyebrow labels above section headings
- Do not center section headings
- Do not use wave/diagonal section dividers
- Do not use gradient section backgrounds
- Do not add decorative elements that don't serve the story
- Do not load fonts via `next/font/google` — fonts are Fontshare, loaded via CSS @import
- Do not use placeholder images from random URLs — use navy bg placeholders
- Do not make body text faint with heavy opacity modifiers
- Do not clear form values on error
- Do not skip the heading scale — always use `.section-title` on section h2s

---

_Blueprint version: 4.0 — updated 2026-05-12_
