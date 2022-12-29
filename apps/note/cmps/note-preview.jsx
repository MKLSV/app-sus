const {useState} = React

import { NoteTxt } from "../cmps/note-txt.jsx";
import { NoteImg } from "../cmps/note-img.jsx";
import { NoteVideo } from "../cmps/note-video.jsx";
import { NoteTodos } from "../cmps/note-todos.jsx";
import { DynamicNote } from "./dynamic-note.jsx";

export function NotePreview({ note, onSelectNote, onRemoveNote }) {
    
    
  return (
    <article className="note-preview">
        <DynamicNote type={note.type} info={note.info} />

      <div className="note-btns">
        <button onClick={() => onRemoveNote(note.id)}>Delete</button>
        <button onClick={() => onSelectNote(note.id)}>Select</button>
      </div>
    </article>
  );
}
