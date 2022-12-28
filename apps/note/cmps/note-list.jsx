const {Link} = ReactRouterDOM

import { NotePreview } from "./note-preview.jsx";


export function NoteList({notes}) {

    return <ul className="note-list">
        {notes.map(note => <Link to={`/note/${note.id}`}><li key={note.id}><NotePreview note={note}/></li></Link>)}

        {/* <ul>
        <Link to={`/note/1`}><li ><NotePreview /></li></Link>  */}
        
            {/* change 234 to note id */}
        {/* </ul> */}
        
    </ul>

}
