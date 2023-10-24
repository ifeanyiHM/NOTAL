import { Link } from "react-router-dom";
import { useNote } from "../context/NoteContext";

const Navbar = ({ children }) => {
  const { open, handleClick } = useNote();

  return (
    <nav>
      <Link to="/">
        not<span>a</span>l
      </Link>

      {children}

      <div onClick={handleClick}>{open ? <span>☀</span> : <span>🌘</span>}</div>
    </nav>
  );
};

export default Navbar;
