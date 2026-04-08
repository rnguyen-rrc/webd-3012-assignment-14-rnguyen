import { projects } from "../data/portfolioData";

const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>

        <div className="grid">
          {projects.map((project) => (
            <div key={project.title} className="card">
              <img src={project.image} alt={project.title} />

              <div className="card__content">
                <h3>{project.title}</h3>

                {/* ✅ FIXED META (split into 2 lines) */}
                <p className="meta">{project.date}</p>
                <p className="meta">{project.course}</p>

                <p>{project.description}</p>

                <div className="tags">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link !== "#" ? project.link : "https://github.com/"}
                  className="btn primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;