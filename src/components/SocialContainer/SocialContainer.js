import React from 'react';
import { RiInstagramLine, RiLinkedinLine, RiGithubLine } from 'react-icons/ri';
import './SocialContainer.scss';

const SocialContainer = () => {
	return (
		<div className='social-wrapper'>
			<div className='social-container'>
				<a
					href='https://www.linkedin.com/in/felipe-ospina-b865b969'
					rel='noreferrer'
					target='_blank'>
					<RiLinkedinLine className='social-container-logo' />
				</a>
				<a href='https://www.instagram.com/automata.dev' rel='noreferrer' target='_blank'>
					<RiInstagramLine className='social-container-logo' />
				</a>
				<a href='https://github.com/felipeospina21' rel='noreferrer' target='_blank'>
					<RiGithubLine className='social-container-logo' />
				</a>
			</div>
		</div>
	);
};

export default SocialContainer;
