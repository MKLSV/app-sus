const { Link } = ReactRouterDOM;

import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes, onRemoveNote, onSelectNote, onPinClick}) {


  return (
    <ul className="note-list flex">
      {notes.map((note) => (
        <li key={note.id}>
          <NotePreview onPinClick={onPinClick}  note={note} onRemoveNote={onRemoveNote} onSelectNote={onSelectNote}/>
        </li>
      ))}
    </ul>
  );
}
