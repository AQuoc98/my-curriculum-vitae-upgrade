import { useAuth } from 'context/auth-context'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()
  let location: any = useLocation()
  const auth = useAuth()
  let from = location.state?.from?.pathname || '/dashboard'

  const handleLogin = () => {
    auth.signin(() => {
      navigate(from, { replace: true })
    })
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
