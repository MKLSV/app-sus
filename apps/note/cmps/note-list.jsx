const { Link } = ReactRouterDOM;

import { NotePreview } from "./note-preview.jsx";



export function NoteList({ notes, onRemoveNote, onSelectNote}) {
  return (
    <ul className="note-list flex">
      {notes.map((note) => (
        <li key={note.id}>
          <NotePreview note={note} onRemoveNote={onRemoveNote} onSelectNote={onSelectNote}/>
        </li>
      ))}
    </ul>
  );
}
