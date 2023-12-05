import { useEffect, useRef } from "react";
import { useNote } from "../context/NoteContext";

function DeleteAllJournal() {
  const { onClearJournal, handleModal } = useNote();
  const clearAllRef = useRef();

  useEffect(() => {
    const handleModalClick = (e) => {
      if (e.target.closest(".container")) {
        return;
      }
      handleModal();
    };

    document.addEventListener("click", handleModalClick, true);

    return () => {
      document.removeEventListener("click", handleModalClick, true);
    };
  }, [handleModal]);

  return (
    <div className="clear-all" ref={clearAllRef}>
      <div className="container">
        <div className="spread">
          <h1>Delete all notes</h1>
          <span onClick={handleModal}>&#10005;</span>
        </div>
        <p>
          Are you sure you want to delete all notes permanently? This action
          cannot be undone.
        </p>
        <div className="action">
          <button onClick={handleModal}>Cancel</button>
          <button onClick={onClearJournal}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteAllJournal;
