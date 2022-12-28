

export function NewMail() {

    return <div className='new-message-container'>
        <h3 className='new-message-header'>New Message</h3>
        <form className='new-message-form' action="/my-handling-form-page" method="post">

            <li className='msg-form'>
                <label className='msg-form-label' htmlFor="name">To:</label>
                <input className='msg-input-form' type="text" id="name" name="user_name" />
            </li>
            <li className='msg-form'>
                <label className='msg-form-label' htmlFor="mail">Cc:</label>
                <input className='msg-input-form' type="email" id="mail" name="user_email" />
            </li>
            <li className='msg-form'>
                <label className='msg-form-label' htmlFor="mail">Bcc:</label>
                <input className='msg-input-form'  type="email" id="mail" name="user_email" />
            </li>
            <li className='msg-form'>
                <label className='msg-form-label' htmlFor="mail">Subject:</label>
                <input className='msg-input-form' type="email" id="mail" name="user_email" />
            </li>
            <li className='msg-form'>
                <textarea className='text-input-form'id="msg" name="user_message"></textarea>
            </li>
        </form>
    </div>
}