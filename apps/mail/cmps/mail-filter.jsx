const { useState, useEffect } = React

export function MailFilter() {

    // const [filterByToEdit, setfilterByToEdit] = useState('')

    // useEffect(() => {
    //     onSetFilter(filterByToEdit)
    // }, [filterByToEdit])

    function handleChange({ target }) {
        // setfilterByToEdit(target.value)
    }

    function onSubmitFilter(){
        // onSetFilter(filterByToEdit)
    }

    return <div className='mail-search'>
        <a onClick={onSubmitFilter}className='mail-search-btn'><i className="fa-solid fa-magnifying-glass fa-lg"></i></a>
        <input className='mail-search-input' type='text' name='mail-search' placeholder="Search Mail..." onChange={handleChange} />
    </div>
}