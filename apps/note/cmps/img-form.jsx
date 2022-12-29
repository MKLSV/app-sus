export function ImgForm({noteToAddType, onSaveNote, notes, setNotes, handleChange, noteToAdd }) {
    console.log(noteToAddType);

    return <form onSubmit={onSaveNote}>
    <input
      onChange={handleChange}
      value={noteToAdd.info.title}
      name="title"
      type="text"
      id="title"
      placeholder="Title"
    />
    <textarea
    
      placeholder="Enter Image URL..."
      name="url"
      id="url"
      value={noteToAdd.info.url}
      cols="30"
      rows="3"
      onChange={handleChange}
    ></textarea>
    <button className="add-note-btn">Add note</button>
  </form>
}