import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const query = graphql`
	query($slug: String) {
		contentfulMyPortfolio(slug: { eq: $slug }) {
			nameOfProject
			projectIntro {
				internal {
					content
				}
			}
		}
	}
`;

export default function caseStudy({ data }) {
	console.log(data);
	return <div>I am a case study</div>;
}
