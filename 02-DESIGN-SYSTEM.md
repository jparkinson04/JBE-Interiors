# JBE Interiors — Design System

> The rules. Reference this when making any visual decision. Consistency here is what makes the site feel considered rather than thrown together.

---

## Aesthetic principle

**Editorial photography-led minimalism.**

The photography of finished interiors is the loudest element on every page. Typography, colour, and layout exist to frame the work — never to compete with it.

Three rules that override everything else:

1. **When in doubt, give it more space.** Whitespace is doing work, not wasting room.
2. **Use one font well, not three fonts cleverly.** A single distinctive sans-serif used across all weights beats a serif/sans/display combination.
3. **Let the photography decide the colour palette of any given page.** The chrome (text, lines, buttons) stays neutral so the interiors can breathe.

---

## Colour palette

A monochrome system. Interior photography is naturally warm and varied — the site's chrome should not add to that noise.

```css
:root {
  /* Foundational */
  --ink: #111111;           /* primary text, primary backgrounds */
  --paper: #f7f5f0;         /* primary surface — warm off-white, not pure white */
  --stone: #e8e4db;         /* secondary surface, dividers, hover states */
  --slate: #6b6862;         /* secondary text, captions, muted UI */
  --bone: #d4cfc2;          /* tertiary borders, very subtle dividers */

  /* Functional only — use sparingly */
  --accent: #b85c3a;        /* terracotta. Used ONLY for: active nav state, link hover, single CTA emphasis. Never decorative. */
}
```

**Rules for colour:**

- The site is **paper-on-paper** by default. Black ink on warm off-white.
- **Dark mode sections** are allowed — but only for the hero on the landing page and the contact page footer. Not for content sections.
- **No gradients.** Ever. Flat colour or photography.
- **No drop shadows on UI elements.** Only on photography (subtle, large radius, low opacity) where it helps the image lift off the page.
- **The accent terracotta is a precision tool.** If you find yourself using it more than 3 times on a page, you're overdoing it.

---

## Typography

**One typeface system: Söhne** (or close fallback). It's a contemporary sans-serif with editorial weight — sits between Helvetica and Inter in feel. Distinctive enough to be the only font on the site.

```css
font-family: 'Söhne', 'Inter', 'Helvetica Neue', sans-serif;
```

**Fallback if Söhne isn't available:** Use **Geist** or **Neue Haas Grotesk**. Avoid Inter — it's too associated with generic tech aesthetics for this brief.

**Type scale:**

```css
:root {
  /* Display — for hero text and section openers only */
  --t-display-xl: clamp(56px, 9vw, 128px);   /* Hero only */
  --t-display-l:  clamp(40px, 6vw, 88px);    /* Section openers */
  --t-display-m:  clamp(32px, 4.5vw, 64px);  /* Project titles */

  /* Body */
  --t-body-l:     20px;    /* Lead paragraphs, project descriptions */
  --t-body-m:     17px;    /* Standard body */
  --t-body-s:     15px;    /* Captions, metadata */

  /* Micro */
  --t-eyebrow:    11px;    /* Eyebrow labels — letter-spaced, uppercase */
  --t-caption:    13px;    /* Image captions */
}
```

**Weight usage:**

- **300 (Light)** — display headlines only. Gives editorial elegance to large type.
- **400 (Regular)** — all body copy.
- **500 (Medium)** — buttons, navigation, eyebrow labels.
- **600+ Bold** — avoid. If something needs emphasis, change its size or use the accent colour. Bold reads as agency, not editorial.

**Letter-spacing:**

- Display type: `-0.02em` (slight negative tracking)
- Body: default (0)
- Eyebrow labels (uppercase micro text): `+0.18em`

**Line height:**

- Display: 1.05
- Body: 1.55
- Captions: 1.45

---

## Layout grid

**12-column grid** with generous gutters. The grid is asymmetric — content rarely fills all 12 columns. Most text content sits in columns 2-8 or 3-9, leaving deliberate breathing room.

```css
:root {
  --grid-max: 1440px;
  --grid-gutter: 32px;       /* Desktop */
  --grid-margin: 80px;       /* Desktop side margins */

  /* Tablet */
  @media (max-width: 1024px) {
    --grid-gutter: 24px;
    --grid-margin: 48px;
  }

  /* Mobile */
  @media (max-width: 640px) {
    --grid-gutter: 16px;
    --grid-margin: 24px;
  }
}
```

**Vertical rhythm:**

```css
--space-xs: 8px;
--space-s:  16px;
--space-m:  32px;
--space-l:  64px;
--space-xl: 120px;        /* Between major sections */
--space-2xl: 200px;       /* Around hero, between landing chapters */
```

---

## Photography rules

This is the most important section. The photos make or break this site.

**On selection:**

- **One hero image per project.** Choose the widest, most architectural shot — the one that shows the room as a whole.
- **Three to six supporting images per project.** Mix of wide, detail, and human-scale.
- **No carousel galleries.** Stack images vertically. Let the visitor scroll through them.
- **Reject any image that's:** poorly lit, low resolution (under 2000px wide), heavily edited with HDR/over-saturation, or includes branding/logos that aren't the client's.

**On presentation:**

- **Full-bleed** for hero images (edge to edge of viewport).
- **Constrained width** for supporting images (sits within the 12-column grid).
- **Captions optional.** When used, sit below the image, type size `--t-caption`, colour `--slate`. Format: "Detail shot, ground floor. Photography by [credit]."
- **No image cropping in CSS.** Crop in source. The visitor should see what was intended.
- **No filters, overlays, or photo treatments.** Show the work as it is.

---

## Components

### Buttons

Two variants only.

**Primary (filled):**
```
background: var(--ink)
color: var(--paper)
padding: 18px 28px
border-radius: 0 (sharp corners)
font: --t-body-s, weight 500, letter-spacing 0.04em, uppercase
hover: background → var(--accent)
```

**Secondary (outlined):**
```
background: transparent
color: var(--ink)
border: 1px solid var(--ink)
padding: 18px 28px
border-radius: 0
font: same as primary
hover: background → var(--ink), color → var(--paper)
```

**No third button style.** No ghost buttons, no text-only links styled as buttons. If a CTA doesn't deserve one of these two treatments, it's not a CTA.

### Navigation

**Desktop:** Top-fixed horizontal nav. Logo left, menu items right. Background `var(--paper)` with a 1px bottom border `var(--bone)`. Items in `--t-body-s`, weight 500, uppercase, letter-spaced.

**Mobile:** Logo left, hamburger right. Full-screen overlay menu in `var(--ink)` background with `var(--paper)` text. Menu items in `--t-display-m` size — large, generous, easy to tap.

### Eyebrow labels

Small uppercase labels that sit above section headlines. Used to orient the visitor.

```
text-transform: uppercase
letter-spacing: 0.18em
font-size: var(--t-eyebrow)
color: var(--slate)
margin-bottom: 16px
```

Example: `01 / SELECTED WORK` above the projects section.

### Project cards

The single most important component. See `03-BUILD-SPEC.md` for the layout.

### Instagram feed

Four-tile horizontal row. Each tile is a square aspect ratio, full Instagram image, no crop, no caption visible on the card. Hover state: subtle dim (90% opacity) + small "View on Instagram" label appears top-right. Click opens the post in a new tab.

---

## Motion

**Use restraint.** This is an editorial site, not a portfolio of motion design.

Permitted motion:
- **Page entry fade-in** (200ms, ease-out). Subtle.
- **Image lazy-load fade-in** as they enter viewport (300ms).
- **Hover transitions** on buttons and links (150ms ease).

Banned motion:
- Scroll-jacking.
- Parallax.
- Type animations / character-by-character reveals.
- Mouse-follow effects.
- Animated SVG illustrations.
- Any auto-playing video.

If the site feels too quiet without motion, the design isn't working — motion shouldn't be there to rescue it.

---

## Logo handling

The JBE Interiors cursive wordmark is the brand identifier. Until you have a clean vector version, use the existing wordmark from the current site.

**Sizing:**
- Header (desktop): 32px tall
- Header (mobile): 28px tall
- Footer: 48px tall
- Hero (landing page only, optional): up to 80px tall

**Colour:**
- On `--paper` backgrounds: `--ink` (or the original dark-on-light version)
- On `--ink` backgrounds: `--paper` (white/cream version)

**Lockup:**
The current site shows three sub-brand lockups (Interiors / Group / Developments) side by side. For this site, use **JBE Interiors only**. The Group/Developments lockup is for the Group-level site, which is out of scope.

---

## Accessibility minimums

Not optional. Don't ship without these.

- **Colour contrast:** Body text on `--paper` background hits AAA. Captions in `--slate` hit AA. Test with WebAIM.
- **Focus states:** Every interactive element has a visible focus ring (2px solid `--accent`, 4px offset).
- **Alt text:** Every photo gets descriptive alt text written for someone who can't see it. "Bar interior, Zelmans St Pauls. Dark green tiled bar with brass details and pendant lighting." Not "image1.jpg".
- **Heading hierarchy:** One H1 per page. Don't skip levels.
- **Reduced motion:** Wrap all motion in `@media (prefers-reduced-motion: no-preference)`.

---

## What "done" looks like for the design system

A new developer should be able to read this document and build a new page that looks like it belongs on the site, without asking any questions. If you find yourself having to make a design decision that isn't covered here, write the answer back into this document.
