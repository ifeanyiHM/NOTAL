import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <nav>
      <Link to="/">
        not<span>a</span>l
      </Link>

      {children}

      <div>📖</div>
    </nav>
  );
};

export default Navbar;
