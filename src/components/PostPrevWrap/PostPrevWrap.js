import React from 'react';
import PostPreview from '../PostPreview/PostPreview';
import './PostPrevWrap.scss'

const PostPrevWrap = ({postsArray}) => {
	return (
		<div className='post-prev-wrapper'>
			{postsArray.map(post => (
				<PostPreview key={post.node.id} post={post.node} />
			))}
		</div>
	);
};

export default PostPrevWrap;
