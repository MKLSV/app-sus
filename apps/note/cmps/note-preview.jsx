import { NoteTxt } from "../cmps/note-txt.jsx";
import { NoteImg } from "../cmps/note-img.jsx";
import { NoteVideo } from "../cmps/note-video.jsx";
import { NoteTodos } from "../cmps/note-todos.jsx";

export function NotePreview({ note, onSelectNote, onRemoveNote }) {
  return (
    <article className="note-preview">
      <h2>{note.title}</h2>
      <p>{note.info.txt}</p>
      <div className="note-btns">
        <button onClick={() => onRemoveNote(note.id)}>Delete</button>
        <button onClick={() => onSelectNote(note.id)}>Select</button>
      </div>
    </article>
  );
}
