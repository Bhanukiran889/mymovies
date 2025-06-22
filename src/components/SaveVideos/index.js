import {Component} from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoCard from '../VideoCard'
import './SavedVideos.css'

class SavedVideos extends Component {
  state = {
    savedVideos: [],
  }

  componentDidMount() {
    const saved = JSON.parse(localStorage.getItem('savedVideos')) || []
    this.setState({savedVideos: saved})
  }

  renderNoSavedVideos = () => (
    <div className="no-videos-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
        className="no-videos-image"
      />
      <h2 className="no-videos-heading">No saved videos found</h2>
      <p className="no-videos-note">
        You can save your videos while watching them
      </p>
    </div>
  )

  renderSavedVideos = () => {
    const {savedVideos} = this.state
    return (
      <ul className="videos-list">
        {savedVideos.map(video => (
          <VideoCard key={video.id} videoDetails={video} />
        ))}
      </ul>
    )
  }

  render() {
    const {savedVideos} = this.state

    return (
      <div className="saved-videos-container">
        <Header />
        <div className="saved-videos-content">
          <Sidebar />
          <div>
            <h1 className="saved-heading">Saved Videos</h1>
            {savedVideos.length === 0
              ? this.renderNoSavedVideos()
              : this.renderSavedVideos()}
          </div>
        </div>
      </div>
    )
  }
}

export default SavedVideos
