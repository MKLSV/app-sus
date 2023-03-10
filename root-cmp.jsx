const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"
import { MailIndex } from "./apps/mail/views/mail-index.jsx"
import { NoteIndex } from "./apps/note/views/note-index.jsx"
import { NoteDetails } from "./apps/note/views/note-details.jsx"
import { NewMail } from "./apps/mail/cmps/mail-new-message.jsx"
import { MailList } from "./apps/mail/cmps/mail-list.jsx"
import { MailDetails } from "./apps/mail/cmps/mail-details.jsx"



export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mail/new-mail" element={<NewMail />} />
                <Route path="/mail/:mailId" element={<MailDetails />} />
                <Route path="/mail" element={<MailIndex />} />
                <Route path="/note" element={<NoteIndex />} />
                <Route path="/note/:noteId" element={<NoteDetails />} />
            </Routes>
        </section>
    </Router>
}
