import React, { useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import { BiLock, BiRocket, BiSortUp, BiAccessibility} from "react-icons/bi";

import './Services.scss';

const Services = () => {
	const [services] = useState([
		{
			title: 'Velocidad',
			description:
				'Tu página tendrá una velocidad de carga incomparable, mejorando la experiencia del usuario.',
			icon: <BiRocket className='service-card-logo' />
		},
		{
			title: 'Seguridad',
			description:
				'Puedes estar tranquilo con la seguridad de tu página web ante acciones maliciosas como los famosos ataques DDOS.',
			icon: <BiLock className='service-card-logo' />
		},
		{
			title: 'Escalabilidad',
			description:
				'Tu página puede crecer según tus necesidades de manera fácil',
			icon: <BiSortUp className='service-card-logo' />
		},
		{
			title: 'Accesibilidad',
			description:
				'Todas las personas podrán acceder a tu página, sin importar si tienen limitaciones físicas.',
			icon: <BiAccessibility className='service-card-logo' />
		}
	]);

	return (
		<div className='services-container'>
				<h2 className='services-container-title'>características</h2>
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
