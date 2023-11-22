import { EachNote } from "./EachNote";
import { useNote } from "../context/NoteContext";
import Navbar from "../components/Navbar";
import SearchJournal from "../components/SearchJournal";
import Empty from "./Empty";
import Button from "./Button";
import Settings from "../components/Settings";

//Overall Journal UI
const Journal = () => {
  const { journal, empty } = useNote();

  if (empty)
    return (
      <Empty>Ready to start journaling? ✍🏾 Click the button below! 👇🏾</Empty>
    );

  return (
    <>
      <Navbar>
        <SearchJournal />
      </Navbar>

      {!journal.length ? (
        <Empty>
          No matching notes found.<br></br> Try a different search term or click
          the button below to create a new note 📖.
        </Empty>
      ) : (
        <div className="Journal">
          <div className="input_section">
            {journal.map((journ) => (
              <EachNote key={journ.id} journ={journ} />
            ))}
          </div>

          <Settings />

          <Button journal={journal} />
        </div>
      )}
    </>
  );
};

export default Journal;
