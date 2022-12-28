export function NoteAdd() {
    return <section className="note-add">
        <div className="notes-input">
            <input type="text" className="text" />
            <textarea name="note-text" id="note-text" cols="30" rows="10"></textarea>
        </div>
    </section>
}