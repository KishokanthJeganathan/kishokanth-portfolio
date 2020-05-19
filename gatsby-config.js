/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
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
		`gatsby-plugin-sharp`
	]
};
