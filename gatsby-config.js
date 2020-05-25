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
		siteUrl: 'http://kishokanth.com', // No trailing slash allowed!
		image: 'https://i.ibb.co/T4nfB1c/Landing-page-image.jpg',
		twitterUsername: '@kishojegan',
		author: 'Kishokanth Jeganathan'
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'http://kishokanth.com',
				sitemap: 'http://kishokanth.com/sitemap.xml',
				policy: [ { userAgent: '*', allow: '/' } ]
			}
		},
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
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`
	]
};
