import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {
  GamingContainer,
  GamingContent,
  GamingVideoList,
  VideoItem,
  Thumbnail,
  Title,
  Views,
  LoaderContainer,
  BannerContainer,
  BannerHeading,
  BannerLogo,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'

class Gaming extends Component {
  state = {
    videos: [],
    apiStatus: 'INITIAL',
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: 'IN_PROGRESS'})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    try {
      const response = await fetch(apiUrl, options)
      if (response.ok) {
        const data = await response.json()
        const formattedData = data.videos.map(video => ({
          id: video.id,
          title: video.title,
          thumbnailUrl: video.thumbnail_url,
          viewCount: video.view_count,
        }))
        this.setState({videos: formattedData, apiStatus: 'SUCCESS'})
      } else {
        this.setState({apiStatus: 'FAILURE'})
      }
    } catch (error) {
      this.setState({apiStatus: 'FAILURE'})
      console.error('Error fetching gaming videos:', error)
    }
  }

  renderGamingVideos = () => {
    const {videos} = this.state
    return (
      <GamingVideoList>
        {videos.map(video => (
          <VideoItem key={video.id}>
            <Thumbnail src={video.thumbnailUrl} alt="video thumbnail" />
            <Title>{video.title}</Title>
            <Views>{video.viewCount} Watching Worldwide</Views>
          </VideoItem>
        ))}
      </GamingVideoList>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.getGamingVideos} />

  renderGamingContent = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'IN_PROGRESS':
        return this.renderLoader()
      case 'SUCCESS':
        return this.renderGamingVideos()
      case 'FAILURE':
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({isDarkTheme}) => {
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          return (
            <>
              <Header />
              <GamingContainer>
                <Sidebar />
                <GamingContent
                  data-testid="gaming"
                  style={{backgroundColor: bgColor}}
                >
                  <BannerContainer>
                    <BannerLogo>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch/gaming-logo-img.png"
                        alt="gaming"
                      />
                    </BannerLogo>
                    <BannerHeading>Gaming</BannerHeading>
                  </BannerContainer>
                  {this.renderGamingContent()}
                </GamingContent>
              </GamingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
