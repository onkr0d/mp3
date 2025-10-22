import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Calculator from '../components/Calculator';

const ProjectsSection = styled.section`
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

const Projects: React.FC = () => {
  return (
    <Layout title="My Projects">
      <ProjectsSection>
        <h2>My Projects</h2>
        <p>Here are some of my featured projects and work samples.</p>

        <div>
          <div>
            <h3>Titanic</h3>
            <a href="https://github.com/onkr0d/titanic/" target="_blank" rel="noopener">https://github.com/onkr0d/titanic/</a>
            <p>Full stack solution to upload and compress videos to a home server without exposing ports and with a low compute and memory budget</p>
          </div>

          <div>
            <h3>FiFi - Financial Fitness</h3>
            <a href="https://github.com/onkr0d/cs-411-project/" target="_blank" rel="noopener">https://github.com/onkr0d/cs-411-project/</a>
            <p>Full stack project for CS 411 - ChatGPT wrapped with Plaid financial data</p>
          </div>

          <div>
            <h3>Le-AMM</h3>
            <a href="https://github.com/s-alad/le-AMM" target="_blank" rel="noopener">https://github.com/s-alad/le-AMM</a>
            <p>Automated market maker with AWS Nitro Enclave</p>
          </div>
        </div>
      </ProjectsSection>

      <p>Lots more can be found at my <a href="https://github.com/onkr0d" target="_blank" rel="noopener">GitHub</a></p>
      <br />
      <p>Oh, and here's a calculator:</p>

      <Calculator />
    </Layout>
  );
};

export default Projects;
