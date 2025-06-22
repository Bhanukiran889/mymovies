import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon, FaSun} from 'react-icons/fa'
import './index.css'
import {
  HeaderContainer,
  Logo,
  LogoutButton,
  ThemeButton,
  NavItems,
} from './styledComponents'

class Header extends Component {
  state = {
    isDarkTheme: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {isDarkTheme} = this.state

    return (
      <HeaderContainer dark={isDarkTheme}>
        <Link to="/">
          <Logo
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
            alt="website logo"
          />
        </Link>
        <NavItems>
          <li>
            <ThemeButton
              data-testid="theme"
              type="button"
              onClick={this.toggleTheme}
            >
              {isDarkTheme ? <FaSun size={20} /> : <FaMoon size={20} />}
            </ThemeButton>
          </li>
          <li>
            <img
              className="profile"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
          </li>
          <li>
            {' '}
            <LogoutButton type="button" onClick={this.onClickLogout}>
              Logout
            </LogoutButton>
          </li>
        </NavItems>
      </HeaderContainer>
    )
  }
}

export default withRouter(Header)
