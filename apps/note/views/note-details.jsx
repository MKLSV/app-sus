

export function NoteDetails({note}) {

    return <section className="note-details">
        <h1>{note.title}</h1>
        <h5>{note.info.txt}</h5>
    </section>

}