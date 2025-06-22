import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoCard from '../VideoCard'
import FailureView from '../FailureView'
import {
  HomeContainer,
  HomeContent,
  Banner,
  BannerText,
  BannerCloseButton,
  VideosContainer,
  SearchInput,
  SearchContainer,
  SearchButton,
  LoaderContainer,
  NoVideosView,
} from './styledComponents'

class Home extends Component {
  state = {
    videosList: [],
    isLoading: true,
    isBannerVisible: true,
    searchInput: '',
    hasError: false,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({isLoading: true, hasError: false})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const encodedSearchInput = encodeURIComponent(searchInput)
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${encodedSearchInput}`

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
        const updatedData = data.videos.map(video => ({
          id: video.id,
          title: video.title,
          thumbnailUrl: video.thumbnail_url,
          viewCount: video.view_count,
          publishedAt: video.published_at,
          channel: {
            name: video.channel.name,
            profileImageUrl: video.channel.profile_image_url,
          },
        }))
        this.setState({
          videosList: updatedData,
          isLoading: false,
        })
      } else {
        this.setState({isLoading: false, hasError: true})
      }
    } catch (error) {
      this.setState({isLoading: false, hasError: true})
    }
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.getVideos()
  }

  renderBanner = () => {
    const {isBannerVisible} = this.state
    if (!isBannerVisible) return null

    return (
      <Banner data-testid="banner">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerText>Buy Nxt Watch Premium</BannerText>
        <button type="button">GET IT NOW</button>
        <BannerCloseButton
          data-testid="close"
          onClick={() => this.setState({isBannerVisible: false})}
        >
          X
        </BannerCloseButton>
      </Banner>
    )
  }

  renderVideos = () => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return (
        <NoVideosView>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <p>No videos found</p>
        </NoVideosView>
      )
    }

    return (
      <VideosContainer>
        {videosList.map(video => (
          <VideoCard key={video.id} videoDetails={video} />
        ))}
      </VideosContainer>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderContent = () => {
    const {isLoading, hasError} = this.state

    if (isLoading) {
      return this.renderLoader()
    }

    if (hasError) {
      return <FailureView />
    }

    return this.renderVideos()
  }

  render() {
    const {searchInput} = this.state
    return (
      <>
        <Header />
        <HomeContainer data-testid="home">
          <Sidebar />
          <HomeContent>
            {this.renderBanner()}
            <SearchContainer>
              <SearchInput
                type="search"
                value={searchInput}
                onChange={this.onChangeSearch}
                placeholder="Search"
              />
              <SearchButton
                type="button"
                data-testid="searchButton"
                onClick={this.onClickSearch}
              >
                🔍
              </SearchButton>
            </SearchContainer>
            {this.renderContent()}
          </HomeContent>
        </HomeContainer>
      </>
    )
  }
}

export default Home
