import React from "react";
import selfie2 from "../images/selfie2.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
// import styled from 'styled-components';
import { Description, Wrapper } from "../pages/styles";

const Intro = () => {
  const SecAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 4 } },
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Description>
            <Bounce left delay={2000}>
              <h2>Hey, I'm Ashley</h2>
            </Bounce>
            <Bounce delay={3000}>
              <p>I'm a creative Designer and Frontend Web Developer.</p>
            </Bounce>
            <motion.a
              href="#"
              variants={SecAnim}
              initial="hidden"
              animate="show"
            >
              Contact Me
            </motion.a>
          </Description>
          <Fade right delay={1000}>
            <Image>
              <img src={selfie2} alt="my face" />
            </Image>
          </Fade>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 0rem 4rem 0rem;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }

  a {
    color: white;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    border-radius: 8px;
    padding: 12px 36px;
    display: inline-block;
    transition: 300ms;
    background: lightgreen;
  }
  a:hover {
    transform: translate(8px);
  }

  h2 {
    font-weight: lighter;
    font-size: 48px;
    font-family: "IBM Plex Serif", serif;
    color: white;
  }

  p {
    font-size: 24px;
    font-family: "IBM Plex Serif", serif;
    line-height: 42px;
    color: #000;
    width: 418px;
    margin-bottom: 48px;
    padding: 0px 30px 0px 0px;
    color: white;
  }
`;

const Image = styled.div`
  flex: 1;
  img {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    box-shadow: 0px 7px 7px rgb(000, 000, 000);
  }
`;

export default Intro;
