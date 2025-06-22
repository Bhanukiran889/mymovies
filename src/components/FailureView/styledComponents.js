import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  text-align: center;
`

export const FailureImage = styled.img`
  width: 300px;
  max-width: 100%;
  margin-bottom: 24px;
`

export const FailureHeading = styled.h1`
  font-size: 24px;
  color: #1e293b;
  margin-bottom: 12px;
`

export const FailureText = styled.p`
  font-size: 16px;
  color: #475569;
  margin-bottom: 20px;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4338ca;
  }
`
