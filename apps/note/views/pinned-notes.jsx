import { NotePreview } from "../cmps/note-preview.jsx";

export function PinnedNotes({pinnedNotes, onPinClick, setPinnedNotes}) {

    

    return <section className="pinned-notes">
         {pinnedNotes.map((note) => (
        <NotePreview key={note.id} note={note} onPinClick={onPinClick} />
      ))}
    </section>
}