const { useState } = React

export function NewMail({ onShow }) {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('okaay')
    }

    function onRemove(){
        console.log('remove')
    }

    return <div className='new-message-container' hidden={!onShow}>
        <h3 className='new-message-header'>New Message</h3>

        <form className='new-message-form' onSubmit={handleSubmit}>
            <input
                className='msg-input-form'
                type="email"
                id="mail"
                name="user_name"
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
                id="msg"
                name="user_message"
                onChange={handleChange} />



            <div className='new-message-btns'>
                <button className='new-message-send' type="submit">Send</button>
                <a className='new-message-trash' onClick={onRemove}><i className="fa-regular fa-trash-can fa-xl"></i></a>
            </div>
        </form>
    </div>
    // return <div className='new-message-container' hidden={!onShow}>
    //     <h3 className='new-message-header'>New Message</h3>
    //     <form className='new-message-form' onSubmit={onSend}>

    //         <li className='msg-form'>
    //             <label className='msg-form-label' htmlFor="name">To:</label>
    //             <input className='msg-input-form' type="email" id="mail" name="user_name" />
    //         </li>

    //         <li className='msg-form'>
    //             <label className='msg-form-label' htmlFor="mail">Subject:</label>
    //             <input className='msg-input-form' type="text" id="name" name="user_email" />
    //         </li>
    //         <li className='msg-form'>
    //             <textarea className='text-input-form' id="msg" name="user_message"></textarea>
    //         </li>

    //         <div className='new-message-btns'>
    //             <button className='new-message-send' onClick={() => onSend}>Send</button>
    //             <a className='new-message-trash'><i className="fa-regular fa-trash-can fa-xl"></i></a>
    //         </div>
    //     </form>
    // </div>
}