import { createContext, useContext, useState } from 'react'

interface AuthContextType {
  user: any
  signin: (callback: VoidFunction) => void
  signout: (callback: VoidFunction) => void
}

let AuthContext = createContext<AuthContextType>(null!)

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = useState<any>(null)

  console.log(user, 'user')

  const signin = (callback: VoidFunction) => {
    setUser('abc')
    callback()
  }
  const signout = (callback: VoidFunction) => {
    setUser(null)
    callback()
  }

  let value = { user, signin, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}

export default AuthProvider
