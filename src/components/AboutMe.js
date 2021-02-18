import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Skills data-aos="fade-up">
        <div className="card-content">
          <h1>About Me</h1>
          <h3>Who am I?</h3>
          <p>
            I am a Frontend Web Developer based in NC. I completed Nucamp's
            Full-Stack Developer Bootcamp. I work mainly with React framework to
            create and develop user interfaces and web applications. Here are a
            few technologies I've also been working with recently:
          </p>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>BootStrap 4</li>
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
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: lightgreen; */

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
    padding: 0rem 0rem 4rem 0rem;
  }
`;
export default AboutMe;
