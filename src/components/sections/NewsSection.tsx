import news2 from "../../assets/images/section/News2.jpg";
import news3 from "../../assets/images/section/News3.jpg";
import news4 from "../../assets/images/section/News4.jpg";
import news1 from "../../assets/images/section/News1.jpg";
import "./NewsSection.css";

const stories = [
  {
    category: "Player development",
    title: "Building the next generation of Nagaland football",
    date: "Date to be announced",
    image: news2,
    imageAlt: "NUSC player in club kit",
    href: "#about",
  },
  {
    category: "The squad",
    title: "Meet the players behind the NUSC spirit",
    date: "Date to be announced",
    image: news3,
    imageAlt: "NUSC forward in club kit",
    href: "#team",
  },
  {
    category: "Community",
    title: "Bringing players and supporters together through football",
    date: "Date to be announced",
    image: news4,
    imageAlt: "NUSC midfielder in club kit",
    href: "#about",
  },
];

export function NewsSection() {
  return (
    <section className="nusc-news page-section" id="news" aria-labelledby="news-title">
      <div className="section-inner">
        <div className="nusc-news__header">
          <div>
            <p className="nusc-section-kicker">The latest from NUSC</p>
            <h2 className="nusc-news__title" id="news-title">
              Latest <span>news.</span>
            </h2>
          </div>
          <a className="nusc-news__view-all" href="#news-stories">
            View all <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="nusc-news__layout">
          <a className="nusc-news__featured" href="#about">
            <img
              className="nusc-news__featured-image"
              src={news1}
              alt="NUSC players and staff together on the pitch"
            />
            <span className="nusc-news__featured-overlay" aria-hidden="true" />
            <span className="nusc-news__featured-copy">
              <span className="nusc-news__category">Club story</span>
              <span className="nusc-news__featured-headline">
                One badge. A whole region behind it.
              </span>
              <span className="nusc-news__date">Date to be announced</span>
            </span>
          </a>

          <div className="nusc-news__stories" id="news-stories" aria-label="More NUSC stories">
            {stories.map((story) => (
              <a className="nusc-news__story" href={story.href} key={story.title}>
                <span className="nusc-news__story-image-wrap">
                  <img className="nusc-news__story-image" src={story.image} alt={story.imageAlt} />
                </span>
                <span className="nusc-news__story-copy">
                  <span className="nusc-news__category">{story.category}</span>
                  <span className="nusc-news__story-title">{story.title}</span>
                  <span className="nusc-news__date">{story.date}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
