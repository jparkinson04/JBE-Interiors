# Claude Code prompt — add 4 client projects to the JBE Interiors website

## Context
This is the JBE Interiors website, an Astro project. It has a Projects page that
displays completed case-study projects. I want to add 4 real client projects,
supplied by the client (Jason Beedle, MD of JBE Interiors).

## Before you change anything
1. Explore the repo and work out how projects are currently handled: are they an
   Astro content collection (e.g. `src/content/projects/*.md` or `.mdx`), a data
   array/JSON, or hardcoded into a page? Find the existing schema/fields, the
   project card component on the listing page, and any individual project detail
   page/template.
2. Match the existing pattern exactly. Do NOT introduce a new styling approach,
   component library, or data format. Follow the site's current design, components,
   spacing and conventions so these new projects look identical in style to what's
   already there.
3. If the structure is ambiguous, tell me what you found and your proposed approach
   before making large changes.

## Task
- Add the 4 projects below using the same data structure and fields as the existing
  projects.
- Each project has: title, location, project type, principal contractor (where
  given), completion date (only where given), a short summary for the listing card,
  and full body copy using the headings and bullet lists shown.
- Preserve the client's wording. You may fix obvious typos and use UK spelling, but
  do not rewrite or embellish the substance. No em dashes (use commas instead).
- Map each project's fields to whatever the existing schema uses. If the schema is
  missing a field I've supplied (e.g. "completion date" or "principal contractor"),
  either extend the schema cleanly to support it OR fold it into the body, whichever
  fits the current design best, and tell me which you chose.
- Completion date: only "Sunday in Brooklyn" has one (August 2024). Leave the date
  empty/omitted for the other three; don't invent dates.

## Images
- Follow wherever existing project images live (e.g. `src/assets/` or `public/`).
- "Sunday in Brooklyn" has professional client photography that I will supply — set
  this project up to display it well (a gallery/multiple images if the design
  supports it). I'll drop the files in; just create the correct folder/reference and
  leave a clear `TODO: add images` comment showing exactly where they go and what to
  name them.
- The other three projects don't have images yet. Use the existing placeholder
  pattern and leave a clear `TODO: add images` for each so I can add them later.

## Existing / old projects
- Do NOT delete any existing projects. If there are placeholder, demo or older
  projects on the page, comment them out (don't remove them) so they can be restored
  easily. I'm still confirming with the client which older projects should stay.

## When done
- Don't break the build. Run the dev server / build and confirm the Projects page
  renders with all 4 new projects, and that any detail pages work.
- Keep markup semantic and accessible (proper headings and lists).
- Show me a summary of what you changed and a diff (or commit with a clear message).

---

# PROJECT CONTENT

## 1. Sunday in Brooklyn
- **Title:** Sunday in Brooklyn
- **Location:** James Street, Central London (W1U 1EE)
- **Project Type:** Commercial Hospitality Fit Out
- **Completed:** August 2024
- **Images:** Professional client photography supplied — feature this project.
- **Card summary:** A premium two-floor restaurant fit out on a tight central London
  site off Oxford Street, delivered around strict noise and access restrictions.

**Body copy:**

**Project Overview**
Sunday in Brooklyn, James Street, W1U 1EE. A commercial hospitality fit out on
James Street in Central London.

**Key Challenges & Site Logistics**
The execution of this project presented significant logistical and operational
complexities, driven primarily by its high-profile central London location and
structural layout:

- **Logistical Constraints:** Situated on a narrow, one-way street leading directly
  onto Oxford Street, the site demanded meticulous delivery scheduling and waste
  management strategies to avoid traffic disruption.
- **Structural Scope:** The project spanned two floors, requiring seamless
  coordination to manage structural transitions and service installations across
  multiple levels.
- **Strict Operational Restrictions:** To safeguard the operations of neighbouring
  commercial units and the corporate offices directly above, the landlord imposed
  rigid restrictions on noisy works. Navigating these limited timeframes required
  precise scheduling and high efficiency from the site team to maintain the project
  timeline.

**Outcomes and Collaboration**
Despite these stringent constraints, the project was highly rewarding. The client and
their design team maintained a precise, uncompromising vision for the restaurant's
aesthetic and atmosphere. Through close collaboration and rigorous project
management, this vision was successfully realised, resulting in a premium,
atmospheric dining space in the heart of London.

---

## 2. Black Tap, Piccadilly
- **Title:** Black Tap, Piccadilly
- **Location:** Glasshouse Street, London, W1B 5DQ
- **Project Type:** Commercial Hospitality Fit Out
- **Principal Contractor:** JBE Interiors
- **Card summary:** One of the most complex structural builds in the JBE portfolio,
  across ground floor and basement in Piccadilly, including a bespoke central
  staircase formed through the existing concrete slab.

**Body copy:**

**Key Challenges & Structural Complexity**
This project represents one of the most complex structural and logistical builds in
our portfolio, executed across two levels (ground floor and basement) in the heart of
Piccadilly:

- **Structural Modifications:** Initially, the basement was only accessible via the
  landlord's service route. To establish the vital internal connection required for
  the restaurant's operations, major structural alterations were executed. This
  involved the strategic removal of a section of the ground floor concrete slab to
  install a bespoke, central staircase.
- **Logistical Constraints:** Operating in a high-traffic central London location
  presented severe logistical challenges. The site required a strict, highly
  coordinated booking system for all deliveries. Materials had to be received within a
  communal basement facility, transitioned to a goods lift, and carefully transported
  to the designated floors.

**Outcomes and Achievements**
Despite the extensive technical difficulties and demanding central London logistics,
the project was executed to an exceptional standard. JBE Interiors is incredibly proud
to have delivered this remarkable transformation, successfully turning a highly
challenging brief into an outstanding, premium hospitality venue for Black Tap.

---

## 3. Wagamama, Preston
- **Title:** Wagamama, Preston
- **Location:** Preston, PR1 2BL
- **Project Type:** Commercial Hospitality Fit Out
- **Principal Contractor:** JBE Interiors
- **Card summary:** A frontrunner rollout of Wagamama's new "Tanjun" design concept,
  delivered through close collaboration and rigorous sample approvals to meet elevated
  brand standards.

**Body copy:**

**Project Overview**
This project showcases Wagamama's striking new "Tanjun" design concept, which
celebrates a refined, minimalist aesthetic.

Because this location was one of the frontrunners for the new design rollout, our team
worked hand-in-hand with the client's design team to bring the vision to life. A
significant portion of the pre-construction and fit-out phases was dedicated to
rigorous sample approvals, ensuring that every new material, texture, and finish
perfectly aligned with the elevated brand standards.

The result is a stunning, high-quality contemporary dining space delivered to the
highest standards.

---

## 4. Nando's, Glasgow
- **Title:** Nando's, Glasgow
- **Location:** Waterloo Street, Glasgow
- **Project Type:** Commercial Hospitality Fit Out
- **Principal Contractor:** JBE Interiors
- **Card summary:** A detail-led fit out on a tight Glasgow site, defined by a
  continuous curved integration that demanded precise coordination with the architect
  and material suppliers.

**Body copy:**

**Project Overview**
While the site logistics posed an initial hurdle, the true craft was in the details,
specifically the continuous curved integration. Translating this from render to
reality required intense, hyper-coordinated alignment with the architect and material
suppliers, ensuring every edge, texture, and joint matched flawlessly.
