import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

import './Footer.scss';

const Footer = () => {
	return (
		<div>
			<div className='footer'>
				<div className='footer-contact'>
					<p>Medellin, Colombia</p>
					<p>telefono o correo</p>
				</div>
				<div className='social-logos-wrapper'>
					<a href='https://instagram.com/' rel='noreferrer' target='_blank'>
						<FaInstagram className='social-logos' />
					</a>
					<a href='' rel='noreferrer' target='_blank'>
						<FaLinkedin className='social-logos' />
					</a>
					<a href='' rel='noreferrer' target='_blank'>
						<FaGithub className='social-logos' />
					</a>
				</div>
			</div>
			<div className='created-by'>Creado por Felipe Ospina</div>
		</div>
	);
};

export default Footer;
