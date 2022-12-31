const { useState } = React
const { Link, useNavigate } = ReactRouterDOM

import { mailService } from "../services/mail.service.js";


export function NewMail() {
    const [mailToAdd, setMailToAdd] = useState(mailService.getEmptyMail())
    const navigate = useNavigate()

    function handleChange({ target }) {
        let { value, name } = target
        setMailToAdd((prevVal) => ({ ...prevVal, [name]: value }))

    }
    function onSendMail(event) {
        event.preventDefault();
        mailService.save(mailToAdd).then((mail) => {
            console.log(mail)
            navigate('/mail')
        })
    }

    function onDraft() {
        console.log('saved to draft')
        navigate('/mail')
    }

    return <div className='new-message-container'>
        <div className='new-message'>

            <div className='new-message-header'>
                <h3>New Message</h3>
                <a className='new-message-cancel' onClick={onDraft}><i className="fa-solid fa-x"></i></a>
            </div>

            <form className='new-message-form' onSubmit={onSendMail}>
                <input
                    className='msg-input-form'
                    type="email"
                    id="to"
                    name="to"
                    placeholder="To"
                    onChange={handleChange}
                />

                <input className='msg-input-form'
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    onChange={handleChange} />


                <textarea className='text-input-form'
                    id="body"
                    name="body"
                    onChange={handleChange} />



                <div className='new-message-btns'>
                    <button className='new-message-send' type="submit">Send</button>
                    <Link to="/mail" className='new-message-trash'><i className="fa-regular fa-trash-can fa-xl"></i></Link>
                </div>
            </form>
        </div>
    </div>
}