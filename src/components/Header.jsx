import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <NavLink to="/" className="navbar-brand">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to="/" className="nav-link">RECUERSOS</NavLink>
                            <NavLink to="/Uso-Api-Rick-and-Morty" className="nav-link active" aria-current="page">API Rick and Morty</NavLink>
                            <NavLink to="/dragon-ball-api" className="nav-link">DRAGON BALL API</NavLink>
                            <NavLink to="/pokemon" className="nav-link">API Pokemon</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header