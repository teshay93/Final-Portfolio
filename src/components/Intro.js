import React from 'react';
import selfie2 from '../images/selfie2.png';
// import styled from 'styled-components';
import {Container, Description, Wrapper, Image} from '../pages/styles';

const Intro = () => {
    return (
      <>
        <Container>
          <Wrapper>
            <Description>
              <h2>Hey, I'm Ashley</h2>
              <p>I'm a creative Designer and Frontend Web Developer.</p>
              <a href="#">Contact Me</a>
            </Description>
            <Image>
              <img src={selfie2} alt="my face" />
            </Image>
          </Wrapper>
        </Container>
      </>
    );
};





export default Intro;
