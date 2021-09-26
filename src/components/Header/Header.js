import React, { useState } from "react";
import { Link } from "gatsby";
import { ImPower as Logo } from "react-icons/im";
import { FaBars as MenuIcon } from "react-icons/fa";
import { FaTimes as CloseIcon } from "react-icons/fa";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import SocialContainer from "../SocialContainer/SocialContainer";
import NavLinks from "../NavLinks/NavLinks";
import "./Header.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const breakpoints = useBreakpoint();

  function toggleNav() {
    setShowMenu(currentState => !currentState);
  }
  return (
    <div className='header '>
      <Link to='/' className='logo'>
        <Logo />
      </Link>
      {showMenu ? (
        <CloseIcon className='toggle-menu' onClick={toggleNav} />
      ) : (
        <MenuIcon className='toggle-menu' onClick={toggleNav} />
      )}
      {showMenu && breakpoints.md ? <NavLinks toggleNav={toggleNav} /> : null}
      {breakpoints.md ? null : <NavLinks toggleNav={toggleNav} />}
      {breakpoints.md ? null : <SocialContainer />}
    </div>
  );
};
export default Header;
