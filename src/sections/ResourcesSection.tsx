import { resources } from "../data/portfolioData";
import Img from "../components/Img/Img";
import Button from "../components/Button/Button";

const ResourcesSection = () => {
  return (
    <section id="resources" className="section">
      <div className="container">
        <h2>Learning Resources</h2>

        <div className="grid">
          {resources.map((resource) => (
            <div key={resource.title} className="card">

              {/* IMAGE */}
              <Img
                src={resource.image}
                alt={resource.title}
                width="60px"
                height="60px"
                className="resource__image"
              />

              <div className="card__content">
                <h3>{resource.title}</h3>

                <p className="resource__summary">
                  {resource.summary}
                </p>

                <Button
                  label="Visit Resource"
                  backgroundColor="#fff"
                  color="#000"
                  border="1px solid #000"
                  onClick={() => window.open(resource.link, "_blank")}
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;