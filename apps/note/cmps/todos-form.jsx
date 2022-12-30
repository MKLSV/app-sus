import { noteService } from "../services/note.service.js";

const { useState } = React;

export function TodosForm({
  noteToAddType,
  onSaveNote,
  notes,
  setNotes,
  handleChange,
  noteToAdd,
  setNoteToAdd,
}) {


  return (
    <form onSubmit={onSaveNote}>
      <input
        onChange={handleChange}
        value={noteToAdd.info.title}
        name="title"
        type="text"
        id="title"
        placeholder="Title"
      />
      <textarea
        placeholder="Enter comma separated list... "
        name="todos"
        id="todos"
        value={noteToAdd.info.todo}
        cols="30"
        rows="3"
        onChange={handleChange}
      ></textarea>
      <button className="add-note-btn">Add note</button>
    </form>
  );
}
