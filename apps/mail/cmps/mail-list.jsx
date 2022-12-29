const { Link } = ReactRouterDOM
const { useState, useEffect, Fragment } = React

import { utilService } from "../../../services/util.service.js"
import { DataTable } from "./data-table.jsx"


export function MailList({ mails, onRemoveMail, onShow }) {

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


    return <table className='mail-list' hidden={!onShow}>
        <tbody>
            {mails.map(mail => <DataTable key={mail.id} mail={mail} time={getTime(mail.sentAt)} onRemoveMail={onRemoveMail} />)}
        </tbody>
    </table>


}
