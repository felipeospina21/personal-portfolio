import React from 'react';
import './TagsFilter.scss';

const TagsFilter = ({ categories }) => {
	const filterCategory = categoryName => {
		// categories.filter()
		const filter = categories.filter(category => category.name === categoryName);
		console.log(filter[0].name);
	};

	return (
		<div className='tags-filter-wrapper'>
			<div className='tags-filter-line'></div>
			<h4 className='tags-filter-title'>Tags</h4>
			<div className='tags-filter-container'>
				{categories.map(category => {
					return (
						<button
							key={category.name}
							onClick={() => filterCategory(category.name)}
							className='tags-filter-categorie'>
							{category.name}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default TagsFilter;
