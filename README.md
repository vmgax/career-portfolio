# Career e-Portfolio — Anika Diaz de Rivera

Live at **https://vmgax.github.io/career-portfolio/**

A four-page static website. No build step, no npm, no framework — open the files in a
text editor, save, refresh the browser.

```
index.html      Home        self-introduction · contents index
about.html      About Me    LinkedIn · education · positions & experiences · résumé · skills
portfolio.html  Portfolio   academic work samples · internship work · references
contact.html    Contact     email · LinkedIn · location
styles.css      All styling
main.js         Mobile nav · scroll reveals · image lightbox
assets/img/     Photos and scans
assets/docs/    PDFs (resume.pdf)
```

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
