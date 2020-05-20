import React from 'react';
import Layout from '../components/global/layout/Layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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

export default function BlogTemplate({ data }) {
	console.log(data);

	const options = {
		renderNode: {
			'embedded-asset-block': (node) => {
				return <img src={node.data.target.fields.file['en-US'].url} />;
			}
		}
	};

	const { json } = data.contentfulMyBlog.richdata;
	return <Layout>{documentToReactComponents(json, options)}</Layout>;
}
