
const { useState, useEffect } = React

export function MailList({mails}) {
    console.log(mails)

    return  <table className='mail-list'>
            <tbody>
                {mails.map(mail => <tr key={mail.id}>
                    <td>{mail.name}</td>
                    <td>{mail.subject}</td>
                    <td>{mail.sentAt}</td>
                </tr>)}
            </tbody>
        </table>


}
