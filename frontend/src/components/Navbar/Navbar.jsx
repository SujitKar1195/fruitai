import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.navBackground};
  padding: 10px 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.navText};
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.navText};
  font-size: 16px;
  cursor: pointer;
`;

const Navbar = ({toggleTheme}) => {
  return (
    <NavbarContainer>
      <Logo>Fruit.ai</Logo>
      <NavLinks>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/chatbot'>Chatbot</NavLink>
        <NavLink to='/translator'>Translator</NavLink>
        <NavLink to='/faq'>FAQ</NavLink>
        <NavLink to='/about'>About</NavLink>
      </NavLinks>
      <ThemeToggleButton onClick={toggleTheme}>Toggle Theme</ThemeToggleButton>
    </NavbarContainer>
  );
};

export default Navbar;
