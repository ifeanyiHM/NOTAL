import { useNote } from "../context/NoteContext";
import { useState } from "react";

import { EachNote } from "./EachNote";
import Navbar from "../components/Navbar";
import SearchJournal from "../components/SearchJournal";
import Empty from "./Empty";
import Button from "./Button";
import Settings from "../components/Settings";
import Notification from "./Notification";

//Overall Journal UI
const Journal = () => {
  const { journal, empty } = useNote();
  const [showNotification, setShowNotification] = useState(false);

  if (empty)
    return (
      <Empty>
        <div>
          <h1>Ready to start journaling? </h1>
          <p>Click the button below! 👇🏾</p>
        </div>
      </Empty>
    );

  const hideNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  return (
    <>
      <Navbar>
        <SearchJournal />
      </Navbar>

      {!journal.length ? (
        <Empty>
          <div>
            <h1>No matching notes found.</h1>
            <p>
              Try a different search term or click the button below to create a
              new note 📖.
            </p>
          </div>
        </Empty>
      ) : (
        <div className="Journal">
          <div className="input_section">
            {journal.map((journ) => (
              <EachNote
                key={journ.id}
                journ={journ}
                notification={hideNotification}
              />
            ))}
          </div>

          {showNotification && (
            <Notification setShowNotification={setShowNotification} />
          )}

          <Settings />

          <Button journal={journal} />
        </div>
      )}
    </>
  );
};

export default Journal;
