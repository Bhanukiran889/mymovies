import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9;
`

export const Form = styled.form`
  background-color: white;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 0 10px #ccc;
  width: 300px;
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  margin-top: 16px;
  font-size: 14px;
  font-weight: bold;
  color: #475569;
`

export const Input = styled.input`
  margin-top: 8px;
  padding: 8px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
`

export const Button = styled.button`
  margin-top: 24px;
  padding: 10px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 12px;
  font-size: 14px;
`
