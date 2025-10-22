import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 1.5rem;
  margin-top: auto;

  p {
    font-size: calc(0.9rem + 0.1vw);
    margin: 0;
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>&copy; 2025 Ivan's Portfolio. All rights reserved.</p>
    </StyledFooter>
  );
};

export default Footer;
