import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const ContentSection = styled.section`
  background-color: white;
  padding: 2rem;
  margin: 1rem 0;

  h3 {
    font-size: calc(1.4rem + 0.4vw);
    margin-bottom: 1rem;
    color: #2c3e50;
  }

  p {
    font-size: calc(1rem + 0.2vw);
    line-height: 1.7;
  }

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    h3 {
      font-size: calc(1.2rem + 0.4vw);
    }
  }
`;

const Education: React.FC = () => {
  return (
    <Layout title="My Education">
      <ContentSection>
        <h2>Educational Background</h2>

        <h3>Boston University</h3>
        <p>Majoring in Computer Science</p>

        <h3>Completed a lot of coursework...</h3>
        <p>CS 392 M1, CS 351, CS 595, CS 598 were some of my favorites.</p>
      </ContentSection>
    </Layout>
  );
};

export default Education;
