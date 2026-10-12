# NUSC Football Club Website — Design System

## 01. Design System Overview

### Purpose

This design system defines the visual language for the **Nagaland United Sports Club (NUSC)** website.

It adapts the premium football-editorial characteristics extracted from the supplied reference website while establishing a distinct NUSC identity based on the club crest.

The system intentionally changes the reference balance:

> **WHITE is the dominant website color. NAVY establishes identity. RED creates emphasis.**

The website should feel:

- Bold
- Athletic
- Premium
- Editorial
- Modern
- Institutional
- Energetic
- Commercially credible
- Locally rooted
- Football-first

The reference design emphasizes bold condensed typography, large photography, sharp geometry, editorial grids, carousels, generous whitespace, and strong sports presentation. These principles are retained, while the NUSC implementation uses substantially more white space and white surfaces than the reference. The supplied extraction identifies these characteristics as core parts of the reference design language. 

---

# 02. Brand Identity

## 2.1 Club Identity

Brand:

**Nagaland United Sports Club**

Abbreviation:

**NUSC**

Club tagline:

**RISE TOGETHER**

Primary visual symbol:

**NUSC crest featuring the red bull, stars, shield, and ribbon.**

The crest communicates:

- Strength
- Unity
- Competition
- Regional identity
- Football culture
- Determination
- Collective ambition

The website should therefore feel like an extension of the crest rather than simply placing the crest on a generic football template.

---

# 03. Logo-Derived Color System

The supplied crest was visually inspected to derive the core palette.

The dominant visual colors are:

1. White
2. Deep navy
3. Bright red
4. Darker navy variations
5. Cool light gray

The website should use these colors in a controlled hierarchy.

## 3.1 Website Color Ratio

Target approximate visual balance:

| Color | Target Usage |
|---|---:|
| White | 55–65% |
| Navy | 20–25% |
| Light gray | 8–12% |
| Red | 5–8% |
| Secondary blue tones | 2–5% |

These are **design-use ratios**, not literal pixel measurements.

### Most important rule

> Do not allow navy and red to visually overpower the website.

The crest can contain strong navy and red because it is a compact brand mark. The website should breathe around the crest using white as the dominant surface.

---

# 04. Primary Color Palette

## 4.1 NUSC Navy

### Primary Navy

```text
HEX: #002050
RGB: 0, 32, 80
```

Use for:

- Main navigation text
- Major headings
- Footer
- Dark promotional sections
- Fixture section backgrounds
- Buttons where appropriate
- Iconography
- Borders
- Overlays
- Large decorative typography

This is the principal brand color.

---

## 4.2 Deep Navy

```text
HEX: #001840
RGB: 0, 24, 64
```

Use for:

- Deep backgrounds
- Hero overlays
- Footer gradients
- High-contrast sections
- Background typography
- Dark UI states

Do not use this as the default page background.

---

## 4.3 Bright NUSC Red

```text
HEX: #F80008
RGB: 248, 0, 8
```

Use for:

- Primary CTAs
- Active states
- Important indicators
- Score/result emphasis
- Promotional elements
- Small graphic accents
- Premium/status labels
- Hover states
- Selected navigation indicators

Red should communicate **energy and action**.

It should not become the dominant page color.

---

## 4.4 Dark Red

```text
HEX: #C90008
```

Use sparingly for:

- Pressed button states
- Deep red gradients
- Dark promotional artwork
- Hover transitions
- Decorative depth

---

## 4.5 Pure White

```text
HEX: #FFFFFF
RGB: 255, 255, 255
```

This is the dominant website surface.

Use for:

- Main page backgrounds
- Header
- News sections
- Team sections
- Player profiles
- Club information
- Sponsor sections
- Shop sections
- Content cards
- Main typography on dark sections
- Large whitespace areas

White should occupy most of the visual field.

---

## 4.6 Off-White

```text
HEX: #F7F8FA
```

Use for:

- Alternating page sections
- Secondary card surfaces
- Forms
- Tables
- Fixture backgrounds
- Filter panels
- Subtle content separation

This prevents the website from becoming visually flat while keeping white dominant.

---

## 4.7 Cool Gray

```text
HEX: #E6EAF0
```

Use for:

- Dividers
- Borders
- Input backgrounds
- Disabled controls
- Card separators
- Subtle UI structure

---

## 4.8 Muted Blue Gray

```text
HEX: #5B718A
```

Use for:

- Metadata
- Dates
- Secondary navigation
- Categories
- Supporting text
- Captions

---

# 05. Color Hierarchy

The website should generally follow this hierarchy:

```text
WHITE
  ↓
NAVY
  ↓
LIGHT GRAY
  ↓
MUTED BLUE
  ↓
RED
```

Red is an **accent**.

Navy is the **identity color**.

White is the **environment**.

---

# 06. Color Application Rules

## 6.1 White Sections

Default content sections should be:

```text
Background: #FFFFFF
Heading:    #002050
Body:       #24354A
Metadata:   #5B718A
Accent:     #F80008
```

These should make up the majority of the website.

---

## 6.2 Navy Sections

Use navy for high-impact sections:

```text
Background: #002050
Heading:    #FFFFFF
Body:       #E8EEF5
Accent:     #F80008
```

Good candidates:

- Fixtures
- Major club statement
- Footer
- Selected promotional banners
- Matchday experiences

---

## 6.3 Red Usage

Red should appear in small, intentional areas.

Examples:

```text
[ SHOP NOW ]

LIVE

MATCHDAY

BUY TICKETS

VIEW SQUAD
```

Avoid:

```text
Entire red section
Red navigation
Red body backgrounds
Red cards everywhere
Red headings throughout the page
```

---

# 07. Typography

The typography should retain the athletic editorial personality of the reference while becoming recognizable as NUSC.

The reference extraction identifies condensed, bold, italic, uppercase display typography as a defining characteristic. fileciteturn0file0L191-L230

## 7.1 Display Font

Recommended:

**Barlow Condensed**

Alternative:

- Oswald
- Bebas Neue
- Roboto Condensed
- Archivo Narrow
- Anton

Preferred characteristics:

- Condensed
- Bold
- Strong
- Slightly italic for major sports headlines
- Uppercase
- Tight line-height

---

## 7.2 Body Font

Recommended:

**Inter**

Alternatives:

- Manrope
- Roboto
- Helvetica Neue
- Arial

Body typography should remain neutral and highly readable.

---

# 08. Typography Roles

## Display XL — Hero

```text
Font: Barlow Condensed
Weight: 800
Style: Italic
Transform: Uppercase
Size: clamp(3rem, 6vw, 6.5rem)
Line-height: 0.88–0.98
Letter-spacing: -0.025em
```

---

## Display L — Section Heading

```text
Font: Barlow Condensed
Weight: 800
Style: Italic
Size: clamp(2rem, 3.5vw, 3.25rem)
Line-height: 0.95
```

---

## Display M — Card Heading

```text
Font: Barlow Condensed
Weight: 700–800
Size: 1.4rem–2rem
Line-height: 0.98–1.05
```

---

## Navigation

```text
Font: Inter
Weight: 700
Size: 0.9rem–1rem
Text-transform: uppercase
```

---

## Body

```text
Font: Inter
Weight: 400–500
Size: 1rem
Line-height: 1.55
```

---

## Metadata

```text
Font: Inter
Weight: 600
Size: 0.75rem–0.875rem
Color: #5B718A
```

---

# 09. Typography Rules

### Major sports headlines

Use:

```text
UPPERCASE
CONDENSED
BOLD
ITALIC
```

### Editorial content

Use:

```text
Sentence case
Bold
Readable sans-serif
```

### Metadata

Use:

```text
Small
Uppercase where appropriate
Muted
Compact
```

Avoid using the display font for paragraphs.

---

# 10. Layout Philosophy

The website should follow an editorial sports layout rather than a generic corporate layout.

The supplied reference uses asymmetric grids, strong horizontal rhythm, large whitespace, and large image-led sections. fileciteturn0file0L793-L820

NUSC should preserve these characteristics while increasing the amount of white space.

Core principles:

- Large content containers
- Strong horizontal alignment
- Asymmetric editorial grids
- Large imagery
- Sharp cards
- Controlled whitespace
- Strong section transitions
- Clear visual hierarchy

---

# 11. Global Container

Recommended:

```css
.container {
  width: min(100% - 48px, 1440px);
  margin-inline: auto;
}
```

Large desktop:

```text
Maximum width: 1440px
```

Very large screens may use:

```text
Maximum width: 1520–1600px
```

The website should never feel stretched across the entire viewport.

---

# 12. Grid System

Use a conceptual 12-column grid.

```text
12 columns
24px–32px gutters
```

Typical layouts:

### Featured + supporting stories

```text
8 columns + 4 columns
```

### Three cards

```text
4 + 4 + 4
```

### Hero content

```text
7–8 columns
```

### Promotional content

```text
6 + 6
```

CSS Grid should be preferred over manually positioned elements.

---

# 13. Spacing System

Use a consistent scale:

```text
4px
8px
12px
16px
24px
32px
40px
48px
64px
80px
96px
120px
144px
```

Recommended section padding:

```text
Desktop: 96–128px
Tablet: 72–96px
Mobile: 56–72px
```

The reference specifically uses large amounts of whitespace between major sections. fileciteturn0file0L1018-L1030

---

# 14. White-Space Strategy

White space is not empty space.

Use it to:

- Separate content categories
- Emphasize photography
- Make typography feel premium
- Give sponsor logos room
- Prevent navy/red fatigue
- Establish hierarchy

The website should feel **open**, not crowded.

---

# 15. Header

## Desktop Header

Default state:

```text
WHITE BACKGROUND
```

Structure:

```text
┌───────────────────────────────────────────────────────────────┐
│ MENU │ LOGO │ NEWS │ TEAM │ MATCHES │ CLUB │ SHOP │ TICKETS │
└───────────────────────────────────────────────────────────────┘
```

Recommended:

```text
Height: 76–84px
Background: #FFFFFF
Text: #002050
Border-bottom: #E6EAF0
```

---

# 16. Header Menu

Menu block can retain the reference's strong structural treatment. The reference extraction identifies a dedicated rectangular menu block around 78–80px square. fileciteturn0file0L382-L410

NUSC implementation:

```text
Background: #002050
Icon: #FFFFFF
Label: #FFFFFF
```

Desktop:

```text
80 × 80px
```

Mobile:

```text
64 × 64px
```

---

# 17. Header Navigation

Suggested primary navigation:

```text
NEWS
TEAM
FIXTURES
RESULTS
CLUB
SHOP
```

Optional:

```text
ACADEMY
MEDIA
COMMUNITY
```

Navigation should be compact and confident.

---

# 18. Header CTAs

Right side:

```text
TICKETS
SHOP
```

Use rectangular buttons.

Example:

```text
[ TICKETS ]   [ SHOP ]
```

Recommended:

```text
Tickets:
background #002050
text #FFFFFF

Shop:
background #F80008
text #FFFFFF
```

Do not turn every navigation item into a button.

---

# 19. Sticky Header

The header should remain visible during scrolling.

State 1:

```text
WHITE
```

State 2, if placed over a dark hero:

```text
TRANSPARENT
WHITE TEXT
```

On scroll:

```text
WHITE
NAVY TEXT
```

The reference uses a transparent-to-white header transition as a major interaction pattern. fileciteturn0file0L328-L370

---

# 20. Hero Section

The hero should be high-impact but **not permanently dark**.

Recommended NUSC hero:

```text
Large football photography
+
White content space
+
Navy typography
+
Selective red accent
```

Rather than making every hero predominantly navy, allow photography to remain visible and use a controlled navy overlay only where text requires it.

---

# 21. Hero Structure

```text
┌──────────────────────────────────────────────────────────┐
│                                                          │
│                 FOOTBALL IMAGE                           │
│                                                          │
│  MATCHDAY                                               │
│  NUSC VS ______                                         │
│                                                          │
│  [ MATCH CENTRE ]                                       │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

# 22. Hero Overlay

When text sits on photography:

```css
background:
linear-gradient(
  to bottom,
  rgba(0,32,80,0.00) 35%,
  rgba(0,32,80,0.35) 65%,
  rgba(0,32,80,0.92) 100%
);
```

Do not apply a heavy navy wash to the entire image.

The photograph should remain recognizable.

---

# 23. Hero Background Typography

Use oversized low-opacity typography such as:

```text
NUSC
UNITED
RISE
```

Characteristics:

```text
Opacity: 0.04–0.10
Color: #002050 or #FFFFFF
Font: Barlow Condensed
Weight: 800
```

The reference uses oversized background typography as a depth-building device. fileciteturn0file0L579-L605

---

# 24. Hero CTA

Primary:

```text
[ MATCH CENTRE ]
```

Secondary:

```text
VIEW FIXTURES  >
```

Primary CTA:

```text
Background: #F80008
Text: #FFFFFF
Sharp corners
```

Secondary CTA:

```text
Text: #FFFFFF or #002050
No pill
Arrow
```

---

# 25. Section Heading System

Use:

```text
SECTION NAME  /  VIEW ALL >
```

Example:

```text
LATEST NEWS  /  VIEW ALL >
```

Typography:

```text
LATEST NEWS
Barlow Condensed
Bold Italic
Uppercase
Navy
```

```text
VIEW ALL >
Inter / condensed
Bold
Muted blue
```

---

# 26. News Section

News should primarily live on a **white background**.

Recommended:

```text
Background: #FFFFFF
```

This is a key departure from an overly navy sports site.

---

# 27. News Layout

Use an asymmetric editorial layout:

```text
┌─────────────────────────┬───────────────┐
│                         │ Story         │
│   FEATURED STORY        ├───────────────┤
│                         │ Story         │
│                         ├───────────────┤
│                         │ Story         │
└─────────────────────────┴───────────────┘
```

Featured story:

```text
60–65%
```

Supporting stories:

```text
35–40%
```

---

# 28. Featured News Card

Use a large image.

Recommended ratio:

```text
4:5
```

Overlay:

```text
transparent
→
navy gradient
```

Content:

```text
CATEGORY
HEADLINE
DATE
```

---

# 29. Secondary News Cards

Structure:

```text
IMAGE
CATEGORY
TITLE
DATE
```

No card shadow.

No rounded corners.

Use spacing rather than borders.

---

# 30. News Card Hover

On hover:

```text
Image scale: 1.03–1.05
Transition: 400–600ms
```

Title may transition toward red.

Example:

```text
NAVY → RED
```

Keep the effect subtle.

---

# 31. Fixtures Section

Fixtures are one of the areas where navy should be used heavily.

Suggested:

```text
Background: #002050
```

This creates a visual contrast against the white news section.

The reference similarly places fixtures on a strong dark section. fileciteturn0file0L624-L659

---

# 32. Fixture Cards

Use:

```text
Background: #F7F8FA
Text: #002050
```

Approximate desktop size:

```text
320–340px × 205–220px
```

Geometry:

```text
border-radius: 0
```

Optional bottom-right diagonal cut.

---

# 33. Fixture Card Content

```text
[ MEN ]  SAT 18 OCT

NUSC
      VS
OPPONENT

19:00
Venue
```

Competition labels should use small rectangular tags.

---

# 34. Match Status

Status colors:

```text
UPCOMING
Navy

LIVE
Red

FULL TIME
Muted blue

POSTPONED
Dark red / gray
```

---

# 35. Fixture Logos

Club badges should remain prominent.

Use:

```text
40–64px
```

for normal fixtures.

For major match cards:

```text
56–80px
```

Do not overdecorate the match card.

---

# 36. Fixture Background Graphics

Use subtle:

- Crest watermark
- Competition symbol
- Stadium silhouette
- Abstract shield
- Football pattern

Opacity:

```text
0.03–0.08
```

The reference uses low-opacity watermark graphics inside fixture cards. fileciteturn0file0L721-L733

---

# 37. Results Section

Results should use the same fixture component.

Example:

```text
FULL TIME

NUSC       2
OPPONENT   1

MATCH REPORT >
```

The score should be visually dominant.

---

# 38. Team / Squad Section

Use a predominantly white background.

Player cards should be image-led.

Recommended:

```text
White page
Large player photography
Navy typography
Red accent metadata
```

Example:

```text
┌────────────────────┐
│                    │
│    PLAYER IMAGE    │
│                    │
├────────────────────┤
│  07                │
│  PLAYER NAME       │
│  MIDFIELDER        │
└────────────────────┘
```

---

# 39. Player Card Geometry

```text
border-radius: 0
```

Use a subtle angled corner or geometric crop.

Avoid floating rounded cards.

---

# 40. Player Number

Player number can use giant background typography:

```text
07
```

Opacity:

```text
0.06–0.12
```

This ties squad cards to the editorial visual language.

---

# 41. Club Story Section

Use white as the main surface.

Possible layout:

```text
IMAGE              TEXT
████████           OUR STORY
████████           ----------
████████           About NUSC...
```

Use strong typography and generous spacing.

---

# 42. Promotional Banner

Promotional sections can introduce stronger navy/red usage.

Recommended balance:

```text
Navy: 55–65%
White: 25–35%
Red: 5–15%
```

Examples:

- Tickets
- Matchday
- Membership
- Shop
- Academy
- Community initiatives

---

# 43. Commercial / Shop Section

The website should have a visible commercial pathway.

Suggested heading:

```text
THE NUSC SHOP
```

Products should sit on white/light-gray backgrounds.

Use red for:

```text
SHOP NOW
BUY KIT
VIEW COLLECTION
```

Do not make the entire shop section red.

---

# 44. CTA System

## Primary CTA

```text
background: #F80008
color: #FFFFFF
border: none
border-radius: 0
padding: 14px 28px
font-weight: 800
text-transform: uppercase
```

---

## Secondary CTA

```text
background: #002050
color: #FFFFFF
```

---

## Tertiary CTA

```text
color: #002050
background: transparent
```

with:

```text
VIEW ALL >
```

---

# 45. CTA Hover

Primary:

```text
#F80008
→
#C90008
```

Secondary:

```text
#002050
→
#001840
```

Add:

```text
transform: translateY(-1px)
```

Only if appropriate.

---

# 46. Cards

Global card rule:

```text
Sharp
Minimal
Editorial
Image-led
Low decoration
```

Default:

```css
border-radius: 0;
box-shadow: none;
```

The reference specifically favors hard-edged rectangular cards and minimal rounding. fileciteturn0file0L1366-L1384

---

# 47. Geometric Corner Treatment

Use the diagonal corner treatment selectively.

Good locations:

- Fixtures
- Match cards
- Player cards
- Promotional cards
- Competition cards

Do not use it on every element.

It should function as a recognizable NUSC visual motif.

---

# 48. Video Section

Use a white background.

Heading:

```text
NUSC TV
```

or:

```text
LATEST VIDEOS
```

Video cards:

```text
16:9 image
PLAY icon
CATEGORY
TITLE
DATE
```

---

# 49. Video Badge

Duration:

```text
▶ 03:42
```

Use a dark navy badge.

Premium/exclusive:

```text
[ EXCLUSIVE ]
```

Use red.

---

# 50. Carousels

Use horizontal content carousels for:

- Fixtures
- Results
- News
- Videos
- Players
- Shop products
- Sponsors

The reference uses visible arrows, partial next-card reveals, and progress indicators. fileciteturn0file0L1572-L1591

---

# 51. Carousel Controls

Desktop:

```text
┌────┐
│ ←  │
└────┘

                    ┌────┐
                    │  → │
                    └────┘
```

Style:

```text
Background: #FFFFFF
Color: #002050
Border: none
Square
```

On navy sections:

```text
Background: #F7F8FA
```

---

# 52. Carousel Progress

Avoid conventional circular dots.

Prefer:

```text
━━━━━━
   ━━
```

or:

```text
━━━━━━━━━━━━
━━━━
```

Use:

```text
Active: #F80008
Inactive: #C9D1DC
```

---

# 53. Sponsor Section

Sponsor section should be predominantly white.

This is one of the best places to reinforce the user's requested white-heavy direction.

Recommended:

```text
Background: #FFFFFF
```

Logos:

- Monochrome navy
- Natural aspect ratio
- Generous spacing
- No cards
- No borders

---

# 54. Sponsor Grid

Use:

```text
CSS Grid
```

Desktop:

```text
5–7 logos per row
```

Tablet:

```text
3–4
```

Mobile:

```text
2
```

Never force logos into identical dimensions.

---

# 55. Social Media

Place social links below sponsors.

Use:

```text
Navy monochrome icons
```

Hover:

```text
Navy → Red
```

Icons should remain visually restrained.

---

# 56. Footer

The footer is one of the few areas where navy should dominate.

```text
Background: #002050
Text: #FFFFFF
Secondary: #B9C7D8
Accent: #F80008
```

This gives the page a strong closing section.

---

# 57. Footer Structure

Suggested:

```text
NUSC
├── Club
│   ├── About
│   ├── History
│   ├── Leadership
│   └── Community
│
├── Football
│   ├── First Team
│   ├── Fixtures
│   ├── Results
│   └── Squad
│
├── Media
│   ├── News
│   ├── Videos
│   ├── Gallery
│   └── Downloads
│
├── Services
│   ├── Tickets
│   ├── Shop
│   └── Contact
```

---

# 58. Footer Brand Statement

Use oversized typography.

Potential NUSC statement:

```text
RISE TOGETHER
```

or:

```text
NAGALAND UNITED
```

or:

```text
NUSC
```

Typography:

```text
Barlow Condensed
800
Uppercase
White
Very large
```

This should become a recognizable website-ending signature.

---

# 59. Footer App / Digital Area

If the club eventually has an app:

```text
DOWNLOAD THE NUSC APP
```

Use actual app-store badges.

If there is no app, replace this with:

```text
FOLLOW NUSC
```

and social links.

---

# 60. Imagery

Photography should be one of the strongest parts of the site.

Prioritize:

- Match action
- Goals
- Celebrations
- Training
- Supporters
- Stadium
- Coaches
- Player portraits
- Community events
- Local Nagaland identity

Avoid generic stock football photography.

The supplied reference emphasizes high-resolution, emotionally expressive, full-bleed sports imagery. fileciteturn0file0L1423-L1447

---

# 61. Image Treatment

Default:

```text
Natural color
High contrast
Sharp detail
Minimal artificial effects
```

Use navy gradients only where text needs protection.

Do not put a navy overlay over every photograph.

---

# 62. Photography + White Space

A major NUSC rule:

> Let photographs breathe against white.

Example:

```text
WHITE SPACE

[ LARGE FOOTBALL IMAGE ]

WHITE SPACE

SECTION HEADING

WHITE SPACE
```

This keeps the site premium rather than visually heavy.

---

# 63. Borders

Use very few borders.

Preferred:

```text
1px solid #E6EAF0
```

Avoid:

```text
Thick decorative borders
Multiple nested borders
Borders around every card
```

---

# 64. Shadows

Default:

```text
No shadow
```

If required:

```css
box-shadow: 0 8px 24px rgba(0, 32, 80, 0.08);
```

Use only for:

- Dropdowns
- Floating navigation
- Modal windows
- Sticky elements

Not for every content card.

---

# 65. Icons

Use simple monochrome icons.

Preferred:

```text
Lucide
Phosphor
Heroicons
```

Style:

```text
Stroke: 1.75–2px
Color: Navy
```

Active:

```text
Red
```

---

# 66. Iconography Rules

Icons should support text rather than replace it.

Good:

```text
→ VIEW ALL
```

Not:

```text
→
```

with no context.

---

# 67. Motion

Motion should feel athletic and controlled.

Recommended:

```text
Fast interaction: 180–250ms
Standard transition: 300–450ms
Image transition: 400–700ms
```

Use:

- Image zoom
- Slide transitions
- Fade
- Translate
- Header transition
- Button color transitions

Avoid excessive bouncing or elastic animations.

---

# 68. Hover Language

### Links

```text
Navy → Red
```

### Images

```text
Scale 1.03–1.05
```

### Buttons

```text
Slight darkening
```

### Cards

```text
Image movement
Typography emphasis
```

---

# 69. Accessibility

Maintain:

```text
WCAG-conscious contrast
Keyboard navigation
Visible focus states
Alt text
Semantic headings
Accessible carousel controls
Reduced-motion support
```

Never use red as the only indicator of state.

For example:

```text
LIVE
●
```

should include text, not just a red dot.

---

# 70. Responsive System

## Desktop

```text
≥ 1200px
```

Characteristics:

- Full navigation
- Large hero
- 12-column layouts
- Multi-card carousels
- Large typography
- Full sponsor grid
- Multi-column footer

---

## Tablet

```text
768–1199px
```

Characteristics:

- Reduced navigation
- Smaller hero
- 2-column editorial layouts
- Smaller cards
- Reduced spacing
- 3–4 sponsor logos per row

---

## Mobile

```text
< 768px
```

Characteristics:

- Hamburger menu
- Compact header
- 1-column editorial content
- Horizontal swipe carousels
- Reduced hero height
- Smaller display type
- 2 sponsor logos per row
- Stacked footer

---

# 71. Mobile Header

Suggested:

```text
┌─────────────────────────────┐
│ ☰    NUSC LOGO      SHOP   │
└─────────────────────────────┘
```

Keep only the most important utility action visible.

Everything else can enter the menu.

---

# 72. Mobile Hero

Do not simply shrink the desktop hero.

Recompose it.

Recommended:

```text
Image
↓
dark lower gradient
↓
small category
↓
large headline
↓
CTA
```

Hero title:

```text
36–44px
```

---

# 73. Mobile News

Use:

```text
FEATURED
↓
STORY
↓
STORY
↓
STORY
```

Avoid squeezing the desktop asymmetric grid into a narrow screen.

---

# 74. Mobile Fixtures

Fixtures become a horizontal swipe carousel.

Show:

```text
1 full card
+
small portion of next card
```

This indicates additional content.

---

# 75. Mobile Sponsor Grid

Use:

```text
2 columns
```

with generous vertical spacing.

Do not shrink logos excessively to fit too many into one row.

---

# 76. Design Do / Don't

## DO

- Use white as the dominant surface
- Use navy as the primary identity color
- Use red sparingly
- Use bold condensed sports typography
- Use large football photography
- Use sharp geometry
- Use generous whitespace
- Use editorial grids
- Use strong section transitions
- Use monochrome sponsor logos
- Use subtle geometric details

## DON'T

- Make the entire website navy
- Make red the primary background
- Use rounded SaaS-style cards
- Use excessive shadows
- Use glassmorphism
- Use gradients everywhere
- Use overly decorative UI
- Use tiny text for important information
- Overload the page with cards
- Use generic stock photography

---

# 77. Signature NUSC Visual Motifs

The following should become recurring visual elements:

### 1. Shield-inspired geometry

Derived from the crest.

### 2. Red diagonal accents

Inspired by the crest's red outer border.

### 3. Navy angular shapes

Derived from the shield.

### 4. Star motif

Use sparingly as a decorative detail.

### 5. Bull-energy imagery

Use photography and motion to communicate strength rather than repeatedly placing the bull graphic everywhere.

### 6. "RISE TOGETHER"

Use as a brand statement rather than as repetitive decoration.

### 7. White space

Make this the defining website-level characteristic.

---

# 78. Recommended Section Color Sequence

A strong homepage could follow:

```text
01  WHITE
    Header

02  PHOTO + WHITE/NAVY
    Hero

03  WHITE
    Introduction / Club statement

04  NAVY
    Fixtures

05  WHITE
    Latest News

06  #F7F8FA
    Team / Squad

07  WHITE
    Videos

08  NAVY + RED
    Promotional CTA

09  WHITE
    Shop

10  WHITE
    Sponsors

11  WHITE
    Social links

12  NAVY
    Footer
```

This ensures that white remains visually dominant.

---

# 79. Recommended Homepage Color Balance

A typical page should visually feel approximately like:

```text
████████████████████████████████
WHITE / IMAGE
████████████████████████████████

████████████████████████████████
WHITE
████████████████████████████████

████████████████████████████████
NAVY FIXTURES
████████████████████████████████

████████████████████████████████
WHITE NEWS
████████████████████████████████

████████████████████████████████
WHITE TEAM
████████████████████████████████

████████████████████████████████
NAVY/RED PROMO
████████████████████████████████

████████████████████████████████
WHITE SPONSORS
████████████████████████████████

████████████████████████████████
NAVY FOOTER
████████████████████████████████
```

The result should **feel white-first**, even though navy remains highly recognizable.

---

# 80. Design Tokens

```css
:root {
  /* Brand */
  --color-nusc-navy: #002050;
  --color-nusc-deep-navy: #001840;
  --color-nusc-red: #F80008;
  --color-nusc-dark-red: #C90008;

  /* Surfaces */
  --color-white: #FFFFFF;
  --color-off-white: #F7F8FA;
  --color-gray: #E6EAF0;

  /* Text */
  --color-text-primary: #002050;
  --color-text-body: #24354A;
  --color-text-muted: #5B718A;
  --color-text-light: #FFFFFF;

  /* Typography */
  --font-display: "Barlow Condensed", sans-serif;
  --font-body: "Inter", sans-serif;

  /* Geometry */
  --radius-none: 0px;
  --border-thin: 1px;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 40px;
  --space-8: 48px;
  --space-9: 64px;
  --space-10: 80px;
  --space-11: 96px;
  --space-12: 120px;
  --space-13: 144px;

  /* Layout */
  --container-max: 1440px;
  --container-wide: 1600px;

  /* Motion */
  --transition-fast: 200ms ease;
  --transition-standard: 350ms ease;
  --transition-slow: 600ms ease;
}
```

---

# 81. Component Architecture

```text
Website
│
├── Header
│   ├── MenuButton
│   ├── ClubLogo
│   ├── PrimaryNavigation
│   ├── UtilityNavigation
│   └── MobileMenu
│
├── Hero
│   ├── HeroMedia
│   ├── HeroOverlay
│   ├── BackgroundTypography
│   ├── HeroContent
│   └── CTA
│
├── ClubIntro
│
├── Fixtures
│   ├── SectionHeader
│   ├── FixtureCarousel
│   ├── FixtureCard
│   ├── TeamRow
│   └── CarouselControls
│
├── News
│   ├── SectionHeader
│   ├── FeaturedNews
│   └── NewsCard
│
├── Squad
│   ├── SectionHeader
│   ├── PlayerCarousel
│   └── PlayerCard
│
├── Results
│   └── ResultCard
│
├── Videos
│   ├── VideoCarousel
│   └── VideoCard
│
├── Promotions
│   ├── PromoBanner
│   ├── PromoArtwork
│   └── CTA
│
├── Shop
│   ├── ProductGrid
│   └── ProductCard
│
├── Sponsors
│   ├── SponsorGrid
│   └── SponsorLogo
│
├── SocialLinks
│
└── Footer
    ├── FooterNavigation
    ├── FooterBrand
    ├── SocialLinks
    └── GiantBrandStatement
```

---

# 82. Implementation Principles

The design should be implemented using:

- CSS Grid
- Flexbox
- CSS variables
- `clamp()`
- `aspect-ratio`
- `object-fit`
- `clip-path`
- CSS gradients
- Sticky positioning
- Responsive breakpoints
- Semantic HTML

Avoid building the design through large numbers of absolute-positioned elements.

The reference extraction similarly recommends CSS Grid, Flexbox, CSS variables, responsive sizing, aspect ratios, clip-path, gradients, and sticky positioning. fileciteturn0file0L1816-L1831

---

# 83. Final Design DNA

The NUSC website should ultimately feel like:

> **A premium football club platform with a white-first editorial environment, deep NUSC navy as the structural identity color, bright red used as an energetic accent, bold condensed sports typography, large football photography, sharp geometric cards, asymmetric editorial layouts, generous whitespace, strong matchday presentation, commercial opportunities, and a powerful club-focused footer.**

The key difference from the reference is deliberate:

```text
REFERENCE
Navy-heavy sports editorial

NUSC
White-first sports editorial
       +
Navy identity
       +
Red energy
```

The design should communicate:

```text
WHITE
= Space + Premium + Clarity

NAVY
= Identity + Trust + Football

RED
= Energy + Action + Competition

ANGULAR GEOMETRY
= Strength + Crest + Sport

CONDENSED TYPE
= Athletic + Editorial

PHOTOGRAPHY
= Emotion + Community

RISE TOGETHER
= Club identity
```

---

# 84. Non-Negotiable Design Rules

1. **White must remain the dominant website surface.**
2. **Navy should establish the NUSC identity without covering every section.**
3. **Red should be an accent, not a background system.**
4. **Major headings should use condensed athletic typography.**
5. **Cards should generally have sharp corners.**
6. **Photography should carry much of the visual emotion.**
7. **Whitespace should be generous.**
8. **Fixtures deserve a strong navy section.**
9. **News, squad, shop, and sponsor sections should primarily remain white.**
10. **The footer can return to deep navy for a strong finish.**
11. **Red should immediately communicate action or importance.**
12. **The crest's angular language should influence UI geometry without being copied everywhere.**
13. **The website should feel like a professional football club, not a generic sports template.**
14. **Commercial elements such as Shop and Tickets should be integrated naturally into the brand system.**
15. **The final result should be recognizably NUSC even without the logo being present.**

---

# 85. Reference Adaptation Principle

The supplied reference should be treated as a **visual-system reference**, not a literal template.

Retain:

- Editorial sports structure
- Bold typography
- Sharp geometry
- Large photography
- Carousels
- Strong hierarchy
- Generous whitespace
- Promotional sections
- Sponsor presentation
- Sticky navigation
- Large brand typography

Replace:

- Reference club colors
- Reference crest
- Reference players
- Reference slogans
- Reference sponsors
- Reference fixtures
- Reference club-specific content

with NUSC's own identity and content.

The original extraction explicitly recommends adapting the visual language rather than creating a pixel-for-pixel recreation. fileciteturn0file0L1906-L1933

---

# 86. One-Line Design Direction

**White-first premium football editorial design — NUSC navy for identity, red for energy, sharp shield-inspired geometry, condensed athletic typography, powerful photography, and generous whitespace.**
