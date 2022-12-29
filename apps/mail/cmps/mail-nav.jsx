const { NavLink, Link } = ReactRouterDOM
const { useState } = React


export function MailNav({ onNewMail, onSetFilter }) {

    function setFilter(type) {
        onSetFilter(type)
    }

    return <div className='mail-nav'>

        <section className='new-mail-btn' onClick={() => onNewMail()}><i className="fa-solid fa-pencil"></i><a>Compose</a></section>

        <ul className='mail-nav-list'>
            <li className='mail-nav-btns'><i className="fa-solid fa-envelope-open-text"></i><a onClick={() => { setFilter('inbox') }}>Inbox</a></li>
            <li className='mail-nav-btns'><i className="fa-regular fa-star"></i><a onClick={() => { setFilter('starred') }}>Starred</a></li>
            <li className='mail-nav-btns'><i className="fa-regular fa-paper-plane"></i><a onClick={() => { setFilter('sent') }}>Sent</a></li>
            <li className='mail-nav-btns'><i className="fa-regular fa-note-sticky"></i><a onClick={() => { setFilter('draft') }}>Drafts</a></li>
            <li className='mail-nav-btns'><i className="fa-regular fa-trash-can"></i><a onClick={() => { setFilter('trash') }}>Trash</a></li>
            {/* <NavLink to={'/inbox'}>Inbox</NavLink>
            <NavLink to={'/starred'}>Starred</NavLink>
            <NavLink to={'/sent-mail'}>Sent Mails</NavLink> */}
        </ul>
    </div >
}
