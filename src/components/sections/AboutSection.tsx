import aboutImage from "../../assets/images/section/abouthead.jpg";
import "./AboutSection.css";

const pillars = [
  { label: "Community first" },
  { label: "Player development" },
  { label: "Football culture" },
];

const stats = [
  { value: "2018", label: "Club foundation" },
  { value: "100%", label: "Local passion" },
  { value: "24/7", label: "Competitive drive" },
];

export function AboutSection() {
  return (
    <section className="nusc-about page-section" id="about" aria-labelledby="about-title">
      <div className="section-inner nusc-about__inner">
        <div className="nusc-about__media" aria-label="NUSC club story photography">
          <div className="nusc-about__frame">
            <img className="nusc-about__image" src={aboutImage} alt="NUSC player in action on the pitch" />
          </div>

          <div className="nusc-about__quote">
            <span className="nusc-about__quote-label">NUSC spirit</span>
            <p>Driven by the heartbeat of Nagaland, every game is a statement of identity.</p>
          </div>
        </div>

        <div className="nusc-about__content">
          <p className="nusc-section-kicker">About NUSC</p>
          <h2 className="nusc-about__title" id="about-title">
            Built for <span>the next</span> generation.
          </h2>

          <p className="nusc-about__description">
            Nagaland United Sports Club is more than a football club. We are a regional identity built
            on pride, discipline, and ambition—bringing together players, supporters, and local talent
            under one relentless spirit of competition.
          </p>

          <div className="nusc-about__stats" aria-label="NUSC highlights">
            {stats.map((stat) => (
              <div key={stat.label} className="nusc-about__stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <p className="nusc-about__description">
            From grassroots development to elite performance, NUSC represents the energy of Nagaland
            on and off the pitch. Every match is a chance to represent our people, elevate local
            football, and inspire the next generation.
          </p>

          <ul className="nusc-about__pillars" aria-label="NUSC values">
            {pillars.map((pillar) => (
              <li key={pillar.label}>{pillar.label}</li>
            ))}
          </ul>

          <a className="nusc-about__cta" href="#team">
            Meet the club
          </a>
        </div>
      </div>
    </section>
  );
}
