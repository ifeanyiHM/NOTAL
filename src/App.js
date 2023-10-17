import { createContext, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useBrowserStorage from "./custom_api/useBrowserStorage";

import Journal from "./journal_component/Journal";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import Note from "./components/Note";
import { jour } from "./components/Data";

import "./Styles/App.css";

const initialState = { open: true, selectedNote: null, searchNote: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "open":
      return {
        ...state,
        open: !state.open,
      };

    case "note":
      return {
        ...state,
        selectedNote: action.payload,
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

export const NoteContext = createContext();

function App() {
  const [journal, setJournal] = useBrowserStorage(jour);

  const [{ open, selectedNote, searchNote }, dispatch] = useReducer(
    reducer,
    initialState
  );

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
    dispatch({ type: "note", payload: note });
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
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route exact path="/">
              <Journal />
            </Route>

            <Route exact path="/create">
              <Create />
            </Route>

            <Route exact path="/note">
              <Note />
            </Route>
          </Switch>
        </div>
      </Router>
    </NoteContext.Provider>
  );
}

export default App;
