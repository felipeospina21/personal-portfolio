import React, { useState } from 'react';
import TagsFilter from '../TagsFilter/TagsFilter';
import PostPrevWrap from '../PostPrevWrap/PostPrevWrap';
import '../PostPreview/PostPreview.scss';

const PostsFilter = ({ data }) => {
	const allPosts = [...data.allMdx.edges];
	const [filteredPosts, setFilteredPosts] = useState([]);

	const filterPostsByCategory = categoryName => {
		const filterByCategory = allPosts.filter(post =>
			post.node.frontmatter.tags.includes(categoryName)
		);
		setFilteredPosts(filterByCategory);
	};

	const filterAllPosts = () => {
		setFilteredPosts(allPosts);
	};

	return (
		<>
			<TagsFilter
				categories={data.contentYaml.categories}
				filterAllPosts={filterAllPosts}
				filterPostsByCategory={filterPostsByCategory}
			/>
			{filteredPosts.length < 1 ? (
				<PostPrevWrap postsArray={allPosts} />
			) : (
				<PostPrevWrap postsArray={filteredPosts} />
			)}
		</>
	);
};

export default PostsFilter