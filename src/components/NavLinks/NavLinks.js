import React from "react";
import { Link } from "gatsby";
import "./NavLinks.scss";

function NavLinks({ toggleNav }) {
  return (
    <ul className='nav-links'>
      <li className='nav-links-container'>
        <Link to='/portfolio' onClick={toggleNav}>
          Portafolio
        </Link>
      </li>
      <li className='nav-links-container'>
        <Link to='/blog' onClick={toggleNav}>
          Blog
        </Link>
      </li>
    </ul>
  );
}

export default NavLinks;
