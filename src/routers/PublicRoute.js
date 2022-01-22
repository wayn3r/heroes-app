import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
/**
 *
 * @param {{
 *  element: JSX.Element,
 *  authenticated: Boolean,
 * }}
 * @returns
 */
const PublicRoute = ({ authenticated, element }) => {
    return !authenticated ? element : <Navigate to="/" replace />
}
PublicRoute.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    element: PropTypes.element.isRequired,
}
export default PublicRoute
