import { useNote } from "../context/NoteContext";

export const ColorPallet = ({ color, onStyleNote, journ }) => {
  const { onDeleteJournal } = useNote();

  return (
    <div className="hidden_flex">
      <div className="hidden_img">
        {color.map((colorItem) => {
          return (
            <span
              key={colorItem.id}
              className="colorPallet"
              style={{
                backgroundColor: colorItem.dataColor,
              }}
              onClick={() =>
                onStyleNote(colorItem.dataColor, colorItem.dataFont)
              }
              data-color={colorItem.dataColor}
              data-font={colorItem.dataFont}
            ></span>
          );
        })}
      </div>

      <button onClick={() => onDeleteJournal(journ.id)}>del</button>
    </div>
  );
};