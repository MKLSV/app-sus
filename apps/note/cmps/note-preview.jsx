

export function NotePreview({note}) {

    return <article className="note-preview">
        <h2>{note.title}</h2>
        <p>{note.txt}</p>
    </article>
}