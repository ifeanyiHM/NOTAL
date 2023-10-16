import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";

const Create = ({ onAddJournal }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!body) return;

    const id = crypto.randomUUID();
    const note = { title, body, id };

    onAddJournal(note);

    history.push("/");
  };

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
  );
};

export default Create;
