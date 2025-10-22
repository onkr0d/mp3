import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

const StyledMain = styled.main`
  background-color: #ecf0f1;
  padding: 2rem;

  overflow-y: auto;

  @media screen and (min-width: 1001px) {
    flex: 1;
    max-width: 70%;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <LayoutWrapper>
      <Header title={title} />
      <ContentWrapper>
        <Navigation />
        <StyledMain>
          {children}
        </StyledMain>
      </ContentWrapper>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
