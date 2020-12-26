import React from 'react';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import ContactForm from '../components/ContactForm/ContactForm';
import Layout from '../components/Layout/Layout';

const contacto = () => {
	return (
		<Layout>
			<ContactForm />
			<ContactInfo />
		</Layout>
	);
};

export default contacto;
