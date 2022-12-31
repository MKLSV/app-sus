const { useState } = React

export function MailFilter({ onSetFilter}) {

    const[filterByToEdit, setfilterByToEdit] = useState('')

    function handleChange({target}) {
        
    }

    return <div className='mail-search'>
        <a  className='mail-search-btn'><i className="fa-solid fa-magnifying-glass fa-lg"></i></a>
        <input className='mail-search-input' type='text' name='mail-search' placeholder="Search Mail..." />
    </div>
}