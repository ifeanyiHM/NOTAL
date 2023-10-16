import { Link } from "react-router-dom/cjs/react-router-dom";
import SearchJournal from "./SearchJournal";

const Navbar = ({ handleClick, open, searchNote, dispatch }) => {
  return (
    <nav>
      <Link to="/">
        not<span>a</span>l
      </Link>

      <SearchJournal searchNote={searchNote} dispatch={dispatch} />

      <div onClick={handleClick}>{open ? <span>☀</span> : <span>🌘</span>}</div>
    </nav>
  );
};

export default Navbar;
