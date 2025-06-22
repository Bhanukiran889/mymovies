import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoCard from '../VideoCard'
import FailureView from '../FailureView'
import {
  TrendingContainer,
  TrendingContent,
  TrendingHeading,
  VideosList,
  LoaderContainer,
} from './styledComponents'

class Trending extends Component {
  state = {
    trendingVideos: [],
    isLoading: true,
    isError: false,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({isLoading: true, isError: false})
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }))
      this.setState({trendingVideos: updatedData, isLoading: false})
    } else {
      this.setState({isError: true, isLoading: false})
    }
  }

  renderTrendingVideos = () => {
    const {trendingVideos} = this.state
    return (
      <VideosList>
        {trendingVideos.map(video => (
          <VideoCard key={video.id} videoDetails={video} />
        ))}
      </VideosList>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  render() {
    const {isLoading, isError} = this.state

    let content
    if (isLoading) {
      content = this.renderLoader()
    } else if (isError) {
      content = <FailureView onRetry={this.getTrendingVideos} />
    } else {
      content = this.renderTrendingVideos()
    }

    return (
      <TrendingContainer data-testid="trending">
        <Header />
        <TrendingContent>
          <Sidebar />
          <div>
            <TrendingHeading>Trending</TrendingHeading>
            {content}
          </div>
        </TrendingContent>
      </TrendingContainer>
    )
  }
}

export default Trending
