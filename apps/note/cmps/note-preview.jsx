const { useState } = React;

import { NoteTxt } from "../cmps/note-txt.jsx";
import { NoteImg } from "../cmps/note-img.jsx";
import { NoteVideo } from "../cmps/note-video.jsx";
import { NoteTodos } from "../cmps/note-todos.jsx";
import { ColorPicker } from "../cmps/color-picker.jsx";
import { DynamicNote } from "./dynamic-note.jsx";


export function NotePreview({ note, onSelectNote, onRemoveNote }) {
  const [selectedColor, setSelectedColor] = useState("white");
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  
  function handleColorClick() {
    setIsPickerOpen(!isPickerOpen);
  }

  function onSelectColor(noteId) {
    console.log("select color!", noteId);
  }

  return (
    <article className="note-preview" style={{
      backgroundColor: selectedColor,
    }}>
      <DynamicNote type={note.type} info={note.info} />

      <div className="note-btns">
        <i className="fa-solid fa-lg fa-thumbtack"></i>
        <i className="fa-solid fa-lg fa-palette"  onClick={handleColorClick}></i>
        {isPickerOpen && (
        <ColorPicker color={selectedColor} setColor={setSelectedColor} />
      )}

        <i
          className="fa-solid fa-lg fa-pen-to-square note-btn"
          onClick={() => onSelectNote(note.id)}
        ></i>
        <i className="fa-solid fa-lg fa-envelope"></i>
        <i
          className="fa-solid fa-lg fa-trash note-btn"
          onClick={() => onRemoveNote(note.id)}
        ></i>
      </div>
    </article>
  );
}

{
  /* <div style={{ backgroundColor: color }}>
<select value={color} onChange={e => setColor(e.target.value)}>
  {colors.map(color => (
    <option key={color} value={color}>
      {color}
    </option>
  ))}
</select>
{/* note content goes here */
}
// </div> */}
