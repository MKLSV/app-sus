import { MailFilter } from "./mail-filter.jsx";



export function MailHeader({ onSetFilter }) {

    return <header className='mail-header'>
        <a className='mail-logo'><img src="./assets/img/mail-logo.png" alt="" srcset=""/></a>
        <MailFilter onSetFilter={onSetFilter} />
    </header>
}
