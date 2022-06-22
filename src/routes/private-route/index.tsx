import useAuth from 'hooks/use-auth'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }: any) => {
  const auth = useAuth()
  return auth ? children : <Navigate to="/login" />
}
export default PrivateRoute
