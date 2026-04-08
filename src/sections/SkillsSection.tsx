import { skills } from "../data/portfolioData";

const SkillsSection = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>

        <div className="grid">
          <div className="card">
            <h3>Languages & Technologies</h3>
            {skills.languagesAndTechnologies.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>

          <div className="card">
            <h3>Databases & Development</h3>
            {[...skills.databases, ...skills.development].map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>

          <div className="card">
            <h3>Tools & Workflow</h3>
            {[...skills.toolsAndWorkflow, ...skills.domainKnowledge].map(
              (item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;