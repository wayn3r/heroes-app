import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { queryParams } from '../helpers/get-query-params'

export const useQueryParams = () => {
    const { search } = useLocation()
    return useMemo(() => queryParams(search), [search])
}
