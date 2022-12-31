const { Link } = ReactRouterDOM
const { useState, useEffect, Fragment } = React

import { utilService } from "../../../services/util.service.js"
import { MailPreview } from "./mail-preview.jsx"


export function MailList({ mails, onRemoveMail}) {


    if (!mails.length) return <h1>No mails to show...</h1>
    return <table className='mail-list'>
        <tbody>
            {mails.map(mail => <MailPreview key={mail.id} mail={mail} time={utilService.getTimeMs(mail.sentAt)} onRemoveMail={onRemoveMail} />)}
        </tbody>
    </table>


}
