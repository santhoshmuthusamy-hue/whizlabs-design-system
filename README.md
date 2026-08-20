# Whizlabs Design System

Four self-contained HTML files. No build step, no dependencies, no server — open any of them by double-clicking, or drop the folder on a static host.

| File | What it is |
| --- | --- |
| `index.html` | Single-page overview: logo variants, click-to-copy colour tokens, type scale, space and elevation, and all 50 components as live interactive examples. Start here |
| `docs.html` | The same content as a documentation site — tree sidebar, one page per topic, deep-linkable (`docs.html#c-forms`). Better for looking something up |
| `marketing.html` | Marketing site kit — home, catalog, course detail, pricing. Click through it |
| `learner-app.html` | Learner app kit — dashboard, test library, exam player, results |

The four cross-link, so keep them together.

## Publishing on GitHub Pages

1. Push this folder to a repository.
2. Settings → Pages → deploy from branch, root.
3. The site is live at `https://<user>.github.io/<repo>/`.

## Notes

React and Lucide load from CDN, so the first open needs internet. Everything else — fonts, logo artwork, all component code — is embedded.

The deck ships separately as PPTX and PDF.

Version 1 · August 2026
