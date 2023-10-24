import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNote } from "../context/NoteContext";
import Navbar from "./Navbar";

const Note = () => {
  const { selectedNote } = useNote();

  const navigation = useNavigate();

  useEffect(() => {
    document.title = `${selectedNote.title}`;

    function returnCall(e) {
      if (e.code === "Escape") {
        navigation("/");
      }
    }
    document.addEventListener("keydown", returnCall);

    return () => {
      document.title = "Notal";
      document.removeEventListener("keydown", returnCall);
    };
  }, [navigation, selectedNote.title]);

  return (
    <>
      <Navbar />

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
    </>
  );
};

export default Note;
