const {Link} = ReactRouterDOM

import { NotePreview } from "./note-preview.jsx";


export function NoteList() {

    return <section className="note-list">
        <ul>
        <Link to={`/note/1`}><li ><NotePreview /></li></Link> 
        <Link to={`/note/2`}><li ><NotePreview /></li></Link> 
        <Link to={`/note/3`}><li ><NotePreview /></li></Link> 
        <Link to={`/note/4`}><li ><NotePreview /></li></Link> 
        <Link to={`/note/5`}><li ><NotePreview /></li></Link> 
        <Link to={`/note/6`}><li ><NotePreview /></li></Link> 
            {/* change 234 to note id */}
        </ul>
        
    </section>

}
