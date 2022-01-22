import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
/**
 *
 * @param {{
 *  element: JSX.Element,
 *  authenticated: Boolean,
 * }}
 */
const PrivateRoute = ({ authenticated, element }) => {
    const location = useLocation()
    localStorage.setItem('lastPath', location.pathname + location.search)
    return authenticated ? element : <Navigate to="/login" replace />
}
PrivateRoute.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    element: PropTypes.element.isRequired,
}
export default PrivateRoute
