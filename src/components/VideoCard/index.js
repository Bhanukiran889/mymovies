import {Component} from 'react'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {
  VideoCardContainer,
  Thumbnail,
  VideoInfoContainer,
  ChannelLogo,
  VideoTextContainer,
  Title,
  ChannelName,
  StatsRow,
  Dot,
} from './styledComponents'

class VideoCard extends Component {
  render() {
    const {videoDetails} = this.props
    const {
      id,
      title,
      thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
    } = videoDetails

    const timeAgo = formatDistanceToNow(new Date(publishedAt))

    return (
      <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
        <VideoCardContainer>
          <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
          <VideoInfoContainer>
            <ChannelLogo src={channel.profile_image_url} alt="channel logo" />
            <VideoTextContainer>
              <Title>{title}</Title>
              <ChannelName>{channel.name}</ChannelName>
              <StatsRow>
                <span>{viewCount} views</span>
                <Dot>•</Dot>
                <span>{timeAgo} ago</span>
              </StatsRow>
            </VideoTextContainer>
          </VideoInfoContainer>
        </VideoCardContainer>
      </Link>
    )
  }
}

export default VideoCard
