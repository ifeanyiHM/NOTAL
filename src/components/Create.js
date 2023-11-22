import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNote } from "../context/NoteContext";
import Navbar from "./Navbar";

const Create = () => {
  const { onAddJournal, empty, dispatch } = useNote();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!body) return;

    const id = crypto.randomUUID();
    const note = { title, body, id };

    onAddJournal(note);
    dispatch({ type: "empty", payload: !empty });
    navigation("/");
  };

  useEffect(() => {
    function returnCall(e) {
      if (e.code === "Escape") {
        navigation("/");
      }
    }
    document.addEventListener("keydown", returnCall);

    return () => {
      document.removeEventListener("keydown", returnCall);
    };
  }, [navigation]);

  return (
    <>
      <Navbar />

      <div className="Create">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            maxLength="70"
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />

          <textarea
            cols="30"
            rows="15"
            placeholder="Take a note..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>

          <div className="button">
            <button>close</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
