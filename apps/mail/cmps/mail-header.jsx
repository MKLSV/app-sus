


export function MailHeader() {

    return <header className='mail-header'>
        <section className='mail-logo'>Mail App</section>
        <div className='mail-search'>
            <button>🔍</button>
            <input type='text' name='mail-search' />
            <select name="mail-search-option" id="mail-search-option">
                <option value="all">All</option>
                <option value="starred">Starred</option>
                <option value="drafts">Drafts</option>
            </select>
        </div>
    </header>
}
