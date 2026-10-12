# NUSC Interaction and Animation Specification

## 1. Purpose

This document defines the interaction behavior and animation rules for the Nagaland United Sports Club (NUSC) responsive landing page.

The experience should feel competitive, energetic, premium, and connected to the local community. Interaction should help visitors understand the club, move through the story, find current football information, and take supporter or partner actions.

Animation is supportive, not the main event. It must never hide content, block a task, reduce accessibility, or damage performance.

## 2. Scope

### Included interactions

- Sticky or persistent navigation.
- Active section navigation state.
- In-page anchor scrolling.
- Responsive mobile menu.
- Hover and focus states.
- Button and link transitions.
- Card hover states.
- Scroll-based section reveals.
- Optional gallery interactions.
- Optional timeline interaction.
- Accessible accordions if required.
- External Shop redirect.

### Excluded interactions

- Backend requests.
- Live score updates.
- User accounts.
- Registration submission.
- Shopping cart.
- Checkout or payment.
- Inventory state.
- CMS editing.
- Full player profile navigation unless separately implemented.

## 3. Interaction Principles

1. Every interactive behavior must have a keyboard-accessible equivalent.
2. Use native links and buttons whenever possible.
3. Use animation to clarify hierarchy, state, direction, or feedback.
4. Keep the football story and content readable while motion is occurring.
5. Do not hide essential content behind hover or animation.
6. Respect `prefers-reduced-motion: reduce`.
7. Prefer short, transform- and opacity-based motion.
8. Avoid competing animations in the same viewport.
9. Keep interaction behavior consistent across similar components.
10. Keep the page usable on touch screens without hover.
11. Do not make users wait for an animation before completing an action.
12. Do not use motion to imply live data or activity that does not exist.

## 4. Interaction Map

| Area | Interaction | User outcome |
|---|---|---|
| Header logo | Link to page top | Return to NUSC home |
| Primary navigation | Anchor link | Move to a page section |
| Shop navigation | External link | Open the configured official Shop |
| Join NUSC | Anchor or approved contact link | Find joining/contact path |
| Mobile menu toggle | Button | Open or close navigation |
| Hero CTA | Anchor link | Explore the club or matches |
| Match CTA | Anchor or approved route | View available match information |
| Team CTA | Anchor or approved route | View team content |
| News card | Link when destination exists | Read the selected story |
| Partner CTA | Anchor/contact link | Explore partnership contact path |
| Merchandise CTA | External link | Visit official Shop |
| Social icon | External link | Visit approved NUSC profile |
| Gallery control | Button | Change or enlarge image |
| Timeline control | Button, if used | Reveal or focus a milestone |
| Accordion control | Button, if used | Expand or collapse content |

## 5. Navigation Behavior

### 5.1 Sticky header

The header may remain visually persistent while scrolling.

Requirements:

- Keep the header height stable so content does not jump.
- Use a subtle style change after scrolling if needed, such as background opacity or shadow.
- Do not reduce contrast when the header changes state.
- Ensure anchor targets include enough scroll offset that the header does not cover the heading.
- Keep the current section state understandable without relying on colour alone.
- Do not allow the header to cover essential content on mobile.

### 5.2 Anchor navigation

- Use stable IDs: `home`, `about`, `matches`, `team`, `journey`, `community`, `news`, `partners`, `shop`, `partnership`, and `join` where applicable.
- Use native links such as `<a href="#matches">View Matches</a>`.
- Enable smooth scrolling for users who have not requested reduced motion.
- Move focus to the target heading or section when appropriate for the chosen navigation pattern.
- Preserve a clear reading order after scrolling.
- Close the mobile menu after an in-page navigation.

Recommended CSS behavior:

```css
html {
  scroll-behavior: smooth;
}

[id] {
  scroll-margin-top: var(--header-offset);
}
```

If JavaScript is used to manage focus, avoid stealing focus from users who did not activate an in-page navigation link.

### 5.3 Active section state

Use `IntersectionObserver` or an equivalent efficient mechanism to identify the visible section.

Requirements:

- Observe only the sections needed for navigation state.
- Apply one clear active state at a time where practical.
- Expose active state with more than colour, such as an underline, marker, weight, or `aria-current="location"` where appropriate.
- Do not update state on every scroll event with expensive synchronous work.
- Do not mark the external Shop link as an active in-page section unless the design explicitly supports that state.

## 6. Mobile Menu

### Closed state

- The menu panel is not visible or focusable.
- The toggle has an accessible name such as `Open menu`.
- The toggle exposes `aria-expanded="false"`.

### Open state

- The toggle exposes `aria-expanded="true"`.
- The menu has a clear accessible relationship through `aria-controls`.
- Move focus to the first useful menu item or menu close control.
- Keep navigation and Join NUSC available.
- Keep Shop easy to find.
- Prevent interaction with hidden content behind an overlay when that content is not intended to remain available.
- Allow closing with the close control, `Escape`, a menu link, or an appropriate outside action.

### Closing state

- Restore focus to the menu toggle.
- Remove focusability from the hidden panel.
- Return page scrolling to its prior state.
- Do not leave an invisible overlay intercepting pointer or keyboard events.

### Mobile menu animation

Use a short opacity and transform transition. Avoid large horizontal movement that can make the page feel disconnected or cause overflow.

```css
.mobile-menu {
  opacity: 0;
  transform: translateY(-0.5rem);
  pointer-events: none;
  transition: opacity 180ms ease, transform 180ms ease;
}

.mobile-menu[data-open="true"] {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
```

The hidden state must also be removed from the accessibility tree using an appropriate implementation such as `hidden`, `display: none`, or an equivalent state strategy. Do not rely on opacity alone.

## 7. Hero Interactions

The hero is the primary identity area and should remain visually calm enough for the headline and actions to be understood.

Allowed behavior:

- Text and CTA reveal on initial page load.
- Subtle image treatment or overlay transition.
- CTA hover and focus states.
- Optional verified match highlight link.

Rules:

- Do not use aggressive parallax that harms mobile performance or readability.
- Do not animate the hero text continuously.
- Do not delay the primary CTA until an animation completes.
- The hero image must remain readable and must not shift layout as it loads.
- The primary LCP image must not be delayed by decorative animation.

## 8. Button and Link States

Every button or link should have defined states:

```text
Rest
Hover
Focus-visible
Active / pressed
Disabled, only when genuinely required
Visited, where relevant for normal links
```

Requirements:

- Use a visible focus indicator with sufficient contrast.
- Keep the hit area stable across states.
- Do not change font size or padding on hover in a way that shifts surrounding content.
- Prefer colour, border, opacity, or transform changes that do not resize the control.
- Keep labels readable at all responsive widths.
- Do not make disabled-looking controls that are still clickable.
- Use an anchor for the external Shop destination, even when it looks like a button.

Suggested motion:

```css
.button {
  transition: background-color 160ms ease, color 160ms ease,
    border-color 160ms ease, transform 160ms ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button:active {
  transform: translateY(0);
}
```

Use motion sparingly. A button does not need a separate effect for every visual property.

## 9. Card Interactions

Applies to player, match, result, achievement, news, partner, community, and merchandise cards.

### Non-clickable cards

- Use hover only as a visual enhancement.
- Do not make a whole card appear clickable if it has no action.
- Keep the card readable without interaction.

### Clickable cards

- Use a real link or a clearly labelled button.
- Make the destination or action clear.
- Provide hover, focus-visible, and active states.
- Keep the entire intended target area usable on touch devices.
- Do not place nested interactive controls inside a link unless the structure is carefully designed and valid.

### Recommended card motion

- Slight image scale or overlay change on hover.
- Small elevation or border change.
- No large movement, rotation, or bouncing.
- No motion that changes the card dimensions.
- No hover-only content that is required to understand the card.

Example:

```css
.card__image {
  transition: transform 280ms ease;
}

.card:hover .card__image,
.card:focus-within .card__image {
  transform: scale(1.03);
}
```

Use `overflow: hidden` only when it does not clip focus rings or meaningful content.

## 10. Scroll-Triggered Reveals

Scroll reveals may be used to introduce sections, cards, and timeline items as they enter the viewport.

Recommended behavior:

- Use a short fade and small vertical movement.
- Trigger once per element or once per section.
- Keep the initial hidden distance small.
- Do not hide content from users when JavaScript is unavailable.
- Use `IntersectionObserver` rather than continuous scroll calculations.
- Avoid revealing every card at exactly the same time when a short stagger improves scanning.
- Keep stagger delays short and bounded.

Example pattern:

```css
.reveal {
  opacity: 0;
  transform: translateY(1rem);
  transition: opacity 420ms ease, transform 420ms ease;
}

.reveal[data-visible="true"] {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal,
  .reveal[data-visible="true"] {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

Important: content must default to visible when JavaScript is disabled or the observer is unavailable. Do not create a blank page because a reveal script failed.

## 11. Timeline Interaction

The Our Journey timeline may be static or interactive.

### Preferred default

Use a readable static timeline when all milestones fit comfortably. This is the most accessible and robust option.

### If interactive

- Each milestone control must be a button or link with a meaningful name.
- The selected milestone must have a clear visual and programmatic state.
- Keyboard users must be able to move through milestones in order.
- The selected event content must be available to assistive technology.
- Do not hide the entire club history behind a hover interaction.
- Do not require dragging or swiping to understand the timeline.
- On mobile, stack events vertically unless a documented design decision justifies another pattern.

## 12. Gallery Interaction

A gallery is optional for community, matchday, or club imagery.

### Basic gallery

- Render images in a semantic list or labelled region.
- Use links if images open a separate view.
- Use buttons if images change local gallery state.
- Give every control an accessible name.
- Show which image is current.

### Enlarged image or lightbox

If a lightbox is used:

- Move focus into the lightbox when it opens.
- Provide a clearly labelled close button.
- Close with `Escape`.
- Return focus to the opening control.
- Prevent background interaction while open.
- Do not trap focus incorrectly.
- Include useful alt text and any necessary caption or credit.
- Ensure the image fits within the viewport at 375px and 200% zoom.

Avoid adding a lightbox solely for decoration. A simple responsive image grid may be preferable.

## 13. Accordion Interaction

Accordions are optional and should be used only when they improve content scanning.

- Use a real button for each trigger.
- Expose `aria-expanded` and `aria-controls`.
- Keep panel IDs unique.
- Make the expanded content available to keyboard and screen-reader users.
- Do not put essential club information only inside a collapsed panel.
- Avoid automatically closing a panel while a user is reading it unless the interaction requires it.
- Use short height or opacity transitions only when they do not interfere with reading.

## 14. External Shop Interaction

All Shop interactions use the central official Shop URL.

Requirements:

- Navigation Shop link is immediately discoverable.
- Merchandise CTA uses the same configuration value.
- External destination is clear in accessible text where needed.
- If opening a new tab, communicate that behavior.
- Use safe `target` and `rel` attributes when a new tab is chosen.
- Do not display a fake loading state for the external site.
- Do not intercept the link to simulate a cart or checkout.
- If the URL is a development placeholder, prevent accidental production release.

## 15. Motion Tokens

Use a small, consistent motion system rather than one-off timings.

Suggested tokens:

```css
:root {
  --motion-duration-fast: 160ms;
  --motion-duration-base: 240ms;
  --motion-duration-slow: 420ms;
  --motion-ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --motion-ease-emphasis: cubic-bezier(0.16, 1, 0.3, 1);
}
```

Suggested use:

- Fast: focus, button, icon, and small state changes.
- Base: menu, card, and navigation transitions.
- Slow: section reveal and hero entrance.
- Avoid durations above 500ms for ordinary controls.
- Avoid indefinite or looping animations unless they communicate a real state.

These values are starting points. They must be evaluated against the visual system and reduced-motion preference.

## 16. Page-Load Motion

Use a restrained entrance sequence:

1. Header becomes available immediately.
2. Hero image renders without waiting for animation.
3. Hero heading and supporting copy appear with a short, optional reveal.
4. Primary actions appear with the content, not after a long delay.
5. Below-the-fold sections reveal only as they enter the viewport.

Rules:

- Do not show a blocking splash screen.
- Do not delay the page's first meaningful content.
- Do not use a full-page fade that makes the site feel slow.
- Ensure direct links to sections work even when the page-load sequence is incomplete.

## 17. Reduced Motion

Respect the user's system preference:

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

When reduced motion is enabled:

- Disable parallax.
- Remove or minimise scroll reveals.
- Remove decorative looping motion.
- Disable smooth scrolling.
- Keep content visible immediately.
- Preserve state changes and focus indicators.
- Do not remove useful feedback; replace motion with colour, border, or text state where necessary.

## 18. Performance Rules

- Animate `transform` and `opacity` where possible.
- Avoid animating layout properties such as `width`, `height`, `top`, `left`, `margin`, or `padding` for repeated elements.
- Do not use expensive scroll handlers for simple reveals.
- Use `IntersectionObserver` for visibility triggers.
- Avoid large video backgrounds and animated GIFs.
- Do not animate the LCP image in a way that delays rendering or changes its layout.
- Keep the number of simultaneously animating elements small.
- Remove event listeners when components unmount.
- Do not add an animation library for simple CSS transitions.
- Test motion on a throttled mobile device or equivalent profile.

## 19. Responsive Interaction Rules

Test interactions at:

- 375px.
- 768px.
- 1024px.
- 1440px and wider.

Check:

- Menu does not overflow the viewport.
- Sticky header does not cover anchor headings.
- Hover-only behavior has a touch-safe equivalent.
- Buttons and cards do not resize unexpectedly.
- Long labels wrap without overlapping icons.
- Gallery and timeline controls fit at narrow widths.
- Focus indicators remain visible after scrolling.
- Motion does not cause horizontal overflow.
- Cards remain understandable when stacked.

## 20. Accessibility QA

- [ ] Skip link reaches the main content.
- [ ] All navigation is usable with a keyboard.
- [ ] Mobile menu exposes correct state and restores focus.
- [ ] `Escape` closes the mobile menu and any lightbox.
- [ ] Focus is visible on links, buttons, cards, and controls.
- [ ] Active navigation state is not communicated by colour alone.
- [ ] Every interactive element has a useful accessible name.
- [ ] Gallery, timeline, and accordion interactions have keyboard equivalents.
- [ ] No essential information is available only on hover.
- [ ] Reduced-motion preference removes unnecessary animation.
- [ ] Content is visible if JavaScript or an observer fails.

## 21. Interaction QA

- [ ] Header remains usable while scrolling.
- [ ] Anchor links reach the correct section.
- [ ] Anchor headings are not hidden behind the header.
- [ ] Hero CTAs reach valid destinations.
- [ ] News links only appear when destinations exist.
- [ ] Partner CTA reaches a real contact path or section.
- [ ] Shop navigation and merchandise CTA use the configured URL.
- [ ] External-link behavior is clear.
- [ ] No interaction creates a fake backend workflow.
- [ ] Browser back/forward behavior remains reasonable.

## 22. Performance QA

- [ ] No long blocking animation delays first content.
- [ ] No continuous scroll handler causes visible jank.
- [ ] Hero image loads without layout shift.
- [ ] Below-the-fold content does not trigger excessive simultaneous animations.
- [ ] Animations are primarily transform and opacity based.
- [ ] Motion is tested on mobile conditions.
- [ ] Console contains no event-listener or component lifecycle errors.

## 23. Definition of Done

The interaction and animation work is complete when:

- Navigation, menu, anchors, CTAs, cards, and optional interactive sections behave as documented.
- Keyboard and touch users can complete the same core tasks.
- Focus, active, hover, and pressed states are visible and stable.
- Reduced-motion users receive a complete, readable experience.
- Content remains available without successful animation scripts.
- Motion does not cause overflow, layout shift, or noticeable performance problems.
- Shop behavior remains an external redirect with no e-commerce state.
- All required responsive widths have been checked.
- No major console errors or inaccessible controls remain.
