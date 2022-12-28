
const { useState, useEffect } = React

import { utilService } from "../../../services/util.service.js"

export function MailList({ mails }) {
    console.log(mails)

    function getTime(time) {
        const currTime = Date.now()
        const dif = (currTime - time) / 1000 / 60 / 60 / 24
        console.log(currTime)
        if (dif < 1) {
            const { hour, minute } = utilService.getTime(time)
            return (hour + ":" + minute);
        }
        
        // console.log((currTime - time) / 86400000)

    }

    return <table className='mail-list'>
        <tbody>
            {mails.map(mail => <tr key={mail.id}>
                <td>{mail.name}</td>
                <td>{mail.subject}</td>
                <td>{getTime(mail.sentAt)}</td>
            </tr>)}
        </tbody>
    </table>


}
