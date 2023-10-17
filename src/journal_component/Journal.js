import { Link } from "react-router-dom/cjs/react-router-dom";
import { EachNote } from "./EachNote";
import { useContext } from "react";
import { NoteContext } from "../App";

//Overall Journal UI
const Journal = () => {
  const { journal } = useContext(NoteContext);
  return (
    <div className="Journal">
      <div className="input_section">
        {journal.map((journ) => (
          <EachNote key={journ.id} journ={journ} />
        ))}
      </div>

      <div className="add_journal">
        <Link to="create">+</Link>
      </div>
    </div>
  );
};

export default Journal;
