import { mount } from 'enzyme'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { act } from '@testing-library/react'
import HeroPage from '../../../components/pages/HeroPage'
const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

describe('Pruebas al componente <HeroPage />', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero/marvel-spider']}>
            <Routes>
                <Route path="/hero/:id" element={<HeroPage />} />
                <Route path="/" element={<></>} />
            </Routes>
        </MemoryRouter>
    )
    test('debe mostrar el heroe si hay un heroe en la url', () => {
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.html()).toBeTruthy()
    })

    test('debe volver atras al hacer click en RETURN', () => {
        act(() => {
            wrapper.find('button').prop('onClick')()
        })
        expect(mockNavigate).toHaveBeenCalledWith(-1)
    })

    test('no debe mostrar nada si no hay heroe en la url o no existe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/heroe-inexistente123']}>
                <Routes>
                    <Route path="/hero/:id" element={<HeroPage />} />
                    <Route path="/" element={<></>} />
                </Routes>
            </MemoryRouter>
        )
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.html()).toBeFalsy()
    })
})
