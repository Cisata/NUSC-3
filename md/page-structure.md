# NUSC Page Structure

## 1. Purpose

This document defines the page structure for the Nagaland United Sports Club (NUSC) responsive landing page.

The page is the digital front door of NUSC. It should introduce the club, establish football credibility, show the club's community role, support supporters and players, provide current match and news information, and create clear partner and Shop paths.

The current implementation is a single responsive landing page with anchor navigation. It does not require separate content routes, backend services, CMS behavior, authentication, checkout, or live APIs.

## 2. Structural Principles

1. Use one coherent narrative from club identity to participation.
2. Keep football as the primary story.
3. Introduce NUSC before asking users to convert.
4. Put current match information where football visitors can find it quickly.
5. Treat community content as a major identity section, not a footer add-on.
6. Integrate sponsor and merchandise content without interrupting the football narrative.
7. Use stable section IDs for in-page navigation.
8. Keep content order meaningful when layouts stack on mobile.
9. Keep static data separate from page markup.
10. Design boundaries so future routes can be added without rebuilding the landing page.

## 3. Current Information Architecture

```text
NUSC Landing Page
├── Header
│   ├── NUSC logo
│   ├── Home
│   ├── About
│   ├── Team
│   ├── Matches
│   ├── News
│   ├── Community
│   ├── Partners
│   ├── Shop
│   └── Join NUSC
├── Main content
│   ├── Hero
│   ├── About NUSC
│   ├── Achievements
│   ├── Matchday
│   ├── Team
│   ├── Our Journey
│   ├── Football for Peace / Community
│   ├── News and Updates
│   ├── Sponsors and Partners
│   ├── Merchandise / Shop
│   ├── Why Partner With NUSC
│   └── Final Club CTA
└── Footer
    ├── Club information
    ├── Quick links
    ├── Contact
    ├── Social links
    └── Legal links
```

## 4. Document and Landmark Structure

Use one page-level document structure:

```html
<header>
  <nav aria-label="Primary navigation">...</nav>
</header>

<main id="main-content">
  <section id="home" aria-labelledby="hero-title">...</section>
  <section id="about" aria-labelledby="about-title">...</section>
  <section id="achievements" aria-labelledby="achievements-title">...</section>
  <section id="matches" aria-labelledby="matches-title">...</section>
  <section id="team" aria-labelledby="team-title">...</section>
  <section id="journey" aria-labelledby="journey-title">...</section>
  <section id="community" aria-labelledby="community-title">...</section>
  <section id="news" aria-labelledby="news-title">...</section>
  <section id="partners" aria-labelledby="partners-title">...</section>
  <section id="shop" aria-labelledby="shop-title">...</section>
  <section id="partnership" aria-labelledby="partnership-title">...</section>
  <section id="join" aria-labelledby="join-title">...</section>
</main>

<footer>...</footer>
```

Requirements:

- Use one appropriate page-level `h1`, normally in the hero.
- Keep heading levels logical and independent from visual font size.
- Add a keyboard-accessible skip link before the header.
- Give every navigable section a stable ID.
- Use one `main` landmark.
- Use `article` for repeated news, player, achievement, match, partner, or merchandise items where appropriate.

## 5. Global Header

### Purpose

Provide persistent orientation and access to the primary destinations.

### Contents

- NUSC logo linked to `#home`.
- Primary navigation.
- External `SHOP` link.
- Primary `JOIN NUSC` CTA.
- Mobile menu toggle.

### Desktop behavior

- Sticky, fixed, or visually persistent according to the design system.
- Clear active section state.
- Shop is visible but does not overpower football navigation.
- Join NUSC remains the primary action.

### Mobile behavior

- Hamburger menu.
- Clear open and closed states.
- Shop remains easy to locate.
- Join NUSC remains prominent.
- Focus is managed correctly when the menu opens and closes.

## 6. Hero Section

**ID:** `home`

**Position:** First content section after the header.

**Purpose:** Communicate NUSC, Nagaland, football, club identity, ambition, and the next action immediately.

### Content hierarchy

1. Full club name: `Nagaland United Sports Club`.
2. Main message: `Rise Together`.
3. Supporting statement about representing Nagaland through football, developing local talent, and bringing communities together through sport.
4. Primary action: `Explore NUSC`.
5. Secondary action: `View Matches`.
6. Optional action: `Visit Official Shop`.
7. Optional verified match or tournament highlight.

### Layout

- Use a powerful approved NUSC team or player photograph.
- Keep the headline and CTA group in a stable text-safe area.
- Preserve the focal subject across desktop and mobile crops.
- Keep the first viewport focused and avoid overloading it with details.

### Rules

- The hero contains the page-level `h1`.
- Essential copy must remain available as text.
- Do not use an unverified match highlight.
- Do not delay the hero content behind animation.

## 7. About NUSC

**ID:** `about`

**Heading:** `Who We Are`

**Purpose:** Give first-time visitors a concise and factual introduction.

### Contents

- Short description of NUSC.
- Club identity and football purpose.
- Optional verified facts: founded year, home, motto, and passion.
- `Discover Our Story` action.

### Layout

- Use a readable text block paired with one approved image or club identity treatment.
- Keep the section concise rather than presenting the full club history.
- Use a responsive text/media arrangement that remains readable when stacked.

## 8. Achievements

**ID:** `achievements`

**Heading:** `Our Achievements`

**Purpose:** Establish credibility through selected verified highlights.

### Contents

Each achievement includes:

- Large year.
- Competition.
- Result or distinction.
- Optional trophy or supporting image.
- Optional short context.

Show approximately 2 to 4 major highlights.

### Layout

- Use a visually strong grid or horizontal sequence on larger screens.
- Stack or use a responsive grid on smaller screens.
- Keep years, competitions, and results easy to scan.
- Do not create empty cards for missing achievements.

## 9. Matchday

**ID:** `matches`

**Heading:** `Next Match`

**Purpose:** Make current football information highly visible.

### Contents

#### Next match

- NUSC.
- Opponent.
- Date.
- Competition.
- Venue.
- Match status.
- Optional `View Match` action.

#### Last result

- NUSC.
- Opponent.
- Score.
- Optional date and competition.

### Layout

- This is one of the most visually prominent sections.
- Present upcoming match and last result as related but distinct blocks.
- Keep team names, score, date, and status readable at mobile widths.
- Use approved crests where available and stable fallbacks where not.

### Rules

- Use mock data until official data is available.
- Do not imply live data or a live match centre.
- Use machine-readable dates.
- Do not publish an unverified venue or opponent.

## 10. Team

**ID:** `team`

**Heading:** `Our Team`

**Purpose:** Introduce the squad without creating individual player pages in the current scope.

### Contents

Each player card may include:

- Approved player photograph.
- Full name.
- Position.
- Squad number, if published.

Possible positions:

- Goalkeeper.
- Defender.
- Midfielder.
- Forward.

CTA: `Meet the Team`.

### Layout

- Use a strong visual player-card grid.
- Keep card dimensions and image ratios stable.
- Collapse the grid cleanly at tablet and mobile widths.
- Preserve name and position readability without hover.

### Rules

- Use approved real data or clearly marked development placeholders.
- Do not fabricate player names, roles, numbers, or statistics.
- Do not imply individual profile pages exist unless implemented.

## 11. Our Journey

**ID:** `journey`

**Heading:** `Our Journey`

**Purpose:** Show the club's development through a visual sequence of verified milestones.

### Suggested content sequence

```text
2024
Club Founded

2025
Nagaland Super League

2025
NSF Martyrs' Memorial Trophy

2026
IFL Journey
```

### Contents

Each event includes:

- Year or date.
- Event title.
- Short description.
- Optional image.
- Optional approved competition badge.

### Layout

- Use a visual timeline on desktop.
- Stack milestones vertically on mobile.
- Keep event order understandable without animation.
- Optional interaction must remain keyboard accessible.

## 12. Football for Peace / Community

**ID:** `community`

**Heading:** `Football for Peace`

**Core message:** `Football brings us together.`

**Purpose:** Show NUSC's identity beyond matches and competition.

### Contents

- Large community image.
- Short supporting copy.
- Community activity imagery where approved.
- `Our Community` CTA.

### Layout

- Give this section strong visual and vertical presence.
- Use a feature layout for the main story.
- Use an optional gallery for supporting activities.
- Stack media and copy without losing the narrative emphasis.

### Rules

- Describe verified activities only.
- Obtain consent for identifiable participants, especially children.
- Avoid unsupported social-impact claims.
- Keep the content human, specific, and connected to local community work.

## 13. News and Updates

**ID:** `news`

**Heading:** `News & Updates`

**Purpose:** Provide a current editorial entry point for supporters, fans, and media.

### Contents

Display the latest three stories. Each card contains:

- Image.
- Category.
- Headline.
- Date.
- Optional excerpt.
- Destination link when available.

Approved categories:

- Match Preview.
- Club News.
- Player Update.
- Community.
- Announcement.

CTA: `View All News` when a valid destination exists.

### Layout

- Use a three-card desktop arrangement where space allows.
- Collapse to two columns and then one column at smaller widths.
- Keep headline and date visible without hover.
- Keep image ratios consistent.

### Rules

- Static or mock stories are acceptable during development.
- Do not imply a CMS or full article archive exists if it does not.
- Use verified dates and destinations for production stories.

## 14. Sponsors and Partners

**ID:** `partners`

**Heading:** `Proudly Supported By`

**Purpose:** Provide premium visibility to approved partners and establish a partnership route.

### Contents

- Approved partner and sponsor logos.
- Relevant partner tiers only.
- Optional partner links.
- `Become a Partner` CTA.

Possible tiers:

- Main Partner.
- Official Partner.
- Event Partner.
- Community Partner.
- Media Partner.

### Layout

- Give logos generous and consistent breathing room.
- Use a responsive logo grid or tiered arrangement.
- Maintain aspect ratios and legibility at mobile widths.
- Keep the section visually integrated with the club design system.

### Rules

- Display approved current partners only.
- Do not invent organisations, tiers, relationships, or commercial outcomes.
- Do not use sponsor content to interrupt the football narrative.

## 15. Merchandise and Shop

**ID:** `shop`

**Heading:** `Wear the Club. Support the Club.`

**Purpose:** Direct supporters to official merchandise without implementing e-commerce.

### Contents

- Approved jersey, training wear, scarf, cap, or other merchandise visuals.
- Supporter-focused supporting copy.
- `Visit Official Shop` CTA.

### Layout

- Use a club-branded promotional section rather than a product catalogue.
- Use static product or campaign visuals.
- Keep the Shop CTA prominent without turning the section into checkout.

### Rules

- The Shop opens the centrally configured external URL.
- No cart, checkout, payment, inventory, product database, or account functionality.
- Do not show unverified price, availability, size, or delivery information.
- Mark product imagery as mock during development.

## 16. Why Partner With NUSC

**ID:** `partnership`

**Heading:** `Why Partner With NUSC`

**Purpose:** Explain the partnership opportunity clearly and calmly.

### Content pillars

- **Football:** Associate your brand with football and sporting activity.
- **Community:** Support local football and community initiatives.
- **Visibility:** Gain presence across relevant club and event touchpoints.
- **Partnership:** Develop meaningful collaborations with the club.

CTA: `Talk to NUSC` or `Become a Partner`.

### Layout

- Use a concise four-pillar arrangement on desktop.
- Stack pillars or use a compact grid on mobile.
- Link to an official contact destination or footer contact area.
- Do not create a fake enquiry submission experience.

## 17. Final Club CTA

**ID:** `join`

**Heading:** `Be Part of the Journey.`

**Supporting copy:** `Follow NUSC. Support the team. Rise together.`

### Actions

- `Follow NUSC`.
- `Join Us`.
- Optional `Partner With NUSC`.

### Purpose

Close the main narrative by giving supporters, players, and partners a clear next step.

### Layout

- Use a visually strong but focused closing section.
- Keep football and community identity visible.
- Do not make the final CTA feel like a generic advertisement.

## 18. Footer

**Position:** Final page region after the main content.

### Club block

- NUSC logo.
- Short verified description.
- Club identity.

### Quick links

- About.
- Team.
- Matches.
- News.
- Community.
- Partners.
- Shop.
- Contact.

### Contact block

- Official email.
- Official phone.
- Official stadium or club address.

### Social block

- Facebook.
- Instagram.
- YouTube.
- X/Twitter.

### Legal block

- Privacy.
- Terms.

### Copyright

```text
© 2026 Nagaland United Sports Club. All Rights Reserved.
```

Use only official contact details and working social destinations.

## 19. Navigation and Anchor Map

| Label | Destination | Type |
|---|---|---|
| Home | `#home` | In-page anchor |
| About | `#about` | In-page anchor |
| Team | `#team` | In-page anchor |
| Matches | `#matches` | In-page anchor |
| News | `#news` | In-page anchor |
| Community | `#community` | In-page anchor |
| Partners | `#partners` | In-page anchor |
| Shop | Central official Shop URL | External link |
| Join NUSC | `#join` or official contact | Anchor or contact link |
| Explore NUSC | `#about` | In-page anchor |
| View Matches | `#matches` | In-page anchor |
| Discover Our Story | `#about` or approved story route | Anchor or route |
| Meet the Team | `#team` or approved team route | Anchor or route |
| Our Community | `#community` | In-page anchor |
| View All News | Approved news destination | Route or link |
| Become a Partner | `#partnership` or official contact | Anchor or contact link |
| Visit Official Shop | Central official Shop URL | External link |
| Follow NUSC | Approved social profile | External link |

Do not render a CTA when its destination does not exist. Avoid placeholder `href="#"` values.

## 20. Responsive Structure

The page must support:

- 375px mobile.
- 768px tablet.
- 1024px laptop or tablet landscape.
- 1440px and wider desktop.

### Mobile rules

- Navigation collapses into a hamburger menu.
- Content order follows the desktop narrative.
- Grids collapse without horizontal scrolling.
- Long headings, partner names, match details, and CTAs wrap naturally.
- Images use intentional mobile crops.
- Sticky navigation does not hide anchor headings.
- Shop and Join NUSC remain easy to find.

### Tablet rules

- Preserve the page sequence.
- Use two-column arrangements only where content remains readable.
- Check sponsor logos, player cards, news cards, and match details for crowding.

### Desktop rules

- Use generous imagery and whitespace consistent with the design system.
- Keep the page content within a readable maximum width.
- Do not create excessive empty space between narrative sections.
- Keep the commercial sections visually subordinate to core football storytelling.

## 21. Component Mapping

| Page region | Primary components |
|---|---|
| Header | `SkipLink`, `SiteHeader`, `SiteNavigation`, `MobileMenu` |
| Hero | `HeroSection`, `ResponsiveImage`, `CtaGroup` |
| About | `AboutSection`, `SectionHeader`, `ResponsiveImage` |
| Achievements | `AchievementsSection`, `AchievementCard` |
| Matchday | `MatchdaySection`, `MatchCard`, `ResultCard` |
| Team | `TeamSection`, `PlayerCard` |
| Journey | `JourneySection`, `TimelineItem` |
| Community | `CommunitySection`, `CommunityFeature`, `Gallery`, `GalleryItem` |
| News | `NewsSection`, `NewsCard` |
| Partners | `PartnersSection`, `PartnerLogo` |
| Shop | `MerchandiseSection`, `MerchandiseCard`, `ShopLink` |
| Partnership | `PartnershipSection`, `CtaGroup` |
| Final CTA | `FinalCtaSection`, `CtaGroup` |
| Footer | `SiteFooter` |

Page sections own layout and section-specific content. Reusable cards own repeated item presentation. Shared configuration and data remain outside both.

## 22. Future Expansion Boundaries

The current page should be ready for future expansion without pretending these features already exist.

Potential future routes or modules:

```text
/team
/team/:player
/matches
/matches/:match
/news
/news/:story
/shop
/register
/membership
/admin
```

Future expansion must not require the landing page to own:

- Player profile data management.
- Live match data.
- Full news publishing.
- E-commerce state.
- Registration processing.
- Sponsor administration.

Use stable data shapes and component boundaries now, but do not implement these future routes in the current landing-page scope.

## 23. Page Structure QA Checklist

### Hierarchy

- [ ] Page order follows the approved NUSC narrative.
- [ ] Hero introduces NUSC immediately.
- [ ] Football sections appear before commercial conversion sections.
- [ ] Community has a substantial position in the page.
- [ ] Final CTA concludes the story before the footer.

### Navigation

- [ ] Every primary navigation label has a valid destination.
- [ ] Section IDs are unique and stable.
- [ ] Shop is visible in desktop and mobile navigation.
- [ ] Join NUSC remains prominent.
- [ ] Sticky header does not obscure anchor targets.

### Content

- [ ] Each section has one clear purpose.
- [ ] Match, team, achievement, news, partner, and merchandise content is verified or explicitly marked mock.
- [ ] No unsupported commercial claims appear.
- [ ] No placeholder links remain in production.
- [ ] Footer contact and social details are official.

### Responsive behavior

- [ ] Layout works at 375px, 768px, 1024px, and 1440px or wider.
- [ ] No horizontal overflow exists.
- [ ] No text, image, card, or CTA overlap occurs.
- [ ] Grids collapse cleanly.
- [ ] Images retain meaningful crops.
- [ ] Navigation and footer remain usable on mobile.

### Accessibility

- [ ] One page-level `h1` exists.
- [ ] Section headings follow a logical order.
- [ ] Landmarks and IDs are present.
- [ ] Links and buttons use correct semantics.
- [ ] Keyboard users can reach all actions.
- [ ] Focus remains visible after navigation.
- [ ] Motion does not hide or delay content.

## 24. Definition of Done

The page structure is ready for implementation when:

- The page sequence and section responsibilities are approved.
- Every section has a stable ID, heading, content purpose, and CTA rules.
- Navigation labels map to real anchors or verified external destinations.
- Component ownership is clear.
- The mobile structure preserves the desktop narrative.
- Future features are documented without being added to current scope.
- Responsive, accessibility, content, and navigation QA checks pass.
