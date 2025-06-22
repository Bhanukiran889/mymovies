import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {AuthProvider} from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import SaveVideos from './components/SaveVideos'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />

          <ProtectedRoute path="/" exact>
            <Home />
          </ProtectedRoute>
          <ProtectedRoute path="/trending">
            <Trending />
          </ProtectedRoute>
          <ProtectedRoute path="/gaming">
            <Gaming />
          </ProtectedRoute>
          <ProtectedRoute path="/saved-videos">
            <SaveVideos />
          </ProtectedRoute>
          <ProtectedRoute path="/videos/:id">
            <VideoItemDetails />
          </ProtectedRoute>

          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App
