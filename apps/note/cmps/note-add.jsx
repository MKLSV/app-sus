import { noteService } from "../services/note.service.js";
import { DynamicForm } from "./dynamic-form.jsx";

const { useEffect, useRef, useState } = React;

export function NoteAdd({ setNotes, notes, onSaveNote }) {
  const [noteToAdd, setNoteToAdd] = useState(noteService.getEmptyNote());
  const [noteToAddType, setNoteToAddType] = useState("note-txt");
  // const elInputRef = useRef(null);

  // useEffect(() => {
  //   elInputRef.current.focus();
  // }, []);

  function handleChange({ target }) {
    let { value, type, name: field } = target;

    if (!value) return;
    if (noteToAddType === "note-video")
      value = value.replace("watch?v=", "embed/");
    if (noteToAddType === "note-todos") {
      setNoteToAdd((prevNote) => ({
        ...prevNote,
        type: noteToAddType,
        info: { ...prevNote.info, [field]: value, todos: stringToList(value) },
      }));
    } else {
      setNoteToAdd((prevNote) => ({
        ...prevNote,
        type: noteToAddType,
        info: { ...prevNote.info, [field]: value },
      }));
    }
  }

  function stringToList(string) {
    const items = string.split(",");
    const list = items.map((item) => ({ txt: item }));
    return list;
  }

  function onSaveNote(ev) {
    ev.preventDefault();
    noteService.save(noteToAdd).then((note) => {
      setNotes([...notes, note]);
    });
  }

  function onSetNoteType(type) {
    setNoteToAddType(type);
    noteToAdd.info.title = "";
    noteToAdd.info.txt = "";
  }

  return (
    <section className="note-add">
      <div className="notes-input">
        <DynamicForm
          noteToAddType={noteToAddType}
          onSaveNote={onSaveNote}
          handleChange={handleChange}
          notes={notes}
          setNotes={setNotes}
          noteToAdd={noteToAdd}
          setNoteToAdd={setNoteToAdd}
        />

        <div className="note-type-btns">
          <i
            className="fa-brands fa-youtube fa-xl note-type-btn"
            onClick={() => onSetNoteType("note-video")}
          ></i>
          <i
            className="fa-regular fa-image fa-xl note-type-btn"
            onClick={() => onSetNoteType("note-img")}
          ></i>
          <i
            className="fa-solid fa-list-ul fa-xl note-type-btn"
            onClick={() => onSetNoteType("note-todos")}
          ></i>
          <i
            className="fa-solid fa-font fa-xl note-type-btn"
            onClick={() => onSetNoteType("note-txt")}
          ></i>
        </div>
      </div>
    </section>
  );
}

