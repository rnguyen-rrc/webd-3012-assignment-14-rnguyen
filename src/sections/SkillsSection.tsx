import { skills } from '../data/portfolioData';
import Label from '../components/Label/Label';
import Text from '../components/Text/Text';

const SkillsSection = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>

        <div className="skills__description">
          <Text
            text="I work with modern web technologies, databases, and tools to build practical full-stack applications."
            fontSize="14px"
            color="#555"
          />
        </div>

        <div className="grid">
          {/* Languages */}
          <div className="card">
            <h3>Languages & Frameworks</h3>
            <div className="tags">
              {skills.languagesAndTechnologies.map((item) => (
                <Label key={item} text={item} />
              ))}
            </div>
          </div>

          {/* Databases + Development */}
          <div className="card">
            <h3>Databases & Development</h3>
            <div className="tags">
              {[...skills.databases, ...skills.development].map((item) => (
                <Label key={item} text={item} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="card">
            <h3>Tools & Workflow</h3>
            <div className="tags">
              {[...skills.toolsAndWorkflow, ...skills.domainKnowledge].map(
                (item) => (
                  <Label key={item} text={item} />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
