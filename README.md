# Career e-Portfolio — Anika Diaz de Rivera

**Two designs are live at once so the client can choose.**

| | Style | URL |
| --- | --- | --- |
| **Version A** | Editorial — warm paper, Fraunces serif, oxblood accent, magazine grid | https://vmgax.github.io/career-portfolio/ |
| **Version B** | Institutional — off-white, Newsreader + Manrope, forest green, spacious | https://vmgax.github.io/career-portfolio/v2/ |

Each footer links to the other version. Once one is chosen, promote it to the root,
delete the other folder, and remove those two links plus the `noindex` tags on v2.

Static HTML/CSS/JS. No build step, no npm, no framework — edit, save, refresh.

```
index.html      Home        self-introduction · contents index          ← Version A
about.html      About Me    education · positions · résumé · skills
portfolio.html  Portfolio   academic work · organization work · references
contact.html    Contact     email · LinkedIn · location
styles.css      Version A styling
main.js         Version A behaviour

v2/index.html      Overview       hero · snapshot · impact · featured work · timeline · capabilities   ← Version B
v2/about.html      Experience     intro · education · experience · awards · skills · direction
v2/portfolio.html  Selected Work  category filters · 10 expandable case studies
v2/contact.html    Contact        split layout · validated message form
v2/styles.css      Version B styling
v2/main.js         Version B behaviour

assets/img/     Photos — SHARED by both versions
assets/docs/    resume.pdf — SHARED by both versions
```

> **Sync rule.** Content lives in two places until one version is retired. Any change to
> wording, dates or projects must be made in **both** the root files and `v2/`. Images and
> the résumé PDF are shared, so those only ever change once.

## Still to add

| # | What | Where |
| --- | --- | --- |
| 1 | **Dates you were Project Head of ENGLIVision** — currently reads "Date to confirm" | `about.html` ENGLICOM block |
| 2 | *Optional* — name of the "Event Operations" event | `portfolio.html` B/03 |
| 3 | *Optional* — public Canva **view** link for the full thesis | `portfolio.html` A/01 |

Item 1 is the only placeholder text still visible on the live site.

Everything else is in: portrait, thesis poster, nine event photos with captions,
the full CV detail, and the résumé PDF. Three `CHECK` comments mark dates that
conflict between your two source documents — search for `CHECK` to see them.

Search all files for `REPLACE` — that is the complete checklist. Anything marked
`CHECK` is something in the source document that looked wrong and was left as written.

## How to edit

Every editable string is marked in the HTML:

```html
<!-- REPLACE: your thesis title -->
```

### Swapping an image

1. Drop the file in `assets/img/` (JPG or PNG; ~1600 × 1200 px is plenty).
2. Change **both** attributes on that item:
   - `<img src="assets/img/your-file.jpg" alt="...">`
   - the button's `data-lightbox-src="assets/img/your-file.jpg"`

The second one is what opens when the image is clicked.

### Adding or removing a work sample

Each sample is one `<figure class="gallery-item">` block. Copy a whole block to add one,
delete a whole block to remove one. The magazine layout re-flows automatically.

### The navigation menu

There is no build step, so the header and footer are **copied into all four pages**. If
you change a nav link, change it in all four files.

## Running it locally

Double-click `index.html`, or serve it properly:

```bash
py -m http.server 8000    # then open http://localhost:8000
```

## Publishing an update

```bash
git add -A
git commit -m "what changed"
git push
```

Live again in under a minute at the same URL. GitHub Pages is set to deploy from `main`
/ root; `.nojekyll` must stay in the repo.

**One rule that matters:** all paths are *relative* (`styles.css`, `assets/img/x.jpg`).
Never change them to start with `/` — a leading slash breaks GitHub Pages project sites,
and the styling disappears on the live URL while still looking fine locally.

## Privacy choices made here

- The personal Gmail address and mobile number from the source document were **left off**
  this public page. Only the DLSU address is published.
- Reference contact details are shown as "available on request" rather than published.
- The Canva thesis link in the source document was an `/edit` URL — a private editing
  link. It is **not** in this repo. Use a public *view* link instead.

## Notes

- Type: Fraunces (display) · Archivo (body) · IBM Plex Mono (labels), from Google Fonts.
- Animations respect `prefers-reduced-motion`.
- Pages carry a print stylesheet — Ctrl/Cmd + P gives a clean copy with nav and buttons
  stripped out.
