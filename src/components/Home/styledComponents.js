import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`

export const HomeContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`

export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`

export const BannerText = styled.p`
  font-size: 16px;
  margin-left: 15px;
`

export const BannerCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`

export const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 8px;
`

export const SearchButton = styled.button`
  padding: 8px 12px;
  background-color: #0b69ff;
  color: #fff;
  border: none;
  cursor: pointer;
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`

export const NoVideosView = styled.div`
  text-align: center;
  padding: 20px;
`
