import { mailService } from "../services/mail.service.js"

const { Fragment } = React
const { useState, useEffect } = React

export function MailList() {

    const [mails, setMails] = useState(null)

    useEffect(() => {
        loadMails()
    }, [])

    function loadMails() {
        mailService.query().then(mails => setMails(mails))
        console.log(mails)
        console.log(mails)
    }


    return <Fragment>
        <table className='mail-list'>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Title/One more email for the road</td>
                    <td>Time: 12:14AM</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>Title/One more email for the road</td>
                    <td>Time: 12:14AM</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>Title/One more email for the road</td>
                    <td>Time: 12:14AM</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>Title/One more email for the road</td>
                    <td>Time: 12:14AM</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>Title/One more email for the road</td>
                    <td>Time: 12:14AM</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>Title/One more email for the road</td>
                    <td>Time: 12:14AM</td>
                </tr>
            </tbody>
        </table>
    </Fragment>

}
