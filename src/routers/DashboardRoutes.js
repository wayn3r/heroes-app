import { Navigate, Route, Routes } from 'react-router-dom'
import HeroPage from '../components/pages/HeroPage'
import NavBar from '../components/organisms/NavBar'
import DCPage from '../components/pages/DCPage'
import MarvelPage from '../components/pages/MarvelPage'
import SearchPage from '../components/pages/SearchPage'

const DashboardRoutes = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-3">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DCPage />} />
                    <Route path="hero/:id" element={<HeroPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="/" element={<Navigate to="marvel" />} />
                </Routes>
            </div>
        </>
    )
}

export default DashboardRoutes
