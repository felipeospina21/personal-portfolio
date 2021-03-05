const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;

	// const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`);

	const result = await graphql(`
		{
			allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
				edges {
					node {
						id
						fields {
							slug
						}
						frontmatter {
							title
							templateKey
						}
					}
				}
			}
		}
	`);

	// Handle errors
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	result.data.allMdx.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: path.resolve(
				`./src/templates/${String(node.frontmatter.templateKey)}.js`
			),
			context: {
				// additional data can be passed via context
				id: node.id
			}
		});
	});
};

// Create Page Slug
exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `Mdx`) {
		const slug = createFilePath({ node, getNode });
		createNodeField({
			node,
			name: `slug`,
			value: slug
		});
	}
};
