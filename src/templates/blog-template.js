import React from 'react';
import Layout from '../components/global/layout/Layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Col, Row } from 'react-bootstrap';
import styles from '../templates/blogTemplate.module.css';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
					src
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
				return <img src={node.data.target.fields.file['en-US'].url} className={styles.img} />;
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
	return (
		<Layout>
			<Col>
				<Row className={styles.row}>
					<Col xs={12} md={10}>
						{documentToReactComponents(json, options)}
					</Col>
				</Row>
			</Col>
		</Layout>
	);
}
