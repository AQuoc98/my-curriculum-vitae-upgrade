import { useAuth } from 'context/auth-context'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  let auth = useAuth()
  let location = useLocation()
  console.log(location, 'location')
  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
export default PrivateRoute
