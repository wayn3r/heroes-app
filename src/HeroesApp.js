import { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer, initialState } from './auth/authReducer'
import AppRouter from './routers/AppRouter'
import './css/styles.css'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || initialState
}

const HeroesApp = () => {
    const [user, dispatch] = useReducer(authReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])
    
    return (
        <AuthContext.Provider
            value={{
                user,
                dispatch,
            }}
        >
            <AppRouter />
        </AuthContext.Provider>
    )
}

export default HeroesApp
