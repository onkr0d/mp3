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

const Experience: React.FC = () => {
  return (
    <Layout title="My Experience">
      <ContentSection>
        <h2>Professional Experience</h2>

        <h3>Fidelity Investments</h3>
        <p>(June 2025 - August 2025) Interned at Fidelity Investments, working on the debt tool</p>

        <h3>Fidelity Investments</h3>
        <p>(June 2024 - August 2024) Interned on the Fidelity Digital Assets team, working on internal tooling to boost productivity.</p>

        <h3>Titanic</h3>
        <p>
          Building a really really really cool project:
          <a href="https://github.com/onkr0d/titanic/" target="_blank" rel="noopener">https://github.com/onkr0d/titanic/</a>,
          <a href="https://titanic.ivan.boston/" target="_blank" rel="noopener">https://titanic.ivan.boston/</a>
          <small>(ask me about it!)</small>
        </p>
      </ContentSection>
    </Layout>
  );
};

export default Experience;
