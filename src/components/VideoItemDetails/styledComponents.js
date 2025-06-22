import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const VideoContent = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
`

export const VideoPlayer = styled.video`
  width: 100%;
  max-width: 1000px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`

export const VideoTitle = styled.p`
  font-size: 24px;
  color: #1e293b;
  margin-bottom: 10px;
`

export const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  img {
    margin-right: 10px;
    border-radius: 50%;
  }

  p {
    font-size: 16px;
    color: #475569;
    margin: 0;
  }
`

export const Description = styled.p`
  font-size: 16px;
  color: #475569;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 16px 0;
`

export const ActionButton = styled.button`
  background: none;
  border: none;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  font-size: 16px;
  cursor: pointer;
`

export const SaveButton = styled(ActionButton)``
