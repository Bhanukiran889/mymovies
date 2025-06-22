import styled from 'styled-components'

export const VideoCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin: 16px;
  width: 300px;
  list-style-type: none;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  border-radius: 8px;
`

export const VideoInfoContainer = styled.div`
  display: flex;
  margin-top: 12px;
`

export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`

export const VideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #1e293b;
  margin: 0;
`

export const ChannelName = styled.p`
  font-size: 14px;
  color: #475569;
  margin: 4px 0;
`

export const StatsRow = styled.div`
  display: flex;
  align-items: center;
  color: #64748b;
  font-size: 14px;
`

export const Dot = styled.span`
  margin: 0 6px;
`
