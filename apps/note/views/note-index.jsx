const { useState, useEffect } = React;

import { NoteAdd } from "../cmps/note-add.jsx";
import { NoteList } from "../cmps/note-list.jsx";
import { noteService } from "../services/note.service.js";
import { NoteDetails } from "../views/note-details.jsx";
import { PinnedNotes } from "./pinned-notes.jsx";

export function NoteIndex() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false)


  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

  useEffect(() => {
    loadNotes();
  }, []);

  function loadNotes() {
    noteService.query().then((notes) => setNotes(notes));
  }

  function onRemoveNote(noteId) {
    console.log("remove note!");
    noteService.remove(noteId).then(() => {
      console.log("note removed.");
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);
    });
  }

  function onSelectedNote(noteId) {
    console.log("noteId", noteId);
    noteService.get(noteId).then(note => {
        setSelectedNote(note)
        setIsModalOpen(true)
    })
  }



  return (
    <section className="note-index">
      <NoteAdd setNotes={setNotes} notes={notes}/>
      <PinnedNotes />
      <NoteList
        notes={notes}
        onRemoveNote={onRemoveNote}
        onSelectNote={onSelectedNote}
      />
      {selectedNote && <NoteDetails isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} selectedNote={selectedNote} />}
    </section>
  );
}
