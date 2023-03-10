const { useState, useEffect } = React;

import { NoteAdd } from "../cmps/note-add.jsx";
import { NoteFilter } from "../cmps/note-filter.jsx";
import { NoteList } from "../cmps/note-list.jsx";
import { noteService } from "../services/note.service.js";
import { NoteDetails } from "../views/note-details.jsx";
import { PinnedNotes } from "./pinned-notes.jsx";

export function NoteIndex() {
  const [notes, setNotes] = useState([]);
  const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())
  const [pinnedNotes, setPinnedNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadPinned();
    loadNotes();
  }, [filterBy]);

  function loadNotes() {
    noteService.query(filterBy).then((notes) => setNotes(notes));
  }

  function loadPinned() {
    noteService.query().then((notes) => {
      const pinned = notes.filter((note) => note.isPinned);
      setPinnedNotes(pinned);
    });
  }
  
function onSetFilter(filterByFromFilter) {
    
    setFilterBy(filterByFromFilter)
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
    noteService.get(noteId).then((note) => {
      setSelectedNote(note);
      setIsModalOpen(true);
    });
  }

  const handlePinClick = (noteId) => {
    let newArr = [...notes, ...pinnedNotes];
    let updatedNotes = newArr.map((note) => {
      if (note.id === noteId) {
        return { ...note, isPinned: !note.isPinned };
      }
      return note;
    });

    const updatedPinnedNotes = updatedNotes.filter((note) => note.isPinned);
    setPinnedNotes(updatedPinnedNotes);

    let newNotes = updatedNotes.filter((note) => !note.isPinned);
    setNotes(newNotes);
  };

  return (
    <section className="note-index">
      <NoteAdd setNotes={setNotes} notes={notes} />
      <NoteFilter onSetFilter={onSetFilter} />
      <PinnedNotes
        setPinnedNotes={setPinnedNotes}
        pinnedNotes={pinnedNotes}
        onPinClick={handlePinClick}
      />
      <NoteList
        onPinClick={handlePinClick}
        setNotes={setNotes}
        notes={notes}
        onRemoveNote={onRemoveNote}
        onSelectNote={onSelectedNote}
      />
      {selectedNote && (
        <NoteDetails
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selectedNote={selectedNote}
        />
      )}
    </section>
  );
}
