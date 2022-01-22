import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../auth/auth.actions'
import { AuthContext } from '../../auth/AuthContext'

const LoginPage = () => {
    const navigate = useNavigate()
    const { dispatch } = useContext(AuthContext)
    const handleClick = () => {
        const username = 'Wayner'
        dispatch(login(username))

        const lastPath = localStorage.getItem('lastPath')
        navigate(lastPath || '/', { replace: true })
    }
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button className="btn btn-primary" onClick={handleClick}>
                Login
            </button>
        </div>
    )
}

export default LoginPage
