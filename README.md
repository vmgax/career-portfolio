# Career e-Portfolio

A five-page static website. No build step, no npm, no framework — open the files in a
text editor, save, refresh the browser.

```
index.html          Self-introduction · LinkedIn link · contents index
resume.html         Résumé (print-friendly)
academic-work.html  Academic work samples
experience.html     Business · volunteer · part-time · formal work
references.html     References · recommendation letters · testimonials
styles.css          All styling
main.js             Mobile nav · scroll reveals · image lightbox
assets/img/         Your photos and scans
assets/docs/        Your PDFs (resume.pdf, letter-01.pdf, …)
```

## How to edit

Every piece of dummy content is marked in the HTML with a comment:

```html
<!-- REPLACE: your public LinkedIn URL -->
```

Search all files for `REPLACE` and work through the hits — that is the full checklist.
The dashed red boxes on the pages are `class="callout"` notes written for you; **delete
those blocks before submitting.**

### Requirement checklist

| Required content | Where it lives |
| --- | --- |
| Self-introduction | `index.html` → section 01 |
| Public LinkedIn profile (link only) | header button on `index.html` + every footer |
| Résumé | `resume.html` + `assets/docs/resume.pdf` |
| Academic work samples | `academic-work.html` |
| Business / volunteer / part-time / work samples | `experience.html` |
| References | `references.html` → section A |
| Letters of recommendation / testimonials | `references.html` → section B |

### Swapping an image

1. Drop the file in `assets/img/` (JPG or PNG; ~1600 × 1200 px is plenty).
2. In the HTML, change **both** attributes on that item:
   - `<img src="assets/img/your-file.jpg" alt="...">`
   - the button's `data-lightbox-src="assets/img/your-file.jpg"`

The second one is what opens when the image is clicked. Update `alt` text too — it is
what a screen reader announces.

### Adding or removing a work sample

Each sample is one `<figure class="gallery-item">` block. Copy a whole block to add one,
delete a whole block to remove one. The magazine layout re-flows automatically — you do
not need to touch the CSS.

### The navigation menu

There is no build step, so the header and footer are **copied into all five pages**. If
you change a nav link or your name in the header, change it in all five files.

### Your name

Search for `Your Name` across all files — it appears in each `<title>`, each header
wordmark, and each footer colophon.

## Running it locally

Just double-click `index.html`. If you would rather serve it properly (so paths behave
exactly like they will once deployed):

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Deploying to GitHub Pages

1. Create a **public** repo on GitHub named `career-portfolio`.
2. Push this folder to it:
   ```bash
   git remote add origin https://github.com/<your-username>/career-portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)` → Save.**
4. Wait a minute, then open `https://<your-username>.github.io/career-portfolio/`.

That URL is what you submit. Every push to `main` republishes the site.

**One rule that matters:** all paths in the HTML are *relative* (`styles.css`,
`assets/img/x.jpg`). Never change them to start with a `/` — a leading slash breaks
GitHub Pages project sites, and the styling will disappear on the live URL while still
looking fine locally.

`.nojekyll` is in the repo on purpose. Leave it — it stops GitHub from filtering files.

## Notes

- Type: Fraunces (display) · Archivo (body) · IBM Plex Mono (labels), loaded from Google Fonts.
- `resume.html` has a print stylesheet — Ctrl/Cmd + P produces a clean PDF with the nav,
  buttons and callouts stripped out.
- Animations respect `prefers-reduced-motion`.
