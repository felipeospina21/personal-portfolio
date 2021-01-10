import React, { useState } from 'react';
import './Infographics.scss';

const Infographics = () => {
	const [facts] = useState([
		'Antes de realizar una compra, el 80% de las personas busca en internet algún tipo de referencia sobre la empresa ',
		'Tu negocio tiene visibilidad 24/7 y puedes diseñar y personalizar tu "vitrina" online para que sea atractiva para tus clientes'
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
