import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.dark ? '#181818' : '#ffffff')};
  padding: 10px 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`

export const Logo = styled.img`
  height: 30px;
`

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  font-size: 18px;
  cursor: pointer;
`

export const LogoutButton = styled.button`
  padding: 6px 12px;
  background-color: transparent;
  border: 1px solid ${props => (props.dark ? '#ffffff' : '#000000')};
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  cursor: pointer;
  border-radius: 4px;
  font-weight: 500;
`
