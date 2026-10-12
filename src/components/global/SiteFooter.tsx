import clubCrest from "../../assets/images/NUSC-logo.png";
import teamCelebration from "../../assets/images/Hero/home-hero.png";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Matches", href: "#matches" },
  { label: "News", href: "#news" },
  { label: "Community", href: "#community" },
  { label: "Partners", href: "#partners" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/nagalandunited/" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/Nagaland-United-Sports-Club-61571464628544/",
  },
  { label: "YouTube", href: "https://www.youtube.com/" },
  { label: "X", href: "https://x.com/" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-inner site-footer__inner">
        <section className="site-footer__anthem" aria-labelledby="footer-anthem-title">
          <img
            className="site-footer__anthem-image"
            src={teamCelebration}
            alt="NUSC players celebrating together after a match"
          />
          <div className="site-footer__anthem-content">
            <p className="site-footer__anthem-kicker">Nagaland United Sports Club</p>
            <h2 id="footer-anthem-title">
              Rise <span>Together.</span>
            </h2>
            <a href="#community">
              The club beyond matchday <span aria-hidden="true">↗</span>
            </a>
          </div>
          <span className="site-footer__anthem-mark" aria-hidden="true">N</span>
        </section>

        <div className="site-footer__main">
          <div className="site-footer__identity">
            <a className="site-footer__brand" href="#home" aria-label="Nagaland United Sports Club home">
              <img src={clubCrest} alt="" />
              <span>
                <strong>Nagaland United</strong>
                <span>Sports Club</span>
              </span>
            </a>
            <p>One club. One region. A shared love of football.</p>
          </div>

          <nav className="site-footer__navigation" aria-label="Footer navigation">
            <h2 className="site-footer__heading">Explore</h2>
            <ul className="site-footer__links">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__social" aria-labelledby="footer-social-title">
            <h2 className="site-footer__heading" id="footer-social-title">Follow NUSC</h2>
            <ul className="site-footer__social-grid">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    <span>{link.label}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="site-footer__legal">
          <p>© 2026 Nagaland United Sports Club. All Rights Reserved.</p>
          <a href="#home"><span aria-hidden="true">↑</span> Back to top</a>
        </div>
      </div>
    </footer>
  );
}
