import { createContext, useEffect, useReducer } from "react";
import useBrowserStorage from "../hook/useBrowserStorage";
import { jour } from "../data/Data";
import { useContext } from "react";

const initialState = {
  open: true,
  searchNote: "",
  empty: false,
  openModal: false,
};

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

    case "empty":
      return {
        ...state,
        empty: action.payload,
      };

    case "openModal":
      return {
        ...state,
        openModal: !state.openModal,
      };

    default:
      break;
  }
};

const NoteContext = createContext();

function NoteProvider({ children }) {
  const [journal, setJournal] = useBrowserStorage(jour);
  const [selectedNote, setSelectedNote] = useBrowserStorage(null);
  const [sortedJournal, setSortedJournal] = useBrowserStorage([...journal]);

  const [{ open, searchNote, empty, openModal }, dispatch] = useReducer(
    reducer,
    initialState
  );

  //Toggle light and dark mode
  useEffect(() => {
    const body = document.body;
    body.classList.toggle("light-mode", !open);
  }, [open]);

  const handleClick = (e) => {
    e.stopPropagation();

    dispatch({ type: "open" });
  };

  const handleModal = () => {
    dispatch({ type: "openModal" });
  };

  //sort journal by title
  const handleSortAsc = () => {
    const sorted = journal
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));
    setSortedJournal(sorted);
  };

  const handleSortDesc = () => {
    const sorted = journal
      .slice()
      .sort((a, b) => b.title.localeCompare(a.title));
    setSortedJournal(sorted);
  };

  const handleSortInput = () => {
    const sorted = journal;
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
    setJournal([]);
    setSortedJournal([]);
    dispatch({ type: "empty", payload: !empty });
    handleModal();
  };

  const addJournal = (note) => {
    setSortedJournal([note, ...sortedJournal]);
    dispatch({ type: "empty", payload: !empty ? empty : !empty });
  };

  function handleSelection(note) {
    setSelectedNote(note);
  }

  return (
    <NoteContext.Provider
      value={{
        empty,
        handleClick,
        open,
        handleModal,
        openModal,
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
