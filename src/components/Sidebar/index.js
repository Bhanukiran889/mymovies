import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {FaHome, FaFire, FaGamepad, FaSave} from 'react-icons/fa'
import './Sidebar.css' // You can create this file if needed

class Sidebar extends Component {
  state = {
    activeTab: '',
  }

  componentDidMount() {
    const activeTab = this.getActiveTab()
    this.setState({activeTab})
  }

  getActiveTab = () => {
    const {location} = this.props
    const {pathname} = location

    if (pathname === '/') return 'HOME'
    if (pathname === '/trending') return 'TRENDING'
    if (pathname === '/gaming') return 'GAMING'
    if (pathname === '/saved-videos') return 'SAVED'
    return ''
  }

  render() {
    const {activeTab} = this.state

    return (
      <div className="sidebar-container">
        <nav className="nav-links">
          <Link
            to="/"
            className={`menu-item ${activeTab === 'HOME' ? 'active' : ''}`}
          >
            <FaHome className="icon" />
            <span>Home</span>
          </Link>

          <Link
            to="/trending"
            className={`menu-item ${activeTab === 'TRENDING' ? 'active' : ''}`}
          >
            <FaFire className="icon" />
            <span>Trending</span>
          </Link>

          <Link
            to="/gaming"
            className={`menu-item ${activeTab === 'GAMING' ? 'active' : ''}`}
          >
            <FaGamepad className="icon" />
            <span>Gaming</span>
          </Link>

          <Link
            to="/saved-videos"
            className={`menu-item ${activeTab === 'SAVED' ? 'active' : ''}`}
          >
            <FaSave className="icon" />
            <span>Saved videos</span>
          </Link>
        </nav>

        <div className="social-section">
          <p className="social-heading">CONTACT US</p>
          <div className="social-icons">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
              className="social-icon"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
              className="social-icon"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
              className="social-icon"
            />
          </div>
          <p className="contact-text">
            Enjoy! Now to see your channels and recommendations!
          </p>
        </div>
      </div>
    )
  }
}

export default withRouter(Sidebar)
