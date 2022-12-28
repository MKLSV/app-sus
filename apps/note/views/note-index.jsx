const { useState, useEffect} = React


import { NoteList } from "../cmps/note-list.jsx";
import { noteService } from "../services/note.service.js";
import { storageService } from "../../../services/async-storage.service.js";

export function NoteIndex() {
  const [notes, setNotes] = useState([]);

useEffect(() => {
  loadNotes()

}, [])

console.log(notes);


function loadNotes() {
    noteService.query().then(notes => setNotes(notes))
}
  return (
    <section className="note-index">
      <h1>Note App</h1>
      <input type="text" className="note-search-bar" />

      <NoteList />
    </section>
  );
}
