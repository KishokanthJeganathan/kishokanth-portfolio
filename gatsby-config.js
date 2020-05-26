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
		siteUrl: 'https://kishokanth.com', // No trailing slash allowed!
		image: 'https://i.ibb.co/T4nfB1c/Landing-page-image.jpg',
		twitterUsername: '@kishojegan',
		author: 'Kishokanth Jeganathan'
	},
	plugins: [
		{
			resolve: `gatsby-plugin-gdpr-cookies`,
			options: {
				googleAnalytics: {
					trackingId: 'UA-167579751-1', // leave empty if you want to disable the tracker
					cookieName: 'gatsby-gdpr-google-analytics', // default
					anonymize: true, // default
					head: true,

					respectDNT: true,
					pageTransitionDelay: 0
				},
				googleTagManager: {
					trackingId: '', // leave empty if you want to disable the tracker
					cookieName: 'gatsby-gdpr-google-tagmanager', // default
					dataLayerName: 'dataLayer' // default
				},
				facebookPixel: {
					pixelId: '', // leave empty if you want to disable the tracker
					cookieName: 'gatsby-gdpr-facebook-pixel' // default
				},
				// defines the environments where the tracking should be available  - default is ["production"]
				environments: [ 'production', 'development' ]
			}
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://kishokanth.com',
				sitemap: 'https://kishokanth.com/sitemap.xml',
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
		{
			resolve: `gatsby-plugin-hotjar`,
			options: {
				id: '1827115',
				sv: '6'
			}
		},
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: `https://kishokanth.com`
			}
		},

		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`
	]
};
