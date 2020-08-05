/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: 'Kishokanth.com',
		titleTemplate: '%s · The Real Hero',
		description:
			'Welcome to my portfolio where I showcase my web development work and write article with tips on front-end development',
		url: 'https://kishokanth.com', // No trailing slash allowed!
		image: 'https://i.ibb.co/T4nfB1c/Landing-page-image.jpg', // Path to your image you placed in the 'static' folder
		twitterUsername: '@kishojegan'
	},
	plugins: [
		{
			resolve: `gatsby-plugin-gdpr-cookies`,
			options: {
				googleAnalytics: {
					trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID, // leave empty if you want to disable the tracker
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
				endpoint: process.env.MAILCHIMP_ENDPOINT // add your MC list endpoint here; see instructions below
			}
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SOURCE_ID,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_ACESS_TOKEN
			}
		},
		{
			resolve: `gatsby-plugin-hotjar`,
			options: {
				id: process.env.HOTJAR_ID,
				sv: process.env.HOTJAR_SV
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
