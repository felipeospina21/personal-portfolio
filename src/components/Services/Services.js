import React, { useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import WebIcon from '../../assets/web.svg';
import AppIcon from '../../assets/app.svg';
import ScriptIcon from '../../assets/script.svg';

import './Services.scss';

const Services = () => {
	const [services] = useState([
		{
			title: 'Velocidad',
			description:
				'Tu página tendrá una velocidad de carga incomparable, mejorando la experiencia del usuario.',
			icon: <WebIcon className='service-card-logo' />
		},
		{
			title: 'Seguridad',
			description:
				'Puedes estar tranquilo con la seguridad de tu página web ante acciones maliciosas como los famosos ataques DDOS.',
			icon: <AppIcon className='service-card-logo' />
		},
		{
			title: 'Escalabilidad',
			description:
				'Tu página puede crecer según tus necesidades de manera fácil',
			icon: <ScriptIcon className='service-card-logo' />
		},
		{
			title: 'Accesibilidad',
			description:
				'Todas las personas podrán acceder a tu página, sin importar si tienen limitaciones físicas.',
			icon: <WebIcon className='service-card-logo' />
		}
	]);

	return (
		<div className='services-container'>
				<h2>Beneficios</h2>
			<div className='services-cards-container'>
				{services.map(service => {
					const { title, description, icon } = service;
					return (
						<ServicesCard key={title} title={title} description={description} icon={icon} />
					);
				})}
			</div>
		</div>
	);
};

export default Services;
