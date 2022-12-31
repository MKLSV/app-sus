const { useState } = React

export function MailFilter({ onSetFilter}) {

    const[filterByToEdit, setfilterByToEdit] = useState('')

    function handleChange({target}) {
        
    }

    return <div className='mail-search'>
        <a><i className="fa-solid fa-magnifying-glass"></i></a>
        <input type='text' name='mail-search' />
        <select name="mail-search-option" id="mail-search-option">
            <option value="all">All</option>
            <option value="starred">Starred</option>
            <option value="drafts">Drafts</option>
        </select>
    </div>
}