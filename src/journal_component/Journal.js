import { Link } from "react-router-dom/cjs/react-router-dom";
import { EachNote } from "./EachNote";

//Overall Journal UI
const Journal = ({ journal, onDeleteJournal, onSelection }) => {
  return (
    <div className="Journal">
      <div className="input_section">
        {journal.map((journ) => (
          <EachNote
            key={journ.id}
            journ={journ}
            onDeleteJournal={onDeleteJournal}
            onSelection={onSelection}
          />
        ))}
      </div>

      <div className="add_journal">
        <Link to="create">+</Link>
      </div>
    </div>
  );
};

export default Journal;
