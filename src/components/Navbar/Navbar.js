import React from "react";
import { Nav } from './NavbarStyle';

const Navbar = () => {
  return (
   
      <Nav>
        <h1><a href="#">LOGO</a></h1>
          <ul>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        
      </Nav>
    
  );
};

export default Navbar;
