import { mount } from 'enzyme'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from '../../routers/PrivateRoute'

describe('Pruebas en <PrivateRoute />', () => {
    const mockRouter = authenticated => (
        <MemoryRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute
                            authenticated={authenticated}
                            element={<h1>Logged in</h1>}
                        />
                    }
                />
                <Route path="/login" element={<h2>Logged out</h2>} />
            </Routes>
        </MemoryRouter>
    )
    test('debe de mostrar el componente si esta autenticado y guardar local storage', () => {
        Storage.prototype.setItem = jest.fn()
        const wrapper = mount(mockRouter(true))

        expect(wrapper.find('h1').exists()).toBe(true)
        expect(wrapper.find('h2').exists()).toBe(false)
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/')
    })

    test('debe de bloquear el componente si no esta autenticado', () => {
        const wrapper = mount(mockRouter(false))
        expect(wrapper.find('h2').exists()).toBe(true)
        expect(wrapper.find('h1').exists()).toBe(false)
    })
})
