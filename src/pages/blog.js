import React, { useState } from 'react';
import { graphql } from 'gatsby';
import PostPreview from '../components/PostPreview/PostPreview';
import SEO from '../components/seo';
import TagsFilter from '../components/TagsFilter/TagsFilter';
import '../components/PostPreview/PostPreview.scss';

const BlogPageTemplate = ({ data }) => {
	const allPosts = [...data.allMdx.edges];
	const [posts, setPosts] = useState([]);

	const filterPostsByCategory = categoryName => {
		const filteredPosts = allPosts.filter(post =>
			post.node.frontmatter.tags.includes(categoryName)
		);
		setPosts(filteredPosts);
	};

	const filterAllPosts = () => {
		setPosts(allPosts);
	};

	return (
		<>
			<SEO title='Blog' />
			<h1 className='blog-page-title'>Blog</h1>
			<p className='blog-page-excerpt'>
				Acá podrás encontrar artículos cortos sobre desarrollo web y tecnología.
			</p>
			<TagsFilter
				categories={data.contentYaml.categories}
				filterAllPosts={filterAllPosts}
				filterPostsByCategory={filterPostsByCategory}
			/>
			<div className='post-link-wrapper'>
				{posts.map(post => (
					<PostPreview key={post.node.id} post={post.node} />
				))}
			</div>
		</>
	);
};

export default BlogPageTemplate;

export const BlogPageQuery = graphql`
	query {
		allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					id
					excerpt(pruneLength: 50)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
						tags
						thumbnail
					}
					fields {
						slug
					}
				}
			}
		}
		contentYaml {
			categories {
				name
			}
		}
	}
`;
