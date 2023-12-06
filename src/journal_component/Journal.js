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
      <Empty>
        <div>
          <h1>Ready to start journaling? </h1>
          <p>Click the button below! 👇🏾</p>
        </div>
      </Empty>
    );

  return (
    <>
      <Navbar>
        <SearchJournal />
      </Navbar>

      {!journal.length ? (
        <Empty>
          <div>
            <h1>No matching notes found.</h1>
            <p>
              Try a different search term or click the button below to create a
              new note 📖.
            </p>
          </div>
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
