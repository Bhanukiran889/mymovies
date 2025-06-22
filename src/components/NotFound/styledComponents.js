import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`

export const NotFoundImage = styled.img`
  width: 50%;
  max-width: 400px;
`

export const NotFoundMessage = styled.div`
  text-align: center;
  margin-top: 20px;

  h1 {
    font-size: 24px;
    color: #1e293b;
  }

  p {
    font-size: 16px;
    color: #475569;
    margin: 10px 0;
  }

  a {
    text-decoration: none;
    font-size: 16px;
    color: #0b69ff;
  }
`
