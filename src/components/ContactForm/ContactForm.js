import React from 'react';

import './ContactForm.scss';

const ContactForm = ({ name }) => {
	return (
		<>
			<h2 className='contact-form-title'>Contacto</h2>
			<form name='contact' method='POST' data-netlify='true' className='contact-form'>
				<input type='hidden' name={name} value='contact' />

				<div className='contact-form-input-container'>
					<label className='contact-form-label'>Nombre</label>
					<input className='contact-form-input' type='text' name='name' placeholder='Juan Perez' required />
				</div>

				<div className='contact-form-input-container'>
					<label className='contact-form-label'>Email</label>
					<input className='contact-form-input' type='email' name='email' placeholder='juan.perez@algunmail.com' required />
				</div>

				<div className='contact-form-input-container'>
					<label className='contact-form-label'>Mensaje</label>
					<textarea
						className='contact-form-text-area'
						name='message'
						rows='10'
						cols='30'
						placeholder='Cuentame cómo puedo ayudarte.'
						required></textarea>
				</div>

				<button className='contact-form-submit-btn' type='submit'>
					Enviar
				</button>
			</form>
		</>
	);
};

export default ContactForm;
