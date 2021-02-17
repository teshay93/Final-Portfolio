import React from "react";
import styled from 'styled-components';

const Card = () => {
  return (
    <>
      <Skills>
        <div className="card-content">
          <h1>Skills and Tools</h1>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>BootStrap 4</li>
            <li>React</li>
            <li>React Native</li>
            <li>Express</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>Visual Studio Code</li>
            <li>Editor X</li>
            <li>Photoshop</li>
            <li>Notion</li>
          </ul>
        </div>
      </Skills>
    </>
  );
};

const Skills = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }


h1 {
  font-weight: lighter;
  font-size: 48px;
  font-family: "IBM Plex Serif", serif;
  color: black;
  text-align: center;
  padding: 1rem 0rem 4rem 0rem;
}
`;
export default Card;
