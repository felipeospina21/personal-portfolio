import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

import './Footer.scss';

const Footer = () => {
	return (
		<div>
			<div className='footer'>
				<div className='footer-contact'>
					<p>Medellín, Colombia</p>
					{/* <p>telefono o correo</p> */}
				</div>
				<div className='social-logos-wrapper'>
					<a href='https://www.instagram.com/automata.dev' rel='noreferrer' target='_blank'>
						<FaInstagram className='social-logos' />
					</a>
					<a href='https://www.linkedin.com/in/felipe-ospina-b865b969' rel='noreferrer' target='_blank'>
						<FaLinkedin className='social-logos' />
					</a>
					<a href='https://github.com/felipeospina21' rel='noreferrer' target='_blank'>
						<FaGithub className='social-logos' />
					</a>
				</div>
			</div>
			<div className='created-by'>Creado por Felipe Ospina</div>
		</div>
	);
};

export default Footer;
