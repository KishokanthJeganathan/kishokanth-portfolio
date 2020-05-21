import React from 'react';
import Layout from '../components/global/layout/Layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Col, Row } from 'react-bootstrap';
import styles from '../templates/blogTemplate.module.css';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Img from 'gatsby-image';
import globalstyles from '../components/global/global.module.css';
import SocialShare from '../components/global/SocialShare/SocialShare';
import NewsletterForm from '../components/home/newsletterForm/NewsletterForm';

export const query = graphql`
	query($slug: String) {
		contentfulMyBlog(slug: { eq: $slug }) {
			nameOfProject
			published(formatString: "MMMM Do, YYYY")
			readingTime
			projectIntro {
				internal {
					content
				}
			}
			headerimage {
				fluid {
					...GatsbyContentfulFluid
				}
			}
			richdata {
				json
			}
		}
	}
`;

const website_url = 'http://localhost:8000/';

const Bold = ({ children }) => <p className={styles.bold}>{children}</p>;

const Code = ({ children }) => (
	<SyntaxHighlighter style={tomorrowNightEighties} className={styles.code}>
		{children}
	</SyntaxHighlighter>
);

export default function BlogTemplate({ data }) {
	console.log(data);

	const options = {
		renderMark: {
			[MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
			[MARKS.CODE]: (text) => <Code>{text}</Code>
		},
		renderText: (text) => text.replace('!', '?'),
		renderNode: {
			'embedded-asset-block': (node) => {
				return (
					<img
						src={node.data.target.fields.file['en-US'].url}
						className={styles.img}
						alt={node.data.target.fields.title['en-US']}
					/>
				);
			},
			[INLINES.HYPERLINK]: (node) => {
				return (
					<a
						href={node.data.uri}
						target={`${node.data.uri.startsWith(website_url) ? '_self' : '_blank'}`}
						rel={`${node.data.uri.startsWith(website_url) ? '' : 'noopener noreferrer'}`}
					>
						{node.content[0].value}
					</a>
				);
			}
		}
	};

	const { json } = data.contentfulMyBlog.richdata;
	const url = 'https://medium.com/free-code-camp/how-to-animate-page-transitions-in-gatsby-js-b36e3ae14c29';

	return (
		<Layout>
			<Col>
				<Row className={styles.row}>
					<Col xs={12} md={10} className={styles.image}>
						<Img fluid={data.contentfulMyBlog.headerimage.fluid} />
						<h1 className={styles.h1}>{data.contentfulMyBlog.nameOfProject}</h1>
						<p className={styles.publishedDate}>{`Published on ${data.contentfulMyBlog.published}`}</p>
						<p>{`${data.contentfulMyBlog.readingTime} min read`}</p>
					</Col>
					<Col xs={12} md={10} className={styles.content}>
						{documentToReactComponents(json, options)}
					</Col>
					<SocialShare url={url} xs={9} md={4} />
				</Row>
			</Col>
		</Layout>
	);
}
