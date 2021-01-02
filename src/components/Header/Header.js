import React from 'react';
import { Link } from 'gatsby';
import { ImPower as Logo } from 'react-icons/im';
import SocialContainer from '../SocialContainer/SocialContainer';

import './Header.scss';

const Header = () => {
	return (
		<div className='header '>
			<Link to='/' className='logo'>
				<Logo />
			</Link>
			<div className='nav-links'>
				<Link to='/blog'>Blog</Link>
			</div>
			<SocialContainer />
		</div>
	);
};
export default Header;
