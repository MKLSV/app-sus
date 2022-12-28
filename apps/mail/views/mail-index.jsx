const { Fragment } = React


import { MailHeader } from "../cmps/mail-header.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { MailNav } from "../cmps/mail-nav.jsx"
import { NewMail } from "../cmps/mail-new-message.jsx"

export function MailIndex() {
    return <Fragment>
        <MailHeader />
        <div className='mail-container'>
            <MailNav />
            <MailList />
            <NewMail/>
        </div>
    </Fragment>
}

