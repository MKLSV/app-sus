const {Link} = ReactRouterDOM

import { NotePreview } from "./note-preview.jsx";


export function NoteList() {

    return <section className="note-list">
        <ul>
            <li ><NotePreview /></li>
            <Link to={`/note/234`}>Select Note</Link> 
            {/* change 234 to note id */}
        </ul>
        
    </section>

}
