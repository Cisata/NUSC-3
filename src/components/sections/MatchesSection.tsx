import clubCrest from "../../assets/images/NUSC-logo.png";
import "./MatchesSection.css";

export function MatchesSection() {
  return (
    <section
      className="nusc-matches page-section page-section--navy"
      id="matches"
      aria-labelledby="matches-title"
    >
      <div className="section-inner nusc-matches__inner">
        <div className="nusc-matches__intro">
          <p className="nusc-section-kicker">Match centre</p>
          <h2 className="nusc-matches__title" id="matches-title">
            Every match.
            <span> One Nagaland.</span>
          </h2>
          <p className="nusc-matches__description">
            Follow NUSC match days, fixtures, and results. Official match details will be posted here
            as soon as they are announced.
          </p>
        </div>

        <div className="nusc-matches__board" aria-label="NUSC match information">
          <div className="nusc-matches__board-header">
            <span>Upcoming fixture</span>
            <span className="nusc-matches__status">
              <span aria-hidden="true" />
              To be announced
            </span>
          </div>

          <div className="nusc-matches__fixture">
            <div className="nusc-matches__club">
              <img src={clubCrest} alt="" />
              <strong>NUSC</strong>
            </div>
            <span className="nusc-matches__versus" aria-label="versus">
              VS
            </span>
            <div className="nusc-matches__opponent">
              <span className="nusc-matches__opponent-mark" aria-hidden="true">
                ?
              </span>
              <strong>Opponent</strong>
            </div>
          </div>

          <p className="nusc-matches__notice">
            Fixture, venue, and kick-off time will appear here once confirmed.
          </p>

          <div className="nusc-matches__footer">
            <span>Fixtures</span>
            <span>Results</span>
            <span>Match updates</span>
          </div>
        </div>
      </div>
    </section>
  );
}
