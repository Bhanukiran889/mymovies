import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
  min-height: 100vh;
`

export const GamingContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`

export const GamingVideoList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const VideoItem = styled.li`
  width: 220px;
`

export const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`

export const Title = styled.p`
  font-size: 16px;
  margin: 10px 0 4px;
  color: #0f0f0f;
`

export const Views = styled.p`
  font-size: 14px;
  color: #64748b;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #d7dfe9;
  padding: 15px;
  margin-bottom: 20px;
`

export const BannerLogo = styled.div`
  background-color: #cbd5e1;
  border-radius: 50%;
  padding: 15px;
  margin-right: 15px;
`

export const BannerHeading = styled.h1`
  font-size: 24px;
  color: #1e293b;
`
