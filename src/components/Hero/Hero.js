import React from 'react';
import Image from '../image';
import SocialContainer from '../SocialContainer/SocialContainer';
import './Hero.scss';

const Hero = () => {
	return (
		<div className='hero-wrapper'>
			<Image className='hero-img' src='background3.jpg' />
			<div className='hero-container'>
				<h1>Hola, soy Felipe</h1>
				<h3>Dejame ayudarte a mejorar tu presencia online</h3>
			</div>
			<SocialContainer/>
			<button className='hero-btn'>Conversemos</button>
		</div>
	);
};

export default Hero;
