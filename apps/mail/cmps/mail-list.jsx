const { Link } = ReactRouterDOM
const { useState, useEffect, Fragment } = React

import { utilService } from "../../../services/util.service.js"
import { MailPreview } from "./mail-preview.jsx"


export function MailList({ mails, onRemoveMail }) {

    function getTime(time) {
        const currTime = Date.now()
        const dif = (currTime - time) / 1000 / 60 / 60 / 24
        if (dif < 1) {
            let { hour, minute } = utilService.getTime(time)
            minute = minute < 10 ? '0' + minute : minute
            return (hour + ":" + minute);
        }
        return (utilService.getDay(time) + ' ' + utilService.getMonthShortName(time))
    }

    if (!mails.length) return <h1>No mails to show...</h1>
    return <table className='mail-list'>
        <tbody>
            {mails.map(mail => <MailPreview key={mail.id} mail={mail} time={getTime(mail.sentAt)} onRemoveMail={onRemoveMail} />)}
        </tbody>
    </table>


}
