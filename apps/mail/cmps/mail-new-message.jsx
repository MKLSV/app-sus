

export function NewMail({onShow}) {

    function onSend(ev) {
        ev = window.event
        console.log(ev)
        console.log('send')
    }

    return <div className='new-message-container' hidden={!onShow}>
        <form className='new-message-form' onSubmit={onSend}>
            <div>

                <h3 className='new-message-header'>New Message</h3>

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
                    <input className='msg-input-form' type="email" id="mail" name="user_email" />
                </li>
                <li className='msg-form'>
                    <label className='msg-form-label' htmlFor="mail">Subject:</label>
                    <textarea className='text-input-form' id="msg" name="user_message"></textarea>
                </li>
            </div>
            <div className='new-message-btns'>
                <button onClick={() => onSend}>Send</button>
                <button>🧺</button>
            </div>
        </form>
    </div>
}