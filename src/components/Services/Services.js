import React, { useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';

import WebIcon from '../../assets/web.svg';
import AppIcon from '../../assets/app.svg';
import ScriptIcon from '../../assets/script.svg';

import './Services.scss';

const Services = () => {
	const [services] = useState([
		{
			type: 'Páginas Web',
			description: 'Desarrollamos páginas web rápidas y seguras',
			icon: <WebIcon className='service-card-logo' />
		},
		{
			type: 'Aplicaciones Web',
			description: 'Desarrollamos aplicaciones web para tu negocio y tus clientes',
			icon: <AppIcon className='service-card-logo' />
		},
		{
			type: 'Automatizaciones',
			description: 'Automatizamos procesos repetitivos y tediosos',
			icon: <ScriptIcon className='service-card-logo' />
		}
	]);

	return (
		<div className='services-container'>
				<h2>Servicios</h2>
			<div className='services-cards-container'>
				{services.map(service => {
					const { type, description, icon } = service;
					return (
						<ServicesCard key={type} title={type} description={description} icon={icon} />
					);
				})}
			</div>
		</div>
	);
};

export default Services;
