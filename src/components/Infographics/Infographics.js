import React, { useState } from 'react';
import './Infographics.scss';

const Infographics = () => {
	const [facts] = useState([
		'el 80% de las personas busca una empresa en internet antes de comprarle',
		'Tu negocio tiene visibilidad 24/7'
	]);
	return (
		<div className='Infographics-container'>
			{facts.map((fact, index) => {
				return (
					<section key={index} className='Infographics-section'>
						<p>{fact}</p>
					</section>
				);
			})}
		</div>
	);
};

export default Infographics;
