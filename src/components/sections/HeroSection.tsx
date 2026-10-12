import homeHeroImage from "../../assets/images/Hero/home-hero.png";
import type { CSSProperties } from "react";
import "./HeroSection.css";

export type HeroAction = {
  label: string;
  href: string;
};

export type HeroSectionProps = {
  clubName?: string;
  headline?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
};

export function HeroSection({
  clubName = "Nagaland United Sports Club",
  headline = "Rise Together",
  description =
    "Representing Nagaland through football, developing local talent, and bringing communities together through sport.",
  imageSrc = homeHeroImage,
  imageAlt = "Nagaland United players and staff celebrating together",
  primaryAction = { label: "Explore NUSC", href: "#about" },
  secondaryAction = { label: "View Matches", href: "#matches" },
}: HeroSectionProps) {
  const heroStyle: CSSProperties & { "--nusc-hero-image": string } = {
    "--nusc-hero-image": `url(${JSON.stringify(imageSrc)})`,
  };

  return (
    <section
      className="nusc-hero"
      id="home"
      aria-labelledby="nusc-hero-title"
      aria-describedby="nusc-hero-image-description"
      style={heroStyle}
    >
      <link rel="preload" as="image" href={imageSrc} fetchPriority="high" />
      <span className="nusc-hero__image-description" id="nusc-hero-image-description">
        {imageAlt}
      </span>
      <div className="nusc-hero__copy">
        <p className="nusc-hero__club-name">{clubName}</p>
        <h1 className="nusc-hero__title" id="nusc-hero-title">
          {headline}
        </h1>
        <p className="nusc-hero__description">{description}</p>
        <div className="nusc-hero__actions">
          <a className="nusc-hero__action nusc-hero__action--primary" href={primaryAction.href}>
            {primaryAction.label}
          </a>
          <a className="nusc-hero__action nusc-hero__action--secondary" href={secondaryAction.href}>
            {secondaryAction.label}
          </a>
        </div>
      </div>
    </section>
  );
}
