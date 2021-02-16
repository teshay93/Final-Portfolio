import styled from "styled-components";
import colors from "../images/colors.jpg";

export const Container = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  background-image: url(${colors});
  background-size: cover;
  justify-content: center;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Description = styled.div`
  flex: 1;

  h2 {
    font-weight: 900;
    font-style: normal;
    font-size: 54px;
    line-height: 75px;
    color: #000;
    margin-bottom: 14px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 36px;
`;

export const Image = styled.div`
  flex: 1;
  img {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    box-shadow: 0px 7px 7px rgb(138, 136, 136);
  }
`;
