const { Link } = ReactRouterDOM;

import { NotePreview } from "./note-preview.jsx";

export function NoteList({setNotes, notes, onRemoveNote, onSelectNote, onPinClick}) {


  return (
    <ul className="note-list flex">
      {notes.map((note) => (
        <li key={note.id}>
          <NotePreview setNotes={setNotes} onPinClick={onPinClick}  note={note} onRemoveNote={onRemoveNote} onSelectNote={onSelectNote}/>
        </li>
      ))}
    </ul>
  );
}
