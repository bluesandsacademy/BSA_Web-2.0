# Blue Sands Academy — Website Blueprint

> This document is the single source of truth for building the BSA website. Follow it exactly. Do not deviate from the design system, narrative arc, or page structure without explicit instruction.

---

## 1. Project Context

**Organisation:** Blue Sands Academy (BSA)  
**Mission:** Closing the gender digital gap by empowering women and girls with ICT, business, and financial literacy skills.  
**Primary Audience:** Government agencies, startup funders (e.g. CcHub), angel investors  
**Primary CTA:** "Partner With Us"  
**Trust Signals:** Impact numbers, awards, testimonials, team credibility, partner logos  
**Model:** Software-based STEM delivery via PhET and Praxilabs — runs on any existing device. No hardware dependency. Infinitely scalable.

---

## 2. Design System

### Colors

```css
--primary: #0483e2; /* Brand blue — CTAs, links, highlights */
--secondary: #02345a; /* Deep navy — headers, section backgrounds, body text */
--accent: #ff6b9d; /* Pink — energy accents, badges, highlights */
--background: #ffffff; /* White — base background */
--text: #02345a; /* Navy — all body text */
--text-light: #ffffff; /* White — text on dark backgrounds */
--surface: #f4f8fe; /* Light blue-white — alternate section backgrounds */
```

### Typography

```css
--font-display: "Space Grotesk", sans-serif; /* All headings and display text */
--font-body: "Inter", sans-serif; /* All body text and UI elements */
```

Load both from Google Fonts:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

### Type Scale

```css
--text-hero: clamp(3rem, 6vw, 5rem); /* Hero headlines */
--text-h1: clamp(2rem, 4vw, 3rem); /* Page H1s */
--text-h2: clamp(1.5rem, 3vw, 2rem); /* Section headings */
--text-h3: 1.25rem; /* Card headings */
--text-body: 1rem; /* Body text */
--text-small: 0.875rem; /* Captions, labels */
```

### Spacing

```css
--section-gap: 6rem; /* Between major sections */
--container: 1200px; /* Max content width */
--gutter: 1.5rem; /* Page side padding */
```

### Component Rules

- All buttons: `border-radius: 8px`, `font-weight: 600`, `padding: 0.75rem 1.5rem`
- Primary button: `background: var(--primary)`, white text
- Accent button: `background: var(--accent)`, white text
- Cards: `border-radius: 12px`, subtle box shadow, white background
- Section alternation: white → `var(--surface)` → `var(--secondary)` (dark) → white
- Never use pure black (`#000000`). Use `--secondary` for dark text.
- Pink (`--accent`) is used sparingly — highlights, badges, one CTA per section max.

---

## 3. Global Components

### Navbar

- Logo left, nav links center/right
- Sticky on scroll with subtle shadow
- Mobile: hamburger menu with slide-in drawer
- CTA button: "Partner With Us" — `var(--accent)` background
- Nav links: Home, About Us, Key Focus Areas, Programs, STEM Labs, Insights, Contact

### Footer

- Background: `var(--secondary)`
- Columns: Logo + tagline | Quick Links | Programs | Contact Info | Social Links
- Bottom bar: copyright + privacy policy
- Include email subscription form (name + email input + subscribe button)

### Direct Chat Widget

- Floating chat button fixed bottom-right
- Icon: speech bubble, `var(--primary)` background
- On click: opens a small chat panel or links to WhatsApp Business number
- Label: "Chat with us"

---

## 4. Pages & Sitemap

```
/                        → Home
/about                   → About Us
  /about/story           → Founder's Story
  /about/team            → Our Team
  /about/advisory-board  → Advisory Board
/focus-areas             → Key Focus Areas
  /focus-areas/stem-training
  /focus-areas/tech-competitions
  /focus-areas/rural-women
  /focus-areas/disabilities
/programs                → Programs Overview
  /programs/tech-fingers
  /programs/one-girl-one-laptop
  /programs/stem-club
  /programs/techfingers-platform  → techfingers.io integration page
/stem-labs               → STEM Labs (VR/Simulation)
/partners                → Our Partners
/insights                → Insights Hub
  /insights/blog         → Blog listing
  /insights/newsletters
  /insights/case-studies
  /insights/careers
/volunteer               → Volunteer
/contact                 → Contact
```

---

## 5. Page-by-Page Blueprint

---

### PAGE 1: HOME (`/`)

**Narrative arc:** Stop scroll → Feel the problem → Understand the model → See the proof → Explore programs → Meet partners → Take action

---

#### Section 1 — Hero Slider

- Full-width, full-height slider (5 slides)
- Background: dark overlay on real photography of girls/women in tech
- Each slide: large headline + subtext + CTA button
- Slide transition: smooth crossfade

**Slide 1**

> Headline: We Invest In Women and Girls
> Subtext: So that they can have the technological skills to turn their lives and communities around.
> CTA: "See Our Programs" → `/programs`

**Slide 2**

> Headline: Closing the Gender Digital Gap Starts Here
> Subtext: Women and girls need to be given the tools they need to use technology.
> CTA: "Partner With Us" → `/contact`

**Slide 3**

> Headline: Women and Girls With Disabilities Are Our Priority
> Subtext: We build skills through a journey of empowerment, confidence, and self-determination toward full potential.
> CTA: "Learn More" → `/focus-areas/disabilities`

**Slide 4**

> Headline: Powering Girls and Women to Excel
> Subtext: Moving women and girls forward through technology.
> CTA: "Our Impact" → `/about/story`

**Slide 5**

> Headline: A Woman's Place Is in the Revolution
> Subtext: Creating a generation of female leaders through technology.
> CTA: "Join Us" → `/volunteer`

---

#### Section 2 — Impact Numbers Bar

- Full-width band, `var(--secondary)` background, white text
- 4 stats side by side:
  - `500+` Students Trained
  - `3` STEM Labs Deployed
  - `12` Schools Reached
  - `2` National ICT Competition Wins
- Use real numbers from client. Update as they grow.
- Animate numbers counting up on scroll (IntersectionObserver)

---

#### Section 3 — About BSA (intro)

- Split layout: left = text, right = image
- Headline: "Bridging the Gender Digital Gap, One Girl at a Time"
- Body: 2–3 sentences summarising BSA's mission and model
- Pink badge label: "Est. 2018"
- CTA: "Read Our Story" → `/about/story`

---

#### Section 4 — The Problem

- Background: `var(--surface)`
- Headline: "The Gap Is Real"
- 3 stat cards with icons:
  - "7 in 10 girls in Nigeria lack computer literacy skills"
  - "85% of women lack the tech skills needed for today's jobs"
  - "Africa's gender digital gap has widened since 2013"
- Source: cite BSA content brief
- Closing line: "BSA exists to change this."

---

#### Section 5 — Our Model (What We Do)

- Background: white
- Headline: "How We Create Change"
- Subheading: "Software-based STEM delivery — no hardware needed. Any device. Any school. Anywhere."
- 4 feature cards (icon + title + short description):
  1. **Digital Skills Training** — fundamentals of digital technology for careers and business
  2. **Tech Competitions** — girls test and refine skills in real-world competition environments
  3. **Economic Empowerment** — business education, funding, and opportunities for rural women
  4. **Skills for Persons With Disabilities** — subsidised technical and vocational training

---

#### Section 6 — Proof (ICT Competitions & Achievements)

- Background: `var(--secondary)`, white text
- Headline: "Proof It Works"
- Layout: large achievement callouts
  - "Featured at Times Square, New York"
  - "2019 National Beyond School ICT Champions — defeating 150+ schools"
  - "2019 National Girls in ICT Champions — beating 200+ schools"
- Pink accent on key words
- CTA: "See All Programs" → `/programs`

---

#### Section 7 — Our Initiatives (Programs Preview)

- Background: `var(--surface)`
- Headline: "Our Initiatives"
- 3 program cards (image + title + short description + link):
  1. Tech Fingers
  2. One Girl One Laptop
  3. Economic Empowerment of Rural Women
- CTA: "View All Programs" → `/programs`

---

#### Section 8 — Partners

- Background: white
- Headline: "Our Partners"
- Logo grid (grayscale → color on hover)
- Subtext: "We work with governments, corporations, and NGOs to scale our impact."

---

#### Section 9 — Testimonials

- Background: `var(--surface)`
- Headline: "Voices of Change"
- Carousel/slider of 5 testimonials:
  1. Saphia Yakubu
  2. Thelma Solomon
  3. Salome Gabriel
  4. Grace Dominic
  5. Lydia Idowu
- Each card: quote + name + school/role
- Pink quotation marks as decorative element

---

#### Section 10 — Meet the Team

- Background: white
- Headline: "Our Team"
- Grid of team member cards: photo + name + role
- Note: Kingsley's photo to be replaced (client instruction)
- CTA: "Meet Everyone" → `/about/team`

---

#### Section 11 — Partner CTA (The Ask)

- Background: `var(--primary)`
- White text
- Headline: "Partner With Blue Sands Academy"
- Subtext: "Join governments, funders, and corporations who are closing the gender digital gap with us."
- Two buttons:
  - "Partner With Us" → `/contact` (white button, navy text)
  - "Explore Programs" → `/programs` (outline button, white)

---

### PAGE 2: ABOUT US (`/about`)

**Sections:**

1. Page Hero — "About Blue Sands Academy" — full-width banner, `var(--secondary)` background
2. Founder's Story — Alero Thompson's story, problem she saw, why she started BSA
3. Vision — "To give young girls and women access to digital technology-based life-altering opportunities"
4. Mission — "To actively empower women and girls with ICT, business, and financial literacy skills"
5. The Road Map — BSA's growth timeline (2018 → present) as a visual timeline component
6. Our People → links to `/about/team`
7. Advisory Board → links to `/about/advisory-board`

---

### PAGE 3: KEY FOCUS AREAS (`/focus-areas`)

**Sections:**

1. Page Hero — "What We Do"
2. Overview intro paragraph
3. Four focus area detail sections (each full-width alternating layout):

**Focus Area 1 — Digital Skills Training**

> Headline: Digital Skills Training
> Body: Comprehending fundamentals of digital technology, tools, platforms — for careers and business.

**Focus Area 2 — Tech Competitions**

> Headline: ICT Competitions
> Body: Cutting-edge models that allow girls to test ability and refine skills. National champions in 2019.

**Focus Area 3 — Economic Empowerment of Rural Women**

> Headline: Economic Empowerment
> Body: Business education, funding, and opportunities for rural women — foundational to sustainable development.

**Focus Area 4 — Skills for Persons With Disabilities**

> Headline: Inclusive Training
> Body: Subsidised technical and vocational education for people with disabilities.

---

### PAGE 4: PROGRAMS (`/programs`)

**Sections:**

1. Page Hero — "Our Programs"
2. Programs grid overview (3 cards linking to sub-pages)

---

#### Sub-page: Tech Fingers (`/programs/tech-fingers`)

- What it is: onsite and online secondary school training program
- Skills taught: UI/UX Design, Mobile App Development, Photography & Videography, Web Development, Animation
- Currently running: Ogombo Community High School — 150+ junior secondary school girls
- Benefits list (from content brief)
- CTA: "Enroll Your School" → `/contact`

---

#### Sub-page: One Girl One Laptop (`/programs/one-girl-one-laptop`)

- Overview: free laptop to successful students who cannot afford one
- Three pillars (displayed as icon cards):
  1. Skill Empowerment
  2. Tool Empowerment
  3. Mindset Change
- Impact: 50 girls equipped so far
- Partners: NGOs, government, corporations
- CTA: "Support This Initiative" → `/contact`

---

#### Sub-page: Techfingers Platform (`/programs/techfingers-platform`)

- This is the eLearning platform at techfingers.io
- What it offers:
  - Online learning at own pace
  - Global female community/collaboration channel
  - Scholarship connections (partial and fully paid, for overseas study)
  - Female tech mentors
  - Business, entrepreneurial, and leadership courses
  - Direct and subscription-based pricing model
- CTA: "Visit Platform" → external link to https://www.techfingers.io
- CTA 2: "Register Now" → https://www.techfingers.io

---

### PAGE 5: STEM LABS (`/stem-labs`)

**Sections:**

1. Page Hero — "STEM Labs"
2. What BSA's STEM labs are: VR/simulation-based, software-only, runs on existing devices
3. Tools used: PhET Interactive Simulations + Praxilabs
4. Why it matters: no physical infrastructure needed, scalable to any school
5. Embed or showcase sample simulations (link to PhET/Praxilabs)
6. CTA: "Bring a STEM Lab to Your School" → `/contact`

---

### PAGE 6: INSIGHTS (`/insights`)

**Sub-sections:**

#### Blog (`/insights/blog`)

Three published blog posts (from content brief):

**Post 1:** "We Are the Future of Technology"

- Intro to the academy, its training programs, why BSA exists
- Sections as outlined in content brief

**Post 2:** "Women in Tech: The Majority of IT Employees Are Men, But Not All Is Lost"

- Facts and statistics around female youth in tech
- Encourages girls toward tech careers

**Post 3:** "Empowering Rural Women with Skills"

- Rural business training, economic empowerment
- Community impact story

Each blog post page: hero image + title + date + body content + social share buttons + related posts

#### Newsletters (`/insights/newsletters`)

- Archive of past newsletters
- Email subscription form (name + email)

#### Case Studies (`/insights/case-studies`)

- Placeholder page — "Coming Soon" with email capture for updates

#### Careers (`/insights/careers`)

- Placeholder page — open roles or "No open roles currently — check back soon"
- Option to submit CV speculatively

---

### PAGE 7: VOLUNTEER (`/volunteer`)

**Sections:**

1. Page Hero — "Volunteer With Us" — `var(--accent)` accent elements
2. Why volunteer — body copy from content brief
3. Volunteer icon callouts (passion / skills / community impact)
4. **Volunteer Form** (required fields):
   - Full Name
   - Email Address
   - Phone Number
   - Area of Interest (dropdown: Tech Training / Mentorship / Events / Admin / Other)
   - Message (optional)
   - Submit button
5. CTA after form: "Or email us directly at [email]"

---

### PAGE 8: CONTACT (`/contact`)

**Sections:**

1. Page Hero — "Get In Touch"
2. Three contact options (icon cards):
   - "Partner With Us" — for funders and government
   - "Bring a Program to My School" — for schools and institutions
   - "General Enquiry" — for all others
3. Contact Form:
   - Full Name
   - Email
   - Organisation
   - Enquiry Type (dropdown matching above)
   - Message
   - Submit button
4. Contact Details sidebar:
   - Email
   - Phone
   - Address
   - Social media links
5. Map embed (if address available)

---

## 6. Key Features

### Direct Chat

- Floating WhatsApp/chat widget fixed to bottom-right on all pages
- `var(--primary)` background, white icon
- On mobile: opens WhatsApp. On desktop: opens chat panel or WhatsApp Web.

### Email Subscription

- Appears in: Footer (all pages) + Newsletters page
- Fields: First Name + Email
- On submit: success message "You're in! Welcome to the BSA community."
- Connect to email marketing tool (Mailchimp, Brevo, or client's preferred provider)

---

## 7. Image Placeholders & Photography Brief

All images use placeholders during development. Use `https://placehold.co` with descriptive labels so the CEO knows exactly what to provide.

### Placeholder Format

```jsx
// Always use next/image with defined dimensions
<Image
  src="https://placehold.co/1920x1080/02345A/FFFFFF?text=HERO+SLIDE+1:+Girls+in+Tech+Training"
  alt="Girls in tech training session"
  fill
  className="object-cover"
/>
```

Use BSA's navy (`02345A`) as placeholder background and white text — stays on-brand even as placeholders.

---

### Image Inventory (What CEO Must Provide)

#### TIER 1 — Critical. Site cannot launch without these.

| Location         | Placeholder Label                          | Required Size | Description                             |
| ---------------- | ------------------------------------------ | ------------- | --------------------------------------- |
| Hero Slide 1     | `HERO-1: Girls actively using computers`   | 1920×1080px   | Girls/women on laptops during training  |
| Hero Slide 2     | `HERO-2: Group of women in tech session`   | 1920×1080px   | Classroom or workshop setting           |
| Hero Slide 3     | `HERO-3: Girl with disability in training` | 1920×1080px   | Inclusive training moment               |
| Hero Slide 4     | `HERO-4: Women excelling in tech`          | 1920×1080px   | Professional or graduation moment       |
| Hero Slide 5     | `HERO-5: Female leaders in tech`           | 1920×1080px   | Inspiring, forward-looking moment       |
| Founder portrait | `FOUNDER: Alero Thompson headshot`         | 600×600px     | Professional portrait, clear background |
| About section    | `ABOUT: BSA training session candid`       | 800×600px     | Real training environment               |

#### TIER 2 — Important. Needed before full launch.

| Location             | Placeholder Label                             | Required Size | Description                            |
| -------------------- | --------------------------------------------- | ------------- | -------------------------------------- |
| Tech Fingers page    | `TECH-FINGERS: Girls coding at Ogombo School` | 800×500px     | On-site training session               |
| One Girl One Laptop  | `LAPTOP: Laptop donation moment`              | 800×500px     | Girl receiving or using donated laptop |
| ICT Competition      | `COMPETITION: National champions celebration` | 800×500px     | 2019 win moment if photo exists        |
| Rural Women          | `RURAL: Women in empowerment session`         | 800×500px     | Business or skills training            |
| Disabilities program | `DISABILITY: Inclusive training session`      | 800×500px     | Skills training for PWDs               |
| Blog Post 1          | `BLOG-1: Academy training overview`           | 1200×630px    | General training photo                 |
| Blog Post 2          | `BLOG-2: Women in tech`                       | 1200×630px    | Female developer or tech professional  |
| Blog Post 3          | `BLOG-3: Rural women skills`                  | 1200×630px    | Rural community training               |

#### TIER 3 — Nice to have. Add after launch.

| Location             | Placeholder Label                             | Required Size  | Description                           |
| -------------------- | --------------------------------------------- | -------------- | ------------------------------------- |
| Times Square feature | `ACHIEVEMENT: Times Square billboard/feature` | 800×500px      | Photo of the Times Square moment      |
| Events               | `EVENT: BSA event or workshop`                | 800×500px      | Any BSA public event                  |
| Partners section     | `PARTNERS: Partner logos`                     | 200×80px each  | PNG with transparent background       |
| Team photos          | `TEAM: [Name] headshot`                       | 400×400px each | One per team member, consistent style |

---

### Photography Brief for CEO

> Send this directly to the CEO alongside the placeholder list above.

**What we need from you:**

For each placeholder above, provide a real photo. Here are the rules for every photo:

- **Format:** JPG or PNG, minimum quality 80%
- **Minimum size:** as listed above — do not send smaller
- **Content:** real BSA moments only — no stock photography
- **Faces:** ensure you have consent to use all photos publicly
- **Lighting:** well-lit, no heavy shadows on faces
- **Avoid:** blurry photos, heavy filters, watermarks, logos covering faces

Team headshots should all be taken against the **same background** (plain wall, consistent lighting) so they look like a unified team grid, not a collection of different selfies.

---

- **Photography:** All hero images and slider images must show real girls/women in tech contexts. Avoid generic stock. Prioritise BSA's own photography. If stock is needed use: Unsplash (search "African girls tech", "women coding Africa").
- **Tone:** Bold, mission-driven, warm. Never corporate-cold. This is a movement.
- **Grammar:** The source content brief contains grammatical errors and repetition. Clean these up when implementing copy. The corrected content is embedded in this document.
- **Kingsley's photo** on the team section must be replaced — client instruction.
- **techfingers.io** is a live external platform — link to it, do not rebuild it.
- **Blog content** is provided in the content brief. Implement as-is with minor grammar cleanup.
- **Impact numbers** — use real numbers provided. Do not fabricate. If a number is unknown, use a placeholder and flag for client to confirm.

---

## 8. Tech Stack Guidance

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS — map design tokens above to Tailwind config
- **Animations:** CSS transitions preferred over Framer Motion (bundle cost). Use Framer Motion only if interaction complexity requires it, and lazy load via `next/dynamic()`.
- **Images:** `next/image` for all images — required for performance.
- **Fonts:** Load via `next/font/google` — Space Grotesk + Inter
- **Forms:** React Hook Form + Zod validation
- **Email:** Connect subscription form to Mailchimp or Brevo API
- **Chat widget:** WhatsApp Business link or Tidio/Crisp embed

---

## 9. Motion, Scroll Effects & UI Quality Layer

This section defines exactly how the site should feel — not just what it shows. A funder landing on this site must feel _premium and credible_ within 3 seconds.

---

### Motion Philosophy

> Every animation must earn its place. Motion should inform, orient, or delight — never decorate.

- **Enter animations**: `ease-out`, 300–400ms — elements feel responsive as they arrive
- **Exit animations**: `ease-in`, 200ms — exits are faster than entrances
- **Hover micro-interactions**: 150–200ms — instant feedback
- **Respect `prefers-reduced-motion`** — non-negotiable, implement globally

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### Scroll-Triggered Animations (IntersectionObserver)

Use IntersectionObserver (not scroll event listeners — too expensive). Trigger once when element enters viewport.

| Element                   | Animation                                      | Duration | Easing                 |
| ------------------------- | ---------------------------------------------- | -------- | ---------------------- |
| Section headings          | `opacity 0→1` + `translateY(24px→0)`           | 500ms    | ease-out               |
| Stat numbers (impact bar) | Count up from 0 to final number                | 1200ms   | ease-out               |
| Cards (grid)              | Staggered `opacity 0→1` + `translateY(16px→0)` | 400ms    | ease-out, 40ms stagger |
| Image panels              | `opacity 0→1` + `translateX(±32px→0)`          | 500ms    | ease-out               |
| Achievement callouts      | `scale(0.95→1)` + `opacity 0→1`                | 400ms    | ease-out               |
| Partner logos             | Staggered fade in                              | 300ms    | ease-out, 30ms stagger |
| Testimonial cards         | `opacity 0→1` + `translateY(12px→0)`           | 400ms    | ease-out               |

**Rule:** Max stagger delay = 40ms per item. Never exceed 50ms — feels broken.

---

### Hero Slider

- Transition: crossfade (`opacity`) — NOT slide. Slide is distracting on full-bleed hero images.
- Duration between slides: 5000ms auto-advance
- Crossfade transition: 800ms, `ease-in-out`
- Overlay: dark gradient `linear-gradient(to right, rgba(2,52,90,0.85) 40%, transparent)` — left-heavy so text is always readable
- Text entrance per slide: headline slides in from left (`translateX(-24px→0)` + `opacity 0→1`, 500ms), subtext follows 150ms later, CTA button follows 200ms after that

---

### Micro-interactions

| Interaction          | Animation                                                                  |
| -------------------- | -------------------------------------------------------------------------- |
| Nav links hover      | Underline slides in from left (width 0→100%), `var(--accent)` color, 200ms |
| CTA buttons hover    | `translateY(-2px)` + deepen box-shadow, 150ms ease-out                     |
| CTA buttons press    | `scale(0.97)`, 80ms ease-in, release to `scale(1)` 150ms ease-out          |
| Cards hover          | `translateY(-4px)` + shadow deepens, 200ms ease-out                        |
| Partner logos hover  | Grayscale → full color, 200ms ease-out                                     |
| Input focus          | Border color shifts to `var(--primary)`, subtle `scale(1.01)`, 150ms       |
| Form submit success  | Checkmark scales in with `scale(0→1.1→1)`, green color, 400ms              |
| Mobile hamburger     | 3 bars morph to ✕ via transform, 300ms                                     |
| Accordion open/close | Height via `grid-template-rows: 0fr → 1fr`, opacity, 250ms ease-out        |

---

### High-Quality UI Techniques

#### 1. Glassmorphism Navbar (on scroll)

When user scrolls past hero:

```css
.navbar.scrolled {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 rgba(2, 52, 90, 0.08);
}
```

Transition: 300ms ease-out. Feels premium, not flat.

#### 2. Impact Numbers — Animated Count-Up

Use IntersectionObserver + `requestAnimationFrame` to count from 0 to final value when section enters viewport. Easing: ease-out curve via `Math.easeOutQuad`.

```js
// Count-up with easing
function easeOutQuad(t) {
  return t * (2 - t);
}
```

#### 3. Keyword Accent — Underline Decoration (Not Gradient Text)

Do NOT use gradient text. It reads as "tech startup" and undermines institutional credibility with government and funder audiences.

Instead, use a **pink underline decoration** on one key word per headline:

```css
.accent-word {
  position: relative;
  display: inline-block;
}

.accent-word::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--accent);
  border-radius: 2px;
}
```

Apply to: one word in the hero headline, one word in the "The Gap Is Real" section heading. Nowhere else. Achieves the same focal point with more authority and less visual noise.

#### 4. Section Dividers — Clean Background Transitions (Not Waves)

Do NOT use SVG wave or diagonal clip-path dividers. These were popular 2019–2022 and now read as dated.

Instead, use **sharp background color transitions**. The contrast between section backgrounds does all the work:

```
Hero          → var(--secondary)   dark navy
Impact Bar    → var(--secondary)   continues (seamless)
About Intro   → #FFFFFF            sharp cut to white
The Problem   → var(--surface)     light blue-white
Our Model     → #FFFFFF            white
Proof         → var(--secondary)   dark navy — high drama
Programs      → var(--surface)     light
Partners      → #FFFFFF            white
Testimonials  → var(--surface)     light
Team          → #FFFFFF            white
Partner CTA   → var(--primary)     brand blue — strong close
```

Where a visual break is needed between two light sections, use a short pink rule above the heading:

```css
.section-rule {
  width: 64px;
  height: 3px;
  background: var(--accent);
  border-radius: 2px;
  margin: 0 auto 2rem;
}
```

Clean, modern, on-brand. No waves.

#### 5. Card Depth System

Three elevation levels — use consistently:

```css
--shadow-1:
  0 1px 3px rgba(2, 52, 90, 0.08), 0 1px 2px rgba(2, 52, 90, 0.04); /* Cards at rest */
--shadow-2:
  0 4px 12px rgba(2, 52, 90, 0.12), 0 2px 4px rgba(2, 52, 90, 0.06); /* Cards on hover */
--shadow-3:
  0 8px 24px rgba(2, 52, 90, 0.16), 0 4px 8px rgba(2, 52, 90, 0.08); /* Modals, dropdowns */
```

#### 6. Pink Accent Highlights — Strategic Use Only

Pink (`#FF6B9D`) appears in:

- Stat number values in the impact bar
- Quotation marks in testimonials
- Active nav indicator
- Badge labels ("Est. 2018", "Live Program", "National Champions")
- One word in hero headlines (e.g. "Women **and Girls**")
- CTA button on dark backgrounds

Never use pink as a background for large sections. Never use on body text.

#### 7. Sticky Navbar Behaviour

- Transparent over hero
- Transitions to frosted glass on scroll (see technique #1)
- Active page link: pink underline indicator
- Transition: 300ms

#### 8. Testimonial Slider

- Auto-advances every 6 seconds
- Pause on hover
- Navigation: dot indicators (active dot = `var(--primary)`, inactive = `var(--surface)`)
- Swipe-enabled on mobile (touch events)
- Crossfade transition: 400ms ease-in-out

#### 9. Skeleton Screens

For any async content (blog posts, partner logos loaded from CMS):

- Shimmer animation: `background: linear-gradient(90deg, #f0f0f0 25%, #e0e8f4 50%, #f0f0f0 75%)`
- Shimmer sweeps left-to-right, 1.5s linear loop
- Matches rough shape of incoming content

#### 10. Page Route Transitions (Next.js)

- Transition type: fade (`opacity 0→1`)
- Duration: 250ms ease-out on enter, 150ms ease-in on exit
- Implement via `layout.tsx` wrapper with CSS transition

---

### Responsive Behaviour

| Breakpoint            | Key Changes                                                          |
| --------------------- | -------------------------------------------------------------------- |
| `< 768px` (mobile)    | Single column, hamburger nav, slider text shortened, stats stack 2×2 |
| `768–1023px` (tablet) | 2-column grids, condensed nav                                        |
| `≥ 1024px` (desktop)  | Full layout as designed                                              |

- All touch targets: minimum 44×44px
- Hover states guarded: `@media (hover: hover)` — touch devices don't hover
- No horizontal scroll at any breakpoint — test at 320px minimum

---

### Icon Library

Use **Lucide React** exclusively. One library, consistent stroke weight.

```bash
npm install lucide-react
```

Size grid: 16 / 20 / 24px only. Match to surrounding text size.

---

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#0483E2",
        secondary: "#02345A",
        accent: "#FF6B9D",
        surface: "#F4F8FE",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
};
```

---

## 10. SEO & Meta Layer

Every page must define these. Implement via Next.js `generateMetadata()` in each `page.tsx`.

### Global Defaults (in `layout.tsx`)

```ts
export const metadata = {
  metadataBase: new URL("https://bluesandsacademy.org"),
  openGraph: {
    siteName: "Blue Sands Academy",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};
```

### Per-Page Meta Definitions

| Page        | Title                                                 | Meta Description                                                                                                                                                     |
| ----------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Home        | `Blue Sands Academy — Closing the Gender Digital Gap` | `Blue Sands Academy empowers women and girls across Nigeria with ICT training, STEM education, and digital skills. Partner with us to close the gender digital gap.` |
| About       | `About Us — Blue Sands Academy`                       | `Learn about Blue Sands Academy's mission, founder Alero Thompson, and our journey to empower women and girls through technology since 2018.`                        |
| Focus Areas | `What We Do — Blue Sands Academy`                     | `From digital skills training to ICT competitions and rural women empowerment — discover how Blue Sands Academy creates lasting change.`                             |
| Programs    | `Our Programs — Blue Sands Academy`                   | `Explore Tech Fingers, One Girl One Laptop, and the Techfingers eLearning platform — programs built to equip girls and women with digital skills.`                   |
| STEM Labs   | `STEM Labs — Blue Sands Academy`                      | `BSA delivers virtual STEM labs via PhET and Praxilabs — software-based, device-agnostic, and scalable to any school in Nigeria.`                                    |
| Insights    | `Insights — Blue Sands Academy`                       | `Read BSA's latest blog posts, newsletters, and case studies on gender digital inclusion, ICT education, and women in tech.`                                         |
| Volunteer   | `Volunteer With Us — Blue Sands Academy`              | `Join Blue Sands Academy as a volunteer. Use your skills to empower women and girls with technology across Nigeria.`                                                 |
| Contact     | `Contact Us — Blue Sands Academy`                     | `Get in touch with Blue Sands Academy to explore partnership, sponsorship, or program opportunities.`                                                                |

### Open Graph Image

- Size: **1200×630px** — required for every page
- Design: BSA navy background + logo + page title in white + pink accent line
- Default OG image + unique ones for Home, About, and each blog post
- Place at: `public/og/og-home.jpg`, `public/og/og-about.jpg` etc.

### Structured Data (JSON-LD)

Add to homepage `<head>`:

```json
{
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "Blue Sands Academy",
  "url": "https://bluesandsacademy.org",
  "logo": "https://bluesandsacademy.org/logo.png",
  "description": "Empowering women and girls with ICT and digital skills to close the gender digital gap.",
  "foundingDate": "2018",
  "areaServed": "Nigeria",
  "sameAs": [
    "https://www.facebook.com/bluesandsacademy",
    "https://www.instagram.com/bluesandsacademy",
    "https://www.linkedin.com/company/bluesandsacademy"
  ]
}
```

---

## 11. Accessibility (a11y)

BSA's audience includes government agencies — many run accessibility audits before approving partnerships. This is not optional.

### Semantic HTML Requirements

```html
<header>
  <!-- Navbar -->
  <main>
    <!-- Page content — one per page -->
    <section>
      <!-- Each content section with aria-label -->
      <article>
        <!-- Blog posts -->
        <footer><!-- Footer --></footer>
      </article>
    </section>
  </main>
</header>
```

Heading hierarchy — strictly enforced:

- One `<h1>` per page
- Section headings: `<h2>`
- Card headings: `<h3>`
- Never skip levels

### Focus States

```css
:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 3px;
  border-radius: 4px;
}
/* Never do this: */
:focus {
  outline: none;
} /* kills keyboard navigation */
```

### ARIA Requirements

| Component         | Required ARIA                                                           |
| ----------------- | ----------------------------------------------------------------------- |
| Hamburger button  | `aria-label="Open menu"` + `aria-expanded`                              |
| Hero slider       | `role="region"` + `aria-label="Featured slides"` + `aria-live="polite"` |
| Slider buttons    | `aria-label="Previous slide"` / `aria-label="Next slide"`               |
| Icon-only buttons | `aria-label` describing the action                                      |
| Form inputs       | `<label>` linked via `htmlFor` + `id`                                   |
| Form errors       | `aria-describedby` linking input to error message                       |
| Partner logos     | `alt="[Partner name] logo"`                                             |
| Decorative images | `alt=""` explicitly empty                                               |

### Colour Contrast (WCAG AA)

| Combination                         | Result                               |
| ----------------------------------- | ------------------------------------ |
| Navy `#02345A` on white             | Passes (13.5:1)                      |
| White on navy `#02345A`             | Passes (13.5:1)                      |
| White on primary `#0483E2`          | Tight — verify with contrast checker |
| Pink `#FF6B9D` as body text         | Fails — never use as body text       |
| Pink `#FF6B9D` on white, 18px+ only | Passes for large text only           |

### Keyboard Navigation Rules

- Tab order follows visual reading order
- Modals/drawers: trap focus inside when open, return to trigger on close
- Slider: arrow keys navigate slides
- Dropdowns: Escape closes, arrow keys navigate items

---

## 12. Loading & Error States

Every async operation needs all three states: loading, success, error.

### Contact & Volunteer Forms

**Loading:** Button disabled + spinner replaces text.

**Success:** Replace form with message — do not redirect:
"Thank you [Name]. We'll be in touch within 2 business days."
Animate in: opacity 0 to 1 + translateY(16px to 0), 400ms ease-out.

**Error:** Keep form visible with values intact — never clear on error. Show error banner above submit. Individual field errors: red border + message below field.

### Email Subscription

- Loading: "Subscribing..."
- Success: "You're in! Welcome to the BSA community."
- Duplicate: "You're already subscribed. Thank you!"
- Error: "Something went wrong. Please try again."

### Blog / Dynamic Content

- Skeleton screens while loading — shimmer left-to-right, 1.5s linear loop
- Skeleton shape matches actual content layout
- Load failure: "Unable to load posts. Please refresh the page."

---

## 13. 404 Page (`not-found.tsx`)

- Background: `var(--secondary)` navy
- Large "404" in `var(--accent)` pink — Space Grotesk, bold
- Headline: "Looks like this page took a wrong turn."
- Subtext: "Let's get you back on track."
- Two buttons: "Go Home" and "Contact Us"
- BSA logo top-left. No navbar, no footer.

---

## 14. Cookie & Privacy Banner

### Banner

- Position: fixed bottom, full width
- Background: `var(--secondary)` navy, white text, 14px
- Buttons: "Accept" in `var(--primary)` | "Decline" as text link
- Animate in: translateY(100% to 0), 300ms ease-out
- Store preference in localStorage

### Privacy Policy Page (`/privacy`)

Cover: data collected, how used, email subscriptions, third-party tools. Link in footer.

---

## 15. Performance Targets

Must hit these Lighthouse scores before launch.

| Metric         | Minimum |
| -------------- | ------- |
| Performance    | 85      |
| Accessibility  | 95      |
| Best Practices | 95      |
| SEO            | 95      |

### Core Web Vitals

| Metric | Target  |
| ------ | ------- |
| LCP    | < 2.5s  |
| INP    | < 200ms |
| CLS    | < 0.1   |

### Rendering Strategy Per Page

| Page         | Strategy               |
| ------------ | ---------------------- |
| Home         | SSG                    |
| About        | SSG                    |
| Programs     | SSG                    |
| Blog listing | ISR (revalidate: 3600) |
| Blog post    | ISR (revalidate: 3600) |
| Contact      | SSG + client form      |
| Volunteer    | SSG + client form      |

---

## 16. Launch Checklist

Nothing ships until every item is checked.

### SEO

- [ ] Unique title + meta description on every page
- [ ] OG image (1200x630px) on every page
- [ ] JSON-LD structured data on homepage
- [ ] robots.txt present
- [ ] sitemap.xml generated via next-sitemap
- [ ] No broken internal links
- [ ] All image alt text filled in

### Accessibility

- [ ] One h1 per page, no skipped heading levels
- [ ] All forms have explicit label elements
- [ ] All icon-only buttons have aria-label
- [ ] Focus states visible on all interactive elements
- [ ] Keyboard navigation works on all menus, modals, sliders
- [ ] prefers-reduced-motion implemented globally
- [ ] axe DevTools run — zero critical violations

### Performance

- [ ] Lighthouse Performance 85+ on mobile
- [ ] Lighthouse Accessibility 95+
- [ ] LCP < 2.5s, CLS < 0.1
- [ ] next/image on every image
- [ ] next/font for all fonts
- [ ] Bundle analyzer run — no unexpected heavy imports

### Forms & States

- [ ] Contact form: loading / success / error all working
- [ ] Volunteer form: loading / success / error all working
- [ ] Email subscription: success / duplicate / error all working
- [ ] Forms never clear on error
- [ ] Form submissions deliver to real inbox (tested)

### Content

- [ ] All placeholder images replaced with real photography
- [ ] All impact numbers confirmed by CEO
- [ ] Copy reviewed and grammar-checked on every page
- [ ] Kingsley's team photo replaced
- [ ] Partner logos in PNG transparent format
- [ ] Privacy Policy live and linked in footer
- [ ] All external links use target="\_blank" rel="noopener noreferrer"

### Technical

- [ ] 404 page implemented and branded
- [ ] Cookie consent banner working
- [ ] Chat widget connected to real WhatsApp number
- [ ] Email subscription connected to Mailchimp or Brevo
- [ ] Environment variables set in production
- [ ] Domain configured, SSL active
- [ ] Analytics connected (Google Analytics or Plausible)
- [ ] Tested on real mobile device
- [ ] Tested on Chrome, Safari, and Firefox

---

## 17. Build Order (Recommended)

1. Global layout (Navbar + Footer + Chat widget)
2. Design system (Tailwind config + typography + color tokens)
3. Home page (highest priority — funder first impression)
4. About page
5. Key Focus Areas
6. Programs (overview + sub-pages)
7. STEM Labs
8. Volunteer (with working form)
9. Contact (with working form)
10. Insights/Blog

---

_Blueprint version 2.0 — Prepared for Blue Sands Academy_  
_Hand this document to your in-code AI. It has everything needed to build._
