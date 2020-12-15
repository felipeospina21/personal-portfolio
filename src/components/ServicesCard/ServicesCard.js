import React from 'react';

import './ServicesCard.scss';

const ServicesCard = ({ title, description, icon }) => {
	return (
		<div className='services-card'>
			{icon}
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
};

export default ServicesCard;
