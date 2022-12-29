import { MailFilter } from "./mail-filter.jsx";



export function MailHeader() {

    return <header className='mail-header'>
        <section className='mail-logo'>Mail App</section>
        <MailFilter/>
    </header>
}
