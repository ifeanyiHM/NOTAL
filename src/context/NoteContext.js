import { createContext, useEffect, useReducer } from "react";
import useBrowserStorage from "../hook/useBrowserStorage";
import { jour } from "../data/Data";
import { useContext } from "react";

const initialState = { open: true, searchNote: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "open":
      return {
        ...state,
        open: !state.open,
      };

    case "search":
      return {
        ...state,
        searchNote: action.payload,
      };

    default:
      break;
  }
};

const NoteContext = createContext();

function NoteProvider({ children }) {
  const [journal] = useBrowserStorage(jour);
  const [selectedNote, setSelectedNote] = useBrowserStorage(null);
  const [sortedJournal, setSortedJournal] = useBrowserStorage([...journal]);

  const [{ open, searchNote }, dispatch] = useReducer(reducer, initialState);

  //Toggle light and dark mode
  useEffect(() => {
    const body = document.body;
    body.classList.toggle("light-mode", !open);
  }, [open]);

  const handleClick = () => {
    dispatch({ type: "open" });
  };

  const handleSortAsc = () => {
    const sorted = journal
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));
    console.log(sorted);
    setSortedJournal(sorted);
  };

  const handleSortDesc = () => {
    const sorted = journal
      .slice()
      .sort((a, b) => b.title.localeCompare(a.title));
    console.log(sorted);
    setSortedJournal(sorted);
  };
  const handleSortInput = () => {
    const sorted = journal;

    console.log(sorted);
    setSortedJournal(sorted);
  };

  //search a particular note
  const searchedJournal =
    searchNote.length > 0
      ? sortedJournal.filter((journ) =>
          `${journ.title} ${journ.body}`
            .toLowerCase()
            .includes(searchNote.toLowerCase())
        )
      : sortedJournal;

  const deleteJournal = (id) => {
    setSortedJournal((jo) => jo.filter((jot) => jot.id !== id));
  };

  const deleteAllJournal = () => {
    setSortedJournal([]);
  };

  const addJournal = (note) => {
    setSortedJournal([note, ...journal]);
  };

  function handleSelection(note) {
    setSelectedNote(note);
  }

  return (
    <NoteContext.Provider
      value={{
        handleClick,
        open,
        searchNote,
        onSortAsc: handleSortAsc,
        onSortDesc: handleSortDesc,
        onInputSort: handleSortInput,
        dispatch,
        journal: searchedJournal,
        onDeleteJournal: deleteJournal,
        onClearJournal: deleteAllJournal,
        onSelection: handleSelection,
        selectedNote,
        onAddJournal: addJournal,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

function useNote() {
  const context = useContext(NoteContext);
  if (context === undefined)
    throw new Error("NoteContext was used outside the NoteProvider");
  return context;
}

export { NoteProvider, useNote };
