import {Link} from 'react-router-dom'
import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundMessage,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
      alt="not found"
    />
    <NotFoundMessage>
      <h1>Page Not Found</h1>
      <p>We’re sorry, the page you requested could not be found.</p>
      <Link to="/">Go to Home</Link>
    </NotFoundMessage>
  </NotFoundContainer>
)

export default NotFound
