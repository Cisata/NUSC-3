# NUSC Content Specification

## 1. Purpose

This document defines the content structure, messaging, data requirements, calls to action, and publishing rules for the Nagaland United Sports Club (NUSC) responsive landing page.

The page must work as the digital front door of NUSC. A first-time visitor should quickly understand:

- Who NUSC is.
- What the club does on and beyond the football pitch.
- Why supporters and the local community should care.
- How supporters, players, media, and businesses can engage.

This is a front-end-only landing page. Static or mock content is permitted during development, but it must be clearly separated from verified club content and replaced before production launch.

## 2. Content Governance

### 2.1 Naming

Use the official name consistently:

```text
Nagaland United Sports Club (NUSC)
```

The source material contains both `NUSC` and `NSUC`. Confirm the official spelling with the club before publishing and do not mix the variants in the interface, metadata, filenames, or social copy.

Use `Chumoukedima, Nagaland` or the club's approved local spelling consistently after confirmation.

### 2.2 Verification rules

Only publish the following when verified by NUSC:

- Founding year.
- Location and venue details.
- Club history and milestones.
- Achievements and competition results.
- Player names, positions, and images.
- Fixtures, opponents, results, dates, and match status.
- Sponsor and partner names, logos, and tiers.
- Community activities and participant identities.
- Contact details and social URLs.
- Merchandise availability and product details.
- Official Shop URL.

Do not invent:

- Audience figures.
- Sponsorship prices.
- Commercial returns or reach.
- Player statistics.
- League standings.
- Match information.
- Partner relationships.
- Awards or trophies.
- Contact details.
- Product prices, sizes, stock, or delivery claims.

### 2.3 Content states

Every content item must have a known state:

```text
verified   Approved for official publication.
mock       Development-only content; must be replaced or visibly labelled.
pending    Awaiting club approval; do not publish as official.
archived   Previously approved but no longer current.
```

Production builds must not display `mock` or `pending` content as if it were official.

## 3. Audience and Content Needs

### Supporters

Need quick access to:

- Club identity and story.
- Upcoming match and last result.
- Team and player content.
- News and highlights.
- Community activity.
- Social links.
- Merchandise and the official Shop.

Primary actions: `View Matches`, `Follow NUSC`, `Read News`, and `Visit Official Shop`.

### Football fans

Need:

- Matchday context.
- Competition and venue information.
- Team identity.
- Results and news.

Primary actions: `View Matches`, `Meet the Team`, and `Follow NUSC`.

### Potential players

Need:

- A clear sense of club identity.
- Team and development context.
- A clear joining or contact path.

Primary actions: `Join NUSC` and `Contact`.

The current page does not implement real registration.

### Coaches and football community

Need:

- Community and development activity.
- Club values.
- Football program context.

Primary action: `Our Community`.

### Sponsors and businesses

Need:

- Club credibility.
- Achievements and community role.
- Partnership opportunities.
- Clear contact path.

Primary actions: `Become a Partner` and `Talk to NUSC`.

### Media

Need:

- Current club news.
- Match information.
- Approved images and announcements.
- A reliable contact route.

Primary actions: `View News` and `Contact`.

### General public

Need a plain-language introduction that does not assume prior knowledge of NUSC.

Primary action: `Explore NUSC`.

## 4. Content Architecture

The landing page follows this narrative:

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
  -> Final CTA
  -> Footer
```

The sequence moves from identity, to credibility, to current football activity, to people and history, to community, then to editorial and commercial engagement.

## 5. Global Content Requirements

### Header navigation

Navigation labels:

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

Rules:

- `Home` returns to the top of the page.
- Section links use stable anchor IDs.
- `Shop` links to the configured external official Shop.
- `Join NUSC` remains the primary header action.
- The mobile menu contains the same essential destinations.
- Avoid using `Store` in one place and `Shop` in another unless the club approves both terms.

### Link and CTA writing

Use concise, destination-specific labels:

- `Explore NUSC`
- `Discover Our Story`
- `View Matches`
- `Meet the Team`
- `Our Community`
- `View All News`
- `Become a Partner`
- `Visit Official Shop`
- `Talk to NUSC`
- `Follow NUSC`
- `Join Us`

Do not use vague labels such as `Click Here`, `Learn More`, or `Submit` when a more specific label is possible.

## 6. Section Content Specifications

### 6.1 Hero

**Section ID:** `home`

**Purpose:** Identify NUSC immediately and create a clear first action.

**Required content:**

- Full club name: `Nagaland United Sports Club`.
- Primary message: `Rise Together`.
- One concise supporting statement about representing Nagaland through football, developing local talent, and bringing communities together through sport.
- Primary CTA: `Explore NUSC`.
- Secondary CTA: `View Matches`.

**Optional content:**

- `Visit Official Shop`.
- Verified match or tournament highlight.

**Content rules:**

- Keep the message short enough to scan over photography.
- Do not place essential information only in the background image.
- Do not include an unverified match highlight.
- Use the full club name near the beginning of the page.

**Suggested content shape:**

```text
NAGALAND UNITED SPORTS CLUB
RISE TOGETHER
Representing Nagaland through football, developing local talent,
and bringing communities together through sport.
[EXPLORE NUSC] [VIEW MATCHES]
```

### 6.2 About NUSC

**Section ID:** `about`

**Heading:** `Who We Are`

**Purpose:** Give first-time visitors a concise, factual introduction.

**Required content:**

- Short club description.
- Club purpose or football identity.
- One action: `Discover Our Story`.

**Optional facts:**

- Founded year.
- Home location.
- Motto.
- Football focus.

**Content rules:**

- Use only facts verified by NUSC.
- Keep the introduction concise; do not turn the landing page into a long history page.
- Avoid unsupported claims such as largest, fastest-growing, or most successful.

### 6.3 Achievements

**Section ID:** `achievements`

**Heading:** `Our Achievements`

**Purpose:** Build credibility through selected verified highlights.

Each achievement requires:

- Year.
- Competition.
- Result or distinction.
- Optional supporting image.
- Optional short context.

**Example data shape:**

```text
2025
NSF Martyrs' Memorial Trophy
Champions
```

**Content rules:**

- Show approximately 2 to 4 major highlights.
- Confirm every year, competition, and result.
- Do not fill missing highlights with invented achievements.
- Mark development examples as mock data outside production.

### 6.4 Matchday

**Section ID:** `matches`

**Heading:** `Next Match`

**Purpose:** Make current football activity easy to find and understand.

**Next match fields:**

- Home team.
- Away team.
- Date.
- Competition.
- Venue.
- Match status.
- Optional match link.

**Last result fields:**

- Home team.
- Home score.
- Away team.
- Away score.
- Date or competition where useful.

**Suggested display:**

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

**Content rules:**

- Use mock data only until official data is available.
- Label development match data in the data source, not with confusing production copy.
- Use a clear status such as `Upcoming`, `Postponed`, or `Full Time` only when verified.
- Do not imply live scores or live APIs exist.
- Use a real venue name only after confirmation.

### 6.5 Team

**Section ID:** `team`

**Heading:** `Our Team`

**Purpose:** Introduce the squad and connect visitors to the players behind the club.

Each player card may contain:

- Approved image.
- Full name.
- Position.
- Squad number, if published.

**Example positions:**

- Goalkeeper.
- Defender.
- Midfielder.
- Forward.

**CTA:** `Meet the Team`.

**Content rules:**

- Use approved player information only.
- Do not fabricate player names, roles, numbers, or statistics.
- Do not imply individual player pages exist if they are not implemented.
- If using placeholders, use clearly marked development names such as `Player 01` only outside production.

### 6.6 Our Journey

**Section ID:** `journey`

**Heading:** `Our Journey`

**Purpose:** Present the club story as a visual sequence of verified milestones.

Each timeline event requires:

- Year or date.
- Event title.
- One-sentence description.
- Optional image.
- Optional approved competition mark.

**Suggested content shape:**

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

**Content rules:**

- Confirm all dates and event names.
- Keep descriptions short and readable.
- Do not present a future possibility as a completed milestone.
- Ensure the timeline remains understandable when stacked on mobile.

### 6.7 Football for Peace / Community

**Section ID:** `community`

**Heading:** `Football for Peace`

**Core message:** `Football brings us together.`

**Purpose:** Show what NUSC stands for beyond matches and results.

**Required content:**

- Short explanation of the club's community role.
- One large community image.
- One or more supporting activity images where approved.
- CTA: `Our Community`.

**Possible content themes:**

- Youth development.
- Community football.
- Football programs.
- Local engagement.
- Football for Peace activities.

**Content rules:**

- Describe real initiatives only.
- Obtain permission before publishing identifiable participants, especially children.
- Do not make broad social-impact claims without evidence.
- Keep the tone human and concrete rather than corporate.

### 6.8 News and Updates

**Section ID:** `news`

**Heading:** `News & Updates`

**Purpose:** Give supporters a current editorial entry point.

Display the latest three stories. Each story requires:

- Category.
- Headline.
- Date.
- Image.
- Optional excerpt.
- Destination link when available.

**Approved category options:**

- `Match Preview`
- `Club News`
- `Player Update`
- `Community`
- `Announcement`

**CTA:** `View All News`.

**Content rules:**

- Use static or mock stories for the current front-end assignment.
- Clearly distinguish mock stories during development.
- Use real publication dates for approved stories.
- Do not suggest that a full CMS or article archive exists if it does not.
- Headlines should be specific and informative, not generic filler.

### 6.9 Sponsors and Partners

**Section ID:** `partners`

**Heading:** `Proudly Supported By`

**Purpose:** Give approved partners premium visibility and establish a route for future partnership enquiries.

Each partner entry requires:

- Organisation name.
- Approved logo.
- Partner tier, if relevant.
- Optional link.
- Approval status.

**Possible tiers:**

- Main Partner.
- Official Partner.
- Event Partner.
- Community Partner.
- Media Partner.

**CTA:** `Become a Partner`.

**Content rules:**

- Use only approved current partners.
- Do not invent logos, names, tiers, or relationships.
- Do not claim audience size, reach, engagement, or return on investment without verified evidence.
- Give logos enough space to remain legible and equal in visual weight.

### 6.10 Why Partner With NUSC

**Section ID:** `partnership`

**Heading:** `Why Partner With NUSC`

**Purpose:** Explain partnership value without turning the landing page into a sales deck.

**Suggested content pillars:**

#### Football
Associate your brand with football and sporting activity.

#### Community
Support local football and community initiatives.

#### Visibility
Gain presence across relevant club and event touchpoints.

#### Partnership
Develop meaningful collaborations with the club.

**Primary CTA:** `Talk to NUSC` or `Become a Partner`.

**Content rules:**

- Keep claims qualitative unless verified metrics exist.
- Link to an official contact destination or footer contact area.
- Do not create a fake enquiry form or pretend a submission was received.

### 6.11 Shop and Merchandise

**Section ID:** `shop`

**Heading:** `Wear the Club. Support the Club.`

**Purpose:** Connect supporters to official merchandise without implementing e-commerce.

**Possible content:**

- Official jersey.
- Training wear.
- Scarf.
- Cap.
- Other approved merchandise.
- Supporter-focused image.

**CTA:** `Visit Official Shop`.

**Content rules:**

- The Shop is an external redirect.
- Use the centrally configured Shop URL.
- Do not implement cart, checkout, payment, inventory, product database, or account functionality.
- Do not display price, stock, sizes, delivery, or availability unless verified.
- Clearly mark mock product visuals during development.
- If the official Shop URL is not available, use a clearly marked placeholder and block production release until it is configured.

### 6.12 Final CTA

**Section ID:** `join`

**Heading:** `Be Part of the Journey.`

**Supporting copy:** `Follow NUSC. Support the team. Rise together.`

**Actions:**

- `Follow NUSC`.
- `Join Us`.
- Optional `Partner With NUSC`.

**Purpose:** Conclude the club story with clear participation paths.

The final CTA should feel like a continuation of the club identity, not an advertisement. Use verified social links and contact routes.

### 6.13 Footer

**Purpose:** Provide the final source of orientation and contact information.

**Club block:**

- NUSC logo.
- Short verified description.
- Club identity.

**Quick links:**

- About.
- Team.
- Matches.
- News.
- Community.
- Partners.
- Shop.
- Contact.

**Contact block:**

- Official email.
- Official phone.
- Official stadium or club address.

**Social links:**

- Facebook.
- Instagram.
- YouTube.
- X/Twitter.

**Legal links:**

- Privacy.
- Terms.

**Copyright:**

```text
© 2026 Nagaland United Sports Club. All Rights Reserved.
```

Do not publish placeholder contact details or broken social URLs.

## 7. Content Model

Keep content in static data objects separate from components.

### Site identity

```ts
type SiteIdentity = {
  shortName: "NUSC";
  fullName: string;
  location: string;
  motto: string;
  description: string;
  status: "verified" | "mock" | "pending";
};
```

### Call to action

```ts
type ContentCta = {
  label: string;
  href: string;
  kind: "anchor" | "external" | "social" | "contact";
  status: "verified" | "mock" | "pending";
};
```

### Section content

```ts
type ContentSection = {
  id: string;
  eyebrow?: string;
  heading: string;
  description?: string;
  status: "verified" | "mock" | "pending";
};
```

### News item

```ts
type NewsItem = {
  id: string;
  category: string;
  headline: string;
  date: string;
  excerpt?: string;
  image: string;
  href?: string;
  status: "verified" | "mock" | "pending";
};
```

The full data model may live in the separate data specification, but components should consume consistent content shapes rather than inline strings scattered through the page.

## 8. Voice and Editorial Style

NUSC content should feel:

- Competitive.
- Urban.
- Energetic.
- Premium.
- Football-focused.
- Connected to the local community.
- Confident without exaggeration.

Writing rules:

- Prefer short, active sentences.
- Lead with clear facts and actions.
- Use football language naturally, without forcing jargon.
- Let community content sound human and specific.
- Keep commercial copy direct and restrained.
- Avoid generic corporate language.
- Avoid unsupported superlatives such as `best`, `biggest`, `leading`, or `unmatched`.
- Avoid inflated sponsorship promises.
- Avoid long paragraphs in cards and hero areas.
- Use sentence case for supporting copy and the approved display treatment for headings.
- Keep the club name and key terminology consistent.

## 9. Content Length Guidance

These are practical limits for the landing page, not rigid copy rules:

- Hero supporting statement: 1 to 2 short sentences.
- About description: approximately 50 to 90 words.
- Achievement description: 1 short sentence.
- Match venue/status: short labels or single lines.
- Community feature: approximately 40 to 80 words.
- News headline: ideally one to two lines at desktop width.
- News excerpt: approximately 15 to 30 words.
- Partnership pillar: heading plus 1 to 2 short sentences.
- Footer description: approximately 20 to 40 words.

Do not shrink typography to force copy into a fixed card. Edit the copy or allow it to wrap.

## 10. CTA Destination Matrix

| CTA | Destination | Required state |
|---|---|---|
| Explore NUSC | `#about` | Always available |
| Discover Our Story | `#about` or approved story route | Destination must exist |
| View Matches | `#matches` or approved match route | Match content available |
| Meet the Team | `#team` or approved team route | Team content available |
| Our Community | `#community` | Community content available |
| View All News | Approved news destination | Do not use if no destination exists |
| Become a Partner | `#partnership` or official contact | Contact path available |
| Talk to NUSC | Official contact destination | Contact details verified |
| Visit Official Shop | Central `shopUrl` | Official URL verified before launch |
| Follow NUSC | Approved social profile | Social URL verified |
| Join Us | Official contact or approved join information | No fake registration flow |

## 11. SEO Content Requirements

The page should include the full club name and location in visible content and metadata.

Recommended content signals:

- Page title: `Nagaland United Sports Club | Football in Nagaland`.
- Description that mentions NUSC, Chumoukedima, football, community, matches, news, partners, and Shop without keyword stuffing.
- One page-level `h1` containing the club name or an equivalent truthful identity heading.
- Descriptive section headings for About, Matches, Team, Community, News, Partners, and Shop.
- Machine-readable dates for matches, results, and news.
- Structured data only for visible, verified content.

Do not expose mock opponents, invented achievements, placeholder sponsors, or unconfirmed Shop URLs in production metadata or structured data.

## 12. Accessibility Content Requirements

- Write link text that describes the destination.
- Provide meaningful alt text for informative club, player, match, community, and merchandise imagery.
- Use empty alt text for decorative images.
- Ensure sponsor logos have text alternatives when they communicate partner identity.
- Do not communicate match status, partner tier, or product information through colour alone.
- Keep headings in a logical order.
- Make all content understandable without hover, animation, or autoplay media.
- Provide captions or transcripts for meaningful video content.

## 13. Content QA Checklist

### Accuracy

- [ ] NUSC spelling is confirmed and consistent.
- [ ] Club name and location are verified.
- [ ] Founding year and journey milestones are verified.
- [ ] Achievements are verified.
- [ ] Match details and results are current and verified.
- [ ] Player names, positions, images, and descriptions are approved.
- [ ] Community claims and participant imagery are approved.
- [ ] Sponsor names, logos, and tiers are approved.
- [ ] Contact details and social URLs are official.
- [ ] Shop URL is configured and official.

### Content state

- [ ] No `mock` or `pending` content appears as official in production.
- [ ] Placeholder images and copy have replacement owners.
- [ ] Static data is separated from component markup.
- [ ] Future features are not described as currently available.

### Clarity

- [ ] A first-time visitor understands NUSC without prior knowledge.
- [ ] Each section has one clear purpose.
- [ ] Every primary CTA has a working destination.
- [ ] Commercial copy contains no unsupported metrics or promises.
- [ ] News cards include category, headline, date, and image.
- [ ] Match cards include opponent, date, competition, venue, and status where applicable.

### Accessibility and SEO

- [ ] One appropriate `h1` exists.
- [ ] Section headings are descriptive and ordered logically.
- [ ] Links and buttons use accurate labels.
- [ ] Image alternative text is complete.
- [ ] Visible content agrees with metadata and structured data.
- [ ] Text remains readable at mobile widths and 200% zoom.

## 14. Definition of Done

The content specification is complete for implementation when:

- Every landing-page section has a purpose, heading, content fields, CTA, and verification rules.
- Audience needs and primary user journeys are reflected in the page order and actions.
- Mock, pending, verified, and archived content states are defined.
- Navigation labels and CTA destinations are consistent.
- Official facts are separated from illustrative examples.
- The external Shop remains a configured link rather than an e-commerce feature.
- Content length guidance supports responsive layouts.
- SEO and accessibility content requirements are documented.
- The final content QA checklist passes before production release.
