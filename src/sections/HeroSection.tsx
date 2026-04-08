import { basicInfo } from "../data/portfolioData";

const HeroSection = () => {
  return (
    <section id="about" className="section hero">
      <div className="container">
        <div className="hero__card">
          <div className="hero__content">

            {/* LEFT SIDE */}
            <div className="hero__text">
              <p className="eyebrow"></p>
              <h1>{basicInfo.name}</h1>
              <h2>{basicInfo.title}</h2>
              <p className="hero__summary">{basicInfo.summary}</p>
              <p className="email">{basicInfo.email}</p>

              <div className="hero__buttons">
                <a href="#projects" className="btn primary">
                  View Projects
                </a>
                <a href={`mailto:${basicInfo.email}`} className="btn secondary">
                  Contact Me
                </a>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="hero__imageWrapper">
              <img
                src="/images/roline-profile.jpg"
                alt="Profile"
                className="hero__image"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;