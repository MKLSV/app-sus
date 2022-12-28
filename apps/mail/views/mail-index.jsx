const { Fragment } = React
const { useState, useEffect } = React
const { Routes, Route } = ReactRouterDOM

import { MailHeader } from "../cmps/mail-header.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { MailNav } from "../cmps/mail-nav.jsx"
import { NewMail } from "../cmps/mail-new-message.jsx"

import { mailService } from "../services/mail.service.js"

export function MailIndex() {
   
    const [mails, setMails] = useState(null)

    useEffect(() => {
        loadMails()
    }, [])


    function loadMails() {
        mailService.query().then(mails => setMails(mails))
    }

    function onRemoveMail(mailId) {
        mailService.remove(mailId).then(() => {
            const updateMails = mails.filter(mail => mail.id !== mailId)
            setMails(updateMails)
        })
    }

    if (!mails) return <h1>Loading...</h1>
    return <Fragment>
        <MailHeader />
        <div className='mail-container'>
            <MailNav />
            <MailList mails={mails} onRemoveMail={onRemoveMail}/>
            <NewMail/>
        </div>
    </Fragment>
}

