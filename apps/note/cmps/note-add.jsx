import { noteService } from "../services/note.service.js";

const { useEffect, useRef, useState } = React;

export function NoteAdd({ setNotes, notes, onSaveNote }) {
  const [noteToAdd, setNoteToAdd] = useState(noteService.getEmptyNote());
  const elInputRef = useRef(null);

  useEffect(() => {
    elInputRef.current.focus();
  }, []);

  function handleChange({ target }) {
    let { value, type, name: field } = target;
    setNoteToAdd((prevNote) => ({
      ...prevNote,
      info: { ...prevNote.info, [field]: value },
    }));
  }

  function onSaveNote(ev) {
    ev.preventDefault()
    noteService.save(noteToAdd).then((note) => {
      setNotes([...notes, note])
    })
  }

  return (
    <section className="note-add">
      <div className="notes-input">
        {/* <input type="text" className="text" /> */}
        <form onSubmit={onSaveNote}>
          <input
            onChange={handleChange}
            value={noteToAdd.info.title}
            name="title"
            type="text"
            id="title"
            placeholder="Title"
          />
          <textarea
            placeholder="Take a note..."
            name="txt"
            id="txt"
            value={noteToAdd.info.txt}
            cols="30"
            rows="3"
            onChange={handleChange}
            ref={elInputRef}
          ></textarea>
          <button className="add-note-btn">Add note</button>
        </form>
        <div className="note-add-btns"></div>
      </div>
    </section>
  );
}
