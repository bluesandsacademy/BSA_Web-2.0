# Inclusive Repositioning — Design Spec

**Date:** 2026-08-07
**Status:** Approved, ready for implementation planning

## Problem

Blue Sands Academy (BSA) started as a girls/women-focused ICT training organisation, and the site's messaging — mission statement, hero copy, program names, metadata — still reflects that origin exclusively. BSA has since grown to serve students, youth, young adults, and persons with disabilities generally, not girls/women only. When investors, government agencies, and funders (CcHub, angel investors) evaluate the site, it currently signals a narrower mandate than BSA actually has, which undersells the organisation's real reach and impact.

This spec defines the messaging and design-system changes needed to reposition the site as serving the general public, while preserving the girls/women origin story as authentic historical context rather than erasing it.

## Audit summary

A full-codebase audit found gendered ("girls"/"women"/"female") language and imagery references in:
- Root metadata (`app/layout.js`): title, description, OG/Twitter tags, JSON-LD, keyword array
- CLAUDE.md: mission statement, example voice quote
- Nearly every homepage section component (Hero, About Strip, What We Do, Our Initiatives, Milestone Callout, STEM Labs preview, Testimonials, Transition Statement, Blog Preview, Team, Partners)
- About-section pages/components (Mission, Story, Advisory Board, Awards, Impact Stats, Road Map, Team, Values)
- Two named programs with gendered identifiers: "One Girl One Laptop Initiative" (name + route slug) and "Economic Empowerment of Rural Women" (name only, slug already neutral)
- Services pages (STEM Training, ICT Competition) and their metadata
- Nav and footer labels/taglines
- Two unused/dead files (`components/home/Hero.js`, `components/home/HeroSlider.cinematic.js`) duplicating stale girls-only copy
- A repeated audience-descriptor phrase ("secondary school girls, female undergraduates, and female professionals") duplicated verbatim across 6 files

Full file-and-line detail was gathered during the audit and will be used directly by the implementation plan; it is not repeated in full here to keep this spec focused on direction and decisions.

## Decisions

### 1. Origin story is kept, not erased
The girls/women founding story stays on the Founder's Story page (`StoryHero.js`), explicitly framed as *how BSA started*, with an added pivot line marking the broadening to a general mandate. This preserves authenticity/credibility rather than rewriting history. All other pages/components move to general-audience framing.

### 2. New mission statement
Replaces "Closing the gender digital gap — empowering women and girls with ICT skills" (CLAUDE.md and all copy derived from it):

> "Closing the digital divide — equipping students, youth, and underserved communities with ICT & STEM skills."

### 3. New audience descriptor (shared constant)
Replaces the duplicated triad "secondary school girls, female undergraduates, and female professionals":

> "secondary school students, undergraduates, and working professionals"

This becomes a single exported constant (new small module, e.g. `lib/content.js`) imported by every component currently duplicating the phrase (`StoryContent.js`, `MissionSection.js`, `app/stem-labs/page.js`, `STEMTraining.js`, `TechFingers.js`), per the hybrid execution approach (see "Execution approach" below).

### 4. Explicit "who we serve" language
Where a page needs to spell out the served population explicitly (About/Mission-level copy), use:

> "students, youth, and adults — including persons with disabilities and rural communities — who lack access to digital skills and opportunity."

Disability and rural-community inclusion, which the audit found already partially present in a few places, becomes consistent and explicit rather than incidental.

### 5. Testimonials are not rewritten
First-person testimonial quotes (e.g. "I am a girl that has issues with my right leg...") are real people's own words, not BSA site messaging, and are left as-is.

### 6. Blog editorial content is not rewritten
Blog post titles/excerpts that are about "Women in Tech" as an editorial topic (e.g. `slug: "women-in-tech"`) are left alone — that is subject matter the blog covers, not BSA's self-description of who it serves.

### 7. Heading emphasis word choice shifts
Per CLAUDE.md's word-level colour emphasis rule, accent words move from gendered terms ("Women", "Girls") to opportunity/access terms ("People", "Digital Divide", etc.), decided per-heading during implementation.

### 8. Color system: pink demoted to minor accent
Pink was originally used heavily (primary CTAs, heading emphasis, progress bars) partly to signal a "girly"/feminine brand. Since the site is repositioning to general-audience, pink's prominence is demoted:
- Primary CTAs (e.g. "Partner With Us", hero buttons, CTA banners) move from `bg-pink` to `bg-primary` (blue).
- Heading word-emphasis defaults to `text-primary` (blue); `text-pink` becomes an option, not the default.
- Progress bars/indicator dots move to blue/accent-blue.
- Pink survives only as a minor secondary touch — e.g. `hover:text-pink` on text link hovers, or a single accent detail per page at most. Not on primary buttons, not as default heading-emphasis colour.
- The pink hex value itself (`#E63F8E`) is unchanged — only its role and frequency of use change.
- CLAUDE.md's "Colours" and "Locked Component Decisions" sections are updated to reflect the new role.

### 9. Program renaming
| Current | New name | Route slug |
|---|---|---|
| One Girl One Laptop Initiative | One Student One Laptop | Unchanged: `/programs/one-girl-one-laptop` (kept per explicit decision — see below) |
| Economic Empowerment of Rural Women | Rural Economic Empowerment Programme | Unchanged: `/programs/economic-empowerment` (already gender-neutral) |

**One Girl One Laptop slug decision:** the route slug is kept as-is rather than migrated, to avoid redirect/link-management overhead. Only the displayed name, page title, nav label, footer label, and body copy change to "One Student One Laptop." The URL itself will still contain "one-girl-one-laptop" — accepted tradeoff, not a gap to fix later.

"National Girls in ICT Competition" is left unchanged everywhere it's referenced — it is the real name of an external competition BSA won, a credibility/proof-point reference rather than BSA's own description of who it serves.

### 10. Dead code cleanup
`components/home/Hero.js` and `components/home/HeroSlider.cinematic.js` are unused (not imported by any page) and duplicate stale girls-only copy. Both are deleted as part of this work, since leaving them risks someone reviving stale messaging later.

## Execution approach

**Hybrid:** copy is edited directly, in place, in each component — matching the codebase's existing pattern of components owning their own local content arrays — **except** the audience-descriptor triad (Decision 3), which is extracted into one shared constant because the audit found it duplicated verbatim across 6 files. No broader content/CMS layer is introduced; this is the smallest change that removes the one real duplication problem.

## Scope map

| Area | Files | Change |
|---|---|---|
| Source of truth | `CLAUDE.md` | Mission statement, colour-usage rules, example voice quote |
| Root metadata | `app/layout.js` | Title, description, OG/Twitter tags, JSON-LD, keywords array |
| Homepage | `HeroSlider.js`, `AboutStrip.js`, `WhatWeDo.js`, `OurInitiatives.js`, `MilestoneCallout.js`, `STEMLabsHome.js`, `Testimonials.js`, `TransitionStatement.js`, `BlogPreview.js`, `TeamHome.js`, `Partners.js` | Headline/body copy, stat labels, heading emphasis colour |
| About section | `MissionSection.js`, `StoryContent.js`, `AboutHero.js`, `ValuesSection.js`, `TeamPage.js`, `AdvisoryBoard.js`, `AwardsPage.js`, `ImpactStats.js`, `RoadMap.js` | General-audience copy, except `StoryHero.js` (kept + reframed per Decision 1) |
| Programs | `OneGirlOneLaptop.js`, `TechFingers.js`, `EconomicEmpowerment.js` + their `app/programs/*/page.js` metadata | Copy + display names; slugs unchanged |
| Services | `STEMTraining.js`, `ICTCompetition.js` + page metadata | Copy, incl. shared audience-triad constant |
| Insights | `BlogIndex.js` | Post titles/excerpts/tags that are BSA self-description (not editorial subject matter — see Decision 6) |
| Nav/Footer | `Navbar.js`, `Footer.js` | "One Girl One Laptop" label → "One Student One Laptop"; footer tagline |
| Shared constant | New small module (e.g. `lib/content.js`) | Audience-triad string; imported by the 6 files currently duplicating it |
| Dead code | `Hero.js`, `HeroSlider.cinematic.js` | Deleted |

## Out of scope

- The broken `/focus-areas/*` links referenced in `Footer.js`, `app/sitemap.js`, and the deleted cinematic hero file — pre-existing 404s unrelated to this rebrand. Not fixed here.
- New photography/imagery sourcing. Existing assets are swapped only where currently-used alt text/captions explicitly imply girls-only framing; commissioning new representative photos is a separate future task.

## Testing / verification

- `next build` succeeds with no broken imports after `Hero.js`/`HeroSlider.cinematic.js` deletion and shared-constant extraction.
- Grep for residual gendered terms (`girl`, `women`, `female`) across `/app` and `/components` after implementation — expected remaining hits are only: `StoryHero.js` origin narrative, testimonial quotes, blog editorial content about "Women in Tech" as a topic, and "National Girls in ICT Competition" references.
- Manual visual check of CTA buttons, heading emphasis, and progress bars sitewide to confirm blue is now default and pink appears only as a minor accent.
- Mobile device check per CLAUDE.md's existing "do not ship without testing on real mobile device" rule, since this touches layout-adjacent colour classes on buttons across many pages.
