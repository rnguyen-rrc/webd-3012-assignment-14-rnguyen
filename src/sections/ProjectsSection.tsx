import { projects } from "../data/portfolioData";
import Img from "../components/Img/Img";
import Label from "../components/Label/Label";
import Button from "../components/Button/Button";
import Text from "../components/Text/Text";

const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>

        <div className="grid">
          {projects.map((project) => (
            <div key={project.title} className="card">

              {/* IMAGE */}
              <Img
                src={project.image}
                alt={project.title}
                width="100%"
              />

              <div className="card__content">
                <h3>{project.title}</h3>

                {/* META */}
                <Text text={project.date} size="13px" color="#777" />
                <Text text={project.course} size="13px" color="#777" />

                {/* DESCRIPTION */}
                <div className="card__description">
                  <Text text={project.description} size="14px" color="#444" />
                </div>

                {/* TAGS */}
                <div className="tags">
                  {project.tech.map((tech) => (
                    <Label
                      key={tech}
                      text={tech}
                      backgroundColor="#f1f1f1"
                      fontSize="12px"
                    />
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="card__actions">
                  <Button
                    label="View on GitHub"
                    backgroundColor="#000"
                    onClick={() =>
                      window.open(
                        project.link !== "#"
                          ? project.link
                          : "https://github.com/",
                        "_blank"
                      )
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;