import { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import { NoteContext } from "../App";

const Note = () => {
  const { selectedNote } = useContext(NoteContext);

  const history = useHistory();

  useEffect(() => {
    function returnCall(e) {
      if (e.code === "Escape") {
        history.push("/");
      }
    }
    document.addEventListener("keydown", returnCall);

    return () => {
      document.removeEventListener("keydown", returnCall);
    };
  }, [history]);

  return (
    <div className="Note">
      <div id="content">
        <h3>{selectedNote.title}</h3>
        <p>{selectedNote.body}</p>
        <div className="button">
          <button>
            <Link to="/">close</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
