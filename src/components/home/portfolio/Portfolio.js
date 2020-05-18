import React from 'react';
import Tittle from '../../global/Tittle/Tittle';
import { Col, Row } from 'react-bootstrap';
import ContentHolder from '../../global/contentHolder/ContentHolder';
import { graphql, useStaticQuery } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';

const query = graphql`
	{
		allContentfulMyPortfolio(filter: { featureOnHomepage: { eq: true } }, sort: { fields: order, order: ASC }) {
			nodes {
				slug
				order
				nameOfProject
				featureOnHomepage
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
			}
		}
		contentfulSectionTittles {
			tittle
			subtittle
		}
	}
`;

export default function Portfolio() {
	const data = useStaticQuery(query);
	const singleProject = data.allContentfulMyPortfolio.nodes;
	console.log(singleProject);

	const { subtittle, tittle } = data.contentfulSectionTittles;
	return (
		<section>
			<Tittle tittle={`${tittle} 🙌`} subtittle={`${subtittle} `} />
			<Col>
				<Row>
					{singleProject.map((project) => (
						<ContentHolder
							xs="12"
							sm="6"
							key={uuidv4()}
							nameOfProject={project.nameOfProject}
							src={project.headerimage.fluid}
							intro={project.projectIntro.internal.content}
							slug={project.slug}
						/>
					))}
				</Row>
			</Col>
		</section>
	);
}
