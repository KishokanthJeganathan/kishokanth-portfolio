/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: 'Kishokanth.com',
		titleTemplate: '%s | Kishokanth.com',
		description:
			'Welcome to my portfolio where I showcase my web development work and write article with tips on front-end development',
		url: 'https://relaxed-lalande-6a9cb4.netlify.app', // No trailing slash allowed!
		image: '/Image.jpg', // Path to your image you placed in the 'static' folder
		twitterUsername: '@kishojegan',
		author: 'Kishokanth Jeganathan'
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint:
					'https://gmail.us18.list-manage.com/subscribe/post?u=ba989a9bece1d2c3783cc995b&amp;id=a9fc174077' // add your MC list endpoint here; see instructions below
			}
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `x7h3t1vvhyg3`,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: `dhVJpVQBppuvMv-Mjw_E_44PenQra3jVn-s8nvKMDFc`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`
	]
};
