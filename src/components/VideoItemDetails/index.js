import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'

import Header from '../Header'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'

import {
  VideoDetailsContainer,
  VideoContent,
  VideoPlayer,
  VideoTitle,
  ChannelDetails,
  Description,
  LoaderContainer,
  ActionButtonsContainer,
  ActionButton,
  SaveButton,
} from './styledComponents'

class VideoDetails extends Component {
  state = {
    videoData: null,
    apiStatus: 'INITIAL',
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: 'IN_PROGRESS'})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const videoDetails = data.video_details
      const formattedData = {
        id: videoDetails.id,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        description: videoDetails.description,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
      }
      this.setState({videoData: formattedData, apiStatus: 'SUCCESS'})
    } else {
      this.setState({apiStatus: 'FAILURE'})
    }
  }

  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  onClickSave = () => {
    this.setState(prevState => {
      const {videoData, isSaved} = prevState
      const savedVideos = JSON.parse(localStorage.getItem('savedVideos')) || []

      if (isSaved) {
        // Remove video from localStorage
        const updatedList = savedVideos.filter(
          video => video.id !== videoData.id,
        )
        localStorage.setItem('savedVideos', JSON.stringify(updatedList))
      } else {
        // Add video to localStorage
        const alreadyExists = savedVideos.find(
          video => video.id === videoData.id,
        )
        if (!alreadyExists) {
          savedVideos.push(videoData)
          localStorage.setItem('savedVideos', JSON.stringify(savedVideos))
        }
      }

      return {isSaved: !isSaved}
    })
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.getVideoDetails} />

  renderVideoDetails = () => {
    const {videoData, isLiked, isDisliked, isSaved} = this.state
    const {
      title,
      videoUrl,
      viewCount,
      publishedAt,
      description,
      channel,
    } = videoData

    return (
      <div>
        <VideoPlayer controls>
          <source src={videoUrl} type="video/mp4" />
        </VideoPlayer>
        <VideoTitle>{title}</VideoTitle>

        <p>{viewCount} views</p>
        <p>{formatDistanceToNow(new Date(publishedAt))} ago</p>

        <ActionButtonsContainer>
          <ActionButton
            type="button"
            active={isLiked}
            onClick={this.onClickLike}
          >
            Like
          </ActionButton>
          <ActionButton
            type="button"
            active={isDisliked}
            onClick={this.onClickDislike}
          >
            Dislike
          </ActionButton>
          <SaveButton type="button" onClick={this.onClickSave}>
            {isSaved ? 'Saved' : 'Save'}
          </SaveButton>
        </ActionButtonsContainer>

        <ChannelDetails>
          <img
            src={channel.profileImageUrl}
            alt="channel logo"
            width="40"
            height="40"
          />
          <div>
            <p>{channel.name}</p>
            <p>{channel.subscriberCount} subscribers</p>
          </div>
        </ChannelDetails>

        <Description>{description}</Description>
      </div>
    )
  }

  renderContent = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'IN_PROGRESS':
        return this.renderLoader()
      case 'SUCCESS':
        return this.renderVideoDetails()
      case 'FAILURE':
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <VideoDetailsContainer>
        <Header />
        <VideoContent>
          <Sidebar />
          {this.renderContent()}
        </VideoContent>
      </VideoDetailsContainer>
    )
  }
}

export default withRouter(VideoDetails)
