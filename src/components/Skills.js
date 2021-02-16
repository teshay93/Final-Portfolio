import React from 'react';
import styled from 'styled-components';
// import { Container } from '../pages/styles';

const Skills = () => {
    return (
      <>
      <Container>
        <div className="skill-list">
          <h1>Skills</h1>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>BootStrap 4</li>
            <li>React</li>
            <li>React Native</li>
            <li>Express</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
          </ul>
        </div>
        
        <div className="tools">
          <h1>Tools</h1>
          <ul>
            <li>Visual Studio Code</li>
            <li>Editor X</li>
            <li>Photoshop</li>
            <li>Notion</li>
          </ul>
        </div>
      </Container>
      </>
    );
};

const Container = styled.div`
z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;
  background-size: cover;
justify-content: center;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export default Skills;
