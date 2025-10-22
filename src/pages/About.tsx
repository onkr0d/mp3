import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const ProfileImage = styled.img`
  max-width: 50%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

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

const About: React.FC = () => {
  return (
    <Layout title="About Me">
      <ProfileImage src="gojo.jpg" alt="Me" />
      <ContentSection>
        <h2>About Me</h2>
        <p>Hi! I'm Ivan, a full stack developer who likes to do all of the things. My hobbies include coding (duh),
          video games, volleyball and spending good time with friends :)</p>

        <h3>My Background</h3>
        <p>I don't specialize - I always look to expand my toolbox with new technologies and languages. I try to live by
          the "Jack of all trades, master of none, but still better than a master of one" motto. I'm really passionate
          about having the ability to implement any idea I have, and see it through till the end.</p>

        <h3>My Interests</h3>
        <p>When I'm not coding, I enjoy playing video games, sinking endless hours into side projects, and playing
          dungeons and dragons 🎲⚔️🐉 </p>
      </ContentSection>
    </Layout>
  );
};

export default About;
