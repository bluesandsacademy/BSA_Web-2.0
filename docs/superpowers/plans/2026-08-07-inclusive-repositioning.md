# Inclusive Repositioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition Blue Sands Academy's site copy and color system from "girls/women-focused" to "general audience" (students, youth, young adults, persons with disabilities, general public) across every page, while keeping the founder's origin story intact and demoting pink from a first-class brand color to a minor accent.

**Architecture:** This is a content and CSS-class edit sweep across ~35 existing files — no new routes, no new dependencies, no data-layer changes. One new file (`lib/content.js`) holds the single genuinely-duplicated string. Every other change is in-place text/class edits to existing components and metadata objects.

**Tech Stack:** Next.js 16 (App Router), React, Tailwind CSS v4, JavaScript (no TypeScript).

## Global Constraints

- **No `next/font/google`, no `localStorage`/`sessionStorage`** — unaffected by this plan, but don't introduce either while editing these files.
- **Color mapping rule (applies to every task that touches `pink` classes):**
  - CTA buttons (`bg-pink` on `<Link>`/`<a>` buttons) → `bg-primary`. Their paired `focus-visible:ring-pink` → `focus-visible:ring-primary` (it's tied to the button's own state, not an independent accent).
  - Heading-emphasis spans (`text-pink` inside an `h1`/`h2`/`h3`, per CLAUDE.md's word-emphasis rule) → `text-primary`.
  - Decorative elements — accent bars (`bg-pink`/`border-pink` dividers, left rails, top bars on cards), decorative numerals (`text-pink` on "01/02/03"), progress-bar fills, carousel indicator dots, stat display colors, avatar/initial-chip backgrounds — → `bg-accent`/`text-accent`/`border-accent` (electric blue, `#0077FF`). Hardcoded hex `#E63F8E` in inline styles → `#0077FF`.
  - `hover:text-pink` and `hover:border-pink` on text links → **unchanged, keep as-is**. This is pink's one surviving role per the approved design.
  - The pink hex value (`#E63F8E`) itself is untouched — only which elements use it.
- **Gendered-copy rewrite rule:** replace "girl(s)/women/female/woman" references to *who BSA serves* with general-audience language (students, youth, communities, professionals — per each task's exact text below). Do **not** rewrite:
  - First-person testimonial quotes (real people's own words).
  - `components/about/StoryHero.js` narrative text (separate task, kept intentionally — see Task 14).
  - Individual blog posts in `BlogIndex.js` whose actual topic is "Women in Tech" or "Rural Women" as editorial subject matter (their `tag`/`title`/`excerpt` describe what the post is about, not who BSA serves).
  - Real proper nouns: "National Girls in ICT Competition", "Women in Tech Nigeria", "Women in Tech Africa Award", "UN Women", "UN Women HeForShe Impact Champion" — these are actual external organizations/competitions/awards; renaming them would misrepresent real affiliations.
  - Quoted press headlines in `AwardsPage.js`'s media array — rewriting a quoted article title misquotes the source.
  - `ICTCompetition.js`'s "Queen Amina College girls defeated 200+ schools" achievement line — this describes a real historical result of the (real, proper-noun) girls-only "National Girls in ICT Competition"; the participants were factually girls, so this is a historical-accuracy exception, not a tone choice.
  - Real advisory-board members' factual bios (their actual research specialty, actual organization affiliation/title, actual network composition) — only generic closing phrases like "advisor on gender and X" get "gender and" dropped; specific factual claims stay (see Task 19).
- **Program renames** (display text only — route slugs are unchanged everywhere):
  - "One Girl One Laptop" → "One Student One Laptop" (route stays `/programs/one-girl-one-laptop`)
  - "Economic Empowerment of Rural Women" → "Rural Economic Empowerment Programme" (route stays `/programs/economic-empowerment`)
- **Verification per task:** after edits, `grep -n "girl\|women\|female\|woman" <file>` should return only the intentional exceptions listed above (if any), and `npm run build` must succeed once all tasks are done (checked in the final task).

---

### Task 1: Shared audience-descriptor constant

**Files:**
- Create: `lib/content.js`

**Interfaces:**
- Produces: `AUDIENCE_DESCRIPTOR` (string), `AUDIENCE_GROUPS` (string array of 3) — imported via `@/lib/content` by Task 13 (`MissionSection.js`), Task 15 (`StoryContent.js`), Task 27 (`STEMTraining.js`), and Task 31 (`app/stem-labs/page.js`).

- [ ] **Step 1: Create the file**

```js
export const AUDIENCE_DESCRIPTOR =
  "secondary school students, undergraduates, and working professionals";

export const AUDIENCE_GROUPS = [
  "Secondary School Students",
  "Undergraduates",
  "Working Professionals",
];
```

- [ ] **Step 2: Commit**

```bash
git add lib/content.js
git commit -m "Add shared audience-descriptor content constant"
```

---

### Task 2: Delete dead-code files

**Files:**
- Delete: `components/home/Hero.js`
- Delete: `components/home/HeroSlider.cinematic.js`

Both are confirmed unused (not imported by `app/page.js` or any other file — verified via `grep -rln` across `app/` and `components/`) and contain stale girls/women-only copy duplicating the active `HeroSlider.js`.

- [ ] **Step 1: Confirm no imports (safety check)**

Run: `grep -rn "home/Hero'" app components; grep -rn "home/Hero\"" app components; grep -rn "HeroSlider.cinematic" app components`
Expected: no output (zero matches) other than the files' own definitions.

- [ ] **Step 2: Delete the files**

```bash
git rm components/home/Hero.js components/home/HeroSlider.cinematic.js
```

- [ ] **Step 3: Verify build still succeeds**

Run: `npm run build`
Expected: build succeeds with no missing-module errors.

- [ ] **Step 4: Commit**

```bash
git commit -m "Remove unused Hero.js and HeroSlider.cinematic.js (stale girls-only copy, dead code)"
```

---

### Task 3: CLAUDE.md — source of truth

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Update the mission line**

Old:
```
**Mission:** Closing the gender digital gap — empowering women and girls with ICT skills
```
New:
```
**Mission:** Closing the digital divide — equipping students, youth, and underserved communities with ICT & STEM skills
```

- [ ] **Step 2: Update the pink color-usage rule**

Old:
```
**Pink is a first-class colour.** Client requested it. Use it on:
- Primary CTA buttons (hero, CTA banners)
- One or two emphasis words inside section headings
- Progress bars, indicator dots, accent bars
- Hover states on text CTAs (`hover:text-pink`)
```
New:
```
**Pink is a minor accent only.** Blue is dominant. Pink survives on `hover:text-pink`/`hover:border-pink` text-link hover states — nothing else. Primary CTA buttons, section-heading emphasis words, progress bars, and indicator dots all use `bg-primary`/`text-primary` (CTAs, heading emphasis) or `bg-accent`/`text-accent` (decorative bars, dots, numerals) instead.
```

- [ ] **Step 3: Update the word-emphasis example**

Old:
```jsx
// ✅ Correct
<h2 className="section-title">
  Empowering Women and Girls through <span className="text-pink">ICT Skills</span>
</h2>
```
New:
```jsx
// ✅ Correct
<h2 className="section-title">
  Equipping Students and Communities through <span className="text-primary">ICT Skills</span>
</h2>
```

- [ ] **Step 4: Update Hero Slider locked-decisions bullets**

Old:
```
- Pink left accent bar (1.5px), pink progress tracks, pink CTA buttons
- Progress nav: thin tracks that fill with pink over 7s
```
New:
```
- Blue accent bar (1.5px, `bg-accent`), blue progress tracks, blue CTA buttons (`bg-primary`)
- Progress nav: thin tracks that fill with primary blue over 7s
```

- [ ] **Step 5: Update the example voice quote in the Transition Statement section**

Old:
```
- Example: *"We don't just believe in the potential of women and girls. We build it."*
```
New:
```
- Example: *"We don't just believe in the potential of students and communities. We build it."*
```

- [ ] **Step 6: Do not commit**

`CLAUDE.md` is listed in `.gitignore` ("internal dev files — never commit") and is confirmed untracked (`git ls-files | grep -x CLAUDE.md` returns nothing). The edits above are applied to the file on disk only — do not run `git add CLAUDE.md` (it will be rejected as an ignored path) and do not include it in any commit for this task. Skip straight to Task 4 once Steps 1-5 are applied.

---

### Task 4: Root metadata (`app/layout.js`)

**Files:**
- Modify: `app/layout.js`

- [ ] **Step 1: Replace the `metadata` object**

Old:
```js
export const metadata = {
  metadataBase: new URL("https://bluesandsacademy.org"),
  title: {
    default: "Blue Sands Academy — Closing the Gender Digital Gap",
    template: "%s | Blue Sands Academy",
  },
  description:
    "Blue Sands Academy empowers women and girls across Nigeria with ICT skills, STEM training, and tech entrepreneurship. Join us in closing the gender digital gap.",
  keywords: [
    "Blue Sands Academy",
    "BSA Nigeria",
    "women in tech Nigeria",
    "girls coding Nigeria",
    "ICT training for women",
    "STEM education girls Africa",
    "gender digital divide",
    "digital empowerment Nigeria",
    "tech skills women",
    "tech entrepreneurship women Nigeria",
  ],
  authors: [{ name: "Blue Sands Academy" }],
  creator: "Blue Sands Academy",
  publisher: "Blue Sands Academy",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://bluesandsacademy.org",
    siteName: "Blue Sands Academy",
    title: "Blue Sands Academy — Closing the Gender Digital Gap",
    description:
      "Empowering women and girls across Nigeria with ICT skills, STEM training, and tech entrepreneurship opportunities.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blue Sands Academy — Empowering Women in Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Sands Academy — Closing the Gender Digital Gap",
    description:
      "Empowering women and girls across Nigeria with ICT skills and STEM training.",
    images: ["/og-image.png"],
    creator: "@bluesandsacademy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bluesandsacademy.org",
  },
};
```
New:
```js
export const metadata = {
  metadataBase: new URL("https://bluesandsacademy.org"),
  title: {
    default: "Blue Sands Academy — Closing the Digital Divide",
    template: "%s | Blue Sands Academy",
  },
  description:
    "Blue Sands Academy equips students, youth, and underserved communities across Nigeria with ICT skills, STEM training, and tech entrepreneurship. Join us in closing the digital divide.",
  keywords: [
    "Blue Sands Academy",
    "BSA Nigeria",
    "ICT skills Nigeria",
    "youth coding Nigeria",
    "ICT training Nigeria",
    "STEM education Africa",
    "digital skills gap",
    "digital empowerment Nigeria",
    "tech skills training",
    "tech entrepreneurship Nigeria",
  ],
  authors: [{ name: "Blue Sands Academy" }],
  creator: "Blue Sands Academy",
  publisher: "Blue Sands Academy",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://bluesandsacademy.org",
    siteName: "Blue Sands Academy",
    title: "Blue Sands Academy — Closing the Digital Divide",
    description:
      "Equipping students, youth, and underserved communities across Nigeria with ICT skills, STEM training, and tech entrepreneurship opportunities.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blue Sands Academy — Closing the Digital Divide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Sands Academy — Closing the Digital Divide",
    description:
      "Equipping students, youth, and underserved communities across Nigeria with ICT skills and STEM training.",
    images: ["/og-image.png"],
    creator: "@bluesandsacademy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bluesandsacademy.org",
  },
};
```

- [ ] **Step 2: Replace the `jsonLd` object**

Old:
```js
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Blue Sands Academy",
  alternateName: "BSA",
  url: "https://bluesandsacademy.org",
  description:
    "Closing the gender digital gap by empowering women and girls with ICT skills and STEM training across Nigeria.",
  logo: { "@type": "ImageObject", url: "https://bluesandsacademy.org/logo.png" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "general inquiry",
    email: "info@bluesandsacademy.org",
  },
  areaServed: { "@type": "Country", name: "Nigeria" },
  knowsAbout: [
    "ICT Skills Training",
    "STEM Education",
    "Women Empowerment",
    "Digital Literacy",
    "Tech Entrepreneurship",
    "Gender Digital Divide",
  ],
  sameAs: [
    "https://twitter.com/bluesandsacademy",
    "https://linkedin.com/company/bluesandsacademy",
    "https://facebook.com/bluesandsacademy",
  ],
};
```
New:
```js
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Blue Sands Academy",
  alternateName: "BSA",
  url: "https://bluesandsacademy.org",
  description:
    "Closing the digital divide by equipping students, youth, and underserved communities with ICT skills and STEM training across Nigeria.",
  logo: { "@type": "ImageObject", url: "https://bluesandsacademy.org/logo.png" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "general inquiry",
    email: "info@bluesandsacademy.org",
  },
  areaServed: { "@type": "Country", name: "Nigeria" },
  knowsAbout: [
    "ICT Skills Training",
    "STEM Education",
    "Youth Empowerment",
    "Digital Literacy",
    "Tech Entrepreneurship",
    "Digital Divide",
  ],
  sameAs: [
    "https://twitter.com/bluesandsacademy",
    "https://linkedin.com/company/bluesandsacademy",
    "https://facebook.com/bluesandsacademy",
  ],
};
```

- [ ] **Step 3: Verify**

Run: `grep -n "girl\|women\|female\|woman\|gender" app/layout.js`
Expected: no matches.

- [ ] **Step 4: Commit**

```bash
git add app/layout.js
git commit -m "Update root metadata and JSON-LD to general-audience framing"
```

---

### Task 5: Homepage — `HeroSlider.js`

**Files:**
- Modify: `components/home/HeroSlider.js`

- [ ] **Step 1: Update slide 1**

Old:
```js
    lines: [
      "We Invest In",
      { before: "", pink: "Women", after: " and Girls" },
    ],
```
New:
```js
    lines: [
      "We Invest In",
      { before: "", pink: "People", after: " and Communities" },
    ],
```

- [ ] **Step 2: Update slide 2**

Old:
```js
    lines: [
      "Closing the Gender",
      { before: "Digital Gap ", pink: "Starts", after: " Here" },
    ],
    body: "Women and girls need to be given the tools they need to use technology.",
```
New:
```js
    lines: [
      "Closing the Digital",
      { before: "Divide ", pink: "Starts", after: " Here" },
    ],
    body: "Students, youth, and underserved communities need to be given the tools they need to use technology.",
```

- [ ] **Step 3: Update slide 3**

Old:
```js
    lines: [
      { before: "Women With ", pink: "Disabilities", after: "" },
      "Are Our Priority",
    ],
```
New:
```js
    lines: [
      { before: "Persons With ", pink: "Disabilities", after: "" },
      "Are Our Priority",
    ],
```

- [ ] **Step 4: Update slide 4**

Old:
```js
    lines: [
      "Powering Girls and",
      { before: "Women to ", pink: "Excel", after: "" },
      "in Their Chosen Field",
    ],
    body: "Moving women and girls forward through technology.",
```
New:
```js
    lines: [
      "Powering Students and",
      { before: "Youth to ", pink: "Excel", after: "" },
      "in Their Chosen Field",
    ],
    body: "Moving students and youth forward through technology.",
```

- [ ] **Step 5: Update slide 5**

Old:
```js
    lines: [
      "A Woman's Place",
      { before: "Is in the ", pink: "Revolution", after: "" },
    ],
    body: "Creating a generation of female leaders in technology.",
```
New:
```js
    lines: [
      "Everyone Has a Place",
      { before: "In the ", pink: "Revolution", after: "" },
    ],
    body: "Creating a generation of leaders in technology.",
```

(The `pink:` object key stays as-is — it's an internal data-field name, not user-facing; only the rendered className changes in Step 6.)

- [ ] **Step 6: Apply color-class changes**

| Location | Old | New |
|---|---|---|
| `renderLine()` emphasis span | `className="text-pink"` | `className="text-primary"` |
| Right-side vertical divider (~55%) | `bg-pink` (in `"...w-px bg-pink z-10"`) | `bg-accent` |
| Far-left vertical divider | `bg-pink` (in `"...w-px bg-pink z-10"`) | `bg-accent` |
| Pink accent bridge (`rounded-full ... animate-fade-up`) | `bg-pink` | `bg-accent` |
| Primary CTA button | `bg-pink text-white ... focus-visible:ring-pink` | `bg-primary text-white ... focus-visible:ring-primary` |
| Mobile progress fill | `bg-pink` (`"absolute inset-0 rounded-full bg-pink origin-left"`) | `bg-primary` |
| Desktop progress fill | `bg-pink` (`"absolute inset-0 rounded-full bg-pink origin-left"`) | `bg-primary` |

- [ ] **Step 7: Verify**

Run: `grep -n "girl\|women\|female\|woman\|Woman" components/home/HeroSlider.js`
Expected: no matches. Then `grep -n "bg-pink\|text-pink" components/home/HeroSlider.js` — expected: no matches (all converted).

- [ ] **Step 8: Commit**

```bash
git add components/home/HeroSlider.js
git commit -m "Rewrite hero slider copy for general audience, demote pink to accent/primary"
```

---

### Task 6: Homepage — `AboutStrip.js`

**Files:**
- Modify: `components/home/AboutStrip.js`

- [ ] **Step 1: Update the facts stat label**

Old:
```js
const facts = [
  { value: "2018", label: "Year founded" },
  { value: "6+", label: "States reached" },
  { value: "3", label: "Flagship programmes" },
  { value: "100%", label: "Women-focused" },
];
```
New:
```js
const facts = [
  { value: "2018", label: "Year founded" },
  { value: "6+", label: "States reached" },
  { value: "3", label: "Flagship programmes" },
  { value: "100%", label: "Access-Focused" },
];
```

- [ ] **Step 2: Update the first body paragraph**

Old:
```jsx
            <p className="font-body text-white/85 leading-relaxed">
              Blue Sands Academy offers ICT courses to female students. We focus
              our efforts on assisting girls and women in developing technical
              skills, from secondary school girls to female college students to
              working professionals. We hope to close the gender digital gap by
              providing women with ICT training and other tech skills.
            </p>
```
New:
```jsx
            <p className="font-body text-white/85 leading-relaxed">
              Blue Sands Academy offers ICT courses to students of all
              backgrounds. We focus our efforts on equipping learners with
              technical skills, reaching secondary school students,
              undergraduates, and working professionals. We hope to close the
              digital divide by providing accessible ICT training and other
              tech skills.
            </p>
```

- [ ] **Step 3: Update the second body paragraph**

Old:
```jsx
            <p className="font-body text-white/85 leading-relaxed">
              Blue Sands Academy, a training company, aims to close the gender
              digital divide by providing women with ICT training and other IT
              skills. We believe that encouraging young girls' interest in digital
              technology is critical. Furthermore, we believe that this is an
              excellent and necessary way to improve the lives of girls.
            </p>
```
New:
```jsx
            <p className="font-body text-white/85 leading-relaxed">
              Blue Sands Academy, a training company, aims to close the digital
              divide by providing students, youth, and underserved communities
              with ICT training and other IT skills. We believe that
              encouraging young people's interest in digital technology is
              critical. Furthermore, we believe that this is an excellent and
              necessary way to improve lives and expand opportunity.
            </p>
```

- [ ] **Step 4: Apply color-class change**

Heading emphasis: `<span className="text-pink">Blue Sands</span>` → `<span className="text-primary">Blue Sands</span>`

`hover:text-pink` on the CTA text link (near end of file) stays unchanged.

- [ ] **Step 5: Verify**

Run: `grep -n "girl\|women\|female\|woman" components/home/AboutStrip.js`
Expected: no matches.

- [ ] **Step 6: Commit**

```bash
git add components/home/AboutStrip.js
git commit -m "Rewrite About Strip copy for general audience"
```

---

### Task 7: Homepage — `WhatWeDo.js`

**Files:**
- Modify: `components/home/WhatWeDo.js`

- [ ] **Step 1: Update the Tech Competition feature body**

Old:
```js
    body: "Blue Sands Academy offers cutting-edge and appealing models that will allow girls to test their ability and refine their skills in order to pique interest in adopting ICT as the new norm in the twenty-first century through contests.",
```
New:
```js
    body: "Blue Sands Academy offers cutting-edge and appealing models that will allow students to test their ability and refine their skills in order to pique interest in adopting ICT as the new norm in the twenty-first century through contests.",
```

- [ ] **Step 2: Rename and update the Economic Empowerment feature**

Old:
```js
  {
    num: "03",
    title: "Economic Empowerment of Rural Women",
    body: "The basic economic, environmental, and social reforms necessary for sustainable development are essentially the responsibility of rural women. We provide business education, funding, and opportunity for rural women.",
    href: "/programs/economic-empowerment",
    imageLeft: true,
    imageCaption: "Rural women empowerment programme",
    image: "/what-we-do/row3.jpg",
  },
```
New:
```js
  {
    num: "03",
    title: "Rural Economic Empowerment Programme",
    body: "The basic economic, environmental, and social reforms necessary for sustainable development are essentially the responsibility of rural communities. We provide business education, funding, and opportunity for rural communities.",
    href: "/programs/economic-empowerment",
    imageLeft: true,
    imageCaption: "Rural communities empowerment programme",
    image: "/what-we-do/row3.jpg",
  },
```

- [ ] **Step 3: Rename the One Girl One Laptop feature**

Old:
```js
  {
    num: "04",
    title: "One Girl One Laptop Initiative",
    body: "We donate a free laptop to any successful student in our physical training programme who cannot afford a computer for ongoing learning, done in collaboration with the government and corporate stakeholders.",
    href: "/programs/one-girl-one-laptop",
    imageLeft: false,
    imageCaption: "One Girl One Laptop Initiative",
    image: "/what-we-do/row4.jpg",
  },
```
New:
```js
  {
    num: "04",
    title: "One Student One Laptop Initiative",
    body: "We donate a free laptop to any successful student in our physical training programme who cannot afford a computer for ongoing learning, done in collaboration with the government and corporate stakeholders.",
    href: "/programs/one-girl-one-laptop",
    imageLeft: false,
    imageCaption: "One Student One Laptop Initiative",
    image: "/what-we-do/row4.jpg",
  },
```

- [ ] **Step 4: Apply color-class changes**

| Location | Old | New |
|---|---|---|
| Top bar on each feature image | `bg-pink` (`"absolute top-0 left-0 right-0 h-1.5 bg-pink z-10"`) | `bg-accent` |
| Section heading emphasis | `Key <span className="text-pink">Focus Areas</span>` | `text-primary` |

`hover:text-pink` on the per-feature "Learn more" link stays unchanged.

- [ ] **Step 5: Verify**

Run: `grep -n "girl\|women\|female\|woman" components/home/WhatWeDo.js`
Expected: no matches.

- [ ] **Step 6: Commit**

```bash
git add components/home/WhatWeDo.js
git commit -m "Rewrite What We Do copy and rename Rural Women/One Girl One Laptop features"
```

---

### Task 8: Homepage — `OurInitiatives.js`, `MilestoneCallout.js`, `TransitionStatement.js`

These three components exist but are not currently wired into `app/page.js` (confirmed via grep — not imported anywhere). They're edited anyway since they're part of the intended design system (CLAUDE.md's Section Background Rhythm table) and contain the same stale copy.

**Files:**
- Modify: `components/home/OurInitiatives.js`
- Modify: `components/home/MilestoneCallout.js`
- Modify: `components/home/TransitionStatement.js`

- [ ] **Step 1: `OurInitiatives.js` — update ICT Competitions body** ("National Girls in ICT Competition" is a real competition name, left unchanged)

Old:
```js
    title: "ICT Competitions",
    body: "Our students have competed on the national stage — and won. In 2019, BSA girls defeated 150+ schools in the Mandela Washington Alumni Network competition and 200+ schools in the National Girls in ICT Competition.",
```
New:
```js
    title: "ICT Competitions",
    body: "Our students have competed on the national stage — and won. In 2019, BSA students defeated 150+ schools in the Mandela Washington Alumni Network competition and 200+ schools in the National Girls in ICT Competition.",
```

- [ ] **Step 2: `OurInitiatives.js` — update Tech Fingers body**

Old:
```js
    title: "Tech Fingers",
    body: "Our on-site and online secondary school training programme. We connect girls to tech skills — UI/UX, mobile app development, web development, and animation — and pair them with female mentors guiding them into careers in technology.",
```
New:
```js
    title: "Tech Fingers",
    body: "Our on-site and online secondary school training programme. We connect students to tech skills — UI/UX, mobile app development, web development, and animation — and pair them with experienced mentors guiding them into careers in technology.",
```

- [ ] **Step 3: `OurInitiatives.js` — rename and update One Girl One Laptop entry**

Old:
```js
  {
    num: "03",
    title: "One Girl One Laptop",
    body: "Every successful student in our physical training programme who cannot afford a computer receives a free laptop — removing the final barrier between a girl and her digital future.",
    href: "/programs/one-girl-one-laptop",
  },
```
New:
```js
  {
    num: "03",
    title: "One Student One Laptop",
    body: "Every successful student in our physical training programme who cannot afford a computer receives a free laptop — removing the final barrier between a student and their digital future.",
    href: "/programs/one-girl-one-laptop",
  },
```

- [ ] **Step 4: `OurInitiatives.js` — apply color-class changes**

| Location | Old | New |
|---|---|---|
| Large "01/02/03" numeral | `text-pink` | `text-accent` |
| Section heading emphasis | `Our <span className="text-pink">Initiatives</span>` | `text-primary` |

`hover:text-pink` on the "Learn More" link stays unchanged.

- [ ] **Step 5: `MilestoneCallout.js` — apply color-class changes**

("National Girls in ICT Competition · 2019" label stays unchanged — proper noun.)

| Location | Old | New |
|---|---|---|
| `achievements[1].color` ("150+" stat) | `"#E63F8E"` | `"#0077FF"` |
| `achievements[2].color` ("200+" stat) | `"#E63F8E"` | `"#0077FF"` |
| Heading emphasis | `<span className="text-pink">speaks for itself.</span>` | `text-primary` |
| Divider above each card | `bg-pink` (`"w-full h-0.5 bg-pink mb-8"`) | `bg-accent` |

`hover:text-pink` on "Read the full story" stays unchanged.

- [ ] **Step 6: `TransitionStatement.js` — rewrite and recolor**

Old:
```jsx
          We don&rsquo;t just believe in the potential of women and girls{" "}
          <span className="text-pink">&mdash; we build it.</span>
```
New:
```jsx
          We don&rsquo;t just believe in the potential of students and communities{" "}
          <span className="text-primary">&mdash; we build it.</span>
```

- [ ] **Step 7: Verify**

Run: `grep -n "girl\|women\|female\|woman" components/home/OurInitiatives.js components/home/MilestoneCallout.js components/home/TransitionStatement.js`
Expected: only "National Girls in ICT Competition" in `OurInitiatives.js` and `MilestoneCallout.js`.

- [ ] **Step 8: Commit**

```bash
git add components/home/OurInitiatives.js components/home/MilestoneCallout.js components/home/TransitionStatement.js
git commit -m "Rewrite Our Initiatives, Milestone Callout, Transition Statement for general audience"
```

---

### Task 9: Homepage — `STEMLabsHome.js`

**Files:**
- Modify: `components/home/STEMLabsHome.js`

- [ ] **Step 1: Update highlights stat label**

Old:
```js
const highlights = [
  { stat: "3", label: "Active STEM labs across Nigeria" },
  { stat: "6+", label: "States with BSA lab presence" },
  { stat: "100%", label: "Female-focused learning environment" },
];
```
New:
```js
const highlights = [
  { stat: "3", label: "Active STEM labs across Nigeria" },
  { stat: "6+", label: "States with BSA lab presence" },
  { stat: "100%", label: "Inclusive learning environment" },
];
```

- [ ] **Step 2: Update body paragraph**

Old:
```jsx
              Our STEM Labs are purpose-built spaces where women and girls get hands-on
              access to computers, design tools, and technical mentorship. Not virtual.
              Not theoretical. Real equipment in real communities.
```
New:
```jsx
              Our STEM Labs are purpose-built spaces where students and communities get
              hands-on access to computers, design tools, and technical mentorship. Not
              virtual. Not theoretical. Real equipment in real communities.
```

- [ ] **Step 3: Apply color-class changes**

| Location | Old | New |
|---|---|---|
| Left accent bar | `bg-pink` (`"absolute left-0 top-0 bottom-0 w-px bg-pink"`) | `bg-accent` |
| Heading emphasis | `Blue Sands <span className="text-pink">STEM Labs</span>` | `text-primary` |
| Mini rule under heading | `bg-pink` (`"rounded-full bg-pink mb-8"`) | `bg-accent` |

`hover:text-pink` on "Explore our labs" stays unchanged.

- [ ] **Step 4: Verify**

Run: `grep -n "girl\|women\|female\|woman" components/home/STEMLabsHome.js`
Expected: no matches.

- [ ] **Step 5: Commit**

```bash
git add components/home/STEMLabsHome.js
git commit -m "Rewrite STEM Labs homepage preview for general audience"
```

---

### Task 10: Homepage — `Testimonials.js` and `Partners.js`

Testimonial quotes are **not rewritten** (real people's own words) — this task only touches color classes and one non-testimonial label.

**Files:**
- Modify: `components/home/Testimonials.js`
- Modify: `components/home/Partners.js`

- [ ] **Step 1: `Testimonials.js` — apply color-class changes**

| Location | Old | New |
|---|---|---|
| Heading emphasis | `Voices of{" "}<span className="text-pink">Change</span>` | `text-primary` |
| Context label above each quote (e.g. "National ICT Competition Champion") | `text-pink` (`"font-body font-bold text-pink text-xs uppercase tracking-[0.16em] mb-6"`) | `text-primary` |
| Carousel pagination dot (active state) | `backgroundColor: i === current ? "#e63f8e" : "#e2ebf6"` | `backgroundColor: i === current ? "#0044cc" : "#e2ebf6"` |

- [ ] **Step 2: `Partners.js` — update statement line**

Old:
```jsx
        <p className="font-body text-muted" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
          Trusted by organisations working to close the digital gender gap.
        </p>
```
New:
```jsx
        <p className="font-body text-muted" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
          Trusted by organisations working to close the digital divide.
        </p>
```

- [ ] **Step 3: `Partners.js` — apply color-class change**

Heading emphasis: `Our <span className="text-pink">Partners</span>` → `text-primary`

- [ ] **Step 4: Verify**

Run: `grep -n "girl\|women\|female\|woman\|gender" components/home/Testimonials.js components/home/Partners.js`
Expected: no matches (testimonial quotes containing "girl"/"boys" are intentionally untouched, confirm they're still present unchanged).

- [ ] **Step 5: Commit**

```bash
git add components/home/Testimonials.js components/home/Partners.js
git commit -m "Demote pink to primary/accent in Testimonials and Partners; update Partners tagline"
```

---

### Task 11: Homepage — `BlogPreview.js`

**Files:**
- Modify: `components/home/BlogPreview.js`

- [ ] **Step 1: Update the Digital Literacy post excerpt**

This post's `tag` is `"Education"`, not "Women in Tech" — it's not the editorial-topic carve-out, so it's rewritten for consistency with the general-audience framing.

Old:
```js
    excerpt: "With over 90% of jobs now requiring digital competency, the cost of leaving women and girls out of the digital economy is not just social. It is economic.",
```
New:
```js
    excerpt: "With over 90% of jobs now requiring digital competency, the cost of leaving students, youth, and underserved communities out of the digital economy is not just social. It is economic.",
```

- [ ] **Step 2: Rename the One Girl One Laptop blog post title**

Old:
```js
    title: "From Trainee to Tech Lead: How One Girl One Laptop Changed a Graduate's Career",
```
New:
```js
    title: "From Trainee to Tech Lead: How One Student One Laptop Changed a Graduate's Career",
```

- [ ] **Step 3: Apply color-class changes**

| Location | Old | New |
|---|---|---|
| Heading emphasis | `From the <span className="text-pink">Blog</span>` | `text-primary` |

`hover:border-pink` (post card top border) and `group-hover:text-pink`/`hover:text-pink` (Read more, View all posts ×2) stay unchanged — hover states.

- [ ] **Step 4: Verify**

Run: `grep -n "girl\|women\|female\|woman" components/home/BlogPreview.js`
Expected: no matches.

- [ ] **Step 5: Commit**

```bash
git add components/home/BlogPreview.js
git commit -m "Rewrite Blog Preview excerpt and rename One Girl One Laptop post title"
```

---

### Task 12: Homepage — `TeamHome.js`

**Files:**
- Modify: `components/home/TeamHome.js`

- [ ] **Step 1: Update mission paragraph**

Old:
```jsx
              A focused team of educators, technologists, and community builders
              who have committed their skills to one mission: closing the gender
              digital gap in Nigeria.
```
New:
```jsx
              A focused team of educators, technologists, and community builders
              who have committed their skills to one mission: closing the digital
              divide in Nigeria.
```

- [ ] **Step 2: Apply color-class changes**

| Location | Old | New |
|---|---|---|
| Member avatar-initial chip background/border | `style={{ background: "rgba(230,63,142,0.15)", border: "1px solid rgba(230,63,142,0.25)" }}` | `style={{ background: "rgba(0,119,255,0.15)", border: "1px solid rgba(0,119,255,0.25)" }}` |
| Heading emphasis | `The <span className="text-pink">Team</span>` | `text-primary` |
| Mini rule under heading | `bg-pink` (`"rounded-full bg-pink mb-8"`) | `bg-accent` |

`hover:text-pink` on "Meet everyone" stays unchanged.

- [ ] **Step 3: Verify**

Run: `grep -n "girl\|women\|female\|woman\|gender" components/home/TeamHome.js`
Expected: no matches.

- [ ] **Step 4: Commit**

```bash
git add components/home/TeamHome.js
git commit -m "Rewrite Team Home mission line, demote pink to accent"
```

---

### Task 13: About — `MissionSection.js`

**Files:**
- Modify: `components/about/MissionSection.js`

**Interfaces:**
- Consumes: `AUDIENCE_DESCRIPTOR` from `@/lib/content` (Task 1).

- [ ] **Step 1: Add the import**

At the top of the file, add:
```js
import { AUDIENCE_DESCRIPTOR } from "@/lib/content";
```

- [ ] **Step 2: Update the stat label**

Old:
```js
  { value: "100%", label: "Women-focused" },
```
New:
```js
  { value: "100%", label: "Access-Focused" },
```

- [ ] **Step 3: Update the Vision paragraph**

Old:
```jsx
              To give young girls and women access to digital technology-based,
              life-altering opportunities so they can achieve fulfillment in both
              their personal and professional lives, creating the{" "}
              <span className="font-semibold text-secondary">tech-preneurs</span> of
              tomorrow, women who will use technology to tackle the world's issues.
```
New:
```jsx
              To equip students, youth, and underserved communities with access
              to digital technology-based, life-altering opportunities so they
              can achieve fulfillment in both their personal and professional
              lives, creating the{" "}
              <span className="font-semibold text-secondary">tech-preneurs</span> of
              tomorrow — innovators who will use technology to tackle the world's issues.
```

- [ ] **Step 4: Update the Mission paragraph**

Old:
```jsx
              To actively empower women and girls with ICT, business, and financial
              literacy skills in order to elevate them to be{" "}
              <span className="font-semibold text-secondary">leaders and agents of change</span>.
```
New:
```jsx
              To actively empower students, youth, and underserved communities with ICT, business, and financial
              literacy skills in order to elevate them to be{" "}
              <span className="font-semibold text-secondary">leaders and agents of change</span>.
```

- [ ] **Step 5: Update the audience-triad paragraph using the shared constant**

Old:
```jsx
              Blue Sands Academy is a training centre for girls in ICT, focused on
              building the technological capacities of females, starting with
              secondary school girls, female undergraduates, and female
              professionals. We believe that fostering young girls' interest in
              technology starts at an early age, and that this is not only a good
              idea, but an essential one.
```
New:
```jsx
              Blue Sands Academy is a training centre for ICT skills, focused on
              building the technological capacities of students and communities,
              starting with {AUDIENCE_DESCRIPTOR}. We believe
              that fostering young people's interest in technology starts at an
              early age, and that this is not only a good idea, but an essential one.
```

- [ ] **Step 6: Update the founding paragraph**

Old:
```jsx
              Founded by Alero Thompson in 2018, BSA was born from a clear
              recognition that technology was changing rapidly and training
              programmes for women and girls in ICT were severely lacking.
              We set out to close that gap. We are still closing it.
```
New:
```jsx
              Founded by Alero Thompson in 2018, BSA was born from a clear
              recognition that technology was changing rapidly and training
              programmes in ICT were severely lacking for students and
              underserved communities. We set out to close that gap. We are
              still closing it.
```

- [ ] **Step 7: Apply color-class changes**

| Location | Old | New |
|---|---|---|
| Border above "Our Vision" label | `border-pink` (`"border-t-2 border-pink pt-8"`) | `border-accent` |
| Heading emphasis | `<span className="text-pink">Purpose</span>` | `text-primary` |

- [ ] **Step 8: Verify**

Run: `grep -n "girl\|women\|female\|woman" components/about/MissionSection.js`
Expected: no matches.

- [ ] **Step 9: Commit**

```bash
git add components/about/MissionSection.js
git commit -m "Rewrite Mission Section for general audience using shared audience-descriptor constant"
```

---

### Task 14: About — `StoryHero.js` (origin story kept, pivot line added)

Per the approved design, this is the one place gendered narrative language stays — it's the founder's origin story. This task adds one pivot sentence marking the broadening, and still demotes the file's pink CSS to accent (the color-system change is sitewide; only the narrative text is intentionally preserved).

**Files:**
- Modify: `components/about/StoryHero.js`

- [ ] **Step 1: Add a pivot line after the existing origin narrative**

Old:
```jsx
              She grew up watching the gap widen. The girl who couldn't apply for
              the job because she couldn't use a computer. The woman who watched
              opportunity pass her by because no one had ever taught her how to
              reach for it. Then she decided the waiting was over.
```
New:
```jsx
              She grew up watching the gap widen. The girl who couldn't apply for
              the job because she couldn't use a computer. The woman who watched
              opportunity pass her by because no one had ever taught her how to
              reach for it. Then she decided the waiting was over.
              <br /><br />
              What started as a mission for girls became a mission for anyone
              the digital economy had left behind — students, youth, persons
              with disabilities, and underserved communities across Nigeria.
```

(If the surrounding markup is a single `<p>` rather than one that supports `<br /><br />` cleanly, split into two adjacent `<p>` tags matching the file's existing paragraph styling instead — check the file's actual JSX structure before applying and preserve its existing className.)

- [ ] **Step 2: Apply color-class changes**

| Location | Old | New |
|---|---|---|
| Left accent bar | `bg-pink` (`"absolute left-0 top-0 bottom-0 w-px bg-pink z-10"`) | `bg-accent` |
| Founder role label | `text-pink` (`"font-body font-medium text-pink mb-10"`) | `text-accent` |
| Bridge bar | `bg-pink` (`"rounded-full bg-pink mb-8"`) | `bg-accent` |
| Photo placeholder top bar | `bg-pink` (`"absolute top-0 left-0 right-0 h-1 bg-pink z-10"`) | `bg-accent` |
| Initials-circle inline style | `background: "rgba(230,63,142,0.2)", border: "1px solid rgba(230,63,142,0.3)"` | `background: "rgba(0,119,255,0.2)", border: "1px solid rgba(0,119,255,0.3)"` |

- [ ] **Step 3: Verify**

Run: `grep -n "bg-pink\|text-pink" components/about/StoryHero.js`
Expected: no matches. The gendered narrative text (girl/woman/she/her) should still be present — confirm with `grep -n "girl\|woman\|she\b\|her\b" components/about/StoryHero.js`.

- [ ] **Step 4: Commit**

```bash
git add components/about/StoryHero.js
git commit -m "Add pivot line to founder origin story, demote pink to accent"
```

---

### Task 15: About — `StoryContent.js`

**Files:**
- Modify: `components/about/StoryContent.js`

**Interfaces:**
- Consumes: `AUDIENCE_DESCRIPTOR` from `@/lib/content` (Task 1).

- [ ] **Step 1: Add the import**

```js
import { AUDIENCE_DESCRIPTOR } from "@/lib/content";
```

- [ ] **Step 2: Update `dataPoints` array**

Old:
```js
const dataPoints = [
  { value: "7 in 10", label: "Girls in Nigeria and across Africa lack computer literacy skills" },
  { value: "85%",     label: "Of women lack the tech skills required by today's jobs" },
  { value: "90%+",    label: "Of jobs today have a significant digital component" },
  { value: "2013",    label: "Year Africa's digital gender gap started widening. It hasn't stopped." },
];
```
New:
```js
const dataPoints = [
  { value: "7 in 10", label: "Young people in Nigeria and across Africa lack computer literacy skills" },
  { value: "85%",     label: "Of underserved communities lack the tech skills required by today's jobs" },
  { value: "90%+",    label: "Of jobs today have a significant digital component" },
  { value: "2013",    label: "Year Africa's digital skills gap started widening. It hasn't stopped." },
];
```

- [ ] **Step 3: "In Her Own Words" heading — kept as-is**

This heading refers specifically to founder Alero Thompson's own quoted words (a real, named woman), so "Her" is a factual reference and is not degendered — consistent with keeping `StoryHero.js`'s narrative. Only its pink span converts: `In Her <span className="text-pink">Own Words</span>` → `In Her <span className="text-primary">Own Words</span>`.

- [ ] **Step 4: Update "digital gender gap" phrase**

Old:
```jsx
                  I grew up in a community where the computer literacy gap is very wide.
                  Despite having the highest growth in internet penetration across the globe,
                  Africa remains the only continent whose digital gender gap has widened
                  since 2013. Barriers contributing to the gap include unaffordable access,
                  threats to access and use, low digital literacy and confidence, and the lack
                  of relevant content, applications, and services.
```
New:
```jsx
                  I grew up in a community where the computer literacy gap is very wide.
                  Despite having the highest growth in internet penetration across the globe,
                  Africa remains the only continent whose digital divide has widened
                  since 2013. Barriers contributing to the gap include unaffordable access,
                  threats to access and use, low digital literacy and confidence, and the lack
                  of relevant content, applications, and services.
```

- [ ] **Step 5: Update jobs/skills-gap quote**

Old:
```jsx
                  Over 90% of jobs presently have a digital component, and 85% of women
                  do not have the required tech skills to fill in these gaps. Another
                  problem we are tackling is that 7 in 10 girls in Nigeria and across
                  Africa lack computer literacy skills.
```
New:
```jsx
                  Over 90% of jobs presently have a digital component, and 85% of underserved communities
                  do not have the required tech skills to fill in these gaps. Another
                  problem we are tackling is that 7 in 10 young people in Nigeria and across
                  Africa lack computer literacy skills.
```

- [ ] **Step 6: Update training-challenges quote**

Old:
```jsx
                  I have had some challenges in training women and girls, including a lack
                  of technological components, especially computers, cultural norms, and
                  financial capacity to build tech solutions and run tech programmes.
```
New:
```jsx
                  I have had some challenges in training students and communities, including a lack
                  of technological components, especially computers, cultural norms, and
                  financial capacity to build tech solutions and run tech programmes.
```

- [ ] **Step 7: Update community-norms quote**

Old:
```jsx
                  In many communities, the idea of a girl spending time on a computer,
                  rather than on domestic duties, is a point of contention that must be
                  navigated with patience and proof. The financial capacity to build and
                  sustain tech programmes in underserved areas remains a persistent and
                  honest challenge.
```
New:
```jsx
                  In many communities, the idea of a young person spending time on a computer,
                  rather than on domestic or family duties, is a point of contention that must be
                  navigated with patience and proof. The financial capacity to build and
                  sustain tech programmes in underserved areas remains a persistent and
                  honest challenge.
```

- [ ] **Step 8: Update "options" pull-quote**

Old:
```jsx
                  But the obstacles don't change what is true: a woman with digital
                  skills is a woman with options. And a community where women have
                  options is a community that grows.
```
New:
```jsx
                  But the obstacles don't change what is true: a person with digital
                  skills is a person with options. And a community where people have
                  options is a community that grows.
```

- [ ] **Step 9: Update image alt text**

Old:
```jsx
                alt="Women in a rural community learning digital skills"
```
New:
```jsx
                alt="Community members in a rural area learning digital skills"
```

- [ ] **Step 10: Update Vision paragraph (duplicate of MissionSection wording)**

Old:
```jsx
                  To give young girls and women access to digital technology-based,
                  life-altering opportunities so they can achieve fulfilment in both
                  their personal and professional lives. In essence, we are creating
                  the{" "}
                  <span className="font-semibold text-secondary">"tech-preneurs"</span>{" "}
                  of tomorrow — women who will use technology to tackle the world's issues.
```
New:
```jsx
                  To equip students, youth, and underserved communities with access
                  to digital technology-based, life-altering opportunities so they
                  can achieve fulfilment in both their personal and professional
                  lives. In essence, we are creating the{" "}
                  <span className="font-semibold text-secondary">"tech-preneurs"</span>{" "}
                  of tomorrow — innovators who will use technology to tackle the world's issues.
```

- [ ] **Step 11: Update Mission paragraph (duplicate)**

Old:
```jsx
                  To actively empower women and girls with ICT, business, and financial
                  literacy skills in order to elevate them to be{" "}
                  <span className="font-semibold text-secondary">leaders and agents of change</span>.
```
New:
```jsx
                  To actively empower students, youth, and underserved communities with ICT, business, and financial
                  literacy skills in order to elevate them to be{" "}
                  <span className="font-semibold text-secondary">leaders and agents of change</span>.
```

- [ ] **Step 12: Update "About BSA" prose using the shared constant**

Old:
```jsx
                  Blue Sands Academy is a training centre for girls in ICT. We focus on
                  building the technological capacities of females, starting with secondary
                  school girls, female undergraduates, and female professionals. We believe
                  that fostering young girls' interest in technology starts at an early age,
                  and that this is not only a good idea but an essential one.
```
New:
```jsx
                  Blue Sands Academy is a training centre for ICT skills. We focus on
                  building the technological capacities of students and communities,
                  starting with {AUDIENCE_DESCRIPTOR}. We believe
                  that fostering young people's interest in technology starts at an early age,
                  and that this is not only a good idea but an essential one.
```

- [ ] **Step 13: Update founding paragraph (duplicate)**

Old:
```jsx
                  Blue Sands Academy was founded by Alero Thompson, who recognised that
                  the world of technology was changing rapidly and that training programmes
                  for women and girls in ICT were severely lacking. We set out to close
                  that gap. We are still closing it.
```
New:
```jsx
                  Blue Sands Academy was founded by Alero Thompson, who recognised that
                  the world of technology was changing rapidly and that training programmes
                  in ICT were severely lacking for students and underserved communities. We set out to close
                  that gap. We are still closing it.
```

- [ ] **Step 14: Update closing CTA prose**

Old:
```jsx
                Blue Sands Academy is not a charity project. It is an investment in the
                most underleveraged asset in Nigerian society: the intelligence, ambition,
                and capability of its women and girls.
```
New:
```jsx
                Blue Sands Academy is not a charity project. It is an investment in the
                most underleveraged asset in Nigerian society: the intelligence, ambition,
                and capability of its students, youth, and communities.
```

- [ ] **Step 15: Apply color-class changes**

| Location | Old | New |
|---|---|---|
| "In Her Own Words" span | `text-pink` | `text-primary` |
| Data-point stat bar | `border-pink` (`"border-t-2 border-pink pt-6"`) | `border-accent` |
| Pull-quote left bar | `bg-pink` (`"absolute left-0 top-0 bottom-0 w-px bg-pink"`) | `bg-accent` |
| "teaching never leaves" span | `text-pink` | `text-primary` |
| "Building It Anyway" span | `text-pink` | `text-primary` |
| "Vision & Mission" span | `text-pink` | `text-primary` |
| Vision block border | `border-pink` (`"border-t-2 border-pink pt-8"`) | `border-accent` |
| "About Blue Sands Academy" span | `text-pink` | `text-primary` |
| Closing CTA border | `border-pink` (`"border-t-2 border-pink pt-10 max-w-2xl"`) | `border-accent` |
| "Be Part of the Change" span | `text-pink` | `text-primary` |
| Primary CTA button | `bg-pink ... focus-visible:ring-pink` | `bg-primary ... focus-visible:ring-primary` |

`hover:text-pink` on the "Meet the Team" link stays unchanged.

- [ ] **Step 16: Verify**

Run: `grep -n "girl\|women\|female\|woman" components/about/StoryContent.js`
Expected: no matches (the "In Her" reference uses "Her", not one of these terms, so it won't appear in this grep).

- [ ] **Step 17: Commit**

```bash
git add components/about/StoryContent.js
git commit -m "Rewrite Story Content page for general audience using shared audience-descriptor constant"
```

---

### Task 16: About — `AboutHero.js`

**Files:**
- Modify: `components/about/AboutHero.js`

- [ ] **Step 1: Update the h1 headline**

Old:
```jsx
          A Nigeria Where<br />
          Every{" "}
          <span className="text-pink">Woman</span><br />
          Has Digital Power.
```
New:
```jsx
          A Nigeria Where<br />
          Every{" "}
          <span className="text-primary">Person</span><br />
          Has Digital Power.
```

- [ ] **Step 2: Update subhead paragraph**

Old:
```jsx
          Founded in 2018 and operating across 6 states, Blue Sands Academy
          is building the infrastructure of female digital empowerment in Nigeria.
        </p>
```
New:
```jsx
          Founded in 2018 and operating across 6 states, Blue Sands Academy
          is building the infrastructure of digital empowerment in Nigeria.
        </p>
```

- [ ] **Step 3: Apply remaining color-class changes**

| Location | Old | New |
|---|---|---|
| Left bar | `bg-pink` (`"absolute left-0 top-0 bottom-0 w-px bg-pink z-10"`) | `bg-accent` |
| Bridge bar | `className="rounded-full bg-pink"` | `className="rounded-full bg-accent"` |

- [ ] **Step 4: Verify**

Run: `grep -n "girl\|women\|female\|woman" components/about/AboutHero.js`
Expected: no matches.

- [ ] **Step 5: Commit**

```bash
git add components/about/AboutHero.js
git commit -m "Rewrite About Hero headline for general audience, demote pink to accent"
```

---

### Task 17: About — `ValuesSection.js`

**Files:**
- Modify: `components/about/ValuesSection.js`

- [ ] **Step 1: Update value "01" body**

Old:
```js
    body: "We go where the gap is widest: rural communities, underserved schools, and women with disabilities. If the opportunity isn't there, we build it.",
```
New:
```js
    body: "We go where the gap is widest: rural communities, underserved schools, and persons with disabilities. If the opportunity isn't there, we build it.",
```

- [ ] **Step 2: Update value "02" body**

Old:
```js
    body: "We build real technical capacity. The women we train compete on merit. Our graduates hold their own in any room.",
```
New:
```js
    body: "We build real technical capacity. The students we train compete on merit. Our graduates hold their own in any room.",
```

- [ ] **Step 3: Apply color-class changes**

| Location | Old | New |
|---|---|---|
| Value-card top border | `border-pink` (`"relative pt-8 border-t-2 border-pink transition-..."`) | `border-accent` |
| Heading emphasis | `<span className="text-pink">Stand For</span>` | `text-primary` |

- [ ] **Step 4: Verify**

Run: `grep -n "girl\|women\|female\|woman" components/about/ValuesSection.js`
Expected: no matches.

- [ ] **Step 5: Commit**

```bash
git add components/about/ValuesSection.js
git commit -m "Rewrite Values Section for general audience, demote pink to accent"
```

---

### Task 18: About — `TeamPage.js`

**Files:**
- Modify: `components/about/TeamPage.js`

- [ ] **Step 1: Update hero subhead**

Old:
```jsx
          <p className="font-body text-white/85 mt-6 max-w-lg" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            A focused team with a clear conviction: the gender digital gap in
            Nigeria closes when women build the tools to close it themselves.
          </p>
```
New:
```jsx
          <p className="font-body text-white/85 mt-6 max-w-lg" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            A focused team with a clear conviction: the digital skills gap in
            Nigeria closes when communities build the tools to close it themselves.
          </p>
```

- [ ] **Step 2: Apply color-class changes**

| Location | Old | New |
|---|---|---|
| Top bar on photo | `bg-pink` (`"absolute top-0 left-0 right-0 h-1 bg-pink z-10"`) | `bg-accent` |
| Hero left bar | `bg-pink` (`"absolute left-0 top-0 bottom-0 w-px bg-pink z-10"`) | `bg-accent` |
| "Building" heading emphasis | `text-pink` | `text-primary` |
| Bar under hero subhead | `bg-pink` (`"rounded-full bg-pink mt-8"`) | `bg-accent` |
| "Team" heading emphasis | `text-pink` | `text-primary` |
| CTA-section border | `border-pink` (`"border-t-2 border-pink pt-10 max-w-2xl"`) | `border-accent` |
| "Join" heading emphasis | `text-pink` | `text-primary` |
| CTA button | `bg-pink text-white ... hover:opacity-90` (no ring-pink present) | `bg-primary text-white ... hover:opacity-90` |

Named team members' actual pronouns (e.g. "He leads people strategy...") are factual references to real people and are not touched.

- [ ] **Step 3: Verify**

Run: `grep -n "girl\|women\|female\|gender" components/about/TeamPage.js`
Expected: no matches.

- [ ] **Step 4: Commit**

```bash
git add components/about/TeamPage.js
git commit -m "Rewrite Team Page subhead for general audience, demote pink to accent/primary"
```

---

### Task 19: About — `AdvisoryBoard.js`

**Files:**
- Modify: `components/about/AdvisoryBoard.js`

- [ ] **Step 1: Update Prof. Emeka Nwosu's bio (drop "gender" from the generic closing clause, keep the specific factual research-topic claim)**

Old:
```js
    bio: "Pioneering researcher in gender and computing education. Author of multiple studies on closing the digital skills gap among women in sub-Saharan Africa.",
```
New:
```js
    bio: "Pioneering researcher in inclusive computing education. Author of multiple studies on closing the digital skills gap among underserved communities in sub-Saharan Africa.",
```

- [ ] **Step 2: Update the financial-literacy advocate's bio**

Old:
```js
    bio: "Led digital transformation for one of Africa's largest banks. Passionate advocate for financial literacy programmes that put women at the centre.",
```
New:
```js
    bio: "Led digital transformation for one of Africa's largest banks. Passionate advocate for financial literacy programmes that put underserved communities at the centre.",
```

- [ ] **Step 3: "Founder, Women in Tech Nigeria" title — kept unchanged**

Real organization name/factual title. No edit.

- [ ] **Step 4: Update Adaeze Ume-Ezeoke's bio (keep the factual "women technologists" network description, drop only "gender and" from the generic advisory-scope clause)**

Old:
```js
    bio: "Built a 40,000-member network connecting women technologists across Nigeria. Advisor to several international development programmes on gender and digital equity.",
```
New:
```js
    bio: "Built a 40,000-member network connecting women technologists across Nigeria. Advisor to several international development programmes on digital equity.",
```

- [ ] **Step 5: Update hero subhead**

Old:
```jsx
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            Seasoned leaders from policy, technology, academia, and finance who lend their
            expertise to shaping a more equitable digital future for Nigerian women and girls.
          </p>
```
New:
```jsx
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            Seasoned leaders from policy, technology, academia, and finance who lend their
            expertise to shaping a more equitable digital future for Nigerians.
          </p>
```

- [ ] **Step 6: Update closing CTA paragraph**

Old:
```jsx
            <p className="font-body text-secondary leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
              We welcome nominations from professionals who share our conviction
              that closing Nigeria's digital gender gap is both urgent and achievable.
            </p>
```
New:
```jsx
            <p className="font-body text-secondary leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
              We welcome nominations from professionals who share our conviction
              that closing Nigeria's digital skills gap is both urgent and achievable.
            </p>
```

- [ ] **Step 7: Apply color-class changes**

| Location | Old | New |
|---|---|---|
| Top bar on photo | `bg-pink` | `bg-accent` |
| Hero left bar | `bg-pink` | `bg-accent` |
| "Experience" heading emphasis | `text-pink` | `text-primary` |
| Bar under hero subhead | `bg-pink` | `bg-accent` |
| "Members" heading emphasis | `text-pink` | `text-primary` |
| "Shapes BSA" heading emphasis | `text-pink` | `text-primary` |
| CTA-section border | `border-pink` | `border-accent` |
| "Advising BSA" heading emphasis | `text-pink` | `text-primary` |
| CTA button | `bg-pink text-white ... hover:opacity-90` (no ring-pink present) | `bg-primary text-white ... hover:opacity-90` |

- [ ] **Step 8: Verify**

Run: `grep -n "girl\|women\|female\|gender" components/about/AdvisoryBoard.js`
Expected: remaining matches only for "Founder, Women in Tech Nigeria" (proper noun) and "women technologists" (factual network description, kept per Step 4).

- [ ] **Step 9: Commit**

```bash
git add components/about/AdvisoryBoard.js
git commit -m "Rewrite Advisory Board copy for general audience, keep factual bio claims intact"
```

---

### Task 20: About — `AwardsPage.js`

**Files:**
- Modify: `components/about/AwardsPage.js`

Real award names, issuer names, the HeForShe award's actual criteria description, and quoted press headlines are kept unchanged (see Global Constraints) — only BSA's own descriptive copy about its achievements is rewritten.

- [ ] **Step 1: Update Women in Tech Africa Award body** (title/issuer kept — proper nouns)

Old:
```js
    body: "Recognised for outstanding contribution to digital skills development among women and girls across Nigeria.",
```
New:
```js
    body: "Recognised for outstanding contribution to digital skills development among students and communities across Nigeria.",
```

- [ ] **Step 2: Update NITDA award body**

Old:
```js
    body: "Awarded by the National Information Technology Development Agency for sustained efforts in closing the gender digital divide.",
```
New:
```js
    body: "Awarded by the National Information Technology Development Agency for sustained efforts in closing the digital divide.",
```

- [ ] **Step 3: HeForShe award body — kept unchanged** (describes the real award's actual criteria)

No edit to: `body: "Selected as a HeForShe impact champion for measurable outcomes in gender equality through technology education."`

- [ ] **Step 4: Update development-grant award body**

Old:
```js
    body: "Awarded a development grant in recognition of BSA's model for scaling community-based ICT education for underserved women.",
```
New:
```js
    body: "Awarded a development grant in recognition of BSA's model for scaling community-based ICT education for underserved communities.",
```

- [ ] **Step 5: Update rural-connection award body**

Old:
```js
    body: "Commended for innovative programme design that connects rural women to economic opportunity through digital skills training.",
```
New:
```js
    body: "Commended for innovative programme design that connects rural communities to economic opportunity through digital skills training.",
```

- [ ] **Step 6: Update TEF cohort award body**

Old:
```js
    body: "Selected among the top social enterprises in the TEF 2019 cohort for impactful and scalable approach to women's economic empowerment.",
```
New:
```js
    body: "Selected among the top social enterprises in the TEF 2019 cohort for impactful and scalable approach to community economic empowerment.",
```

- [ ] **Step 7: Media array — kept unchanged.** All four press citations (TechCabal, The Guardian Nigeria, Channels Television, BusinessDay Nigeria) are quoted real published article titles; rewriting them would misquote the sources. No edits.

- [ ] **Step 8: Update hero subhead**

Old:
```jsx
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            The real reward is in the women and girls who go on to build careers and
            communities. But when the work is acknowledged by those who watch this sector
            closely, it confirms we are building something worth seeing.
          </p>
```
New:
```jsx
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            The real reward is in the students and communities who go on to build careers and
            futures. But when the work is acknowledged by those who watch this sector
            closely, it confirms we are building something worth seeing.
          </p>
```

- [ ] **Step 9: Apply color-class changes**

| Location | Old | New |
|---|---|---|
| Hero left bar | `bg-pink` | `bg-accent` |
| "Matters" heading emphasis | `text-pink` | `text-primary` |
| Bar under hero subhead | `bg-pink` | `bg-accent` |
| "Recognition" heading emphasis | `text-pink` | `text-primary` |
| "Press" heading emphasis | `text-pink` | `text-primary` |
| Media-card top border | `border-pink` (`"border-t-2 border-pink pt-8"`) | `border-accent` |

- [ ] **Step 10: Verify**

Run: `grep -n "girl\|women\|female\|woman\|gender" components/about/AwardsPage.js`
Expected: remaining matches only for the kept proper nouns (award/issuer names), the HeForShe criteria sentence, and the four press citations.

- [ ] **Step 11: Commit**

```bash
git add components/about/AwardsPage.js
git commit -m "Rewrite Awards Page BSA-authored copy for general audience, keep real award/press citations intact"
```

---

### Task 21: About — `ImpactStats.js`

**Files:**
- Modify: `components/about/ImpactStats.js`

- [ ] **Step 1: Update stat label**

Old:
```js
  { value: "5,000+", label: "Women & girls trained",    note: "across all programmes to date" },
```
New:
```js
  { value: "5,000+", label: "Students & communities trained", note: "across all programmes to date" },
```

- [ ] **Step 2: Apply color-class changes**

| Location | Old | New |
|---|---|---|
| Left bar (40% opacity) | `bg-pink/40` | `bg-accent/40` |
| "Mission" heading emphasis | `text-pink` | `text-primary` |

- [ ] **Step 3: Verify**

Run: `grep -n "girl\|women\|female\|woman" components/about/ImpactStats.js`
Expected: no matches.

- [ ] **Step 4: Commit**

```bash
git add components/about/ImpactStats.js
git commit -m "Rewrite Impact Stats label for general audience, demote pink to accent"
```

---

### Task 22: About — `RoadMap.js`

**Files:**
- Modify: `components/about/RoadMap.js`

- [ ] **Step 1: Update 2018 milestone**

Old:
```js
    body: "Alero Thompson founds Blue Sands Academy in Lagos with a single conviction: that the gender digital gap in Nigeria is a solvable problem, and that solving it starts with training. The first cohort of secondary school girls completes BSA's foundational digital skills programme.",
```
New:
```js
    body: "Alero Thompson founds Blue Sands Academy in Lagos with a single conviction: that the digital skills gap in Nigeria is a solvable problem, and that solving it starts with training. The first cohort of secondary school students completes BSA's foundational digital skills programme.",
```

- [ ] **Step 2: 2019 milestone — kept unchanged** ("National Girls in ICT Competition" is a proper noun; no other gendered term present)

- [ ] **Step 3: Update 2020 milestone**

Old:
```js
    body: "As COVID-19 forces schools to close and threatens to push girls further from education, BSA pivots to online delivery. The One Girl One Laptop Initiative is expanded, ensuring students who receive training are not left without tools to continue.",
```
New:
```js
    body: "As COVID-19 forces schools to close and threatens to push vulnerable students further from education, BSA pivots to online delivery. The One Girl One Laptop Initiative is expanded, ensuring students who receive training are not left without tools to continue.",
```

(Note: "The One Girl One Laptop Initiative" program-name reference here is intentionally left as the pre-rename historical name — this is a 2020-dated timeline entry describing what the program was called *at that point in history*. The program's current display name is renamed everywhere else per the Task 23/7/8/11 renames; this specific timeline sentence is describing a past event by its name at the time.)

- [ ] **Step 4: Update 2021 milestone (program rename applies — this describes BSA's program by name, not a historical quote)**

Old:
```js
    body: "BSA extends its Economic Empowerment of Rural Women programme into underserved communities across Ogun State. The Tech Fingers platform begins development, creating a pathway to scale BSA's curriculum beyond physical locations.",
```
New:
```js
    body: "BSA extends its Rural Economic Empowerment Programme into underserved communities across Ogun State. The Tech Fingers platform begins development, creating a pathway to scale BSA's curriculum beyond physical locations.",
```

- [ ] **Step 5: Update 2022 milestone**

Old:
```js
    body: "BSA's programmes now reach women and girls across 6 states in Nigeria. A second STEM Lab opens, and BSA receives recognition from NITDA and UN Women for sustained impact in digital inclusion.",
```
New:
```js
    body: "BSA's programmes now reach students and communities across 6 states in Nigeria. A second STEM Lab opens, and BSA receives recognition from NITDA and UN Women for sustained impact in digital inclusion.",
```

("UN Women" kept — real UN agency name.)

- [ ] **Step 6: Update 2023 milestone**

Old:
```js
    body: "Development of the BSA edtech platform accelerates. Partnerships with government agencies and private sector organisations deepen. Over 5,000 women and girls trained to date.",
```
New:
```js
    body: "Development of the BSA edtech platform accelerates. Partnerships with government agencies and private sector organisations deepen. Over 5,000 students and community members trained to date.",
```

- [ ] **Step 7: Update 2024–2026 milestone**

Old:
```js
    body: "BSA is building toward a national network of STEM Labs, a fully deployed online learning platform, and partnerships with universities to create clear career pathways for graduates. The goal: 50,000 women and girls trained by 2026.",
```
New:
```js
    body: "BSA is building toward a national network of STEM Labs, a fully deployed online learning platform, and partnerships with universities to create clear career pathways for graduates. The goal: 50,000 students and community members trained by 2026.",
```

- [ ] **Step 8: Apply color-class changes**

| Location | Old | New |
|---|---|---|
| Hero left bar | `bg-pink` | `bg-accent` |
| "Been"/"Going" heading emphasis (two spans) | `text-pink` | `text-primary` |
| Bar under hero subhead | `bg-pink` | `bg-accent` |
| "Timeline" heading emphasis | `text-pink` | `text-primary` |
| Milestone indicator dot (`backgroundColor`/`borderColor`) | `"#E63F8E"` | `"#0077FF"` |
| Milestone year text `color` | `"#E63F8E"` | `"#0077FF"` |
| CTA-section border | `border-pink` | `border-accent` |
| "What Comes Next" heading emphasis | `text-pink` | `text-primary` |
| CTA button | `bg-pink text-white ... hover:opacity-90` (no ring-pink present) | `bg-primary text-white ... hover:opacity-90` |

- [ ] **Step 9: Verify**

Run: `grep -n "girl\|women\|female\|woman\|gender" components/about/RoadMap.js`
Expected: remaining matches only for "National Girls in ICT Competition" (2019 entry) and "The One Girl One Laptop Initiative" (2020 entry, historical name reference per Step 3's note).

- [ ] **Step 10: Commit**

```bash
git add components/about/RoadMap.js
git commit -m "Rewrite Road Map timeline for general audience, rename Rural Economic Empowerment milestone, demote pink"
```

---

### Task 23: Programs — `OneGirlOneLaptop.js` + `app/programs/one-girl-one-laptop/page.js`

**Files:**
- Modify: `components/programs/OneGirlOneLaptop.js`
- Modify: `app/programs/one-girl-one-laptop/page.js`

- [ ] **Step 1: Update pillar "01" body**

Old:
```js
    body: "Giving the girl child a working laptop so she has the foundation from which to build any digital skill.",
```
New:
```js
    body: "Giving every student a working laptop so they have the foundation from which to build any digital skill.",
```

- [ ] **Step 2: Update pillar "03" body**

Old:
```js
    body: "Building inner confidence and self-belief. A girl who believes she belongs in tech will build a career in tech.",
```
New:
```js
    body: "Building inner confidence and self-belief. A student who believes they belong in tech will build a career in tech.",
```

- [ ] **Step 3: Update ghost background texture**

Old: `1G1L`
New: `1S1L`

- [ ] **Step 4: Update eyebrow label**

Old: `Program · One Girl One Laptop`
New: `Program · One Student One Laptop`

- [ ] **Step 5: Update H1**

Old:
```jsx
            One Girl <span className="text-pink">One Laptop</span>
```
New:
```jsx
            One Student <span className="text-primary">One Laptop</span>
```

- [ ] **Step 6: Update hero tagline**

Old: `Removing the final barrier between a girl and her digital future.`
New: `Removing the final barrier between a student and their digital future.`

- [ ] **Step 7: Update "Every Girl Deserves a Tool" heading**

Old:
```jsx
                  Every Girl <span className="text-pink">Deserves a Tool</span>
```
New:
```jsx
                  Every Student <span className="text-primary">Deserves a Tool</span>
```

- [ ] **Step 8: Update vision paragraph**

Old:
```jsx
                  With a vision to raise women and girls who will become leaders
                  and change-makers through actively empowering them with ICT,
                  business, and financial literacy skills, Blue Sands Academy
                  has designed a social impact programme aimed at reaching young
                  girls and women who cannot afford a laptop but are desirous of
                  acquiring a digital skill.
```
New:
```jsx
                  With a vision to raise students who will become leaders
                  and change-makers through actively empowering them with ICT,
                  business, and financial literacy skills, Blue Sands Academy
                  has designed a social impact programme aimed at reaching young
                  people who cannot afford a laptop but are desirous of
                  acquiring a digital skill.
```

- [ ] **Step 9: Update impact-so-far paragraph**

Old:
```jsx
                  We have equipped 50 girls with new laptops, and the knowledge
                  and skills of these girls have improved through the use of
                  their laptops. We are partnering with NGOs, agencies, and
                  governments at all levels to make this a continuous process.
```
New:
```jsx
                  We have equipped 50 students with new laptops, and the knowledge
                  and skills of these students have improved through the use of
                  their laptops. We are partnering with NGOs, agencies, and
                  governments at all levels to make this a continuous process.
```

- [ ] **Step 10: Update mentorship paragraph**

Old:
```jsx
                  We also provide self-confidence sessions and connect our
                  students with female tech mentors who help them believe in
                  themselves and believe that they, too, can do it.
```
New:
```jsx
                  We also provide self-confidence sessions and connect our
                  students with experienced tech mentors who help them believe in
                  themselves and believe that they, too, can do it.
```

- [ ] **Step 11: Update CTA heading**

Old:
```jsx
                Give a Girl a <span className="text-pink">Laptop</span>
```
New:
```jsx
                Give a Student a <span className="text-primary">Laptop</span>
```

- [ ] **Step 12: Update CTA paragraph**

Old:
```jsx
              <p className="font-body text-secondary leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
                Partner with us or donate to expand the One Girl One Laptop
                Initiative to more communities across Nigeria.
              </p>
```
New:
```jsx
              <p className="font-body text-secondary leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
                Partner with us or donate to expand the One Student One Laptop
                Initiative to more communities across Nigeria.
              </p>
```

- [ ] **Step 13: Apply remaining color-class changes**

| Location | Old | New |
|---|---|---|
| Hero left bar | `bg-pink` | `bg-accent` |
| Headline divider | `bg-pink` | `bg-accent` |
| Image-placeholder top bar | `bg-pink` | `bg-accent` |
| "Pillars" heading emphasis | `text-pink` | `text-primary` |
| Pillar numerals | `text-pink` (`"font-display font-bold text-pink mb-6 block"`) | `text-accent` |
| CTA-section border | `border-pink` | `border-accent` |
| Primary CTA button | `bg-pink ... focus-visible:ring-pink` | `bg-primary ... focus-visible:ring-primary` |

- [ ] **Step 14: Update page metadata**

Old:
```jsx
export const metadata = {
  title: "One Girl One Laptop | Blue Sands Academy",
  description:
    "BSA's One Girl One Laptop Initiative equips girls who cannot afford computers with free laptops, removing the final barrier to digital skills training.",
};
```
New:
```jsx
export const metadata = {
  title: "One Student One Laptop | Blue Sands Academy",
  description:
    "BSA's One Student One Laptop Initiative equips students who cannot afford computers with free laptops, removing the final barrier to digital skills training.",
};
```

- [ ] **Step 15: Verify**

Run: `grep -n "girl\|women\|female\|woman" components/programs/OneGirlOneLaptop.js app/programs/one-girl-one-laptop/page.js`
Expected: no matches (route slug and component/file names still contain "girl" — intentional, per the plan's routing decision; this grep only checks rendered text/metadata, not filenames/imports).

- [ ] **Step 16: Commit**

```bash
git add components/programs/OneGirlOneLaptop.js app/programs/one-girl-one-laptop/page.js
git commit -m "Rename One Girl One Laptop to One Student One Laptop (display text only, route unchanged)"
```

---

### Task 24: Programs — `TechFingers.js` + `app/programs/tech-fingers/page.js`

**Files:**
- Modify: `components/programs/TechFingers.js`
- Modify: `app/programs/tech-fingers/page.js`

- [ ] **Step 1: Update onsite/mentor paragraph**

Old:
```jsx
                  Tech Fingers is our onsite and online secondary school training
                  programme for Nigeria and the rest of the world. Onsite, we
                  train girls in technology and connect them with female mentors
                  who will guide them through a career in technology.
```
New:
```jsx
                  Tech Fingers is our onsite and online secondary school training
                  programme for Nigeria and the rest of the world. Onsite, we
                  train students in technology and connect them with experienced mentors
                  who will guide them through a career in technology.
```

- [ ] **Step 2: Update online-training paragraph**

Old:
```jsx
                  Online, we train young girls in IT skills such as UI/UX Design,
                  Mobile App Development, Photography and Videography, Web
                  Development, and Animation from anywhere in the world.
```
New:
```jsx
                  Online, we train young people in IT skills such as UI/UX Design,
                  Mobile App Development, Photography and Videography, Web
                  Development, and Animation from anywhere in the world.
```

- [ ] **Step 3: Update competitions paragraph**

Old:
```jsx
                  The programme provides students with a technical career path in
                  any of the fields listed above. Aside from training and
                  mentoring, we expose young girls to tech competitions where
                  they can showcase the products they have created using
                  technology.
```
New:
```jsx
                  The programme provides students with a technical career path in
                  any of the fields listed above. Aside from training and
                  mentoring, we expose young learners to tech competitions where
                  they can showcase the products they have created using
                  technology.
```

- [ ] **Step 4: Update Ogombo school paragraph**

Old:
```jsx
                  Tech Fingers is currently ongoing in Ogombo Community High
                  School, where we are training over 150 junior secondary school
                  girls on how to use a computer and on UI/UX Design and Web
                  Development.
```
New:
```jsx
                  Tech Fingers is currently ongoing in Ogombo Community High
                  School, where we are training over 150 junior secondary school
                  students on how to use a computer and on UI/UX Design and Web
                  Development.
```

- [ ] **Step 5: Update "Built for Bold Girls" heading**

Old:
```jsx
                Built for <span className="text-pink">Bold Girls</span>
```
New:
```jsx
                Built for <span className="text-primary">Bold Learners</span>
```

- [ ] **Step 6: Update platform description paragraph**

Old:
```jsx
              <p className="font-body text-white/85 leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                An eLearning platform where secondary school girls, female
                undergraduates, young female professionals, and female job
                seekers can register and start learning at their own pace from
                anywhere. The platform connects young females to other females
                across the globe through a community channel.
              </p>
```
New:
```jsx
              <p className="font-body text-white/85 leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                An eLearning platform where secondary school students,
                undergraduates, working professionals, and job
                seekers can register and start learning at their own pace from
                anywhere. The platform connects learners to each other
                across the globe through a community channel.
              </p>
```

- [ ] **Step 7: Apply remaining color-class changes**

| Location | Old | New |
|---|---|---|
| Hero left bar | `bg-pink` | `bg-accent` |
| "Fingers" heading emphasis | `text-pink` | `text-primary` |
| Headline divider | `bg-pink` | `bg-accent` |
| "Anywhere" heading emphasis | `text-pink` | `text-primary` |
| "Tracks" heading emphasis | `text-pink` | `text-primary` |
| Career-track card top border | `border-pink` | `border-accent` |
| Track numerals | `text-pink` | `text-accent` |
| "Bold Learners" span (see Step 5) | `text-pink` | `text-primary` |
| Platform-section accent bar | `bg-pink` | `bg-accent` |
| "TechFingers" heading emphasis | `text-pink` | `text-primary` |
| External platform-link button (techfingers.io) | `bg-pink text-white ... hover:opacity-90` (no ring-pink present) | `bg-primary text-white ... hover:opacity-90` |
| Final CTA separator | `border-pink` | `border-accent` |
| "Child Enrolled" heading emphasis | `text-pink` | `text-primary` |
| Primary CTA button | `bg-pink ... focus-visible:ring-pink` | `bg-primary ... focus-visible:ring-primary` |

- [ ] **Step 8: Update page metadata**

Old:
```jsx
export const metadata = {
  title: "Tech Fingers | Blue Sands Academy",
  description:
    "Tech Fingers is BSA's onsite and online secondary school training programme for girls in UI/UX, web development, mobile app development, and animation.",
};
```
New:
```jsx
export const metadata = {
  title: "Tech Fingers | Blue Sands Academy",
  description:
    "Tech Fingers is BSA's onsite and online secondary school training programme for students in UI/UX, web development, mobile app development, and animation.",
};
```

- [ ] **Step 9: Verify**

Run: `grep -n "girl\|women\|female\|woman" components/programs/TechFingers.js app/programs/tech-fingers/page.js`
Expected: no matches.

- [ ] **Step 10: Commit**

```bash
git add components/programs/TechFingers.js app/programs/tech-fingers/page.js
git commit -m "Rewrite Tech Fingers copy for general audience, demote pink to accent/primary"
```

---

### Task 25: Programs — `EconomicEmpowerment.js` + `app/programs/economic-empowerment/page.js`

**Files:**
- Modify: `components/programs/EconomicEmpowerment.js`
- Modify: `app/programs/economic-empowerment/page.js`

- [ ] **Step 1: Update eyebrow label for consistency with the new program name**

Old: `Program · Economic Empowerment`
New: `Program · Rural Economic Empowerment`

- [ ] **Step 2: Update focus-area item**

Old:
```jsx
  { label: "Access to Funding", note: "Connecting rural women to resources, grants, and funding pathways to start or grow their work." },
```
New:
```jsx
  { label: "Access to Funding", note: "Connecting rural communities to resources, grants, and funding pathways to start or grow their work." },
```

- [ ] **Step 3: Rename H1**

Old:
```jsx
            Economic Empowerment of <span className="text-pink">Rural Women</span>
```
New:
```jsx
            Rural Economic Empowerment <span className="text-primary">Programme</span>
```

- [ ] **Step 4: Update hero subhead**

Old:
```jsx
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            Rural women are the backbone of rural societies and communities.
            We provide business education, funding, and opportunity so they can
            build independent livelihoods and lead their communities.
          </p>
```
New:
```jsx
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            Rural communities are the backbone of rural societies.
            We provide business education, funding, and opportunity so people can
            build independent livelihoods and lead their communities.
          </p>
```

- [ ] **Step 5: Update "backbone" paragraph**

Old:
```jsx
                  The basic economic, environmental, and social reforms necessary
                  for sustainable development are essentially the responsibility
                  of rural women. Yet these are the women most frequently left
                  behind by mainstream development programmes.
```
New:
```jsx
                  The basic economic, environmental, and social reforms necessary
                  for sustainable development are essentially the responsibility
                  of rural communities. Yet these are the communities most frequently left
                  behind by mainstream development programmes.
```

- [ ] **Step 6: Update programme-description paragraph (program rename applies)**

Old:
```jsx
                  Blue Sands Academy's Economic Empowerment of Rural Women
                  programme reaches into underserved communities across Nigeria
                  with practical business skills, access to funding, and the
                  mentorship needed to build sustainable, independent livelihoods.
```
New:
```jsx
                  Blue Sands Academy's Rural Economic Empowerment Programme
                  reaches into underserved communities across Nigeria
                  with practical business skills, access to funding, and the
                  mentorship needed to build sustainable, independent livelihoods.
```

- [ ] **Step 7: Update "economic independence" paragraph**

Old:
```jsx
                  The programme empowers rural women by imparting skills that
                  enable them to earn income and improve their quality of life.
                  A woman with economic independence is a woman who can lead her
                  community forward.
```
New:
```jsx
                  The programme empowers rural communities by imparting skills that
                  enable people to earn income and improve their quality of life.
                  A person with economic independence can lead their
                  community forward.
```

- [ ] **Step 8: Update pull-quote**

Old:
```jsx
                  "A woman with options is a community that grows."
```
New:
```jsx
                  "A person with options is a community that grows."
```

(Attribution line "Alero Thompson, Founder and CEO, Blue Sands Academy" is unchanged.)

- [ ] **Step 9: Apply remaining color-class changes**

| Location | Old | New |
|---|---|---|
| Hero left bar | `bg-pink` | `bg-accent` |
| Headline divider | `bg-pink` | `bg-accent` |
| "Communities" heading emphasis | `text-pink` | `text-primary` |
| Blockquote left border | `border-pink` (`"border-l-4 border-pink pl-8 py-2"`) | `border-accent` |
| "Provide" heading emphasis | `text-pink` | `text-primary` |
| Focus-area card top border | `border-pink` | `border-accent` |
| CTA-section border | `border-pink` | `border-accent` |
| "Empower" heading emphasis | `text-pink` | `text-primary` |
| Primary CTA button | `bg-pink ... focus-visible:ring-pink` | `bg-primary ... focus-visible:ring-primary` |

- [ ] **Step 10: Update page metadata**

Old:
```jsx
export const metadata = {
  title: "Economic Empowerment of Rural Women | Blue Sands Academy",
  description:
    "BSA's Economic Empowerment programme provides rural women with business education, funding access, and community leadership skills.",
};
```
New:
```jsx
export const metadata = {
  title: "Rural Economic Empowerment Programme | Blue Sands Academy",
  description:
    "BSA's Rural Economic Empowerment Programme provides rural communities with business education, funding access, and community leadership skills.",
};
```

- [ ] **Step 11: Verify**

Run: `grep -n "girl\|women\|female\|woman" components/programs/EconomicEmpowerment.js app/programs/economic-empowerment/page.js`
Expected: no matches.

- [ ] **Step 12: Commit**

```bash
git add components/programs/EconomicEmpowerment.js app/programs/economic-empowerment/page.js
git commit -m "Rename Economic Empowerment of Rural Women to Rural Economic Empowerment Programme"
```

---

### Task 26: Programs — `app/programs/stem-club/page.js`

**Files:**
- Modify: `app/programs/stem-club/page.js`

- [ ] **Step 1: Update metadata description**

Old:
```js
export const metadata = {
  title: "STEM Club | Blue Sands Academy",
  description: "BSA STEM Club — building the next generation of female tech leaders through hands-on STEM activities and mentorship.",
};
```
New:
```js
export const metadata = {
  title: "STEM Club | Blue Sands Academy",
  description: "BSA STEM Club — building the next generation of tech leaders through hands-on STEM activities and mentorship.",
};
```

- [ ] **Step 2: Apply color-class changes**

| Location | Old | New |
|---|---|---|
| Hero left bar | `bg-pink` | `bg-accent` |
| "Club" heading emphasis | `text-pink` | `text-primary` |
| Headline divider | `bg-pink` | `bg-accent` |
| Coming-soon section separator | `border-pink` | `border-accent` |
| "Coming Soon" heading emphasis | `text-pink` | `text-primary` |
| CTA button (contact link) | `bg-pink text-white ... hover:opacity-90` | `bg-primary text-white ... hover:opacity-90` |

- [ ] **Step 3: Verify**

Run: `grep -n "girl\|women\|female" app/programs/stem-club/page.js`
Expected: no matches.

- [ ] **Step 4: Commit**

```bash
git add app/programs/stem-club/page.js
git commit -m "Update STEM Club metadata for general audience, demote pink to accent/primary"
```

---

### Task 27: Services — `STEMTraining.js` + `app/services/stem-training/page.js`

**Files:**
- Modify: `components/services/STEMTraining.js`
- Modify: `app/services/stem-training/page.js`

**Interfaces:**
- Consumes: `AUDIENCE_GROUPS` from `@/lib/content` (Task 1).

- [ ] **Step 1: Add the import**

```js
import { AUDIENCE_GROUPS } from "@/lib/content";
```

- [ ] **Step 2: Update "who it's for" paragraph**

Old:
```jsx
              <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                Our training is designed to meet women and girls wherever they
                are in their digital journey, from absolute beginners to those
                looking to deepen their skills for professional advancement.
              </p>
```
New:
```jsx
              <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                Our training is designed to meet students wherever they
                are in their digital journey, from absolute beginners to those
                looking to deepen their skills for professional advancement.
              </p>
```

- [ ] **Step 3: Replace the audience-group cards with the shared constant**

Old:
```jsx
            {[
              { group: "Secondary School Girls", note: "Building the foundation early, so digital confidence grows alongside academic development." },
              { group: "Female Undergraduates", note: "Bridging the gap between classroom theory and the practical, job-ready skills employers demand." },
              { group: "Female Professionals", note: "Upgrading existing skill sets to meet the demands of a rapidly evolving digital economy." },
            ].map((item, i) => (
```
New:
```jsx
            {[
              { group: AUDIENCE_GROUPS[0], note: "Building the foundation early, so digital confidence grows alongside academic development." },
              { group: AUDIENCE_GROUPS[1], note: "Bridging the gap between classroom theory and the practical, job-ready skills employers demand." },
              { group: AUDIENCE_GROUPS[2], note: "Upgrading existing skill sets to meet the demands of a rapidly evolving digital economy." },
            ].map((item, i) => (
```

- [ ] **Step 4: Apply remaining color-class changes**

| Location | Old | New |
|---|---|---|
| Hero left bar | `bg-pink` | `bg-accent` |
| "Training" heading emphasis | `text-pink` | `text-primary` |
| Headline divider | `bg-pink` | `bg-accent` |
| "Teach" heading emphasis | `text-pink` | `text-primary` |
| Skill-list indicator dot | `bg-pink` (`"w-1.5 h-1.5 rounded-full bg-pink shrink-0"`) | `bg-accent` |
| "For" heading emphasis | `text-pink` | `text-primary` |
| Audience-card top border | `border-pink` | `border-accent` |
| CTA-section border | `border-pink` | `border-accent` |
| "Start?" heading emphasis | `text-pink` | `text-primary` |
| Primary CTA button | `bg-pink ... focus-visible:ring-pink` | `bg-primary ... focus-visible:ring-primary` |

`hover:text-pink` on the "Explore Tech Fingers" link stays unchanged.

- [ ] **Step 5: Update page metadata**

Old:
```jsx
export const metadata = {
  title: "Digital Skills Training | Blue Sands Academy",
  description:
    "BSA provides digital skills training for secondary school girls, female undergraduates, and female professionals in Nigeria.",
};
```
New:
```jsx
export const metadata = {
  title: "Digital Skills Training | Blue Sands Academy",
  description:
    "BSA provides digital skills training for secondary school students, undergraduates, and working professionals in Nigeria.",
};
```

- [ ] **Step 6: Verify**

Run: `grep -n "girl\|women\|female\|woman" components/services/STEMTraining.js app/services/stem-training/page.js`
Expected: no matches.

- [ ] **Step 7: Commit**

```bash
git add components/services/STEMTraining.js app/services/stem-training/page.js
git commit -m "Rewrite STEM Training copy for general audience using shared audience-groups constant"
```

---

### Task 28: Services — `ICTCompetition.js` + `app/services/ict-competition/page.js`

**Files:**
- Modify: `components/services/ICTCompetition.js`
- Modify: `app/services/ict-competition/page.js`

- [ ] **Step 1: Achievements array — kept unchanged.** "National Girls in ICT Competition" is a real proper noun, and "Queen Amina College girls defeated 200+ schools" is a factual historical description of that girls-only competition's real result. No edit to:
```js
  {
    year: "2019",
    event: "National Girls in ICT Competition",
    result: "Queen Amina College girls defeated 200+ schools to become national champions",
  },
```

- [ ] **Step 2: Update hero subhead**

Old:
```jsx
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            We put girls on the national stage. BSA students have competed against
            hundreds of schools and won.
          </p>
```
New:
```jsx
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            We put students on the national stage. BSA students have competed against
            hundreds of schools and won.
          </p>
```

- [ ] **Step 3: Update "cutting-edge models" paragraph**

Old:
```jsx
              <p className="font-body text-secondary leading-relaxed mb-6" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                Blue Sands Academy offers cutting-edge and appealing competition
                models that allow girls to test their ability and refine their
                skills, piquing their interest in adopting ICT as the new norm
                in the twenty-first century.
              </p>
```
New:
```jsx
              <p className="font-body text-secondary leading-relaxed mb-6" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                Blue Sands Academy offers cutting-edge and appealing competition
                models that allow students to test their ability and refine their
                skills, piquing their interest in adopting ICT as the new norm
                in the twenty-first century.
              </p>
```

- [ ] **Step 4: Update "confidence and resilience" paragraph**

Old:
```jsx
              <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                Competitions do more than measure skill. They build confidence,
                resilience, and the kind of ambition that transforms a student
                into a professional. When our girls compete and win on the
                national stage, they prove to themselves and their communities
                that technology belongs to them too.
              </p>
```
New:
```jsx
              <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                Competitions do more than measure skill. They build confidence,
                resilience, and the kind of ambition that transforms a student
                into a professional. When our students compete and win on the
                national stage, they prove to themselves and their communities
                that technology belongs to them too.
              </p>
```

- [ ] **Step 5: Update closing CTA paragraph**

Old:
```jsx
              <p className="font-body text-secondary leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
                Help us prepare more girls for national and international
                technology competitions. Partner with BSA to fund training,
                equipment, and access.
              </p>
```
New:
```jsx
              <p className="font-body text-secondary leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
                Help us prepare more students for national and international
                technology competitions. Partner with BSA to fund training,
                equipment, and access.
              </p>
```

- [ ] **Step 6: Apply remaining color-class changes**

| Location | Old | New |
|---|---|---|
| Hero left bar | `bg-pink` | `bg-accent` |
| "Competitions" heading emphasis | `text-pink` | `text-primary` |
| Headline divider | `bg-pink` | `bg-accent` |
| "Compete" heading emphasis | `text-pink` | `text-primary` |
| Avatar decorative circle | `bg-pink/20 border border-pink/30` | `bg-accent/20 border border-accent/30` |
| "Achievements" heading emphasis | `text-pink` | `text-primary` |
| CTA-section border | `border-pink` | `border-accent` |
| "Generation" heading emphasis | `text-pink` | `text-primary` |
| Primary CTA button | `bg-pink ... focus-visible:ring-pink` | `bg-primary ... focus-visible:ring-primary` |

- [ ] **Step 7: Update page metadata**

Old:
```jsx
export const metadata = {
  title: "ICT Competitions | Blue Sands Academy",
  description:
    "Blue Sands Academy prepares girls to compete in national and international technology competitions. BSA students have defeated 150+ schools to become national champions.",
};
```
New:
```jsx
export const metadata = {
  title: "ICT Competitions | Blue Sands Academy",
  description:
    "Blue Sands Academy prepares students to compete in national and international technology competitions. BSA students have defeated 150+ schools to become national champions.",
};
```

- [ ] **Step 8: Verify**

Run: `grep -n "girl\|women\|female\|woman" components/services/ICTCompetition.js app/services/ict-competition/page.js`
Expected: remaining matches only in the kept achievements-array entry (Step 1).

- [ ] **Step 9: Commit**

```bash
git add components/services/ICTCompetition.js app/services/ict-competition/page.js
git commit -m "Rewrite ICT Competition copy for general audience, keep historical competition result intact"
```

---

### Task 29: Insights — `BlogIndex.js`

Individual post entries about "Women in Tech" and "Empowering Rural Women with Skills" as editorial topics are **not rewritten** — only BSA's own section-description copy changes.

**Files:**
- Modify: `components/insights/BlogIndex.js`

- [ ] **Step 1: Update the blog-section description**

Old:
```jsx
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            Stories, data, and perspectives on closing the gender digital gap in Africa.
          </p>
```
New:
```jsx
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            Stories, data, and perspectives on closing the digital divide in Africa.
          </p>
```

- [ ] **Step 2: Verify**

Run: `grep -n "gender digital gap" components/insights/BlogIndex.js`
Expected: no matches. Confirm the "Women in Tech" and "Empowering Rural Women with Skills" post entries (slugs `women-in-tech` and `empowering-rural-women-with-skills`) are still present and unchanged: `grep -n "women-in-tech\|empowering-rural-women" components/insights/BlogIndex.js`.

- [ ] **Step 3: Commit**

```bash
git add components/insights/BlogIndex.js
git commit -m "Update Blog Index section description for general audience, keep editorial post topics intact"
```

---

### Task 30: Nav/Footer — `Navbar.js` + `Footer.js`

**Files:**
- Modify: `components/common/Navbar.js`
- Modify: `components/common/Footer.js`

- [ ] **Step 1: `Navbar.js` — rename program label**

Old:
```js
      { label: "One Girl One Laptop", href: "/programs/one-girl-one-laptop" },
```
New:
```js
      { label: "One Student One Laptop", href: "/programs/one-girl-one-laptop" },
```

- [ ] **Step 2: `Footer.js` — rename program label**

Old:
```js
      { label: "One Girl, One Laptop", href: "/programs/one-girl-one-laptop" },
```
New:
```js
      { label: "One Student One Laptop", href: "/programs/one-girl-one-laptop" },
```

- [ ] **Step 3: `Footer.js` — rename focus-area label**

Old:
```js
      { label: "Rural Women", href: "/focus-areas/rural-women" },
```
New:
```js
      { label: "Rural Communities", href: "/focus-areas/rural-women" },
```

(The `/focus-areas/*` routes themselves 404 — this is a pre-existing, out-of-scope gap noted in the design spec. Only the visible label text changes here.)

- [ ] **Step 4: `Footer.js` — update brand tagline**

Old:
```jsx
            <p className="font-body text-sm text-white/55 leading-relaxed mb-7 max-w-[17rem]">
              Closing the gender digital gap — empowering women and girls
              across Nigeria with ICT skills and STEM training.
            </p>
```
New:
```jsx
            <p className="font-body text-sm text-white/55 leading-relaxed mb-7 max-w-[17rem]">
              Closing the digital divide — equipping students, youth, and
              underserved communities across Nigeria with ICT skills and STEM training.
            </p>
```

- [ ] **Step 5: Verify**

Run: `grep -n "girl\|women\|female\|woman\|gender" components/common/Navbar.js components/common/Footer.js`
Expected: no matches.

- [ ] **Step 6: Commit**

```bash
git add components/common/Navbar.js components/common/Footer.js
git commit -m "Rename nav/footer program label, update footer tagline for general audience"
```

---

### Task 31: Remaining metadata pages + `VolunteerPage.js` + `app/stem-labs/page.js`

**Files:**
- Modify: `app/insights/careers/page.js`
- Modify: `app/about/team/page.js`
- Modify: `app/insights/newsletters/page.js`
- Modify: `app/about/awards/page.js`
- Modify: `app/insights/blog/page.js`
- Modify: `app/contact/page.js`
- Modify: `app/volunteer/page.js`
- Modify: `components/volunteer/VolunteerPage.js`
- Modify: `app/stem-labs/page.js`

**Interfaces:**
- Consumes: `AUDIENCE_DESCRIPTOR` from `@/lib/content` (Task 1).

- [ ] **Step 1: `app/insights/careers/page.js`**

Old:
```js
export const metadata = {
  title: "Careers | Blue Sands Academy",
  description: "Career opportunities at Blue Sands Academy — join the team closing the gender digital gap.",
};
```
New:
```js
export const metadata = {
  title: "Careers | Blue Sands Academy",
  description: "Career opportunities at Blue Sands Academy — join the team closing the digital divide.",
};
```

- [ ] **Step 2: `app/about/team/page.js`**

Old:
```js
export const metadata = {
  title: "Our Team",
  description:
    "Meet the people behind Blue Sands Academy — the educators, technologists, and community builders closing the gender digital gap in Nigeria.",
};
```
New:
```js
export const metadata = {
  title: "Our Team",
  description:
    "Meet the people behind Blue Sands Academy — the educators, technologists, and community builders closing the digital divide in Nigeria.",
};
```

- [ ] **Step 3: `app/insights/newsletters/page.js`**

Old:
```js
export const metadata = {
  title: "Newsletters | Blue Sands Academy",
  description: "BSA newsletters — updates on programmes, impact, and the gender digital gap.",
};
```
New:
```js
export const metadata = {
  title: "Newsletters | Blue Sands Academy",
  description: "BSA newsletters — updates on programmes, impact, and the digital divide.",
};
```

- [ ] **Step 4: `app/about/awards/page.js`**

Old:
```js
export const metadata = {
  title: "Awards & Recognition",
  description:
    "Blue Sands Academy's awards, recognition, and media coverage — a record of the impact made in closing Nigeria's gender digital gap.",
};
```
New:
```js
export const metadata = {
  title: "Awards & Recognition",
  description:
    "Blue Sands Academy's awards, recognition, and media coverage — a record of the impact made in closing Nigeria's digital divide.",
};
```

- [ ] **Step 5: `app/insights/blog/page.js`**

Old:
```js
export const metadata = {
  title: "Blog | Blue Sands Academy",
  description:
    "Stories, data, and perspectives from Blue Sands Academy on closing the gender digital gap in Nigeria and Africa.",
};
```
New:
```js
export const metadata = {
  title: "Blog | Blue Sands Academy",
  description:
    "Stories, data, and perspectives from Blue Sands Academy on closing the digital divide in Nigeria and Africa.",
};
```

- [ ] **Step 6: `app/contact/page.js`**

Old:
```js
export const metadata = {
  title: "Partner With Us | Blue Sands Academy",
  description:
    "Partner with Blue Sands Academy to close the gender digital gap in Nigeria. We work with government agencies, corporations, NGOs, and investors.",
};
```
New:
```js
export const metadata = {
  title: "Partner With Us | Blue Sands Academy",
  description:
    "Partner with Blue Sands Academy to close the digital divide in Nigeria. We work with government agencies, corporations, NGOs, and investors.",
};
```

- [ ] **Step 7: `app/volunteer/page.js`**

Old:
```js
export const metadata = {
  title: "Volunteer | Blue Sands Academy",
  description:
    "Volunteer with Blue Sands Academy and help close the gender digital gap in Nigeria. We welcome mentors, trainers, and community advocates.",
};
```
New:
```js
export const metadata = {
  title: "Volunteer | Blue Sands Academy",
  description:
    "Volunteer with Blue Sands Academy and help close the digital divide in Nigeria. We welcome mentors, trainers, and community advocates.",
};
```

- [ ] **Step 8: `components/volunteer/VolunteerPage.js`**

Old:
```jsx
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            Blue Sands Academy volunteering will provide you with a supportive
            environment in which to hone your skills and make a real difference
            in the lives of women and girls across Nigeria.
          </p>
```
New:
```jsx
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            Blue Sands Academy volunteering will provide you with a supportive
            environment in which to hone your skills and make a real difference
            in the lives of students, youth, and underserved communities across Nigeria.
          </p>
```

Also demote its decorative bar: `bg-pink` (`"rounded-full bg-pink mt-8"`) → `bg-accent`.

- [ ] **Step 9: `app/stem-labs/page.js` — add the shared-constant import**

```js
import { AUDIENCE_DESCRIPTOR } from "@/lib/content";
```

- [ ] **Step 10: `app/stem-labs/page.js` — update `labs` array entries**

Old:
```js
const labs = [
  {
    num: "01",
    name: "Lagos STEM Lab",
    state: "Lagos State",
    note: "Our flagship lab, training secondary school girls and female professionals in digital design, web, and app development.",
  },
```
New:
```js
const labs = [
  {
    num: "01",
    name: "Lagos STEM Lab",
    state: "Lagos State",
    note: "Our flagship lab, training secondary school students and young professionals in digital design, web, and app development.",
  },
```

Old:
```js
  {
    num: "03",
    name: "Abuja STEM Lab",
    state: "FCT Abuja",
    note: "Our most recently opened facility, focused on ICT training for secondary school girls in the federal capital.",
  },
];
```
New:
```js
  {
    num: "03",
    name: "Abuja STEM Lab",
    state: "FCT Abuja",
    note: "Our most recently opened facility, focused on ICT training for secondary school students in the federal capital.",
  },
];
```

- [ ] **Step 11: `app/stem-labs/page.js` — update `stats` array**

Old:
```js
const stats = [
  { value: "3", label: "Active STEM Labs" },
  { value: "6+", label: "States Reached" },
  { value: "5,000+", label: "Women Trained" },
  { value: "100%", label: "Female-Focused" },
];
```
New:
```js
const stats = [
  { value: "3", label: "Active STEM Labs" },
  { value: "6+", label: "States Reached" },
  { value: "5,000+", label: "Students Trained" },
  { value: "100%", label: "Access-Focused" },
];
```

- [ ] **Step 12: `app/stem-labs/page.js` — update hero paragraph**

Old:
```jsx
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            Dedicated spaces where women and girls get hands-on access to
            computers, design tools, and technical mentorship.
          </p>
```
New:
```jsx
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            Dedicated spaces where students, youth, and underserved communities
            get hands-on access to computers, design tools, and technical mentorship.
          </p>
```

- [ ] **Step 13: `app/stem-labs/page.js` — update "About" section paragraph using the shared constant**

Old:
```jsx
              <FadeIn delay={80}>
                <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                  Our STEM Labs are purpose-built training spaces equipped with
                  computers, high-speed internet, and design tools. They are
                  staffed by experienced female tech educators and open to
                  secondary school girls, female undergraduates, and women
                  entering or re-entering the workforce.
                </p>
              </FadeIn>
```
New:
```jsx
              <FadeIn delay={80}>
                <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                  Our STEM Labs are purpose-built training spaces equipped with
                  computers, high-speed internet, and design tools. They are
                  staffed by experienced tech educators and open to
                  {AUDIENCE_DESCRIPTOR}, plus adults
                  entering or re-entering the workforce.
                </p>
              </FadeIn>
```

- [ ] **Step 14: `app/stem-labs/page.js` — apply remaining color-class change**

`bg-pink` (`"rounded-full bg-pink mt-8"` on the hero divider bar) → `bg-accent`.

Note: `app/stem-labs/page.js` is a `"use client"` component with no `metadata` export (no sibling `layout.js` exists for this route). This is a pre-existing gap unrelated to this rebrand — not fixed as part of this plan (consistent with the design spec's other out-of-scope items).

- [ ] **Step 15: Verify**

Run: `grep -n "girl\|women\|female\|woman\|gender" app/insights/careers/page.js app/about/team/page.js app/insights/newsletters/page.js app/about/awards/page.js app/insights/blog/page.js app/contact/page.js app/volunteer/page.js components/volunteer/VolunteerPage.js app/stem-labs/page.js`
Expected: no matches.

- [ ] **Step 16: Commit**

```bash
git add app/insights/careers/page.js app/about/team/page.js app/insights/newsletters/page.js app/about/awards/page.js app/insights/blog/page.js app/contact/page.js app/volunteer/page.js components/volunteer/VolunteerPage.js app/stem-labs/page.js
git commit -m "Update remaining page metadata, volunteer copy, and STEM Labs page for general audience"
```

---

### Task 32: Final verification sweep

**Files:** none (verification only)

- [ ] **Step 1: Full-repo grep for residual gendered terms**

Run: `grep -rn "girl\|women\|female\|woman" app components --include="*.js" | grep -v node_modules`

Expected remaining matches, and only these:
- `components/about/StoryHero.js` — founder origin narrative (Task 14, intentionally kept)
- `components/about/StoryContent.js` — "In Her Own Words" heading (Task 15 Step 3, intentionally kept)
- `components/about/AdvisoryBoard.js` — "Founder, Women in Tech Nigeria" and "women technologists" factual claims (Task 19, intentionally kept)
- `components/about/AwardsPage.js` — award/issuer proper nouns, HeForShe criteria sentence, four press citations (Task 20, intentionally kept)
- `components/about/RoadMap.js` — "National Girls in ICT Competition" and "The One Girl One Laptop Initiative" historical name reference (Task 22, intentionally kept)
- `components/home/OurInitiatives.js`, `components/home/MilestoneCallout.js` — "National Girls in ICT Competition" (Task 8, intentionally kept)
- `components/services/ICTCompetition.js` — "National Girls in ICT Competition" and "Queen Amina College girls..." achievement (Task 28, intentionally kept)
- `components/home/Testimonials.js` — first-person testimonial quotes (never touched)
- `components/insights/BlogIndex.js` — "Women in Tech" and "Empowering Rural Women with Skills" post entries (Task 29, intentionally kept)
- `components/programs/OneGirlOneLaptop.js`, `app/programs/one-girl-one-laptop/page.js` — if any reference to the route path string itself contains "girl" (e.g. `href="/programs/one-girl-one-laptop"`) — expected and correct per the routing decision

Any other match indicates a missed edit — go back and fix it before proceeding.

- [ ] **Step 2: Full-repo grep for residual non-hover pink classes**

Run: `grep -rn "bg-pink\|text-pink\|border-pink\|ring-pink" app components --include="*.js" | grep -v "hover:" | grep -v node_modules`

Expected: no matches (every non-hover pink class was converted to `primary` or `accent` across Tasks 5–31).

- [ ] **Step 3: Production build**

Run: `npm run build`
Expected: build succeeds with no errors (no missing imports from the `Hero.js`/`HeroSlider.cinematic.js` deletion, no syntax errors from the shared-constant imports).

- [ ] **Step 4: Manual visual check**

Start the dev server (`npm run dev`) and visually check:
- Hero slider: CTA button and progress bars are blue, not pink.
- Any page with `hover:text-pink` links: hover state still shows pink (confirms the one surviving pink role works).
- Nav/footer: "One Student One Laptop" label renders correctly and still links to `/programs/one-girl-one-laptop`.
- `/programs/economic-empowerment`: renders as "Rural Economic Empowerment Programme".
- `/about/story`: founder narrative still reads with the original girls/women origin story plus the new pivot line.

Per CLAUDE.md's existing rule, also check on a real mobile device before considering this shippable — this plan changed CTA button classes across ~20 pages, which is worth a physical-device pass.

- [ ] **Step 5: Final commit (only if Step 4 surfaced fixups)**

If manual checks passed cleanly, no commit needed for this task. If fixups were required, commit them with a message describing what was corrected.
