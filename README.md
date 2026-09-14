# Launch Pad Finland ry — website

One-page site for **Launch Pad Finland ry**, a non-profit association based in Finland's Kainuu
Region, active since 2016.

**Live at <https://launchpadfinland.github.io/>**

> **Status: draft, under review.** The three "In the news" links still point at the publishers'
> home pages rather than the articles. The page carries a `noindex` tag so it stays out of search
> results until the content is signed off.

Plain HTML, CSS and a little JavaScript — no framework and no build step.

```
├── index.html          ← Finnish page — the default, served at /
├── en/
│   └── index.html      ← English page, served at /en/
└── assets/             ← shared by both languages
    ├── css/style.css   ← all styling
    ├── js/main.js      ← mobile menu + scroll reveal (the site works without it)
    └── img/            ← photographs and logo
```

## Two languages

**Finnish is the default** at <https://launchpadfinland.github.io/>, and English lives at
<https://launchpadfinland.github.io/en/>. The FI | EN switch in the top bar links the two.

Each language is a complete, separate HTML file. That keeps the site free of any build step, with
one trade-off: **a change to layout or structure has to be made in both files.** Text changes only
touch the file for that language. The English page sits one folder down, so its asset paths start
with `../assets/`.

## Preview it locally

```bash
python3 -m http.server 8644
```

Then open <http://localhost:8644>. Double-clicking `index.html` works too, but a local server
behaves more like the real thing.

## Editing the copy

Finnish text lives in `index.html` and English in `en/index.html`, as plain HTML, with a comment marking each section. Find the
sentence, type over it, reload the browser. Nothing to rebuild.

## Hosting

Published with GitHub Pages straight from the `main` branch — no configuration file needed,
GitHub serves `index.html` automatically.
