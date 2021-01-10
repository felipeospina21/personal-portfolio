import React from 'react';
import { Link } from 'gatsby';
import DateContainer from '../DateContainer/DateContainer';
import TagsContainer from '../TagsContainer/TagsContainer';
import ImageBlog from '../ImageBlog';
import './PostPreview.scss';

const PostPreview = ({ post }) => {
	return (
		<div className='post-preview-wrapper'>
			<Link to={post.fields.slug}>
				<div className='post-preview-container'>
					<div className='post-preview-img-container'>
						<ImageBlog
							className='post-preview-img'
							src={post.frontmatter.thumbnail}
							alt={post.frontmatter.imgAltText}
						/>
					</div>
					<div className='post-preview-text-container'>
						<h1 className='post-preview-title'>{post.frontmatter.title}</h1>
						<small>
							<DateContainer date={post.frontmatter.date} />
							<TagsContainer tags={post.frontmatter.tags} />
						</small>
						<p>{post.frontmatter.description}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default PostPreview;
