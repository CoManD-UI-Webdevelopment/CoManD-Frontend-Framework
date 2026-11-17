# Changelog – comand-frontend-framework

All notable changes are documented here, newest first. Format: [Keep a Changelog](https://keepachangelog.com), versioning follows `package.json`.

## [Unreleased]

_Add every new change here before it is released._

### Added
- `package.json` exports `./neumorphic.css` (was missing; `material-web.css` and `tailwind.css` were already exported).
- Quality rules documented (`docs/README.md`, workspace `CLAUDE.md`).

### Changed (Accordion)
- `details.secondary` / `details.tertiary` summary text is white again (design decision by the maintainer). Note: white on the secondary/tertiary colors is below WCAG AA 4.5:1 (axe reports it); primary stays white as before.

### Added / Fixed (contrast, round 2)
- New tokens `--error-color-text`, `--warning-color-text`, `--success-color-text`, `--info-color-text` (light/dark aware, min. 4.5:1 on the default backgrounds) and `--hyperlink-color-contrast-text` (text ON hyperlink-color backgrounds; hyperlink-color is dark in light mode and light in dark mode).
- All status colors used as TEXT/ICON/BORDER (`--status-color`, `--status-color-label-text`, `--status-color-help-icon`, `--status-color-border`) use the `-text` tokens (error text on dark background was #b81800 on #1a1a1a, ratio 2.3).
- `--primary|secondary|tertiary-color-text` light-mode cap 28% -> 25%, dark-mode floor 60% -> 68%; `--hyperlink-color-lightness-light-mode` cap 25%. Accordion hover text is a fixed dark variant of the highlight color (its hover background is light in both schemes).
- `--headline-text-color` was invalid (`lightdark(` / `----headline-text-color-dark`): now `light-dark(var(--headline-text-color-light), var(--headline-text-color-dark))`.
- `demopage-only.css`: demo headline colors use contrast-safe tokens.

### Fixed (demo page / label help icons)
- The help icon inside `.label-text` can be a `<span role="button" tabindex="0">`: the label-icon styles (`button:has([class*="icon-"])`) also match `span[role="button"]`. A `<button>` inside a `<label>` is a second labelable control (HTML validity: one control per label), so the demo page (`FrontendFramework.vue`) and `CmdFormElement` use the span variant.
- Demo page: `.copyright-information` link is white on the dark-gray background (was a black contrast token), the second `role="contentinfo"` was removed (the `<footer>` is the landmark).

### Added (background)
- `--color-scheme-background-subtle`: subtle alternative background that follows the color scheme (`--default-background` is a fixed light gray and must not be used behind scheme-aware text).

### Fixed (active list items)
- `li.active > a` / icons use `--hyperlink-color-contrast-text` on the `--hyperlink-color` background (was always white: unreadable in dark mode).

### Fixed (offcanvas button)
- `framework.css`/`breakpoints.css`: the offcanvas toggle button is also matched by `[id^="toggle-offcanvas-"]` (component library renders one id per navigation instance; specificity unchanged via `:is(#toggle-offcanvas, ...)`).

### Added (accessibility)
- Tokens (derived from the hue/saturation/lightness tokens, so every template gets them automatically): `--color-contrast-threshold`, `--primary|secondary|tertiary-color-contrast-text` (black or white text for use ON the colored background) and `--primary|secondary|tertiary-color-text` (the color darkened/lightened for use AS text/icon color on default backgrounds, min. 4.5:1, light/dark aware).
- Utility classes `.visually-hidden` / `.sr-only`: hide content visually but keep it for screen readers. (`.hidden`/`.display-none` remove it for screen readers too - do not use them for labels of icon-only buttons/links.)

### Fixed (accessibility / contrast; found by `tools/check-matrix.mjs`)
- Box headers, accordion summaries, buttons, tags and table heads for primary/secondary/tertiary used fixed white text; now they use the `*-contrast-text` tokens. Hyperlinks, headlines, icons and the `.primary|secondary|tertiary-color` helper classes use the `*-color-text` tokens.
- Default light-mode hyperlink lightness is capped to 28% (highlighted 24%) so links reach AA on light and tinted backgrounds. Info system-message color `--info-color-lightness` 63% -> 42%.
- `neumorphic.css`: button text colors now use the contrast tokens (`#6C7587` -> `#4a5163` for default buttons); hyperlink color uses `--primary-color-text`. `material-web.css`, `tailwind.css`: hyperlink color uses `--primary-color-text`.
- Result on the demo page (all four templates, light and dark, 375/768/1280px): contrast violations 1651 -> 24 (remaining: intentionally `.disabled` demo buttons, which axe cannot recognize because they are no real disabled elements, and one logo link in material-web).
- `framework.css` header date updated.

### Notes
- Quality checks for all three projects live in `E:\CoManD-UI	ools` (`npm run check`). Open framework findings: `multiple-labeled-controls` in demo forms (52), one unnamed landmark and the sidebar anchor in the demo.

### Changed
- Demo page (`FrontendFramework.vue`): icon-only buttons/links got `aria-label`, hidden button texts use `.visually-hidden`, scrollable regions are keyboard focusable (`tabindex="0"`, `role="region"`, `aria-label`), duplicate ids removed, `placeholder` removed from `<input type="file">`, landmarks (`nav`, `aside`, `footer`) have unique names, duplicate `role="banner"` removed.
- Demo page (`FrontendFramework.vue`): the template switcher removes only the template-stylesheet it added (`#cmd-template-stylesheet`) instead of the first `<link>` of the document (which removed the favicon link in dev).
- `index.html`: removed stale `xmlns` attribute from `<html>`.
- `dist/` rebuilt: `dist/templates/*` is identical to `public/templates/*` again (`neumorphic.css` was stale).

### Removed
- `public/templates/business.css` (not one of the four supported templates: blank, material-web, neumorphic, tailwind).

### Baseline note (documented 2026-11-17)
At the time documentation started the working copy contained **uncommitted changes** on top of commit `1d5a147` ("reafactoring to layers", 2026-06-16): `package.json`, `public/demopage-only.css`, `public/templates/neumorphic.css`, `src/FrontendFramework.vue`, `src/assets/css/framework.css` (about +69/−33 lines in total; header dated 2026/06/18). The content of these changes is not itemized yet – review with `git diff` before the next release and list them here.

## [4.5.04] – current `package.json` version
- CSS reorganized into cascade layers (`base`, `components`, `utilities`) – commit "reafactoring to layers".
- `neumorphic.css` template added; templates available then: `business`, `material-web`, `neumorphic`, `tailwind` (`business` was removed later, see Unreleased).
- Package exports: `styles.css`, `material-web.css`, `tailwind.css`, `demopage-only.css`.

## Earlier history (from git log, summarized)
- Native accordion added with several fixes and improvements; many new tokens.
- Refactoring of form-element validation styles.
- Fixes for buttons.
- Tags up to `3.3.24` mark the pre-layer 3.x line.
