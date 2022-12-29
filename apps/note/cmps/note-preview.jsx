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
      <i className="fa-solid fa-trash" onClick={() => onRemoveNote(note.id)}></i>
      <i className="fa-solid fa-pen-to-square" onClick={() => onSelectNote(note.id)}></i>
      </div>
    </article>
  );
}
