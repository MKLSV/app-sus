const {useEffect, useRef} = React

export function NoteAdd() {
  const elInputRef = useRef(null)

  useEffect(() => {
    elInputRef.current.focus()
  }, [])
  


  function handleChange() {
    console.log("this is a text area!");
  }

  return (
    <section className="note-add">
      <div className="notes-input">
        {/* <input type="text" className="text" /> */}
        <form>
          <input type="text" className="text" placeholder="Title" />
          <textarea
            placeholder="Take a note..."
            name="txt"
            id="txt"
            cols="30"
            rows="3"
            onChange={handleChange}
            ref={elInputRef}
          ></textarea>
        </form>
        <div className="note-add-btns">
        <button className="add-note-btn">Add note</button>
        </div>
      </div>
    </section>
  );
}
