import { MailFilter } from "./mail-filter.jsx";



export function MailHeader({ onSetFilter }) {

    return <header className='mail-header'>
        <section className='mail-logo'>Mail App</section>
        <MailFilter onSetFilter={onSetFilter} />
    </header>
}
