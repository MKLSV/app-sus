const { Link } = ReactRouterDOM
const { useState, useEffect, Fragment } = React

import { mailService } from "../services/mail.service.js"

export function MailPreview({ mail, onRemoveMail, time }) {



    // const [isExpanted, setIsExpanted] = useState(false)
    const [isStarred, setIsStarred] = useState(mail.isStarred)
    const [isRead, setIsRead] = useState(!mail.isRead)

    function setStar(event) {
        event.stopPropagation()
        mail.isStarred = !mail.isStarred
        mailService.save(mail)
        setIsStarred(!isStarred)
    }

    function setRead(mail) {
        console.log(mail)
    }
    function removeMail(event) {
        event.stopPropagation()
        onRemoveMail(mail)

    }
    return <Fragment>

        <tr className='mail-list-message' onClick={() => { console.log('ok') }}>
            <td onClick={setStar}>{mail.isStarred ? <i className="fa-solid fa-star fa-lg"></i> : <i className="fa-regular fa-star fa-lg"></i>}</td>
            <td>{mail.name}</td>
            <td>{mail.subject}</td>
            <td className='preview-time'>{time}</td>
            <td className='preview-btns table-btns'>
                <a onClick={() => setRead(mail.isRead)}> {!mail.isRead ? <i className="fa-regular fa-envelope fa-lg"></i> : <i className="fa-regular fa-envelope-open"></i>}</a>
                <a onClick={removeMail}><i className="fa-regular fa-trash-can fa-lg"></i></a>
            </td>
        </tr>
        {/* <tr hidden={!isExpanted}>
            <td colSpan='5' className='preview-message'>
                <div className='preview-header'>
                    <a className='preview-subject'>{mail.subject}</a>
                    <div className='preview-btns'>
                        <Link to={`/mail/${mail.id}`}><button>📖</button></Link>
                        <button onClick={() => onRemoveMail(mail.id)}>🧺</button>
                    </div>
                </div>
                <div className='preview-sender'>
                    <a className='preview-sender-name'>{mail.name}</a>
                    <a className='preview-sender-email'>{mail.from}</a>
                </div>
                <div className='preview-message-text'>
                    <a>{mail.body}</a>
                </div>
            </td>
        </tr> */}

    </Fragment>

}