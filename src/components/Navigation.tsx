import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background-color: #34495e;
  padding: 1rem 0;

  @media screen and (min-width: 751px) {
    flex: 0 0 30%;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 30%;
  }

  @media screen and (max-width: 750px) {
    width: 100%;
    padding: 1rem 0;
  }
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 751px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 750px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
`;

const NavItem = styled.li`
  @media screen and (min-width: 751px) {
    margin-bottom: 1rem;
    width: 100%;
  }

  @media screen and (max-width: 750px) {
    margin: 0 1rem;

    @media screen and (max-width: 768px) {
      margin: 0 0.5rem;
    }
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: calc(1rem + 0.2vw);
  font-weight: 500;
  padding: 0.5rem 1rem;
  display: block;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media screen and (min-width: 751px) {
    width: 100%;
    padding: 0.75rem 1rem;
  }

  @media screen and (max-width: 750px) {
    padding: 0.5rem 1rem;
  }
`;

const Navigation: React.FC = () => {
  return (
    <StyledNav>
      <NavList>
        <NavItem><StyledLink to="/">Home</StyledLink></NavItem>
        <NavItem><StyledLink to="/about">About</StyledLink></NavItem>
        <NavItem><StyledLink to="/skills">Skills</StyledLink></NavItem>
        <NavItem><StyledLink to="/experience">Experience</StyledLink></NavItem>
        <NavItem><StyledLink to="/education">Education</StyledLink></NavItem>
        <NavItem><StyledLink to="/projects">Projects</StyledLink></NavItem>
      </NavList>
    </StyledNav>
  );
};

export default Navigation;
