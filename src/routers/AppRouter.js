import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import DashboardRoutes from './DashboardRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import LoginPage from '../components/pages/LoginPage'

const AppRouter = () => {
    const { user } = useContext(AuthContext)
    return (
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={
                        <PublicRoute
                            element={<LoginPage />}
                            authenticated={user.logged}
                        />
                    }
                />

                <Route
                    path="/*"
                    element={
                        <PrivateRoute
                            element={<DashboardRoutes />}
                            authenticated={user.logged}
                        />
                    }
                />
            </Routes>
        </Router>
    )
}

export default AppRouter
