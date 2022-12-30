const { useState } = React;

export function NoteDetails({ selectedNote, setIsModalOpen, isModalOpen }) {
  const showHideClassName = isModalOpen
    ? "modal display-block"
    : "modal display-none";

  return (
    <section className={showHideClassName}>
      <div className="modal-main">
        <h1>{selectedNote.info.title}</h1>
        {selectedNote.type === "note-img" && <img src={`${selectedNote.info.url}`} />}
        {selectedNote.type === "note-todos" && (
          <ul>
            {selectedNote.info.todos.map((todo) => (
              <li>{todo.txt}</li>
            ))}
          </ul>
        )}
        {selectedNote.type === "note-video" &&  <iframe src={selectedNote.info.url} width={400} height={300} frameborder="0"></iframe> }
        <h5>{selectedNote.info.txt}</h5>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </div>
    </section>
  );
}
