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
  const [journal, setJournal] = useBrowserStorage(jour);
  const [selectedNote, setSelectedNote] = useBrowserStorage(null);

  const [{ open, searchNote }, dispatch] = useReducer(reducer, initialState);

  //Toggle light and dark mode
  useEffect(() => {
    const body = document.body;
    body.classList.toggle("light-mode", !open);
  }, [open]);

  const handleClick = () => {
    dispatch({ type: "open" });
  };

  //search a particular note
  const searchedJournal =
    searchNote.length > 0
      ? journal.filter((journ) =>
          `${journ.title} ${journ.body}`
            .toLowerCase()
            .includes(searchNote.toLowerCase())
        )
      : journal;

  const deleteJournal = (id) => {
    setJournal((jo) => jo.filter((jot) => jot.id !== id));
  };

  const addJournal = (note) => {
    setJournal([note, ...journal]);
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
        dispatch,
        journal: searchedJournal,
        onDeleteJournal: deleteJournal,
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
