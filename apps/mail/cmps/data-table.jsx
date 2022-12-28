const { Link } = ReactRouterDOM
const { useState, useEffect, Fragment } = React

import { utilService } from "../../../services/util.service.js"

export function DataTable({ mail, onRemoveMail, time }) {



    const [isExpanted, setIsExpanted] = useState(false)

    return <Fragment>

        <tr className='mail-list-message' onClick={() => { setIsExpanted(!isExpanted) }}>
            <td>⭐</td>
            <td>{mail.name}</td>
            <td>{mail.subject}</td>
            <td>{time}</td>
            {/* <td><Link to={`/mail/${mail.id}`}><button>📖</button></Link></td>
                <td><button onClick={() => onRemoveMail(mail.id)}>🧺</button></td> */}
        </tr>
        <tr hidden={!isExpanted}>
            <td colSpan='3' className='preview-message'>
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
                <a className='preview-message-text'>{mail.body}</a>
            </td>
        </tr>

    </Fragment>

}