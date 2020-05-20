const path = require(`path`);
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const { data } = await graphql(`{ allContentfulMyBlog { edges { node { slug } } } }`);
	data.allContentfulMyBlog.edges.forEach(({ node }) => {
		createPage({
			path: `blog/${node.slug}`,
			component: path.resolve('./src/templates/blog-template.js'),
			context: { slug: node.slug }
		});
	});
};
