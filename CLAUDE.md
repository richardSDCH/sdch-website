# CLAUDE.md

Guidance for Claude Code when working on this repository.

## What this project is

The website for **SDCH Handelslösungen UG**, a Hamburg-based cross-border
trade advisory firm (trade representation, business consultancy, and
hands-on project management, with a focus on Europe ↔ Latin America trade).
Deployed at **sdch.eu** via GitHub Pages.

## Stack

- **Vite + React 19**
- **Tailwind CSS v4** via `@tailwindcss/vite` — no `tailwind.config.js` or
  PostCSS config; design tokens live in a `@theme` block inside
  `src/index.css`.
- **react-router-dom** with `HashRouter` (not `BrowserRouter`) — deliberate
  choice because GitHub Pages is a static host with no rewrite rules, and
  `HashRouter` avoids the 404-on-refresh/direct-link problem without extra
  config. URLs look like `sdch.eu/#/about`.
- **@headlessui/react** — used for the language `Listbox` dropdown.
- **react-icons** — used for the LinkedIn icon (`FaLinkedinIn` from the `fa`
  set).
- **Web3Forms** — contact form backend (no server of our own). Access key is
  read from `VITE_WEB3FORMS_ACCESS_KEY` (see Environment variables below).
- No backend, no database, no SSR. Everything is a static build deployed to
  GitHub Pages.

## Project structure

```
src/
  components/
    Layout.jsx          shared header/footer shell (via <Outlet />)
    Header.jsx           nav bar, fixed h-16 height, responsive mobile menu
    Footer.jsx           copyright + links to /privacy, /terms, /imprint
    Hero.jsx             rotating 3-image hero on the Home page
    LanguageDropdown.jsx  Headless UI Listbox, flag + label per language
    ScrollToTop.jsx       resets scroll position on every route change
  pages/
    Home.jsx, About.jsx, Services.jsx, Contact.jsx, NotFound.jsx
    Privacy.jsx, Terms.jsx, Imprint.jsx   (rendered OUTSIDE <Layout>, see below)
  i18n/
    texts.js              en/de/es text dictionary
    LanguageContext.jsx    React Context + useLanguage() hook, wraps <App />
  data/
    images.js              central registry of image src/alt/author/credit
  App.jsx                 route definitions
  main.jsx                HashRouter + LanguageProvider + app entry
  index.css               Tailwind import + @theme design tokens
public/
  resources/images/        image assets (see Images section)
  CNAME                    contains sdch.eu, required for custom domain
.github/workflows/
  deploy.yml               builds + deploys to GitHub Pages on push to main
```

## Routing conventions

- **Pages under `Layout`** (Home, About, Services, Contact) get the shared
  header/footer via `<Outlet />` in `Layout.jsx`.
- **Privacy, Terms, and Imprint are separate top-level `<Route>`s, siblings
  of the `Layout` route — not nested inside it.** They intentionally do not
  get the shared header/footer. Each page renders its own minimal wrapper
  with a "back to home" link. Do not move these inside the `Layout` route
  without discussing it — this was a deliberate choice.
- `Impressum`/Imprint content is a **German legal requirement (§5 TMG)**
  for a UG — its content (managing director, commercial register entry,
  etc.) should be treated as legally reviewed content, not filler copy to
  rewrite casually.

## Design tokens & visual language

- Brand colors live in `src/index.css` under `@theme` as `--color-brand-50`
  through `--color-brand-900` (blues). Use `bg-brand-*` / `text-brand-*`
  utilities, not raw hex values, when touching existing components.
- Cream/warm accent backgrounds (`#FFF7EE`, `#FFF1E4`) are used for card
  and section backgrounds (e.g. the About page team cards) — treat these as
  a second, secondary palette layered on top of the brand-blue tokens.
- **Serif display font (`font-display`, currently Fraunces) is reserved for
  headlines only** (h1/h2/h3, hero titles, names) — do not apply it to
  body text or it dilutes the contrast that makes headlines feel special.
- Hero headline copy is short, declarative, and ends on a plain noun —
  match that rhythm if adding new rotating slides or section headlines.
  Avoid corporate-consulting abstractions ("synergy," "leverage,"
  "best-in-class," "human-centered," "cutting-edge") — house style is
  plain, concrete, specific verbs.

## Images

- All image assets live in `public/resources/images/` and are referenced
  by root-relative path (`/resources/images/...`), **not** imported from
  `src/` — this is a deliberate choice to keep `images.js` (which is *data*,
  not binary assets) inside `src/`, while the actual image files live in
  `public/`. Do not move image files into `src/` and start importing them
  without discussing — it changes the asset pipeline (hashing/optimization)
  and the existing `images.js` src strings would need to change too.
- `src/data/images.js` centralizes `src`, `alt`, `author`, `photoByHref`,
  `unsplashHref` for every image used (mostly Unsplash-sourced). When
  adding a new image, add an entry here rather than hardcoding paths in
  components, and include attribution fields if the source requires/
  requests it.
- Hero images are sized for retina MacBook Air displays (~2880×1440,
  2:1 ratio). Square/division images are ~900×900. Keep new images in this
  range — full-resolution originals (4000px+) caused a ~1-minute load time
  before this was fixed; don't reintroduce oversized assets.
- Prefer WebP for photographic content over PNG where feasible (smaller
  file size at equivalent visual quality).

## i18n

- Three languages: `en`, `de`, `es`. Dictionary lives in `src/i18n/texts.js`
  as `texts.en.*`, `texts.de.*`, `texts.es.*`.
- Current language is React Context state (`LanguageContext.jsx`), not a
  routing param — `useLanguage()` gives `{ language, setLanguage, t }`
  where `t` is shorthand for `texts[language]`. This is intentionally a
  minimal hand-rolled solution (no `react-i18next`) — fine to keep it this
  way unless the project's i18n needs grow (pluralization, number/date
  formatting, more languages), at which point migrating to a real i18n
  library would be worth it.
- Language selection currently does not persist across reloads (in-memory
  state only). Not yet wired to `localStorage`.
- When adding new user-facing strings, add them to all three language
  objects, not just `en`. Use real typographic characters (’ not ', — not
  --) directly in string literals; `\u2019`/`\u2014` escapes only work
  inside actual JS string literals, not raw JSX text nodes.

## Deployment

- **Host**: GitHub Pages, custom domain `sdch.eu` (see `public/CNAME`).
- **Pages source**: GitHub Actions (not "deploy from a branch") — set under
  the repo's Settings → Pages.
- **Workflow**: `.github/workflows/deploy.yml` builds on every push to
  `main` and deploys via `actions/upload-pages-artifact` +
  `actions/deploy-pages`.
- **`vite.config.js` `base: '/'`** — correct for root-domain hosting at
  `sdch.eu`. Do not change this to a subpath (`/reponame/`) unless the site
  is being previewed at the default `username.github.io/reponame/` URL
  instead of the custom domain — that was only ever a temporary sanity
  check during initial deployment, not the production configuration.
- **Manual deploy fallback**: `npm run deploy` (via the `gh-pages` package)
  pushes `dist/` to a `gh-pages` branch, in case Actions-based deploy needs
  to be bypassed temporarily.

## Environment variables

- `VITE_WEB3FORMS_ACCESS_KEY` — Web3Forms access key for the contact form,
  tied to the `info@sdch.eu` inbox. Not a secret in the security sense (it
  ships in the client bundle either way), but still kept out of source via
  `.env` (gitignored) locally, and as a **GitHub Actions repository
  secret** of the same name for the build step in `deploy.yml`. If this env
  var is missing during a CI build, the form will silently ship with an
  invalid key rather than erroring loudly — check the Actions build log's
  env step if the deployed contact form stops working.
- The contact form (`Contact.jsx`) includes a hidden honeypot field
  (`company_website`) to filter naive spam bots — submissions with that
  field non-empty are silently dropped client-side without calling the
  Web3Forms API. Don't remove this without adding an equivalent spam
  mitigation.

## Common gotchas encountered during development (avoid repeating)

- **Flex children default to `min-width: auto`**, which silently overrides
  explicit `w-*` classes when content (e.g. an `<img>`) is wider than the
  intended column. Fix with `min-w-0` on the flex child.
- **Setting both width and height on an `<img>` without `object-fit`**
  distorts the image. Use `object-cover` (crop to fill) or `object-contain`
  (letterbox), or set only one dimension and `h-auto`/`w-auto` to preserve
  the natural ratio automatically.
- **Stacked absolutely-positioned elements at the same position** (e.g. the
  Hero's crossfading slides/credits) remain in the DOM and intercept
  pointer events even at `opacity-0`. Add `pointer-events-none` to inactive
  layers, not just an opacity toggle.
- **`window.scrollTo(0, 0)`** respects the page's CSS `scroll-behavior:
  smooth` and animates. Use `window.scrollTo({ top: 0, behavior: 'instant'
  })` for an immediate jump (used in `ScrollToTop.jsx`).
- **`public/` is not part of the JS module graph.** Files in `public/`
  can't be `import`ed — only referenced by root-relative URL string. Don't
  put `.js` data modules inside `public/`; keep them in `src/` and only put
  binary assets under `public/`.

## What not to change without discussion

- The `HashRouter` choice (vs. `BrowserRouter`) — tied to GitHub Pages
  hosting constraints.
- The Privacy/Terms/Imprint routes living outside `<Layout>`.
- The hand-rolled i18n approach (vs. adopting `react-i18next`).
- Image storage location (`public/resources/images/` vs. migrating to a
  service like Cloudinary) — considered and deliberately deferred; revisit
  only if image management becomes a real bottleneck.
