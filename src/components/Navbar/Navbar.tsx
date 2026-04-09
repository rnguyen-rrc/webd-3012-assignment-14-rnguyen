import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container nav__content">
        <Link to="/" className="nav__logo"></Link>

        <div className="nav__links">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>

          {/* These are in-page links, so we use the hash to scroll to the section */}
          <Link to="/#projects">Projects</Link>
          <Link to="/#skills">Skills</Link>
          <Link to="/#resources">Resources</Link>
          <Link to="/#setup">Dev Setup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
