import { NoteList } from "../cmps/note-list.jsx"


export function NoteIndex() {

    return <section className="note-index">
        <h1>note app</h1>
        <input type="text" className="note-search-bar"/>
        
        <NoteList />
    </section>

}
