# NUSC Accessibility, SEO, and Performance Guide

## 1. Purpose

This document defines the accessibility, search-engine optimisation (SEO), and performance requirements for the Nagaland United Sports Club (NUSC) responsive landing page.

The page is a front-end-only experience with static or mock data. It must introduce NUSC clearly, support supporters and football audiences, help potential players and partners find the right action, and direct merchandise visitors to the configured external official shop.

Do not claim facts, achievements, sponsors, player information, audience numbers, or commercial results unless they have been verified by NUSC.

## 2. Quality Targets

### Accessibility

- Target WCAG 2.2 Level AA for the landing page.
- Every core task must work with keyboard navigation.
- Every visible control must have an accessible name and an understandable state.
- Content must remain usable at 200% zoom and on narrow screens.
- Motion, contrast, focus, and interaction must not create barriers.

### SEO

- Give search engines a clear, truthful description of NUSC and its location.
- Use one canonical page URL and one descriptive page title.
- Make the club identity, football purpose, community work, matches, news, partners, and shop path discoverable in page content.
- Use structured data only for information that is visible on the page and verified.
- Do not use SEO text that is hidden, repetitive, misleading, or invented.

### Performance

Use these as practical launch targets for a representative mobile and desktop run:

- Largest Contentful Paint (LCP): 2.5 seconds or better.
- Interaction to Next Paint (INP): 200 milliseconds or better.
- Cumulative Layout Shift (CLS): 0.1 or lower.
- First Contentful Paint (FCP): 1.8 seconds or better where measurable.
- Total page weight: keep the initial transfer as small as practical, with special attention to images and fonts.
- No horizontal overflow at 375px, 768px, 1024px, and 1440px or wider.

Targets should be checked on a throttled mobile connection as well as a normal desktop connection.

## 3. Semantic Page Structure

Use one main landmark and a logical document outline:

```html
<header>
  <nav aria-label="Primary navigation">...</nav>
</header>
<main id="main-content">
  <section aria-labelledby="hero-title">...</section>
  <section id="about" aria-labelledby="about-title">...</section>
  <section id="matches" aria-labelledby="matches-title">...</section>
  <section id="team" aria-labelledby="team-title">...</section>
  <section id="community" aria-labelledby="community-title">...</section>
  <section id="news" aria-labelledby="news-title">...</section>
  <section id="partners" aria-labelledby="partners-title">...</section>
  <section id="shop" aria-labelledby="shop-title">...</section>
</main>
<footer>...</footer>
```

Requirements:

- Use one `h1`, containing the official club name or a truthful page-level heading.
- Keep headings in a logical order; do not choose heading levels for visual size.
- Use `section`, `nav`, `article`, `header`, and `footer` where they communicate structure.
- Use lists for navigation links, news lists, sponsor groups, and other collections.
- Use buttons for actions that change the interface and links for navigation.
- Preserve a meaningful reading order when CSS changes the visual layout.
- Add a visible skip link as the first keyboard-focusable element: `Skip to main content`.

## 4. Navigation and Interaction Accessibility

### Header and mobile menu

- The logo link must have an accessible name such as `NUSC home`.
- The menu control must be a real button, not a styled `div` or link.
- Give the menu button an accessible name, such as `Open menu` and `Close menu`.
- Expose state with `aria-expanded` and connect the button to the menu with `aria-controls`.
- When the menu opens, move focus into it. When it closes, return focus to the menu button.
- Allow `Escape` to close the menu.
- Prevent keyboard users from tabbing into hidden menu content.
- Do not lock page scrolling in a way that prevents access to the menu or creates a keyboard trap.
- Keep `SHOP` as a clearly labelled external link. If it opens a new tab, say so in its accessible name or nearby text.

### Anchor navigation

- Give each section a unique, stable `id`.
- Provide an in-page scroll offset so a sticky header does not cover the target heading.
- Use `:focus-visible` styles and ensure focused targets are visible after scrolling.
- Do not rely on hover to reveal navigation or essential information.

### Buttons and links

- Link text must describe the destination: `View matches`, `Meet the team`, `Visit official shop`, and `Become a partner`.
- Do not use `href="#"` for unfinished actions.
- External links should use safe target handling and an appropriate accessible label.
- Ensure touch targets are at least 24 by 24 CSS pixels; use approximately 44 by 44 CSS pixels for primary mobile controls where space allows.
- Do not communicate meaning by colour alone.

## 5. Images, Video, and Motion

### Images

- Use meaningful alt text for informative images, for example: `NUSC players lining up before a match`.
- Use `alt=""` for decorative images so screen readers skip them.
- Do not repeat adjacent visible captions in alt text.
- Do not put important text only inside an image.
- Provide an appropriately sized image for each layout breakpoint.
- Reserve image dimensions with `width` and `height` or an equivalent aspect-ratio container to prevent layout shift.
- Use approved club photographs, player names, sponsor logos, and merchandise imagery only.

### Video and galleries

- Do not autoplay video with sound.
- Provide captions for spoken video and a text alternative for essential information.
- Ensure gallery controls have labels and keyboard operation.
- Make the current slide or selected image available to assistive technology.

### Motion

- Respect `prefers-reduced-motion: reduce`.
- Disable or shorten non-essential scroll reveals, parallax, and animated transitions for reduced-motion users.
- Never make essential content depend on an animation finishing.
- Avoid rapid flashing and continuous motion that distracts from match, news, or CTA content.

Example:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 6. Colour, Typography, and Focus

- Meet WCAG AA contrast for normal and large text.
- Check text over hero photography at every responsive crop, not only the design mockup.
- Use an overlay or alternate text treatment when a photograph reduces contrast.
- Do not use low-contrast grey text for dates, match details, captions, or sponsor labels.
- Use a consistent, visible focus indicator with sufficient contrast against both light and dark backgrounds.
- Keep body text readable on mobile; do not reduce it to fit a dense card.
- Allow text to wrap without clipping or overlapping nearby controls.
- Test at 200% browser zoom and with increased text spacing where practical.

## 7. Content and SEO Foundations

### Page metadata

Use a truthful title and description, for example:

```html
<title>Nagaland United Sports Club | Football in Nagaland</title>
<meta
  name="description"
  content="Discover Nagaland United Sports Club in Chumoukedima: club story, matches, team, community football, news, partners, and the official shop."
/>
<link rel="canonical" href="https://example.com/" />
```

Replace the example domain and wording with the verified production URL and approved club copy.

Also provide:

- Open Graph title, description, URL, and image.
- Social preview image with suitable dimensions and readable text.
- `twitter:card` metadata if the chosen sharing channels require it.
- A favicon and app icons using approved NUSC branding.
- `lang="en"` on the document unless the page content is primarily another language.

### Page content

- State the full club name near the beginning of the page: Nagaland United Sports Club (NUSC).
- Include the verified location, Chumoukedima, Nagaland, where relevant.
- Explain the club's football, community, youth, supporter, and partnership roles in natural language.
- Use descriptive headings for About, Matches, Team, Community, News, Partners, and Shop.
- Keep mock content clearly marked during development and replace it before launch.
- Use dates in a machine-readable and human-readable form, for example `<time datetime="2026-10-30">30 October 2026</time>`.
- Keep the spelling of NUSC consistent. Resolve the source-document inconsistency between `NUSC` and `NSUC` before publishing.
- Do not duplicate large blocks of copy solely to target keywords.

### Structured data

Add JSON-LD only after the official production values are known. Suitable types may include:

- `SportsOrganization` for the club identity.
- `SportsEvent` for a verified upcoming match.
- `NewsArticle` for a real news article page, if article pages are later added.
- `BreadcrumbList` only if the site has meaningful breadcrumb navigation.

Structured data must match visible page content. Do not mark up placeholder opponents, invented results, unapproved sponsors, or an unconfirmed shop URL.

### Crawl and sharing files

Before launch, provide:

- `robots.txt` that permits crawling of the public page and points to the sitemap.
- `sitemap.xml` containing the canonical public URL.
- A stable production URL and redirect policy for alternate hostnames.
- Correct `404` handling if additional routes are introduced later.

Do not block CSS, JavaScript, or important images required to render the page.

## 8. Performance Implementation Rules

### Images

- Prefer AVIF or WebP with a fallback only where required.
- Use responsive `srcset` and `sizes` for hero, player, community, news, and merchandise images.
- Use a high-quality but appropriately compressed hero image; do not ship a full-resolution source photograph to every device.
- Load the hero image eagerly only when it is the LCP candidate. Do not lazy-load the primary above-the-fold image.
- Lazy-load below-the-fold images with `loading="lazy"` and `decoding="async"`.
- Use `fetchpriority="high"` only for the actual LCP image.
- Avoid loading images that are hidden behind unopened mobile menus or unused sections.

Example:

```html
<img
  src="/images/hero-nusc-1280.avif"
  srcset="/images/hero-nusc-768.avif 768w, /images/hero-nusc-1280.avif 1280w, /images/hero-nusc-1920.avif 1920w"
  sizes="100vw"
  width="1920"
  height="1080"
  alt="NUSC players standing together before a match"
  fetchpriority="high"
/>
```

### Fonts and CSS

- Use a small number of approved font families and weights.
- Self-host fonts where licensing permits and use `font-display: swap`.
- Avoid loading unused font weights, icon packs, CSS, or JavaScript.
- Prefer CSS and existing component styles over large UI libraries for this single landing page.
- Keep critical above-the-fold styles available without waiting for non-essential effects.
- Avoid layout shifts caused by late-loading fonts, icons, sponsor logos, or images.

### JavaScript and React

- Keep the initial JavaScript bundle focused on the landing page.
- Do not add backend clients, payment libraries, authentication packages, analytics SDKs, or carousel libraries unless they are actually required.
- Render static content from data objects without unnecessary client-side requests.
- Avoid expensive scroll listeners; use `IntersectionObserver` for reveal effects when needed.
- Keep animations transform- and opacity-based where possible.
- Do not delay the main content behind a loading screen.
- Remove console errors and avoid warnings caused by missing keys, failed image requests, or invalid markup.

### External resources

- Treat social embeds, external fonts, analytics, and shop integrations as performance costs.
- Prefer normal links to heavy social embeds on the landing page.
- Load third-party scripts only with a clear purpose and after assessing their effect on Core Web Vitals.
- The shop should remain a normal external navigation path; do not load its cart, checkout, or product data into this page.

## 9. Testing Matrix

Run checks at minimum at:

- 375px mobile portrait.
- 768px tablet.
- 1024px laptop/tablet landscape.
- 1440px desktop.
- A desktop width wider than 1440px.
- 200% browser zoom.
- Keyboard-only navigation.
- A screen reader or browser accessibility tree.
- Reduced-motion preference enabled.
- Slow mobile network throttling.

### Accessibility checks

- Skip link reaches the main content.
- Tab order follows the visual and reading order.
- Focus is visible everywhere.
- Mobile menu opens, closes, and restores focus correctly.
- All links and buttons have useful names.
- Headings and landmarks form a logical outline.
- Images have correct alternative text treatment.
- Contrast passes for text, controls, focus, and overlays.
- No keyboard trap exists.
- Match, news, sponsor, and shop content remain understandable without colour or hover.

### SEO checks

- Title, description, canonical URL, and social metadata are present.
- The page has exactly one appropriate `h1`.
- NUSC's official name and location are consistent.
- All indexable content is available in the rendered HTML or an equivalent crawlable output.
- Links have descriptive destinations.
- `robots.txt` and sitemap are correct for production.
- Structured data validates and matches visible content.
- No placeholder URLs, mock dates, or unverified claims remain in production.

### Performance checks

- Run Lighthouse or an equivalent audit in mobile and desktop modes.
- Confirm the LCP element is intentional and its image is optimised.
- Check for layout shifts while images, fonts, sponsor logos, and the mobile menu load.
- Inspect network requests for oversized images, unused scripts, duplicate fonts, and failed resources.
- Check the console for errors and warnings.
- Verify no horizontal scroll at every required breakpoint.

## 10. Definition of Done

The page is ready for review when:

- The page is keyboard usable and has no critical accessibility violations.
- Mobile navigation exposes correct labels and state and restores focus.
- Semantic landmarks, headings, links, and images are correct.
- Reduced-motion and visible-focus behaviour are implemented.
- Metadata, canonical URL, social previews, and crawl files are configured for production.
- NUSC content is truthful, consistent, and free of unresolved mock data.
- The hero and below-the-fold images are responsive, compressed, dimensioned, and correctly prioritised.
- The page meets the target Core Web Vitals in representative tests or has documented remaining constraints.
- There is no horizontal overflow, major layout shift, or console error.
- The external Shop link uses the single central configuration value.
- Final checks pass at mobile, tablet, laptop, desktop, keyboard, zoom, and reduced-motion states.
