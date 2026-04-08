import { developerSetup } from '../data/portfolioData';
import Table from '../components/Table/Table';
import TableRow from '../components/Table/TableRow';
import TableCell from '../components/Table/TableCell';
import TableHeader from '../components/Table/TableHeader';
import TableHeaderCell from '../components/Table/TableHeaderCell';

const SetupSection = () => {
  return (
    <section id="setup" className="section">
      <div className="container">
        <h2>Developer Setup</h2>

        <Table>
          {/* HEADER */}
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Category</TableHeaderCell>
              <TableHeaderCell>Details</TableHeaderCell>
            </TableRow>
          </TableHeader>

          {/* BODY */}
          <tbody>
            {developerSetup.map((item) => (
              <TableRow key={item.category}>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.details}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default SetupSection;
