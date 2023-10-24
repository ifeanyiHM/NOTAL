import { useNote } from "../context/NoteContext";

function SearchJournal() {
  const { searchNote, dispatch } = useNote();

  return (
    <input
      className="search"
      type="text"
      value={searchNote}
      placeholder="🔍 search note"
      onChange={(e) => dispatch({ type: "search", payload: e.target.value })}
    />
  );
}

export default SearchJournal;
