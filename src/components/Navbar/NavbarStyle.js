import styled from 'styled-components';

export const Nav = styled.div`
background: lightgreen;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
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
