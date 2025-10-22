import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: calc(1.8rem + 1vw);
    margin-bottom: 1rem;
    color: #2c3e50;
  }

  p {
    font-size: calc(1.1rem + 0.3vw);
    max-width: 600px;
    margin: 0 auto;
  }

  @media screen and (max-width: 480px) {
    h2 {
      font-size: calc(1.5rem + 1vw);
    }
  }
`;

const Home: React.FC = () => {
  return (
    <Layout title="Welcome to Ivan's Portfolio">
      <HeroSection>
        <h2>Welcome to My Portfolio</h2>
        <p>Hi! I'm Ivan, a passionate full-stack developer. Explore my journey through the navigation above.</p>
      </HeroSection>
    </Layout>
  );
};

export default Home;
