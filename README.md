# JBE Interiors — Build Files

Specification documents for the JBE Interiors website build. Use these as the source of truth for Claude Code / Cursor / VS Code as you build out the site.

## How to use these files

Read in this order:

1. **`01-PROJECT-BRIEF.md`** — Start here. The why behind the project.
2. **`02-DESIGN-SYSTEM.md`** — The visual rules. Reference whenever making a design call.
3. **`03-BUILD-SPEC.md`** — The page-by-page layout. Reference when writing code.

## Working with Claude Code

When prompting Claude Code, paste in the relevant section of the spec rather than the whole file. Examples:

**For initial setup:**
> "Set up an Astro project for a portfolio site. Use the design tokens from [paste 02-DESIGN-SYSTEM.md, Colour and Typography sections]. Set up a basic layout with the global header and footer described in [paste 03-BUILD-SPEC.md, Global elements section]."

**For a specific page:**
> "Build the Landing page hero section per [paste 03-BUILD-SPEC.md, Section 1.1]. Use the design system tokens already defined. Don't add any motion or animations."

**For a component:**
> "Build a project card component matching the featured project card layout in [paste 03-BUILD-SPEC.md, Section 1.2]. Make it accept props for image, name, client, location, description, year, and category."

## Things to confirm with Jason before building

Listed at the bottom of `03-BUILD-SPEC.md`. Don't start building project pages until you have at least 3 projects' worth of high-resolution imagery and source descriptions.

## When in doubt

Default to: less, not more. The point of this site is to let the work speak. Every visual or interactive element should justify why it's there.
