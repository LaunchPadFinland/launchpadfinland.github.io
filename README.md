# Launch Pad Finland ry — website

One-page site for **Launch Pad Finland ry**, a non-profit association based in Finland's Kainuu
Region, active since 2016.

> **Status: draft, under review.** Some social and news links are still placeholders. The page
> carries a `noindex` tag so it stays out of search results until the content is signed off.

Plain HTML, CSS and a little JavaScript — no framework and no build step.

```
├── index.html          ← the whole site
└── assets/
    ├── css/style.css   ← all styling
    ├── js/main.js      ← mobile menu + scroll reveal (the site works without it)
    └── img/            ← photographs and logo
```

## Preview it locally

```bash
python3 -m http.server 8644
```

Then open <http://localhost:8644>. Double-clicking `index.html` works too, but a local server
behaves more like the real thing.

## Editing the copy

All text lives in `index.html` as plain HTML, with a comment marking each section. Find the
sentence, type over it, reload the browser. Nothing to rebuild.

## Hosting

Published with GitHub Pages straight from the `main` branch — no configuration file needed,
GitHub serves `index.html` automatically.
