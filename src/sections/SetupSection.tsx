import { developerSetup } from "../data/portfolioData";

const SetupSection = () => {
  return (
    <section id="setup" className="section">
      <div className="container">
        <h2>Developer Setup</h2>

        <table className="table">
          <tbody>
            {developerSetup.map((item) => (
              <tr key={item.category}>
                <td className="table__label">{item.category}</td>
                <td>{item.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SetupSection;