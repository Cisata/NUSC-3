Design Extraction — PSG Website Reference

The following extraction consolidates all seven screenshots into a reusable visual specification for designing a new website. It focuses on the design language, layout system, typography, spacing, components, imagery, navigation, cards, interactions, responsive behavior, and visual hierarchy rather than copying PSG-specific branding/content.

1. Overall Design Direction
Core aesthetic

The website uses a premium football/sports editorial aesthetic combining:

Strong sports identity
Editorial/magazine layouts
High-impact photography
Bold condensed typography
Large whitespace
Deep navy backgrounds
White content surfaces
Sharp geometric cards
Minimal rounded corners
Strong horizontal rhythm
Large visual sections
Motion-oriented carousels
Strong CTA treatment
Premium commercial/sponsorship presentation
Design personality

The visual language can be described as:

Bold + Athletic + Editorial + Premium + Institutional + Modern

It is not a typical rounded modern SaaS design.

Avoid:

Excessive rounded cards
Excessive gradients
Floating glassmorphism
Pastel palettes
Soft shadows
Oversized pill buttons
Generic AI dashboard styling
Excessive decorative elements

Prefer:

Hard edges
Rectangular containers
Strong typography
Image-led layouts
High contrast
Controlled whitespace
Geometric cuts
Large-scale photography
Strong navy/white contrast
2. Primary Color System

The dominant visual identity is built around deep navy + white, with red used selectively.

Primary Navy

Approximate extracted value:

#0E1B36
RGB: 14, 27, 54

This is the most important color in the design.

Used for:

Hero background
Fixtures section
Footer
Large text
Navigation text
Dark overlays
Large background typography
Section backgrounds

This navy should feel almost black while retaining a noticeable blue tone.

White
#FFFFFF
RGB: 255, 255, 255

Used for:

Main content background
Header background
Hero typography
Cards
Footer text
Sponsor area
Navigation in dark mode

White is a major structural color rather than simply a text color.

Light Card Gray

Approximate:

#F2F5F8

Used heavily for fixture cards and subtle UI surfaces.

Characteristics:

Very light
Cool rather than warm
Almost white
Provides separation against navy
Allows dark typography to remain dominant
Secondary Blue-Gray

Approximate range:

#55738C
#607D94

Used for:

Metadata
Secondary labels
Category text
Dates
Supporting navigation
Muted information
Accent Red

The site uses a strong football-red accent.

Approximate:

#E30613

Potential secondary variations:

#F20D1A
#C9000B

Used selectively for:

CTA buttons
Premium labels
Promotional sections
Football-related visual accents
Strong emphasis

Red should not dominate the entire interface.

The overall hierarchy is:

NAVY
 ↓
WHITE
 ↓
LIGHT GRAY
 ↓
BLUE-GRAY
 ↓
RED ACCENT
3. Color Usage Philosophy

The screenshots demonstrate a very clear color strategy.

Dark sections
Background: #0E1B36
Text:       #FFFFFF
Secondary:  #9AAEC2
Accent:     #E30613
Light sections
Background: #FFFFFF
Text:       #0E1B36
Secondary:  #55738C
Cards:      #F2F5F8
Accent:     #E30613
Important rule

Red is an accent, not the foundation.

The design remains predominantly:

Navy / White

with red appearing when something needs attention.

4. Typography System

Typography is one of the strongest characteristics of the design.

There are effectively three typographic roles.

4.1 Display / Sports Headline

The large headlines use a:

Condensed sans-serif
Very bold weight
Italic/oblique styling
Tight letter spacing
Uppercase typography

Example visual character:

MARSEILLE V. PARIS: THE FILM
OF LE CLASSIQUE

Characteristics:

ALL CAPS
Heavy
Condensed
Italic
Aggressive
Athletic
Tight line-height

This is arguably the most important typographic element.

Suitable replacements

For a new project, fonts in this visual category include:

Oswald
Bebas Neue
Roboto Condensed
Archivo Narrow
Anton
Barlow Condensed
Teko

For a closer editorial/sports feel, a condensed bold italic treatment should be applied.

5. Supporting Typography

Regular UI and article titles use a more conventional sans-serif.

Characteristics:

Modern
Highly readable
Medium/bold weights
Compact spacing
Minimal personality
Strong hierarchy

Potential font families:

Inter
Manrope
Arial
Helvetica Neue
Roboto

The design intentionally contrasts:

Display
CONDENSED
BOLD
ITALIC
UPPERCASE

with

Body
CLEAN
MODERN
SANS-SERIF
6. Typography Hierarchy

Suggested extracted hierarchy:

HERO TITLE
60–76px+
Extra Bold
Condensed Italic
Uppercase
Very tight line height
SECTION TITLE
34–46px
Bold
Condensed Italic
Uppercase
CARD TITLE
20–26px
Bold
Normal/condensed
CATEGORY
12–14px
Bold
Uppercase
METADATA
12–15px
Medium
Blue-gray
BODY
15–18px
Regular
7. Letter Spacing

The design uses different letter-spacing behavior depending on the role.

Headlines

Generally:

letter-spacing: -0.02em;

Because the type is condensed.

Navigation

Approximately:

letter-spacing: -0.01em;
Categories

Slightly increased:

letter-spacing: 0.02–0.04em;

The result is compact rather than airy.

8. Header / Navigation

The header is one of the most important reusable components.

There are two visual states shown in the screenshots.

8.1 Transparent Hero Header

In the first screenshot, the header sits directly over the hero image.

Structure:

┌──────────────────────────────────────────────────────────┐
│ MENU │ LOGO │ NEWS │ PSG TV │ PLAYZONE │ MYPARIS        │
│                                      SIGN IN TICKETS SHOP │
└──────────────────────────────────────────────────────────┘

The header is:

Transparent
Overlaying the hero
White typography
White icons
White logo treatment
No obvious container boundary
8.2 Sticky / Scrolled Header

Later screenshots show the header as:

WHITE BACKGROUND

with:

DARK NAVIGATION
DARK LOGO
DARK ICONS

This is a major interaction pattern.

Header transition
At top:
transparent + white

↓ scroll

Sticky:
white + navy

This creates a strong visual transformation while keeping navigation available.

9. Header Dimensions

Desktop header appears approximately:

Height: 80px

The content is horizontally aligned around a central max-width.

The left menu block is unique.

10. Menu Button

The menu is not simply an icon.

It occupies its own rectangular block.

Approximate dimensions:

Width: 78–80px
Height: 80px

Dark blue background.

Inside:

☰
MENU

The hamburger consists of three horizontal lines.

Text is:

Tiny
Uppercase
White
Bold
Center aligned

This makes the menu a structural navigation element.

11. Logo Placement

Logo sits immediately after the menu block.

Approximate:

Width: 60–65px

The logo is visually isolated from the main navigation.

Spacing:

Menu → Logo
Logo → NEWS

is relatively generous.

12. Primary Navigation

Desktop links:

NEWS
PSG TV
PLAYZONE
MYPARIS

Characteristics:

Uppercase
Bold
Navy or white depending on header state
Large enough to scan quickly
Approximately 16–18px

The navigation is horizontally arranged.

No traditional dropdown arrows are visible on the main links.

13. Utility Navigation

Right side:

SIGN IN
TICKETS
SHOP
EN
⌄
Sign In

Includes a user/profile outline icon.

Tickets / Shop

These are visually treated as compact rectangular blocks.

Light-gray background in the white header.

This creates:

SIGN IN   [TICKETS] [SHOP]   EN ⌄

rather than treating every item as plain text.

14. Hero Section

The hero is the strongest visual element in screenshot 1.

It uses:

Full-width photography

The image occupies almost the entire viewport width.

There is no visible traditional card/container.

15. Hero Image Treatment

The image is:

Extremely high resolution
Full bleed
Edge-to-edge
Horizontally cropped
Strongly saturated
Football action-focused

A dark navy gradient is layered over the lower portion.

Approximate gradient:

background:
linear-gradient(
    to bottom,
    transparent 35%,
    rgba(14,27,54,.45) 60%,
    #0E1B36 88%,
    #0E1B36 100%
);

The purpose is to transition:

PHOTO
 ↓
DARK PHOTO
 ↓
NAVY

rather than ending the image abruptly.

16. Hero Content Position

Content sits toward the:

bottom-left

rather than centered.

Approximate desktop left margin:

140px

The title occupies roughly:

550–800px

depending on viewport.

17. Hero Title

The hero headline:

MARSEILLE V. PARIS: THE FILM
OF LE CLASSIQUE

demonstrates the exact editorial style.

Characteristics:

White
Uppercase
Condensed
Bold
Italic
Very large
Two lines
Tight line-height

The title overlaps the photographic area and navy gradient.

18. Hero CTA

Below the title:

READ NOW  >

Characteristics:

Uppercase
White
Small
Bold
Italic/condensed
Arrow icon
No button container

This is a text CTA, not a button.

19. Oversized Background Typography

An interesting detail in the hero is the giant background word:

PARIS

It appears behind the primary headline.

Characteristics:

Extremely large
Low contrast
Semi-transparent
Dark/gray
Positioned toward the lower-middle region
Partially obscured

This creates depth without introducing another image.

Reusable pattern
BACKGROUND WORD
       ↓
MAIN IMAGE
       ↓
HEADLINE
       ↓
CTA
20. Hero Composition Principle

The hero deliberately creates three visual layers:

Layer 1

Photography

Layer 2

Oversized typography / gradients

Layer 3

Primary content

This layered composition should be preserved in a new design.

21. Fixtures Section

The fixtures section uses the primary navy background.

#0E1B36

It appears directly after the hero.

22. Fixtures Heading

Heading:

FIXTURES

Characteristics:

White
Condensed
Bold
Italic
Uppercase
Approximately 36px

Position:

~140px left
23. Fixture Carousel

Fixtures are displayed horizontally.

The layout intentionally allows cards to extend beyond the viewport.

This communicates:

"There are more items horizontally."

24. Fixture Card

Card background:

#F2F5F8

Approximate dimensions:

Width: 325–330px
Height: 210px

Cards have sharp edges.

But the bottom-right corner has a distinctive diagonal cut.

Conceptually:

┌──────────────────┐
│                  │
│                  │
│                  │
│                  │
│              ────╲
└───────────────────╲

This is an important design motif.

25. Fixture Card Content

Top row:

[WMN]  FULL TIME

or:

[HAND] SAT SEP 26 22:30

The sport/type is placed inside a small gray-blue label.

Example:

┌─────┐
│ WMN │
└─────┘
26. Fixture Typography

Team names are:

Large
Bold
Condensed
Uppercase
Dark navy

Example:

REAL MADRID
PARIS

Team logos sit alongside the names.

27. Fixture Background Graphics

Fixture cards contain extremely subtle watermark imagery.

Examples:

Competition trophy
Club emblem
Abstract club shape

Opacity is very low.

This is an important detail because it prevents the cards from feeling empty while keeping the information readable.

28. Fixture Carousel Controls

Left/right navigation buttons are large white/light-gray square blocks.

They contain:

‹

and

›

Controls overlap the carousel edges.

29. Carousel Pagination

Below the cards is a small horizontal progress indicator.

It appears as:

────────
    ━━

The active portion is dark/white depending on background.

This is much more subtle than standard carousel dots.

30. News Section

After fixtures, the design transitions dramatically:

NAVY
 ↓
WHITE

This provides visual pacing.

31. News Header

Structure:

NEWS  /  VIEW ALL >

The slash is an important visual separator.

NEWS
Dark navy
Condensed
Italic
Bold
Uppercase
VIEW ALL
Smaller
Blue-gray
Uppercase
Bold
Arrow
32. News Grid

The news layout uses an asymmetric editorial grid.

It is not a standard equal 3-column card grid.

There is:

┌───────────────────┐ ┌───────────┐
│                   │ │           │
│                   │ │   NEWS    │
│    FEATURED       │ ├───────────┤
│     ARTICLE       │ │   NEWS    │
│                   │ │           │
│                   │ ├───────────┤
│                   │ │   NEWS    │
└───────────────────┘ └───────────┘

More precisely, the large featured story occupies roughly half the grid while smaller articles populate the remaining area.

33. Featured News Card

The featured story uses a large image.

Image ratio is approximately:

4:5 / 5:6

rather than a standard 16:9 card.

The image fills the card.

34. Featured Image Overlay

The bottom of the image transitions into dark navy using a gradient.

This allows text to sit directly on the photograph.

Example:

IMAGE
IMAGE
IMAGE
↓
DARK IMAGE
↓
NAVY
35. Featured News Typography

At bottom:

WOMEN'S FOOTBALL

small category label.

Then:

PARIS WOMEN EARN POINT IN MADRID

Large condensed italic headline.

Then:

12 hours ago

Small metadata.

36. Secondary News Cards

Secondary cards generally follow:

IMAGE
CATEGORY
TITLE
TIME

The image is rectangular.

Approximate ratio:

16:9

Titles use dark navy.

37. News Card Image Treatment

Images are highly photographic and natural.

There is little artificial styling.

No:

Heavy rounded masks
Floating shadows
Glass panels
Decorative borders

The photography itself provides visual richness.

38. News Card Categories

Categories are visually distinct.

Examples:

WOMEN'S FOOTBALL
MEN'S FOOTBALL
HANDBALL

They use:

Small uppercase text
Blue-gray
Bold/condensed styling
39. News Metadata

Date/time information is deliberately understated.

Example:

10 hours ago

Color:

Blue-gray

Font size:

12–15px
40. PSG TV Section

The video section continues the editorial system.

Heading:

LATEST ON PSG TV

Again:

Navy
Condensed
Bold
Italic
Uppercase
41. Video Carousel

Videos are arranged horizontally.

Each card includes:

IMAGE
↓
PLAY INDICATOR / DURATION
↓
CATEGORY
↓
TITLE
↓
DATE
42. Video Card

The images are approximately:

16:9

They have no visible border radius.

Cards are separated by consistent horizontal gaps.

43. Video Duration Badge

Bottom-left of the image:

▶ 16:06

The play icon sits in a small dark/navy section.

The duration is clearly visible.

44. Premium Badge

The first video includes a red badge:

🔒 PREMIUM

This appears at the upper-right.

Characteristics:

Red background
White text
Compact
High contrast
Slightly rectangular
Small lock icon

This is a useful reusable content-status component.

45. Video Titles

Video titles are:

Navy
Bold
Medium-large
Sentence case
Highly readable

Example:

Marseille v. Paris: The film of Le Classique

Unlike hero titles, these do not need to be uppercase.

46. Video Carousel Navigation

Right side:

┌────┐
│  > │
└────┘

Large square navigation control.

The carousel deliberately reveals part of the next card.

47. Large Whitespace

A particularly important characteristic is the amount of whitespace.

Between major sections there are often:

80–150px+

of vertical space.

The site does not attempt to fill every pixel.

This contributes heavily to its premium/editorial appearance.

48. Playzone Promotional Section

The Playzone banner introduces a stronger commercial/entertainment visual.

It is a wide promotional panel.

Approximate structure:

┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ENTER THE PLAYZONE AND START                            │
│  COMPETING                              PLAYERS           │
│                                                          │
│  Play games, score points and win prizes.               │
│                                                          │
│  [ PLAYZONE ]                                            │
│                                                          │
└──────────────────────────────────────────────────────────┘
49. Playzone Banner Background

Uses:

Dark background
Large abstract typography
Red lower section
Football/player photography
Dramatic lighting

The background contains oversized graphic elements.

This is more visually aggressive than the news section.

50. Player Cutouts

The players are isolated from their original backgrounds and composited into the banner.

Characteristics:

Full-body/half-body cutouts
Layered positioning
Overlap between players
Central player visually dominant
Players extend close to the bottom edge

This produces a promotional campaign feel.

51. Playzone CTA

Button:

PLAYZONE

Red rectangle.

Approximate:

Width: 170px
Height: 52px

Characteristics:

Bright red
White text
Uppercase
Bold condensed italic
Sharp corners
No excessive border radius
52. Sponsor Section

Near the bottom is a large sponsor/partner presentation area.

The background is:

WHITE

The sponsor logos are arranged in a structured grid.

53. Sponsor Logo Treatment

Logos are:

Mostly monochrome navy
Large enough to recognize
Given substantial whitespace
Not enclosed inside cards
Not surrounded by borders

The goal is:

Premium brand wall

rather than:

Logo gallery cards

54. Sponsor Grid

The logos are arranged in rows.

Approximate:

          NIKE     QATAR AIRWAYS

BEYOND   VISIT QATAR   OOREDOO   ACCOR   VISIT RWANDA   WHOOP   QNB

SNIPES   ASPETAR       EA SPORTS   beIN SPORTS   GOOGLE   BYD

The actual number changes based on row.

Important principle:

Do not use equal-sized logo boxes.

Instead, preserve each logo's natural aspect ratio.

55. Social Media Row

Below sponsors is a centered social media row.

Contains various social icons:

Facebook
Instagram
X
YouTube
Snapchat
TikTok
Threads
WhatsApp
Meta
Twitch
BeReal
Discord

Icons are:

Dark navy
Monochrome
Medium size

Spacing is generous.

56. Footer

The footer switches back to:

#0E1B36

This creates a strong ending.

57. Footer Structure

The footer is divided into columns.

Approximately:

PARIS SAINT-GERMAIN
        │
        ├── News
        ├── Men's football
        ├── Women's football
        ├── Handball
        ├── PSG TV
        ├── The Club
        ├── PSG for Communities
        ├── Ligue 1
        ├── Pressroom
        └── Careers

SERVICES
        ├── My account
        ├── Tickets
        ├── Shop
        ├── MyParis
        └── Stadium Tour

HELP
        ├── Legal notice
        ├── Privacy policy
        ├── Help center
        ├── Ligue 1
        └── Cookie preferences

DOWNLOAD THE APP
        ├── Description
        ├── App Store
        └── Google Play
58. Footer Typography

Column headings:

Light blue
Bold
Approximately 17–20px

Links:

White
Medium/bold
Approximately 15–17px

The contrast is strong.

59. App Download Area

The footer includes app-store badges.

They are actual branded badges rather than generic buttons.

Layout:

Download the app

The app for all...
available on iOS
and Android!

[ App Store ]

[ Google Play ]
60. Footer Club Logo

Large club logo sits on the right side.

This balances the multiple navigation columns.

The logo is visually large but isolated.

61. Oversized Footer Typography

The most dramatic footer element is:

ICI C'EST PARIS

It occupies a massive amount of horizontal space.

Characteristics:

White
Extremely large
Bold
Condensed
Uppercase
Tight tracking
Almost touches the bottom/edges

This functions almost like a brand signature.

62. Footer Composition

The footer therefore has three layers:

NAVIGATION
      ↓
BRAND / APP / LOGO
      ↓
MASSIVE BRAND STATEMENT

This is an excellent technique for ending a long website.

63. Global Container

Across the screenshots, content consistently uses a centered max-width.

Approximate desktop behavior:

Viewport
│
├── ~140px margin
│
├────── CONTENT ──────┤
│
└── ~140px margin

A suitable implementation:

.container {
    width: min( calc(100% - 64px), 1640px );
    margin-inline: auto;
}

At larger screens:

max-width ≈ 1640px

At the screenshot widths, actual content appears closer to roughly:

1420–1450px

depending on section.

64. Grid System

The design relies heavily on:

12-column conceptual grid

with sections spanning different numbers of columns.

Example:

Featured news
████████████

Secondary news
            ██████
            ██████
            ██████

This is better reproduced using CSS Grid than arbitrary flex layouts.

65. Spacing System

The design uses generous spacing.

Suggested extracted spacing scale:

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

Major sections should generally use:

80–120px vertical padding
66. Card Geometry

Cards generally use:

border-radius: 0

or effectively zero.

This is a crucial difference from modern SaaS design.

Exception

Some interactive controls may have tiny/no rounding.

Avoid:

border-radius: 20px;

throughout the site.

67. Geometric Cutouts

A repeated visual concept is the angled card corner.

Especially visible on fixture cards.

This can be implemented using:

clip-path

or:

::after

with a triangular cutout.

Example concept:

clip-path: polygon(
    0 0,
    100% 0,
    100% 86%,
    92% 100%,
    0 100%
);
68. Image Aspect Ratios

Recommended extracted ratios:

Content	Ratio
Hero	~21:9 / viewport
Featured News	~4:5
News Cards	~16:9
Video Cards	~16:9
Promotional Banner	~3:1
Team imagery	variable
Sponsor logos	natural aspect ratio
69. Image Philosophy

Photography is treated as content, not decoration.

Images should be:

High resolution
Action-oriented
Emotionally expressive
Strongly cropped
Full bleed
Professionally lit
Color rich

For a sports website, prioritize:

ACTION
EMOTION
PLAYERS
CROWD
STADIUM
CELEBRATION
DETAIL

over generic stock photography.

70. Image Overlays

The design frequently uses:

linear-gradient()

rather than opaque boxes.

For example:

linear-gradient(
    to bottom,
    transparent 45%,
    rgba(14,27,54,.75) 80%,
    #0E1B36 100%
)

This keeps the photograph visible while making text readable.

71. Shadows

The website uses very limited shadows.

Instead of:

card shadow

it relies on:

Contrast
Spacing
Color blocks
Photography
Typography

This makes it feel editorial rather than application-like.

72. Borders

Borders are minimal.

When used, they are:

Thin
Light gray
Structural

Avoid decorative borders around every card.

73. Icons

Icons are:

Simple
Line-based where appropriate
Monochrome
Small
Visually subordinate to typography

Examples:

Menu
User
Chevron
Arrow
Play
Lock
Social icons

No colorful icon system is used.

74. Button Design

Primary button:

Rectangular
Sharp corners
Strong color
Uppercase
Bold condensed typography

Example:

┌────────────────┐
│    PLAYZONE    │
└────────────────┘

Suggested:

padding: 16px 36px;
background: #E30613;
color: white;
border: none;
border-radius: 0;
75. Secondary CTA Design

Text links use:

LABEL  >

rather than a traditional button.

Examples:

READ NOW >
VIEW ALL >

This creates a cleaner editorial hierarchy.

76. Interaction Philosophy

The website is highly interactive, but interaction is communicated visually through:

Carousels
Arrows
Hover states
Sticky header
Image movement
CTA transitions
Content scrolling

rather than through excessive UI controls.

77. Carousel Behavior

Carousels should:

Show multiple cards
Reveal the next card partially
Have visible arrows
Use pagination/progress
Support touch/swipe
Maintain consistent card widths

Desktop:

[ CARD ][ CARD ][ CARD ][ CARD ][ partial ]

Mobile:

[ CARD ]
   →
78. Responsive Strategy

Although the screenshots are desktop, the design suggests a clear responsive approach.

Desktop
Full navigation
Large hero
Horizontal carousels
Multi-column news
Sponsor grid
Footer columns
Tablet
Reduced navigation
Smaller hero
2-column news
Reduced carousel card widths
Mobile

Likely transformation:

Hamburger navigation
Smaller logo
Compact utility controls
Hero title reduced significantly
1-column news
Horizontal swipe carousels
2-column sponsor grid
Stacked footer
79. Mobile Header Recommendation

For a new implementation:

┌──────────────────────────────┐
│ ☰       LOGO          SIGN IN│
└──────────────────────────────┘

The desktop utility links can move into the menu.

80. Responsive Typography

Suggested scaling:

Desktop
Hero: 64–80px
Section: 40px
Card: 22–28px
Tablet
Hero: 48–60px
Section: 32–38px
Card: 20–24px
Mobile
Hero: 36–44px
Section: 28–32px
Card: 18–22px
81. Visual Rhythm

One of the strongest characteristics of the reference is alternating visual density.

The page follows roughly:

HIGH IMPACT
Hero
   ↓
DENSE
Fixtures
   ↓
AIRY
News
   ↓
AIRY
PSG TV
   ↓
HIGH IMPACT
Promotional banner
   ↓
VERY AIRY
Sponsors
   ↓
DENSE
Footer
   ↓
BRAND STATEMENT

This prevents the page from feeling monotonous.

82. Section Transition Strategy

Use strong changes between sections.

For example:

NAVY
████████████████

WHITE
────────────────

WHITE
────────────────

WHITE
────────────────

DARK PROMO
████████████████

WHITE
────────────────

NAVY FOOTER
████████████████

Do not use subtle gray backgrounds for every section.

83. Design Motifs to Reuse

The following motifs are particularly important:

1. Condensed italic headlines
2. Deep navy backgrounds
3. Sharp rectangular cards
4. Angled card corners
5. Full-bleed photography
6. Gradient image overlays
7. Oversized background typography
8. Editorial asymmetric grids
9. Horizontal carousels
10. Monochrome logos
11. Large whitespace
12. Strong red CTA
13. Sticky transparent-to-white header
14. Massive footer typography
84. Components Extracted

A reusable component architecture based on these screenshots would include:

Header
├── MenuButton
├── ClubLogo
├── PrimaryNavigation
├── UtilityNavigation
├── SignIn
├── TicketsButton
├── ShopButton
└── LanguageSelector

Hero
├── HeroImage
├── HeroOverlay
├── BackgroundTypography
├── HeroContent
├── HeroTitle
└── TextCTA

Fixtures
├── SectionHeader
├── FixtureCarousel
├── FixtureCard
├── SportBadge
├── TeamRow
├── TeamLogo
├── CarouselArrow
└── CarouselProgress

News
├── SectionHeader
├── FeaturedNewsCard
├── NewsGrid
├── NewsCard
├── CategoryLabel
└── Metadata

Video
├── SectionHeader
├── VideoCarousel
├── VideoCard
├── PlayBadge
├── DurationBadge
└── PremiumBadge

Promo
├── PromoBanner
├── BackgroundGraphic
├── PlayerComposition
├── PromoCopy
└── PrimaryButton

Partners
├── SponsorSection
├── SponsorGrid
├── SponsorLogo
└── SocialLinks

Footer
├── FooterNavigation
├── FooterColumn
├── AppDownload
├── ClubLogo
└── GiantBrandStatement
85. Suggested Design Tokens

For implementation, the extracted system can be represented as:

:root {
    --color-navy: #0E1B36;
    --color-white: #FFFFFF;
    --color-card: #F2F5F8;
    --color-muted: #55738C;
    --color-red: #E30613;

    --font-display: "Condensed Display", sans-serif;
    --font-body: "Inter", sans-serif;

    --radius-none: 0px;

    --space-xs: 8px;
    --space-sm: 16px;
    --space-md: 24px;
    --space-lg: 40px;
    --space-xl: 64px;
    --space-2xl: 96px;
    --space-3xl: 120px;

    --container-max: 1640px;
}
86. Recommended CSS Philosophy

The implementation should prioritize:

CSS Grid
Flexbox
CSS Variables
Clamp()
Aspect-ratio
Object-fit
Clip-path
Pseudo-elements
CSS gradients
Sticky positioning

Avoid building the design with hundreds of arbitrary pixel positions.

87. Important Layout Rule

The website should not feel like a collection of independent components.

Everything needs to feel like one editorial system.

For example:

Hero headline
        ↓
Fixture heading
        ↓
News heading
        ↓
Video heading
        ↓
Footer typography

should share the same display typography.

Likewise:

Fixture cards
News cards
Video cards
Promo CTA

should share the same sharp geometry.

88. What Makes This Design Distinctive

The strongest elements to preserve when adapting this design to another brand are:

Typography

Condensed + italic + bold

Geometry

Sharp rectangular structures

Color

Deep navy + white + restrained red

Photography

Large, emotional, full-bleed imagery

Layout

Editorial asymmetric grids

Navigation

Transparent → white sticky header

Content

Horizontal carousels

Branding

Oversized typography

Spacing

Large areas of controlled whitespace

Commercial layer

Promotional banners + sponsor wall + shop/commerce entry points

89. Elements That Should NOT Be Copied Literally

If this is being used as a reference for a new website, the design language can be adopted without reproducing the PSG-specific identity.

Replace:

PSG colors
PSG logo
PSG player photography
PSG slogans
PSG-specific typography
PSG sponsors
PSG fixtures

with the new organization's:

Logo
Brand colors
Players/team
Sponsors
Fixtures
News
Shop
Club messaging

The goal should be:

Inspired by the visual system, not a pixel-for-pixel recreation.

90. Final Design DNA

If the entire reference were reduced to one design specification:

A premium sports editorial website built around deep navy and white, with bold condensed italic typography, full-bleed action photography, sharp geometric cards, asymmetric editorial grids, horizontal content carousels, generous whitespace, restrained red accents, and large-scale brand typography. Navigation transitions from a transparent overlay to a white sticky header, while major sections alternate between dark and light surfaces to create visual rhythm.

The visual formula
DEEP NAVY
      +
WHITE
      +
CONDENSED ITALIC TYPE
      +
FULL-BLEED PHOTOGRAPHY
      +
SHARP GEOMETRY
      +
EDITORIAL GRID
      +
CAROUSELS
      +
RED ACCENTS
      +
LARGE WHITESPACE
      +
OVERSIZED BRAND TYPOGRAPHY