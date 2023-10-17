import { Link } from "react-router-dom/cjs/react-router-dom";
import SearchJournal from "./SearchJournal";
import { useContext } from "react";
import { NoteContext } from "../App";

const Navbar = () => {
  const { open, handleClick } = useContext(NoteContext);

  return (
    <nav>
      <Link to="/">
        not<span>a</span>l
      </Link>

      <SearchJournal />

      <div onClick={handleClick}>{open ? <span>☀</span> : <span>🌘</span>}</div>
    </nav>
  );
};

export default Navbar;
