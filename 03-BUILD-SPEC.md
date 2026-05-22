# JBE Interiors — Build Spec

> Page-by-page layout. Use alongside the design system doc. This tells you what goes on each page; the design system tells you how it should look.

---

## Site structure

```
/                    Landing page
/projects            Projects index
/projects/[slug]     Individual project page (optional — see Phase 2 below)
/contact             Contact page
```

**Phase 1 (MVP for launch):** Landing, Projects, Contact. All project profiles live on the Projects page as long-scroll sections.

**Phase 2 (post-launch, if Jason wants it):** Break individual projects out into their own pages with deep links.

Start with Phase 1. Phase 2 can come later without a redesign.

---

## Global elements

### Header

Fixed top, full width, `var(--paper)` background, 1px bottom border `var(--bone)`. Height 80px desktop, 64px mobile.

**Left:** JBE Interiors logo (links to /).
**Right:** Nav items — `WORK` / `CONTACT`. Active state indicated by `var(--accent)` underline 2px below the text.

### Footer

`var(--ink)` background, `var(--paper)` text. Generous padding (`--space-xl` vertical).

**Layout:**

```
[ Logo, large ]
                                              [ Tel: 01302 322202 ]
                                              [ jason@jbeinteriors.com ]
                                              [ 305 Churchway, Doncaster, DN12TB ]
[ Instagram icon ] [ View on Instagram → ]

────────────────────────────────────────────────────────────────────
© JBE Interiors Ltd 2026                                Site by Seam
```

---

## Page 1: Landing (`/`)

The landing page has a clear narrative arc:

1. **Establish identity** (hero)
2. **Show selected work** (featured projects)
3. **Signal what they do** (capabilities, brief)
4. **Show they're active** (Instagram feed)
5. **Make contact easy** (footer CTA)

### Section 1.1 — Hero

Full viewport height (100vh), `var(--ink)` background, single full-bleed photograph as the dominant element. The image should be one of JBE's strongest finished interiors — wide architectural shot, no people, evening lighting if possible.

**Overlay text:**
- Eyebrow: `JBE INTERIORS` (in `--paper` colour, top-left of viewport, 80px from top, 80px from left)
- Headline: `Interiors built for hospitality.` in `--t-display-xl`, weight 300, `--paper` colour. Bottom-left of viewport, 80px from bottom, 80px from left. Max-width 9 columns.
- Sub-line below headline, `--t-body-l`, `--paper` at 70% opacity: `Restaurant and retail fit-outs across the UK, Ireland, and Jersey.`

**No CTA button on the hero.** The visitor scrolls. Let them.

### Section 1.2 — Selected Work

Eyebrow: `01 / SELECTED WORK`
Section headline: `Recent projects.` in `--t-display-l`.

Beneath the headline, **three featured projects** displayed as large editorial cards. Not a grid — a vertical sequence.

**Each featured project card layout (alternating):**

Odd-indexed (1st, 3rd): Image on left (7 columns), text block on right (4 columns, starting at column 9).
Even-indexed (2nd): Image on right (7 columns), text block on left (4 columns, starting at column 2).

**Text block contains:**
- Eyebrow: `RESTAURANT` or `RETAIL` (the project category)
- Project name in `--t-display-m`
- Client name, location in `--t-body-m`, slate colour
- One-paragraph description in `--t-body-m` (50-80 words)
- Year completed, in `--t-caption`

The image should be tall portrait orientation for the side-by-side layout to work. Use the strongest single image per project.

Spacing between project cards: `--space-xl`.

**Featured projects to use (confirm with Jason):**
1. Nando's, Hull
2. Parsons
3. Zelmans St Pauls

Below the third project, a single text link: `See all projects →` in `--t-body-m`, links to `/projects`.

### Section 1.3 — Capabilities

`var(--stone)` background. Two-column layout.

**Left column** (columns 2-6):
- Eyebrow: `02 / WHAT WE DO`
- Headline: `Restaurant and retail fit-outs, from concept to handover.` in `--t-display-m`

**Right column** (columns 7-11):
- Three short paragraphs in `--t-body-m`. No bullet points, no lists. Written prose.

Suggested copy (adapt with Jason):

> JBE Interiors delivers complete fit-out programmes for restaurant and retail brands across the UK, Ireland, and Jersey. We work directly with national chains, hospitality groups, and independent operators.

> Our scope covers everything from initial site survey through to handover: programme management, principal contracting, joinery, M&E coordination, finishes, FF&E install, and snagging. Most projects run between four and twelve weeks on site.

> We've delivered sites for Wagamama's, Nando's, and independent operators including Parsons and Zelmans. Repeat work makes up the majority of our pipeline.

Below the three paragraphs: a small list of client logos in `--slate` colour, monochrome only (no full-colour brand marks). If you don't have permission for client logos, use a simple text list:

```
Selected clients:
Wagamama's · Nando's · Parsons · Zelmans · [others]
```

### Section 1.4 — Instagram Feed

Eyebrow: `03 / LATEST`
Section headline: `From the studio.` in `--t-display-l`.

Four-tile horizontal row, full-width grid (columns 1-12). Square aspect ratio per tile. Use the Instagram Basic Display API or a service like SnapWidget / Behold to pull the four most recent posts from JBE Interiors' Instagram.

Below the tiles, centered text: `Follow @jbeinteriors on Instagram →` linking to their profile.

Spacing above and below: `--space-xl`.

### Section 1.5 — Contact CTA

Final section before the footer. `var(--ink)` background, `var(--paper)` text. Centered.

- Eyebrow: `04 / WORK WITH US`
- Headline: `Have a project in mind?` in `--t-display-l`
- Sub-text: `Tell us about it.` in `--t-body-l`, paper colour at 70% opacity
- Primary button: `START A CONVERSATION` linking to `/contact`

Generous vertical padding (`--space-2xl`).

---

## Page 2: Projects (`/projects`)

The full body of work. Long-scroll page with a project per "chapter."

### Section 2.1 — Page hero

`var(--paper)` background. Top of page, below header.

- Eyebrow: `WORK`
- Headline: `Selected projects.` in `--t-display-l`
- Sub-line: `A curated selection of recent restaurant and retail fit-outs.` in `--t-body-l`, slate colour, max-width 8 columns.

Spacing below: `--space-xl`.

### Section 2.2 — Optional filter row

Horizontal text row of category filters: `ALL` / `RESTAURANT` / `RETAIL` / `HOSPITALITY GROUP`. Type style: `--t-body-s`, weight 500, uppercase, letter-spaced. Active filter shown with `var(--accent)` colour. Filters use anchor links or simple JS to scroll/hide projects.

**If this adds complexity to the MVP, skip it.** Default to "ALL" view.

### Section 2.3 — Project entries

Each project gets its own full-width section. Vertical layout. Project sections separated by a thin `--bone` divider line.

**Per project layout:**

**Hero row** (above the fold for that section):
- Project hero image, full-bleed, 70vh tall.

**Meta row** (immediately below hero):
- Three columns of metadata.
  - **CLIENT:** Wagamama's
  - **LOCATION:** Hull, UK
  - **YEAR:** 2024
- Type: eyebrow style labels (uppercase, slate, letter-spaced) above each value. Values in `--t-body-m`, ink colour.

**Description row:**
- Single text block, columns 2-8.
- Project name in `--t-display-m` at the top.
- Two to four paragraphs of description in `--t-body-m`. What was the brief, what was the challenge, what did JBE deliver. Written like an article, not a brochure.

**Image stack row:**
- 3-5 supporting images, stacked vertically.
- Each image full-width within the grid (columns 2-11).
- Optional caption below each in `--t-caption`, slate colour.
- Generous space between images (`--space-l`).

**End of project:**
- A simple horizontal `--bone` divider before the next project starts.

### Section 2.4 — End of projects

After the final project, a simple section:

- Eyebrow: `MORE`
- Text: `Selected projects shown. The full portfolio is available on request.` in `--t-body-l`
- Secondary button: `GET IN TOUCH` linking to `/contact`

---

## Page 3: Contact (`/contact`)

Simple, generous, useful. No contact form on launch — Jason mentioned enquiries come via phone, email, or referral, so don't add friction.

### Section 3.1 — Page header

`var(--paper)` background.

- Eyebrow: `CONTACT`
- Headline: `Let's talk.` in `--t-display-l`
- Sub-line: `For new project enquiries, questions, or to discuss a brief — get in touch directly.` in `--t-body-l`, max-width 7 columns.

### Section 3.2 — Contact details

Two-column layout.

**Left column** (columns 2-6) — direct contact:
- Label `DIRECT` (eyebrow style)
- Below: `Jason Beedle` in `--t-body-l`, ink. `Managing Director` in `--t-body-s`, slate, below.
- Below that: phone number as a large clickable link (`tel:`) in `--t-display-m`, weight 300.
- Below that: email address as a clickable link (`mailto:`) in `--t-body-l`.

**Right column** (columns 7-11) — studio location:
- Label `STUDIO` (eyebrow style)
- Address in `--t-body-l`:
  ```
  JBE Interiors Ltd
  305 Churchway
  Doncaster
  DN12TB
  ```
- Below: small Google Maps embed (greyscale styled, no markers except a single ink-coloured pin). 320px tall, full column width.

### Section 3.3 — Hours / availability (optional)

Single text line: `Available Mon–Fri, 8:30am–6pm. Site visits by appointment.` in `--t-body-m`.

### Section 3.4 — Social

Final block before footer.

- Label `FOLLOW` (eyebrow style)
- Instagram and LinkedIn links as text + icon: `Instagram @jbeinteriors →` etc.

---

## Project content template

For each featured project, you'll need this from Jason:

```yaml
slug: nandos-hull
category: restaurant
name: Nando's, Hull
client: Nando's
location: Hull, UK
year: 2024
scope: Full fit-out, 6-week programme
hero_image: /images/projects/nandos-hull/hero.jpg
description: |
  Two to four paragraphs of project description.
  What was the brief? What was unique about this site?
  What did JBE deliver?
  Avoid marketing language. Write like you're describing the project to another contractor.
gallery:
  - image: /images/projects/nandos-hull/01.jpg
    caption: Optional caption
  - image: /images/projects/nandos-hull/02.jpg
    caption: Optional caption
  - image: /images/projects/nandos-hull/03.jpg
```

Set up a simple Markdown or JSON-based content store so adding a new project is as easy as duplicating a file.

---

## Tech stack recommendations

This is your call as the developer, but a sensible setup for this site:

- **Framework:** Next.js (App Router) or Astro. Astro is genuinely a great fit here — content-heavy, low interactivity, fast.
- **Styling:** Tailwind CSS or vanilla CSS with CSS variables. If using Tailwind, configure the design tokens from the design system doc as theme extensions.
- **Content:** Markdown files in a `/content/projects/` directory. Frontmatter for metadata. Avoid a CMS for v1 — it's overkill for 10-15 projects.
- **Images:** Hosted on Vercel/Netlify or a service like Cloudinary for optimisation.
- **Instagram feed:** Behold.so is the simplest paid option. Or self-host using Instagram Basic Display API (more setup, no ongoing cost).
- **Hosting:** Vercel or Netlify. Free tier handles this scale comfortably.
- **Domain:** Keep jbeinteriors.com.

---

## Build order (suggested)

Don't try to build the whole thing at once. Work in this order:

1. **Set up the project** — Next.js/Astro, design tokens, font loading, base layout.
2. **Build the header and footer** — global components, get them right first.
3. **Build a single project entry** — design and code one complete project section before doing the rest.
4. **Replicate to all projects** on the Projects page.
5. **Build the Landing page** — uses components from the Projects page, plus the hero and capabilities sections.
6. **Build the Contact page** — simplest, comes last.
7. **Wire up the Instagram feed.**
8. **Mobile QA and responsive fixes.**
9. **Accessibility pass.**
10. **Performance pass** (image sizing, lazy loading, font subsetting).

Plan for the first project section to take 30-40% of total dev time. Once you've nailed one, the rest are repetition.

---

## What to confirm with Jason before starting

- Which 10-15 projects to feature (full list with priority order)
- Source files: high-resolution images for each project, organised by project
- A short paragraph from him about each project (you'll rewrite, but you need source material)
- Confirmed phone, email, address
- Instagram handle (likely @jbeinteriors)
- Whether he wants client logos shown, and whether he has permission
- Domain access — is the domain registered with him? Where's it hosted now?
