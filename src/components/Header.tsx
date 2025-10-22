import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  title: string;
}

const StyledHeader = styled.header`
  background-color: #2c3e50;
  color: white;
  padding: 2rem;
  text-align: center;

  @media screen and (min-width: 751px) {
    text-align: left;
  }

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }

  h1 {
    font-size: calc(2rem + 1vw);
    font-weight: 600;
    margin: 0;
  }
`;

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <StyledHeader>
      <h1>{title}</h1>
    </StyledHeader>
  );
};

export default Header;
