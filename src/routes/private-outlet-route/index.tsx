import useAuth from 'hooks/use-auth'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateOutlet = () => {
  const auth = useAuth()
  return auth ? <Outlet /> : <Navigate to="login" />
}

export default PrivateOutlet
