import styled from 'styled-components';

export const Nav = styled.div`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;

  h1 {

  } 

  a {
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 8rem;
    position: relative;
    font-family: "Brygada 1918", serif;
    font-size: 20px;
  }
`;

export const NavbarContainer = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-left: 50px;
padding-right: 50px;

@media screen and (max-width: 991px) {
  padding-right: 30px;
  padding-left: 30px;
}
`;
