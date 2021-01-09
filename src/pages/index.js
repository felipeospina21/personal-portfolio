import React from 'react';
import SEO from '../components/seo';
import Hero from '../components/Hero/Hero';
import Infographics from '../components/Infographics/Infographics';
import Services from '../components/Services/Services';
import ContactForm from '../components/ContactForm/ContactForm';

const IndexPage = () => (
	<>
		<SEO title='Home' />
		<Hero />
		<Infographics />
		<Services />
		<ContactForm name='home-contact' />
	</>
);

export default IndexPage;
