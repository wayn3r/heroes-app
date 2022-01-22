import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { logout } from '../../../auth/auth.actions'
import { AuthContext } from '../../../auth/AuthContext'
import NavBar from '../../../components/organisms/NavBar'
import { loggedUser } from '../../fixins/AuthContextValue'
import { act } from '@testing-library/react'
const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useNavigate: () => mockNavigate,
}))
describe('Pruebas en el <NavBar />', () => {
    const dispatch = jest.fn()

    const wrapper = mount(
        <AuthContext.Provider value={{ user: loggedUser, dispatch }}>
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        </AuthContext.Provider>,
    )
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.text-info').text().trim()).toBe(loggedUser.name)
    })

    test('debe llamar el dispatch con logout() y redireccionar al login ', () => {
        act(() => {
            wrapper.find('button').prop('onClick')()
        })

        expect(dispatch).toHaveBeenCalledWith(logout())
        expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true })
    })
})
