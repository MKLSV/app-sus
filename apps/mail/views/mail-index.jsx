const Router = ReactRouterDOM.HashRouter
const { useState, useEffect, Fragment } = React
const { Outlet } = ReactRouterDOM

import { MailHeader } from "../cmps/mail-header.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { MailNav } from "../cmps/mail-nav.jsx"
import { NewMail } from "../cmps/mail-new-message.jsx"

import { mailService } from "../services/mail.service.js"

export function MailIndex() {

    const [onShow, setOnShow] = useState(false)
    const [mails, setMails] = useState(null)


    useEffect(() => {
        loadMails()
    }, [])


    function onNewMail() {
        setOnShow(!onShow)
    }

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
    // return <Fragment>
    //     <MailHeader />
    //     <div className='mail-container'>
    //         <MailNav onNewMail={onNewMail} />
    //         <div className='nested-route'>
    //             <Outlet />
    //         </div>
    //         {/* <MailList onShow={!onShow} mails={mails} onRemoveMail={onRemoveMail} />
    //         <NewMail onShow={onShow} /> */}
    //     </div>
    // </Fragment>
    return <Fragment>
        <MailHeader />
        <div className='mail-container'>
            <MailNav onNewMail={onNewMail} />
            <MailList onShow={!onShow} mails={mails} onRemoveMail={onRemoveMail} />
            <NewMail onShow={onShow} />
        </div>
    </Fragment>

}

