# ramyaiyer.net

Static portfolio site built with [Eleventy](https://www.11ty.dev/). Projects are
markdown files with a bit of front matter (title, year, tools, affiliation,
keywords) - the landing page grid, the keyword filters, and each project's
page are all generated from those files automatically.

## How it works

- **`src/projects/*.md`** - one file per project. Front matter drives the grid
  block (name/year/tools/affiliation) and `keywords` drives filtering. The
  body of the file is markdown (plus you can drop in raw HTML for image rows
  or video embeds) and becomes the project page content.
- **`src/index.njk`** - the landing page. It loops over every project and
  every unique keyword it finds - you never edit this file to add a project
  or a keyword, it's all driven by the markdown files.
- **`src/js/filter.js`** - the button logic. "featured" is on by default;
  clicking another keyword button adds it to the filter (OR logic), clicking
  it again removes it. A project shows if it has *any* active keyword.
- **`src/info.md`** - your About/Info page, plain markdown.

## Adding a new project

Create a new file in `src/projects/`, e.g. `src/projects/my-new-thing.md`:

```markdown
---
title: My New Thing
year: 2026
affiliation: Some Studio or Class
tools:
  - Blender
  - TouchDesigner
keywords:
  - featured
  - research
order: 5          # optional - controls grid position, lower = earlier
thumbnail: /images/my-new-thing-thumb.jpg
---
Write your project description here in markdown. This becomes the body
of the project page.

<div class="image-row">
  <img src="/images/my-new-thing-1.jpg" alt="">
  <img src="/images/my-new-thing-2.jpg" alt="">
</div>

<div class="media-embed">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" allowfullscreen></iframe>
  <p class="caption">Caption for this video</p>
</div>
```

## Local development (live preview while you edit)

```bash
npm install       # first time only
npm start          # runs `eleventy --serve`
```

This opens a local server (usually `http://localhost:8080`) that live-reloads
in your browser every time you save a file in your editor - so you can edit
a project's markdown in your IDE and watch the page update instantly.

## Deploying

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that builds the site and deploys it to GitHub Pages automatically on every
push to `main`.

One-time setup after you push this repo to GitHub:

1. Repo **Settings -> Pages** -> under "Build and deployment", set
   **Source** to **GitHub Actions**.
2. Repo **Settings -> Pages** -> **Custom domain**, enter `ramyaiyer.net`
   (the `CNAME` file in `src/` is already set up for this, but GitHub still
   needs it entered here so it manages the domain + HTTPS cert).
3. Make sure your domain's DNS still points at GitHub Pages the way it did
   for Adobe Portfolio (an `A`/`ALIAS` record to GitHub's IPs, or a `CNAME`
   record to `<yourusername>.github.io` if you're using a subdomain) -
   check [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
   for the exact records.
4. Push to `main` - the Actions tab will show the build/deploy running, and
   the site will be live a 
