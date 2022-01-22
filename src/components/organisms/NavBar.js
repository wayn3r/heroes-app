import { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../../auth/auth.actions'
import { AuthContext } from '../../auth/AuthContext'

const NavBar = () => {
    const { user, dispatch } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logout())
        navigate('/login', { replace: true })
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-5">
            <Link className="navbar-brand" to="/">
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/marvel">
                        Marvel
                    </NavLink>

                    <NavLink className="nav-item nav-link" to="/dc">
                        DC
                    </NavLink>

                    <NavLink className="nav-item nav-link" to="/search">
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto">
                    <span className="nav-item nav-link text-info">{user.name}</span>
                    <button className="nav-item nav-link btn" onClick={handleLogout}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
