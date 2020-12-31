import React from 'react';

import './ServicesCard.scss';

const ServicesCard = ({ title, description, icon }) => {
	return (
		<div className='services-card'>
			<div className='service-card-title-container'>
				<div className='service-card-logo-container'>{icon}</div>
				<h3 className='service-card-title'>{title}</h3>
			</div>
			<p className='service-card-body'>{description}</p>
		</div>
	);
};

export default ServicesCard;
