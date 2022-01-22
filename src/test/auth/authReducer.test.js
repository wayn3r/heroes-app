import { login, logout } from '../../auth/auth.actions'
import { authReducer, initialState } from '../../auth/authReducer'

describe('Pruebas en authReducer', () => {
    let state = authReducer()

    test('debe de retornar el estado por defecto', () => {
        expect(state).toEqual(initialState)
    })

    test('debe de autenticar y colocar el name del usuario', () => {
        state = authReducer(state, login('Wayner'))

        expect(state).toEqual({
            name: 'Wayner',
            logged: true,
        })
    })
    test('debe de borrar el name del usuario y logged en false', () => {
        state = authReducer(state, logout())
        expect(state).toEqual(initialState)
    })
})
