import React from 'react';
import Layout from '../components/global/layout/Layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Col, Row } from 'react-bootstrap';
import styles from '../templates/blogTemplate.module.css';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

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

const Bold = ({ children }) => <p className={styles.bold}>{children}</p>;

export default function BlogTemplate({ data }) {
	console.log(data);

	const options = {
		renderMark: {
			[MARKS.BOLD]: (text) => <Bold>{text}</Bold>
		},
		renderText: (text) => text.replace('!', '?'),
		renderNode: {
			'embedded-asset-block': (node) => {
				return <img src={node.data.target.fields.file['en-US'].url} className={styles.img} />;
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
