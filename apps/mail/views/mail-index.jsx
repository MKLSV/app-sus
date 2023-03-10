const Router = ReactRouterDOM.HashRouter
const { useState, useEffect, Fragment } = React

import { MailDetails } from "../cmps/mail-details.jsx"
import { MailHeader } from "../cmps/mail-header.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { MailNav } from "../cmps/mail-nav.jsx"
import { NewMail } from "../cmps/mail-new-message.jsx"

import { mailService } from "../services/mail.service.js"

export function MailIndex() {

    const [filter, setFilter] = useState('')
    const [filterBy, setFilterBy] = useState('inbox')
    const [mails, setMails] = useState(null)
    console.log(filterBy)


    useEffect(() => {
        console.log('loading')
        loadMails()
    }, [filterBy])

    // useEffect(() => {
    //     console.log('loading')
    //     loadFilterMails()
    // })


    function loadMails() {
        mailService.query(filterBy).then(mails => setMails(mails))
    }
    // function loadFilterMails() {
    //     mailService.anotherQuery(filter).then(mails => {
    //         setMails(mails)
    //         console.log(mails)
    //     })
    // }

    function onSetFilterBy(filterBy) {
        setFilter(filterBy)
    }
    // function onSetFilter(filter) {
    //     setFilterBy(filter)
    // }

    function onRemoveMail(mail) {
        const mailId = mail.id
        if (mail.onTrash) {
            mailService.remove(mailId).then(() => {
                const updateMails = mails.filter(mail => mail.id !== mailId)
                setMails(updateMails)
            })
        } else {
            mail.onTrash = true
            mailService.save(mail)
            const updateMails = mails.filter(mail => mail.id !== mailId)
            setMails(updateMails)
        }

    }

    function inboxConst() {
        const inbox = mails.filter(mail => mail.isSent !== true && mail.isDraft !== true && mail.onTrash !== true && mail.isRead !== false)
        if (inbox.length > 0) return inbox.length
    }

    if (!mails) return <h1 className="loading"></h1>

    return <div className='mail-app'>

        <MailHeader />
        <div className='mail-container'>
            <MailNav onSetFilter={onSetFilterBy} inboxConst={inboxConst = inboxConst()} />
            <MailList mails={mails} onRemoveMail={onRemoveMail} />
        </div>
    </div>

}

