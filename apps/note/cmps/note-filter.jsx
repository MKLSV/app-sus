const { useState, useEffect } = React;

import { noteService } from "../services/note.service.js";



export function NoteFilter({ onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(
    noteService.getDefaultFilter()
  );

  useEffect(() => {
    onSetFilter(filterByToEdit)
  }, [filterByToEdit])
  

  function handleChange({ target }) {
    const { value, name: field } = target;
    setFilterByToEdit((prevFilter) => {
      return { ...prevFilter, [field]: value };
    });
  }

function onSubmitFilter(ev) {
    ev.preventDefault()
    onSetFilter(filterByToEdit)
}

  return (
    <section className="notes-filter">
      <form onSubmit={onSubmitFilter}>
        <input
          value={filterByToEdit.txt}
          type="text"
          placeholder="Type to filter"
          id="filter"
          name="txt"
          onChange={handleChange}
        />
        <select value={filterByToEdit.type} name="type" onChange={handleChange}>
        <option name="type" value="">
            All
          </option>
          <option name="type" value="note-txt">
            Text
          </option>
          <option name="type" value="note-todos">
            Todos
          </option>
          <option name="type" value="note-img">
            Image
          </option>
          <option name="type" value="note-video">
            Video
          </option>
        </select>
        <button>Filter</button>
      </form>
    </section>
  );
}
