const { NavLink, Link } = ReactRouterDOM


export function MailNav({ onNewMail }) {

    return <div className='mail-nav'>

        <Link to="/mail/new-mail" className='new-mail-btn' >➕Compose</Link>
        {/* <button className='new-mail-btn' onClick={() => onNewMail()}>➕Compose</button> */}

        <ul className='mail-nav-list'>
            <li><a href='#'>Inbox</a></li>
            <li><a href='#'>Starred</a></li>
            <li><a href='#'>Sent Mail</a></li>
            {/* <NavLink to={'/inbox'}>Inbox</NavLink>
            <NavLink to={'/starred'}>Starred</NavLink>
            <NavLink to={'/sent-mail'}>Sent Mails</NavLink> */}
        </ul>
    </div>
}
