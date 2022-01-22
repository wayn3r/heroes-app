import { types } from '../types/types'

export const initialState = {
    name: '',
    logged: false,
}

export const authReducer = (state = initialState, action = {}) => {
    const { type, payload } = action
    switch (type) {
        case types.login:
            const { name } = payload
            return { name, logged: true }
        case types.logout:
            return { ...initialState }
        default:
            return state
    }
}
