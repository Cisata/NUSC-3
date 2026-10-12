import defenderImage from "../../assets/images/Players/defender-24.png";
import midfielderImage from "../../assets/images/Players/midfield-20.png";
import forwardImage from "../../assets/images/Players/forward-17.png";
import goalkeeperImage from "../../assets/images/Players/gk-13.png";
import coachImage from "../../assets/images/Coaches/coach.png";
import assistantCoachImage from "../../assets/images/Coaches/asst.coach.png";
import "./TeamSection.css";

const players = [
  {
    name: "Noel Aier",
    role: "Forward",
    number: "09",
    image: forwardImage,
  },
  {
    name: "K. Zhimomi",
    role: "Midfielder",
    number: "08",
    image: midfielderImage,
  },
  {
    name: "R. Sumi",
    role: "Defender",
    number: "04",
    image: defenderImage,
  },
  {
    name: "M. Yeptho",
    role: "Goalkeeper",
    number: "01",
    image: goalkeeperImage,
  },
];

export function TeamSection() {
  return (
    <section className="nusc-team page-section page-section--tint" id="team" aria-labelledby="team-title">
      <div className="section-inner">
        <div className="nusc-team__header">
          <div>
            <p className="nusc-section-kicker">Team</p>
            <h2 className="nusc-team__title" id="team-title">
              The squad <span>driving the club.</span>
            </h2>
          </div>

          <a className="nusc-team__link" href="#join">
            Full roster
          </a>
        </div>

        <div className="nusc-team__layout">
          <div className="nusc-team__staff">
            <article className="nusc-team__feature" aria-label="Head coach profile">
              <div className="nusc-team__feature-image-wrap">
                <img className="nusc-team__feature-image" src={coachImage} alt="NUSC head coach" />
              </div>
              <div className="nusc-team__feature-copy">
                <span className="nusc-team__feature-tag">Head coach</span>
                <h3>Coach M. K. Awomi</h3>
                <p>
                  Building a disciplined, fearless side that plays with purpose and embraces the pressure
                  of every big moment.
                </p>
              </div>
            </article>

            <article className="nusc-team__assistant" aria-label="Assistant coach profile">
              <div className="nusc-team__assistant-image-wrap">
                <img
                  className="nusc-team__assistant-image"
                  src={assistantCoachImage}
                  alt="NUSC assistant coach"
                />
              </div>
              <div className="nusc-team__assistant-copy">
                <span className="nusc-team__feature-tag">Coaching staff</span>
                <h3>Assistant Coach</h3>
              </div>
            </article>
          </div>

          <div className="nusc-team__grid" aria-label="NUSC team members">
            {players.map((player) => (
              <article key={player.name} className="nusc-team__card">
                <div className="nusc-team__card-image-wrap">
                  <img className="nusc-team__card-image" src={player.image} alt={`${player.name} ${player.role}`} />
                </div>
                <div className="nusc-team__card-meta">
                  <span className="nusc-team__number">#{player.number}</span>
                  <h3>{player.name}</h3>
                  <p>{player.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
