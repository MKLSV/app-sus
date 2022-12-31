import { utilService } from "../../../services/util.service.js"
import { mailService } from "../services/mail.service.js"


const { useParams } = ReactRouterDOM
const { useState, useEffect } = React
const { NavLink, Link } = ReactRouterDOM
const { useNavigate } = ReactRouterDOM


export function MailDetails() {

    const [isStarred, setIsStarred] = useState(null)
    const [mail, setMail] = useState(null)
    const navigate = useNavigate()
    const params = useParams()
    console.log(params)

    useEffect(() => {
        loadMail()
    }, [])

    function loadMail() {
        mailService.get(params.mailId)
            .then((mail) => setMail(mail))
    }

    function setStar() {
        mail.isStarred = !mail.isStarred
        mailService.save(mail)
        setIsStarred(!isStarred)
    }

    function checkTo() {
        const user = mailService.getUser()
        if (user.email === mail.to) return 'to me'
    }

    function makeUnread() {
        mail.isRead = false
        mailService.save(mail).then(() => {
            navigate(-1)
        })

    }
    function onRemote() {
        if (mail.onTrash) {
            mailService.remove(mail.id).then(() => {
                navigate(-1)
            })
        } else {
            mail.onTrash = true
            mailService.save(mail).then(() => {
                navigate(-1)
            })
        }
    }

    if (!mail) return <h1 className="loading"></h1>
    return <section className="mail-details">
        <div className="mail-details-header">
            <div className="mail-details-header-subject-back">
                <Link to="/mail"><i className="fa-solid fa-arrow-left fa-lg"></i></Link>
                <a className="mail-details-header-subject">{mail.subject}</a>
            </div>
            <div className="mail-details-header-btns">
                <a onClick={() => makeUnread()}><i className="fa-regular fa-envelope fa-lg mail-details-header-btn"></i></a>
                <a onClick={() => onRemote()}><i className="fa-regular fa-trash-can  fa-lg mail-details-header-btn"></i></a>
            </div>
        </div>
        <div className="mail-details-info-a">
            <section className="mail-detail-image">
                <img className="mail-detail-img" src="https://lh3.googleusercontent.com/a/default-user=s40-p"></img>
            </section>
            <div className="mail-details-container">
                <div className="mail-details-info">
                    <div className="mail-details-from">
                        <div className="mail-details-contact">
                            <span className="mail-details-name">{mail.name}</span>
                            <span className="mail-details-mail">{mail.from}</span>
                        </div>
                        <span className="mail-details-to">{checkTo()}</span>
                    </div>
                    <div className="mail-details-time-star">
                        <span className="mail-details-time">{utilService.getMailTimeMs(mail.sentAt)}</span>
                        <span className="mail-details-starred" onClick={setStar}>{mail.isStarred ? <i className="fa-solid fa-star "></i> : <i className="fa-regular fa-star"></i>}</span>
                    </div>
                </div>
                <div className='mail-details-contant'>
                    <span className='mail-details-text'>{mail.body}</span>

                </div>
            </div>
        </div>
    </section>

}
