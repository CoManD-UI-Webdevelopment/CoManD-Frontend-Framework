# CoManD Frontend Framework – Documentation

Package: `comand-frontend-framework` · License: GPL-3.0-only · Current version: see `package.json` (4.5.04 at time of writing)

A pure CSS framework (HTML5/CSS3, modern CSS only). No JavaScript is needed to use it; Vue is used solely for the demo page (`src/FrontendFramework.vue`, started with `npm run dev`).
The icon font `comand-ui-iconfonts` (base-iconfont) is the only dependency used by the framework itself.

## Files

| File | Purpose |
|---|---|
| `src/assets/css/normalize.css` | Reset / normalization |
| `src/assets/css/framework.css` | Tokens, functions, `@layer base`, `@layer components`, `@layer utilities`, container/browser/print/dark-mode rules (~5700 lines) |
| `src/assets/css/breakpoints.css` | Responsive overrides (medium `<= 1023px`, small `<= 640px`) |
| `public/templates/*.css` | Templates: `material-web`, `neumorphic`, `tailwind` (`blank` = none); only override tokens. Single source for all three projects |
| `public/demopage-only.css` | Styles for the demo page only |

`src/index.js` imports the three CSS files in the order normalize → framework → breakpoints. The build (`vite build`) outputs `dist/style.css` plus a JS/UMD wrapper.

## Usage

```js
import "comand-frontend-framework/styles.css"          // all framework CSS
import "comand-frontend-framework/material-web.css"    // optional template (also: tailwind.css)
```

Rule from the file header: **never edit `framework.css` or `breakpoints.css` in a project.** Override tokens or classes in your own CSS (e.g. a template file) so updates don't break the project.

## Architecture

1. **Tokens (CSS custom properties on `:root`)** – the whole look is token driven. Groups: backgrounds, borders/outlines, colors, fonts/typography, lists, grid, main-navigation, skeleton loading, site-footer/header/wrapper, spacings, widths.
2. **Functions** – aspect-ratio, contrast-text, opacity, spacing, z-index helpers.
3. **`@layer base`** – default styling for HTML elements (typography, links, forms, icons, images, lists, tables).
4. **`@layer components`** – multi-class UI elements: accordions, boxes, buttons, tags, form controls (fieldsets, labels, replaced radio/checkbox, toggle switches, multiple-switch), main navigation, popover, site header/footer/wrapper, system messages, tables.
5. **`@layer utilities`** – single-purpose classes: aspect ratios, borders/backgrounds/shadows, centering, clearfix, column-count, container types, disabled, flex, grid, positions, skeleton loading, text-align, visibility, widths/heights, wrapping/overflow.

Because everything is in cascade layers, project CSS **outside** layers always wins over the framework without specificity fights.

## Tokens – key facts

- **Colors are HSL based**, generated from separate `-hue`, `-saturation`, `-lightness` tokens, so a theme can change a color by overriding 3 numbers, e.g. `--primary-color-hue`. Same pattern for `primary`, `secondary`, `tertiary`, and system colors `error`, `warning`, `success`, `info`.
- Grays are derived from `--color-black` via relative color syntax (`--color-gray-10` … `--color-gray-90`).
- Light/dark mode: `color-scheme: light dark` plus `light-dark()` (e.g. hyperlink colors). System colors and disabled colors deliberately stay identical in both modes for accessibility. A `prefers-color-scheme: dark` block toggles `--show-in-light-mode-only` / `--show-in-dark-mode-only`.
- Sizing: `--root-font-size: 62.5%` (1rem = 10px), `--default-font-size: 1.4rem`, `--font-size-small/medium/large`.
- Spacing: `--default-spacing`, `--default-gap` (= 2× spacing), `--default-margin`, `--default-padding`; `--max-width: 144rem`; `--default-border-radius: 0`; `--reduced-opacity: .75` (keep ≥ .75 for accessibility).
- Grid: `--grid-columns: 12` (8 on medium), `--grid-small-span`, `--grid-half-span`, `--grid-large-span`, `--grid-layout-columns`, `--grid-gap`.
- Borders/outlines come as ready shorthands: `--default-border`, `--primary-border`, `--error-border`, … and the outline equivalents. `--default-outline-color` is transparent so Windows high-contrast mode still shows focus.

## Responsive behavior (`breakpoints.css`)

| Breakpoint | Media query | Effect (examples) |
|---|---|---|
| medium | `width <= 1023px` | 8 grid columns, bigger gap, `.main-navigation-wrapper nav` hidden and `#toggle-offcanvas` shown, grid items span full width, `.column-count-4` → 2 |
| small | `width <= 640px` | further layout simplification |

Visibility helpers: `.hide-for-medium`, `.hide-for-medium-up`, `.hide-for-small-up`, `.hide-for-large-down`, `.top-on-medium-devices`, `.flex-direction-row-for-medium`, `.flex-item-flex-N-medium`.

## Common classes

- Layout: `.grid-container`, `.grid-container-auto-columns`, `.grid-container-create-columns`, `.grid-container-with-equal-columns`, `.grid-item-1` … `.grid-item-12`, `.grid-item-half-width`, `.grid-item-full-width`; `.flex-container`, `.flex-container-no-gap`, `.flex-direction-*`, `.flex-wrap-*`, `.flex-item-flex-1/2/3`, `.flex-item-grow-1..4`.
- Components: `.box` (`.box-header/-body/-footer`), `.button`, `.button-wrapper`, `.tag`, `.wrap`.
- Icons: a `.icontext` class (no hyphen on purpose, to avoid trouble with icon-font rendering) and `icon-*` classes from the icon font.

## Customizing / theming

Create a template CSS that only sets tokens (see `public/templates/material-web.css`):

```css
:root {
    --primary-color-hue: 216;
    --primary-color-saturation: 80%;
    --primary-color-lightness: 25%;
    --default-border-radius: 0;
    --default-font-family: "Open Sans", sans-serif;
}
```

Templates exported in `package.json`: `material-web.css`, `neumorphic.css`, `tailwind.css`; `blank` means no template file.

## Development

```
npm install
npm run dev       # demo page
npm run build     # builds dist/
npm publish       # runs build first (prepublishOnly)
```

Release flow used in this project: commit → push → `npm publish` → new git tag with the version → push.

## Documentation rules for contributors

- Update `last update` date in the header of any CSS file you change.
- Keep the table of contents at the top of `framework.css` in sync with new sections.
- Every change goes into `CHANGELOG.md` (see there).

## Quality rules

These rules apply to every change (full text in `E:\CoManD-UI\CLAUDE.md`):

1. Framework, component library and web-ui must build and work at any time (build order: framework → component library → web-ui).
2. HTML-valid, responsive, accessible (WCAG 2.x AA), and working in light and dark mode.
3. Works with all four templates: `blank` (no template file), `material-web`, `neumorphic`, `tailwind` – each in light and dark mode.
4. Templates are looks only: they override tokens; nothing depends on a specific template.
5. Component base CSS lives in the component's `<style>` block and uses framework tokens only (no hard-coded colors except third-party brand colors with a dark-mode variant).
6. Template CSS is inherited from `comand-frontend-framework` only; no template copies elsewhere (a web-ui per-site, token-only override file is the one exception).
7. Every change is recorded in `CHANGELOG.md`.
