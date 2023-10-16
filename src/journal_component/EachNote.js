import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

import { color } from "../components/Data";
import { ColorPallet } from "./ColorPallet";

//Each note or journal taken
export const EachNote = ({ journ, onDeleteJournal, onSelection }) => {
  const [bgColor, setBgColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [bgShadow, setBgShadow] = useState(true);

  const bg = { backgroundColor: bgColor };
  const font = { color: textColor };

  function handleNoteStyle(color, font) {
    setBgColor((bg) => (color === bg ? "" : color));
    setTextColor((text) => (font === text ? "" : font));
    setBgShadow((shd) => !shd);
  }

  return (
    <div
      className={`input_area ${bgShadow ? "input_area1" : "input_area2"}`}
      style={bg}
      id="content_area"
    >
      <Link
        to="note"
        onClick={() => {
          onSelection(journ);
        }}
      >
        <h3 style={font}>{journ.title}</h3>
        <p style={font}>
          {journ.body.slice(0, 390)} <span>...</span>
          {/* {journ.body.split(" ").slice(0, 390).join(" ")} <span>...</span> */}
        </p>
      </Link>

      <ColorPallet
        color={color}
        onStyleNote={handleNoteStyle}
        onDeleteJournal={onDeleteJournal}
        journ={journ}
      />
    </div>
  );
};
