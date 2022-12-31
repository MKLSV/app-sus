const { Link, NavLink } = ReactRouterDOM
const { useState } = React

export function AppHeader() {

    const [isExpanted, setIsExpanted] = useState(false)

    return <header className="app-header">
        <Link to="/">
            <h3 className="app-header-logo">Appsus</h3>
        </Link>
        <nav className={isExpanted ? 'nav-bar on-menu' : 'nav-bar'}>
            <NavLink className="nav-btn"to="/">Home<i className="fa-solid fa-house"></i></NavLink>
            <NavLink className="nav-btn"to="/about">About <i className="fa-solid fa-question"></i></NavLink>
            <NavLink className="nav-btn"to="/mail">Mail <i className="fa-solid fa-envelope"></i></NavLink>
            <NavLink className="nav-btn"to="/note">Note <i className="fa-solid fa-note-sticky"></i></NavLink>
        </nav>
        <a className="menu-toggle" onClick={() => setIsExpanted(!isExpanted)}><i className="fa-solid fa-bars fa-2xl"></i></a>

    </header>
}
