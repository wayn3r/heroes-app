import { mount } from 'enzyme'
import { AuthContext } from '../../auth/AuthContext'
import AppRouter from '../../routers/AppRouter'
import { loggedUser, notLoggedUser } from '../fixins/AuthContextValue'

describe('Pruebas en <AppRouter />', () => {
    test('debe mostrar el login si no esta autenticado ', () => {
        const wrapper = mount(
            <AuthContext.Provider value={{ user: notLoggedUser }}>
                <AppRouter />
            </AuthContext.Provider>,
        )
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('button').text().toLocaleLowerCase()).toBe('login')
    })
    test('debe mostrar la pagina si esta autenticado ', () => {
        const wrapper = mount(
            <AuthContext.Provider value={{ user: loggedUser }}>
                <AppRouter />
            </AuthContext.Provider>,
        )
        expect(wrapper.find('.navbar').exists()).toBe(true)
        expect(wrapper.find('button').text().toLocaleLowerCase()).not.toBe('login')
    })
})
