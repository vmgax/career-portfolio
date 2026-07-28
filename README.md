# Career Portfolio — Anika Diaz de Rivera

Live at **https://vmgax.github.io/career-portfolio/**

A four-page static website. No build step, no npm, no framework — edit a file, save,
refresh the browser.

```
index.html      Overview       hero · snapshot · impact · featured work · experience · capabilities · direction · contact
about.html      Experience     intro · education · internship · leadership · awards · skills · career direction
portfolio.html  Selected Work  category filters · 10 expandable case studies
contact.html    Contact        split layout · validated message form
styles.css      All styling (design tokens at the top)
main.js         Nav · reveals · accordions · filters · lightbox · form validation
assets/img/     Portrait, 9 event photos, thesis poster, favicon
assets/docs/    resume.pdf (web-safe version — see the privacy note below)
```

## Design

- **Type** — Newsreader for headings, Manrope for everything else, both from Google Fonts.
- **Colour** — warm off-white `#F6F4EF`, charcoal `#18201D`, forest green `#174C3C`,
  muted sage and a restrained gold. All defined as CSS custom properties in `:root`;
  change a token there and it updates everywhere.
- **Motion** — fade-and-rise entrances, staggered card reveals, animated nav underline,
  smooth accordions. All 200–500ms, all disabled under `prefers-reduced-motion`.

## Still open

All dates are confirmed. Two optional additions remain, both marked `REPLACE` in HTML
comments — nothing is a visible placeholder, and the site reads as finished without them.

| # | What | Where |
| --- | --- | --- |
| 1 | *Optional* — the month ENGLIVision ran, and the name of the "Event Operations" event | `portfolio.html` |
| 2 | *Optional* — a public Canva **view** link for the full thesis (never the `/edit` URL) | `portfolio.html` |

## How to edit

### Text
Open the page, find the words, change them. Headings, dates and body copy are all plain HTML.

### Adding or removing a project
Each project on `portfolio.html` is one `<article class="case">`. Copy a whole block to add
one, delete a whole block to remove one. Two things to keep in step:

- `data-category` must be one of `academic`, `civic`, `events`, `hr`, `comms`, `internship`
  so the filters pick it up.
- The count in `<p class="filter-status">` is the starting label — update it if the number
  of projects changes.

### Swapping an image
Drop the file in `assets/img/`, then set **both**:
- `<img src="assets/img/your-file.jpg" alt="...">`
- the wrapping `<button class="case__media" data-lightbox-src="assets/img/your-file.jpg">`

The second is what opens full-size. Keep `width` and `height` accurate — they reserve space
and stop the page jumping while images load. Update the `alt` text too; it is what a screen
reader announces.

### Navigation, header and footer
There is no build step, so the header and footer are **copied into all four pages**. Change
a nav link and you change it in four files.

## Running it locally

```bash
py -m http.server 8000    # then open http://localhost:8000
```

## Publishing an update

```bash
git add -A
git commit -m "what changed"
git push
```

Live again in under a minute at the same URL. GitHub Pages deploys from `main` / root;
`.nojekyll` must stay in the repo.

**One rule that matters:** all paths are *relative* (`styles.css`, `assets/img/x.jpg`).
Never change them to start with `/` — a leading slash breaks GitHub Pages project sites, and
the styling disappears on the live URL while still looking fine locally.

## Privacy choices

- `assets/docs/resume.pdf` is a **web-safe** export of the original CV: the home address is
  replaced with "Manila, Philippines" and the mobile number is removed from the body and the
  page footer. Nothing else was altered. Keep the unredacted original off this repo — this
  folder is published to the public web.
- The personal Gmail address and mobile number are not published anywhere on the site. Only
  the DLSU address is.
- The contact form has no backend. It validates in the browser and then opens the visitor's
  email app with the message prefilled — nothing is stored or transmitted by the site. To
  collect submissions properly, point the form at a service such as Formspree.

## History

An earlier editorial design (warm paper, Fraunces serif, oxblood accent) was built and
reviewed alongside this one. It was retired in favour of this version and remains in the git
history if it is ever wanted back.
