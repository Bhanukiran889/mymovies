import {createContext, useContext, useState, useEffect} from 'react'
import Cookies from 'js-cookie'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAuthCheckComplete, setIsAuthCheckComplete] = useState(false)

  useEffect(() => {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
    setIsAuthCheckComplete(true) // mark auth check done
  }, [])

  const login = token => {
    Cookies.set('jwt_token', token, {expires: 30})
    setIsAuthenticated(true)
  }

  const logout = () => {
    Cookies.remove('jwt_token')
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{isAuthenticated, login, logout, isAuthCheckComplete}}
    >
      {children}
    </AuthContext.Provider>
  )
}
