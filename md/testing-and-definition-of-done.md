# NUSC Testing and Definition of Done

## 1. Purpose

This document defines how to verify the Nagaland United Sports Club (NUSC) landing page and when the implementation can be considered complete.

The page is a front-end-only, responsive landing page with static or mock data. Testing must confirm that the page is visually coherent, usable, accessible, responsive, performant, truthful, and within scope.

## 2. Quality Gates

A release candidate must satisfy all of these gates:

1. Required page sections exist in the approved order.
2. Primary navigation and anchor links work.
3. Mobile navigation works with keyboard and touch.
4. Shop navigation and CTAs reach the configured external URL.
5. No horizontal overflow or major layout break exists.
6. Core interactions have visible hover, focus, and active states.
7. Accessibility basics pass manual and automated checks.
8. Images, logos, content, and contact details are approved or clearly marked mock.
9. No major console errors or failed critical requests remain.
10. SEO metadata and production crawl files are configured before launch.
11. Performance has been reviewed on mobile and desktop conditions.
12. The implementation contains no out-of-scope backend or e-commerce behavior.

## 3. Test Environments

Test at the required viewport widths:

| Environment | Width | Required checks |
|---|---:|---|
| Small mobile | 375px | Full page, menu, wrapping, touch targets |
| Tablet | 768px | Grid transitions, navigation, imagery |
| Laptop | 1024px | Header fit, two-column layouts, anchors |
| Desktop | 1440px | Full composition, spacing, content width |
| Wide desktop | 1440px+ | Maximum width, whitespace, hero crop |

Also test intermediate widths around layout transitions and browser zoom at 200%.

Use at least:

- A Chromium-based browser.
- A second modern browser where available.
- A real or emulated mobile viewport.
- Keyboard-only navigation.
- An accessibility tree or screen reader check.
- A throttled mobile network profile.

## 4. Test Data Rules

Before testing, identify the state of every visible content item:

```text
verified   Approved for official publication.
mock       Development-only content.
pending    Awaiting approval; not production-ready.
archived   No longer current.
```

Test that:

- Mock data is explicit and replaceable.
- Pending content cannot ship as official content.
- Unverified players, sponsors, achievements, match data, and contact details are not presented as facts.
- Mock content is not included in production metadata or structured data.
- The official NUSC spelling is consistent.

## 5. Functional Test Plan

### 5.1 Header and navigation

- [ ] Logo links to the page top.
- [ ] Home reaches `#home`.
- [ ] About reaches `#about`.
- [ ] Team reaches `#team`.
- [ ] Matches reaches `#matches`.
- [ ] News reaches `#news`.
- [ ] Community reaches `#community`.
- [ ] Partners reaches `#partners`.
- [ ] Shop uses the central official Shop URL.
- [ ] Join NUSC reaches a valid contact, joining, or page destination.
- [ ] Active section state updates as the user scrolls, if implemented.
- [ ] Sticky header does not hide anchor headings.

### 5.2 Mobile navigation

- [ ] Menu toggle is visible at mobile widths.
- [ ] Menu opens on tap and keyboard activation.
- [ ] Menu closes through its close control.
- [ ] Menu closes with `Escape`.
- [ ] Menu closes after selecting an in-page link.
- [ ] Focus moves into the menu when opened.
- [ ] Focus returns to the toggle when closed.
- [ ] Hidden menu links are not keyboard-focusable.
- [ ] Shop and Join NUSC remain available.
- [ ] The menu does not create page overflow.

### 5.3 Hero

- [ ] Full NUSC name is visible.
- [ ] `Rise Together` message is visible.
- [ ] Supporting copy is present and approved.
- [ ] Explore NUSC reaches the intended section.
- [ ] View Matches reaches the matchday section.
- [ ] Optional Shop CTA uses the central URL.
- [ ] Hero image loads and has an intentional crop.
- [ ] Text remains readable over the image.

### 5.4 About and achievements

- [ ] About section has a descriptive heading.
- [ ] About copy is concise and verified.
- [ ] Discover Our Story has a valid destination.
- [ ] Achievement cards show verified year, competition, and result.
- [ ] Missing achievements do not create empty cards.
- [ ] Mock achievements are not presented as official.

### 5.5 Matchday

- [ ] Next Match shows NUSC, opponent, date, competition, venue, and status where available.
- [ ] Last Result shows teams and score.
- [ ] Dates are understandable and machine-readable where implemented.
- [ ] Mock match data is clearly controlled by the data layer.
- [ ] View Match is shown only when a real destination exists.
- [ ] Missing crests use a graceful fallback.
- [ ] No live-score claim or unsupported match status appears.

### 5.6 Team and journey

- [ ] Team heading and player cards appear.
- [ ] Player name and position are visible without hover.
- [ ] Player information is approved or explicitly mock.
- [ ] Meet the Team reaches a real destination.
- [ ] Journey milestones appear in the intended order.
- [ ] Journey dates and event names are verified or explicitly mock.
- [ ] Timeline remains understandable without animation or dragging.

### 5.7 Community

- [ ] Football for Peace heading appears.
- [ ] Community message and supporting copy appear.
- [ ] Community imagery is approved and has appropriate consent.
- [ ] Our Community reaches valid content.
- [ ] Gallery controls work if a gallery is implemented.
- [ ] Community claims do not exceed verified evidence.

### 5.8 News

- [ ] Latest three stories are displayed.
- [ ] Each card has image, category, headline, and date.
- [ ] Excerpts appear only where useful.
- [ ] News links work where destinations exist.
- [ ] View All News is not rendered as a dead link.
- [ ] Mock news is not included in production metadata.

### 5.9 Partners

- [ ] Approved partner logos appear.
- [ ] Partner names and tiers are accurate.
- [ ] Logos keep their aspect ratios.
- [ ] Partner links work where provided.
- [ ] Become a Partner reaches a valid destination.
- [ ] No fabricated partner or commercial claim appears.

### 5.10 Merchandise and Shop

- [ ] Shop appears in the main navigation.
- [ ] Merchandise section appears in the page body.
- [ ] Product visuals are approved or marked mock.
- [ ] Visit Official Shop uses the same central URL as navigation.
- [ ] External link behavior is clear.
- [ ] No cart, checkout, payment, inventory, account, or product-database behavior exists.
- [ ] No unverified product price, stock, size, or delivery promise appears.

### 5.11 Final CTA and footer

- [ ] Be Part of the Journey appears.
- [ ] Follow NUSC reaches an approved social profile.
- [ ] Join Us reaches a valid contact or joining destination.
- [ ] Partner With NUSC works if included.
- [ ] Footer contains club, quick links, contact, social, legal, and copyright content.
- [ ] Contact details are official.
- [ ] Privacy and Terms links are valid or clearly marked as pending before release.

## 6. Responsive Test Plan

Run the complete functional pass at 375px, 768px, 1024px, and 1440px or wider.

### At 375px

- [ ] Header fits without overflow.
- [ ] Mobile menu works.
- [ ] Hero heading and supporting copy wrap cleanly.
- [ ] CTAs stack or wrap without clipping.
- [ ] Match information remains scannable.
- [ ] Player, achievement, news, and merchandise cards fit.
- [ ] Sponsor logos remain legible.
- [ ] Footer columns stack correctly.

### At 768px

- [ ] Navigation transition is intentional.
- [ ] Two-column layouts remain readable.
- [ ] Card grids do not become cramped.
- [ ] Images use suitable crops.
- [ ] Match and partner sections remain balanced.

### At 1024px

- [ ] Header labels and Join NUSC CTA do not collide.
- [ ] Desktop or mobile navigation choice is intentional.
- [ ] Section columns have adequate spacing.
- [ ] Timeline and gallery behavior remain understandable.

### At 1440px and wider

- [ ] Content is constrained to a readable maximum width.
- [ ] Hero composition remains intentional.
- [ ] Cards do not become excessively wide.
- [ ] Sections do not become disconnected by excessive whitespace.
- [ ] Footer and partner logos align with the main container.

### All widths

- [ ] No horizontal scrollbar.
- [ ] No overlapping text, controls, or images.
- [ ] No clipped long headings or labels.
- [ ] No broken image requests.
- [ ] No inaccessible CTA.
- [ ] No layout shift that changes the reading position.

## 7. Accessibility Test Plan

### Structure

- [ ] Skip link exists and reaches `#main-content`.
- [ ] One appropriate page-level `h1` exists.
- [ ] Heading levels are logical.
- [ ] `header`, `nav`, `main`, `section`, and `footer` landmarks are meaningful.
- [ ] Section headings are associated with their sections.

### Keyboard

- [ ] Every link and button is reachable by keyboard.
- [ ] Tab order follows the reading and interaction order.
- [ ] Focus is always visible.
- [ ] Mobile menu opens and closes correctly.
- [ ] Any gallery, timeline, accordion, or lightbox is keyboard usable.
- [ ] No keyboard trap exists.

### Semantics and names

- [ ] Links are used for navigation.
- [ ] Buttons are used for interface state changes.
- [ ] Controls have accessible names.
- [ ] External Shop behavior is understandable.
- [ ] Active navigation state is not communicated by colour alone.

### Images and media

- [ ] Informative images have meaningful alt text.
- [ ] Decorative images use empty alt text.
- [ ] Logo links have useful accessible names.
- [ ] Sponsor, player, match, community, and merchandise meaning is available as text.
- [ ] Video has captions or a text alternative if included.

### Visual access

- [ ] Text and controls meet contrast requirements.
- [ ] Text remains usable at 200% zoom.
- [ ] Content does not depend on hover.
- [ ] Reduced-motion preference is respected.
- [ ] Essential content is visible if JavaScript or an animation observer fails.

## 8. Interaction and Animation Test Plan

- [ ] Smooth scrolling reaches the correct section.
- [ ] Sticky header remains usable.
- [ ] Active section state is accurate if implemented.
- [ ] Buttons have rest, hover, focus-visible, active, and disabled states where relevant.
- [ ] Cards do not change dimensions unexpectedly on hover.
- [ ] Touch users can access behavior that hover users see.
- [ ] Scroll reveals do not hide content permanently.
- [ ] Gallery opens, closes, and restores focus if implemented.
- [ ] Timeline controls are accessible if interactive.
- [ ] Accordions expose expanded state if used.
- [ ] `prefers-reduced-motion: reduce` disables or minimizes non-essential motion.
- [ ] No animation delays the first meaningful content.

## 9. SEO and Content Test Plan

### Metadata

- [ ] Page title is present and truthful.
- [ ] Meta description is present and truthful.
- [ ] Canonical URL is configured for production.
- [ ] Open Graph metadata is present.
- [ ] Social preview image is approved.
- [ ] `lang` attribute is correct.

### Content

- [ ] Full NUSC name appears near the beginning of the page.
- [ ] Location is verified and consistently written.
- [ ] Section headings describe their content.
- [ ] Dates use appropriate machine-readable markup where implemented.
- [ ] No hidden keyword text exists.
- [ ] No invented achievements, sponsors, players, match data, or audience claims exist.

### Crawl and structured data

- [ ] `robots.txt` is correct for production.
- [ ] `sitemap.xml` contains the canonical public URL.
- [ ] Structured data matches visible, verified content.
- [ ] Mock data is excluded from metadata and structured data.
- [ ] No important CSS, JavaScript, or images are accidentally blocked.

## 10. Performance Test Plan

### Image and asset checks

- [ ] Hero image is correctly prioritised if it is the LCP candidate.
- [ ] Below-the-fold images are lazy-loaded.
- [ ] Responsive `srcset` and `sizes` are used where appropriate.
- [ ] Image dimensions or aspect ratios prevent layout shift.
- [ ] Images are compressed and use appropriate web formats.
- [ ] Logos do not load multiple unnecessary variants.
- [ ] Fonts include only required families and weights.

### Runtime checks

- [ ] No major console errors or warnings.
- [ ] No failed critical image, font, or script requests.
- [ ] No expensive continuous scroll handler causes jank.
- [ ] Optional reveals use efficient observation.
- [ ] No blocking loading screen delays content.
- [ ] Unnecessary third-party scripts and embeds are absent.

### Reference targets

Use Lighthouse or an equivalent tool on mobile and desktop.

- LCP: 2.5 seconds or better.
- INP: 200 milliseconds or better.
- CLS: 0.1 or lower.
- FCP: 1.8 seconds or better where measurable.

Record any target that cannot be met and the reason before release.

## 11. Code Quality and Architecture Checks

- [ ] Repeated UI uses reusable components.
- [ ] Content data is separate from presentation.
- [ ] Shared types are defined and used.
- [ ] Shop URL is centralized.
- [ ] Asset paths and metadata follow the asset specification.
- [ ] Placeholder state is explicit.
- [ ] No unnecessary duplicate styling system or dependency exists.
- [ ] No unrelated files were changed without reason.
- [ ] No secrets, credentials, private licences, or personal data are committed.
- [ ] Components have clear responsibilities.
- [ ] README explains setup, scope, and available checks.

## 12. Test Execution Record

For each release candidate, record:

```text
Date:
Build or commit:
Tester:
Browser(s):
Viewport(s):
Accessibility tool or screen reader:
Performance tool:
Known limitations:
Release decision:
```

Use one of:

```text
PASS       Ready for the next gate.
BLOCKED    Cannot continue until a dependency is resolved.
FAIL       A requirement is not met and must be repaired.
WAIVED     Explicitly accepted risk with an owner and reason.
```

Do not mark a test `PASS` when it was skipped because the result was inconvenient. Record skipped checks as a limitation.

## 13. Defect Severity

### Blocker

Prevents release or a core user journey:

- Page fails to load.
- Navigation is unusable.
- Mobile menu traps focus or cannot close.
- Shop path is broken when Shop is a required launch action.
- Major content is missing.
- Horizontal overflow makes the page unusable.
- Unverified content is presented as official.

### High

Significant accessibility, responsive, content, or functional defect:

- CTA reaches the wrong destination.
- Important content is hidden or unreadable.
- Keyboard users cannot complete a core task.
- Hero or match information breaks at a required width.
- Critical image or logo is missing.
- Major console or runtime error exists.

### Medium

Noticeable but non-blocking issue:

- Card alignment problem at an intermediate width.
- Inconsistent focus or hover state.
- Minor layout shift.
- Non-critical image optimization issue.
- Incorrect but non-critical spacing.

### Low

Polish issue with no meaningful task impact:

- Small visual inconsistency.
- Minor copy or spacing refinement.
- Non-essential animation timing issue.

## 14. Definition of Done

The NUSC landing page is done when all of the following are true:

### Content and identity

- [ ] NUSC is clearly introduced.
- [ ] Official naming is consistent.
- [ ] Hero communicates the club identity and ambition.
- [ ] About content is present and factual.
- [ ] Achievements are represented accurately.
- [ ] Matchday information is present or explicitly marked mock.
- [ ] Team showcase exists with approved or clearly marked data.
- [ ] Club journey exists.
- [ ] Football for Peace/community section exists.
- [ ] News section exists.
- [ ] Sponsor/partner section exists with approved content.
- [ ] Merchandise/supporter section exists.
- [ ] Commercial partnership CTA exists.
- [ ] Final CTA exists.
- [ ] Footer is complete.

### Functionality

- [ ] Navigation works.
- [ ] Anchor links work.
- [ ] Mobile menu works.
- [ ] Interactive states work.
- [ ] External Shop redirect works through the central configuration.
- [ ] Social and contact destinations are valid.
- [ ] No fake backend workflow is presented.

### Responsive behavior

- [ ] 375px passes.
- [ ] 768px passes.
- [ ] 1024px passes.
- [ ] 1440px and wider passes.
- [ ] Intermediate widths have been checked.
- [ ] No horizontal overflow exists.
- [ ] No broken layout, overlap, clipping, or unreadable text exists.

### Accessibility

- [ ] Semantic HTML and heading hierarchy are correct.
- [ ] Meaningful alt text is present.
- [ ] Correct link and button elements are used.
- [ ] Focus states are visible.
- [ ] Contrast is acceptable.
- [ ] Keyboard navigation works.
- [ ] Mobile menu is accessible.
- [ ] Interactive elements are accessible.
- [ ] Reduced-motion behavior works.

### SEO and performance

- [ ] Metadata and canonical URL are configured.
- [ ] Social preview is configured.
- [ ] Crawl files are ready for production.
- [ ] Structured data, if used, matches visible verified content.
- [ ] Images are optimized and dimensioned.
- [ ] No major console errors exist.
- [ ] Mobile and desktop performance reviews are complete.

### Engineering quality

- [ ] Code is organized and reusable.
- [ ] Data is separate from presentation where practical.
- [ ] README explains the project.
- [ ] Documentation is updated for significant behavior or architecture changes.
- [ ] Git history contains meaningful focused commits.
- [ ] No unrelated changes or secrets are included.

## 15. Release Decision

Release only when:

- No Blocker defects remain.
- No High defects remain without explicit written risk acceptance.
- All required Definition of Done checkboxes pass.
- Any Medium or Low issues have owners or are intentionally deferred.
- Official content, assets, URLs, and approvals are complete.
- The final build has been tested at the required viewports and with keyboard access.

The release decision must identify any remaining risk rather than treating an untested area as complete.
