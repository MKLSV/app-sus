import { MailFilter } from "./mail-filter.jsx";



export function MailHeader({ onSetFilter }) {

    return <header className='mail-header'>
        <a className='mail-logo'><img src="../../../assets/img/mail-logo.png"/></a>
        <MailFilter onSetFilter={onSetFilter} />
    </header>
}
