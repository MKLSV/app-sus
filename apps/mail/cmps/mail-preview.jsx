const { useNavigate } = ReactRouterDOM
const { useState, useEffect, Fragment } = React

import { mailService } from "../services/mail.service.js"

export function MailPreview({ mail, onRemoveMail, time }) {

    const [isStarred, setIsStarred] = useState(mail.isStarred)
    const [isRead, setIsRead] = useState(!mail.isRead)
    const navigate = useNavigate()

    function setStar(event) {
        event.stopPropagation()
        mail.isStarred = !mail.isStarred
        mailService.save(mail)
        setIsStarred(!isStarred)
    }

    function setRead(event) {
        event.stopPropagation()
        mail.isRead = !mail.isRead
        setIsRead(!isRead)
    }
    function removeMail(event) {
        event.stopPropagation()
        onRemoveMail(mail)
    }

    function goToDetails() {
        mail.isRead = true
        mailService.save(mail)
        navigate(`/mail/${mail.id}`)
    }

    function checkName(){
        const user = mailService.getUser()
        if(user.fullname === mail.name) return 'Me'
        return mail.name
    }


    return <Fragment>
        <tr className={mail.isRead ? 'mail-list-message is-read' : 'mail-list-message'} onClick={() => { goToDetails() }}>
            <td className="mail-list-starred" onClick={setStar}>{mail.isStarred ? <i className="fa-solid fa-star fa-lg"></i> : <i className="fa-regular fa-star fa-lg"></i>}</td>
            <td>{checkName()}</td>
            <td>{mail.subject}</td>
            <td className='preview-time'>{time}</td>
            <td className='preview-btns table-btns'>
                <a className='preview-btn' onClick={setRead}> {mail.isRead ? <i className="fa-regular fa-envelope fa-lg"></i> : <i className="fa-regular fa-envelope-open fa-lg"></i>}</a>
                <a className='preview-btn' onClick={removeMail}><i className="fa-regular fa-trash-can fa-lg"></i></a>
            </td>
        </tr>
    </Fragment>

}