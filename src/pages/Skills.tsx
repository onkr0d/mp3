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

const Skills: React.FC = () => {
  return (
    <Layout title="My Skills">
      <ContentSection>
        <h2>Skills</h2>

        <h3>Front-end Development</h3>
        <ul>
          <li>CSS + HTML</li>
          <li>TS, JS, Python, Go, Java, Rust</li>
          <li>React, Node.js, Flask</li>
        </ul>

        <h3>Back-end Development</h3>
        <ul>
          <li>Python, Go, Java, Rust</li>
          <li>Flask, Express, Node.js, GCP, AWS</li>
        </ul>

        <small>(yeah that's full stack)</small>
        <h3>Tools & Technologies</h3>
        <ul>
          <li>Git</li>
          <li>Firebase, Bun.sh!!</li>
          <li>VSC, IDEA</li>
        </ul>
      </ContentSection>
    </Layout>
  );
};

export default Skills;
