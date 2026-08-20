# Whizlabs marketing site — UI kit

A click-through recreation of the public Whizlabs site. Open `index.html`.

**Screens** (all in one SPA, navigate via the header)

- **Home** — hero with a live-looking practice question, proof band, most-enrolled catalog row, pricing.
- **Catalog** — breadcrumb, vendor facet chips, product-type tabs with counts, 3-up course grid, pagination.
- **Course detail** — ink-950 header with the enrolment card overlapping into it, Overview / Curriculum / Reviews tabs, exam-at-a-glance sidebar.
- **Pricing** — three plans, the middle one accented with the brand gradient rule.

**Files**

| File | Role |
| --- | --- |
| `SiteHeader.jsx` | Sticky translucent header, nav, search, sign-in, CTA |
| `Hero.jsx` | Headline, dual CTA, social proof, sample-question panel |
| `ProofBand.jsx` | Four `StatTile`s |
| `CatalogGrid.jsx` | Course data (`WL_COURSES`) + 3-up `CourseCard` grid |
| `PricingSection.jsx` | Three plan cards |
| `SiteFooter.jsx` | Ink-950 footer with the gradient top rule |

Design width 1280. Everything composes the shared components from `components/` — nothing is re-implemented here.

**Caveat:** no live site, screenshots or codebase were supplied. This is a reasoned reconstruction from the brand mark and the product category, not a pixel recreation.
