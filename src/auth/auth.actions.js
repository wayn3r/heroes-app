import { types } from '../types/types'

/**
 *
 * @param {String} name
 */
export const login = name => ({
    type: types.login,
    payload: { name },
})
export const logout = () => ({
    type: types.logout,
})
