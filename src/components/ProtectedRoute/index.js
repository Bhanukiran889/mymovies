import {Route, Redirect} from 'react-router-dom'
import {useAuth} from '../../context/AuthContext'

const ProtectedRoute = ({children, ...rest}) => {
  const {isAuthenticated, isAuthCheckComplete} = useAuth()

  const renderComponent = ({location}) => {
    if (!isAuthCheckComplete) {
      return <div>Loading...</div>
    }

    if (isAuthenticated) {
      return children
    }

    return (
      <Redirect
        to={{
          pathname: '/login',
          state: {from: location},
        }}
      />
    )
  }

  return <Route {...rest} render={renderComponent} />
}

export default ProtectedRoute
