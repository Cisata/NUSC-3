import "./PartnersSection.css";

const partners = [
  { name: "Nike", src: "https://cdn.simpleicons.org/nike", bg: "#f8fafc", accent: "#f5f5f5" },
  { name: "Adidas", src: "https://cdn.simpleicons.org/adidas", bg: "#ffffff", accent: "#f3f4f6" },
  { name: "Coca-Cola", src: "https://cdn.simpleicons.org/cocacola", bg: "#fff5f5", accent: "#fca5a5" },
  { name: "Spotify", src: "https://cdn.simpleicons.org/spotify", bg: "#f0fdf4", accent: "#86efac" },
  { name: "Visa", src: "https://cdn.simpleicons.org/visa", bg: "#eff6ff", accent: "#93c5fd" },
  { name: "Mastercard", src: "https://cdn.simpleicons.org/mastercard", bg: "#fff7ed", accent: "#fbbf24" },
  { name: "Red Bull", src: "https://cdn.simpleicons.org/redbull", bg: "#fff1f2", accent: "#fca5a5" },
  { name: "Puma", src: "https://cdn.simpleicons.org/puma", bg: "#fff7ed", accent: "#fdba74" },
];

export function PartnersSection() {
  return (
    <section className="nusc-partners page-section page-section--navy" id="partners" aria-labelledby="partners-title">
      <div className="section-inner nusc-partners__inner">
        <div className="nusc-partners__header">
          <p className="nusc-section-kicker">Partners</p>
          <h2 className="nusc-partners__title" id="partners-title">
            Proudly supported <span>by.</span>
          </h2>
        </div>

        <div className="nusc-partners__grid" aria-label="NUSC partners and supporters">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="nusc-partners__logo"
              style={{
                background: partner.bg,
                borderColor: partner.accent,
              }}
            >
              <img src={partner.src} alt={partner.name} />
            </div>
          ))}
        </div>

        <div className="nusc-partners__footer">
          <p className="nusc-partners__copy">
            Backed by brands that believe in football, community, and the future of Nagaland sport.
          </p>
          <a className="nusc-partners__cta" href="#join">
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
}
