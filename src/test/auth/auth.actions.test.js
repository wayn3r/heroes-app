import { login, logout } from '../../auth/auth.actions'
import { types } from '../../types/types'

describe('Test para el archivo auth.actions', () => {
    test('debe de devolver un objeto con el tipo login y el payload correcto', () => {
        const name = 'Wayner'
        const action = login(name)

        expect(action).toEqual({
            type: types.login,
            payload: { name },
        })
    })

    test('debe de devolver un objeto con el tipo logout', () => {
        const action = logout()

        expect(action).toEqual({ type: types.logout })
    })
})
