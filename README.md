# SDCH Handelslösungen — Website

React + Vite + Tailwind CSS v4, hosted on GitHub Pages.

## Stack

- **Vite** — build tool / dev server
- **React 19**
- **Tailwind CSS v4** (via `@tailwindcss/vite`, no separate config file needed)
- **react-router-dom** with `HashRouter` — avoids the GitHub Pages
  404-on-refresh problem with a plain static host (URLs look like
  `yoursite.com/#/contact`)

## Project structure

```
src/
  components/
    Layout.jsx    shared header/footer shell (via <Outlet />)
    Header.jsx    nav bar, responsive mobile menu
    Footer.jsx
  pages/
    Home.jsx
    About.jsx
    Services.jsx
    Contact.jsx
    NotFound.jsx
  App.jsx         route definitions
  main.jsx        HashRouter + app entry
  index.css       Tailwind import + design tokens (@theme block)
```

## Local development

```bash
npm install
npm run dev
```

## Design tokens

Colors and other tokens live in `src/index.css` under the `@theme` block
(currently placeholder blue values — `brand-50` through `brand-900`).
Update these to match the current site's palette; Tailwind utility
classes like `bg-brand-600` or `text-brand-900` will pick up the new
values automatically.

## Migrating content from the old site

1. Copy over real colors/fonts into `src/index.css`.
2. Replace the placeholder copy in each file under `src/pages/`.
3. Any interactive vanilla JS from the old site (menu toggles, sliders,
   etc.) should become a `useState`/`useEffect` hook in the relevant
   component rather than a separate `.js` file.
4. If there's a contact form, wire it to a static form backend (e.g.
   Formspree, Web3Forms) rather than standing up a server — keeps
   hosting free and simple.

## Deploying to GitHub Pages

### Option A — GitHub Actions (recommended, automatic)

Already set up in `.github/workflows/deploy.yml`. It builds and deploys
on every push to `main`. One-time setup in the GitHub repo:

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages**, and under **Source**,
   select **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically.

### Option B — manual deploy

```bash
npm run build
npm run deploy
```

This uses the `gh-pages` package to push `dist/` to a `gh-pages`
branch. If you use this method, in **Settings → Pages** set the
source to the `gh-pages` branch instead of GitHub Actions.

### Custom domain

`public/CNAME` contains a placeholder domain — replace its contents
with your actual domain (or delete the file if you're not using a
custom domain yet). Then:

1. At your DNS provider, either:
   - Point an **A record** at GitHub's Pages IPs (see GitHub's docs
     for current IPs), for the root domain, or
   - Add a **CNAME record** pointing a subdomain (e.g. `www`) at
     `<username>.github.io`.
2. In **Settings → Pages**, enter the custom domain and enable
   **Enforce HTTPS** once DNS has propagated.

### Hosting without a custom domain

If serving at `https://<username>.github.io/<reponame>/` instead of a
custom domain, change `base: '/'` to `base: '/<reponame>/'` in
`vite.config.js`.
