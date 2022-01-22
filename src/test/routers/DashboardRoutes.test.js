import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import DashboardRoutes from '../../routers/DashboardRoutes'
import { loggedUser } from '../fixins/AuthContextValue'

describe('Pruebas en <DashboardRoutes />', () => {
    test('debe mostrarse correctamente', () => {
        const wrapper = mount(
            <AuthContext.Provider value={{ user: loggedUser }}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>,
        )
        expect(wrapper).toMatchSnapshot()
    })
})
