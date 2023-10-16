import { useState } from "react";
import Journal from "../journal_component/Journal";
import "./Styles/App.css";
import Create from "../components/Create";
import Navbar from "../components/Navbar";
import Note from "../components/Note";
import { jour } from "../components/Data";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [open, setOpen] = useState(true);
  const [journal, setJournal] = useState(jour);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleClick = () => {
    setOpen((open) => !open);
  };

  const deleteJournal = (id) => {
    setJournal((jo) => jo.filter((jot) => jot.id !== id));
  };

  const addJournal = (note) => {
    setJournal([...journal, note]);
  };

  function handleSelection(note) {
    setSelectedNote(note);
  }

  return (
    <Router>
      <div className={!open ? "light-mode" : ""}>
        <Navbar handleClick={handleClick} open={open} />

        <Switch>
          <Route exact path="/">
            <Journal
              journal={journal}
              onDeleteJournal={deleteJournal}
              onSelection={handleSelection}
              selectedNote={selectedNote}
            />
          </Route>

          <Route exact path="/create">
            <Create onAddJournal={addJournal} />
          </Route>

          <Route exact path="/note">
            <Note selectedNote={selectedNote} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
