import { resources } from "../data/portfolioData";

const ResourcesSection = () => {
  return (
    <section id="resources" className="section">
      <div className="container">
        <h2>Learning Resources</h2>

        <div className="grid">
          {resources.map((resource) => (
            <div key={resource.title} className="card">
              <h3>{resource.title}</h3>
              <p>{resource.summary}</p>

              <a
                href={resource.link}
                target="_blank"
                rel="noreferrer"
                className="btn secondary"
              >
                Visit
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;