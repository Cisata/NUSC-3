# NUSC Responsive Specification

## 1. Purpose

This document defines how the Nagaland United Sports Club (NUSC) landing page must behave across mobile, tablet, laptop, desktop, and wide desktop viewports.

The page must preserve the NUSC story, navigation, content hierarchy, accessibility, and commercial paths at every supported width. Responsive behavior must not create horizontal scrolling, overlapping content, unreadable text, broken images, or inaccessible calls to action.

## 2. Supported Viewports

The required reference widths are:

| Name | Width | Primary use |
|---|---:|---|
| Mobile | 375px | Small phone portrait |
| Tablet | 768px | Tablet portrait or narrow landscape |
| Laptop | 1024px | Laptop or tablet landscape |
| Desktop | 1440px | Standard desktop |
| Wide desktop | 1440px+ | Large monitors |

Also test intermediate widths, especially around navigation and grid transitions. Do not design only for these exact widths.

## 3. Responsive Principles

1. Start with the smallest practical layout and enhance it for larger screens.
2. Preserve meaningful content order across all breakpoints.
3. Let content determine layout changes rather than relying only on device labels.
4. Use fluid widths with stable maximums and minimums.
5. Keep the page readable before adding decorative complexity.
6. Avoid horizontal scrolling at every width.
7. Never hide a primary action only because the viewport is narrow.
8. Use responsive assets and intentional image focal points.
9. Let headings, partner names, match data, and CTA labels wrap naturally.
10. Keep controls large enough for touch and keyboard use.
11. Keep commercial content visually subordinate to the main football story.
12. Test layout changes with real and mock content lengths.

## 4. Global Layout System

### Container

Use a shared page container for all major sections.

Recommended behavior:

- Full-width section backgrounds.
- Constrained inner content.
- Fluid horizontal padding.
- Stable maximum width on wide screens.
- No fixed width that causes overflow.

Example starting point:

```css
.container {
  width: min(100% - 2rem, 1200px);
  margin-inline: auto;
}

@media (min-width: 768px) {
  .container {
    width: min(100% - 4rem, 1200px);
  }
}
```

The final values must follow the design system.

### Section spacing

- Use consistent vertical spacing tokens.
- Reduce section padding on mobile without making sections feel cramped.
- Increase spacing gradually on desktop.
- Avoid large gaps that break the narrative between football sections.
- Keep the final CTA and footer visually distinct from the preceding section.

### Overflow

- Do not use viewport-width elements that exceed the viewport because of padding or borders.
- Avoid negative margins unless their behavior is tested at every breakpoint.
- Check long words, partner names, URLs, dates, and competition names.
- Use `min-width: 0` for flexible grid and flex children where necessary.
- Use `overflow-x: clip` only as a last defensive measure after fixing the source of overflow.

## 5. Breakpoint Strategy

Use the existing project or CSS framework breakpoints where available. If none exists, use content-driven breakpoints close to:

```text
small: 480px
medium: 768px
large: 1024px
wide: 1440px
```

These values are layout thresholds, not device assumptions.

### 375px

Priorities:

- Single-column content.
- Compact but readable header.
- Mobile menu.
- Full-width or stacked CTA buttons.
- Clear match information.
- One-column cards where two columns would become cramped.
- No clipped hero copy or oversized decorative elements.

### 768px

Priorities:

- Tablet navigation may remain collapsed if the header is crowded.
- Two-column content where reading order remains clear.
- Two-column player, news, achievement, or merchandise grids where cards remain readable.
- More generous image and section proportions.
- Match information may use a compact two-column arrangement.

### 1024px

Priorities:

- Desktop navigation may be enabled only if all labels and Join NUSC fit comfortably.
- Introduce wider two-column or multi-column section arrangements.
- Keep sponsor logos readable and evenly spaced.
- Verify sticky navigation against content and anchor offsets.

### 1440px and wider

Priorities:

- Use a readable maximum content width rather than stretching text across the viewport.
- Give hero photography and section compositions enough visual scale.
- Preserve intentional whitespace without creating disconnected gaps.
- Prevent excessive card widths that make content difficult to scan.
- Keep the footer and sponsor logos aligned to the same content grid.

## 6. Global Header and Navigation

### Desktop

At widths where the content fits comfortably:

- Show the NUSC logo.
- Show Home, About, Team, Matches, News, Community, Partners, and Shop.
- Keep Join NUSC visually prominent.
- Use a sticky or persistent header if approved.
- Show a clear active section state.

The navigation must not wrap unpredictably. If all items cannot fit, use the mobile menu at that width rather than allowing overlap.

### Mobile

- Show logo, menu toggle, and the primary Join NUSC action where space permits.
- Move full navigation into an accessible hamburger menu.
- Keep Shop easy to locate.
- Keep the menu within the viewport.
- Manage focus when opening and closing the menu.
- Close the menu after an in-page navigation.

### Header stability

- Keep header height stable between states where possible.
- Add scroll offset for sticky headers.
- Do not let a header background change reduce contrast.
- Do not resize surrounding content when active states appear.

## 7. Hero Responsive Behavior

### Mobile

- Use an intentional mobile image crop or a mobile-specific asset.
- Keep the main subject and text-safe area visible.
- Stack or wrap CTA buttons without clipping.
- Use a readable heading size appropriate for the viewport, not a desktop heading scaled down until it breaks.
- Keep the supporting statement concise.
- Place optional match highlights below the primary identity and actions or omit them if space is limited.

### Tablet

- Use a wider crop with enough room for the club name and message.
- Keep the CTA group aligned without forcing small text.
- Confirm the image overlay maintains contrast.

### Desktop

- Use the approved wide hero photograph.
- Preserve the focal point across 1024px, 1440px, and wide desktop crops.
- Keep headline, supporting copy, and CTA group in a stable text-safe region.
- Avoid excessive hero height that pushes the main football content too far below the first viewport.

### Hero requirements

- The full club name remains visible near the beginning of the page.
- The hero image does not shift layout as it loads.
- Essential copy is not embedded only in the image.
- Primary and secondary actions remain accessible at all widths.

## 8. Section-by-Section Layout Rules

### About NUSC

- Mobile: stack copy and image.
- Tablet: use a balanced two-column layout if both columns remain readable.
- Desktop: use a strong text/media composition with comfortable whitespace.
- Keep key facts from becoming a dense horizontal strip on mobile.

### Achievements

- Mobile: one card per row or a compact single-column list.
- Tablet: two-column grid where years and results remain prominent.
- Desktop: two to four highlights in a visual grid or horizontal arrangement.
- Keep cards equal or intentionally varied; do not allow one long description to break the grid.

### Matchday

- Mobile: stack Next Match and Last Result blocks; keep team names and score easy to scan.
- Tablet: use a two-column layout if the match data remains clear.
- Desktop: give the match section strong visual prominence with related result content.
- Ensure venue, competition, date, and status wrap without overlap.
- Do not rely on crest size alone to identify teams.

### Team

- Mobile: one card per row or two compact columns only when names and positions fit.
- Tablet: two or three columns depending on card width.
- Desktop: four or more cards only if images, names, and positions remain legible.
- Keep image aspect ratios stable.
- Do not hide player names or positions behind hover.

### Our Journey

- Mobile: vertical timeline with clear year and event order.
- Tablet: vertical or compact two-sided timeline only if the reading order remains obvious.
- Desktop: visual timeline with markers and imagery.
- Do not require horizontal dragging or swiping to read the history.

### Community / Football for Peace

- Mobile: stack feature image, heading, copy, and CTA.
- Tablet: use a two-column feature layout where the copy remains readable.
- Desktop: use a visually strong feature composition with optional supporting gallery.
- Keep community imagery meaningful at every crop.
- Do not place participant names or essential context only in image captions.

### News

- Mobile: one news card per row.
- Tablet: two cards per row or a documented alternative.
- Desktop: three cards in a consistent grid.
- Keep category, headline, date, and image visible without hover.
- Preserve a consistent crop ratio.
- Long headlines must wrap instead of increasing the page width.

### Sponsors and Partners

- Mobile: use a compact one- or two-column logo grid with generous spacing.
- Tablet: use two to four columns depending on logo proportions.
- Desktop: use a tiered or evenly spaced logo arrangement.
- Preserve aspect ratios and minimum readable sizes.
- Do not force all logos into identical boxes if that harms legibility.
- Keep partner names available as text or accessible labels.

### Merchandise / Shop

- Mobile: use one feature image or a compact product arrangement with a prominent Shop CTA.
- Tablet: use a two-column promotional layout where product imagery remains clear.
- Desktop: use a supporter-focused visual composition, not a dense product catalogue.
- Do not introduce cart or checkout controls at any breakpoint.
- Keep Shop CTA easy to tap and clearly external.

### Partnership CTA

- Mobile: stack the Football, Community, Visibility, and Partnership pillars.
- Tablet: use a two-by-two grid if text remains readable.
- Desktop: use a four-pillar arrangement or a clear horizontal composition.
- Keep the CTA visually clear but less dominant than the club identity and match content.
- Do not allow unsupported metrics or claims to become more prominent at desktop widths.

### Final CTA

- Mobile: stack copy and actions, with clear spacing between buttons.
- Tablet: align copy and CTA group when it remains balanced.
- Desktop: use a strong closing composition without turning the section into an advertisement.
- Keep Follow NUSC and Join Us available at every width.

### Footer

- Mobile: stack Club, Quick Links, Contact, Social, and Legal blocks.
- Tablet: use two-column or grouped layouts.
- Desktop: use a multi-column footer aligned to the main container.
- Ensure contact information and links wrap without overflow.
- Keep the Shop link present in the footer.

## 9. Typography and Wrapping

- Use the approved type system and weights.
- Do not scale type purely with viewport width.
- Use responsive heading sizes with explicit minimum and maximum values where needed.
- Keep letter spacing at the design-system value; do not compress text to force a fit.
- Allow headings, partner names, match details, and CTA labels to wrap.
- Do not truncate meaningful content without an accessible alternative.
- Test long names, long competition titles, and multi-line news headlines.
- Keep body text readable at 375px and 200% zoom.
- Ensure text over imagery remains readable at every crop.

## 10. Buttons and Touch Targets

- Use stable button dimensions so hover or focus does not shift layout.
- Keep controls large enough for touch; approximately 44px by 44px is a useful target for primary mobile controls.
- Stack primary and secondary CTA buttons when side-by-side placement becomes cramped.
- Keep sufficient spacing between adjacent controls.
- Do not allow labels to overflow their buttons.
- Use links for navigation and buttons for interface state changes.
- Preserve visible focus states at all widths.

## 11. Images and Media

### Responsive image rules

- Use `srcset` and `sizes` for large photography.
- Provide mobile and desktop hero variants where crops differ substantially.
- Lazy-load below-the-fold images.
- Do not lazy-load the primary above-the-fold hero image when it is the LCP candidate.
- Set intrinsic dimensions or aspect ratios to prevent layout shift.
- Use documented focal points for team, player, community, news, and merchandise images.
- Keep logos in their correct aspect ratios.

### Crop rules

- Keep faces, the ball, crest, and key action away from crop edges.
- Check hero overlays against every crop.
- Do not crop sponsor marks or essential image context unintentionally.
- Use a neutral fallback when a crest or image is unavailable.

## 12. Grid and Flex Rules

- Use CSS Grid for predictable card collections and page columns.
- Use Flexbox for inline actions, navigation groups, and simple alignment.
- Use `minmax()` and flexible tracks rather than fixed card widths that overflow.
- Use `min-width: 0` on flexible children containing long text.
- Define consistent gaps that reduce at smaller widths.
- Do not use fixed heights for text-heavy cards unless overflow behavior is intentional and tested.
- Keep repeated cards visually stable while allowing text to wrap.

Example:

```css
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1200px) {
  .card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
```

## 13. Interaction and Motion Across Viewports

- Hover states must have touch-safe equivalents.
- Focus states must remain visible after scrolling.
- Mobile menu must be keyboard accessible.
- Smooth scrolling should be disabled for users who prefer reduced motion.
- Scroll reveals must not hide content if JavaScript fails.
- Avoid parallax and large continuous motion on mobile.
- Do not animate layout properties that cause reflow in repeated cards.
- Check that motion does not create horizontal overflow.

## 14. Accessibility Requirements

At every supported width:

- Use semantic HTML and a logical heading hierarchy.
- Provide one page-level `h1`.
- Include a skip link.
- Keep all links and buttons keyboard accessible.
- Make the mobile menu expose `aria-expanded` and `aria-controls`.
- Manage focus when the mobile menu opens and closes.
- Use meaningful alt text for informative images and empty alt text for decorative images.
- Do not communicate status, category, partner tier, or selected state through colour alone.
- Maintain visible focus and sufficient contrast.
- Ensure content remains usable at 200% zoom.
- Respect `prefers-reduced-motion`.

## 15. Performance Requirements

- Keep the initial mobile payload focused on above-the-fold content.
- Optimise hero and large photography in AVIF or WebP where appropriate.
- Load only needed font weights.
- Avoid duplicate desktop and mobile content in the DOM where possible.
- Avoid heavy social embeds and unnecessary third-party scripts.
- Use `IntersectionObserver` for optional reveal behavior.
- Do not block rendering behind a loading screen.
- Check layout shift from images, fonts, logos, and sticky navigation.
- Test with mobile network throttling.

Target reference metrics:

- LCP: 2.5 seconds or better.
- INP: 200 milliseconds or better.
- CLS: 0.1 or lower.
- FCP: 1.8 seconds or better where measurable.

## 16. Content Stress Tests

Test layouts with:

- The longest approved club name.
- Long player names.
- Long opponent and competition names.
- Multi-line venue names.
- Long sponsor names.
- Three-line news headlines.
- Missing optional image or logo.
- Mock data labels during development.
- External Shop labels and new-tab indicators.
- Empty or unavailable match status.

The layout must fail gracefully without clipping, overlap, or horizontal scrolling.

## 17. Responsive QA Checklist

### 375px mobile

- [ ] Header and menu toggle fit without overflow.
- [ ] Mobile menu opens, closes, and restores focus.
- [ ] Hero copy and buttons fit without clipping.
- [ ] Match information is readable.
- [ ] Player and news cards remain understandable.
- [ ] Sponsor logos remain legible.
- [ ] Shop and Join NUSC actions are available.
- [ ] Footer content wraps correctly.

### 768px tablet

- [ ] Navigation transition is intentional.
- [ ] Two-column sections remain readable.
- [ ] Card grids do not become cramped.
- [ ] Hero crop and overlay remain effective.
- [ ] Match, sponsor, and merchandise layouts remain balanced.

### 1024px laptop

- [ ] Header does not wrap or collide with the primary CTA.
- [ ] Desktop or mobile navigation choice is intentional.
- [ ] Two-column and multi-column layouts have appropriate gaps.
- [ ] Timeline and gallery behavior remain understandable.
- [ ] Sticky header does not obscure anchor content.

### 1440px and wider

- [ ] Content remains within a readable maximum width.
- [ ] Sections do not become excessively sparse.
- [ ] Hero image and text composition remain intentional.
- [ ] Cards do not become too wide to scan.
- [ ] Footer and partner logos align with the page container.

### All widths

- [ ] No horizontal scrolling.
- [ ] No overlapping content.
- [ ] No broken image crops.
- [ ] No unreadable text.
- [ ] No inaccessible CTA.
- [ ] No major console errors.
- [ ] Focus states remain visible.
- [ ] Reduced-motion behavior works.
- [ ] Images do not create layout shift.

## 18. Definition of Done

The responsive implementation is complete when:

- All required sections adapt cleanly across the reference widths.
- The page narrative and content order remain meaningful on mobile.
- Navigation, Shop, Join NUSC, social, and contact paths remain available.
- No horizontal overflow, overlap, clipping, or unreadable text exists.
- Images, cards, sponsor logos, and controls have stable responsive dimensions.
- Keyboard, focus, reduced-motion, and zoom behavior have been checked.
- Responsive image loading and performance targets have been reviewed.
- Content stress tests pass with the longest realistic values.
- The page works at intermediate widths, not only the listed reference widths.
