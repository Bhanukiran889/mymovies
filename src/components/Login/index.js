import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginContainer,
  Form,
  Input,
  Label,
  Button,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showError: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    console.log('Received JWT Token:', jwtToken) // Log the token for debugging
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    console.log('Redirecting to Home...')
    history.push('/') // Should navigate to home
  }

  onSubmitFailure = error => {
    this.setState({errorMsg: error, showError: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, errorMsg, showError} = this.state

    return (
      <LoginContainer>
        <Form onSubmit={this.submitForm}>
          <Label htmlFor="username">USERNAME</Label>
          <Input
            id="username"
            value={username}
            onChange={this.onChangeUsername}
            type="text"
            placeholder="Username"
          />

          <Label htmlFor="password">PASSWORD</Label>
          <Input
            id="password"
            value={password}
            onChange={this.onChangePassword}
            type="password"
            placeholder="Password"
          />

          <Button type="submit" data-testid="loginButton">
            Login
          </Button>

          {showError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
        </Form>
      </LoginContainer>
    )
  }
}

export default withRouter(Login) // Wrapping the class component with withRouter to access history
