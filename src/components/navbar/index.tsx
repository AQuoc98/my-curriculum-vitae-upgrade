import { useAuth } from 'context/auth-context'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  let navigate = useNavigate()
  const auth = useAuth()

  const handleLogout = () => {
    auth.signout(() => {
      navigate('/login')
    })
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      {auth.user && <button onClick={handleLogout}>Logout</button>}
    </nav>
  )
}

export default Navbar
