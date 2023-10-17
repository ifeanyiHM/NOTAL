import { useContext } from "react";
import { NoteContext } from "../App";

function SearchJournal() {
  const { searchNote, dispatch } = useContext(NoteContext);

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
