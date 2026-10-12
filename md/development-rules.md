# NUSC Development Rules

## 1. Purpose

These rules govern design and implementation of the Nagaland United Sports Club (NUSC) responsive landing page.

The product is a modern professional football-club landing page with static or mock data. It is not a backend application, CMS, account system, or e-commerce platform.

The rules apply to developers, designers, AI coding agents, and reviewers.

## 2. Rule Priority

When requirements conflict, apply this order:

1. Verified NUSC information and legal or accessibility requirements.
2. The project document and approved content specifications.
3. The component, asset, responsive, and accessibility/SEO/performance specifications.
4. The established design system and existing implementation patterns.
5. Individual implementation preference.

When a requirement is unclear, preserve the existing behavior, avoid inventing facts, and record the decision in the relevant documentation.

## 3. Non-Negotiable Rules

1. Use `NUSC` and `Nagaland United Sports Club` consistently after the official spelling is confirmed.
2. Do not invent official club information.
3. Do not fabricate players, statistics, achievements, sponsors, partners, match data, contact details, merchandise, or commercial claims.
4. Mark static development content as mock or placeholder data.
5. Keep football as the primary story; commercial content must support it rather than overpower it.
6. Keep the Shop URL in one central configuration value.
7. Do not implement backend functionality in the landing-page scope.
8. Do not add authentication, accounts, CMS, payment, checkout, cart, inventory, or real registration behavior.
9. Use reusable components and data-driven rendering.
10. Use semantic HTML and accessible interactions.
11. Preserve responsive behavior at 375px, 768px, 1024px, and 1440px or wider.
12. Test significant changes before considering them complete.

## 4. Required Documentation Workflow

Before making implementation decisions:

1. Read the master project document.
2. Read the relevant page architecture and content specification.
3. Read the component architecture for ownership and interfaces.
4. Read the asset specification before selecting or adding media.
5. Read the accessibility, SEO, and performance requirements for user-facing changes.
6. Confirm whether the proposed feature is current scope or future expansion.

Treat these documents as complementary sources:

- Project document: product intent and scope.
- Content specification: copy, audiences, content states, and CTA destinations.
- Component architecture: component responsibilities and data boundaries.
- Asset specification: asset preparation, rights, naming, and metadata.
- Accessibility/SEO/performance guide: quality and launch requirements.

Do not ask an AI agent to build the entire site in one uncontrolled instruction. Build and validate by section.

## 5. Recommended Build Order

```text
Project foundation
  -> Global styles and design tokens
  -> Shared layout and content primitives
  -> Header and responsive navigation
  -> Hero
  -> About
  -> Achievements
  -> Matchday
  -> Team
  -> Journey
  -> Community / Football for Peace
  -> News
  -> Partners
  -> Merchandise / Shop
  -> Partnership CTA
  -> Final CTA
  -> Footer
  -> Accessibility, responsive, SEO, and performance QA
```

After each major section:

- Check the affected responsive layouts.
- Check keyboard access and focus behavior.
- Check content and image states.
- Check the browser console.
- Check that existing sections still work.

## 6. Technical Rules

### Stack

Use the approved project stack unless a documented decision changes it:

- React.
- TypeScript.
- CSS or Tailwind CSS.
- Vite where appropriate.

Use the existing repository conventions if implementation has already begun. Do not introduce a second styling system or framework without a clear reason.

### Component structure

- Keep page composition separate from reusable components.
- Keep data separate from presentation markup.
- Give each component one clear responsibility.
- Reuse global primitives for containers, sections, headings, buttons, images, and CTA groups.
- Use data-driven rendering for players, matches, achievements, news, partners, and merchandise.
- Avoid duplicating identical HTML or styles.
- Do not create abstractions for one-off markup unless they remove real complexity.
- Preserve public component APIs unless a change is required by the task.

### TypeScript

- Define types for shared content and asset shapes.
- Do not use `any` to avoid modelling an unclear value.
- Use discriminated or explicit content states such as `verified`, `mock`, and `pending`.
- Keep optional fields optional and handle missing values intentionally.
- Use meaningful names; do not use one-letter variables.
- Keep configuration values typed and centralized.

### State

Use state only where interaction requires it:

- Mobile menu open/closed state.
- Active navigation section, if scroll tracking is implemented.
- Gallery selection.
- Accordion or timeline selection where used.

Do not create state for:

- Accounts.
- Cart contents.
- Payment.
- Inventory.
- Registration submissions.
- Live scores.
- CMS editing.

Prefer CSS for hover, focus, and simple visual states.

## 7. Content and Brand Rules

### Truth and approval

Publish only verified:

- Club identity and location.
- Founding year and history.
- Achievements.
- Matches, results, venues, and competitions.
- Player information and images.
- Community initiatives.
- Sponsors and partner tiers.
- Contact details and social links.
- Merchandise and Shop details.

Do not use unsupported superlatives such as `largest`, `best`, `leading`, or `unmatched`.

Do not claim audience size, reach, engagement, sponsorship return, or commercial success without approved evidence.

### Mock data

- Keep mock data in static data files, not scattered through components.
- Add an explicit placeholder or mock flag.
- Use neutral development names such as `Player 01` only outside production.
- Do not include mock opponents, sponsors, achievements, or contact details in production metadata or structured data.
- Replace or remove all mock data before release.

### Voice

Content should feel:

- Competitive.
- Urban.
- Energetic.
- Premium.
- Football-focused.
- Connected to the local community.
- Confident without exaggeration.

Prefer short, active, specific copy. Avoid generic corporate language, filler paragraphs, and vague CTAs.

### Required navigation terms

Use the approved navigation labels:

```text
HOME
ABOUT
TEAM
MATCHES
NEWS
COMMUNITY
PARTNERS
SHOP
JOIN NUSC
```

Use destination-specific CTA labels such as `View Matches`, `Meet the Team`, `Visit Official Shop`, and `Become a Partner`.

## 8. Shop Rules

The Shop is an external destination only.

- Store the URL centrally, for example in `src/config/site.ts`.
- Reference that value from navigation and every Shop CTA.
- Do not hard-code the URL in multiple components.
- Do not implement cart, checkout, payment, inventory, product database, or account behavior.
- Do not show unverified prices, stock, sizes, delivery, or availability.
- Mark the URL as a development placeholder until the official URL is confirmed.
- Make external-link and new-tab behavior understandable to users.

Example:

```ts
export const siteConfig = {
  shopUrl: "OFFICIAL_SHOP_URL",
};
```

## 9. Asset Rules

- Use approved NUSC brand files and photography.
- Record ownership, licence, credit, approval status, and review date.
- Do not use generic stock footballers as if they represent NUSC.
- Do not stretch, skew, recolour, or modify official marks incorrectly.
- Store assets in category folders using descriptive kebab-case names.
- Keep original source files separate from optimised web files.
- Provide responsive variants for major photography.
- Include intrinsic dimensions or aspect ratios to prevent layout shift.
- Use meaningful alt text for informative images and empty alt text for decorative images.
- Obtain consent before publishing identifiable community participants, especially children.
- Do not put essential content only inside images.

## 10. Accessibility Rules

Target WCAG 2.2 Level AA for the landing page.

### Structure

- Use one page-level `h1`.
- Use logical heading order.
- Use semantic landmarks: `header`, `nav`, `main`, `section`, `article`, and `footer` where appropriate.
- Add a keyboard-accessible skip link.
- Give navigable sections stable IDs.

### Controls

- Use links for navigation and buttons for interface state changes.
- Give every control a useful accessible name.
- Make focus visible with `:focus-visible` or an equivalent treatment.
- Ensure controls have sufficient touch-target size.
- Do not rely on colour, hover, or animation alone to communicate meaning.

### Mobile navigation

- Use a real button for the menu toggle.
- Expose `aria-expanded` and `aria-controls`.
- Move focus into the menu on open.
- Return focus to the toggle on close.
- Close on `Escape`.
- Do not expose hidden menu content to keyboard users.

### Images and motion

- Provide accurate alt text.
- Caption or provide text alternatives for meaningful video.
- Respect `prefers-reduced-motion: reduce`.
- Avoid autoplay with sound, rapid flashing, and distracting continuous motion.
- Keep essential information available without animation.

## 11. Responsive Rules

Support and test:

- 375px mobile portrait.
- 768px tablet.
- 1024px laptop or tablet landscape.
- 1440px and wider desktop.
- Intermediate widths where layout transitions occur.

The page must have:

- No horizontal scrolling.
- No overlapping content.
- No clipped text.
- No unreadable type.
- No inaccessible CTA.
- No broken image crops.
- No unstable card dimensions.

Responsive implementation rules:

- Preserve meaningful content order when layouts change.
- Allow long headlines, partner names, match details, and CTA labels to wrap.
- Use stable aspect ratios for cards, images, logos, and controls.
- Avoid duplicating content for desktop and mobile.
- Keep Shop and Join NUSC available on mobile.
- Test sticky navigation against every anchor target.

## 12. SEO Rules

- Use one truthful page title and description.
- Include the full club name and location in visible content and metadata.
- Use one appropriate `h1`.
- Use descriptive section headings.
- Use canonical URL, Open Graph metadata, and social preview imagery.
- Provide `robots.txt` and `sitemap.xml` for production.
- Use structured data only for visible, verified content.
- Use machine-readable dates for matches, results, and news.
- Do not publish placeholder URLs, invented claims, or mock data in metadata.
- Do not hide keyword text or repeat phrases unnaturally.

## 13. Performance Rules

Target:

- LCP at or below 2.5 seconds.
- INP at or below 200 milliseconds.
- CLS at or below 0.1.
- FCP at or below 1.8 seconds where measurable.

Implementation rules:

- Optimise hero and section photography using responsive AVIF/WebP variants.
- Prioritise only the actual above-the-fold LCP image.
- Lazy-load below-the-fold images.
- Use `srcset` and `sizes` for large photography.
- Set image dimensions or aspect ratios before loading.
- Load only the font weights and scripts that are used.
- Avoid unnecessary UI, carousel, animation, social-embed, analytics, and payment packages.
- Use `IntersectionObserver` rather than expensive scroll handlers for reveal effects.
- Keep animations transform- and opacity-based where possible.
- Do not block the page behind a loading screen.
- Remove failed requests, duplicate assets, unused imports, and console errors.

## 14. Interaction Rules

Allowed interactions include:

- Smooth in-page scrolling.
- Sticky navigation.
- Active navigation state.
- Hover and focus states.
- Button transitions.
- Card hover states.
- Mobile navigation.
- Accessible gallery behavior.
- Optional timeline interaction.
- Accessible accordions if required.
- External Shop redirect.

Interaction rules:

- Every interaction must have a keyboard equivalent.
- Do not hide essential content behind hover.
- Do not make the user wait for animation before accessing content.
- Do not add interaction merely for decoration.
- Preserve reduced-motion behavior.
- Keep browser history and native link behavior sensible for navigation.

## 15. Scope Boundaries

### In scope

- Responsive landing page.
- Static or mock content.
- Anchor navigation.
- Club story and achievements.
- Matchday and results presentation.
- Team showcase.
- Club journey.
- Community and Football for Peace.
- News cards.
- Sponsors and partners.
- Partnership CTA.
- Merchandise promotion.
- External Shop link.
- Social links.
- Footer.
- Accessibility basics.
- Responsive and interaction behavior.

### Out of scope

- Backend.
- Database.
- Authentication.
- User accounts.
- CMS.
- Live APIs.
- Admin dashboard.
- Real registration processing.
- Payment and checkout.
- Shopping cart.
- Inventory management.
- Full player profile routes.
- Live match centre.
- Full news platform.
- Sponsor management interface.

Do not quietly expand scope because a future feature would be useful. Record future ideas separately.

## 16. Testing Rules

### Before implementation is complete

Check:

- Desktop, laptop, tablet, and mobile layouts.
- Navigation and anchor links.
- Mobile menu open, close, `Escape`, and focus restoration.
- External Shop redirect.
- Buttons and links.
- Hover and focus states.
- Image loading and cropping.
- Sponsor logo alignment.
- Long text wrapping.
- Console errors and warnings.
- Horizontal overflow.
- Reduced-motion behavior.

### Accessibility checks

- Navigate the page with keyboard only.
- Inspect landmarks and headings with an accessibility tree or screen reader.
- Check all controls for accessible names.
- Check contrast over hero and community images.
- Check zoom at 200%.
- Check that content does not depend on colour, hover, or motion.

### SEO checks

- Verify title, description, canonical, and social metadata.
- Verify the page has one appropriate `h1`.
- Verify visible content matches structured data.
- Verify production URLs, social profiles, and Shop URL.
- Verify `robots.txt` and sitemap when deployed.

### Performance checks

- Run a Lighthouse or equivalent audit on mobile and desktop.
- Test on a throttled mobile connection.
- Inspect the network panel for oversized images, duplicate fonts, unused scripts, and failed resources.
- Check LCP, INP, CLS, and FCP where available.
- Confirm below-the-fold assets are lazy-loaded.

## 17. Change Management

Before changing an existing component:

1. Identify its current responsibility and consumers.
2. Check related data and configuration files.
3. Confirm the change belongs to the requested feature.
4. Make the smallest focused change.
5. Preserve unrelated user changes.
6. Run the narrowest useful validation immediately.
7. Check responsive and accessibility effects before widening the change.

Do not reformat unrelated files, rename public APIs without need, or replace working patterns for stylistic preference.

## 18. Git Rules

Use small, meaningful commits that describe one coherent change.

Examples:

```text
feat: initialize NUSC landing page
feat: build responsive navigation
feat: implement hero section
feat: add club introduction
feat: add achievements section
feat: implement matchday section
feat: add team showcase
feat: build club journey timeline
feat: add football for peace section
feat: implement news cards
feat: add sponsor showcase
feat: add commercial partnership section
feat: add shop navigation and redirect
feat: add merchandise section
feat: implement final CTA
feat: build responsive footer
style: refine mobile layouts
fix: resolve navigation overflow
fix: improve sponsor logo alignment
```

Do not create one giant commit for the complete landing page. Do not commit secrets, private asset licences, credentials, or unapproved personal information.

## 19. Definition of Done

A change or section is complete when:

- It satisfies the relevant documented requirement.
- It uses the correct reusable component boundary.
- Its content is verified or explicitly marked as mock.
- It preserves the football-first visual and content hierarchy.
- It works at required responsive widths.
- Its controls are keyboard accessible.
- Its images have correct dimensions and alternative text.
- Its links have valid destinations.
- It introduces no horizontal overflow or major console errors.
- It does not add out-of-scope backend or e-commerce behavior.
- Focused tests or checks have passed.
- Related documentation is updated when behavior, content, assets, or architecture changes.

## 20. Release Checklist

- [ ] Official NUSC spelling is confirmed.
- [ ] All production content is verified.
- [ ] No mock or pending content remains.
- [ ] Official assets and permissions are recorded.
- [ ] Shop URL is configured and tested.
- [ ] Social and contact links are verified.
- [ ] Hero and responsive images are optimised.
- [ ] Metadata, canonical URL, Open Graph, robots, and sitemap are configured.
- [ ] Keyboard and screen-reader checks pass.
- [ ] Mobile menu focus behavior passes.
- [ ] Reduced-motion behavior passes.
- [ ] Required responsive widths pass.
- [ ] Lighthouse or equivalent performance checks are reviewed.
- [ ] Console has no major errors.
- [ ] No horizontal overflow exists.
- [ ] README explains setup and project scope.
- [ ] Git history contains meaningful, focused commits.
