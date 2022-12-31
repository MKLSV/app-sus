

export function TextForm({noteToAddType, onSaveNote, notes, setNotes, handleChange, noteToAdd }) {
    
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
      placeholder="Take a note..."
      name="txt"
      id="txt"
      value={noteToAdd.info.txt}
      cols="30"
      rows="3"
      onChange={handleChange}
    ></textarea>
    <button ><i className="fa-solid fa-2xl fa-circle-plus add-note-btn"></i></button>
  </form>
}