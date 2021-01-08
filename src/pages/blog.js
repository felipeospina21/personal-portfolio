import React from 'react';
import { graphql } from 'gatsby';
import PostPreview from '../components/PostPreview/PostPreview';
import SEO from '../components/seo';
import Layout from '../components/Layout/Layout'

import '../components/PostPreview/PostPreview.scss';
import TagsFilter from '../components/TagsFilter/TagsFilter';


const BlogPageTemplate = ({
	data: {
		allMdx: { edges }
	}
}) => {
	return (
		<Layout>
			<SEO title='Blog' />
			<h1 className='blog-page-title'>Blog</h1>
			<p className='blog-page-excerpt'>Acá podrás encontrar artículos cortos sobre desarrollo web y tecnología.</p>
			<div>
				{edges.map(edge=>{
					return <TagsFilter key={edge.node.id} tags={edge.node.frontmatter.tags}/>
				})}
			</div>
			<div className='post-link-wrapper'>
				{edges.map(edge => (
					<PostPreview key={edge.node.id} post={edge.node} />
				))}
			</div>
		</Layout>
	);
};

export default BlogPageTemplate;

export const BlogPageQuery = graphql`
	query {
		allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
						tags
					}
					fields {
						slug
					}
				}
			}
		}
	}
`;
