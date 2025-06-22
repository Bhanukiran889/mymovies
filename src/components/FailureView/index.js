import {Component} from 'react'
import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  RetryButton,
} from './styledComponents'

class FailureView extends Component {
  render() {
    const {onRetry} = this.props

    return (
      <FailureContainer>
        <FailureImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="failure view"
        />
        <FailureHeading>Oops! Something Went Wrong</FailureHeading>
        <FailureText>
          We are having some trouble to complete your request. Please try again.
        </FailureText>
        <RetryButton type="button" onClick={onRetry}>
          Retry
        </RetryButton>
      </FailureContainer>
    )
  }
}

export default FailureView
