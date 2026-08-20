# Whizlabs Design System

A design system for **Whizlabs**, an ed-tech platform for IT certification training — practice tests, video courses, hands-on cloud labs and learning paths for cloud, DevOps and data engineering exams (AWS, Azure, Google Cloud, Kubernetes, Terraform and similar).

## Sources given

- `uploads/while_logo.svg` — **the official Whizlabs logo, vector.** A 215.44 × 42.62 SVG containing eleven paths: three for the mark (`Path_43`–`Path_45`) and eight for the WHIZLABS wordmark (`Path_46`–`Path_53`). The file ships with an empty `<defs>` and every path on a single undefined `cls-1` class, so it renders all-black as supplied; the three derived assets here add the gradient definition and split mark from wordmark.
- `uploads/lg-685e44df24436-Whizlabs.webp` — the same lockup as a 550×550 raster, supplied earlier. Superseded by the vector.
- `uploads/logo_whizlabs.png` — an earlier crop of the mark, supplied first. Superseded by the vector.
- Brief: "Create a design system based on the logo for Whizlabs, this is an ed-tech online platform." Confirmed in conversation: **the live site uses Poppins.**

**What is confirmed vs. proposed.** The logo, the gradient's three colour stops and the typeface come from you and are exact. No codebase, Figma file, screenshots, product copy or brand guide were provided, so the neutral ramp, spacing, radii, elevation, motion, component inventory and both UI kits are reasoned constructions from the brand's own materials plus the product category. Treat the second group as a first draft to correct, not as documentation of what exists today.

## Products modelled

| Surface | Directory | What it covers |
| --- | --- | --- |
| Marketing site | `ui_kits/marketing/` | Home, catalog, course detail, pricing |
| Learner app | `ui_kits/app/` | Dashboard, practice-test library, exam player, results |

---

## CONTENT FUNDAMENTALS

**Voice.** Direct, practical, slightly clipped. Whizlabs copy is written by people who have sat the exam, for people who are about to. Sentences state what the learner gets and what it costs them in time. No hype adjectives ("revolutionary", "world-class"), no exclamation marks.

**Person.** Address the learner as **you**. The company is **we** only when making a commitment ("We update every bundle within 30 days of a blueprint change"). Never "our users" in user-facing copy.

**Casing.** Sentence case everywhere — headings, buttons, nav, table headers. Title Case only for proper nouns: exam names, vendor names, plan names. Exam codes are always uppercase and set in mono: `SAA-C03`, `AZ-104`, `CKA`.

**Numbers.** Be specific and use real units. "780 questions", "130 minutes", "720 / 1000 to pass", "26 days until exam day". Round marketing totals to a readable form: "3M+ learners", "500+ exams". Never write "many" or "lots of".

**Headlines.** Short, verb-first, and about the outcome, not the product.

> Pass the exam the first time.
> Know the exam before exam day.
> Start with the exam you are sitting.

**Buttons.** Verb + object, two to four words. `Start free trial`, `Browse certifications`, `Resume attempt`, `Review 14 missed`, `Export report`. Never "Click here", "Submit", "Learn more" on a primary action.

**Empty and error states.** Say what happened and what to do next in one sentence. "Payment failed. Update your card to keep your Unlimited plan." Never blame the learner.

**Result copy.** Report the number first, then the read on it. "51 of 65 correct in 108 minutes. Security is your weakest domain — review the 9 missed questions there before your next attempt."

**Emoji.** Not used. Anywhere. Status is carried by colour, badges and Lucide glyphs. The only non-alphabetic characters in the UI are the star (★) in rating strings, the flag glyphs (⚑ ⚐) on the exam question header, and the slash separator in breadcrumbs.

**Length.** Body paragraphs cap at roughly 58 characters per line and three sentences. Card descriptions are one sentence. Micro-copy under a field is one clause.

---

## VISUAL FOUNDATIONS

**The logo drives everything.** The Whizlabs lockup is two parts. The **mark** is a stylised "W" built from two swept, ribbon-like strokes with a detached teardrop counter at the top right — the forms are fluid and forward-leaning rather than geometric, cut with flat diagonal terminals, and filled with a red → orange gradient that runs continuously across all three shapes on a bottom-left to top-right diagonal (deepest red at the far left, amber-orange at the teardrop). The **wordmark** is "WHIZLABS" in near-black (`ink-950`): all caps, light weight, wide open letterspacing (roughly `.16em`), geometric skeleton with a pointed `W` and a flat-topped `A`. So the brand's two signals are a warm continuous gradient and calm, airy, low-contrast type — the mark supplies the energy, the wordmark supplies the restraint.

**Colour.** The brand palette is the logo gradient, nothing invented. Its three stops are `#e8402b` (red), `#f0602a` (vermilion — the mid-point, and the default single-colour brand value, `orange-500`) and `#f78b20` (orange). `--brand-gradient` reproduces the ramp at 135° for rectangular surfaces; in the mark itself it runs bottom-left to top-right as one continuous span across all three shapes, which is why a shape is never recoloured on its own. `--brand-amber` (`#f9a825`) extends the warm end for thumbnail bands and rating stars. The orange and red ramps are built outward from the two gradient endpoints, so every tint and shade in the system traces back to the logo. Neutrals are a warm-neutral "ink" ramp — a trace of the brand’s warmth with no blue in it at all, so nothing on the page competes with the orange or fights the black wordmark. Support accents (teal, blue, green, yellow) exist only for status and data, never for brand expression. One brand hue per view: if the primary button is gradient, nothing else on the screen is.

**Where the gradient is allowed.** Primary buttons, 4px accent rules on the top edge of a card, course-card thumbnail bands, progress-bar fills, checked checkboxes/radios/switches, avatar initials, the footer's top rule, and **full-bleed cover moments** — a deck title slide or a campaign hero, where the gradient is the subject rather than a backdrop. **Never** behind body text, behind an interface, or on a large area sitting behind other content. On any gradient fill, the logo switches to the `mono` knockout. Flat `orange-500`/`orange-600` handles everything else. There are no bluish-purple gradients in this system.

**Type.** **Poppins is the Whizlabs typeface**, confirmed as the family in use on the live site. It carries both roles here — structure (headings, buttons, labels, nav, badges, stat values) and reading text — which keeps the system to one family plus a mono.

Poppins is geometric, wide and near-monolinear, which has three consequences the system encodes:

- **Weights stop at 700.** Poppins 800 is heavy and clumsy at headline sizes; `--type-display` and `--type-h1` are 700, `--type-h2`/`--type-h3` 600, labels 500. `--fw-extrabold` is kept as a token only for backwards compatibility and now resolves to 700.
- **Tracking stays light.** −.01em normally, −.02em at display sizes. Poppins' wide sidebearings mean the aggressive −.03em that suits a grotesque would close the counters here.
- **Lines breathe more.** Body is 16/1.7 and paragraphs cap around 58ch, not 68ch, because Poppins' large x-height and width put more ink on each line.

Poppins **Light (300)** exists in the loaded set but is reserved — it is the weight the logotype resembles, and using it in UI would blur the line between wordmark and interface. Uppercase eyebrows are 12px/600/`.1em` in orange-600.

**IBM Plex Mono** is the one other family: exam codes, countdown timers, question numbers, scores and CLI snippets. It is the "this is exam machinery" signal and should never leak into UI labels.

The wordmark is a logotype, not a type style — never re-typeset "WHIZLABS" in Poppins, and never imitate its wide-tracked light caps for headings. Body never goes below 14px; slide text never below 24px.

**Spacing.** 4px base. 16 or 24 inside cards, 32/48 between blocks within a section, 96 (`--section-y`) between page sections. Content max width 1200px, prose max width 760px, 24px gutter. Control heights are 32 / 40 / 48 / 56.

**Corner radii.** 4 (checkbox, question-navigator squares), 6 (chips, small buttons), 10 (buttons, inputs, inner blocks), 14 (cards — the workhorse), 20 (hero panels), 28 (rare, large feature panels), pill (badges, tags-as-status, search field, progress bars, avatars). The search field is the only text input that gets a pill.

**Cards.** One recipe: white surface, `1px solid ink-100` hairline, 14px radius, `shadow-sm`. Interactive cards lift −2px on hover with `shadow-lg` and darken the border to ink-200. The only permitted accent is a 4px brand-gradient rule across the **top** edge. **No coloured left borders.** No card sits on a card.

**Shadows.** Five neutral steps (`xs`→`xl`) all built on `rgba(26,25,23,…)` — the ink-950 value at low opacity, never pure black. Plus one brand glow, `0 8px 20px rgba(240,96,42,.28)` — orange-500 at 28% — used only under a hovered primary button. Inner shadows are not used; separation is done with the ink-100 hairline instead.

**Borders.** Hairlines are `ink-100` (dividers inside a component) and `ink-200` (control outlines). `ink-300` for a control that needs to read as tappable. Brand borders (`orange-300`/`orange-500`) mark selection, not decoration. 1px everywhere; 2px only on the active tab underline and radio rings.

**Backgrounds.** Mostly white with `ink-50` bands to separate sections. One warm tint — `--brand-gradient-soft`, a near-white orange/amber wash — for the hero and for in-app promotional panels. Dark sections use `ink-950`. There are no photographic backgrounds, no illustration systems, no repeating patterns or textures, and no noise/grain in this system, because none were supplied. Where the live product uses imagery, this system leaves a solid or gradient band and says so.

**Imagery.** None was provided, so none is prescribed. Course thumbnails are solid gradient bands with an uppercase kind label; if real vendor artwork is added later, keep the band height (116px) and the label position. If photography is introduced, the note to follow is: warm, natural light, real people at real desks, no stock-office gloss, no cyan-teal colour grade.

**Transparency and blur.** Two places only. The sticky site header is `rgba(255,255,255,.88)` with `saturate(150%) blur(14px)`. The kind label on a course thumbnail is `rgba(26,25,23,.32)` with the same blur so it stays legible over any band colour. Modal scrims are `rgba(26,25,23,.55)`, unblurred. Nothing else is translucent.

**Protection.** Text over the gradient thumbnail band is protected by a capsule (the blurred dark pill), not by a scrim gradient. Over `ink-950` sections no protection is needed.

**Motion.** Durations 80 / 140 / 200 / 320 / 520ms. One easing curve for interaction, `cubic-bezier(.2,.7,.3,1)`; `cubic-bezier(.16,1,.3,1)` for entrances and bar fills. No bounce, no spring, no parallax, no scroll-triggered reveals. Progress bars and score rings animate their fill over 320ms; everything else is 140ms. Motion confirms an action, it never decorates.

**Hover.** Cards lift −2px and deepen their shadow. Primary buttons flatten the gradient to solid `orange-600` and gain the brand glow. Secondary buttons darken their border one step. Ghost buttons and list rows fill with `ink-50`. Links go `orange-600` → `orange-700`. Opacity is never used to express hover.

**Press.** `transform: scale(.97)` with no colour change, 80ms. Consistent across every clickable control.

**Focus.** Two mechanisms, one look. Text fields paint a 3px `rgba(240,96,42,.28)` ring plus an `orange-500` border from React focus state. Everything else — buttons, tabs, chips, rows, nav items — is covered by one global `:focus-visible` rule in `tokens/focus.css` that draws a 3px `orange-500` outline at 2px offset. The split exists because components style via inline style objects, and an inline `box-shadow` always beats a stylesheet pseudo-state; `outline` is never set inline, so it is the one property that reliably reaches every control. On dark or brand surfaces add `class="wl-on-dark"` (or `wl-on-brand`) to the container and the outline flips to white. Never removed, never replaced by a browser default.

**Disabled.** `opacity: .45` and `cursor: not-allowed`, keeping the component's own colours. Never a grey repaint.

**Selection.** Selected rows, boxed radios and active sidebar items use `orange-50` fill + `orange-300`/`orange-400` border + `orange-700` text. This is the single selection idiom across the whole system.

**Layout rules.** The marketing header is sticky and translucent; the app sidebar and app top bar are sticky and opaque. The exam player's question navigator is sticky within the content column. Nothing else is fixed. Grids are 3-up for catalog cards, 4-up for stat tiles, and collapse to a single column below 900px.

---

## ICONOGRAPHY

**No Whizlabs icon set was provided** — the upload contained the logo only. The system therefore uses **[Lucide](https://lucide.dev) 0.462.0 from CDN** as a documented substitution: outline, 2px stroke, 24px grid, rounded caps. It is the closest widely available match to the even-weight, geometric style the mark and Poppins together imply. **This is a substitution — please send the real icon set (SVG sprite, font, or a Figma page) and it will be swapped in.**

Rules as implemented:

- Every UI glyph goes through the `Icon` component (`components/brand/Icon.jsx`), which renders a Lucide glyph and inherits `currentColor` inside buttons and links.
- Sizes: 16, 17, 18, 20, 22, 24. Stroke stays at 2 for UI; 1.75 is acceptable above 32px.
- Icons never appear alone as the only label for a destructive action; `IconButton` requires an accessible `label`.
- Glyph vocabulary in use: `play-circle`, `clipboard-check`, `flask-conical`, `layout-grid`, `bar-chart-3`, `award`, `trophy`, `badge-check`, `clock`, `calendar`, `flame`, `trending-up`, `bookmark`, `download`, `file-text`, `check`, `x-circle`, `flag`, `rotate-ccw`, `bell`, `search`, `users`, `star`, `chevron-left/right`, `arrow-right`, `infinity`, `smartphone`.
- **Emoji are never used as icons.** Two Unicode characters are permitted as typographic marks, not icons: `★` in rating strings and `⚑ / ⚐` on the exam question header. The `✓` inside a checked checkbox and `×` on dismiss controls are also typographic, not Lucide glyphs.
- No PNG icons. No hand-drawn SVGs were authored for this system.

### Assets

Derived from the supplied vector. All three are SVG — resolution-independent, safe at any size and in print:

| File | Aspect | Use |
| --- | --- | --- |
| `assets/logo-lockup.svg` | 7.34 : 1 | Default. Mark + `ink-950` WHIZLABS wordmark, light surfaces. |
| `assets/logo-lockup-inverse.svg` | 7.34 : 1 | Same lockup, white wordmark, for ink-950 and other dark surfaces. The mark keeps its gradient. |
| `assets/logo-mark.svg` | 1.84 : 1 | The gradient W alone — favicons, avatars, tight headers, slide corners. |
| `assets/logo-lockup-mono.svg` | 7.34 : 1 | All-white knockout. The only correct lockup on a brand-colour or gradient surface. |
| `assets/logo-mark-mono.svg` | 1.84 : 1 | All-white knockout mark, same rule. |

The gradient is a `userSpaceOnUse` `linearGradient` running diagonally across the mark's bounding box, bottom-left to top-right: `#e8402b` → `#f0602a` (52%) → `#f78b20`. It spans all three mark shapes as one continuous ramp, which is why the shapes must never be recoloured individually.

All three are inlined as data URIs inside `components/brand/Logo.jsx` so the component works from any directory depth. Use `<Logo/>`, `<Logo variant="inverse"/>`, `<Logo variant="mono"/>`, `<Logo variant="mark"/>` and `<Logo variant="mark-mono"/>` rather than referencing the files directly. `size` sets the **height**; width follows the artwork.

**Rules.** Clear space on all four sides equals the mark height. Minimum lockup height 16px — below that use the mark alone. Never recolour or flatten the gradient, outline the mark, add a shadow or glow, rotate or skew it, place the lockup on a busy background, or set "WHIZLABS" in a UI typeface. **On orange or the brand gradient, use `mono`** — the gradient mark sits at almost no contrast against orange, so `inverse` fails there. That is the one case where the mark drops its gradient.

- No illustrations, background images or product screenshots were supplied, so none are included.

---

## Intentional additions

The brief supplied no component inventory, so this is an authored standard set, sized to cover the same ground a general-purpose library like MUI covers while staying in this brand's idiom. Where a name matches a familiar library the behaviour is deliberately narrower — `Switch` is instant-apply only, `Tag` is a filter chip and `Badge` is read-only status, `Paper` is a layout surface while `Card` carries content semantics. Beyond the usual primitives, five ed-tech-specific components exist because the product category demands them and every screen needed them:

- **CourseCard** — the catalog unit for a course, practice test, lab or path.
- **QuestionCard** — the practice-test question surface (number, domain, prompt, boxed options, flag).
- **LessonRow** — one curriculum row with todo / current / done states.
- **ScoreRing** — pass-mark-aware circular score readout for results screens.
- **StatTile** — single-metric tile shared by the dashboard and the marketing proof band.

Three more exist because the platform has surfaces a course catalogue alone would not need: **TransferList** for assigning exams to a learning path on business surfaces, **Backdrop** for blocking interaction while an attempt is graded or a lab is provisioned, and **BottomNav** for the mobile learner shell.

---

## Index

**Root**

- `styles.css` — the single entry point consumers link. `@import` lines only.
- `thumbnail.html` — homepage tile for this design system.
- `SKILL.md` — Agent Skills wrapper so this folder works inside Claude Code.
- `readme.md` — this file.
- `assets/` — `logo-lockup.svg`, `logo-lockup-inverse.svg`, `logo-mark.svg`.

**Tokens** (`tokens/`) — `fonts.css` (Poppins + IBM Plex Mono, Google Fonts), `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`

**Guidelines** (`guidelines/`) — 19 specimen cards covering the brand gradient, the orange / red / ink ramps, status and semantic colours, the Poppins display and body settings, the mono, the type scale, eyebrows, spacing, radii, elevation, motion, logo lockups, gradient usage, card anatomy, and focus/disabled states.

**Components**

Forty-nine components in seven groups.

- `components/brand/` — **Logo**, **Icon**
- `components/core/` — **Button**, **IconButton**, **Badge**, **Tag**, **Card**, **Avatar**
- `components/forms/` — **Input**, **Select**, **Checkbox**, **Radio**, **Switch**, **SearchField**, **Slider**, **NumberField**, **Rating**, **ToggleButton**, **ButtonGroup**, **Fab**, **Autocomplete**, **TransferList**
- `components/data/` — **Divider**, **List**, **Table**, **Tooltip**
- `components/surfaces/` — **Paper**, **Accordion**, **AppBar**
- `components/feedback/` — **Alert**, **ProgressBar**, **ScoreRing**, **Skeleton**, **Dialog**, **Snackbar**, **Spinner**, **Backdrop**
- `components/navigation/` — **Tabs**, **Breadcrumb**, **Pagination**, **SidebarNav**, **Stepper**, **Menu**, **BottomNav**, **Link**
- `components/learning/` — **CourseCard**, **StatTile**, **LessonRow**, **QuestionCard**

Each directory carries `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `@dsCard` HTML preview showing every component in that group across its key states.

**UI kits**

- `ui_kits/marketing/` — `index.html` plus `SiteHeader`, `Hero`, `ProofBand`, `CatalogGrid`, `PricingSection`, `SiteFooter`
- `ui_kits/app/` — `index.html` plus `AppShell` (with `TopBar`), `Dashboard`, `ExamPlayer`, `ResultsView`

**Starting points** — Button, CourseCard, QuestionCard, the marketing home page, and the learner app dashboard.

---

## Known substitutions — please confirm or replace

1. **Mono.** Poppins is confirmed and loaded from Google Fonts — no substitution there. **IBM Plex Mono** for exam codes, timers, question numbers and scores is still my proposal; if the live site uses a different mono, or none at all, say so and `tokens/fonts.css` + `tokens/typography.css` are the only files that change.
2. **Icons.** Lucide, as described above.
3. **The neutral ramp.** `ink-*` is a warm neutral chosen to sit under the logo gradient without competing with it. It is my call, not a supplied value.
4. **Screen layouts.** The two UI kits are reasoned reconstructions of a certification-prep marketing site and learner app, not recreations of the live Whizlabs product. Send URLs, screenshots, a Figma file or the codebase and they can be corrected to match.
