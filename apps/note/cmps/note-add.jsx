import { noteService } from "../services/note.service.js";
import { DynamicForm } from "./dynamic-form.jsx";

const { useEffect, useRef, useState } = React;

export function NoteAdd({ setNotes, notes, onSaveNote }) {
  const [noteToAdd, setNoteToAdd] = useState(noteService.getEmptyNote());
  const [noteToAddType, setNoteToAddType] = useState('note-txt')
  // const elInputRef = useRef(null);

  // useEffect(() => {
  //   elInputRef.current.focus();
  // }, []);

  function handleChange({ target }) {
    let { value, type, name: field } = target;
    console.log(target);
    setNoteToAdd((prevNote) => ({
      ...prevNote, type:noteToAddType,
      info: { ...prevNote.info, [field]: value },
    }))
    
  }

  function onSaveNote(ev) {
    ev.preventDefault()
    noteService.save(noteToAdd).then((note) => {
      setNotes([...notes, note])
    })
  }

  function onSetNoteType(type) {
    setNoteToAddType(type)
  }

  return (
    <section className="note-add">
      <div className="notes-input">

        <DynamicForm noteToAddType={noteToAddType} onSaveNote={onSaveNote} handleChange={handleChange} notes={notes} setNotes={setNotes} noteToAdd={noteToAdd}/>

        <div className="note-type-btns">
          <button onClick={()=> onSetNoteType('note-video')}>video</button>
          <button onClick={()=> onSetNoteType('note-img')}>image</button>
          <button onClick={()=> onSetNoteType('note-todos')}>todos</button>
          <button onClick={()=> onSetNoteType('note-txt')}>text</button>
        </div>
      </div>
    </section>
  );
}
