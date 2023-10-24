import { Link } from "react-router-dom";
import { EachNote } from "./EachNote";
import { useNote } from "../context/NoteContext";
import Navbar from "../components/Navbar";
import SearchJournal from "../components/SearchJournal";

//Overall Journal UI
const Journal = () => {
  const { journal } = useNote();
  return (
    <>
      <Navbar>
        <SearchJournal />
      </Navbar>

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
    </>
  );
};

export default Journal;
