import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import '../components/PostPreview/PostPreview.scss';
import PostsFilter from '../components/PostsFilter/PostsFilter';

const BlogPageTemplate = ({ data }) => {
	return (
		<>
			<SEO title='Blog' />
			<h1 className='blog-page-title'>Blog</h1>
			<p className='blog-page-excerpt'>
				Acá podrás encontrar artículos cortos sobre desarrollo web y tecnología.
			</p>
			<PostsFilter data={data} />
		</>
	);
};

export default BlogPageTemplate;

export const BlogPageQuery = graphql`
	query {
		allMdx(
			filter: { frontmatter: { templateKey: { eq: "blog" } } }
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
