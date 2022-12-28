const { NavLink } = ReactRouterDOM


export function MailNav() {

    return <div className='mail-nav'>
        <button className='new-mail-btn'>➕Compose</button>

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
