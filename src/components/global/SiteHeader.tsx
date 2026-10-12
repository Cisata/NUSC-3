import { useEffect, useRef, useState } from "react";
import clubCrest from "../../assets/images/NUSC-logo.png";
import "./SiteHeader.css";

type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};

type SiteHeaderProps = {
  shopHref?: string;
};

const sectionLinks: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Matches", href: "#matches" },
  { label: "News", href: "#news" },
  { label: "Community", href: "#community" },
  { label: "Partners", href: "#partners" },
];

export function SiteHeader({ shopHref }: SiteHeaderProps) {
  const [activeHref, setActiveHref] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const wasMenuOpenRef = useRef(false);
  const navigationId = "nusc-primary-navigation";
  const links: NavigationItem[] = [
    ...sectionLinks,
    {
      label: "Shop",
      href: shopHref || "#shop",
      external: Boolean(shopHref),
    },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      firstLinkRef.current?.focus();
    } else if (wasMenuOpenRef.current) {
      menuButtonRef.current?.focus();
    }

    wasMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    const activeSectionLinks = shopHref
      ? sectionLinks
      : [...sectionLinks, { label: "Shop", href: "#shop" }];
    const sections = activeSectionLinks
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio);
        const currentSection = visibleSections[0]?.target;

        if (currentSection instanceof HTMLElement) {
          setActiveHref(`#${currentSection.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [shopHref]);

  return (
    <>
      <a className="nusc-skip-link" href="#main-content">
        Skip to main content
      </a>
      <header
        className="nusc-site-header"
        data-menu-open={isMenuOpen}
      >
        <div className="nusc-site-header__bar">
          <div className="nusc-site-header__inner">
            <a className="nusc-site-header__brand" href="#home" aria-label="NUSC home">
              <img src={clubCrest} alt="" />
              <span className="nusc-site-header__wordmark">
                <span>Nagaland United</span>
                <span>Sports Club</span>
              </span>
            </a>

            <nav
              className="nusc-site-navigation"
              id={navigationId}
              aria-label="Primary navigation"
              data-open={isMenuOpen}
            >
              <ul className="nusc-site-navigation__list">
                {links.map((item, index) => (
                  <li key={item.label}>
                    <a
                      ref={index === 0 ? firstLinkRef : undefined}
                      className="nusc-site-navigation__link"
                      href={item.href}
                      aria-current={
                        !item.external && activeHref === item.href ? "location" : undefined
                      }
                      aria-label={
                        item.external ? `${item.label} (opens in a new tab)` : undefined
                      }
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                className="nusc-site-navigation__mobile-join"
                href="#join"
                onClick={() => setIsMenuOpen(false)}
              >
                Join NUSC
              </a>
            </nav>

            <a className="nusc-site-header__join" href="#join">
              Join NUSC
            </a>

            <button
              ref={menuButtonRef}
              className="nusc-site-header__menu-toggle"
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls={navigationId}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
