import React from 'react';
import './TagsFilter.scss';

const TagsFilter = ({ categories, filterPostsByCategory, filterAllPosts }) => {
	return (
		<div className='tags-filter-wrapper'>
			<div className='tags-filter-line'></div>
			<h4 className='tags-filter-title'>Tags</h4>
			<div className='tags-filter-container'>
				<button className='tags-filter-category' onClick={() => filterAllPosts()}>
					All
				</button>
				{categories.map(category => {
					return (
						<button
							key={category.name}
							onClick={() => filterPostsByCategory(category.name)}
							className='tags-filter-category'>
							{category.name}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default TagsFilter;
