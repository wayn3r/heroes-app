import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import SearchPage from '../../../components/pages/SearchPage'
const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

describe('Pruebas en <SearchPage />', () => {
    const wrapper = mount(
        <MemoryRouter>
            <SearchPage />
        </MemoryRouter>
    )
    test('debe de mostrarse correctamente sin query params', () => {
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.alert-info').text()).toBe('No results...')
    })

    test('debe de mostrar resultados y el input con el valor del queryString', () => {
        const hero = 'superman'
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=' + hero]}>
                <SearchPage />
            </MemoryRouter>
        )

        expect(wrapper.find('input').prop('value')).toBe(hero)
        expect(wrapper.find('.alert-info').exists()).toBe(false)
        expect(wrapper.find('HeroCard').exists()).toBe(true)
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar el mensaje de No results... si no encuentra el heroe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=no-real-hero']}>
                <SearchPage />
            </MemoryRouter>
        )
        expect(wrapper.find('.alert-info').text()).toBe('No results...')
        expect(wrapper.find('HeroCard').exists()).toBe(false)
    })

    test('debe de redireccionar al heroe seleccionado ', () => {
        const hero = 'batman'
        const preventDefault = jest.fn()
        wrapper
            .find('input')
            .simulate('change', { target: { name: 'search', value: hero } })
        wrapper.find('form').simulate('submit', { preventDefault })
        expect(preventDefault).toHaveBeenCalled()
        expect(mockNavigate).toHaveBeenCalledWith(`?q=${hero}`)
    })
})
