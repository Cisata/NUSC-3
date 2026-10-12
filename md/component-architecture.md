# NUSC Component Architecture

## 1. Purpose

This document defines the reusable component structure for the Nagaland United Sports Club (NUSC) responsive landing page.

The architecture supports a visually strong one-page experience with static or mock data, while keeping the code ready for future data sources. It does not introduce a backend, CMS, authentication, payment processing, cart, checkout, inventory, or registration system.

The component architecture must preserve the NUSC priorities:

- Football remains the primary story.
- Community and Football for Peace are first-class content.
- Sponsors and merchandise are integrated without making the page an e-commerce site.
- The Shop uses one centrally configured external URL.
- Official information is never invented.
- Components are accessible, responsive, and reusable.

## 2. Architectural Principles

1. Keep page composition separate from visual primitives.
2. Keep content and static data separate from JSX and presentation logic.
3. Give each component one clear responsibility.
4. Prefer composition and data-driven rendering over duplicated markup.
5. Keep section-specific behavior inside the owning section or component.
6. Use native links and buttons with the correct semantics.
7. Make accessibility behavior part of the component contract.
8. Keep the landing page fast by avoiding unnecessary libraries and client requests.
9. Make placeholder content explicit in the data layer.
10. Preserve stable section IDs for anchor navigation.
11. Centralize shared configuration, especially the external Shop URL.
12. Do not create abstractions for one-off markup unless they remove real duplication.

## 3. Recommended Project Structure

```text
src/
├── app/
│   ├── App.tsx
│   └── page-sections.ts
├── components/
│   ├── global/
│   │   ├── SiteHeader.tsx
│   │   ├── SiteNavigation.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── SiteFooter.tsx
│   │   ├── SkipLink.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── Button.tsx
│   │   ├── LinkButton.tsx
│   │   └── CtaGroup.tsx
│   ├── layout/
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   └── ResponsiveImage.tsx
│   ├── football/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── AchievementCard.tsx
│   │   ├── AchievementsSection.tsx
│   │   ├── MatchCard.tsx
│   │   ├── ResultCard.tsx
│   │   ├── MatchdaySection.tsx
│   │   ├── PlayerCard.tsx
│   │   ├── TeamSection.tsx
│   │   ├── TimelineItem.tsx
│   │   └── JourneySection.tsx
│   ├── community/
│   │   ├── CommunitySection.tsx
│   │   ├── CommunityFeature.tsx
│   │   ├── Gallery.tsx
│   │   └── GalleryItem.tsx
│   ├── editorial/
│   │   ├── NewsSection.tsx
│   │   └── NewsCard.tsx
│   └── commercial/
│       ├── PartnersSection.tsx
│       ├── PartnerLogo.tsx
│       ├── PartnershipSection.tsx
│       ├── MerchandiseSection.tsx
│       ├── MerchandiseCard.tsx
│       └── ShopLink.tsx
├── config/
│   └── site.ts
├── data/
│   ├── siteContent.ts
│   ├── team.ts
│   ├── matches.ts
│   ├── achievements.ts
│   ├── journey.ts
│   ├── community.ts
│   ├── news.ts
│   ├── partners.ts
│   └── merchandise.ts
├── types/
│   ├── content.ts
│   └── assets.ts
└── styles/
    ├── globals.css
    └── tokens.css
```

Names may be adapted to the chosen framework conventions, but the ownership boundaries should remain recognisable.

## 4. Page Composition

`App` should compose the page in the approved narrative order:

```tsx
<SiteHeader />
<main id="main-content">
  <HeroSection />
  <AboutSection />
  <AchievementsSection />
  <MatchdaySection />
  <TeamSection />
  <JourneySection />
  <CommunitySection />
  <NewsSection />
  <PartnersSection />
  <MerchandiseSection />
  <PartnershipSection />
  <FinalCtaSection />
</main>
<SiteFooter />
```

The top-level page should coordinate order and shared data. It should not contain repeated card markup, detailed menu state logic, image-crop logic, or individual section layout rules.

## 5. Global Components

### 5.1 `SkipLink`

**Responsibility:** Provide keyboard users a fast path to the main content.

**Contract:**

- Links to `#main-content`.
- Is visually hidden until focused.
- Appears before the header in the document order.

### 5.2 `SiteHeader`

**Responsibility:** Provide the persistent club header and coordinate desktop/mobile navigation.

**Contains:**

- NUSC logo link.
- `SiteNavigation`.
- Primary `Join NUSC` CTA.
- Mobile menu toggle.

**Behavior:**

- Sticky or visually persistent according to the design system.
- Applies active section state when the user scrolls through page sections.
- Does not duplicate navigation links in separate desktop and mobile data definitions.

### 5.3 `SiteNavigation`

**Responsibility:** Render primary navigation links.

**Navigation items:**

```text
Home
About
Team
Matches
News
Community
Partners
Shop
```

**Props:**

```ts
type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};

type SiteNavigationProps = {
  items: NavigationItem[];
  activeHref?: string;
  onNavigate?: () => void;
};
```

**Requirements:**

- Use links, not buttons, for navigation.
- Use stable in-page section IDs.
- Mark external Shop links clearly.
- Expose active state without relying on colour alone.
- Support keyboard navigation.

### 5.4 `MobileMenu`

**Responsibility:** Provide the mobile navigation panel and its interaction state.

**Props:**

```ts
type MobileMenuProps = {
  isOpen: boolean;
  items: NavigationItem[];
  onClose: () => void;
};
```

**Requirements:**

- Toggle uses a real button with `aria-expanded` and `aria-controls`.
- Move focus into the menu when opened.
- Return focus to the toggle when closed.
- Close on `Escape` and after an in-page navigation.
- Do not expose hidden menu links to keyboard users.
- Preserve access to the Shop and Join NUSC actions.

### 5.5 `SiteFooter`

**Responsibility:** Close the page with club information, quick links, contact details, social links, and legal links.

**Props/data:**

```ts
type FooterContent = {
  description: string;
  quickLinks: NavigationItem[];
  contact?: ContactDetails;
  socialLinks: SocialLink[];
  legalLinks: NavigationItem[];
};
```

Use only verified contact details and social destinations. Do not render empty contact rows or placeholder links in production.

### 5.6 `SectionHeader`

**Responsibility:** Provide consistent section heading, eyebrow, supporting copy, and optional action.

**Props:**

```ts
type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  align?: "start" | "center";
};
```

The component must render a heading at the level supplied by the section rather than deciding heading levels based on styling.

### 5.7 `Button`, `LinkButton`, and `CtaGroup`

**Responsibility:** Provide consistent action styling and semantics.

- `Button` is for UI state changes.
- `LinkButton` is for navigation.
- `CtaGroup` arranges related actions and handles responsive wrapping.

Do not use a button for an external Shop destination. Use an anchor styled as a button.

## 6. Layout Components

### 6.1 `Container`

**Responsibility:** Apply the shared maximum width and horizontal gutters.

**Requirements:**

- Works from 375px through 1440px and wider.
- Does not create horizontal overflow.
- Uses design-system spacing tokens.

### 6.2 `Section`

**Responsibility:** Apply shared section spacing, background treatment, and section identity.

**Props:**

```ts
type SectionProps = {
  id?: string;
  labelledBy?: string;
  theme?: "light" | "dark" | "accent" | "image";
  children: React.ReactNode;
};
```

Every navigable section should have a stable `id` and an accessible heading relationship.

### 6.3 `ResponsiveImage`

**Responsibility:** Render approved image assets with responsive sources, intrinsic dimensions, focal point, loading priority, and alt text.

**Props:**

```ts
type ResponsiveImageProps = {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  loading?: "eager" | "lazy";
  focalPoint?: string;
  className?: string;
};
```

The component must not hide meaningful information in a background image. Use a semantic `img` when the image carries content.

## 7. Football Components

### 7.1 `HeroSection`

**Responsibility:** Establish NUSC identity and provide the first actions.

**Content:**

- Full club name.
- `Rise Together` message.
- Verified supporting statement.
- Primary `Explore NUSC` action.
- Secondary `View Matches` action.
- Optional `Visit Shop` action.
- Optional small match or tournament highlight.

**Requirements:**

- Uses one intentional LCP image.
- Keeps text readable over every responsive crop.
- Does not fabricate match highlights.
- Provides a text equivalent for any information shown over the image.

### 7.2 `AboutSection`

**Responsibility:** Introduce the club concisely.

**Content:**

- Who We Are heading.
- Short verified description.
- Optional facts: founding year, home, motto, and football focus.
- `Discover Our Story` action.

The component should receive content through props or `siteContent`, not hard-code unverified facts.

### 7.3 `AchievementCard` and `AchievementsSection`

**`AchievementCard` responsibility:** Display one verified achievement.

```ts
type Achievement = {
  id: string;
  year: string;
  competition: string;
  result: string;
  image?: SiteAsset;
  isPlaceholder?: boolean;
};
```

**`AchievementsSection` responsibility:** Introduce and arrange approximately 2 to 4 cards.

Do not render empty cards or unverified achievement examples in production.

### 7.4 `MatchCard` and `ResultCard`

**`MatchCard` responsibility:** Display one upcoming match.

```ts
type Match = {
  id: string;
  homeTeam: TeamReference;
  awayTeam: TeamReference;
  date: string;
  competition: string;
  venue: string;
  status?: string;
  href?: string;
  isPlaceholder?: boolean;
};
```

**`ResultCard` responsibility:** Display the most recent result with team names and score.

**Requirements:**

- Use `<time>` for dates.
- Make the match status understandable without colour alone.
- Provide crest fallbacks when approved logos are unavailable.
- Keep mock match data visibly controlled by the data layer.
- Do not imply live data or real-time updates.

### 7.5 `MatchdaySection`

**Responsibility:** Combine the next-match card, last-result card, and optional `View Match` action.

The section owns the matchday layout but delegates individual display to `MatchCard` and `ResultCard`.

### 7.6 `PlayerCard` and `TeamSection`

**`PlayerCard` responsibility:** Display one approved player or a clearly marked placeholder.

```ts
type Player = {
  id: string;
  name: string;
  position: string;
  squadNumber?: string;
  image: SiteAsset;
  isPlaceholder?: boolean;
};
```

**`TeamSection` responsibility:** Introduce the squad and arrange player cards.

**Requirements:**

- Do not fabricate player identity or statistics.
- Do not create individual player routes in the current scope.
- Keep card dimensions stable across breakpoints.
- Use `Meet the Team` as an action only when the destination exists.

### 7.7 `TimelineItem` and `JourneySection`

**`TimelineItem` responsibility:** Render one verified club journey event.

```ts
type JourneyEvent = {
  id: string;
  year: string;
  title: string;
  description?: string;
  image?: SiteAsset;
  competitionLogo?: SiteAsset;
  isPlaceholder?: boolean;
};
```

**`JourneySection` responsibility:** Arrange the timeline and ensure the sequence remains understandable on mobile.

Timeline interaction is optional. If used, it must not hide content from keyboard users or screen readers.

## 8. Community Components

### 8.1 `CommunitySection`

**Responsibility:** Present Football for Peace and NUSC's wider community identity.

**Content:**

- `Football for Peace` heading.
- Message such as `Football brings us together.`
- Large community image.
- Supporting copy.
- `Our Community` action.

### 8.2 `CommunityFeature`

**Responsibility:** Display one prominent community story with image, label, title, and supporting content.

### 8.3 `Gallery` and `GalleryItem`

**Responsibility:** Display optional supporting community or matchday imagery.

**Requirements:**

- Use a list or region with a useful accessible label.
- Every control has a visible or programmatic name.
- Keyboard users can move through and close any enlarged view.
- Avoid adding a gallery when it does not provide meaningful content.
- Obtain consent for identifiable community participants, especially children.

## 9. Editorial Components

### 9.1 `NewsCard`

**Responsibility:** Display one news item.

```ts
type NewsItem = {
  id: string;
  category: "Match Preview" | "Club News" | "Player Update" | "Community" | "Announcement";
  headline: string;
  date: string;
  excerpt?: string;
  image: SiteAsset;
  href?: string;
  isPlaceholder?: boolean;
};
```

Each card contains:

- Image.
- Category.
- Headline.
- Date.
- Optional excerpt.
- Link when a real destination exists.

### 9.2 `NewsSection`

**Responsibility:** Render the latest three stories and the `View All News` action where a destination exists.

The landing page may use static data. Do not imply that a full news system or live feed exists.

## 10. Commercial Components

### 10.1 `PartnerLogo`

**Responsibility:** Render an approved partner mark with the correct treatment and accessible name.

```ts
type Partner = {
  id: string;
  name: string;
  tier: "Main Partner" | "Official Partner" | "Event Partner" | "Community Partner" | "Media Partner";
  logo: SiteAsset;
  href?: string;
  isPlaceholder?: boolean;
};
```

Do not render fabricated sponsors or unsupported partner tiers.

### 10.2 `PartnersSection`

**Responsibility:** Introduce the sponsor group under `Proudly Supported By`, arrange approved logos, and expose `Become a Partner`.

The section must provide enough spacing for logos and must remain legible on small screens.

### 10.3 `PartnershipSection`

**Responsibility:** Explain the commercial proposition without unsupported performance claims.

Suggested pillars:

- Football.
- Community.
- Visibility.
- Partnership.

Primary action: `Talk to NUSC` or `Become a Partner`.

The component should link to a verified contact destination or the footer contact area. It must not create a fake submission form.

### 10.4 `MerchandiseCard` and `MerchandiseSection`

```ts
type MerchandiseItem = {
  id: string;
  name: string;
  image: SiteAsset;
  description?: string;
  isPlaceholder?: boolean;
};
```

**`MerchandiseCard` responsibility:** Show one approved or clearly marked mock product visual.

**`MerchandiseSection` responsibility:** Present `Wear the Club. Support the Club.` and direct visitors to the external shop.

No component may implement:

- Cart state.
- Checkout.
- Payment.
- Inventory.
- Product database.
- Account state.

### 10.5 `ShopLink`

**Responsibility:** Provide the shared external Shop link used by navigation and page CTAs.

```ts
type ShopLinkProps = {
  label: string;
  location?: "navigation" | "hero" | "merchandise" | "footer";
};
```

The component reads `siteConfig.shopUrl`. It must not accept arbitrary URLs from individual call sites unless there is a documented exception.

If the URL is a development placeholder, the UI should not present it as the official shop in production.

## 11. Final CTA

### `FinalCtaSection`

**Responsibility:** Conclude the story and provide supporter actions.

**Content:**

- `Be Part of the Journey.`
- `Follow NUSC. Support the team. Rise together.`
- `Follow NUSC`.
- `Join Us`.
- Optional `Partner with NUSC`.

Use real social links and contact destinations. Do not present a non-functional form as a completed join or registration workflow.

## 12. Shared Types and Data Boundaries

Put domain types in `src/types` and data in `src/data`.

Recommended shared types:

```ts
type SiteAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  kind: "photo" | "logo" | "crest" | "product" | "graphic";
  isPlaceholder?: boolean;
};

type TeamReference = {
  name: string;
  crest?: SiteAsset;
};

type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

type ContactDetails = {
  email?: string;
  phone?: string;
  address?: string;
};
```

Data rules:

- Components receive data through props.
- Components do not fetch from live APIs in the current scope.
- Placeholder status is explicit.
- Verified content and mock content must not be silently mixed.
- Dates, URLs, names, and official claims are maintained in data/configuration files.
- The Shop URL is maintained only in `src/config/site.ts`.

## 13. State Ownership

### Global or app-level state

Keep only genuinely shared state at the app or header level:

- Mobile menu open/closed state.
- Active navigation section, if scroll tracking is used.
- Optional reduced-motion or UI preference state only when required by the implementation.

### Component-local state

Keep local interaction state inside the owning component:

- Gallery selected item.
- Accordion open/closed state.
- Timeline selected item, if implemented.
- Temporary hover or focus presentation state should generally be CSS-driven.

### No current state requirements

Do not create state for:

- User accounts.
- Cart contents.
- Payment.
- Inventory.
- Registration submissions.
- Live scores.
- CMS content editing.

## 14. Accessibility Contract

Every component must support:

- Semantic HTML.
- Logical heading hierarchy.
- Keyboard operation.
- Visible focus states.
- Meaningful accessible names.
- Correct link/button semantics.
- Useful alternative text or explicitly decorative images.
- Reduced motion where animation exists.
- Responsive text wrapping without overlap.

Specific requirements:

- One page-level `h1`.
- Section headings connected with `aria-labelledby` where useful.
- Mobile menu exposes `aria-expanded` and `aria-controls`.
- Interactive galleries and accordions are usable with keyboard and screen readers.
- External Shop links state their destination and new-tab behavior if applicable.
- Sponsor, player, match, and merchandise meaning is available as text, not only imagery.

## 15. Responsive Behavior

Test all components at:

- 375px.
- 768px.
- 1024px.
- 1440px and wider.

Responsive rules:

- Components may change layout, but their content order must remain meaningful.
- Cards should use stable dimensions or aspect ratios.
- Navigation must switch to the mobile menu without losing Shop or Join NUSC.
- Player, news, partner, and merchandise grids must collapse without horizontal scrolling.
- Long headlines, partner names, and match details must wrap without clipping.
- Images must use responsive sources and documented focal points.
- Avoid separate duplicated content for desktop and mobile.

## 16. Performance Boundaries

- Keep static section data local and lightweight.
- Use one optimised, prioritised hero image.
- Lazy-load below-the-fold images.
- Avoid heavy carousel, animation, social embed, and UI packages unless necessary.
- Use `IntersectionObserver` for optional reveal behavior instead of expensive scroll handlers.
- Keep animation transform- and opacity-based where possible.
- Do not block page content behind a loading state.
- Ensure image dimensions are known before load.

## 17. Implementation Order

Build in this order:

1. Project foundation, types, configuration, and global styles.
2. `Container`, `Section`, `ResponsiveImage`, buttons, and section headers.
3. `SkipLink`, `SiteHeader`, `SiteNavigation`, and `MobileMenu`.
4. `HeroSection`.
5. `AboutSection` and `AchievementsSection`.
6. `MatchdaySection`.
7. `TeamSection`.
8. `JourneySection`.
9. `CommunitySection` and optional gallery.
10. `NewsSection`.
11. `PartnersSection`.
12. `MerchandiseSection` and `ShopLink`.
13. `PartnershipSection`.
14. `FinalCtaSection` and `SiteFooter`.
15. Responsive, accessibility, performance, and content QA.

After each section, test its responsive layout, keyboard behavior, content states, and console output before continuing.

## 18. Out of Scope

Do not add the following to the current component architecture:

- Backend services.
- Live API clients.
- CMS integrations.
- Authentication.
- User profiles.
- Registration workflows.
- Payment or checkout components.
- Cart or inventory state.
- Full player profile routes.
- Full news article system.
- Live match centre.
- Admin dashboard.
- Sponsor management interface.

These may become future modules, but they are not part of the landing page implementation.

## 19. Definition of Done

The component architecture is implemented when:

- The page is composed from reusable global, layout, football, community, editorial, and commercial components.
- Section order matches the approved NUSC narrative.
- Data is separate from presentation components.
- Shared types cover assets, teams, matches, players, news, partners, and merchandise.
- Navigation and Shop URL configuration are centralised.
- Mobile navigation is keyboard accessible and preserves focus correctly.
- Repeated cards are data-driven rather than duplicated.
- Placeholder data is explicit and replaceable.
- No backend, e-commerce, authentication, or live API behavior has been introduced.
- Components work at 375px, 768px, 1024px, and 1440px or wider.
- There is no horizontal overflow, major console error, or inaccessible control.
- The architecture is ready for future data integration without requiring a rewrite of the page components.
