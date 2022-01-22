import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { login } from '../../../auth/auth.actions'
import { AuthContext } from '../../../auth/AuthContext'
import LoginPage from '../../../components/pages/LoginPage'
const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

describe('Pruebas en el componente <Login />', () => {
    const dispatch = jest.fn()
    const wrapper = mount(
        <MemoryRouter>
            <AuthContext.Provider value={{ dispatch }}>
                <LoginPage />
            </AuthContext.Provider>
        </MemoryRouter>
    )
    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe llamar al dispatch, leer el localStorage y navegar al lastPath', () => {
        const click = wrapper.find('button').prop('onClick')
        const defaultRedirect = '/'
        const mockLocalStorage = {}
        Storage.prototype.getItem = jest.fn(value => mockLocalStorage[value])
        
        click()
        expect(dispatch).toHaveBeenCalledWith(login('Wayner'))
        expect(localStorage.getItem).toHaveBeenCalledWith('lastPath')
        expect(mockNavigate).toHaveBeenCalledWith(defaultRedirect, {
            replace: true,
        })
        mockLocalStorage.lastPath = '/marvel'
        click()
        expect(mockNavigate).toHaveBeenCalledWith(mockLocalStorage.lastPath, {
            replace: true,
        })
    })
})
