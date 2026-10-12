import communityFeature from "../../assets/images/section/abouthead.jpg";
import communityYouth from "../../assets/images/section/News2.jpg";
import communityAction from "../../assets/images/section/News3.jpg";
import communityLocal from "../../assets/images/section/News4.jpg";
import "./CommunitySection.css";

const communityPillars = [
  "Youth development",
  "Community football",
  "Local engagement",
];

const supportingImages = [
  { src: communityYouth, alt: "NUSC youth football session" },
  { src: communityAction, alt: "NUSC community activity on the pitch" },
  { src: communityLocal, alt: "NUSC supporters and players together" },
];

export function CommunitySection() {
  return (
    <section className="nusc-community page-section page-section--tint" id="community" aria-labelledby="community-title">
      <div className="section-inner nusc-community__inner">
        <div className="nusc-community__media" aria-label="NUSC community activity photography">
          <div className="nusc-community__feature">
            <img
              className="nusc-community__feature-image"
              src={communityFeature}
              alt="NUSC football session with community participants"
            />
          </div>

          <div className="nusc-community__gallery" aria-label="Supporting community imagery">
            {supportingImages.map((image) => (
              <div key={image.alt} className="nusc-community__thumb">
                <img className="nusc-community__thumb-image" src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className="nusc-community__content">
          <p className="nusc-section-kicker">Community</p>
          <h2 className="nusc-community__title" id="community-title">
            Football for <span>Peace</span>
          </h2>

          <p className="nusc-community__tagline">Football brings us together.</p>

          <p className="nusc-community__description">
            NUSC grows beyond the matchday. We support the people, players, and programmes that keep
            football local, inclusive, and rooted in Nagaland’s spirit. From youth development to
            community football, we build sporting spaces where confidence and belonging can thrive.
          </p>

          <ul className="nusc-community__pillars" aria-label="Community initiatives">
            {communityPillars.map((pillar) => (
              <li key={pillar}>{pillar}</li>
            ))}
          </ul>

          <a className="nusc-community__cta" href="#news">
            Our Community
          </a>
        </div>
      </div>
    </section>
  );
}
