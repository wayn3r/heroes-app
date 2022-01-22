import { useState } from 'react'
/**
 *
 * @param {object} initialState
 * @returns {[object, Function, Function]} state, setState, resetState
 */
export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState)
    const reset = () => setValues(initialState)
    const handleInputChange = ({ target }) => {
        const { name, value } = target
        setValues(state => ({ ...state, [name]: value }))
    }

    return [values, handleInputChange, reset]
}
