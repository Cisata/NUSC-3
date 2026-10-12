# NUSC Asset Specification

## 1. Purpose

This document defines the visual, brand, content, and technical assets required for the Nagaland United Sports Club (NUSC) responsive landing page.

The website is a front-end-only landing page. Assets may be real, approved club assets or clearly labelled development placeholders. No image, logo, sponsor, player, result, achievement, product, or contact detail should be presented as official until it has been verified by NUSC.

The source document uses both `NUSC` and `NSUC` in places. Use `NUSC` and `Nagaland United Sports Club` consistently after the official brand spelling is confirmed.

## 2. Asset Principles

1. Football and the NUSC identity are the primary visual story.
2. Use real club photography wherever approved assets are available.
3. Do not fabricate players, sponsors, achievements, merchandise, match details, or commercial claims.
4. Use placeholders only during development, and label them in data or content configuration.
5. Keep assets organised separately from presentation components.
6. Provide responsive image variants rather than shipping one oversized file to every device.
7. Preserve the original asset in an archive; optimise copies for web delivery.
8. Record ownership, licence, attribution, approval status, and replacement requirements.
9. Prepare meaningful alternative text for informative images and empty alternative text for decorative images.
10. Do not place essential text, match data, or sponsor information only inside an image.

## 3. Required Asset Inventory

### 3.1 Brand assets

| Asset | Use | Required variants | Status |
|---|---|---|---|
| Primary NUSC logo | Header, footer, hero support, social/share assets | Full colour, one-colour light, one-colour dark | Requires approved club files |
| Logo mark | Small screens, favicon, compact UI | SVG or transparent PNG | Requires approved club files |
| Wordmark | Header or footer where the full name is needed | SVG and transparent PNG | Requires approved club files |
| Club crest | Team and football identity moments | SVG, transparent PNG | Requires approved club file |
| Favicon | Browser tab | 16px, 32px, ICO or PNG | Requires approved club file |
| App/touch icon | Mobile bookmark/share | 180px or larger square PNG | Requires approved club file |
| Brand colour references | CSS variables, overlays, buttons, backgrounds | HEX/RGB values with contrast notes | Requires approved brand guidance |
| Approved typography | Headings, body text, labels | Font files or licensed webfont source | Requires brand decision |

Do not redraw or alter the crest, wordmark, sponsor logos, or official marks without approval. Keep clear space around each logo and never stretch, skew, rotate, recolour, or add effects to an official mark.

### 3.2 Hero assets

The hero is the strongest visual signal on the page and should communicate NUSC, football, Nagaland, ambition, and community immediately.

Required:

- One approved high-impact team or player photograph.
- A desktop crop suitable for at least 1440px wide layouts.
- A mobile crop that keeps the main subject and text-safe area visible.
- A low-size responsive version for mobile loading.
- An approved hero fallback if the primary image fails.
- A social preview image based on the club identity, not an arbitrary crop.

Recommended source preparation:

- Shoot or select a wide image with the focal subject positioned away from the primary text area.
- Keep important faces, the ball, crest, and action away from crop edges.
- Provide a clean area or approved overlay for `NAGALAND UNITED SPORTS CLUB` and `RISE TOGETHER`.
- Avoid darkening or blurring the photograph so heavily that the real scene cannot be understood.

Suggested web variants:

```text
hero-nusc-768.avif
hero-nusc-1280.avif
hero-nusc-1920.avif
hero-nusc-mobile-768.avif
```

### 3.3 Club and team photography

Use for the About, Team, Journey, matchday, and final CTA sections.

Required categories:

- Team group photograph.
- Individual player photographs, only for approved players.
- Match or training action photographs.
- Coaching or staff photograph, if relevant and approved.
- Stadium or home-ground photograph.
- Supporter or matchday atmosphere photograph.
- Trophy or achievement photograph.

Each approved player asset should have matching verified data:

- Full name.
- Position.
- Squad number, if published.
- Image credit.
- Approval status.
- Alt text.

Do not use generic stock footballers as if they represent NUSC. If development placeholders are necessary, store them with an explicit `isPlaceholder` flag and replace them before launch.

### 3.4 Achievement and journey assets

Use for the Achievements and Our Journey sections.

Possible assets:

- Approved trophy photographs.
- Competition logos or badges with permission to use them.
- Club-founded visual or archive photograph.
- Timeline event photographs.
- Approved competition wordmarks.
- Small decorative football or line-art elements from the design system.

Only include the 2 to 4 most significant verified highlights on the landing page. Do not create a trophy illustration that implies an achievement NUSC has not confirmed.

### 3.5 Matchday assets

The match section is primarily data-led, but it may require:

- NUSC crest.
- Opponent crest, only if approved for use.
- Competition logo, only if approved.
- Stadium photograph or venue mark.
- Matchday background image or texture.

Required match asset data should include:

- Asset or crest name.
- Team represented.
- Competition.
- Copyright or permission information.
- Light and dark background suitability.
- Fallback when a crest is unavailable.

A missing opponent crest must never create a broken image. Use a neutral, labelled fallback rather than inventing a mark.

### 3.6 Community and Football for Peace assets

The Community section should show NUSC beyond the pitch.

Required or recommended categories:

- Community football activity.
- Youth development activity.
- Local school or community engagement.
- Football for Peace activity.
- Group participation and supporter/community moments.
- Wide image suitable for a prominent feature area.
- 2 to 4 supporting gallery images, if a gallery is implemented.

Obtain appropriate consent before publishing identifiable children or community participants. Avoid publishing personal information in filenames, captions, or image metadata.

### 3.7 News assets

The landing page displays the latest three stories.

Each story may require:

- One thumbnail image.
- Optional article hero image for future expansion.
- Category label.
- Verified headline.
- Publication date.
- Short excerpt.
- Image credit.
- Link destination.

Recommended image ratios:

- Card thumbnail: 16:9 or 3:2, used consistently.
- Future article hero: 16:9 or a documented editorial ratio.
- Social share image: 1.91:1, using an approved template.

Do not crop faces, sponsor marks, or key action out of news thumbnails. Use a defined focal point when automated cropping is involved.

### 3.8 Sponsor and partner assets

Use only approved current partners and the tiers that NUSC confirms.

Required data for each logo:

- Organisation name.
- Partner tier.
- Approved logo file.
- Preferred background.
- Minimum display size.
- Clear-space requirement.
- Link destination, if applicable.
- Approval and expiry status.
- Contact or source for replacement.

Required logo variants where supplied:

- Full-colour logo.
- White or light-background logo.
- Dark or monochrome logo.
- Horizontal and stacked versions where relevant.

Do not use a sponsor logo as a decorative placeholder. Do not invent partner tiers or imply an organisation is a partner without written approval. Provide enough breathing room that logos remain legible and visually equalised without distorting their aspect ratios.

### 3.9 Merchandise and shop assets

The Shop is an external redirect, not an e-commerce implementation.

Possible promotional assets:

- Official jersey.
- Training wear.
- Scarf.
- Cap.
- Other approved merchandise.
- Lifestyle or supporter photograph.
- Shop banner or campaign image.
- Approved shop logo or wordmark.

For each merchandise preview, record:

- Product name.
- Product status: approved, mock, or unavailable.
- Image source.
- Image rights.
- Shop URL or replacement requirement.
- Whether the image represents a real available product.

If official product photography is not available, use an abstract club-branded placeholder that cannot be mistaken for an available product. Do not show prices, stock, sizes, checkout controls, or product claims in the landing page unless verified.

The official shop URL must live in one configuration value, for example:

```ts
export const siteConfig = {
  shopUrl: "OFFICIAL_SHOP_URL",
};
```

All Shop navigation and CTA links must reference this value.

### 3.10 Social and sharing assets

Prepare:

- Open Graph image for the landing page.
- Optional social templates for match announcements, results, news, and community stories.
- Profile or footer icons for Facebook, Instagram, YouTube, and X/Twitter.
- Accessible text labels for every social link.

Use the project's icon library for interface icons where available. Social logos must follow the relevant brand usage rules and should not be confused with sponsor marks.

### 3.11 Footer and utility assets

- Footer logo or crest.
- Favicon and browser icons.
- Optional secure payment or shop badges only if they are genuinely relevant; payment badges are not required for this landing page.
- Privacy and Terms links as text links, not image-only controls.

## 4. Recommended Folder Structure

Keep source files, optimised web files, and metadata easy to audit:

```text
public/
└── assets/
    ├── brand/
    │   ├── logo/
    │   ├── crest/
    │   ├── favicon/
    │   └── brand-guide/
    ├── hero/
    ├── team/
    ├── matchday/
    ├── achievements/
    ├── journey/
    ├── community/
    ├── news/
    ├── partners/
    ├── merchandise/
    └── social/

src/
├── data/
│   ├── assets.ts
│   ├── team.ts
│   ├── matches.ts
│   ├── news.ts
│   ├── partners.ts
│   └── merchandise.ts
└── config/
    └── site.ts
```

If the project uses imported assets rather than `public/`, retain the same category structure under `src/assets/`. Do not mix unrelated assets into a single flat directory.

## 5. File Naming Convention

Use lowercase kebab-case names with a stable category and variant:

```text
hero-nusc-desktop-1920.avif
hero-nusc-mobile-768.avif
team-first-squad-2026-1600.webp
player-full-name-800.webp
community-football-for-peace-01-1200.webp
news-match-preview-2026-01-1200.webp
partner-example-horizontal-light.svg
merchandise-home-jersey-front-1200.webp
social-og-nusc-1200x630.jpg
```

Rules:

- Use descriptive names, not `IMG_0042.jpg` or `final-final.png`.
- Use the year only when it identifies a season, campaign, or dated event.
- Use `light`, `dark`, `horizontal`, `stacked`, `mobile`, or `desktop` only when the variant is genuinely different.
- Do not put private names, phone numbers, or personal information in filenames.
- Keep the extension accurate and preserve the original file separately.

## 6. Technical Preparation

### Raster images

- Prefer AVIF or WebP for web delivery, with a fallback where browser support or workflow requires it.
- Compress images without damaging faces, kit details, sponsor marks, or match information.
- Export only the dimensions needed by the layout.
- Include intrinsic `width` and `height` in markup or data to prevent layout shift.
- Use responsive `srcset` and `sizes` for large photography.
- Do not lazy-load the above-the-fold LCP hero image.
- Lazy-load below-the-fold images when they are not immediately visible.

### Vector images

- Prefer SVG for logos, marks, and simple icons when the source is approved and safe to serve.
- Remove unnecessary editor metadata and hidden objects.
- Preserve viewBox and aspect ratio.
- Ensure SVGs do not include external network requests or unsafe scripts.
- Do not convert a detailed photograph into SVG.

### Fonts

- Confirm webfont licensing before self-hosting.
- Include only the weights actually used.
- Define fallback fonts with similar metrics.
- Avoid a font file that causes visible layout changes after loading.

### Colour and transparency

- Preserve transparency for logos and marks where required.
- Test every logo on its intended background.
- Do not add a white box around a logo unless the approved brand treatment requires it.
- Confirm that overlays do not reduce text contrast or hide the image subject.

## 7. Accessibility Metadata

For every image, decide whether it is informative or decorative.

### Informative image

Use specific alt text that describes the relevant content:

```text
NUSC players standing together before a match
```

### Decorative image

Use an empty alt value when nearby text already provides the meaning:

```html
<img src="/assets/community/pattern.webp" alt="" />
```

Rules:

- Do not use filenames as alt text.
- Do not start with `image of` or `photo of` unless that distinction matters.
- Do not repeat a visible caption in the alt text.
- Logos that function as links need an accessible name for the destination, such as `NUSC home`.
- Sponsor logos need the organisation name when they communicate partnership information.
- Do not make essential match or product information available only in an image.

## 8. Asset Approval and Rights Tracking

Maintain an asset register before production launch:

| Field | Description |
|---|---|
| Asset ID | Stable identifier used by content data |
| File path | Current web-optimised path |
| Asset type | Logo, photograph, crest, product image, icon, or social graphic |
| Subject | What the asset shows |
| Owner/source | Club, photographer, partner, manufacturer, or licensed source |
| Licence/permission | Usage terms and restrictions |
| Credit | Required public credit, if any |
| Approval status | Pending, approved, rejected, or expired |
| Approved by | Person or organisation giving approval |
| Approval date | Date approval was recorded |
| Expiry/review date | Date the asset must be reviewed |
| Alt text | Approved accessible description |
| Focal point | Crop guidance such as `center`, `top`, or coordinates |
| Replacement needed | Yes or no |

Do not publish an asset with `Pending` or `Rejected` status. Store original licences and releases outside the public asset directory.

## 9. Asset Data Shape

Keep display data separate from components. A minimal asset record may look like this:

```ts
type SiteAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  kind: "photo" | "logo" | "crest" | "product" | "graphic";
  isDecorative?: boolean;
  isPlaceholder?: boolean;
  credit?: string;
  focalPoint?: string;
};
```

For sponsors, players, news, and merchandise, add domain-specific fields rather than duplicating image metadata across components.

Example:

```ts
export const heroAsset = {
  src: "/assets/hero/hero-nusc-desktop-1920.avif",
  alt: "NUSC players standing together before a match",
  width: 1920,
  height: 1080,
  kind: "photo",
  isPlaceholder: true,
  focalPoint: "center center",
};
```

Remove `isPlaceholder: true` only after the replacement asset and its content have been approved.

## 10. Responsive Asset Requirements

Check all assets at 375px, 768px, 1024px, and 1440px or wider.

- Hero text must remain readable against every crop.
- Player faces and key action must not be clipped at mobile widths.
- News cards must use one consistent crop ratio.
- Sponsor logos must remain legible without forcing horizontal scrolling.
- Merchandise images must not stretch or change card height unpredictably.
- Footer logos and social icons must retain stable dimensions.
- Use `object-fit` and documented focal points instead of manually duplicating crop logic in each component.
- Verify that transparent logos do not disappear on dark or light responsive backgrounds.

## 11. Performance Requirements

- Keep the initial hero image optimised and correctly prioritised.
- Use responsive images for all large photography.
- Lazy-load images below the first viewport.
- Set image dimensions or aspect ratios before the asset loads.
- Avoid loading hidden desktop and mobile copies at the same time unless the implementation requires it.
- Avoid animated GIFs; use efficient video or static imagery only when justified.
- Avoid large third-party social embeds and external asset dependencies.
- Check the network panel for duplicate logo, font, and image requests.
- Remove unused placeholder images before production.

## 12. Asset QA Checklist

### Brand

- [ ] Official NUSC spelling is confirmed.
- [ ] Logo, crest, colours, and typography are approved.
- [ ] Light and dark logo variants work on their backgrounds.
- [ ] No official mark is stretched, recoloured, or modified incorrectly.

### Photography

- [ ] Hero image communicates NUSC and football immediately.
- [ ] Mobile and desktop crops are intentional.
- [ ] Player and community images have approval and usage rights.
- [ ] Faces, kit details, and sponsor marks are not unintentionally cropped.
- [ ] Children and community participants have appropriate consent.

### Partners and merchandise

- [ ] Every sponsor logo is approved and current.
- [ ] Partner tiers are verified.
- [ ] Merchandise is clearly real, approved, or marked as mock.
- [ ] Shop URL is centralised and verified before launch.
- [ ] No cart, checkout, payment, inventory, or account assets have been introduced.

### Accessibility

- [ ] Every informative image has useful alt text.
- [ ] Decorative images use empty alt text.
- [ ] Logo links have meaningful accessible names.
- [ ] Sponsor and product information is available as text.
- [ ] Focus, contrast, and text readability work over every image treatment.

### Technical

- [ ] Files use the naming convention and category folders.
- [ ] Responsive variants exist for major photography.
- [ ] Dimensions and aspect ratios prevent layout shift.
- [ ] Web formats are compressed and load successfully.
- [ ] No broken, oversized, duplicate, or unused production assets remain.
- [ ] Asset credits and permissions are recorded.

## 13. Definition of Done

The asset work is ready for implementation when:

- The asset register is complete for all visible sections.
- Approved brand files are available in the required variants.
- Hero, team, community, news, partner, merchandise, and social assets have owners and statuses.
- Placeholder assets are explicitly marked and have replacement paths.
- Responsive web variants are exported for large images.
- Alt text, credits, focal points, and rights information are recorded.
- The central Shop URL is configured or clearly marked as pending.
- Asset QA passes at all required breakpoints.
- No unverified claim or unapproved visual is presented as official NUSC content.
