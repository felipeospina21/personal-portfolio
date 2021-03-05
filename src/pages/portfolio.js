import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import '../components/PostPreview/PostPreview.scss';
import PostsFilter from '../components/PostsFilter/PostsFilter';

const portfolioPage = ({ data }) => {
	return (
		<>
			<SEO title='Portfolio' />
			<h1 className='blog-page-title'>Portfolio</h1>
			<p className='blog-page-excerpt'>Web dev portfolio.</p>
			<PostsFilter data={data} />
		</>
	);
};

export default portfolioPage;

export const BlogPageQuery = graphql`
	query {
		allMdx(
			filter: { frontmatter: { templateKey: { eq: "portfolio" } } }
			sort: { order: DESC, fields: [frontmatter___date] }
		) {
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
						imgAltText
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
