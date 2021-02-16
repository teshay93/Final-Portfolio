import React from 'react';
import selfie2 from '../images/selfie2.png';
import styled from 'styled-components';

const Intro = () => {
    return (
      <div>
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
      </div>
    );
};


const Container = styled.div`
  background-repeat: repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  /* min-width: 100%;
  min-height: 100vh; */

`;

const Description = styled.div`
flex: 1;

h2 {

}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 36px;
`;

const Image = styled.div`
  flex: 1;
  img {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    box-shadow: 0px 7px 7px rgb(138, 136, 136);
  }
`;


export default Intro;
