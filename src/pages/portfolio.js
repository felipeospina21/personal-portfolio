import React from 'react';

const portfolio = () => {
	return <div></div>;
};

export default portfolio;
// import { graphql } from 'gatsby';
// import SEO from '../components/seo';
// import TagsFilter from '../components/TagsFilter/TagsFilter';
// import PostPrevWrap from '../components/PostPrevWrap/PostPrevWrap';
// import '../components/PostPreview/PostPreview.scss';

// const portfolioPage = ({ data }) => {
// 	const allPosts = [...data.allMdx.edges];
// 	// const [filteredPosts, setFilteredPosts] = useState([]);

// 	// const filterPostsByCategory = categoryName => {
// 	// 	const filterByCategory = allPosts.filter(post =>
// 	// 		post.node.frontmatter.tags.includes(categoryName)
// 	// 	);
// 	// 	setFilteredPosts(filterByCategory);
// 	// };

// 	// const filterAllPosts = () => {
// 	// 	setFilteredPosts(allPosts);
// 	// };

// 	return (
// 		<>
// 			<SEO title='Blog' />
// 			<h1 className='blog-page-title'>Blog</h1>
// 			<p className='blog-page-excerpt'>
// 				Acá podrás encontrar artículos cortos sobre desarrollo web y tecnología.
// 			</p>
// 			<TagsFilter
// 				categories={data.contentYaml.categories}
// 				filterAllPosts={filterAllPosts}
// 				filterPostsByCategory={filterPostsByCategory}
// 			/>
// 			{filteredPosts.length < 1 ? (
// 				<PostPrevWrap postsArray={allPosts} />
// 			) : (
// 				<PostPrevWrap postsArray={filteredPosts} />
// 			)}
// 		</>
// 	);
// };

// export default portfolioPage;

// export const BlogPageQuery = graphql`
// 	query {
// 		allMdx(
// 			filter: { frontmatter: { templateKey: { eq: "blog" } } }
// 			sort: { order: DESC, fields: [frontmatter___date] }
// 		) {
// 			edges {
// 				node {
// 					id
// 					excerpt(pruneLength: 50)
// 					frontmatter {
// 						date(formatString: "MMMM DD, YYYY")
// 						title
// 						description
// 						tags
// 						thumbnail
// 						imgAltText
// 					}
// 					fields {
// 						slug
// 					}
// 				}
// 			}
// 		}
// 		contentYaml {
// 			categories {
// 				name
// 			}
// 		}
// 	}
// `;
