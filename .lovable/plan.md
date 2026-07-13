# Brutalist Pop Redesign

Swap the navy/gold "AI-sloppy" aesthetic for a bold neo-brutalist maximalist direction. All copy, SEO metadata, section structure, and component behavior stay intact — this is a pure visual overhaul.

## Design commitments

- **Palette**: paper white `#ffffff`, ink black `#0a0a0a`, orange `#ff5722`, electric yellow `#ffeb3b`. High contrast, no gradients-on-white filler.
- **Typography**: Archivo Black for all headings (heavy, tight tracking, occasional oversized display); Hind for body.
- **Layout**: broken-grid — overlapping panels, off-axis rotations, hard black borders (2–4px), chunky offset drop-shadows (e.g. `8px 8px 0 #0a0a0a`), sticker-style badges, ticker/marquee accents.
- **Motion**: keep framer-motion `Reveal`, remove soft blur-in for snappier translate+rotate entries. No mouse trail (already removed).
- **Guardrails**: no purple/indigo gradients, no aurora blobs, no glassmorphism, no soft shadows. Content, section order, and SEO/JSON-LD untouched.

## Token changes (`src/index.css`)

Rewrite `:root` semantic tokens:

```text
--background: 0 0% 100%       (paper white)
--foreground: 0 0% 4%         (ink)
--primary:    14 100% 57%     (orange #ff5722)
--accent:     54 100% 61%     (yellow #ffeb3b)
--border:     0 0% 4%         (ink borders)
```

Remove/repurpose `--navy*`, `--gold*`, `--gradient-*`, `--shadow-*` component utilities. Add brutalist utilities:
- `.brutal-border` → `border: 3px solid hsl(var(--foreground))`
- `.brutal-shadow` → `box-shadow: 8px 8px 0 hsl(var(--foreground))`
- `.brutal-shadow-accent` → yellow/orange offset shadow variant
- `.marquee` keyframes for a ticker strip

Swap Google Fonts import to `Archivo+Black` + `Hind:wght@300;400;500;600;700`. Update `h1..h6` and `body` font-family.

## Component updates (visual-only, copy preserved)

1. **HeroSection** — replace aurora blobs + dotted pattern with:
   - Off-white background, thick black grid lines
   - Oversized Archivo Black headline (clip-path or rotated accent block behind "Operations, Marketing & Digital Teams")
   - Availability badge → yellow sticker with black border, slight rotation
   - Primary CTA: solid orange, black border, offset black shadow; secondary CTA: white, black border, hover shifts shadow
2. **ExperienceSection** — stat cards become chunky bordered blocks with offset shadows, alternating orange/yellow accent fills, mild rotation on hover.
3. **ServicesSection** — broken-grid cards: varied widths, some rotated ±1–2°, black borders, colored icon chips, hover translates card into its own shadow.
4. **SkillsSection** — skill tags become brutalist chips (black border, colored fill, no pill blur).
5. **DeveloperSection / LinksSection / ContactSection** — apply the same border/shadow/color language; keep all copy and links.
6. **Footer** — replace navy-dark + aurora with solid black bar, yellow hover state on socials.
7. **Index.tsx** — remove the fuchsia/sky/emerald aurora background divs; keep `Reveal` wrappers.

## Preserved

- All text, headings, Spanish taglines, links, emails
- `index.html` SEO (title, description, canonical, OG, Twitter, JSON-LD)
- `robots.txt`, `sitemap.xml`, `llms.txt`
- `NotFound.tsx` Helmet block
- Section order and component boundaries

## Out of scope

- No new sections, no new copy, no logic changes, no dependency additions.
