import { EachNote } from "./EachNote";
import { useNote } from "../context/NoteContext";
import Navbar from "../components/Navbar";
import SearchJournal from "../components/SearchJournal";
import Empty from "./Empty";
import Button from "./Button";
import Settings from "../components/Settings";

//Overall Journal UI
const Journal = () => {
  const { journal } = useNote();

  if (!journal.length) return <Empty />;

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

        <Settings />

        <Button journal={journal} />
      </div>
    </>
  );
};

export default Journal;
