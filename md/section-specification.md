# NUSC Section Specification

## 1. Purpose

This document defines the implementation requirements for every major section of the Nagaland United Sports Club (NUSC) landing page.

Each section specification includes:

- Purpose.
- Section ID and heading.
- Content requirements.
- Component ownership.
- Data requirements.
- Responsive expectations.
- Interaction and accessibility rules.
- Acceptance criteria.

The page is front-end only. Use static or mock data where required, but do not present unverified information as official NUSC content.

## 2. Shared Section Rules

Every section must:

- Have one clear content purpose.
- Use a stable anchor ID when linked from navigation.
- Have a meaningful heading connected to its content.
- Use the shared `Container`, `Section`, and `SectionHeader` patterns where appropriate.
- Keep content separate from presentation components.
- Support 375px, 768px, 1024px, and 1440px or wider layouts.
- Avoid horizontal overflow, overlap, clipping, and unreadable text.
- Use approved images, logos, and copy.
- Mark development-only content as mock or placeholder.
- Provide keyboard-accessible controls and visible focus states.
- Respect reduced-motion preferences.
- Preserve the football-first narrative.

Recommended section IDs:

```text
home
about
achievements
matches
team
journey
community
news
partners
shop
partnership
join
```

## 3. Page Sequence

```text
Header
  -> Hero
  -> About NUSC
  -> Achievements
  -> Matchday
  -> Team
  -> Our Journey
  -> Football for Peace / Community
  -> News and Updates
  -> Sponsors and Partners
  -> Merchandise / Shop
  -> Why Partner With NUSC
  -> Final Club CTA
  -> Footer
```

Do not move commercial sections ahead of the club identity, achievements, matchday, team, or community story without an approved content decision.

## 4. Header and Navigation

**Owner:** `SiteHeader`, `SiteNavigation`, `MobileMenu`

**Section ID:** Header has no in-page section ID; the logo links to `#home`.

### Purpose

Provide orientation, section navigation, Shop access, and the primary Join NUSC action.

### Required content

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

### Requirements

- NUSC logo links to the top of the page.
- Section links use stable anchors.
- Shop links to the centrally configured official external Shop.
- Join NUSC remains the primary header CTA.
- Desktop navigation has an active section state.
- Mobile navigation uses an accessible hamburger menu.
- The mobile menu contains Shop and Join NUSC.
- Sticky or persistent behavior must not cover anchor headings.

### Accessibility

- Use a labelled `nav` landmark.
- Use a real button for the mobile menu toggle.
- Expose `aria-expanded` and `aria-controls`.
- Move focus into the menu when it opens and return it when it closes.
- Support `Escape` to close the menu.
- Make active state understandable without colour alone.

### Acceptance criteria

- Every navigation item reaches a real destination.
- No placeholder `href="#"` remains in production.
- Header works at 375px without overflow.
- Shop and Join NUSC remain discoverable on mobile.

## 5. Hero Section

**Owner:** `HeroSection`

**Section ID:** `home`

**Primary heading:** `Nagaland United Sports Club`

**Primary message:** `Rise Together`

### Purpose

Immediately communicate NUSC, Nagaland, football, identity, ambition, and the next action.

### Required content

- Full club name.
- `Rise Together` message.
- Supporting statement about representing Nagaland through football, developing local talent, and bringing communities together through sport.
- Primary CTA: `Explore NUSC`.
- Secondary CTA: `View Matches`.

### Optional content

- `Visit Official Shop`.
- Verified match or tournament highlight.

### Asset requirements

- Approved NUSC team or player photograph.
- Wide desktop image.
- Intentional mobile crop or mobile-specific image.
- Text-safe area for heading and CTAs.
- Responsive image dimensions and focal point.

### Layout

- Full-width visual treatment with constrained content.
- Clear text-safe area over or beside the image, according to the design system.
- CTA group remains stable and wraps cleanly.
- Avoid an oversized hero that pushes all useful football content below the first viewport.

### Interaction

- Optional short entrance reveal for copy and actions.
- CTA hover, focus, and active states.
- No aggressive parallax or continuous animation.
- Hero content must remain immediately available if JavaScript fails.

### Accessibility

- Contains the page-level `h1`.
- Image has meaningful alt text if informative; decorative treatment uses empty alt text.
- Text remains readable over every responsive crop.
- Essential information is not embedded only in the image.

### Acceptance criteria

- A first-time visitor can identify NUSC within seconds.
- Hero works at 375px, 768px, 1024px, and 1440px.
- Both primary actions have valid destinations.
- No image loading shift or text clipping occurs.

## 6. About NUSC Section

**Owner:** `AboutSection`

**Section ID:** `about`

**Heading:** `Who We Are`

### Purpose

Give first-time visitors a concise, factual introduction to the club.

### Required content

- Short description of NUSC.
- Club football identity and purpose.
- CTA: `Discover Our Story`.

### Optional content

- Founded year.
- Home location.
- Motto.
- Football focus.
- Supporting club image.

### Content rules

- Use only verified facts.
- Keep the copy concise rather than presenting the full history.
- Avoid unsupported superlatives or audience claims.

### Layout

- Text and image may use a two-column desktop composition.
- Stack content on mobile.
- Keep key facts readable; do not compress them into a cramped horizontal row.

### Acceptance criteria

- The section explains NUSC without requiring prior knowledge.
- `Discover Our Story` has a valid destination.
- The section remains readable when the image is unavailable.

## 7. Achievements Section

**Owner:** `AchievementsSection`, `AchievementCard`

**Section ID:** `achievements`

**Heading:** `Our Achievements`

### Purpose

Build credibility through a small number of verified highlights.

### Achievement fields

```ts
type Achievement = {
  id: string;
  year: string;
  competition: string;
  result: string;
  description?: string;
  image?: SiteAsset;
  status: "verified" | "mock" | "pending";
};
```

### Required content

Each visible achievement includes:

- Year.
- Competition.
- Result or distinction.

### Example

```text
2025
NSF Martyrs' Memorial Trophy
Champions
```

### Layout

- Show approximately 2 to 4 major highlights.
- Use a visual grid or horizontal arrangement on desktop.
- Use one or two columns on tablet where content remains readable.
- Stack cards on small screens when necessary.

### Rules

- Do not invent missing achievements.
- Do not show unverified competition marks.
- Do not render empty achievement cards.
- Supporting images are optional and must be approved.

### Acceptance criteria

- Every displayed achievement is verified or clearly marked mock during development.
- Years, competition names, and results remain readable at mobile widths.
- Cards do not change height unpredictably due to unbounded content.

## 8. Matchday Section

**Owner:** `MatchdaySection`, `MatchCard`, `ResultCard`

**Section ID:** `matches`

**Heading:** `Next Match`

### Purpose

Make current football activity prominent and easy to scan.

### Next Match fields

- NUSC.
- Opponent.
- Date.
- Competition.
- Venue.
- Match status.
- Optional match destination.

### Last Result fields

- NUSC.
- Opponent.
- Score.
- Optional date and competition.

### Example structure

```text
NEXT MATCH
NUSC VS OPPONENT
30 OCT 2026
IFL
Chumoukedima Football Stadium
[VIEW MATCH]

LAST RESULT
NUSC 3 - 1 OPPONENT
```

### Layout

- Give this section strong visual prominence.
- Present Next Match and Last Result as related but distinct blocks.
- Use a two-column layout at wider widths when readable.
- Stack the blocks at small widths.
- Keep date, status, venue, and competition readable without hover.

### Content rules

- Use mock match data until official data is available.
- Do not imply live scores or a live match centre.
- Use a real venue and opponent only after verification.
- Provide a neutral fallback when a crest is unavailable.

### Accessibility

- Use `<time datetime="...">` for dates.
- Do not communicate match status through colour alone.
- Give team crests useful alternative text or treat them as decorative when team names are adjacent.

### Acceptance criteria

- Match and result information is scannable at 375px.
- No date, venue, score, or team name is clipped.
- `View Match` appears only when a valid destination exists.

## 9. Team Section

**Owner:** `TeamSection`, `PlayerCard`

**Section ID:** `team`

**Heading:** `Our Team`

### Purpose

Introduce the squad without creating individual player pages in the current scope.

### Player fields

```ts
type Player = {
  id: string;
  name: string;
  position: string;
  squadNumber?: string;
  image: SiteAsset;
  status: "verified" | "mock" | "pending";
};
```

### Required content

Each player card may include:

- Approved photograph.
- Full name.
- Position.
- Squad number if published.

Possible positions:

- Goalkeeper.
- Defender.
- Midfielder.
- Forward.

CTA: `Meet the Team`.

### Layout

- Strong player-card grid on desktop.
- Two or three columns on tablet as card width permits.
- One or two columns on mobile depending on legibility.
- Stable image ratio and card dimensions.

### Rules

- Never fabricate player identities, positions, numbers, or statistics.
- Do not imply player profile routes exist unless implemented.
- Player names and positions must be visible without hover.

### Acceptance criteria

- Cards remain legible at all required widths.
- Placeholder players are never presented as official players in production.
- `Meet the Team` reaches a real section or route.

## 10. Our Journey Section

**Owner:** `JourneySection`, `TimelineItem`

**Section ID:** `journey`

**Heading:** `Our Journey`

### Purpose

Present the club's history and development as a visual sequence.

### Journey fields

- Year or date.
- Event title.
- Short description.
- Optional club image.
- Optional approved competition badge.
- Content status.

### Suggested sequence

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

### Layout

- Visual timeline on desktop.
- Vertical timeline on mobile.
- Preserve event order and readability without interaction.
- Use markers, imagery, and short descriptions.

### Interaction

- Static timeline is the preferred baseline.
- If interactive, use real buttons or links.
- Keyboard users must be able to move through milestones.
- Do not hide the full history behind hover or dragging.

### Acceptance criteria

- The sequence remains understandable when stacked.
- All dates and events are verified or marked mock.
- Timeline animation is optional and never required to read the content.

## 11. Football for Peace / Community Section

**Owner:** `CommunitySection`, `CommunityFeature`, optional `Gallery`

**Section ID:** `community`

**Heading:** `Football for Peace`

**Core message:** `Football brings us together.`

### Purpose

Show NUSC's community identity beyond matches and competition.

### Required content

- Large community image.
- Short supporting copy.
- Community activity imagery where approved.
- CTA: `Our Community`.

### Content themes

- Youth development.
- Community football.
- Football programs.
- Local engagement.
- Football for Peace activities.

### Layout

- Feature composition on desktop.
- Stacked image, copy, and CTA on mobile.
- Optional gallery for supporting activities.
- Keep the section visually significant in the page narrative.

### Rules

- Use real initiatives only.
- Obtain consent for identifiable people, especially children.
- Do not make unsupported social-impact claims.
- Do not put essential context only in captions or image overlays.

### Acceptance criteria

- A visitor can understand what NUSC does beyond football competition.
- Community imagery remains meaningful at all crops.
- Gallery controls, if used, are keyboard and screen-reader accessible.

## 12. News and Updates Section

**Owner:** `NewsSection`, `NewsCard`

**Section ID:** `news`

**Heading:** `News & Updates`

### Purpose

Provide supporters, fans, and media with a current editorial entry point.

### News fields

```ts
type NewsItem = {
  id: string;
  category: "Match Preview" | "Club News" | "Player Update" | "Community" | "Announcement";
  headline: string;
  date: string;
  excerpt?: string;
  image: SiteAsset;
  href?: string;
  status: "verified" | "mock" | "pending";
};
```

### Required content

Display the latest three stories. Each card includes:

- Image.
- Category.
- Headline.
- Date.
- Optional excerpt.
- Link when a destination exists.

CTA: `View All News` only when a valid news destination exists.

### Layout

- Three-card grid on desktop.
- Two-column layout on tablet where readable.
- One card per row on narrow mobile.
- Consistent image ratio.
- Headline and date visible without hover.

### Rules

- Static or mock stories are allowed during development.
- Do not imply a CMS or full archive exists if it does not.
- Use verified publication dates and destinations in production.

### Acceptance criteria

- Exactly the intended number of stories is shown for the landing page.
- Cards remain readable at 375px.
- Broken or missing destinations are not rendered as active links.

## 13. Sponsors and Partners Section

**Owner:** `PartnersSection`, `PartnerLogo`

**Section ID:** `partners`

**Heading:** `Proudly Supported By`

### Purpose

Give approved sponsors and partners intentional, premium visibility and introduce the partnership opportunity.

### Partner fields

- Organisation name.
- Approved logo.
- Partner tier, if relevant.
- Optional link.
- Approval status.

Possible tiers:

- Main Partner.
- Official Partner.
- Event Partner.
- Community Partner.
- Media Partner.

CTA: `Become a Partner`.

### Layout

- Responsive logo grid or tiered arrangement.
- Generous breathing room.
- Stable logo aspect ratios.
- Legible marks at mobile widths.
- Optional partner tier labels where verified and necessary.

### Rules

- Use current approved partners only.
- Do not invent partner names, logos, tiers, or relationships.
- Do not claim audience size, reach, engagement, or ROI without verified evidence.
- Make partner identity available as text or accessible labels.

### Acceptance criteria

- Logos are not stretched, clipped, or visually lost.
- Partner grouping remains understandable on mobile.
- `Become a Partner` has a real contact or partnership destination.

## 14. Merchandise and Shop Section

**Owner:** `MerchandiseSection`, `MerchandiseCard`, `ShopLink`

**Section ID:** `shop`

**Heading:** `Wear the Club. Support the Club.`

### Purpose

Promote supporter merchandise and direct visitors to the official external Shop.

### Possible content

- Official jersey.
- Training wear.
- Scarf.
- Cap.
- Other approved merchandise.
- Supporter-focused lifestyle imagery.

CTA: `Visit Official Shop`.

### Layout

- Promotional composition, not a dense e-commerce catalogue.
- One strong feature image or a small approved product arrangement.
- Responsive media and clear CTA.
- Stack content on mobile.

### Rules

- Read the Shop URL from central configuration.
- Do not hard-code Shop URLs in components.
- Do not implement cart, checkout, payment, product database, inventory, or accounts.
- Do not show unverified prices, stock, size, delivery, or availability.
- Mark mock product visuals during development.

### Acceptance criteria

- Shop CTA works from navigation and page content.
- External destination behavior is clear.
- No e-commerce UI appears in the landing page.

## 15. Why Partner With NUSC Section

**Owner:** `PartnershipSection`

**Section ID:** `partnership`

**Heading:** `Why Partner With NUSC`

### Purpose

Explain the partnership proposition without turning the page into an aggressive sales page.

### Content pillars

- **Football:** Associate your brand with football and sporting activity.
- **Community:** Support local football and community initiatives.
- **Visibility:** Gain presence across relevant club and event touchpoints.
- **Partnership:** Develop meaningful collaborations with the club.

CTA: `Talk to NUSC` or `Become a Partner`.

### Layout

- Four-pillar arrangement on desktop.
- Two-by-two grid on tablet where readable.
- Stacked pillars on mobile.
- Clear but restrained CTA.

### Rules

- Keep claims qualitative unless approved metrics exist.
- Link to an official contact destination or footer contact area.
- Do not create a fake form or pretend to process enquiries.

### Acceptance criteria

- A business visitor can understand why to contact NUSC.
- No unsupported metrics or promises appear.
- CTA destination is real and functional.

## 16. Final Club CTA Section

**Owner:** `FinalCtaSection`

**Section ID:** `join`

**Heading:** `Be Part of the Journey.`

### Supporting copy

`Follow NUSC. Support the team. Rise together.`

### Required actions

- `Follow NUSC`.
- `Join Us`.

### Optional action

- `Partner With NUSC`.

### Purpose

Conclude the club story with clear participation paths for supporters, players, and partners.

### Layout

- Strong closing visual treatment.
- Stacked copy and actions on mobile.
- Balanced copy/action composition on desktop.
- Preserve football and community identity.

### Rules

- Use verified social and contact destinations.
- Do not present a non-functional registration form as a real workflow.
- Keep the section connected to the club story rather than making it a generic advertisement.

### Acceptance criteria

- Users can follow, contact, or join through real destinations.
- Buttons remain readable and reachable at mobile widths.
- The section provides a clear conclusion before the footer.

## 17. Footer Section

**Owner:** `SiteFooter`

### Purpose

Provide final orientation, official contact information, social links, legal links, and club identity.

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

### Layout

- Stack content on mobile.
- Use grouped columns on tablet.
- Use a multi-column layout aligned to the main container on desktop.
- Keep contact details and links wrapped and readable.

### Rules

- Use only official contact details.
- Do not leave broken social links or placeholder legal links in production.
- Keep Shop available in the footer.

### Acceptance criteria

- Footer provides all required orientation and contact information.
- All links have valid destinations.
- Footer remains usable at 375px without overflow.

## 18. Cross-Section Data Rules

Use static data objects while no backend exists:

```text
team
matches
results
achievements
journey
community
news
partners
merchandise
```

Rules:

- Keep data separate from presentation components.
- Give each item a stable ID.
- Include explicit content status.
- Keep official URLs in configuration.
- Do not duplicate the same content in multiple components.
- Use approved asset metadata and alt text.

## 19. Cross-Section Interaction Rules

- Smooth in-page scrolling may be used for anchors.
- Sticky navigation may show active section state.
- Hover effects must have touch-safe equivalents.
- Scroll reveals must not hide content when JavaScript fails.
- Gallery and timeline interactions are optional.
- Any accordion or modal must be keyboard accessible.
- Respect `prefers-reduced-motion`.
- No section may imply live or backend functionality that is not implemented.

## 20. Section QA Matrix

| Section | Content check | Responsive check | Interaction check |
|---|---|---|---|
| Header | Labels and destinations verified | Mobile menu fits | Focus and active state work |
| Hero | Club identity and copy approved | Crop and CTA wrapping | CTAs work without delay |
| About | Facts verified | Text/media stack cleanly | Story CTA works |
| Achievements | Years and results verified | Cards remain readable | No hidden essential content |
| Matchday | Match data verified or mock | Score and details wrap | Match link is valid |
| Team | Player data approved | Cards fit at all widths | Names visible without hover |
| Journey | Milestones verified | Timeline stacks clearly | Optional interaction is keyboard usable |
| Community | Initiative and consent approved | Images and copy remain clear | Gallery works if present |
| News | Story data and dates valid | Cards collapse cleanly | Links work where provided |
| Partners | Logos and tiers approved | Logos remain legible | Partner CTA works |
| Shop | Product status and URL verified | CTA and media fit | External link behavior is clear |
| Partnership | Claims approved | Pillars remain readable | Contact CTA works |
| Final CTA | Social/contact links verified | Actions stack cleanly | Follow and Join paths work |
| Footer | Contact/legal data official | Columns stack without overflow | All links work |

## 21. Definition of Done

The section implementation is complete when:

- Every required section exists in the approved order.
- Each section has the required heading, content, and action.
- Components and data follow the documented ownership boundaries.
- Verified and mock content are clearly separated.
- Responsive layouts work at all required reference widths.
- Navigation and CTA destinations are valid.
- Accessibility and reduced-motion requirements pass.
- No section creates horizontal overflow, overlap, or unreadable content.
- No backend, live API, registration, or e-commerce behavior has been introduced.
- The complete section QA matrix has been reviewed.
